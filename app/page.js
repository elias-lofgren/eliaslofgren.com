export default function HomePage() {
  return (
    <>
      <div className="bg-grain" aria-hidden="true" />
      <div className="bg-gradient" aria-hidden="true" />

      <main className="shell">
        <header className="topbar reveal">
          <p className="brand">Elias Lofgren</p>
          <a className="pill" href="mailto:hello@eliaslofgren.com">
            Let&apos;s talk
          </a>
        </header>

        <section className="hero reveal">
          <p className="eyebrow">Digital business card</p>
          <h1>
            Building clear, <span className="accent">intentional</span> digital
            experiences.
          </h1>
          <p className="lead">
            I help brands and teams shape thoughtful web products with strong
            design, reliable engineering, and calm execution.
          </p>

          <div className="cta-row">
            <a className="button solid" href="mailto:hello@eliaslofgren.com">
              Email me
            </a>
            <a
              className="button ghost"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="button ghost"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>

        <section className="grid reveal">
          <article className="card">
            <h2>What I do</h2>
            <p>
              Product design and frontend development with a focus on
              accessibility, performance, and long-term maintainability.
            </p>
          </article>
          <article className="card">
            <h2>How I work</h2>
            <p>
              Structured collaboration, direct communication, and a practical
              process from first sketch to production release.
            </p>
          </article>
          <article className="card">
            <h2>Based in</h2>
            <p>
              Stockholm, Sweden. Available for remote collaborations and
              selected in-person projects.
            </p>
          </article>
        </section>

        <section className="contact reveal">
          <h2>Open for new projects</h2>
          <p>
            If you need a partner for your next web initiative, I&apos;m happy
            to connect.
          </p>
          <a className="button solid" href="mailto:hello@eliaslofgren.com">
            hello@eliaslofgren.com
          </a>
        </section>
      </main>
    </>
  );
}
