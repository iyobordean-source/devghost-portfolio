const projects = [
  { title: "Moodify", tag: "AI · Music · SaaS", desc: "AI-powered music platform for African artists. Mood-based recommendations and Firebase auth.", url: "https://moodify-music.vercel.app/", img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmoodify-music.vercel.app%2F?w=1200&h=750" },
  { title: "FinFlow", tag: "Fintech · SaaS", desc: "Modern fintech dashboard with real-time analytics and smart budgeting tools.", url: "https://finflow-fintech.vercel.app/", img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffinflow-fintech.vercel.app%2F?w=1200&h=750" },
  { title: "King's Perfumery", tag: "E-commerce · Landing", desc: "Luxury perfume landing page with product showcase and WhatsApp integration.", url: "https://kings-perfumery.vercel.app/", img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fkings-perfumery.vercel.app%2F?w=1200&h=750" },
  { title: "IntelOps", tag: "Gaming · Stats", desc: "Real-time CODM stats tracker — K/D, win rate, head-to-head comparisons.", url: "https://intelops-three.vercel.app/", img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fintelops-three.vercel.app%2F?w=1200&h=750" },
  { title: "Young Scholars", tag: "Multi-page · Education", desc: "Full school website — admissions, gallery, events, staff and a registration portal.", url: "https://young-scholars-academy.vercel.app/", img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fyoung-scholars-academy.vercel.app%2F?w=1200&h=750" },
];

const skills = ["HTML","CSS","JavaScript","TypeScript","React","Node.js","Express.js","Firebase","PostgreSQL","REST APIs","TailwindCSS","Next.js","Git","GitHub"];

const experience = [
  { period: "2025 — Present", role: "Automation engineer", org: "LeadFlow (AI Automation)" },
  { period: "2025 — Present", role: "Full Stack Developer", org: "Freelance" },
  { period: "2024 — Present", role: "Builder", org: "projects" },
];

const extIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>';

// Rail (duplicate for seamless feel)
const rail = document.getElementById("rail");
[...projects, ...projects].forEach(p => {
  rail.insertAdjacentHTML("beforeend", `
    <a class="rail-card" href="${p.url}" target="_blank" rel="noopener">
      <img src="${p.img}" alt="${p.title}" loading="lazy" />
      <div class="rail-meta">
        <div><strong>${p.title}</strong><small>${p.tag}</small></div>
        ${extIcon}
      </div>
    </a>`);
});

// Work grid
const grid = document.getElementById("work-grid");
projects.forEach(p => {
  grid.insertAdjacentHTML("beforeend", `
    <a class="card" href="${p.url}" target="_blank" rel="noopener">
      <div class="img-wrap"><img src="${p.img}" alt="${p.title}" loading="lazy" /></div>
      <div class="card-body">
        <p class="card-tag">${p.tag}</p>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <span class="link">View Project ${extIcon}</span>
      </div>
    </a>`);
});

// Experience
const exp = document.getElementById("exp");
experience.forEach(e => {
  exp.insertAdjacentHTML("beforeend", `
    <div class="exp-row">
      <div><strong>${e.role}</strong><small>${e.org}</small></div>
      <span class="when">${e.period}</span>
    </div>`);
});

// Skills marquee (duplicate for loop)
const marquee = document.getElementById("marquee");
[...skills, ...skills].forEach(s => {
  marquee.insertAdjacentHTML("beforeend", `<span class="chip">${s}</span>`);
});

document.getElementById("year").textContent = new Date().getFullYear();
