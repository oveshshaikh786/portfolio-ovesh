// /components/ExperienceSection.jsx
export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="experience-wrap">
        <h2 className="experience-heading">EXPERIENCE</h2>

        <div className="experience-timeline">
          <article className="experience-item">
            <h3>Software Engineer Intern – Green2Gold</h3>
            <div className="experience-meta">
              Mar 2025 – Present · Remote (Simi Valley, CA)
            </div>
            <ul className="experience-points">
              <li>
                Developed scalable React.js + Tailwind components, improving
                frontend consistency and performance by 20%.
              </li>
              <li>
                Built Django REST APIs and optimized SQL queries, reducing query
                time by 25%.
              </li>
              <li>
                Integrated Zeffy payments and supported full-stack architecture
                decisions, increasing workflow reliability by 15%.
              </li>
            </ul>
          </article>

          <article className="experience-item">
            <h3>Graduate Student Assistant – Viking Card Office, CSU</h3>
            <div className="experience-meta">
              Aug 2022 – May 2024 · Cleveland, OH (On-site)
            </div>
            <ul className="experience-points">
              <li>
                Improved ID card processing efficiency by 20% while maintaining
                strict data privacy.
              </li>
              <li>
                Resolved printer and system issues, cutting downtime by 30%.
              </li>
              <li>Maintained record accuracy with a 95% error-free rate.</li>
            </ul>
          </article>

          <article className="experience-item">
            <h3>Web Developer Intern – ImageIO Optimum Technology Resources</h3>
            <div className="experience-meta">
              Jul 2021 – Jun 2022 · Vadodara, Gujarat, India (Hybrid)
            </div>
            <ul className="experience-points">
              <li>
                Developed React + Node.js modules that improved responsiveness &
                modularity by 18%.
              </li>
              <li>
                Integrated REST APIs with Postman, increasing API reliability by
                25%.
              </li>
              <li>
                Reduced application bugs by 30% through performance optimization
                and Git-based debugging cycles.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
