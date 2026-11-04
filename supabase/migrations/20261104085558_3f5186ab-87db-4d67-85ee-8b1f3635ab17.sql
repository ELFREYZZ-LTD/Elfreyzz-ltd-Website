-- The contact form now submits through the send-contact-email edge function,
-- which inserts with the service role. Direct anonymous inserts are no longer
-- used by the app, so the open anon insert path is removed entirely.

DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.contact_submissions;

REVOKE INSERT ON public.contact_submissions FROM anon;
REVOKE INSERT ON public.contact_submissions FROM authenticated;

-- RLS stays enabled with no public policies: default deny for anon/authenticated.
-- service_role retains full access for the backend edge function.