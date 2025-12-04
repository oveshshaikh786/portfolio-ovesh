// src/components/SkillsSection.jsx
export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="section"
      style={{ background: "var(--bg-skills)" }}
    >
      <div className="skills-wrap">
        <h2>SKILLS</h2>
        <p className="section-lead">
          I work across the full stack — from Java backends and data to React /
          Next.js frontends — with a focus on writing clean, maintainable code
          and shipping features that actually solve user problems.
        </p>

        <div className="skills-grid">
          {/* 1. Languages & CS Fundamentals */}
          <article className="skill-card fade-in-up">
            <h3>Languages & Fundamentals</h3>
            <ul className="skills-list">
              <li>Java · Python · JavaScript (ES6+)</li>
              <li>TypeScript (working proficiency)</li>
              <li>C, C++ (academic experience)</li>
              <li>Data Structures & Algorithms</li>
              <li>OOP, SOLID, clean code practices</li>
            </ul>
          </article>

          {/* 2. Frontend Engineering */}
          <article className="skill-card fade-in-up">
            <h3>Frontend Engineering</h3>
            <ul className="skills-list">
              <li>React.js · Next.js</li>
              <li>Tailwind CSS · modern responsive UI</li>
              <li>Component-driven design · reusable UI patterns</li>
              <li>State management with hooks & context</li>
              <li>Accessibility-first and mobile-friendly layouts</li>
            </ul>
          </article>

          {/* 3. Backend, Data & Cloud */}
          <article className="skill-card fade-in-up">
            <h3>Backend, Data & Cloud</h3>
            <ul className="skills-list">
              <li>Node.js (REST APIs) · Express basics</li>
              <li>Java backend foundations (Spring Boot – in progress)</li>
              <li>Python backend (Django basics & API work)</li>
              <li>SQL (joins, indexing, query optimization)</li>
              <li>MongoDB · MySQL · basic AWS usage</li>
            </ul>
          </article>

          {/* 4. Tools, Platforms & Workflow */}
          <article className="skill-card fade-in-up">
            <h3>Tools, Platforms & Workflow</h3>
            <ul className="skills-list">
              <li>Git & GitHub · branching, PRs, code review</li>
              <li>Postman for API testing</li>
              <li>JIRA / Agile sprints & team collaboration</li>
              <li>Zeffy (payment platform integration at Green2Gold)</li>
              <li>Vercel · deployment & environment configuration</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
