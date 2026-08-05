REVOKE ALL PRIVILEGES ON TABLE public.contact_submissions FROM anon;
REVOKE ALL PRIVILEGES ON TABLE public.contact_submissions FROM authenticated;
GRANT INSERT ON TABLE public.contact_submissions TO anon;
GRANT ALL PRIVILEGES ON TABLE public.contact_submissions TO service_role;