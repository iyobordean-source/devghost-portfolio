# V1 Implementation Order

Follow `PRODUCT.md`, `DESIGN.md`, and `ARCHITECTURE.md`. Use the implementation brief's Resend-inspired editorial restraint and AgentQL-inspired dark product surfaces without copying either site. Do not add unsupported project or personal claims.

1. **Create the editable content module.** Add the planned `src/data/portfolio.js` with identity, section order, the five major projects, their `github: "#"` placeholders and supplied `demo` URLs, known technologies only, local screenshot paths, an empty `smallProjects` array, the four skill groups, and exact social/contact links.
2. **Set up the global visual system.** Establish the dark layered palette, editorial type scale, hairline borders, spacing, restrained accent, focus states, and reduced-motion behavior.
3. **Build navigation/header.** Keep navigation clear on desktop and compact on mobile; provide keyboard focus styling.
4. **Build Hero.** Use the supplied name, title, and positioning statement. Avoid SaaS landing-page treatment.
5. **Build What I Build / About the Work.** Explain the practical systems focus without adding unsupported process claims.
6. **Build Major Projects.** Present FreakiiDesigns, BLAQ PLATE, Studia, AI Receptionist, and Bright Future Tutorials as the primary case-study section. Use the local live-site screenshots, supplied facts, and known technologies only. Do not include AI WhatsApp Order Brain.
7. **Build Skills.** Present the four supplied skill groups as a substantial, intentional section rather than a technology badge wall.
8. **Build How I Build.** Use only the documented positioning; do not invent a step-by-step methodology.
9. **Build About Dean.** Use the supplied identity and title only; add no unsupported biography.
10. **Build Small Projects.** Add the reusable list/grid bound to `smallProjects`. Keep the data empty and the visual treatment secondary to Major Projects.
11. **Build Contact.** Use the exact destinations and display values in `socialLinks`. Keep GitHub fields at `#` until Dean supplies repository URLs, and use the supplied demo URLs.
12. **Build Footer.** Keep it consistent with the page and contact destinations.
13. **Add responsive behavior.** Review desktop, tablet, and mobile spacing, typography, navigation, project layouts, buttons, and grids.
14. **Add restrained motion.** Limit reveals and hover/navigation transitions; honor reduced-motion preferences.
15. **Verify and polish.** Run `npm.cmd run build`, inspect links/imports/keys, and check for mobile overflow, contrast, keyboard access, spacing, and inconsistent typography. Fix issues found before reporting completion.
