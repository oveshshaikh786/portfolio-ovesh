// src/components/CurrentFocusSection.jsx
"use client";

import { useState, useEffect } from "react";

/* -- Badge Modal (theme-aware) -- */
function BadgeModal({ badge, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onEsc);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeIn 0.3s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--modal-backdrop)",
          backdropFilter: "blur(8px)",
        }}
      />

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "90%",
          maxWidth: 500,
          background: "var(--modal-bg)",
          borderRadius: 24,
          padding: 40,
          boxShadow: "0 20px 60px rgba(0,0,0,.25)",
          animation: "scaleIn .3s cubic-bezier(.34,1.56,.64,1)",
          border: "2px solid var(--modal-border)",
          color: "var(--modal-text)",
          textAlign: "center",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,.2)",
            background: "rgba(255,255,255,.15)",
            color: "inherit",
            fontSize: 18,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all .3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,.25)";
            e.currentTarget.style.transform = "rotate(90deg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,.15)";
            e.currentTarget.style.transform = "rotate(0deg)";
          }}
        >
          ✕
        </button>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 200,
              height: 200,
              background: badge.color,
              borderRadius: "50%",
              filter: "blur(60px)",
              opacity: 0.3,
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "relative",
              width: 160,
              height: 160,
              margin: "0 auto 24px",
              borderRadius: "50%",
              background: badge.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "5rem",
              boxShadow: "0 20px 40px rgba(0,0,0,.2)",
              animation: "float 3s ease-in-out infinite",
              border: "4px solid rgba(255,255,255,.2)",
            }}
          >
            {badge.icon}
          </div>

          <h3
            style={{
              fontSize: "1.8rem",
              fontWeight: 700,
              marginBottom: 8,
              textShadow: "0 2px 10px rgba(0,0,0,.15)",
            }}
          >
            {badge.name}
          </h3>

          <div
            style={{
              display: "inline-block",
              padding: "8px 20px",
              background: "rgba(0,0,0,0.06)",
              color: "var(--text-muted)",
              borderRadius: 20,
              fontSize: ".95rem",
              marginBottom: 24,
              backdropFilter: "blur(10px)",
              border: "1px solid var(--modal-border)",
            }}
          >
            Earned on: {badge.fullDate}
          </div>

          <a
            href="https://leetcode.com/ovesh786"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              background: "linear-gradient(135deg,#00E396,#00A67E)",
              color: "#fff",
              borderRadius: 999,
              fontSize: "1rem",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 8px 20px rgba(0,227,150,.3)",
              transition: "all .3s ease",
              border: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 12px 28px rgba(0,227,150,.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,227,150,.3)";
            }}
          >
            <i className="fa-solid fa-link" />
            View on LeetCode
          </a>
        </div>

        <style>{`
          @keyframes fadeIn { from{opacity:0} to{opacity:1} }
          @keyframes scaleIn { from{opacity:0;transform:scale(.8)} to{opacity:1;transform:scale(1)} }
          @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
          @keyframes pulse { 0%,100%{opacity:.3} 50%{opacity:.5} }
        `}</style>
      </div>
    </div>
  );
}

/* -- Badges Grid -- */
function BadgesSection({ badges }) {
  const [selectedBadge, setSelectedBadge] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <div style={{ marginTop: 32, marginBottom: 32 }}>
        <h4
          style={{
            fontSize: "1.8rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 24,
            background: "linear-gradient(135deg,#FFA116,#00E396)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Badges &amp; Achievements ({badges.length})
        </h4>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: 20,
          }}
        >
          {badges.map((badge, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--bg-card)",
                padding: 24,
                borderRadius: 16,
                border: "1px solid var(--border-soft)",
                textAlign: "center",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                transform:
                  hoveredIndex === idx ? "translateY(-8px)" : "translateY(0)",
                boxShadow:
                  hoveredIndex === idx
                    ? "0 12px 24px rgba(0,124,237,.2)"
                    : "none",
                transition: "all .3s ease",
              }}
              onClick={() => setSelectedBadge(badge)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  margin: "0 auto 16px",
                  borderRadius: "50%",
                  background: badge.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                  boxShadow: "0 8px 20px rgba(0,0,0,.2)",
                  transform:
                    hoveredIndex === idx
                      ? "scale(1.1) rotate(5deg)"
                      : "scale(1)",
                  transition: "all .3s ease",
                }}
              >
                {badge.icon}
              </div>
              <div
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: 8,
                }}
              >
                {badge.name}
              </div>
              <div
                style={{
                  fontSize: ".85rem",
                  color: "var(--text-muted)",
                  background: "var(--bg-section-alt)",
                  padding: "4px 12px",
                  borderRadius: 12,
                  display: "inline-block",
                }}
              >
                {badge.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedBadge && (
        <BadgeModal
          badge={selectedBadge}
          onClose={() => setSelectedBadge(null)}
        />
      )}
    </>
  );
}

