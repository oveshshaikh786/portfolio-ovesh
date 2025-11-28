// src/components/Navbar.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const progressRef = useRef(null);

  // ✅ Simplified nav: removed RESUME + CURRENT FOCUS from main list
  const links = [
    { href: "#home", label: "HOME" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#skills", label: "SKILLS" },
    { href: "#about", label: "ABOUT" },
    { href: "#contact", label: "CONTACT" },
  ];

  /* ------------------------------
   * Drawer: lock/unlock body scroll
   * ------------------------------ */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);

    if (open) {
      const currentScroll = window.pageYOffset;
      setScrollPos(currentScroll);
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${currentScroll}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollPos);
    }

    return () => window.removeEventListener("keydown", onKey);
  }, [open, scrollPos]);

  /* ----------------------------------------
   * Top progress bar (driven by links order)
   * ---------------------------------------- */
  useEffect(() => {
    const HEADER_OFFSET = 84; // keep in sync with your CSS/sticky header height

    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const computeDomain = () => {
      if (!sections.length) return { start: 0, end: 1 };

      const first = sections[0];
      const last = sections[sections.length - 1];

      const start =
        first.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;

      const lastRect = last.getBoundingClientRect();
      const lastBottom = lastRect.top + window.pageYOffset + lastRect.height;
      const end = Math.max(start + 1, lastBottom - window.innerHeight);

      return { start, end };
    };

    let domain = computeDomain();

    const updateProgress = () => {
      if (!progressRef.current) return;
      const y = window.pageYOffset;
      const pct = Math.min(
        100,
        Math.max(0, ((y - domain.start) / (domain.end - domain.start)) * 100)
      );
      progressRef.current.style.width = `${pct}%`;
    };

    const onResize = () => {
      domain = computeDomain();
      updateProgress();
    };

    const onLoad = () => {
      domain = computeDomain();
      updateProgress();
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onLoad);

    domain = computeDomain();
    updateProgress();

    const ro = new ResizeObserver(() => {
      domain = computeDomain();
      updateProgress();
    });
    sections.forEach((el) => ro.observe(el));

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onLoad);
      ro.disconnect();
    };
  }, [links]);

  /* ----------------------------------------
   * Smooth scroll with header offset
   * ---------------------------------------- */
  const handleLinkClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");

    setOpen(false);

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 84;
        const rect = element.getBoundingClientRect();
        const offsetTop = rect.top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }, 350);
  };

  return (
    <>
      {/* Top progress bar */}
      <div className="scroll-progress" ref={progressRef} />

      <header className="site-header">
        <div className="logo">
          <span className="brand-dot">O</span>
          <div className="logo-text">Ovesh Shaikh</div>
        </div>

        <nav aria-label="Primary navigation" role="navigation">
          {/* Desktop + drawer links */}
          <ul className={`navlinks ${open ? "open" : ""}`} id="primary-nav">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={handleLinkClick}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right-side controls */}
          <div className="nav-actions">
            <ThemeToggle />

            {/* Resume as a button*/}
            <a
              href="#resume"
              className="nav-resume-btn"
              onClick={handleLinkClick}
            >
              Resume
            </a>

            <button
              className={`togglebtn ${open ? "is-open" : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="primary-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>

        {open && (
          <button
            className="nav-backdrop"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
        )}
      </header>
    </>
  );
}
