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
          // fallback to a generic placeholder if the image path is wrong/missing
          e.currentTarget.src = "/images/image.png";
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
    <section id="projects">
      <h2 className="projects-title fade-in-up">MY PROJECTS</h2>

      <div className="projects-container fade-in-up delay-1">
        {/*1. */}
        <article className="project-card fade-in-up">
          <Thumb
            src="/images/projects/train-ticket-booking-logo.jpg"
            alt="Train Ticket Booking System"
          />
          <h3>Train Ticket Booking System</h3>
          <p>
            Full-stack train booking platform with containerized backend
            architecture for scalability and performance.
          </p>
          <div className="project-tags">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>Docker</span>
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
        {/*2. */}
        <article className="project-card fade-in-up">
          <Thumb
            src="/images/projects/contoso-dw-logo.jpg"
            alt="Contoso Retail Data Warehouse"
          />
          <h3>Contoso Retail DW</h3>
          <p>
            Enterprise data warehouse solution with OLAP cubes for advanced
            retail analytics and business intelligence.
          </p>
          <div className="project-tags">
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
        {/*3. */}
        <article className="project-card fade-in-up">
          <Thumb
            src="/images/projects/twitter-clone-1.png"
            alt="Twitter Clone Screenshot"
          />
          <h3>Twitter Clone</h3>
          <p>
            Feature-rich social media platform with real-time updates, JWT
            authentication, and modern UI/UX design.
          </p>
          <div className="project-tags">
            <span>Next.js</span>
            <span>React</span>
            <span>JWT</span>
          </div>
          <div className="project-actions">
            <a
              className="btn"
              href="https://twitter-clone-next-js-app-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Twitter Clone live demo"
            >
              <i className="fa-solid fa-arrow-up-right-from-square" /> Live Demo
            </a>

            <a
              className="btn"
              href="https://github.com/oveshshaikh786/Twitter-Clone-Next.js-app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Twitter Clone on GitHub"
            >
              <i className="fa-brands fa-github" /> View Code
            </a>
          </div>
        </article>

        {/*4. */}
        <article className="project-card fade-in-up">
          <div className="project-thumb placeholder-thumb">
            <span>BUILDING IN PROGRESS</span>
          </div>

          <h3>InboxGenie.ai</h3>
          <p>
            AI-powered email assistant currently under development. Features
            include smart replies, thread summaries, and automated action-item
            extraction.
          </p>

          <div className="project-tags">
            <span>Spring Boot</span>
            <span>Spring AI</span>
            <span>OAuth2</span>
            <span>Gmail / Outlook API</span>
          </div>

          <div className="project-actions">
            <a
              className="btn"
              href="https://github.com/oveshshaikh786"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="InboxGenie.ai repository (coming soon)"
            >
              <i className="fa-brands fa-github" /> View Code (Soon)
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