/* -- Helper KPI Tile -- */
function Tile({ bg, shadow, label, value }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: 24,
        background: bg,
        borderRadius: 16,
        position: "relative",
        overflow: "hidden",
        boxShadow: `0 8px 32px ${shadow}`,
      }}
    >
      <div
        style={{
          fontSize: "2.6rem",
          fontWeight: 800,
          color: "#fff",
          position: "relative",
          zIndex: 1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: ".9rem",
          color: "rgba(255,255,255,.95)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* -- Helper Progress Row -- */
function BarRow({ label, solved, total, grad }) {
  const percent = !total ? 0 : Math.round((solved / total) * 100);
  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <span style={{ color: "var(--text)", fontWeight: 600 }}>{label}</span>
        <span style={{ color: "var(--text-muted)" }}>
          {solved} / {total}
        </span>
      </div>
      <div
        style={{
          width: "100%",
          height: 10,
          background: "var(--bg-section-alt)",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            background: grad,
            borderRadius: 10,
            animation: "progressBar 2s ease forwards",
          }}
        />
      </div>
    </div>
  );
}

/* -- Main Section --*/
export default function CurrentFocusSection() {
  const [activeTab, setActiveTab] = useState("leetcode");
  const [leetcode, setLeetcode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const USERNAME = "ovesh786";

  useEffect(() => {
    if (activeTab !== "leetcode") return;

    let cancelled = false;
    (async () => {
      setLoading(true);
      setErr("");
      try {
        const res = await fetch(`/api/leetcode?username=${USERNAME}`, {
          cache: "no-store",
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || "Failed to load");
        if (!cancelled) setLeetcode(json);
      } catch (e) {
        if (!cancelled) setErr(e.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [activeTab]);

  const badges = [
    {
      name: "50 Days",
      date: "Oct 2025",
      fullDate: "Mon, Oct 20, 2025",
      icon: "🌟",
      color: "linear-gradient(135deg,#7FFF00,#32CD32)",
    },
    {
      name: "100 Days",
      date: "Dec 2025",
      fullDate: "Tue, Dec 9, 2025",
      icon: "💎",
      color: "linear-gradient(135deg,#00D4FF,#0099CC)",
    },
    {
      name: "LeetCode Blind 75",
      date: "Dec 2025",
      fullDate: "Wed, Dec 10, 2025",
      icon: "🎯",
      color: "linear-gradient(135deg,#FF6B6B,#C92A2A)",
    },
  ];

  return (
    <section id="current-focus" className="home-section home-section-alt">
      <div className="home-section-inner">
        <header className="home-section-header">
          <div>
            <div className="home-section-kicker">Now</div>
            <h2 className="home-section-title">What I&apos;m Working On</h2>
          </div>
        </header>

        <p className="home-section-description">
          Continuous learning and building—this is what&apos;s keeping me sharp
          right now.
        </p>

        {/* Tabs */}
        <div className="btn-group" style={{ justifyContent: "center" }}>
          <button
            className={`btn ${activeTab === "leetcode" ? "active" : ""}`}
            onClick={() => setActiveTab("leetcode")}
          >
            <i className="fa-solid fa-code" /> LeetCode Journey
          </button>
          <button
            className={`btn ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            <i className="fa-solid fa-laptop-code" /> Current Projects
          </button>
        </div>

        <div style={{ maxWidth: 1000, margin: "40px auto 0" }}>
          {/* LeetCode */}
          {activeTab === "leetcode" && (
            <div
              className="focus-content"
              style={{ animation: "fadeInUp .5s ease" }}
            >
              {loading ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: 60,
                    color: "var(--text-muted)",
                  }}
                >
                  <i
                    className="fa-solid fa-spinner fa-spin"
                    style={{ fontSize: "3rem", color: "var(--brand)" }}
                  />
                  <p style={{ marginTop: 16 }}>Loading LeetCode stats...</p>
                </div>
              ) : err ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: 24,
                    color: "var(--text)",
                  }}
                >
                  <p>
                    Couldn’t load stats:{" "}
                    <span style={{ color: "var(--brand)" }}>{err}</span>
                  </p>
                </div>
              ) : (
                <>
                  {/* KPI tiles */}
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg,rgba(26,50,70,.6),rgba(30,40,50,.8))",
                      padding: 32,
                      borderRadius: 20,
                      marginBottom: 32,
                      border: "1px solid rgba(255,255,255,.1)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit,minmax(140px,1fr))",
                        gap: 20,
                      }}
                    >
                      <Tile
                        bg="linear-gradient(135deg,#FFA116,#FF6B00)"
                        shadow="rgba(255,161,22,.3)"
                        label="Problems Solved"
                        value={leetcode.totalSolved}
                      />
                      <Tile
                        bg="linear-gradient(135deg,#00E396,#00A67E)"
                        shadow="rgba(0,227,150,.3)"
                        label="Easy"
                        value={leetcode.easySolved}
                      />
                      <Tile
                        bg="linear-gradient(135deg,#FFA116,#FF8042)"
                        shadow="rgba(255,161,22,.3)"
                        label="Medium"
                        value={leetcode.mediumSolved}
                      />
                      <Tile
                        bg="linear-gradient(135deg,#FF4560,#C42E3E)"
                        shadow="rgba(255,69,96,.3)"
                        label="Hard"
                        value={leetcode.hardSolved}
                      />
                    </div>
                  </div>

                  {/* Progress */}
                  <div
                    style={{
                      background: "var(--bg-card)",
                      padding: 32,
                      borderRadius: 16,
                      border: "1px solid var(--border-soft)",
                    }}
                  >
                    <h4
                      style={{
                        color: "var(--text)",
                        marginBottom: 24,
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <i className="fa-solid fa-chart-line" />
                      Problem Solving Progress
                    </h4>

                    <BarRow
                      label="Easy"
                      solved={leetcode.easySolved}
                      total={leetcode.easyQuestions}
                      grad="linear-gradient(90deg,#00E396,#00A67E)"
                    />
                    <BarRow
                      label="Medium"
                      solved={leetcode.mediumSolved}
                      total={leetcode.mediumQuestions}
                      grad="linear-gradient(90deg,#FFA116,#FF8042)"
                    />
                    <BarRow
                      label="Hard"
                      solved={leetcode.hardSolved}
                      total={leetcode.hardQuestions}
                      grad="linear-gradient(90deg,#FF4560,#C42E3E)"
                    />
                  </div>

                  {/* Badges */}
                  <BadgesSection badges={badges} />

                  {/* CTA */}
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg,rgba(0,124,237,.1),rgba(63,169,255,.1))",
                      padding: "40px 32px",
                      borderRadius: 20,
                      textAlign: "center",
                      border: "2px solid var(--brand)",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "1.8rem",
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: 12,
                      }}
                    >
                      Visit My LeetCode Profile
                    </h4>
                    <p
                      style={{
                        color: "var(--text-muted)",
                        marginBottom: 24,
                        fontSize: "1.05rem",
                      }}
                    >
                      Check out my complete problem-solving journey and progress
                    </p>
                    <a
                      href={`https://leetcode.com/${USERNAME}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "16px 32px",
                        background: "linear-gradient(135deg,#FFA116,#FF6B00)",
                        color: "#fff",
                        borderRadius: 999,
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        boxShadow: "0 8px 24px rgba(255,161,22,.4)",
                        transition: "all .3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow =
                          "0 12px 32px rgba(255,161,22,.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 24px rgba(255,161,22,.4)";
                      }}
                    >
                      <i className="fa-solid fa-rocket" />
                      View Profile
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Current Projects */}
          {activeTab === "projects" && (
            <div
              className="focus-content"
              style={{ animation: "fadeInUp .5s ease" }}
            >
              <div
                style={{
                  background: "var(--bg-card)",
                  padding: 40,
                  borderRadius: 20,
                  border: "1px solid var(--border-soft)",
                }}
              >
                <h3
                  style={{
                    color: "var(--text)",
                    textAlign: "center",
                    marginBottom: 30,
                    fontSize: "1.8rem",
                  }}
                >
                  Current Projects 🚧
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 24,
                  }}
                >
                  <div
                    className="current-project-card"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-soft)",
                      borderRadius: 16,
                      padding: 24,
                      textAlign: "center",
                      transition:
                        "transform .3s ease, box-shadow .3s ease, border-color .3s ease",
                      cursor: "pointer",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 16px 32px rgba(0, 124, 237, 0.15)";
                      e.currentTarget.style.borderColor = "var(--brand)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 18px rgba(0,0,0,0.06)";
                      e.currentTarget.style.borderColor = "var(--border-soft)";
                    }}
                  >
                    <i
                      className="fa-solid fa-briefcase"
                      style={{
                        fontSize: "2rem",
                        color: "var(--brand)",
                        marginBottom: 12,
                      }}
                    />
                    <h4 style={{ color: "var(--text)" }}>
                      InboxGenie - Smart Email Assistant building using Spring
                      Boot + Spring AI
                    </h4>
                    <p
                      style={{
                        color: "var(--text-muted)",
                        margin: "10px 0 16px",
                      }}
                    >
                      It’s short, brandable, and works beautifully for a browser
                      extension + AI tool. Granting email wishes, one reply at a
                      time.
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                        justifyContent: "center",
                      }}
                    >
                      <a
                        href="https://github.com/oveshshaikh786/job-application-tracker"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        <i className="fa-brands fa-github" /> Code
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />{" "}
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
