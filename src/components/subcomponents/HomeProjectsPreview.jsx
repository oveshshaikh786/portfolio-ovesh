// src/components/HomeProjectsPreview.jsx
export default function HomeProjectsPreview() {
  return (
    <section id="home-projects" className="home-section home-section-alt">
      <div className="home-section-inner">
        <div className="home-section-header">
          <div>
            <div className="home-section-kicker">Selected Projects</div>
            <h2 className="home-section-title">A quick look</h2>
          </div>
          <div className="home-section-link">
            <a href="/projects">View all projects</a>
          </div>
        </div>

        <div className="home-projects-grid">
          <article className="home-project-card">
            <h3>Job Application Tracker · MERN</h3>
            <p>
              Full-stack tracker for applications, notes, and follow-ups using
              React, Node.js, Express, and MongoDB with JWT auth and role-based
              access.
            </p>
            <p className="home-project-stack">
              React · Node · Express · MongoDB · JWT
            </p>
          </article>

          <article className="home-project-card">
            <h3>Twitter-style Social Feed · Next.js</h3>
            <p>
              A Next.js clone where users can post, like, repost and share,
              backed by MongoDB and NextAuth for authentication.
            </p>
            <p className="home-project-stack">
              Next.js · React · Tailwind · MongoDB · NextAuth
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
