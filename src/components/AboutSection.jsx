// src/components/AboutSection.jsx
export default function AboutSection() {
  return (
    <section id="about" className="section about-shell">
      <header className="about-header">
        <p className="about-kicker">Who I Am</p>
        <h2 className="about-title">From backbencher to Software Engineer</h2>
        <p className="about-subtitle">
          I didn&apos;t start as the smartest in the room. I started with doubt,
          curiosity, and a habit of breaking things just to learn how to fix
          them.
        </p>
      </header>

      <div className="about-layout">
        <article className="about-story">
          <p>
            I&apos;m a Software Engineer at PDDN Inc, building SaaS products
            with Java, Spring Boot, React, and Python — and currently
            integrating AI/LLM features into production workflows.
          </p>
          <p>
            My background spans backend systems, full-stack development, and
            data engineering: <strong>Java / Spring Boot</strong> for scalable
            APIs, <strong>React / Next.js</strong> for interfaces, and{" "}
            <strong>SQL / MongoDB</strong> for making data actually useful. I
            like owning a feature end-to-end: design → build → deploy → iterate.
          </p>
          <ul className="about-bullets">
            <li>
              Grew from a &quot;back row&quot; student into the person people
              ask for help with code, architecture decisions, and tech choices.
            </li>
            <li>
              Shipped production projects including a{" "}
              <strong>Train Ticket Booking System</strong> load-tested to 10K+
              req/day, a <strong>real-time Twitter Clone</strong>, and a{" "}
              <strong>Contoso Retail Data Warehouse</strong> on 1M+ records.
            </li>
            <li>
              Balanced a <strong>Master&apos;s in Computer Science</strong> with
              part-time work and internships — learning to stay consistent under
              pressure, not just when things are easy.
            </li>
          </ul>
          <p>
            Today, I care about <strong>clean, maintainable code</strong>, small
            details that users actually feel, and teams that value learning,
            ownership, and shipping.
          </p>
        </article>

        <aside className="about-profile-card">
          <div className="about-profile-top">
            <div className="about-profile-avatar">
              <img
                src="/images/main_photo_1.png"
                alt="Ovesh Shaikh"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="about-profile-name">Ovesh Shaikh</h3>
              <p className="about-profile-role">Software Engineer · PDDN Inc</p>
            </div>
          </div>

          <dl className="about-stats-grid">
            <div className="about-stat-item">
              <dt>Current Role</dt>
              <dd>Software Engineer</dd>
            </div>
            <div className="about-stat-item">
              <dt>Experience</dt>
              <dd>4+ years</dd>
            </div>
            <div className="about-stat-item">
              <dt>Degree</dt>
              <dd>M.S. Computer Science</dd>
            </div>
            <div className="about-stat-item">
              <dt>Location</dt>
              <dd>California, US</dd>
            </div>
          </dl>

          <div className="about-skill-tags">
            <span>Java / Spring Boot</span>
            <span>React &amp; Next.js</span>
            <span>Python</span>
            <span>Node.js &amp; APIs</span>
            <span>SQL &amp; MongoDB</span>
            <span>Docker</span>
          </div>

          <div className="about-actions">
            <a href="/contact" className="btn btn-primary">
              <i className="fa-solid fa-envelope" /> Let&apos;s Connect
            </a>
          </div>
        </aside>
      </div>

      <section className="about-journey">
        <h3 className="about-journey-heading">
          <i className="fa-solid fa-route" /> Journey so far
        </h3>

        <div className="about-journey-grid">
          <article className="about-journey-card">
            <p className="about-journey-meta">
              Jan 2026 – Present · Fremont, CA
            </p>
            <h4 className="about-journey-title">
              Software Engineer – PDDN Inc
            </h4>
            <p className="about-journey-text">
              Building SaaS products with{" "}
              <strong>React, Java, Python, MySQL</strong>. Integrating AI/LLM
              features, writing REST APIs, and collaborating through Agile
              sprints and code reviews.
            </p>
          </article>

          <article className="about-journey-card">
            <p className="about-journey-meta">Mar 2025 – Dec 2025 · Remote</p>
            <h4 className="about-journey-title">
              Software Engineer Intern – Green2Gold
            </h4>
            <p className="about-journey-text">
              Built donation and event flows for nonprofits using{" "}
              <strong>React, Tailwind, Django, SQL, Zeffy</strong>. Improved
              front-end performance by ~20% and backend reliability by ~25%.
            </p>
          </article>

          <article className="about-journey-card">
            <p className="about-journey-meta">
              Aug 2021 – Dec 2024 · Cleveland, OH
            </p>
            <h4 className="about-journey-title">M.S. Computer Science – CSU</h4>
            <p className="about-journey-text">
              Focused on{" "}
              <strong>software engineering, data systems, and security</strong>.
              Built the Train Ticket Booking System, Contoso Retail DW, and an
              Apriori Algorithm Flask app during this time.
            </p>
          </article>

          <article className="about-journey-card">
            <p className="about-journey-meta">
              Jul 2021 – Jun 2022 · Vadodara, India
            </p>
            <h4 className="about-journey-title">
              Web Developer Intern – ImageIO
            </h4>
            <p className="about-journey-text">
              Worked with <strong>React, Node.js, MongoDB, REST APIs</strong>,
              and Git. Cut frontend bugs by ~30% and improved response times
              across core product workflows.
            </p>
          </article>
        </div>
      </section>

      <section className="about-values">
        <article className="about-values-card">
          <div className="about-values-icon">
            <i className="fa-solid fa-gears" />
          </div>
          <h4>How I work</h4>
          <p>
            Clear ownership, honest feedback, small iterations. Give me a
            problem with context and constraints — I&apos;ll figure out the rest
            and keep you in the loop.
          </p>
        </article>

        <article className="about-values-card">
          <div className="about-values-icon">
            <i className="fa-solid fa-gamepad" />
          </div>
          <h4>Beyond code</h4>
          <p>
            Sports, games, music, and motivational content — anything that
            recharges me and gives fresh perspective for the next problem.
          </p>
        </article>

        <article className="about-values-card">
          <div className="about-values-icon">
            <i className="fa-solid fa-magnifying-glass-chart" />
          </div>
          <h4>What I&apos;m looking for</h4>
          <p>
            Backend-heavy or full-stack roles where I can own features, improve
            performance, and work with a team that values clean code, learning,
            and shipping real things.
          </p>
        </article>
      </section>
    </section>
  );
}
