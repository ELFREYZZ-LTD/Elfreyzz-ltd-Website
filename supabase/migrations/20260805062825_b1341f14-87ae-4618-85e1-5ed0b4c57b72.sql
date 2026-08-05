CREATE OR REPLACE FUNCTION public.validate_contact_submission()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.name := btrim(NEW.name);
  NEW.email := lower(btrim(NEW.email));
  NEW.phone := NULLIF(btrim(NEW.phone), '');
  NEW.project_type := btrim(NEW.project_type);
  NEW.message := NULLIF(btrim(NEW.message), '');

  IF char_length(NEW.name) < 2 OR char_length(NEW.name) > 100 THEN
    RAISE EXCEPTION USING ERRCODE = '22023', MESSAGE = 'Name must be between 2 and 100 characters';
  END IF;

  IF char_length(NEW.email) > 254 OR NEW.email !~* '^[A-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?(?:\.[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?)+$' THEN
    RAISE EXCEPTION USING ERRCODE = '22023', MESSAGE = 'Enter a valid email address';
  END IF;

  IF NEW.phone IS NOT NULL AND char_length(NEW.phone) > 30 THEN
    RAISE EXCEPTION USING ERRCODE = '22023', MESSAGE = 'Phone must be 30 characters or fewer';
  END IF;

  IF NEW.project_type NOT IN ('Access roads', 'Sewer lines', 'Piped water', 'Structures', 'Engineering survey', 'Other') THEN
    RAISE EXCEPTION USING ERRCODE = '22023', MESSAGE = 'Select a valid project type';
  END IF;

  IF NEW.message IS NOT NULL AND char_length(NEW.message) > 2000 THEN
    RAISE EXCEPTION USING ERRCODE = '22023', MESSAGE = 'Message must be 2000 characters or fewer';
  END IF;

  RETURN NEW;
END;
$$;

REVOKE ALL PRIVILEGES ON FUNCTION public.validate_contact_submission() FROM PUBLIC;
REVOKE ALL PRIVILEGES ON FUNCTION public.validate_contact_submission() FROM anon;
REVOKE ALL PRIVILEGES ON FUNCTION public.validate_contact_submission() FROM authenticated;

CREATE TRIGGER validate_contact_submission_before_write
BEFORE INSERT OR UPDATE ON public.contact_submissions
FOR EACH ROW
EXECUTE FUNCTION public.validate_contact_submission();