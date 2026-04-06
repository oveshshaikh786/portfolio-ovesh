// src/components/subcomponents/HomeSkillsPreview.jsx
export default function HomeSkillsPreview() {
  return (
    <section id="home-skills" className="home-section home-section-alt">
      <div className="home-section-inner">
        <div className="home-section-header">
          <div>
            <div className="home-section-kicker">Stack</div>
            <h2 className="home-section-title">Technologies &amp; Skills</h2>
          </div>
        </div>

        <p className="home-section-description">
          Backend-first engineer with full-stack range — Java and Spring Boot
          for scalable APIs, React and Next.js for interfaces, and Python for
          scripting, data, and AI integrations.
        </p>

        <div className="home-tag-row">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>Python</span>
          <span>React.js</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>MySQL</span>
          <span>MongoDB</span>
          <span>Docker</span>
          <span>REST APIs</span>
          <span>AWS</span>
        </div>
      </div>
    </section>
  );
}
