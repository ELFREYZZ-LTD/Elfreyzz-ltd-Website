# Implement the approved ELFREYZZ logo

## Scope
- Add the supplied vector logo as a website asset.
- Replace the current generic line symbol beside “ELFREYZZ LTD” in the shared top navigation with the supplied logo on every page.
- Keep the adjacent company name, navigation, homepage heading, wording, and all other content unchanged.
- Size the logo to remain clear within the existing navigation height on desktop and mobile, with accessible alternative text and no distortion.
- Derive the browser favicon from the same supplied logo and remove the old generic favicon.

## Validation
- Check the homepage and an inner page at desktop and mobile widths.
- Confirm the logo remains legible in light and dark themes, does not overlap navigation controls, and the home link still works.
- Confirm the browser loads the new favicon and the project passes its existing checks.

## Technical details
- Store the website logo through the project asset delivery flow and import its asset pointer into the shared header.
- Keep a real SVG copy in `public/` for the favicon, as browsers require a directly served icon file.
