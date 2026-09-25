# DeanBuilds Visual Direction

## Design intent

Create a premium, dark, editorial portfolio with a clear developer/product feel. It should feel like DeanBuilds: practical software systems, real-world products, and automation, presented with confidence and restraint. The site must not look like a generic developer template or SaaS landing page.

The implementation brief supplies the relevant reference qualities: Resend's editorial typography, spacing, hierarchy, hairline borders, and restrained motion; AgentQL's layered dark surfaces, product-oriented visual language, refined controls, and subtle accents. Use these as inspiration without reproducing either site's layouts or identity.

## Visual system

- Use a premium black/charcoal foundation with a small set of layered dark surfaces and readable light text.
- Use large, confident display typography and a consistent editorial type hierarchy. Keep body copy comfortably readable and metadata quieter.
- Give the layout generous, deliberate spacing. Use thin borders and dividers to structure content instead of boxing every section into cards.
- Choose one restrained accent treatment. Avoid excessive purple, generic AI gradients, giant glowing blobs, and heavy glass effects.
- Keep visual noise low. Use code/product-oriented details only where they explain the work.
- Build atmosphere through contrast, spacing, typography, and subtle surface depth rather than decorative effects.

## Page hierarchy

Follow the order in `PRODUCT.md`: Hero, What I Build / About the Work, Major Projects, Skills, How I Build, About Dean, Small Projects, Contact, Footer. The first screen should establish Dean's identity and message; the work section should be one of the strongest visual parts of the page.

## Section treatment

- **Navigation/header:** Compact, clear links to the page sections. Keep contact easy to reach and the navigation usable on mobile and by keyboard.
- **Hero:** Make Dean Iyobor, “Software Developer & AI Systems Builder,” and “I build software systems that solve real business problems.” immediately legible. Create impact through scale, spacing, a fine rule, and restrained atmosphere; avoid oversized gradients and SaaS-style conversion panels.
- **What I Build / About the Work:** Reinforce systems, products, automation, and software for real-world use cases. Keep copy faithful to the documented positioning.
- **Major Projects:** Give this section substantially more visual emphasis than Small Projects. Use an editorial case-study rhythm with varied, project-specific visual treatments rather than five tiny identical cards. Each entry should explain what the project is, its documented problem or purpose, what Dean built, any supplied technologies, and its GitHub/live-demo controls. Do not fill unsupported fields with invented details.
- **Project visuals:** Use the local screenshots captured from each supplied live project site as the centerpiece of its major project entry. Keep the image undistorted, responsive, and subtly interactive; do not substitute stock photography or invented interface mockups.
- **Skills:** Treat the four groups as a substantial part of the portfolio. Use clear group hierarchy and composed text/list treatments; do not make a wall of technology badges.
- **How I Build / About Dean:** Keep How I Build tied to the documented positioning without inventing steps. Present Dean as a self-taught developer and AI systems builder from Nigeria, learning by building across full-stack development, AI integrations, automation, and business systems. Do not invent employment history or credentials.
- **Small Projects:** Keep Elegance and IntelOps compact and secondary to Major Projects. Use the existing reusable project grid, supplied summaries, and exact links; do not add invented examples.
- **Contact / Footer:** Keep the supplied contact routes clear and use the exact destinations in `ARCHITECTURE.md`.

## Avoid

- Fake statistics, client/company logos, testimonials, awards, revenue, user counts, or project outcomes
- Stock photography, random 3D illustrations, or emoji as UI icons
- Excessive cards, glassmorphism, gradients, decorative blobs, or animation
- Template-looking sections or visual claims that imply unprovided project functionality
- AI WhatsApp Order Brain as a major case study

## Responsive and accessible behavior

Design for desktop, tablet, and mobile from the start. Reflow project compositions, skills, navigation, and contact controls cleanly at narrow widths. Prevent horizontal overflow and preserve readable type and spacing. Use semantic headings, visible keyboard focus, sufficient contrast, accessible names for links, and meaningful alt text only for real supplied imagery.

## Motion

Use only restrained, purposeful page/section reveals and hover/navigation transitions. Keep the page visually complete while still. Honor `prefers-reduced-motion` and avoid motion that delays access to content.
