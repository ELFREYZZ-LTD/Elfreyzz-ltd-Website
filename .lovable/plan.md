

## Add Email Notifications for Contact Form Submissions

### Overview
When someone submits the contact form, an email notification will be sent to your company email (info@elfreyzz.co.ke) with all the submission details.

### Prerequisites (User Action Required)
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain (`elfreyzz.co.ke`) at https://resend.com/domains
3. Create an API key at https://resend.com/api-keys
4. Add the API key as a secret when prompted

### Implementation

#### 1. Create Edge Function: `send-contact-notification`

**File:** `supabase/functions/send-contact-notification/index.ts`

```typescript
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  message?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const submission: ContactSubmission = await req.json();
    
    // Send notification to company email
    await resend.emails.send({
      from: "Elfreyzz Website <noreply@elfreyzz.co.ke>",
      to: ["info@elfreyzz.co.ke"],
      subject: `New Contact Form: ${submission.projectType} - ${submission.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        <p><strong>Phone:</strong> ${submission.phone || 'Not provided'}</p>
        <p><strong>Project Type:</strong> ${submission.projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${submission.message || 'No message provided'}</p>
      `
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Error sending notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
```

#### 2. Update `supabase/config.toml`

Add the new function configuration:

```toml
[functions.send-contact-notification]
verify_jwt = false
```

#### 3. Update Contact Form Component

**File:** `src/components/Contact.tsx`

After successfully saving to the database, call the edge function to send the email notification:

```typescript
// After successful database insert
await supabase.functions.invoke('send-contact-notification', {
  body: {
    name: trimmedName,
    email: trimmedEmail,
    phone: formData.phone.trim() || null,
    projectType: formData.projectType,
    message: formData.message.trim() || null
  }
});
```

The email notification is sent as a "fire and forget" operation - if it fails, the form submission still succeeds (data is already saved in the database).

### Flow Diagram

```
User Submits Form
       |
       v
Save to Supabase Database
       |
       v
Call Edge Function (send-contact-notification)
       |
       v
Resend API sends email to info@elfreyzz.co.ke
       |
       v
Show success toast to user
```

### Summary

| Component | Change |
|-----------|--------|
| New Edge Function | `send-contact-notification` - sends email via Resend |
| Config Update | Add function to `supabase/config.toml` |
| Contact.tsx | Call edge function after database insert |
| Secret Required | `RESEND_API_KEY` - will prompt during implementation |

