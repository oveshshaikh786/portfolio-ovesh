// src/components/subcomponents/HomeAboutPreview.jsx
export default function HomeAboutPreview() {
  return (
    <section id="home-about" className="home-section">
      <div className="home-section-inner">
        <div className="home-section-header">
          <div>
            <div className="home-section-kicker">About</div>
            <h2 className="home-section-title">Who I am</h2>
          </div>
          <div className="home-section-link">
            <a href="/about">More about me</a>
          </div>
        </div>

        <p className="home-section-description">
          I&apos;m Ovesh Shaikh — a Software Engineer at PDDN Inc, building SaaS
          products end-to-end with Java, Spring Boot, React, and Python. I like
          owning a feature from API design all the way through to deployment and
          iteration.
        </p>

        <p className="home-section-description">
          Outside code, you&apos;ll find me watching sports, playing games, or
          binge-watching something inspirational and stealing ideas for the next
          side project.
        </p>
      </div>
    </section>
  );
}
