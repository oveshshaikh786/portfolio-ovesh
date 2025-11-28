// src/components/ResumeSection.jsx
export default function ResumeSection() {
  return (
    <section id="resume" className="section resume-section">
      <h2>RESUME SNAPSHOT</h2>
      <p>
        A quick view of my education, core tech stack, and the impact I’ve had
        across internships, projects, and leadership roles.
      </p>

      <div className="resume-actions">
        <a
          href="/resume/Ovesh_Shaikh_Resume.pdf"
          download
          className="btn resume-download"
          aria-label="Download resume as PDF"
        >
          <i className="fa-solid fa-download"></i> Download Resume
        </a>
        <a
          href="#contact"
          className="btn btn-outline"
          aria-label="Go to contact section"
        >
          <i className="fa-solid fa-envelope"></i> Get in Touch
        </a>
      </div>

      <div className="resume-grid">
        {/* Education Card */}
        <article className="resume-card">
          <h3>🎓 Education</h3>
          <div className="resume-subtle">
            Cleveland State University · Cleveland, OH
          </div>
          <ul className="resume-bullets">
            <li>Master of Science in Computer Science (Dec 2024)</li>
            <li>
              Focus: Database Systems, Data Mining, Enterprise Data Warehousing,
              Algorithms & Information Security
            </li>
            <li>
              Streamlined student support operations in the Viking ID Card
              Office, improving service efficiency and satisfaction.
            </li>
          </ul>
        </article>

        {/* Technical Proficiency Card */}
        <article className="resume-card">
          <h3>💻 Technical Proficiency</h3>
          <div className="resume-tags">
            <span>Java</span>
            <span>Python</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Django</span>
            <span>Spring Boot</span>
            <span>MySQL</span>
            <span>SQL Server</span>
            <span>MongoDB</span>
            <span>PostgreSQL</span>
            <span>AWS</span>
            <span>Docker</span>
            <span>Git</span>
            <span>Postman</span>
          </div>
          <ul className="resume-bullets">
            <li>
              Full-stack web development using React / Next.js, Node.js, and
              Django.
            </li>
            <li>
              RESTful API design, backend optimization, and database performance
              tuning.
            </li>
            <li>
              Strong foundation in OOP, data structures & algorithms, and Agile
              development practices.
            </li>
          </ul>
        </article>

        {/* Impact & Metrics Card */}
        <article className="resume-card">
          <h3>📈 Impact & Metrics</h3>
          <div className="resume-metrics">
            <div className="metric">
              <div className="metric-num">25%</div>
              <div className="metric-label">Faster APIs</div>
            </div>
            <div className="metric">
              <div className="metric-num">15%</div>
              <div className="metric-label">Conversion Lift</div>
            </div>
            <div className="metric">
              <div className="metric-num">30%</div>
              <div className="metric-label">Fewer Sync Errors</div>
            </div>
            <div className="metric">
              <div className="metric-num">40%</div>
              <div className="metric-label">Faster Onboarding</div>
            </div>
          </div>
          <ul className="resume-bullets">
            <li>
              Improved data retrieval speed by 25% with optimized Django REST
              APIs at Green2Gold.
            </li>
            <li>
              Increased donor conversion by 15% through better UX and validation
              in donation workflows.
            </li>
            <li>
              Automated backend-to-frontend sync, reducing manual update errors
              by 30%.
            </li>
            <li>
              Reduced UI bugs by 60% and improved app performance by 20% through
              modular React components and API/query optimization.
            </li>
          </ul>
        </article>

        {/* 
        <article className="resume-card">
          <h3>📜 Certifications & Learning</h3>
          <div className="resume-subtle">Continuous Growth & Development</div>
          <ul className="resume-bullets">
            <li>
              React – The Complete Guide (Hooks, React Router, Redux) –
              Academind
            </li>
            <li>Face Recognition using Python – GUVI · AI-For-India Event</li>
            <li>Android App Development Workshop – Kyrion Technologies</li>
            <li>
              Amazon Junior Software Developer Professional Certificate – In
              Progress
            </li>
            <li>
              Actively sharpening Data Structures & Algorithms and System Design
              via LeetCode & real-world projects.
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  );
}
