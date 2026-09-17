// ============================================================================
// SITE CONFIG — edit these to update every link on the site in one place
// ============================================================================
const siteConfig = {
  github: "https://github.com/iyobordean-source",
  linkedin: "https://www.linkedin.com/in/dean-iyobor-088a03382",
  email: "mailto:iyobordean@gmail.com",
  emailDisplay: "iyobordean@gmail.com",
  whatsapp: "https://wa.me/2347043400958",
  whatsappDisplay: "0704 340 0958",
  twitter: "https://x.com/codewith_dean",
  instagram: "https://www.instagram.com/code.withdean",
  tiktok: "https://vm.tiktok.com/ZS9hBSB7jkx4k-OQZIt/",
  resume: "#" // add your resume link here when ready
};

// ============================================================================
// ICONS — real platform marks, single-color line/glyph icons, inherit currentColor
// ============================================================================
const ICONS = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.09-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="M3 6l9 7 9-7"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.08-1.33A9.96 9.96 0 0 0 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18a8 8 0 0 1-4.08-1.12l-.29-.17-3.02.79.8-2.94-.19-.3A7.96 7.96 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.47-5.62c-.29-.15-1.7-.84-1.96-.93-.26-.1-.46-.15-.65.15-.19.29-.75.93-.92 1.12-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.35-1.44-.87-.77-1.45-1.73-1.63-2.02-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.9-2.15-.24-.57-.48-.5-.65-.5-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.42 0 1.43 1.02 2.81 1.16 3 .15.19 2 3.05 4.84 4.28.68.29 1.2.47 1.61.6.68.22 1.29.19 1.78.11.54-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.9 10.4 21 3h-2.2l-6.1 6.4L7.9 3H2l7.4 10.6L2 21h2.2l6.5-6.8L16.1 21H22l-8.1-10.6z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.5 2h-3v13.5a2.7 2.7 0 1 1-2.7-2.7c.2 0 .4 0 .6.05V9.7a5.9 5.9 0 0 0-.6-.03A5.9 5.9 0 1 0 16.5 15.6v-6a7.9 7.9 0 0 0 4.5 1.4V7.9a4.9 4.9 0 0 1-4.5-4.9z"/></svg>`
};

// Ordered channel list — drives hero, contact, and footer rendering from one source
const socialChannels = [
  { key: "github",    label: "GitHub",      href: siteConfig.github,   sub: "View profile" },
  { key: "linkedin",  label: "LinkedIn",    href: siteConfig.linkedin, sub: "Connect" },
  { key: "whatsapp",  label: "WhatsApp",    href: siteConfig.whatsapp, sub: siteConfig.whatsappDisplay },
  { key: "email",     label: "Email",       href: siteConfig.email,    sub: siteConfig.emailDisplay },
  { key: "instagram", label: "Instagram",   href: siteConfig.instagram, sub: "Follow" },
  { key: "twitter",   label: "X / Twitter", href: siteConfig.twitter,  sub: "Follow" },
  { key: "tiktok",    label: "TikTok",      href: siteConfig.tiktok,   sub: "Follow" }
];

// ============================================================================
// SKILLS DATA — edit freely to add/remove technologies
// ============================================================================
const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Firebase"]
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vercel"]
  },
  {
    category: "Currently Learning",
    items: ["TypeScript", "Next.js", "Backend Development", "Automation"],
    learning: true
  }
];

