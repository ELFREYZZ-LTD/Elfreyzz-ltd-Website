# Restore the old landing page only

Bring back the single-scrolling homepage you're previewing (commit "Added notes to the homepage") as the site's landing page, while keeping every other page and all later fixes untouched.

## What changes

- The landing page at `/` becomes the old one-page layout again: Hero, Services, Process, Video, Testimonials, Cost Estimator, Contact, Footer, Back-to-top.
- Header and footer navigation stays as it is today — links keep going to the separate Services, About, Past Experiences, Cost Estimation and Contact pages.
- Hero buttons ("Our Services", "See Past Projects") keep navigating to those pages rather than scrolling.

## What stays exactly as-is

- All separate pages (Services, About, Past Experiences, Cost Estimation, Contact).
- Current Header and Footer.
- Contact form validation, IP/user-agent capture, edge function and all security hardening.

## Technical notes

- Restore `src/pages/Index.tsx` from commit `2ce86ff` (it is not present at HEAD) — the section-composition page with theme toggle.
- Point the `/` route in `src/App.tsx` to `Index` instead of `Home`. Keep all other routes.
- Keep `src/pages/Home.tsx` in the repo (unused) so it can be swapped back easily.
- Do not revert `Header.tsx`, `Footer.tsx`, or `Hero.tsx` — their current router-based versions are needed for the multi-page nav.
- The old landing page's section wrappers still carry `id="services"`, `id="contact"` etc., so in-page anchors continue to work.
- Verify: `/` renders the scrolling layout, and every header/footer link still opens its own page.
