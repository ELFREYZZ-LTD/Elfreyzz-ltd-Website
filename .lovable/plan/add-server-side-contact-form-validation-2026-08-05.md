# Add Server-Side Contact Form Validation

## Verified current state
- The browser writes contact submissions directly to Supabase, then separately invokes the public `send-contact-email` Edge Function.
- The form checks only non-empty trimmed name/email values; HTML email input validation is browser-side only.
- The Edge Function accepts an unvalidated JSON body and interpolates its fields directly into email HTML and the subject.
- The database table allows anonymous inserts but denies browser reads.

## Implementation
1. Add a database validation trigger for every new `contact_submissions` row, enforcing:
   - trimmed name between 2 and 100 characters;
   - valid email syntax and a maximum of 254 characters;
   - optional phone up to 30 characters;
   - project type restricted to the form's supported options;
   - optional message up to 2,000 characters.
2. Add a matching Zod schema in the contact form for immediate, field-appropriate feedback and set matching HTML length limits.
3. Harden `send-contact-email` with the same Zod validation, clear `400` responses for malformed JSON/input, allowed-method handling, and CORS headers on every response.
4. Escape all user-controlled values before placing them into email HTML, normalize optional values, and prevent header/subject injection through validated bounded fields.
5. Preserve the existing backend-only read restrictions, anonymous form submission flow, Resend recipient, and Calendly behavior.

## Verification
- Test valid and invalid payloads against the database and Edge Function, including malformed emails, unsupported project types, oversized values, and HTML-like content.
- Confirm a valid public form submission is stored and its email request succeeds.
- Confirm invalid submissions return safe validation errors without being stored or emailed.
- Run the Supabase linter and security scan, then mark `contact_form_minimal_validation` fixed if verification passes.

## Technical details
- Use a PostgreSQL `BEFORE INSERT OR UPDATE` validation trigger rather than mutable/time-dependent constraints.
- Use Zod in both frontend and Edge Function runtimes; no new secret is needed because `RESEND_API_KEY` is already configured.
- This scope adds input validation and output encoding. Broader bot mitigation or rate limiting can be handled separately if required.