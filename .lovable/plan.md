# Apply ELFREYZZ Corporate Colours Platform-Wide

## Goal
Use the supplied corporate palette consistently across the complete website while preserving the current layouts, content, functionality, responsive behavior, and light/dark theme switcher.

## Corporate palette
- **Primary maroon:** RGB 145, 30, 15 (`#911E0F`)
- **Secondary orange:** RGB 237, 148, 45 (`#ED942D`)
- **White:** RGB 255, 255, 255 (`#FFFFFF`)
- **Charcoal:** RGB 34, 43, 53 (`#222B35`)

## Implementation
1. Update the global semantic color tokens so the four corporate colors govern primary actions, accents, backgrounds, text, cards, borders, focus rings, gradients, shadows, and both light and dark modes.
2. Preserve the existing maroon-to-orange branded gradient, recalibrated to the exact supplied RGB values.
3. Replace remaining hard-coded visual colors in page and feature components with semantic theme tokens, including image overlays, icon treatments, video surfaces, toast states, modal overlays, and the 404 page.
4. Apply the same token system to all routes and shared UI, including the restored scrolling homepage, standalone service/about/project/estimator/contact pages, header, footer, forms, and reusable controls.
5. Retain functional status colors where required for accessibility (for example destructive/error feedback), but harmonize them with the corporate system rather than misusing brand colors for errors.
6. Verify the active homepage and representative inner pages in light and dark modes at desktop and mobile widths, checking contrast, readability, hover/focus states, and absence of unintended legacy colors.

## Technical details
- Convert the exact RGB values to HSL token values in `src/index.css`, matching the project’s existing Tailwind/shadcn architecture.
- Use semantic utilities such as `bg-background`, `text-foreground`, `bg-primary`, and `text-primary-foreground`; remove raw palette utilities from application components.
- Keep white and charcoal available through semantic roles rather than hard-coded component classes.
- No database, contact-form logic, navigation, copy, imagery, or page structure changes.
