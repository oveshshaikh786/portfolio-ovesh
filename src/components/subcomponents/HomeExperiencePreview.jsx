// src/components/subcomponents/HomeExperiencePreview.jsx
export default function HomeExperiencePreview() {
  return (
    <section id="home-experience" className="home-section">
      <div className="home-section-inner">
        <div className="home-section-header">
          <div>
            <div className="home-section-kicker">Work Experience</div>
            <h2 className="home-section-title">Recent roles</h2>
          </div>
          <div className="home-section-link">
            <a href="/experience">See full timeline</a>
          </div>
        </div>

        <div className="home-experience-list">
          <article className="home-experience-item">
            <h3>Software Engineer · PDDN Inc</h3>
            <p className="home-experience-meta">
              Fremont, CA · Hybrid · Jan 2026 – Present
            </p>
            <p>
              Building SaaS web applications using React, Java, Python, and
              MySQL. Integrating AI/LLM features into production workflows and
              collaborating through Agile sprints and code reviews.
            </p>
          </article>

          <article className="home-experience-item">
            <h3>Software Engineer Intern · Green2Gold</h3>
            <p className="home-experience-meta">Remote · Mar 2025 – Dec 2025</p>
            <p>
              Built donation and event flows using React, Tailwind, Django APIs,
              SQL, and Zeffy integration — improving payment reliability and
              reducing manual steps for nonprofit partners.
            </p>
          </article>

          <article className="home-experience-item">
            <h3>Web Developer Intern · ImageIO</h3>
            <p className="home-experience-meta">
              Vadodara, India · Jul 2021 – Jun 2022
            </p>
            <p>
              Worked on React, Node.js, and MongoDB-based web apps, focusing on
              UI improvements, performance tweaks, and bug hunting in
              production.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
