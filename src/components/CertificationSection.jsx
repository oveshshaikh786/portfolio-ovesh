// src/components/CertificationsSection.jsx
"use client";

import { useEffect, useState } from "react";

const CERTS = [
  {
    id: "Google-python",
    title: "Google IT Automation with Python",
    org: "Coursera",
    year: "Processing...",
    image: "/images/certifications/Coursera-Certificate.jpg",
  },
  {
    id: "react-complete",
    title: "React – The Complete Guide",
    org: "Academind / Udemy",
    year: "2021",
    image: "/images/certifications/React_The_Complete_Guide.jpg",
  },
  {
    id: "ai-for-india",
    title: "Face Recognition using Python",
    org: "GUVI · AI-For-India",
    year: "2021",
    image: "/images/certifications/GUVI_Certification.png",
  },
];

export default function CertificationsSection() {
  const [activeCert, setActiveCert] = useState(null);

  // Close on ESC + lock scroll when modal is open
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setActiveCert(null);
    }
    if (activeCert) {
      document.addEventListener("keydown", onKey);
      document.body.classList.add("modal-open");
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-open");
    };
  }, [activeCert]);

  return (
    <section
      id="certifications"
      className="section"
      style={{ background: "var(--bg-skills)" }}
    >
      <div className="certs-wrap">
        <h2>CERTIFICATIONS</h2>
        <p className="section-lead">
          A snapshot of a few certifications that shaped my learning journey.
        </p>

        <div className="certs-grid">
          {CERTS.map((cert, idx) => (
            <article
              key={cert.id}
              className="cert-card fade-in-up"
              style={{ "--stagger": `${90 * idx}ms` }}
              onClick={() => setActiveCert(cert)}
            >
              <div className="cert-thumb">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.innerHTML = `
                      <div class="cert-fallback">
                        <i class="fa-solid fa-certificate cert-fallback-icon"></i>
                        <span>Certificate</span>
                      </div>
                    `;
                  }}
                />
                <div className="cert-overlay">
                  <div className="cert-overlay-inner">
                    <div className="cert-overlay-icon">
                      <i className="fa-solid fa-eye" />
                    </div>
                    <span>View Certificate</span>
                  </div>
                </div>
              </div>

              <div className="cert-meta">
                <div className="cert-title-line">
                  <h3 className="cert-title">{cert.title}</h3>
                  <span className="cert-year-pill">{cert.year}</span>
                </div>
                <p className="cert-org">{cert.org}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeCert && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setActiveCert(null)}
        >
          <figure className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="cert-modal-close"
              aria-label="Close"
              onClick={() => setActiveCert(null)}
            >
              ✕
            </button>
            <img
              src={activeCert.image}
              alt={activeCert.title}
              className="cert-modal-image"
            />
            <figcaption className="cert-modal-caption">
              <div className="cert-modal-title">{activeCert.title}</div>
              <div className="cert-modal-sub">
                {activeCert.org} • {activeCert.year}
              </div>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
