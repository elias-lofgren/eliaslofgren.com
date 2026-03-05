'use client';

import { useEffect, useRef } from 'react';

const experience = [
  {
    title: 'Head of Marketing',
    company: 'Insurello',
    period: '2018 – Present',
    location: 'Stockholm',
    highlights: [
      'Built the marketing function from the ground up and developed a high-performance team',
      'Created a data-driven acquisition engine delivering stable, predictable CAC',
      'Grew brand awareness from 0 to 30%+ in Sweden',
      'Established performance marketing across Meta, Search, Display, Native, and Affiliates',
      'Led cross-functional work with product, analytics, and executive leadership',
    ],
  },
  {
    title: 'Head of Digital Sales',
    company: 'AW X (Academic Work Group)',
    period: '2017 – 2018',
    location: 'Stockholm',
    highlights: [
      'Led digital initiatives for four portfolio companies',
      'Acted as operational driver and strategic advisor to CEOs and marketing leads',
      'Built predictive performance flows and optimized end-to-end customer journeys',
    ],
  },
  {
    title: 'Co-Founder & Chief Marketing Officer',
    company: 'Battleriff Gaming',
    period: '2015 – 2017',
    location: 'Gothenburg',
    highlights: [
      'Co-founded the company and shaped business model, product, and brand',
      'Led full-funnel: acquisition, activation, retention, and monetization',
      'Bridged product and marketing using data and community insights',
      'Developed programs that delivered results despite limited resources',
    ],
  },
  {
    title: 'Growth, Product & Marketing Roles',
    company: 'Black Lizzy · Trig Social Media · Multilotto · Ladbrokes · Betsson · Meniga',
    period: '2010 – 2016',
    location: '',
    highlights: [
      'Roles spanning gaming, fintech, and agency environments across European markets',
      'Focus on paid media, product optimization, lifecycle marketing, and creative development',
    ],
  },
];

const competencies = [
  'Full-funnel ownership & go-to-market execution',
  'Brand strategy, storytelling & creative direction',
  'Performance marketing & paid acquisition',
  'CRM, lifecycle marketing & retention',
  'Product-led growth, experimentation & CRO',
  'Automation, analytics & applied AI',
  'Cross-functional leadership & alignment',
  'Tracking, attribution & MarTech',
  'International expansion',
];

export default function HomePage() {
  const heroBgRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    // ── Parallax hero background ──
    const onScroll = () => {
      const y = window.scrollY;
      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translateY(${y * 0.45}px)`;
      }
      // sticky nav reveal
      if (navRef.current) {
        if (y > 80) {
          navRef.current.classList.add('nav-visible');
        } else {
          navRef.current.classList.remove('nav-visible');
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // ── Reveal on scroll ──
    const reveals = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.revealDelay || 0;
            setTimeout(
              () => entry.target.classList.add('revealed'),
              Number(delay)
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* ── STICKY NAV ── */}
      <nav className="sticky-nav" ref={navRef}>
        <div className="nav-inner">
          <p className="nav-brand">Elias Löfgren</p>
          <a className="nav-cta" href="mailto:get@eliaslofgren.com">
            Get in touch
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-bg" ref={heroBgRef} aria-hidden="true">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>
        <div className="grain" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Growth &amp; Marketing Leader</p>
          <h1>
            Elias<br />
            <em>Löfgren</em>
          </h1>
          <p className="hero-lead">
            15+ years building and scaling revenue engines in digital consumer
            companies. Full-funnel, data-driven, and deeply invested in the craft.
          </p>
          <div className="cta-row">
            <a className="btn-solid" href="mailto:get@eliaslofgren.com">
              get@eliaslofgren.com
            </a>
            <a
              className="btn-ghost"
              href="https://linkedin.com/in/eliaslofgren"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span className="scroll-line" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="content-section">
        <div className="shell">
          <div className="about-grid" data-reveal>
            <div className="about-text">
              <p className="section-label">About</p>
              <h2>Strategic, analytical,<br />hands-on.</h2>
              <p className="body-lg">
                I help digital consumer companies grow — combining brand, product,
                data, and performance marketing with high-velocity, cross-functional
                experimentation.
              </p>
              <p className="body-md">
                Equally invested in data and instrumentation as in the creative
                craft. Strong growth happens when insights shape ideas and teams
                move quickly from concept to test to learning. Experienced in
                early-stage environments where processes are built from scratch
                and in larger organizations where the focus is scaling what already
                works.
              </p>
            </div>
            <div className="about-sidebar">
              {[
                { label: 'Currently', value: 'Head of Marketing', sub: 'Insurello · Stockholm' },
                { label: 'Experience', value: '15+ years', sub: 'Gaming · Fintech · Consumer Tech' },
                { label: 'Education', value: 'BA (Hons) Business Management', sub: 'Marketing · University of Westminster, London' },
              ].map((card, i) => (
                <div
                  key={card.label}
                  className="info-card"
                  data-reveal
                  data-reveal-delay={i * 100}
                >
                  <p className="card-label">{card.label}</p>
                  <p className="card-value">{card.value}</p>
                  <p className="card-sub">{card.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPETENCIES ── */}
      <section className="content-section tinted">
        <div className="shell">
          <p className="section-label" data-reveal>What I do</p>
          <h2 data-reveal data-reveal-delay="60">Key Competencies</h2>
          <ul className="comp-grid">
            {competencies.map((c, i) => (
              <li
                key={c}
                className="comp-item"
                data-reveal
                data-reveal-delay={80 + i * 50}
              >
                <span className="comp-dot" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="content-section">
        <div className="shell">
          <p className="section-label" data-reveal>Experience</p>
          <h2 data-reveal data-reveal-delay="60">Where I&apos;ve worked</h2>
          <div className="timeline">
            {experience.map((role, i) => (
              <article
                key={i}
                className="timeline-item"
                data-reveal
                data-reveal-delay={100 + i * 80}
              >
                <div className="timeline-meta">
                  <p className="timeline-period">{role.period}</p>
                  {role.location && (
                    <p className="timeline-location">{role.location}</p>
                  )}
                </div>
                <div className="timeline-body">
                  <h3>{role.title}</h3>
                  <p className="timeline-company">{role.company}</p>
                  <ul className="timeline-highlights">
                    {role.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-section">
        <div className="grain" aria-hidden="true" />
        <div className="contact-bg" aria-hidden="true">
          <div className="orb orb-c1" />
          <div className="orb orb-c2" />
        </div>
        <div className="shell contact-inner" data-reveal>
          <p className="section-label light">Let&apos;s talk</p>
          <h2 className="contact-heading">Open to new<br />opportunities</h2>
          <p className="contact-body">
            Whether you&apos;re building a growth function from scratch or scaling
            what already works — I&apos;d be happy to connect.
          </p>
          <div className="cta-row">
            <a className="btn-solid light" href="mailto:get@eliaslofgren.com">
              get@eliaslofgren.com
            </a>
            <a className="btn-ghost light" href="tel:+46765519681">
              +46 765 519 681
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
