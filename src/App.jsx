import {
  identity,
  majorProjects,
  skillGroups,
  smallProjects,
  socialLinks,
  socialProfiles,
} from './data/portfolio.js'

const navigation = [
  { label: 'Work', href: '#major-projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about-dean' },
]

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M5 15 15 5M6 5h9v9" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M3.5 10h13M11 4.5l5.5 5.5-5.5 5.5" />
    </svg>
  )
}

function SectionLabel({ number, children }) {
  return (
    <p className="section-label">
      <span className="section-label__number">{number}</span>
      <span>{children}</span>
    </p>
  )
}

function ProjectPreview({ project }) {
  return (
    <figure className="project-preview">
      <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name} live website`}>
        <img
          src={project.preview}
          alt={`Screenshot of the ${project.name} website`}
          width="1440"
          height="1000"
          loading="lazy"
          decoding="async"
        />
        <span className="project-preview__action">
          Visit live site <ArrowIcon diagonal />
        </span>
      </a>
    </figure>
  )
}

function ProjectLink({ label, href }) {
  if (href === '#') {
    return (
      <span className="project-link project-link--pending">
        <span>{label}</span>
        <span className="project-link__status">URL to be added</span>
      </span>
    )
  }

  return (
    <a className="project-link" href={href} target="_blank" rel="noreferrer">
      <span>{label}</span>
      <ArrowIcon diagonal />
    </a>
  )
}

function ProjectRow({ project }) {
  return (
    <article className="project-row">
      <ProjectPreview project={project} />
      <div className="project-copy">
        <div className="project-copy__meta">
          <span className="project-number">{project.number}</span>
          <span>{project.type}</span>
          {project.status && <span className="project-status">{project.status}</span>}
        </div>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        {project.highlights && (
          <ul className="project-highlights" aria-label={`${project.name} areas of work`}>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
        {project.technologies.length > 0 && (
          <div className="project-tech">
            <span className="visual-overline">TECHNOLOGIES</span>
            <ul aria-label={`${project.name} technologies`}>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="project-links">
          <ProjectLink label="GitHub" href={project.github} />
          <ProjectLink label="Live demo" href={project.demo} />
        </div>
      </div>
    </article>
  )
}

function SkillGroup({ group }) {
  return (
    <article className="skill-group">
      <div className="skill-group__heading">
        <span className="skill-group__number">{group.number}</span>
        <h3>{group.name}</h3>
      </div>
      <ul className="skill-list">
        {group.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  )
}

function SocialList({ className = '' }) {
  return (
    <ul className={`social-list ${className}`.trim()}>
      {socialProfiles.map((profile) => (
        <li key={profile.label}>
          <a href={profile.href} target="_blank" rel="noreferrer">
            {profile.label}
            <ArrowIcon diagonal />
          </a>
        </li>
      ))}
    </ul>
  )
}

function SmallProjectCard({ project }) {
  return (
    <article className="small-project-card">
      <div className="small-project-card__heading">
        <span>{project.type || 'SMALL PROJECT'}</span>
        <ArrowIcon diagonal />
      </div>
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      <div className="project-links">
        <ProjectLink label="GitHub" href={project.github} />
        <ProjectLink label="Live demo" href={project.demo} />
      </div>
    </article>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-header__inner page-shell">
          <a className="wordmark" href="#hero" aria-label="DeanBuilds, back to top">
            DEAN<span>BUILDS</span>
            <span className="wordmark__period">.</span>
          </a>
          <nav className="primary-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="header-contact" href="#contact">
            Let’s talk <ArrowIcon diagonal />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section page-shell" id="hero" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span className="signal-dot" /> SOFTWARE / AI SYSTEMS
              </p>
              <h1 id="hero-title">
                Dean
                <br />
                <span>Iyobor</span>
              </h1>
              <p className="hero-title">{identity.title}</p>
              <p className="hero-positioning">
                I build software systems that solve <span>real business problems.</span>
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#major-projects">
                  Explore selected work <ArrowIcon />
                </a>
                <a className="button button--quiet" href="#contact">
                  Get in touch <ArrowIcon diagonal />
                </a>
              </div>
            </div>

            <aside className="hero-index" aria-label="Areas of work">
              <p className="hero-index__label">A PRACTICAL FOCUS</p>
              <ul>
                <li>
                  <span>01</span>
                  <strong>Systems</strong>
                </li>
                <li>
                  <span>02</span>
                  <strong>Products</strong>
                </li>
                <li>
                  <span>03</span>
                  <strong>Automation</strong>
                </li>
              </ul>
              <p className="hero-index__note">Software for real-world use cases.</p>
            </aside>
          </div>
          <div className="hero-bottomline">
            <span>DEANBUILDS / PORTFOLIO</span>
            <a href="#what-i-build">
              SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className="work-intro section-shell" id="what-i-build" aria-labelledby="work-intro-title">
          <div className="section-heading section-heading--wide">
            <SectionLabel number="01">WHAT I BUILD / ABOUT THE WORK</SectionLabel>
            <div className="work-intro__lead">
              <h2 id="work-intro-title">
                Software should do a job <span>in the real world.</span>
              </h2>
              <p>
                Practical systems, products, and automation shaped around real use cases — from ordering
                and school registration to course intelligence and business enquiries.
              </p>
            </div>
          </div>

          <div className="work-pillars">
            <article>
              <span className="work-pillar__index">01 / SYSTEMS</span>
              <h3>Useful by design.</h3>
              <p>Software built around business and operational needs.</p>
            </article>
            <article>
              <span className="work-pillar__index">02 / PRODUCTS</span>
              <h3>Made to work together.</h3>
              <p>Systems for ordering, learning, and administration.</p>
            </article>
            <article>
              <span className="work-pillar__index">03 / AUTOMATION</span>
              <h3>Purposeful AI.</h3>
              <p>AI systems designed around enquiries and real workflows.</p>
            </article>
          </div>
        </section>

        <section className="projects-section section-shell" id="major-projects" aria-labelledby="projects-title">
          <div className="section-heading projects-heading">
            <SectionLabel number="02">SELECTED WORK</SectionLabel>
            <div className="projects-heading__main">
              <h2 id="projects-title">Systems built<br />for real work.</h2>
              <p>Five projects. Different contexts. One practical point of view.</p>
            </div>
            <div className="projects-heading__count" aria-hidden="true">
              <span>PROJECTS</span>
              <strong>05</strong>
            </div>
          </div>

          <div className="project-list">
            {majorProjects.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="skills-section section-shell" id="skills" aria-labelledby="skills-title">
          <div className="section-heading skills-heading">
            <SectionLabel number="03">SKILLS / TOOLKIT</SectionLabel>
            <div className="skills-heading__main">
              <h2 id="skills-title">The tools behind<br />the systems.</h2>
              <p>Four connected areas of practice, organized around the work they support.</p>
            </div>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <SkillGroup key={group.name} group={group} />
            ))}
          </div>
        </section>

        <section className="build-section" id="how-i-build" aria-labelledby="build-title">
          <div className="build-section__inner section-shell">
            <div className="build-section__intro">
              <SectionLabel number="04">HOW I BUILD</SectionLabel>
              <h2 id="build-title">Grounded in<br /><span>real problems.</span></h2>
            </div>
            <div className="build-section__statement">
              <span className="build-section__rule" />
              <p>{identity.positioning}</p>
              <div className="build-section__scope">
                <span>SOFTWARE SYSTEMS</span>
                <span>PRODUCTS</span>
                <span>AUTOMATION</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section section-shell" id="about-dean" aria-labelledby="about-title">
          <SectionLabel number="05">ABOUT DEAN</SectionLabel>
          <div className="about-layout">
            <div className="about-nameplate">
              <span className="about-nameplate__label">THE BUILDER</span>
              <h2 id="about-title">{identity.name}</h2>
            </div>
            <div className="about-details">
              <span className="about-details__rule" />
              <p>{identity.title}</p>
              <p className="about-details__statement">Practical software for real-world use cases.</p>
            </div>
          </div>
        </section>

        <section className="small-projects-section section-shell" id="small-projects" aria-labelledby="small-projects-title">
          <div className="small-projects-heading">
            <div>
              <SectionLabel number="06">ADDITIONAL WORK</SectionLabel>
              <h2 id="small-projects-title">Small Projects</h2>
            </div>
            <p>A separate space for smaller builds. No projects have been added yet.</p>
          </div>
          {smallProjects.length > 0 ? (
            <div className="small-project-grid">
              {smallProjects.map((project) => (
                <SmallProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="small-projects-empty" aria-live="polite">
              <span className="empty-mark" aria-hidden="true" />
              <span>Ready for future projects</span>
            </div>
          )}
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-section__inner section-shell">
            <SectionLabel number="07">CONTACT</SectionLabel>
            <div className="contact-main">
              <div>
                <p className="contact-overline">HAVE A REAL PROBLEM TO SOLVE?</p>
                <h2 id="contact-title">Let’s build<br /><span>something useful.</span></h2>
              </div>
              <div className="contact-actions">
                <a className="contact-action" href={socialLinks.email}>
                  <span>
                    <small>EMAIL</small>
                    <strong>{socialLinks.emailDisplay}</strong>
                  </span>
                  <ArrowIcon diagonal />
                </a>
                <a className="contact-action" href={socialLinks.whatsapp} target="_blank" rel="noreferrer">
                  <span>
                    <small>WHATSAPP</small>
                    <strong>{socialLinks.whatsappDisplay}</strong>
                  </span>
                  <ArrowIcon diagonal />
                </a>
              </div>
            </div>
            <div className="contact-socials">
              <span className="visual-overline">ELSEWHERE</span>
              <SocialList />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="site-footer__inner page-shell">
          <a className="wordmark" href="#hero" aria-label="DeanBuilds, back to top">
            DEAN<span>BUILDS</span>
            <span className="wordmark__period">.</span>
          </a>
          <p>Software Developer & AI Systems Builder</p>
          <span className="footer-copyright">© {new Date().getFullYear()} DEANBUILDS</span>
        </div>
      </footer>
    </>
  )
}
