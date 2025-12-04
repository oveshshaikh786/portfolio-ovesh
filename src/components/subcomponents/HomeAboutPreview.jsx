// src/components/HomeAboutPreview.jsx
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
          I&apos;m Ovesh Shaikh, a full-stack software developer who enjoys
          turning rough ideas into clean, usable web experiences. I like working
          end-to-end – from designing the UI and API contracts to actually
          shipping and iterating on the product.
        </p>

        <p className="home-section-description">
          Outside code, you&apos;ll usually find me watching sports, playing
          games, or binge-ing an inspirational series and stealing ideas for new
          side projects.
        </p>
      </div>
    </section>
  );
}
