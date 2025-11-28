// src/components/AboutSection.jsx
"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section"
      style={{ background: "var(--bg-experience)" }}
    >
      <div className="experience-wrap">
        {/* ============================================
            ABOUT ME INTRO
           ============================================ */}

        <h2 className="experience-heading">ABOUT ME</h2>

        <div
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 40px",
            color: "var(--text-muted)",
          }}
        >
          <ul className="experience-points">
            <li>
              From being a mischievous backbencher in school to earning my
              Master’s in the United States, my journey hasn’t been perfect.
              it’s been progressive, disciplined, and full of learning.
            </li>

            <li>
              I didn’t begin as the smartest in the room. I started with doubt,
              limited exposure, and a lot of trial-and-error learning by
              breaking things, fixing them, and repeating until I understood the
              core.
            </li>

            <li>
              Every setback, every late night, and every small breakthrough
              shaped the developer I am today, driven by grit, curiosity, and a
              mindset that refuses to quit.
            </li>
          </ul>
        </div>

        {/* ============================================
            TIMELINE
           ============================================ */}
        <div className="experience-timeline">
          {/* ============================================
              DIPLOMA BLOCK
             ============================================ */}
          <article className="experience-item">
            <div
              style={{
                marginBottom: "12px",
              }}
            >
              <h3>Diploma of Computer Engineering (Associate Degree)</h3>
              <div className="experience-meta">
                2015 – 2018 · Gujarat, India
              </div>
            </div>

            <ul className="experience-points">
              <li>
                <strong>Entry into Tech:</strong> This is where I wrote my first
                lines of code, breaking things, fixing them, and discovering how
                satisfying problem-solving can be.
              </li>
              <li>
                <strong>Early Challenges:</strong> Coming from a non-technical
                background, logic, debugging, and syntax were all new to me. I
                built confidence one bug, one small win at a time.
              </li>
              <li>
                <strong>Project Highlight:</strong> Our Android Attendance
                Management System (built with two friends) was selected in the
                top 5 out of 20 projects and showcased at the college Project
                Tech Fair 2018, a big early validation of my interest in
                building real apps.
              </li>
            </ul>
          </article>

          {/* ============================================
              BACHELOR BLOCK
             ============================================ */}
          <article className="experience-item">
            <div
              style={{
                marginBottom: "12px",
              }}
            >
              <h3>Bachelor of Computer Engineering</h3>
              <div className="experience-meta">
                2018 – 2021 · Gujarat, India
              </div>
            </div>

            <ul className="experience-points">
              <li>
                <strong>Deepening Foundations:</strong> Went beyond basics into
                DSA, algorithms, databases, networking, and core software
                engineering principles.
              </li>
              <li>
                <strong>Building Real Projects:</strong> Delivered my academic
                project{" "}
                <em>Online Translation Skills Training &amp; Examination</em>{" "}
                and built an <em>Expense Tracker Web App</em> as a self-learning
                project to understand frontend–backend workflows.
              </li>
              <li>
                <strong>Learning to Self-Learn:</strong> Modern stacks like
                React and Node weren’t in the curriculum, so I taught them to
                myself, realizing that true engineering growth comes from
                building things end-to-end, not just passing exams.
              </li>
            </ul>
          </article>

          {/* ============================================
              FIRST INTERNSHIP + MASTER'S PREP
             ============================================ */}
          <article className="experience-item">
            <div
              style={{
                marginBottom: "12px",
              }}
            >
              <h3>First Internship + Master's Preparation</h3>
              <div className="experience-meta">
                Jun 2021 – Jun 2022 · Gujarat, India
              </div>
            </div>

            <ul className="experience-points">
              <li>
                <strong>Reality Check:</strong> At Image.io, I got my first
                taste of production code, Git workflows, API integrations,
                MongoDB and contributed to roughly{" "}
                <strong>20% frontend performance improvement</strong>.
              </li>
              <li>
                <strong>Balancing Acts:</strong> Handled a full-time Web
                Developer Internship while preparing for GRE, IELTS, and
                Master’s applications, all under financial and visa pressure.
              </li>
              <li>
                <strong>Resilience in Action:</strong> Faced rejections from
                some universities but kept improving my fundamentals, refining
                my coding skills, and strengthening my application profile until
                I succeeded.
              </li>
            </ul>
          </article>

          {/* ============================================
              MASTER'S BLOCK
             ============================================ */}
          <article
            className="experience-item"
            style={{ borderColor: "var(--brand)", borderWidth: "2px" }}
          >
            <div
              style={{
                marginBottom: "16px",
              }}
            >
              <h3>Master of Science in Computer Science</h3>
              <div className="experience-meta">
                Aug 2022 – Dec 2024 · Cleveland State University, OH
              </div>
            </div>

            {/* Graduation Card */}
            <div
              style={{
                margin: "20px 0",
                borderRadius: "16px",
                overflow: "hidden",
                border: "3px solid var(--brand)",
                boxShadow: "0 12px 40px rgba(0, 124, 237, 0.25)",
                background: "var(--bg-section-alt)",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  position: "relative",
                  overflow: "hidden",
                  background:
                    "linear-gradient(135deg, var(--bg-section-alt) 0%, var(--bg-card) 100%)",
                }}
              >
                <img
                  src="/images/journey/masters-graduation.jpg"
                  alt="Master's Graduation - Cleveland State University"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `
                      <div style="
                        width: 100%; 
                        height: 100%; 
                        display: flex; 
                        flex-direction: column;
                        align-items: center; 
                        justify-content: center;
                        background: linear-gradient(135deg, var(--brand), var(--brand-light));
                        color: white;
                      ">
                        <i class="fa-solid fa-user-graduate" style="font-size: 5rem; margin-bottom: 16px; opacity: 0.9;"></i>
                        <p style="font-size: 1.2rem; font-weight: 600;">Master's Journey</p>
                        <p style="font-size: 0.9rem; opacity: 0.8; margin-top: 8px;">Cleveland State University</p>
                      </div>
                    `;
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "rgba(0, 124, 237, 0.9)",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <i
                    className="fa-solid fa-graduation-cap"
                    style={{ marginRight: "6px" }}
                  ></i>
                  Class of 2024
                </div>
              </div>

              <div
                style={{
                  padding: "20px 24px",
                  background: "var(--bg-card)",
                  borderTop: "1px solid var(--border-soft)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <i
                    className="fa-solid fa-quote-left"
                    style={{
                      fontSize: "1.5rem",
                      color: "var(--brand)",
                      opacity: 0.6,
                    }}
                  ></i>
                  <p
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--text)",
                      lineHeight: "1.6",
                      fontStyle: "italic",
                      flex: 1,
                    }}
                  >
                    Beginning my master's journey at Cleveland State University
                    - a new chapter filled with challenges, growth, and endless
                    possibilities. From Gujarat to Cleveland, pursuing
                    excellence in Computer Science.
                  </p>
                </div>

                {/* Stats Row */}
                <div
                  className="stats-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                    gap: "12px",
                    marginTop: "16px",
                  }}
                >
                  <div
                    className="stats-item"
                    style={{
                      padding: "12px",
                      background: "var(--bg-section-alt)",
                      borderRadius: "10px",
                      textAlign: "center",
                      border: "1px solid var(--border-soft)",
                    }}
                  >
                    <div
                      className="stats-value"
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "var(--brand)",
                      }}
                    >
                      2024
                    </div>
                    <div
                      className="stats-label"
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        marginTop: "4px",
                      }}
                    >
                      Graduated
                    </div>
                  </div>

                  <div
                    className="stats-item"
                    style={{
                      padding: "12px",
                      background: "var(--bg-section-alt)",
                      borderRadius: "10px",
                      textAlign: "center",
                      border: "1px solid var(--border-soft)",
                    }}
                  >
                    <div
                      className="stats-value"
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "var(--brand)",
                      }}
                    >
                      CS
                    </div>
                    <div
                      className="stats-label"
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        marginTop: "4px",
                      }}
                    >
                      Major
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul className="experience-points">
              <li>
                <strong>Adapting Abroad:</strong> Adjusted to a new education
                system, culture, and expectations while staying grounded in my
                goal of becoming a stronger engineer.
              </li>
              <li>
                <strong>Focus Areas:</strong> Advanced algorithms, distributed
                systems, cloud computing, software architecture, networking, and
                data communication, all with a focus on scalability and
                reliability.
              </li>
              <li>
                <strong>Now:</strong> Having graduated in Dec 2024, I’m actively
                applying this foundation to real projects and job opportunities
                in the US.
              </li>
            </ul>
          </article>

          {/* ============================================
              CURRENT INTERNSHIP BLOCK
             ============================================ */}
          <article className="experience-item">
            <div
              style={{
                marginBottom: "12px",
              }}
            >
              <h3>Current Internship - Software Engineer Intern</h3>
              <div className="experience-meta">
                Mar 2025 – Present · Green2Gold (Remote)
              </div>
            </div>

            <ul className="experience-points">
              <li>
                <strong>Hands-On Work:</strong> Building and maintaining real
                features using Django, React, and SQL for an NGO platform with
                real donors, admins, and stakeholders.
              </li>
              <li>
                <strong>Impact:</strong> Contributed to around{" "}
                <strong>15% improvement in donor conversion</strong> through UX
                improvements and better user flows.
              </li>
              <li>
                <strong>What I’m Learning:</strong> Cross-functional
                collaboration, backend integration, payment systems (Zeffy), all
                while sharpening code quality and best practices.
              </li>
            </ul>
          </article>

          {/* ============================================
              LOOKING FORWARD BLOCK
             ============================================ */}
          <article
            className="experience-item"
            style={{ borderColor: "var(--brand)", borderWidth: "2px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  flexShrink: 0,
                  background:
                    "linear-gradient(135deg, var(--brand), var(--brand-light))",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid var(--brand)",
                  overflow: "hidden",
                }}
              >
                <i
                  className="fa-solid fa-bullseye"
                  style={{ fontSize: "2rem", color: "white" }}
                ></i>
              </div>
              <div style={{ flex: 1 }}>
                <h3>Looking Forward - Full-Time Opportunities</h3>
                <div
                  className="experience-meta"
                  style={{ color: "var(--brand)" }}
                >
                  The Next Chapter
                </div>
              </div>
            </div>

            <ul className="experience-points">
              <li>
                <strong>Short-Term Goal:</strong> Leverage my current internship
                and recent projects to strengthen my portfolio and interview
                readiness for software engineering roles.
              </li>
              <li>
                <strong>Medium-Term Goal:</strong> Secure a full-time software
                engineering role during my OPT/STEM OPT period at a
                product-driven company where I can build, ship, and iterate on
                impactful features.
              </li>
              <li>
                <strong>Long-Term Vision:</strong> Grow into a senior full-stack
                engineer and eventually move into technical leadership or
                solution architecture, while staying hands-on with code.
              </li>
              <li>
                <strong>Continuous Growth:</strong> Keep learning system design,
                cloud, clean architecture, and contributing to open source.
              </li>
            </ul>
          </article>
        </div>

        {/* ============================================
            LESSONS LEARNED BLOCK
           ============================================ */}
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            padding: "24px",
            background: "var(--bg-card)",
            borderRadius: "16px",
            border: "1px solid var(--border-soft)",
          }}
        >
          <h3 style={{ color: "var(--brand)", marginBottom: "12px" }}>
            Lessons Learned
          </h3>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>
            <strong>Failure is feedback.</strong> Every bug, every rejection,
            every challenge taught me something valuable. From struggling with
            basic syntax to building full-stack applications, the journey hasn't
            been linear, but it's been worth it. I've learned that consistency,
            curiosity, and resilience matter more than natural talent.
          </p>
        </div>
      </div>
    </section>
  );
}
