/* Iyobor Dean — Portfolio interactions */

// ---- Data ----
const projects = [
  {
    title: "IntelOps",
    tag: "Gaming · Stats",
    desc: "Real-time CODM stats tracker — K/D, win rate, head-to-head comparisons.",
    url: "https://intelops-three.vercel.app/",
    img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fintelops-three.vercel.app%2F?w=1200&h=750",
  },
  {
    title: "Barber Shop",
    tag: "Service · Booking",
    desc: "Modern barber shop landing page with professional service showcases and appointment CTAs.",
    url: "https://barbershop-ivory-zeta.vercel.app/",
    img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fbarbershop-ivory-zeta.vercel.app%2F?w=1200&h=750",
  },
  {
    title: "Dental Clinic",
    tag: "Healthcare · Landing",
    desc: "Clean, professional dental clinic site featuring medical services and patient booking integration.",
    url: "https://dentalclinic-b9n1.vercel.app/",
    img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fdentalclinic-b9n1.vercel.app%2F?w=1200&h=750",
  },
  {
    title: "King's Perfumery",
    tag: "E-commerce · Landing",
    desc: "Luxury perfume landing page with product showcase and WhatsApp integration.",
    url: "https://kings-perfumery.vercel.app/",
    img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fkings-perfumery.vercel.app%2F?w=1200&h=750",
  },
  {
    title: "Young Scholars",
    tag: "Multi-page · Education",
    desc: "Full school website — admissions, gallery, events, staff and a registration portal.",
    url: "https://young-scholars-academy.vercel.app/",
    img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fyoung-scholars-academy.vercel.app%2F?w=1200&h=750",
  },
  {
    title: "Digital Store",
    tag: "E-commerce · Store",
    desc: "Digital storefront featuring a modern e-commerce layout for tech or digital products.",
    url: "https://digital-store-three-rho.vercel.app/",
    img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fdigital-store-three-rho.vercel.app%2F?w=1200&h=750",
  },
  {
    title: "Accessorize with Treasure",
    tag: "E-commerce · Accessories",
    desc: "Boutique e-commerce landing page focused on jewelry and fashion accessories.",
    url: "https://accessorize-with-treasure.vercel.app/",
    img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Faccessorize-with-treasure.vercel.app%2F?w=1200&h=750",
  },
];

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Firebase",
];

const experience = [
  { period: "2024 — Present", role: "Freelancer", org: "Frontend Developer" },
];

const extIcon =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>';

// ---- Year ----
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---- Project preview rail (duplicated for seamless loop) ----
const rail = document.getElementById("rail");
if (rail) {
  [...projects, ...projects].forEach((p) => {
    rail.insertAdjacentHTML(
      "beforeend",
      `
      <a class="rail-card" href="${p.url}" target="_blank" rel="noopener">
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
        <div class="rail-meta">
          <div><strong>${p.title}</strong><small>${p.tag}</small></div>
          ${extIcon}
        </div>
      </a>`
    );
  });
}

// ---- Work grid ----
const grid = document.getElementById("work-grid");
if (grid) {
  projects.forEach((p, i) => {
    grid.insertAdjacentHTML(
      "beforeend",
      `
      <a class="project reveal" href="${p.url}" target="_blank" rel="noopener" data-delay="${i * 80}">
        <div class="project__imgwrap"><img src="${p.img}" alt="${p.title}" loading="lazy" /></div>
        <div class="project__body">
          <p class="project__tag">${p.tag}</p>
          <h3 class="project__title">${p.title}</h3>
          <p class="project__desc">${p.desc}</p>
          <span class="project__link">View Project ${extIcon}</span>
        </div>
      </a>`
    );
  });
}

// ---- Experience timeline ----
const exp = document.getElementById("exp");
if (exp) {
  experience.forEach((e, i) => {
    exp.insertAdjacentHTML(
      "beforeend",
      `
      <div class="timeline__item reveal" data-delay="${i * 100}">
        <div class="timeline__meta">
          <span class="timeline__when">${e.period}</span>
          <span class="timeline__dot"></span>
        </div>
        <div class="timeline__body">
          <h3 class="timeline__role">${e.role}</h3>
          <p class="timeline__org">${e.org}</p>
        </div>
      </div>`
    );
  });
}

// ---- Skills marquee (duplicated for loop) ----
const marquee = document.getElementById("marquee");
if (marquee) {
  [...skills, ...skills].forEach((s) => {
    marquee.insertAdjacentHTML("beforeend", `<span class="chip">${s}</span>`);
  });
}

// ---- Nav scroll state ----
const nav = document.getElementById("nav");
function onScroll() {
  const y = window.scrollY || window.pageYOffset;
  if (nav) nav.classList.toggle("scrolled", y > 20);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---- Mobile menu ----
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("menu-open");
    const open = nav.classList.contains("menu-open");
    navToggle.querySelector(".material-icons-outlined").textContent = open
      ? "close"
      : "menu";
  });
  if (navLinks) {
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("menu-open");
        navToggle.querySelector(".material-icons-outlined").textContent = "menu";
      });
    });
  }
}

// ---- Active nav link via scroll spy ----
const sectionIds = ["hero", "about", "work", "experience", "skills", "contact"];
const sections = sectionIds
  .map((id) => document.getElementById(id))
  .filter(Boolean);
const navLinkEls = navLinks ? navLinks.querySelectorAll("a") : [];
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinkEls.forEach((el) => {
          el.classList.toggle(
            "active",
            el.getAttribute("href") === "#" + entry.target.id
          );
        });
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => spy.observe(s));

// ---- Reveal on scroll (re-observes dynamically added .reveal nodes too) ----
const revealObs = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute("data-delay") || "0";
        entry.target.style.setProperty("--rd", delay + "ms");
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

// ---- Animated counters ----
const counters = document.querySelectorAll("[data-count]");
const counterObs = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute("data-count"), 10) || 0;
      const dur = 1600;
      const t0 = { v: null };
      function step(ts) {
        if (t0.v === null) t0.v = ts;
        const p = Math.min((ts - t0.v) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
counters.forEach((c) => counterObs.observe(c));

// ---- Custom cursor ----
const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");
const supportsHover = window.matchMedia(
  "(hover: hover) and (pointer: fine)"
).matches;
if (dot && ring && supportsHover) {
  let mx = 0, my = 0, rx = 0, ry = 0;
  window.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });
  function loop() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  }
  loop();
  const hoverables = "a, button, .project, .skill, .social, .btn, .rail-card, .chip";
  document.querySelectorAll(hoverables).forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("is-hovering"));
    el.addEventListener("mouseleave", () => ring.classList.remove("is-hovering"));
  });
}

// ---- Smooth anchor scroll offset ----
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length <= 1) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: "smooth" });
  });
});
