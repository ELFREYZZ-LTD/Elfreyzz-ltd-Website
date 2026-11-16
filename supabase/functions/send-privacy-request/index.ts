import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.25.76";

const requestTypes = ["Access my data", "Correct my data", "Delete my data", "Object to or restrict processing"] as const;

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  requestType: z.enum(requestTypes),
  details: z.string().trim().min(10).max(2000),
  website: z.string().max(0).optional(), // honeypot
}).strict();

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

const esc = (v: string) => v.replace(/[&<>'"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c] ?? c));

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  let body: unknown;
  try { body = await req.json(); } catch { return json({ error: "Invalid JSON" }, 400); }
  const parsed = schema.safeParse(body);
  if (!parsed.success) return json({ error: "Invalid request", fields: parsed.error.flatten().fieldErrors }, 400);
  const { name, email, requestType, details } = parsed.data;

  const key = Deno.env.get("RESEND_API_KEY");
  if (!key) return json({ error: "Email service not configured" }, 500);

  const submittedAt = new Date().toISOString();
  const row = (k: string, v: string) =>
    `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">${k}</td><td style="padding:8px;border-bottom:1px solid #ddd;">${v}</td></tr>`;
  const html = `<h2>New Data Subject Rights Request (DPA 2019)</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
    ${row("Request type", esc(requestType))}${row("Name", esc(name))}${row("Email", esc(email))}
    ${row("Details", esc(details).replace(/\n/g, "<br>"))}${row("Submitted (UTC)", submittedAt)}
    </table><p>Respond without undue delay as required by the Data Protection Act, 2019.</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      from: "Elfreyzz Privacy Requests <noreply@elfreyzzltd.com>",
      to: ["eliud@elfreyzzltd.com"],
      subject: `Privacy request: ${requestType} – ${name}`,
      html,
      reply_to: email,
    }),
  });
  if (!res.ok) {
    console.error("Resend error:", await res.text());
    return json({ error: "Unable to send request" }, 502);
  }
  return json({ success: true }, 200);
});
