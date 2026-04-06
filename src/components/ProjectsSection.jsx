// src/components/ProjectsSection.jsx
"use client";

import { useEffect, useMemo, useState } from "react";

function Thumb({ src, alt }) {
  return (
    <div className="project-thumb">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = "/images/projects/fallback.jpg";
        }}
      />
    </div>
  );
}

export default function ProjectsSection() {
  const [active, setActive] = useState("All");

  const projects = useMemo(
    () => [
      {
        title: "Train Ticket Booking System",
        desc: "Spring Boot REST API backend for train reservations with JWT authentication, Dockerized deployment, and load-tested to handle 10K+ requests per day with sub-200ms response times.",
        image: "/images/projects/train-ticket-booking-logo.jpg",
        tags: ["Java", "Spring Boot", "Docker", "JWT", "MySQL"],
        category: "Backend",
        code: "https://github.com/oveshshaikh786/Train-ticket-booking",
      },
      {
        title: "Twitter Clone",
        desc: "Real-time microblogging platform with WebSocket-powered feed updates, JWT auth, and optimistic UI. Tested with 50+ concurrent users at under 100ms post latency.",
        image: "/images/projects/twitter-clone-1.png",
        tags: [
          "Next.js",
          "React",
          "MongoDB",
          "NextAuth",
          "WebSockets",
          "Tailwind CSS",
        ],
        category: "Full-Stack",
        demo: "https://twitter-clone-next-js-app-two.vercel.app/",
        code: "https://github.com/oveshshaikh786/Twitter-Clone-Next.js-app",
      },
      {
        title: "Contoso Retail Data Warehouse",
        desc: "Enterprise BI platform on 1M+ retail records — star schema design, SSAS OLAP cubes, MDX queries returning results in under 2 seconds, and 20+ Power BI business reports.",
        image: "/images/projects/contoso-dw-logo.jpg",
        tags: ["SQL Server", "OLAP", "MDX", "Power BI", "Star Schema"],
        category: "Data",
        code: "https://github.com/oveshshaikh786/contoso-data-analysis-dw",
      },
      {
        title: "University Course Management System",
        desc: "Java application built on 5-layer clean architecture applying SOLID principles and Factory, Observer, and Singleton design patterns across classroom and online course types.",
        image: "/images/projects/fallback.jpg",
        tags: ["Java", "OOP", "Design Patterns", "JUnit", "Maven"],
        category: "Backend",
        code: "https://github.com/oveshshaikh786/university-course-management-java",
      },
    ],
    [],
  );

  const tabs = useMemo(() => ["All", "Backend", "Full-Stack", "Data"], []);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active, projects]);

  // Mouse-tracking glow
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    cards.forEach((card) =>
      card.addEventListener("mousemove", handleMouseMove),
    );
    return () =>
      cards.forEach((card) =>
        card.removeEventListener("mousemove", handleMouseMove),
      );
  }, [filtered]);

  return (
    <section id="projects" className="home-section">
      <div className="home-section-inner">
        <header className="home-section-header">
          <div>
            <div className="home-section-kicker">Projects</div>
            <h2 className="home-section-title">Things I&apos;ve built</h2>
          </div>
        </header>

        <p className="home-section-description">
          A mix of backend systems, data engineering, and full-stack work —
          focused on clean architecture, real performance numbers, and features
          that actually ship.
        </p>

        <div className="projects-toolbar">
          <div
            className="projects-tabs"
            role="tablist"
            aria-label="Project categories"
          >
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                className={`projects-tab ${active === t ? "is-active" : ""}`}
                onClick={() => setActive(t)}
                role="tab"
                aria-selected={active === t}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filtered.map((p) => (
            <article key={p.title} className="project-card">
              <Thumb src={p.image} alt={p.title} />

              <div className="project-body">
                <div className="project-topline">
                  <h3 className="project-title">{p.title}</h3>
                </div>

                <p className="project-desc">{p.desc}</p>

                <div className="project-tags">
                  {p.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {p.demo && (
                    <a
                      className="btn btn-primary"
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${p.title} live demo`}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      Live Demo
                    </a>
                  )}

                  {p.code && (
                    <a
                      className="btn"
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${p.title} code on GitHub`}
                    >
                      <i className="fa-brands fa-github" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Currently building — separate from featured projects */}
        <div className="projects-building">
          <h3 className="projects-building-title">Currently building</h3>
          <div className="projects-building-card">
            <div className="project-topline">
              <span className="project-title">InboxGenie.ai</span>
              <span className="project-badge">In Progress</span>
            </div>
            <p className="project-desc">
              Smart email assistant that drafts replies, summarizes threads, and
              extracts action items from your inbox — powered by Spring Boot and
              Spring AI. Repo and demo coming on completion.
            </p>
            <div className="project-tags">
              {["Spring Boot", "Spring AI", "OAuth2", "Gmail API"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
