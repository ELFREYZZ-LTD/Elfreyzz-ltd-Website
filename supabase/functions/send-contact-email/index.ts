import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3.25.76";

const projectTypes = [
  "Access roads",
  "Sewer lines",
  "Piped water",
  "Structures",
  "Engineering survey",
  "Other",
] as const;

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(30).nullable().optional(),
  projectType: z.enum(projectTypes),
  message: z.string().trim().max(2000).nullable().optional(),
}).strict();

const jsonResponse = (body: unknown, status: number) => new Response(
  JSON.stringify(body),
  { status, headers: { ...corsHeaders, "Content-Type": "application/json" } },
);

const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;",
}[character] ?? character));

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return jsonResponse({ error: "Request body must be valid JSON" }, 400);
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return jsonResponse({ error: "Invalid contact submission", fields: parsed.error.flatten().fieldErrors }, 400);
    }

    const { name, email, phone, projectType, message } = parsed.data;

    const forwardedFor = req.headers.get("x-forwarded-for") ?? "";
    const ipAddress = (forwardedFor.split(",")[0]?.trim() || req.headers.get("x-real-ip")?.trim() || "")
      .slice(0, 100) || null;
    const userAgent = (req.headers.get("user-agent")?.trim() || "").slice(0, 500) || null;

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } },
    );

    const { error: insertError } = await supabase.from("contact_submissions").insert({
      name,
      email,
      phone: phone || null,
      project_type: projectType,
      message: message || null,
      ip_address: ipAddress,
      user_agent: userAgent,
    });

    if (insertError) {
      console.error("Insert error:", insertError);
      return jsonResponse({ error: insertError.message || "Unable to save contact submission" }, 400);
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : "Not provided";
    const safeProjectType = escapeHtml(projectType);
    const safeMessage = message ? escapeHtml(message).replace(/\n/g, "<br>") : "No message";

    let emailed = false;
    try {
      const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
      if (!RESEND_API_KEY) {
        throw new Error("RESEND_API_KEY is not configured");
      }

      const htmlBody = `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Name</td><td style="padding:8px;border-bottom:1px solid #ddd;">${safeName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Email</td><td style="padding:8px;border-bottom:1px solid #ddd;">${safeEmail}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Phone</td><td style="padding:8px;border-bottom:1px solid #ddd;">${safePhone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Project Type</td><td style="padding:8px;border-bottom:1px solid #ddd;">${safeProjectType}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Message</td><td style="padding:8px;border-bottom:1px solid #ddd;">${safeMessage}</td></tr>
        </table>
      `;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Elfreyzz Contact Form <noreply@elfreyzzltd.com>",
          to: ["eliud@elfreyzzltd.com"],
          subject: `New enquiry from ${name} – ${projectType}`,
          html: htmlBody,
          reply_to: email,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Resend error:", data);
      } else {
        emailed = true;
      }
    } catch (emailError) {
      console.error("Email notification error:", emailError);
    }

    return jsonResponse({ success: true, emailed }, 200);
  } catch (error) {
    console.error("Error handling contact submission:", error);
    return jsonResponse({ error: "Unable to process contact submission" }, 500);
  }
});

