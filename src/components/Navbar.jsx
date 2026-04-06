"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const progressRef = useRef(null);
  const pathname = usePathname();

  const links = useMemo(
    () => [
      { href: "/", label: "HOME" },
      { href: "/experience", label: "EXPERIENCE" },
      { href: "/projects", label: "PROJECTS" },
      { href: "/about", label: "ABOUT" },
      { href: "/contact", label: "CONTACT" },
    ],
    [],
  );

  // Lock body scroll on mobile drawer
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

  // Scroll progress
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

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <>
      <div className="nav-progress" ref={progressRef} />

      <header className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
            <span className="nav-brandMark">O</span>
            <span className="nav-brandText">Ovesh Shaikh</span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link ${isActive(l.href) ? "is-active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <ThemeToggle />

            <a
              href="/resume/Ovesh_Shaikh_Resume.pdf"
              className="nav-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>

            <button
              className={`nav-burger ${open ? "is-open" : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="nav-drawer"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          id="nav-drawer"
          className={`nav-drawer ${open ? "open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="nav-drawerTop">
            <div className="nav-drawerTitle">Menu</div>
            <button
              className="nav-drawerClose"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>

          <div className="nav-drawerLinks">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`nav-drawerLink ${isActive(l.href) ? "is-active" : ""}`}
              >
                {l.label}
                <i className="fa-solid fa-arrow-right-long" />
              </Link>
            ))}
          </div>

          <div className="nav-drawerFooter">
            <a
              href="/resume/Ovesh_Shaikh_Resume.pdf"
              className="nav-drawerCta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <i className="fa-regular fa-file-lines" />
              <span>Open Resume</span>
            </a>
          </div>
        </div>

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
