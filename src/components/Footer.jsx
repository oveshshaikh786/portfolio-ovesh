"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col footer-main">
          <div className="footer-nameRow">
            <span className="footer-mark">O</span>
            <div>
              <div className="footer-name">Ovesh Shaikh</div>
              <div className="footer-sub">
                Full-Stack Software Developer · United States
              </div>
            </div>
          </div>

          <div className="footer-social">
            <a
              href="https://github.com/oveshshaikh786"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="footer-iconBtn"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/oveshshaikh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="footer-iconBtn"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-heading">Quick Links</div>
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/experience">Experience</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-heading">Contact</div>
          <a href="mailto:oveshshaikh786@gmail.com" className="footer-email">
            oveshshaikh786@gmail.com
          </a>
          <a
            href="/resume/Ovesh_Shaikh_Resume.pdf"
            className="footer-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-regular fa-file-lines" />
            <span>Resume</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {year} Ovesh Shaikh · Built with Next.js &amp; React
      </div>
    </footer>
  );
}
