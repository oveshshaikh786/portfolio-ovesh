"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-blob hero-blobA" />
        <span className="hero-blob hero-blobB" />
        <span className="hero-grid" />
      </div>

      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="hero-pill">
              <span className="hero-dot" />
              Available for hire
            </span>
          </div>

          <h1 className="hero-h1">
            Backend Engineer,
            <br />
            Full-Stack Capable
          </h1>

          <p className="hero-p">
            Software Engineer at PDDN Inc — building SaaS products with Java,
            Spring Boot, React, and Python. I own features end-to-end: API
            design, backend logic, and shipping to production.
          </p>

          <div className="hero-ctas">
            <Link href="/projects" className="btn btn-primary">
              <span>View My Work</span>
              <i className="fa-solid fa-arrow-right-long" />
            </Link>

            <a
              href="/Ovesh_Shaikh_Resume.pdf"
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-regular fa-file-lines" />
              <span>Resume</span>
            </a>

            <Link href="/contact" className="hero-link">
              <i className="fa-regular fa-envelope" />
              <span>Contact</span>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-statNum">10+</div>
              <div className="hero-statLabel">Projects</div>
            </div>
            <div className="hero-stat">
              <div className="hero-statNum">3</div>
              <div className="hero-statLabel">Roles</div>
            </div>
            <div className="hero-stat">
              <div className="hero-statNum">4+ yrs</div>
              <div className="hero-statLabel">Experience</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-frame">
            <div className="hero-frameGlow" aria-hidden="true" />
            <div className="hero-image">
              <Image
                src="/images/main_photo_98.jpg"
                alt="Ovesh Shaikh"
                fill
                priority
                sizes="(min-width: 900px) 460px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
