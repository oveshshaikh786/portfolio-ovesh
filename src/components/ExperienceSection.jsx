// src/components/ExperienceSection.jsx
export default function ExperienceSection() {
  return (
    <section id="experience" className="home-section">
      <div className="home-section-inner">
        <div className="experience-wrap">
          <h2 className="experience-heading">Professional Experience</h2>

          <div className="experience-timeline">
            {/* 1. PDDN Inc — Current Role */}
            <article className="experience-item">
              <h3>Software Engineer – PDDN Inc</h3>
              <div className="experience-meta">
                Jan 2026 – Present · Hybrid · Fremont, CA
              </div>
              <ul className="experience-points">
                <li>
                  Building and maintaining SaaS web applications using{" "}
                  <strong>React, Java, Python, and MySQL</strong>, contributing
                  to core product features across the full stack.
                </li>
                <li>
                  Designing and consuming <strong>REST APIs</strong> with MySQL
                  for data persistence, improving reliability and modularity of
                  backend services.
                </li>
                <li>
                  Integrating <strong>AI/LLM-based features</strong> into
                  application workflows, expanding product capabilities with
                  modern AI tooling.
                </li>
                <li>
                  Collaborating with senior engineers through code reviews and
                  Agile sprints, improving code quality through OOP principles
                  and modular design.
                </li>
              </ul>
            </article>

            {/* 2. Green2Gold */}
            <article className="experience-item">
              <h3>Software Engineer Intern – Green2Gold</h3>
              <div className="experience-meta">
                Mar 2025 – Dec 2025 · Remote · Simi Valley, CA
              </div>
              <ul className="experience-points">
                <li>
                  Developed scalable web components using React.js and Tailwind
                  CSS, boosting front-end performance and UI consistency by{" "}
                  <strong>~20%</strong>.
                </li>
                <li>
                  Built and maintained secure backend services with Django,
                  Python, and SQL, improving reliability of donation and event
                  workflows by <strong>~25%</strong>.
                </li>
                <li>
                  Integrated Zeffy payment APIs and aligned flows with ERP-style
                  nonprofit operations, helping reduce manual steps by{" "}
                  <strong>~15%</strong>.
                </li>
                <li>
                  Participated in full-stack architecture discussions and agile
                  sprints to keep product work aligned with business goals.
                </li>
              </ul>
            </article>

            {/* 3. ImageIO */}
            <article className="experience-item">
              <h3>Web Developer Intern – ImageIO</h3>
              <div className="experience-meta">
                Jul 2021 – Jun 2022 · Hybrid · Vadodara, Gujarat, India
              </div>
              <ul className="experience-points">
                <li>
                  Built full-stack web features using React.js, Node.js, and
                  MongoDB, improving response times and modularity of core
                  workflows by <strong>~25%</strong>.
                </li>
                <li>
                  Integrated REST APIs and debugged JSON payload issues using
                  Postman, increasing API reliability and reducing integration
                  errors.
                </li>
                <li>
                  Used Git, PR reviews, and structured bug tracking to help cut
                  frontend defects by <strong>~30%</strong>.
                </li>
                <li>
                  Collaborated with senior engineers on performance optimization
                  strategies across UI and API layers.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
