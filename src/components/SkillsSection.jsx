// src/components/SkillsSection.jsx
"use client";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages & Tools",
      skills: [
        {
          name: "Java",
          logo: "/images/skills/java.jpg",
          fallback: "fa-brands fa-java",
        },
        {
          name: "JavaScript",
          logo: "/images/skills/javascript.jpg",
          fallback: "fa-brands fa-js",
        },
        {
          name: "Python",
          logo: "/images/skills/python.jpg",
          fallback: "fa-brands fa-python",
        },
      ],
    },
    {
      title: "Databases & Analysis",
      skills: [
        {
          name: "SQL",
          logo: "/images/skills/sql.jpg",
          fallback: "fa-solid fa-database",
        },
        {
          name: "MySQL",
          logo: "/images/skills/mysql.jpg",
          fallback: "fa-solid fa-database",
        },
        {
          name: "MongoDB",
          logo: "/images/skills/mongodb.jpg",
          fallback: "fa-solid fa-leaf",
        },
        // {
        //   name: "Snowflake",
        //   logo: "/images/skills/snowflake.png",
        //   fallback: "fa-solid fa-snowflake",
        // },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        {
          name: "AWS",
          logo: "/images/skills/aws.jpg",
          fallback: "fa-brands fa-aws",
        },
        {
          name: "Vercel",
          logo: "/images/skills/vercel.jpg",
          fallback: "fa-brands fa-vercel",
        },
        {
          name: "Render",
          logo: "/images/skills/render.jpg",
          fallback: "fa-brands fa-render",
        },
        {
          name: "Git",
          logo: "/images/skills/git.jpg",
          fallback: "fa-brands fa-git-alt",
        },
        {
          name: "Github",
          logo: "/images/skills/github.jpg",
          fallback: "fa-brands fa-github",
        },
        {
          name: "Postman",
          logo: "/images/skills/postman.jpg",
          fallback: "fa-solid fa-bolt",
        },
        {
          name: "Zeffy(Payments API)",
          logo: "/images/skills/zeffy.png",
          fallback: "fa-solid fa-zeffy",
        },
      ],
    },
    {
      title: "BI & Data Modeling",
      skills: [
        {
          name: "Excel",
          logo: "/images/skills/excel.jpg",
          fallback: "fa-solid fa-file-excel",
        },
        {
          name: "Jupyter Notebook",
          logo: "/images/skills/jupyter.jpeg",
          fallback: "fa-solid fa-book",
        },
        {
          name: "OLAP",
          logo: "/images/skills/olap.jpg",
          fallback: "fa-solid fa-cube",
        },
      ],
    },
    {
      title: "Web Stack",
      skills: [
        {
          name: "React",
          logo: "/images/skills/react.jpg",
          fallback: "fa-brands fa-react",
        },
        {
          name: "Next.js",
          logo: "/images/skills/nextjs.jpg",
          fallback: "fa-solid fa-n",
        },
        {
          name: "Node.js",
          logo: "/images/skills/nodejs.jpg",
          fallback: "fa-brands fa-node-js",
        },
        {
          name: "Spring Boot",
          logo: "/images/skills/spring.jpg",
          fallback: "fa-solid fa-n",
        },
        {
          name: "Django",
          logo: "/images/skills/django.jpg",
          fallback: "fa-solid fa-d",
        },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          name: "VS Code",
          logo: "/images/skills/vscode.jpg",
          fallback: "fa-solid fa-code",
        },
        {
          name: "Intellij IDEA",
          logo: "/images/skills/intellij-IDEA.jpeg",
          fallback: "fa-solid fa-intellij",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <h2>SKILLS & TECHNOLOGIES</h2>
      <p>
        A comprehensive overview of the tools and technologies I work with, from
        backend and frontend to databases, cloud, and collaboration.
      </p>

      <div style={{ marginTop: 12, marginBottom: 24, textAlign: "center" }}>
        <a href="#current-focus" className="btn">
          <i className="fa-solid fa-bullseye" style={{ marginRight: 8 }} />
          See my current focus ( Projects & leetCode )
        </a>
      </div>

      {/* Fade-in for whole grid */}
      <div
        className="skills-grid"
        style={{
          marginTop: 40,
          animation: "fadeInUp 0.6s ease",
        }}
      >
        {skillCategories.map((category, idx) => (
          <div
            className="skill-card"
            key={idx}
            style={{
              animation: "fadeInUp 0.6s ease forwards",
              animationDelay: `${idx * 0.08 + 0.05}s`,
              opacity: 0,
            }}
          >
            <h3
              style={{
                marginBottom: "20px",
                textAlign: "center",
                fontSize: "1.15rem",
              }}
            >
              {category.title}
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)", // Fixed 3 columns
                gap: "16px",
                justifyItems: "center",
                alignItems: "start",
              }}
            >
              {category.skills.map((skill, skillIdx) => (
                <div
                  key={skillIdx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    padding: "16px 12px",
                    background: "var(--bg-section-alt)",
                    borderRadius: "12px",
                    border: "1px solid var(--border-soft)",
                    width: "100%",
                    minHeight: "120px",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.borderColor = "var(--brand)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 16px rgba(0, 124, 237, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "var(--border-soft)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "scale(1.15) rotate(5deg)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "scale(1) rotate(0deg)";
                      }}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `<i class="${skill.fallback}" style="font-size: 3rem; color: var(--brand)"></i>`;
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      textAlign: "center",
                      lineHeight: 1.3,
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