// ============================================================================
// PROJECT DATA — add future projects here, everything else updates automatically
// ============================================================================
const projects = [
  {
    title: "Bright Future Tutorials",
    category: "Student Registration System",
    status: "Completed / Live",
    description: "A student registration system built for a tutorial centre to give students a more structured digital registration experience. React handles the application interface and user flow, with Firebase providing backend services and authentication. The project also gave me practical experience deploying a Firebase-based application to Vercel, configuring production environment variables, and setting up authorized domains so authentication works correctly outside the local development environment.",
    technologies: ["React", "Firebase"],
    image: "https://images.pexels.com/photos/31155018/pexels-photo-31155018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    demo: "https://bright-future-tutorials.vercel.app/"
  },
  {
    title: "BLAQ PLATE",
    category: "Restaurant Ordering System",
    status: "In Development / Demo",
    description: "A restaurant ordering system designed to give customers a structured digital ordering experience instead of relying entirely on manual conversations. The project explores customer authentication, menu browsing, cart and ordering flows, and backend-connected application functionality. It is also helping me develop my understanding of building larger React applications and connecting frontend experiences to backend services and data.",
    technologies: ["React", "Firebase"],
    image: "https://images.pexels.com/photos/1327393/pexels-photo-1327393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    demo: "https://blaqplate-web.vercel.app/"
  },
  {
    title: "Kurse IQ",
    category: "AI-Assisted Learning Platform",
    status: "In Development / Coming Soon",
    description: "An AI-assisted learning platform designed to help students study more effectively through intelligent study tools and personalized learning experiences. The project explores how AI can be integrated into an actual education product through features such as AI-assisted quiz generation, study support, personalized learning experiences, and other tools focused on helping students understand and retain course material.",
    technologies: ["React", "Firebase"],
    image: "https://images.pexels.com/photos/31666035/pexels-photo-31666035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    demo: ""
  },
  {
    title: "FreakiiDesigns",
    category: "Creative Portfolio Website",
    status: "Completed / Live",
    description: "A responsive portfolio website built for a creative design brand to showcase its work, services, and visual identity online. The project focuses on responsive layouts, visual presentation, interactive elements, and creating a professional online presence for the brand.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.pexels.com/photos/15569284/pexels-photo-15569284.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    demo: "https://freakiidesigns.vercel.app/"
  }
];

// ============================================================================
// CURRENTLY BUILDING — edit freely
// ============================================================================
const buildingAreas = [
  { label: "Software Systems", title: "Building practical software systems", desc: "Designing and building real applications and digital systems end to end, not just the interface." },
  { label: "Full-Stack Development", title: "Expanding into full-stack development", desc: "Going deeper into backend services, APIs, data structures, and the logic behind the interface." },
  { label: "Automation", title: "Exploring practical automation", desc: "Looking at ways to automate repetitive workflows, both for myself and for clients." },
  { label: "AI Integrations", title: "Integrating AI into real products", desc: "Exploring how AI can be built into actual software to solve real problems, not as a gimmick." }
];

// ============================================================================
// RENDER: HERO PANEL
// ============================================================================
function renderHeroPanel() {
  const stackEl = document.getElementById("hero-stack");
  const learningEl = document.getElementById("hero-learning");
  const stack = skills.filter(s => !s.learning).flatMap(s => s.items);
  const learning = skills.find(s => s.learning)?.items || [];

  stackEl.innerHTML = stack.map(item => `<span class="chip">${item}</span>`).join("");
  learningEl.innerHTML = learning.map(item => `<span class="chip chip-learning">${item}</span>`).join("");
}

