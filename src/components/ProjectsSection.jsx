// src/components/ProjectsSection.jsx
"use client";

import { useEffect } from "react";

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
  // Mouse-tracking glow:
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

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

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
          A mix of backend-heavy systems, data projects, and frontend work where
          I focus on clean UX, performance, and real-world flows.
        </p>

        <div className="projects-container fade-in-up delay-1">
          {/* 1. Train Ticket Booking System */}
          <article className="project-card fade-in-up">
            <Thumb
              src="/images/projects/train-ticket-booking-logo.jpg"
              alt="Train Ticket Booking System"
            />
            <h3>Train Ticket Booking System</h3>
            <p>
              Java-based train booking platform with search, booking, and
              cancellation flows, using JSON persistence and clean service
              layering to mimic a real-world backend.
            </p>
            <div className="project-tags">
              <span>Java</span>
              <span>OOP</span>
              <span>CLI / Backend</span>
            </div>
            <div className="project-actions">
              <a
                className="btn"
                href="https://github.com/oveshshaikh786/Train-ticket-booking"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Train Ticket Booking System on GitHub"
              >
                <i className="fa-brands fa-github" /> View Code
              </a>
            </div>
          </article>

          {/* 2. Contoso Retail DW */}
          <article className="project-card fade-in-up">
            <Thumb
              src="/images/projects/contoso-dw-logo.jpg"
              alt="Contoso Retail Data Warehouse"
            />
            <h3>Contoso Retail DW</h3>
            <p>
              Enterprise-style data warehouse for retail analytics using OLAP
              cube design and MDX queries to answer business questions on sales,
              customers, and product performance.
            </p>
            <div className="project-tags">
              <span>SQL Server</span>
              <span>OLAP</span>
              <span>MDX</span>
              <span>Analytics</span>
            </div>
            <div className="project-actions">
              <a
                className="btn"
                href="https://github.com/oveshshaikh786/contoso-data-analysis-dw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Contoso Retail DW Data Analysis on GitHub"
              >
                <i className="fa-brands fa-github" /> View Code
              </a>
            </div>
          </article>

          {/* 3. Twitter Clone (Next.js) */}
          <article className="project-card fade-in-up">
            <Thumb
              src="/images/projects/twitter-clone-1.png"
              alt="Twitter Clone Screenshot"
            />
            <h3>Twitter Clone</h3>
            <p>
              Full-featured social feed with post creation, likes, and auth,
              built with Next.js and a modern UI focused on responsiveness and
              clean UX.
            </p>
            <div className="project-tags">
              <span>Next.js</span>
              <span>React</span>
              <span>Tailwind CSS</span>
            </div>
            <div className="project-actions">
              <a
                className="btn"
                href="https://twitter-clone-next-js-app-two.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Twitter Clone live demo"
              >
                <i className="fa-solid fa-arrow-up-right-from-square" /> Live
                Demo
              </a>
              <a
                className="btn"
                href="https://github.com/oveshshaikh786/twitter-clone-next-js-app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Twitter Clone code on GitHub"
              >
                <i className="fa-brands fa-github" /> View Code
              </a>
            </div>
          </article>

          {/* 4. InboxGenie.ai – In Progress */}
          <article className="project-card fade-in-up">
            <Thumb src="/images/projects/inboxgenie.png" alt="InboxGenie.ai" />
            <h3>InboxGenie.ai (In Progress)</h3>
            <p>
              Smart email assistant that will draft replies, summarize threads,
              and extract action items directly from your inbox, powered by
              Spring Boot and Spring AI.
            </p>
            <div className="project-tags">
              <span>Spring Boot</span>
              <span>Spring AI</span>
              <span>OAuth2</span>
              <span>Gmail / Outlook API</span>
            </div>
            <div className="project-actions">
              <span
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-muted)",
                  fontWeight: 500,
                }}
              >
                🚧 In development – repo &amp; demo coming soon.
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
