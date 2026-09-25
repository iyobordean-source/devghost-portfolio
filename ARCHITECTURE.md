# Architecture and Content Data

## Application shape

Keep V1 as the existing React/Vite JavaScript single-page application. Do not add routing or new dependencies for the listed sections. Preserve the current starter setup. During implementation, keep the page straightforward and extract components only when they reduce real repetition or complexity.

Keep editable portfolio content together in `src/data/portfolio.js`. Keep rendering in the existing `src/App.jsx` and styling in `src/index.css`; add components only when they clarify repeated structures, and avoid deeper folder hierarchies.

## Shared data

The editable content module is `src/data/portfolio.js`. It exports identity and About copy, section order, five data-driven major projects, a secondary small-project list, grouped skills, and social/contact links.

### Identity

```js
export const identity = {
  name: "Dean Iyobor",
  title: "Software Developer & AI Systems Builder",
  positioning: "I build software systems that solve real business problems.",
  about: "I am a self-taught developer and AI systems builder from Nigeria. I learn by building across full-stack development, AI integrations, automation, and business systems, turning real problems and ideas into usable software.",
}
```

### Section order

```js
export const sectionOrder = [
  "hero",
  "what-i-build",
  "major-projects",
  "skills",
  "how-i-build",
  "about-dean",
  "small-projects",
  "contact",
  "footer",
]
```

### Major projects

Keep exactly five major projects, in this order: FreakiiDesigns, BLAQ PLATE, Studia, AI Receptionist, and Bright Future Tutorials. Records in `src/data/portfolio.js` use `id`, `number`, `name`, `type`, `summary`, `technologies`, `preview`, `github`, and `demo`; `highlights`, `flow`, and `status` appear only where supplied. Keep copy concise and do not infer missing technology stacks.

| Project | Preview | Known technologies | GitHub | Demo |
| --- | --- | --- | --- | --- |
| FreakiiDesigns | `/projects/freakii-designs.png` | Not supplied | `https://github.com/iyobordean-source/freakiidesigns` | `https://freakiidesigns.vercel.app/` |
| BLAQ PLATE | `/projects/blaq-plate.png` | Not supplied | `https://github.com/iyobordean-source/blaqplate-web` | `https://blaqplate-web.vercel.app/` |
| Studia | `/projects/studia.png` | React, Supabase, Tailwind CSS, TypeScript, AI | `https://github.com/iyobordean-source/studia` | `https://studia-xi.vercel.app/` |
| AI Receptionist | `/projects/ai-receptionist.png` | React, Supabase, AI | `https://github.com/iyobordean-source/ai-voice-receptionist` | `https://ai-voice-receptionist-mocha.vercel.app/` |
| Bright Future Tutorials | `/projects/bright-future.png` | React, Firebase | `https://github.com/iyobordean-source/-Bright-Future-Tutorials` | `https://bright-future-tutorials.vercel.app/` |

Studia is in development / coming soon. Its documented loop is course material, grounded assessment, responses/grading, performance intelligence, weak areas, targeted practice, and reassessment. Bright Future Tutorials includes student registration, records, and administration; do not claim payment tracking unless the implementation is confirmed.

The five local project previews are screenshots captured from their corresponding supplied live websites. Do not add AI WhatsApp Order Brain to Major Projects.

### Small projects

`smallProjects` is a reusable data-driven list kept visually secondary to Major Projects. It currently contains these two supplied entries:

| Project | Summary | GitHub | Demo |
| --- | --- | --- | --- |
| Elegance | Polished frontend project focused on a refined digital experience with responsive UI and visual presentation. | `https://github.com/iyobordean-source/Elegance` | `https://elegance-psi.vercel.app/` |
| IntelOps | Frontend stats tracker for presenting game/team statistics through a clean interactive interface. | `https://github.com/iyobordean-source/intelops` | `https://intelops-three.vercel.app/` |

Keep the exact URLs shown above. Do not add placeholder entries or invent additional projects.
### Skill groups

Keep each group and item as supplied, in the order shown:

```js
export const skillGroups = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS", "React Router", "Responsive UI"],
  },
  {
    name: "Backend & Data",
    skills: ["Node.js", "Supabase", "Firebase", "PostgreSQL", "REST APIs", "Authentication", "Database Design"],
  },
  {
    name: "AI & Automation",
    skills: ["AI Integrations", "LLM APIs", "RAG", "AI Agents", "n8n", "Workflow Automation"],
  },
  {
    name: "Engineering",
    skills: ["Git", "GitHub", "Vercel", "Full-stack Development", "API Integrations", "System Architecture", "Business Systems"],
  },
]
```

### Social and contact links

Keep these destinations and display values exactly as provided. Do not normalize, shorten, or replace them.

```js
export const socialLinks = {
  github: "https://github.com/iyobordean-source",
  linkedin: "https://www.linkedin.com/in/dean-iyobor-088a03382",
  email: "mailto:iyobordean@gmail.com",
  emailDisplay: "iyobordean@gmail.com",
  whatsapp: "https://wa.me/2347043400958",
  whatsappDisplay: "0704 340 0958",
  twitter: "https://x.com/codewith_dean",
  instagram: "https://www.instagram.com/code.withdean",
  tiktok: "https://vm.tiktok.com/ZS9hBSB7jkx4k-OQZIt/",
}
```

## Content boundaries

The current source provides no detailed process steps for How I Build, employment history, awards, or case-study metrics. The About copy is limited to Dean's supplied self-taught background and focus areas. Do not claim Bright Future Tutorials payment tracking unless implementation is confirmed, and do not model AI WhatsApp Order Brain as a major project.
