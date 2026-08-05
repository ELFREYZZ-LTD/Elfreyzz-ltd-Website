# Harden Contact Submission Privacy

## Verified current state
- Row-level security is enabled on `contact_submissions`.
- The only RLS policy permits anonymous inserts; no SELECT policy exists, so browser reads are already denied by RLS.
- The table nevertheless grants broad privileges to `anon` and `authenticated`, which should be narrowed for defense in depth.

## Implementation
1. Apply a database migration that revokes all table privileges from `anon` and `authenticated`.
2. Grant only `INSERT` to `anon`, matching the public contact form's required access.
3. Keep full access for `service_role`, so trusted backend processes can access submissions.
4. Preserve RLS and the existing anonymous INSERT policy; do not add any SELECT policy or admin UI.

## Verification
- Confirm the final grants expose only anonymous INSERT and no browser-role SELECT permission.
- Confirm there is still no SELECT RLS policy for `anon` or `authenticated`.
- Submit the public contact form and verify that storage and email notification still work.
- Run the security scan again and resolve the reported finding based on the verified effective permissions.

## Technical details
The migration will use privilege revocation and narrowly scoped grants only. No frontend changes, authentication system, profiles table, or role system are needed for the selected backend-only access model.
