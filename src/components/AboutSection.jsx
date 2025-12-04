// src/components/AboutSection.jsx
export default function AboutSection() {
  return (
    <section id="about" className="home-section home-section-alt about">
      <div className="home-section-inner">
        {/* Header like home sections */}
        <header className="home-section-header">
          <div>
            <div className="home-section-kicker">About</div>
            <h2 className="home-section-title">About Me</h2>
          </div>
        </header>

        {/* Intro story */}
        <div className="about-intro">
          <p>
            I&apos;m a full-stack developer who didn&apos;t start as the
            smartest in the room—I started as a curious backbencher who learned
            by breaking things and fixing them.
          </p>
          <ul
            style={{
              maxWidth: "750px",
              margin: "16px auto 0",
              textAlign: "left",
              lineHeight: 1.7,
              color: "var(--text-muted)",
            }}
          >
            <li>
              From a naughty backbencher in school to earning my Master’s in the
              United States, my path hasn’t been straight or perfect—but it’s
              been full of growth.
            </li>
            <li>
              I didn’t start as the smartest in the room. I started with doubt,
              limited exposure, and a lot of trial-and-error, learning by
              breaking things and then fixing them.
            </li>
            <li>
              Every setback, late night, and small breakthrough shaped the
              developer I am today—someone who leads with grit, curiosity, and a
              refusal to give up.
            </li>
          </ul>
        </div>

        {/* Identity card */}
        <div className="about-identity">
          <div className="about-identity-left">
            <div className="about-avatar">
              <img
                src="/images/main_photo_1.png"
                alt="Ovesh Shaikh portrait"
                loading="lazy"
              />
            </div>

            <div className="about-quick">
              <div className="about-stat">
                <div className="about-stat-num">3+</div>
                <div className="about-stat-label">Years Coding</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">2</div>
                <div className="about-stat-label">Internships</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">M.S.</div>
                <div className="about-stat-label">Computer Science</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">USA</div>
                <div className="about-stat-label">Based in United States</div>
              </div>
            </div>
          </div>

          <div className="about-identity-right">
            <h3 className="about-title">
              Developer with grit, curiosity, and consistency.
            </h3>
            <p className="about-text">
              I enjoy building web applications that feel smooth on the surface
              and solid under the hood—clean React interfaces, reliable APIs,
              and data that actually makes sense. I care about readable code,
              small UI details, and finishing what I start.
            </p>
            <p className="about-text">
              My background spans frontend (React, Next.js, Tailwind), backend
              (Node.js, Java, Spring Boot basics), and databases (MongoDB,
              MySQL, SQL Server). I like owning a feature end-to-end: from idea
              → implementation → deployment → feedback.
            </p>

            <div className="about-pills">
              <span className="about-pill">Full-Stack Web Dev</span>
              <span className="about-pill">React &amp; Next.js</span>
              <span className="about-pill">Java / Spring Boot</span>
              <span className="about-pill">SQL &amp; Data Work</span>
              <span className="about-pill">Clean, Maintainable Code</span>
            </div>

            <div className="about-cta">
              <a href="/work" className="btn btn-outline">
                <i className="fa-solid fa-rocket" /> View My Work
              </a>
              <a href="/contact" className="btn">
                <i className="fa-solid fa-envelope" /> Let&apos;s Connect
              </a>
            </div>
          </div>
        </div>

        {/* Journey timeline */}
        <div className="about-timeline-wrap">
          <h3 className="about-subheading">
            <i className="fa-solid fa-route" /> Journey So Far
          </h3>

          <ul className="about-timeline">
            {/* 1. Early path / India */}
            <li className="about-timeline-item">
              <div className="about-timeline-dot" />
              <div className="about-timeline-content">
                <div className="about-timeline-when">
                  School → Diploma → Bachelor · Gujarat, India
                </div>
                <div className="about-timeline-title">
                  From Backbencher to Computer Engineer
                </div>
                <div className="about-timeline-place">
                  S.B. Polytechnic · K.J. Institute of Engineering &amp;
                  Technology
                </div>
                <ul className="about-timeline-points">
                  <li>
                    Started as the “back row” student who preferred computers
                    over textbooks, but slowly shifted into the guy people ask
                    for help with code and tech.
                  </li>
                  <li>
                    Built my first real app during Diploma—a basic Android
                    Attendance Management System—which made me realize I enjoy
                    building tools people actually use.
                  </li>
                </ul>
              </div>
            </li>

            {/* 2. First internship (ImageIO) */}
            <li className="about-timeline-item">
              <div className="about-timeline-dot" />
              <div className="about-timeline-content">
                <div className="about-timeline-when">
                  Jul 2021 – Jun 2022 · Vadodara, India
                </div>
                <div className="about-timeline-title">
                  Web Developer Intern – ImageIO
                </div>
                <div className="about-timeline-place">
                  React · Node.js · MongoDB · Git · REST APIs
                </div>
                <ul className="about-timeline-points">
                  <li>
                    Got my first taste of production code—Git workflows, REST
                    APIs, debugging JSON, and dealing with real users, not just
                    assignments.
                  </li>
                  <li>
                    Helped improve response times and frontend stability,
                    cutting bugs by roughly <strong>30%</strong> across key
                    flows.
                  </li>
                </ul>
              </div>
            </li>

            {/* 3. Master’s + key projects */}
            <li className="about-timeline-item">
              <div className="about-timeline-dot" />
              <div className="about-timeline-content">
                <div className="about-timeline-when">
                  Aug 2021 – Dec 2024 · Cleveland, Ohio
                </div>
                <div className="about-timeline-title">
                  Master’s in Computer Science – Cleveland State University
                </div>
                <div className="about-timeline-place">
                  Focus: Software Engineering · Data Systems · Security
                </div>
                <ul className="about-timeline-points">
                  <li>
                    Built a <strong>Train Ticket Booking System</strong> (Java +
                    JSON persistence, later evolving toward Spring Boot) to
                    simulate real-world booking flows and backend design.
                  </li>
                  <li>
                    Designed a <strong>Contoso Retail DW</strong> project using
                    OLAP cubes and MDX for data analysis and business
                    intelligence.
                  </li>
                  <li>
                    Implemented an <strong>Apriori Algorithm</strong> web app
                    (Python + Flask) for frequent itemset mining and association
                    rules.
                  </li>
                  <li>
                    Balanced part-time work at the Viking Card Office with
                    coursework, improving service workflows and learning how to
                    stay consistent under pressure.
                  </li>
                </ul>
              </div>
            </li>

            {/* 4. Current – Green2Gold */}
            <li className="about-timeline-item">
              <div className="about-timeline-dot" />
              <div className="about-timeline-content">
                <div className="about-timeline-when">
                  Mar 2025 – Present · Remote · Simi Valley, CA
                </div>
                <div className="about-timeline-title">
                  Software Engineer Intern – Green2Gold
                </div>
                <div className="about-timeline-place">
                  React · Tailwind · Django · SQL · Zeffy Integration
                </div>
                <ul className="about-timeline-points">
                  <li>
                    Working on donation and event flows for nonprofits—building
                    reusable React components and backend APIs that actually
                    move metrics.
                  </li>
                  <li>
                    Applying everything I learned from school + side projects to
                    real product decisions, performance work, and cleaner code.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* Fun / personality strip */}
        <div className="about-fun">
          <div className="about-fun-card">
            <i className="fa-solid fa-gears" />
            <div>
              <div className="about-fun-title">How I work</div>
              <p className="about-fun-text">
                I like clear ownership, honest feedback, and small iterations.
                Give me a problem, context, and constraints—I’ll figure out the
                rest and keep you updated.
              </p>
            </div>
          </div>

          <div className="about-fun-card">
            <i className="fa-solid fa-gamepad" />
            <div>
              <div className="about-fun-title">Beyond Code</div>
              <p className="about-fun-text">
                When I&apos;m not coding, I’m usually watching sports, playing
                games, or listening to music and motivational stories—anything
                that recharges me and gives fresh ideas.
              </p>
            </div>
          </div>

          <div className="about-fun-card">
            <i className="fa-solid fa-magnifying-glass-chart" />
            <div>
              <div className="about-fun-title">What I&apos;m Looking For</div>
              <p className="about-fun-text">
                Full-stack or frontend-heavy roles where I can own features,
                improve performance, and work with a team that values clean
                code, learning, and shipping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
