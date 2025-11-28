// src/components/HomeSection.jsx
"use client";

import { useEffect, useState } from "react";
//import ParticleBackground from "./ParticleBackground";

export default function HomeSection() {
  // --- Typing Animation State ---
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ["Software Engineer", "Full-Stack Developer", "Problem Solver"];

  // --- Responsive Check State (outside typing useEffect) ---
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      handleResize(); // run once
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // --- Typing Animation Effect ---
  useEffect(() => {
    const currentRole = roles[currentIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.substring(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentRole.substring(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, roles]);

  return (
    <div className="hero-header" id="home">
      {/* <div className="bg-canvas">
        <ParticleBackground />
      </div> */}

      <div className="wrapper">
        <div className="container">
          {/* --- Profile Image --- */}
          <div className="hero-pic">
            <img
              src="/images/main_photo_1.png"
              alt="Ovesh Shaikh - Profile Picture"
            />
          </div>

          {/* --- Hero Text --- */}
          <div className="hero-text">
            <h5
              style={{
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: "2px",
                marginBottom: "8px",
                opacity: 0,
                animation: "fadeInUp 0.8s ease 0.2s forwards",
              }}
            >
              HI I'M{" "}
              <span
                className="input"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand), var(--brand-light))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                }}
              >
                {displayText}
                <span
                  style={{
                    borderRight: "2px solid var(--brand)",
                    animation: "blink 1s step-end infinite",
                    marginLeft: "2px",
                  }}
                >
                  ‎
                </span>
              </span>
            </h5>

            <h1
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease 0.4s forwards",
              }}
            >
              Ovesh Shaikh
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: "1.7",
                marginTop: "16px",
                opacity: 0,
                animation: "fadeInUp 0.8s ease 0.6s forwards",
              }}
            >
              I build scalable web applications that blend{" "}
              <span
                style={{
                  color: "var(--brand)",
                  fontWeight: 600,
                  position: "relative",
                }}
              >
                clean design
                <span
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    left: 0,
                    width: "100%",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, var(--brand), transparent)",
                    animation: "slideIn 0.8s ease 1.2s forwards",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                  }}
                ></span>
              </span>{" "}
              with{" "}
              <span
                style={{
                  color: "var(--brand)",
                  fontWeight: 600,
                  position: "relative",
                }}
              >
                robust performance
                <span
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    left: 0,
                    width: "100%",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, var(--brand), transparent)",
                    animation: "slideIn 0.8s ease 1.4s forwards",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                  }}
                ></span>
              </span>
              . I design and ship modern, user-centric solutions using React.js,
              Node.js, Java, Spring Boot, and SQL/MongoDB.
            </p>

            {/* --- Animated Stats --- */}
            <div
              style={{
                display: "flex",
                justifyContent: isMobile ? "center" : "flex-start",
                alignItems: "center",
                gap: "24px",
                marginTop: "24px",
                flexWrap: "wrap",
                opacity: 0,
                animation: "fadeInUp 0.8s ease 0.8s forwards",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <i
                  className="fa-solid fa-code"
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--brand)",
                    animation: "bounce 2s ease infinite",
                  }}
                ></i>
                <div>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "var(--brand)",
                      lineHeight: 1,
                    }}
                  >
                    4+
                  </div>
                  <div
                    style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                  >
                    Projects
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <i
                  className="fa-solid fa-briefcase"
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--brand)",
                    animation: "bounce 2s ease 0.4s infinite",
                  }}
                ></i>
                <div>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "var(--brand)",
                      lineHeight: 1,
                    }}
                  >
                    2
                  </div>
                  <div
                    style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                  >
                    Internships
                  </div>
                </div>
              </div>
            </div>

            {/* --- CTA Buttons --- */}
            <div
              className="btn-group"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease 1s forwards",
              }}
            >
              <a
                href="#projects"
                className="btn"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand), var(--brand-light))",
                  border: "none",
                  color: "#fff",
                  boxShadow: "0 4px 15px rgba(0, 124, 237, 0.4)",
                }}
              >
                <i className="fa-solid fa-rocket"></i> View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                <i className="fa-solid fa-envelope"></i> Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- Animations --- */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          to {
            transform: scaleX(1);
          }
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
