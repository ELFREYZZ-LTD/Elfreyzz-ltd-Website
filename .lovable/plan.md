

## Create Contact Submissions Database Table

### Problem
The contact form references a `contact_submissions` table that doesn't exist in the newly connected Supabase project, causing build errors.

### Solution
Create the `contact_submissions` table with the correct schema and RLS policy to allow anonymous form submissions.

### Technical Details

**Migration SQL:**
```sql
CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  project_type text NOT NULL DEFAULT 'Access roads',
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts"
  ON public.contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

This creates a table matching the fields used in the contact form (name, email, phone, project type, message) and allows anyone to submit the form without needing to log in.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | Auto-generated primary key |
| name | text | Required |
| email | text | Required |
| phone | text | Optional |
| project_type | text | Defaults to "Access roads" |
| message | text | Optional |
| created_at | timestamptz | Auto-set on insert |

No code changes needed -- the existing `Contact.tsx` already references this table correctly.
