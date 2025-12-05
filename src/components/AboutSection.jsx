// src/components/AboutSection.jsx
export default function AboutSection() {
  return (
    <section id="about" className="section about-shell">
      {/* Top heading */}
      <header className="about-header">
        <p className="about-kicker">Who I Am</p>
        <h2 className="about-title">
          From backbencher to full-stack developer
        </h2>
        <p className="about-subtitle">
          I didn&apos;t start as the smartest in the room. I started with doubt,
          curiosity, and a habit of breaking things just to learn how to fix
          them.
        </p>
      </header>

      {/* Main two-column layout */}
      <div className="about-layout">
        {/* Story / narrative */}
        <article className="about-story">
          <p>
            I&apos;m a full-stack developer who learned by doing—shipping small
            projects, debugging real issues, and slowly turning curiosity into a
            career path that took me from Gujarat to Cleveland.
          </p>

          <p>
            My background spans frontend, backend, and data work:{" "}
            <strong>React / Next.js</strong> for interfaces,{" "}
            <strong>Node.js &amp; Java</strong> for backend logic, and{" "}
            <strong>SQL / MongoDB</strong> for making data actually useful. I
            like owning a feature end-to-end: idea → implementation → deployment
            → feedback.
          </p>

          <ul className="about-bullets">
            <li>
              Grew from a &quot;naughty&quot; backbencher into the person people
              ask for help with code, projects, and tech decisions.
            </li>
            <li>
              Built projects like a <strong>Train Ticket Booking System</strong>
              , <strong>Contoso Retail DW</strong>, and an{" "}
              <strong>Apriori Algorithm</strong> web app that sharpened my
              engineering thinking.
            </li>
            <li>
              Balanced a <strong>Master&apos;s in Computer Science</strong> with
              part-time work and internships—learning how to stay consistent
              under pressure, not just when things are easy.
            </li>
          </ul>

          <p>
            Today, I care about <strong>clean, maintainable code</strong>, small
            UI details that users actually feel, and collaborating with teams
            that value learning, ownership, and shipping.
          </p>
        </article>

        {/* Profile / stats card */}
        <aside className="about-profile-card">
          <div className="about-profile-top">
            <div className="about-profile-avatar">
              <img
                src="/images/main_photo_1.png"
                alt="Ovesh Shaikh portrait"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="about-profile-name">Ovesh Shaikh</h3>
              <p className="about-profile-role">
                Full-Stack Software Developer
              </p>
            </div>
          </div>

          <dl className="about-stats-grid">
            <div className="about-stat-item">
              <dt>Years Coding</dt>
              <dd>3+ </dd>
            </div>
            <div className="about-stat-item">
              <dt>Internships</dt>
              <dd>2</dd>
            </div>
            <div className="about-stat-item">
              <dt>Degree</dt>
              <dd>M.S. Computer Science</dd>
            </div>
            <div className="about-stat-item">
              <dt>Location</dt>
              <dd>Based in United States</dd>
            </div>
          </dl>

          <div className="about-skill-tags">
            <span>React &amp; Next.js</span>
            <span>Java / Spring Boot</span>
            <span>Node.js &amp; APIs</span>
            <span>SQL &amp; MongoDB</span>
            <span>Clean, Maintainable Code</span>
          </div>

          <div className="about-actions">
            <a href="/contact" className="btn">
              <i className="fa-solid fa-envelope" /> Let&apos;s Connect
            </a>
          </div>
        </aside>
      </div>

      {/* Journey cards */}
      <section className="about-journey">
        <h3 className="about-journey-heading">
          <i className="fa-solid fa-route" /> Journey so far
        </h3>

        <div className="about-journey-grid">
          <article className="about-journey-card">
            <p className="about-journey-meta">
              School → Diploma → Bachelor · Gujarat, India
            </p>
            <h4 className="about-journey-title">
              From back row to Computer Engineer
            </h4>
            <p className="about-journey-text">
              Started as the “back row” student who preferred computers over
              textbooks. Built my first real app—a basic{" "}
              <strong>Android Attendance Management System</strong>—and realized
              I like building tools people actually use.
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
              and Git. Helped improve response times and frontend stability,
              cutting bugs by around <strong>30%</strong> across key flows.
            </p>
          </article>

          <article className="about-journey-card">
            <p className="about-journey-meta">
              Aug 2021 – Dec 2024 · Cleveland, Ohio
            </p>
            <h4 className="about-journey-title">
              Master&apos;s in Computer Science – CSU
            </h4>
            <p className="about-journey-text">
              Focused on{" "}
              <strong>software engineering, data systems, and security</strong>.
              Built projects like <strong>Train Ticket Booking System</strong>,{" "}
              <strong>Contoso Retail DW</strong>, and an{" "}
              <strong>Apriori Algorithm</strong> Flask app, while working at the
              Viking Card Office.
            </p>
          </article>

          <article className="about-journey-card">
            <p className="about-journey-meta">
              Mar 2025 – Present · Remote · Simi Valley, CA
            </p>
            <h4 className="about-journey-title">
              Software Engineer Intern – Green2Gold
            </h4>
            <p className="about-journey-text">
              Building donation and event flows for nonprofits using{" "}
              <strong>React, Tailwind, Django, SQL, Zeffy</strong>. Focusing on
              reusable components, reliable APIs, and features that move
              metrics.
            </p>
          </article>
        </div>
      </section>

      {/* Bottom values strip */}
      <section className="about-values">
        <article className="about-values-card">
          <div className="about-values-icon">
            <i className="fa-solid fa-gears" />
          </div>
          <h4>How I work</h4>
          <p>
            I like clear ownership, honest feedback, and small iterations. Give
            me a problem, context, and constraints—I&apos;ll figure out the rest
            and keep you updated.
          </p>
        </article>

        <article className="about-values-card">
          <div className="about-values-icon">
            <i className="fa-solid fa-gamepad" />
          </div>
          <h4>Beyond code</h4>
          <p>
            When I&apos;m not coding, I&apos;m usually watching sports, playing
            games, or listening to music and motivational stories—anything that
            recharges me and gives fresh ideas.
          </p>
        </article>

        <article className="about-values-card">
          <div className="about-values-icon">
            <i className="fa-solid fa-magnifying-glass-chart" />
          </div>
          <h4>What I&apos;m looking for</h4>
          <p>
            Full-stack or frontend-heavy roles where I can own features, improve
            performance, and work with a team that values clean code, learning,
            and shipping.
          </p>
        </article>
      </section>
    </section>
  );
}
