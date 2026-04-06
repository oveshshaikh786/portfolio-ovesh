// src/components/ResumeSection.jsx
export default function ResumeSection() {
  return (
    <section id="resume" className="section resume-section">
      <h2>RESUME SNAPSHOT</h2>
      <p>
        A quick view of my education, core tech stack, and the impact I&apos;ve
        had across roles, projects, and production systems.
      </p>

      <div className="resume-actions">
        <a
          href="/resume/Ovesh_Shaikh_Resume.pdf"
          download
          className="btn resume-download"
          aria-label="Download resume as PDF"
        >
          <i className="fa-solid fa-download" /> Download Resume
        </a>
        <a href="/contact" className="btn btn-outline" aria-label="Contact me">
          <i className="fa-solid fa-envelope" /> Get in Touch
        </a>
      </div>

      <div className="resume-grid">
        {/* Education */}
        <article className="resume-card">
          <h3>🎓 Education</h3>
          <div className="resume-subtle">
            Cleveland State University · Cleveland, OH
          </div>
          <ul className="resume-bullets">
            <li>Master of Science in Computer Science — Dec 2024</li>
            <li>
              Focus: Database Systems, Data Mining, Enterprise Data Warehousing,
              Algorithms &amp; Information Security
            </li>
            <li>
              Built production projects including Train Ticket Booking System,
              Contoso Retail DW, and an Apriori Algorithm Flask app.
            </li>
          </ul>
        </article>

        {/* Technical Proficiency */}
        <article className="resume-card">
          <h3>💻 Technical Proficiency</h3>
          <div className="resume-tags">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>Python</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React.js</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Django</span>
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>SQL Server</span>
            <span>AWS</span>
            <span>Docker</span>
            <span>Git</span>
            <span>Postman</span>
          </div>
          <ul className="resume-bullets">
            <li>
              Backend system design with Java/Spring Boot and REST API
              architecture — currently in production at PDDN Inc.
            </li>
            <li>
              Full-stack development: React/Next.js frontend, Node.js/Django
              backend, SQL and NoSQL data layers.
            </li>
            <li>
              Strong foundation in OOP, SOLID principles, Docker, and Agile
              development workflows.
            </li>
          </ul>
        </article>

        {/* Impact & Metrics */}
        <article className="resume-card">
          <h3>📈 Impact &amp; Metrics</h3>
          <div className="resume-metrics">
            <div className="metric">
              <div className="metric-num">10K+</div>
              <div className="metric-label">Req / Day</div>
            </div>
            <div className="metric">
              <div className="metric-num">&lt;200ms</div>
              <div className="metric-label">API Response</div>
            </div>
            <div className="metric">
              <div className="metric-num">30%</div>
              <div className="metric-label">Fewer Bugs</div>
            </div>
            <div className="metric">
              <div className="metric-num">25%</div>
              <div className="metric-label">Faster APIs</div>
            </div>
          </div>
          <ul className="resume-bullets">
            <li>
              Train Ticket Booking System load-tested to handle 10K+ requests
              per day at under 200ms response time.
            </li>
            <li>
              Improved Django REST API speed by ~25% and backend reliability by
              ~25% at Green2Gold.
            </li>
            <li>
              Reduced frontend defects by ~30% through structured PR reviews and
              modular component patterns at ImageIO.
            </li>
            <li>
              Reduced deployment time from 2 hours to 8 minutes using Docker
              containerization.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
