// src/components/SkillsSection.jsx
export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="skills-wrap">
        <h2>SKILLS</h2>
        <p className="section-lead">
          Backend-first engineer with full-stack range — Java and Spring Boot
          for scalable APIs, React and Next.js for interfaces, Python for
          scripting and AI integrations, and SQL/MongoDB for data.
        </p>

        <div className="skills-grid">
          <article
            className="skill-card fade-in-up"
            style={{ "--stagger": "0ms" }}
          >
            <h3>Backend &amp; APIs</h3>
            <ul className="skills-list">
              <li>Java · Spring Boot · REST API design</li>
              <li>Python · Django · Flask</li>
              <li>Node.js · Express</li>
              <li>JWT authentication · OAuth2</li>
              <li>Microservices · Docker · containerization</li>
            </ul>
          </article>

          <article
            className="skill-card fade-in-up"
            style={{ "--stagger": "80ms" }}
          >
            <h3>Frontend Engineering</h3>
            <ul className="skills-list">
              <li>React.js · Next.js · TypeScript</li>
              <li>JavaScript (ES6+) · HTML5 · CSS3</li>
              <li>Tailwind CSS · responsive design</li>
              <li>WebSockets · real-time UI</li>
              <li>Component-driven · hooks &amp; context</li>
            </ul>
          </article>

          <article
            className="skill-card fade-in-up"
            style={{ "--stagger": "160ms" }}
          >
            <h3>Data &amp; Cloud</h3>
            <ul className="skills-list">
              <li>MySQL · SQL Server · PostgreSQL</li>
              <li>MongoDB · database design</li>
              <li>OLAP · MDX · star schema</li>
              <li>AWS (EC2, S3) · Vercel · Railway</li>
              <li>Query optimization · indexing</li>
            </ul>
          </article>

          <article
            className="skill-card fade-in-up"
            style={{ "--stagger": "240ms" }}
          >
            <h3>Tools &amp; Workflow</h3>
            <ul className="skills-list">
              <li>Git · GitHub · PR reviews · branching</li>
              <li>Agile · JIRA · sprint planning</li>
              <li>Postman · API testing &amp; debugging</li>
              <li>OOP · SOLID · clean code principles</li>
              <li>Data Structures &amp; Algorithms</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
