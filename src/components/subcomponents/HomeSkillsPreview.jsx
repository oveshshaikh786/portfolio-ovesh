// src/components/HomeSkillsPreview.jsx
export default function HomeSkillsPreview() {
  return (
    <section id="home-skills" className="home-section home-section-alt">
      <div className="home-section-inner">
        <div className="home-section-header">
          <div>
            <h2 className="home-section-title">Technologies &amp; Skills</h2>
          </div>
        </div>

        <p className="home-section-description">
          I build full-stack web apps with a focus on clean UI, predictable
          state, and reliable APIs – mainly using the React / Next.js ecosystem
          on the front-end and Node.js or Python on the back-end.
        </p>

        <div className="home-tag-row">
          <span>React.js</span>
          <span>Next.js</span>
          <span>JavaScript / TypeScript</span>
          <span>HTML5 &amp; CSS3</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>SQL</span>
        </div>
      </div>
    </section>
  );
}
