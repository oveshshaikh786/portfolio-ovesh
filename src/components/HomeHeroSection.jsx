// src/components/HomeHero.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero-inner">
        <div className="home-hero-left">
          <span className="hero-badge">Available for hire</span>

          <h1 className="hero-title">
            Building Reliable
            <br />
            Web Experiences
          </h1>

          <p className="hero-subtitle">
            Full-Stack Developer focused on React, Node.js &amp; Java — turning
            product ideas into clean, scalable, and user-friendly applications.
          </p>

          <div className="hero-cta-row">
            <Link href="/projects" className="btn hero-primary">
              <span>View My Work </span>
              <i className="fa-solid fa-arrow-right-long" />
            </Link>

            <a
              href="/Ovesh_Shaikh_Resume.pdf"
              className="btn hero-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-regular fa-file-lines" />
              <span> Resume</span>
            </a>

            <Link href="/contact" className="hero-text-link">
              <i className="fa-regular fa-envelope" />
              <span>Contact</span>
            </Link>
          </div>

          <div className="hero-mini-stats">
            <div className="hero-mini-stat">
              <span className="num">4+</span>
              <span className="label">Projects</span>
            </div>
            <div className="hero-mini-stat">
              <span className="num">2</span>
              <span className="label">Internships</span>
            </div>
            <div className="hero-mini-stat">
              <span className="num">3+ yrs</span>
              <span className="label">Experience Coding</span>
            </div>
          </div>
        </div>

        <div className="home-hero-right">
          <div className="hero-photo-card">
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
    </section>
  );
}
