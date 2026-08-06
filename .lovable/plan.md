# Capture IP Address and User Agent with Contact Submissions

## Constraint
A browser cannot read its own public IP address, so the IP must be captured server-side. The `send-contact-email` function already receives the submission and sees the request headers (`x-forwarded-for`, `user-agent`), making it the right place to record both values.

## Approach
Move the database insert from the browser into the `send-contact-email` edge function, so one server-side call both stores the row (with IP and user agent) and sends the notification email.

1. Edge function (`send-contact-email`):
   - Keep the existing Zod validation, HTML escaping and CORS behaviour.
   - Derive `ip_address` from the first entry of `x-forwarded-for` (fallback `x-real-ip`), and `user_agent` from the request's `user-agent` header, both trimmed and length-capped.
   - Insert the validated submission plus those two fields into `contact_submissions` using the service role key.
   - Return an error response if the insert fails; still return success when the row saves but email delivery fails, so a lead is never lost.
2. Frontend (`src/components/Contact.tsx`):
   - Stop inserting directly into `contact_submissions`; instead await the edge function invocation.
   - Show the existing success toast on success and the existing error toast when the call fails.

## Database
No migration needed — the `ip_address` and `user_agent` columns already exist and the `service_role` grant is in place. The anonymous insert policy stays untouched.

## Verification
Submit the form and confirm a new row contains a populated `ip_address` and `user_agent`, the notification email still arrives, and invalid input is still rejected with a clear message.