// ============================================================================
// RENDER: SKILLS
// ============================================================================
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = skills.map(group => `
    <div class="skill-card ${group.learning ? "is-learning" : ""} reveal">
      <p class="skill-card-title">${group.category}</p>
      <div class="skill-tags">
        ${group.items.map(item => `<span class="skill-tag">${item}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// ============================================================================
// RENDER: PROJECTS
// ============================================================================
function renderProjects() {
  const grid = document.getElementById("project-grid");
  const padNum = n => String(n + 1).padStart(2, "0");

  grid.innerHTML = projects.map((p, i) => {
    const hasLiveUrl = p.demo && !p.status.includes("Coming Soon");
    const displayUrl = hasLiveUrl
      ? p.demo.replace(/^https?:\/\//, "").replace(/\/$/, "")
      : "coming soon";

    const previewContent = hasLiveUrl
      ? `<iframe src="${p.demo}" loading="lazy" title="${p.title} live preview" aria-hidden="true" tabindex="-1"></iframe>`
      : `<img src="${p.image}" alt="${p.title} preview" loading="lazy">`;

    return `
    <article class="project-card reveal">
      <div class="project-media">
        <div class="browser-bar">
          <div class="browser-dots">
            <span class="browser-dot browser-dot-r"></span>
            <span class="browser-dot browser-dot-y"></span>
            <span class="browser-dot browser-dot-g"></span>
          </div>
          <span class="browser-url">${displayUrl}</span>
        </div>
        <div class="browser-viewport">
          ${previewContent}
        </div>
        <span class="project-status-tag">${p.status}</span>
      </div>
      <div class="project-body">
        <div class="project-header">
          <span class="project-number mono">${padNum(i)}</span>
          <p class="project-category">${p.category}</p>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-tech">
          ${p.technologies.map(t => `<span class="tech-pill">${t}</span>`).join("")}
        </div>
        <div class="project-actions">
          ${p.demo ? `<a class="btn-text" href="${p.demo}" target="_blank" rel="noopener">${p.status.includes("Coming Soon") ? "Coming soon" : "Live demo"} →</a>` : `<span class="btn-text" aria-disabled="true">Coming soon</span>`}
        </div>
      </div>
    </article>
    `;
  }).join("");
}

// ============================================================================
// RENDER: CURRENTLY BUILDING
// ============================================================================
function renderBuilding() {
  const grid = document.getElementById("building-grid");
  grid.innerHTML = buildingAreas.map(area => `
    <div class="building-card reveal">
      <p class="building-card-label mono">${area.label}</p>
      <h3 class="building-card-title">${area.title}</h3>
      <p class="building-card-desc">${area.desc}</p>
    </div>
  `).join("");
}

// ============================================================================
// NAV: mobile toggle
// ============================================================================
const navToggle = document.getElementById("nav-toggle");
const mobileNav = document.getElementById("mobile-nav");

navToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#mobile-nav a").forEach(a => {
  a.addEventListener("click", () => {
    mobileNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ============================================================================
// NAV: active section highlighting
// ============================================================================
function setupActiveNav() {
  const navLinks = document.querySelectorAll('[data-nav]');
  const sections = Array.from(navLinks)
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  sections.forEach(sec => observer.observe(sec));
}

// ============================================================================
// SCROLL REVEAL
// ============================================================================
function setupScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(t => observer.observe(t));
}

// ============================================================================
// SOCIAL LINKS: render icons into hero, contact, and footer from socialChannels
// ============================================================================
function linkAttrs(channel) {
  return channel.key === "email" ? "" : `target="_blank" rel="noopener"`;
}

function renderHeroSocials() {
  const el = document.getElementById("hero-socials");
  if (!el) return;
  el.innerHTML = socialChannels.map(ch => `
    <li>
      <a href="${ch.href}" class="social-icon" aria-label="${ch.label}" title="${ch.label}" ${linkAttrs(ch)}>
        ${ICONS[ch.key]}
      </a>
    </li>
  `).join("");
}

function renderContactLinks() {
  const el = document.getElementById("contact-links");
  if (!el) return;
  el.innerHTML = socialChannels.map(ch => `
    <a href="${ch.href}" class="contact-link" ${linkAttrs(ch)}>
      <span class="contact-link-id">
        <span class="social-icon social-icon-sm" aria-hidden="true">${ICONS[ch.key]}</span>
        <span class="mono">${ch.label}</span>
      </span>
      <span>${ch.sub} →</span>
    </a>
  `).join("");
}

function renderFooterSocials() {
  const el = document.getElementById("footer-links");
  if (!el) return;
  el.innerHTML = socialChannels.map(ch => `
    <a href="${ch.href}" class="social-icon" aria-label="${ch.label}" title="${ch.label}" ${linkAttrs(ch)}>
      ${ICONS[ch.key]}
    </a>
  `).join("");
}

function populateLinks() {
  const resumeEl = document.getElementById("link-resume");
  if (resumeEl) resumeEl.setAttribute("href", siteConfig.resume);
  renderHeroSocials();
  renderContactLinks();
  renderFooterSocials();
}

// ============================================================================
// INIT
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderHeroPanel();
  renderSkills();
  renderProjects();
  renderBuilding();
  populateLinks();
  setupActiveNav();
  setupScrollReveal();
});
