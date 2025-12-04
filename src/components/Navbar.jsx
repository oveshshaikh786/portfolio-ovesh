"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const progressRef = useRef(null);

  // ✅ Now these are PAGES, not section IDs
  const links = [
    { href: "/", label: "HOME" },
    { href: "/experience", label: "EXPERIENCE" }, // ⬅️ renamed from WORK
    { href: "/projects", label: "PROJECTS" }, // ⬅️ new
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
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
   * Simple page scroll progress
   * ---------------------------------------- */
  useEffect(() => {
    const updateProgress = () => {
      if (!progressRef.current) return;

      const doc = document.documentElement;
      const scrollTop = window.pageYOffset || doc.scrollTop;
      const scrollHeight = doc.scrollHeight - window.innerHeight;

      const pct =
        scrollHeight > 0
          ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100))
          : 0;

      progressRef.current.style.width = `${pct}%`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

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
                <Link href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right-side controls */}
          <div className="nav-actions">
            <ThemeToggle />

            {/* Resume button now opens PDF directly */}
            <a
              href="/resume/Ovesh_Shaikh_Resume.pdf"
              className="nav-resume-btn"
              target="_blank"
              rel="noopener noreferrer"
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
