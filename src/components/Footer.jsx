// src/components/Footer.jsx
"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* LEFT: Name + role + location */}
        <div className="footer-section footer-section-main">
          <h3 className="footer-name">Ovesh Shaikh</h3>
          <p className="footer-role">Full-Stack Software Developer</p>
          <p className="footer-location">United States</p>
        </div>

        {/* MIDDLE: Quick links */}
        <div className="footer-section footer-section-links">
          <p className="footer-heading">Quick Links</p>
          <ul className="footer-links">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/experience">Experience</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* RIGHT: Social + email */}
        <div className="footer-section footer-section-connect">
          <p className="footer-heading">Connect</p>
          <div className="footer-social">
            <a
              href="https://github.com/oveshshaikh786"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/oveshshaikh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </div>
          <a
            href="mailto:oveshshaikh786@gmail.com"
            className="footer-email-link"
          >
            oveshshaikh786@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {year} <span>Ovesh Shaikh</span>. Built with Next.js &amp; React.
      </div>
    </footer>
  );
}
