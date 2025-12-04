// src/components/HomeExperiencePreview.jsx
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
            <h3>Software Engineer Intern · Green2Gold</h3>
            <p className="home-experience-meta">Remote · 2025</p>
            <p>
              Built donation and event flows using React &amp; Tailwind, Django
              APIs, SQL, and Zeffy integration to make payments and reporting
              cleaner for non-profit partners.
            </p>
          </article>

          <article className="home-experience-item">
            <h3>Web Developer Intern · Image.io</h3>
            <p className="home-experience-meta">India · 2021–2022</p>
            <p>
              Worked on React, Node.js, and MongoDB-based web apps, focusing on
              UI fixes, performance tweaks, and bug hunting in production
              features.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
