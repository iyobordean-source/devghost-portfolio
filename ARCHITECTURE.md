# Architecture and Content Data

## Application shape

Keep V1 as the existing React/Vite JavaScript single-page application. Do not add routing or new dependencies for the listed sections. Preserve the current starter setup. During implementation, keep the page straightforward and extract components only when they reduce real repetition or complexity.

Keep editable portfolio content together in `src/data/portfolio.js`. Keep rendering in the existing `src/App.jsx` and styling in `src/index.css`; add components only when they clarify repeated structures, and avoid deeper folder hierarchies.

## Shared data

The content module should expose identity, ordered section IDs, major projects, an initially empty small-project collection, grouped skills, and social/contact links. Keep project records data-driven so Dean can edit names, summaries, and links without searching through presentation markup.

### Identity

```js
export const identity = {
  name: "Dean Iyobor",
  title: "Software Developer & AI Systems Builder",
  positioning: "I build software systems that solve real business problems.",
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

Keep exactly the five in-scope entries below. Each record has editable identity/type/summary fields, a local `preview` image path, known technologies, `github`, and `demo` fields. GitHub stays `"#"` until Dean supplies repository URLs. `highlights`, `flow`, and `status` are optional and only contain details supplied by Dean. Leave technology arrays empty when the stack is not known. Summaries contain only supplied information. Add any later case-study fields only after Dean provides their content.

```js
export const majorProjects = [
  {
    id: "freakiidesigns",
    number: "01",
    name: "FreakiiDesigns",
    type: "Client project · Creative branding studio",
    summary:
      "A creative branding and graphic design studio spanning brand identity, social media, events, and print.",
    highlights: ["Dexter AI", "Sales Lux", "Social media design", "Events", "Print", "Brand identity"],
    technologies: [],
    preview: "/projects/freakii-designs.png",
    github: "#",
    demo: "https://freakiidesigns.vercel.app/",
  },
  {
    id: "blaq-plate",
    number: "02",
    name: "BLAQ PLATE",
    type: "Restaurant ordering system",
    summary: "Restaurant/business ordering system designed to reduce dependence on manual WhatsApp and call ordering.",
    technologies: [],
    preview: "/projects/blaq-plate.png",
    github: "#",
    demo: "https://blaqplate-web.vercel.app/",
  },
  {
    id: "studia",
    number: "03",
    name: "Studia",
    type: "AI-Assisted Learning Platform",
    status: "In Development / Coming Soon",
    summary: "AI-powered university testing and course-intelligence platform.",
    flow: [
      "Course material",
      "Course Brain",
      "AI assessment",
      "Responses/grading",
      "Course Intelligence",
      "Weak areas",
      "Targeted practice",
      "Reassessment",
    ],
    technologies: ["React", "Supabase", "Tailwind CSS", "TypeScript", "AI"],
    preview: "/projects/studia.png",
    github: "#",
    demo: "https://studia-xi.vercel.app/",
  },
  {
    id: "ai-receptionist",
    number: "04",
    name: "AI Receptionist",
    type: "AI business system",
    summary:
      "AI-powered business receptionist/system designed to handle business enquiries and operational workflows.",
    flow: ["Business enquiries", "AI Receptionist", "Operational workflows"],
    technologies: ["React", "Supabase", "AI"],
    preview: "/projects/ai-receptionist.png",
    github: "#",
    demo: "https://ai-voice-receptionist-mocha.vercel.app/",
  },
  {
    id: "bright-future-tutorials",
    number: "05",
    name: "Bright Future Tutorials",
    type: "School registration / management system",
    summary: "A school-focused registration and management system built for a real-world use case.",
    technologies: ["React", "Firebase"],
    preview: "/projects/bright-future.png",
    github: "#",
    demo: "https://bright-future-tutorials.vercel.app/",
  },
]
```

Do not add AI WhatsApp Order Brain to this collection.

### Small projects

Use the same editable list pattern and project-link fields for future small projects, but initialize the collection empty. Do not add example objects or project names.

```js
export const smallProjects = []
```

When Dean supplies a small project, add its real name and approved summary; initialize its `github` and `demo` fields to `"#"` until he provides the URLs.

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

The current source provides no detailed process steps for How I Build, no biography beyond the identity above, and no case-study metrics or outcome claims. The five `public/projects/` previews are screenshots captured from the corresponding supplied live websites. Do not model AI WhatsApp Order Brain as a major project.
