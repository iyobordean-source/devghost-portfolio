const projects = [
  
  { 
    title: "Barber Shop", 
    tag: "Service · Booking", 
    desc: "Modern barber shop landing page with professional service showcases and appointment CTAs.", 
    url: "https://barbershop-ivory-zeta.vercel.app/", 
    img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fbarbershop-ivory-zeta.vercel.app%2F?w=1200&h=750" 
  },
  { 
    title: "Dental Clinic", 
    tag: "Healthcare · Landing", 
    desc: "Clean, professional dental clinic site featuring medical services and patient booking integration.", 
    url: "https://dentalclinic-b9n1.vercel.app/", 
    img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fdentalclinic-b9n1.vercel.app%2F?w=1200&h=750" 
  },
  { 
    title: "King's Perfumery", 
    tag: "E-commerce · Landing", 
    desc: "Luxury perfume landing page with product showcase and WhatsApp integration.", 
    url: "https://kings-perfumery.vercel.app/", 
    img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fkings-perfumery.vercel.app%2F?w=1200&h=750" 
  },
  { 
    title: "IntelOps", 
    tag: "Gaming · Stats", 
    desc: "Real-time CODM stats tracker — K/D, win rate, head-to-head comparisons.", 
    url: "https://intelops-three.vercel.app/", 
    img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fintelops-three.vercel.app%2F?w=1200&h=750" 
  },
  { 
    title: "Young Scholars", 
    tag: "Multi-page · Education", 
    desc: "Full school website — admissions, gallery, events, staff and a registration portal.", 
    url: "https://young-scholars-academy.vercel.app/", 
    img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fyoung-scholars-academy.vercel.app%2F?w=1200&h=750" 
  },
  { 
    title: "Digital Store", 
    tag: "E-commerce · Store", 
    desc: "Digital storefront featuring a modern e-commerce layout for tech or digital products.", 
    url: "https://digital-store-three-rho.vercel.app/", 
    img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fdigital-store-three-rho.vercel.app%2F?w=1200&h=750" 
  },
  { 
    title: "Accessorize with Treasure", 
    tag: "E-commerce · Accessories", 
    desc: "Boutique e-commerce landing page focused on jewelry and fashion accessories.", 
    url: "https://accessorize-with-treasure.vercel.app/", 
    img: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Faccessorize-with-treasure.vercel.app%2F?w=1200&h=750" 
  }
];

const skills = ["HTML","CSS","JavaScript","React","Node.js","Express.js","Firebase","webflow","PostgreSQL","REST APIs","Git","GitHub"];
const experience = [
  { period: "2025 — Present", role: "Freelancer", org: "LeadFlow (AI Automation)" },
  { period: "2025 — Present", role: "Full Stack Developer", org: "Freelance" },
  { period: "2024 — Present", role: "Builder", org: "intelops" },
];

const extIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>';
const rail = document.getElementById("rail");
[...projects, ...projects].forEach(p => {
  rail.insertAdjacentHTML("beforeend", `
    <a class="rail-card" href="${p.url}" target="_blank" rel="noopener">
      <img src="${p.img}" alt="${p.title}" loading="lazy" />
      <div class="rail-meta">
        <div><strong>${p.title}</strong><small>${p.tag}</small></div>
        ${extIcon}
      </div>
    </a>
  `);
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
    </a>
  `);
});

// Experience
const exp = document.getElementById("exp");
experience.forEach(e => {
  exp.insertAdjacentHTML("beforeend", `
    <div class="exp-row">
      <div><strong>${e.role}</strong><small>${e.org}</small></div>
      <span class="when">${e.period}</span>
    </div>
  `);
});

// Skills marquee (duplicate for loop)
const marquee = document.getElementById("marquee");
[...skills, ...skills].forEach(s => {
  marquee.insertAdjacentHTML("beforeend", `<span class="chip">${s}</span>`);
});

document.getElementById("year").textContent = new Date().getFullYear();