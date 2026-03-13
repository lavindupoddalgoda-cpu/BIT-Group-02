<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="About BIT Group — Our story, our team, and our mission to deliver Innovation Through Technology for businesses across Sri Lanka.">
  <meta name="robots" content="index, follow">
  <meta property="og:title" content="About Us | BIT Group">
  <meta property="og:description" content="Meet the team behind Sri Lanka's most innovative web agency.">
  <meta property="og:type" content="website">
  <link rel="canonical" href="https://bitgroup.netlify.app/about.html">
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  <script>
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) { window.netlifyIdentity.on("login", () => { document.location.href = "/admin/"; }); }
      });
    }
  </script>
  <title>About Us | BIT Group</title>
</head>
<body>

  <a href="#main" class="skip-link">Skip to content</a>

  <nav class="nav" role="navigation" aria-label="Main navigation">
    <div class="nav__inner">
      <a href="index.html" class="nav__logo" aria-label="BIT Group home">
        <span class="nav__logo-mark">BIT</span>
        <span class="nav__logo-sub">Group</span>
      </a>
      <div class="nav__links" role="list">
        <a href="index.html" class="nav__link" role="listitem">Home</a>
        <a href="services.html" class="nav__link" role="listitem">Services</a>
        <a href="about.html" class="nav__link" role="listitem">About</a>
        <a href="contact.html" class="nav__link" role="listitem">Contact</a>
      </div>
      <a href="contact.html" class="btn btn-primary nav__cta">Get a Quote</a>
      <button class="nav__hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <div class="nav__mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
    <a href="index.html" class="nav__mobile-link">Home</a>
    <a href="services.html" class="nav__mobile-link">Services</a>
    <a href="about.html" class="nav__mobile-link">About</a>
    <a href="contact.html" class="nav__mobile-link">Contact</a>
  </div>

  <main id="main">

    <!-- Page Hero -->
    <section class="page-hero" aria-labelledby="about-title">
      <div class="page-hero__bg" aria-hidden="true"></div>
      <div class="hero__orbs" aria-hidden="true">
        <div class="hero__orb hero__orb--1"></div>
        <div class="hero__orb hero__orb--2"></div>
      </div>
      <div class="page-hero__content">
        <p class="page-hero__breadcrumb"><a href="index.html">Home</a> / About</p>
        <div class="section-label">Our Story</div>
        <h1 class="page-hero__title reveal" id="about-title">
          <span class="gradient-text">WHO</span><br>WE ARE
        </h1>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section mission-section" id="mission" aria-labelledby="mission-heading">
      <div class="container">
        <div class="mission__split">
          <div class="mission__visual reveal-left">
            <div class="mission__image">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85"
                alt="BIT Group team working together in office"
                loading="lazy"
                decoding="async"
              >
            </div>
            <div class="mission__image-accent" aria-hidden="true"></div>
          </div>
          <div class="mission__text reveal-right">
            <div class="section-label">Our Mission</div>
            <h2 id="mission-heading" style="font-size: var(--text-h2); margin-bottom: var(--sp-4);">
              Empowering Businesses with <span class="gradient-text">Cutting-Edge Technology</span>
            </h2>
            <p>At BIT Group, we believe every business deserves a world-class digital presence. Founded with the vision of bringing Silicon Valley-grade technology to Sri Lanka and the South Asian market, we've grown into a full-service digital agency trusted by startups and enterprises alike.</p>
            <p style="margin-top: var(--sp-3);">We don't just build websites — we architect digital experiences that convert visitors into customers, and customers into brand advocates.</p>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--sp-4); margin-top: var(--sp-6);">
              <div style="padding: var(--sp-4); background: var(--clr-bg-raised); border-radius: var(--radius-md); border: 1px solid var(--clr-border-subtle);">
                <div style="font-family: var(--font-display); font-size: 2.5rem; color: var(--clr-accent-1);" data-count="150">0</div>
                <p style="font-size:0.85rem; color: var(--clr-text-muted); margin-top: 4px;">Projects Delivered</p>
              </div>
              <div style="padding: var(--sp-4); background: var(--clr-bg-raised); border-radius: var(--radius-md); border: 1px solid var(--clr-border-subtle);">
                <div style="font-family: var(--font-display); font-size: 2.5rem; color: var(--clr-accent-2);" data-count="98">0</div>
                <p style="font-size:0.85rem; color: var(--clr-text-muted); margin-top: 4px;">% Client Satisfaction</p>
              </div>
            </div>
            <a href="contact.html" class="btn btn-primary" style="margin-top: var(--sp-6);">
              Work With Us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="section section--dark" id="timeline" aria-labelledby="timeline-heading">
      <div class="container">
        <div class="section-label">Our Journey</div>
        <h2 id="timeline-heading" style="font-size: var(--text-h2); text-align:center; margin-bottom: var(--sp-4);">
          From <span class="gradient-text">Startup</span> to Market Leader
        </h2>
        <div class="timeline" role="list">
          <div class="timeline-item reveal" role="listitem">
            <div class="timeline-content-left">
              <h3 class="timeline-title">BIT Group Founded</h3>
              <p class="timeline-desc">Three passionate developers with a dream to bring world-class digital solutions to Sri Lanka.</p>
            </div>
            <div class="timeline-year" aria-label="Year 2020">2020</div>
            <div class="timeline-content-right"></div>
          </div>
          <div class="timeline-item reveal" role="listitem">
            <div class="timeline-content-left"></div>
            <div class="timeline-year" aria-label="Year 2021">2021</div>
            <div class="timeline-content-right">
              <h3 class="timeline-title">First 50 Clients</h3>
              <p class="timeline-desc">Rapid growth fueled by word-of-mouth referrals and our commitment to delivering exceptional results.</p>
            </div>
          </div>
          <div class="timeline-item reveal" role="listitem">
            <div class="timeline-content-left">
              <h3 class="timeline-title">International Expansion</h3>
              <p class="timeline-desc">Expanded services to clients in UAE, UK, and Australia, proving our global capabilities.</p>
            </div>
            <div class="timeline-year" aria-label="Year 2022">2022</div>
            <div class="timeline-content-right"></div>
          </div>
          <div class="timeline-item reveal" role="listitem">
            <div class="timeline-content-left"></div>
            <div class="timeline-year" aria-label="Year 2023">2023</div>
            <div class="timeline-content-right">
              <h3 class="timeline-title">Team Grows to 20+</h3>
              <p class="timeline-desc">Hired specialized designers, developers, and digital marketers to serve our growing client base.</p>
            </div>
          </div>
          <div class="timeline-item reveal" role="listitem">
            <div class="timeline-content-left">
              <h3 class="timeline-title">150+ Projects & Beyond</h3>
              <p class="timeline-desc">Now a full-service digital agency with enterprise-grade capabilities and an award-winning portfolio.</p>
            </div>
            <div class="timeline-year" aria-label="Year 2024">2024</div>
            <div class="timeline-content-right"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="section" id="team" aria-labelledby="team-heading">
      <div class="container">
        <div class="section-label">The People</div>
        <h2 id="team-heading" style="font-size: var(--text-h2); margin-bottom: 0;">
          Meet the <span class="gradient-text">Innovators</span>
        </h2>
        <div class="team-grid" aria-label="Team members">
          <!-- Rendered from team.json -->
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section section--dark" aria-labelledby="values-heading">
      <div class="container">
        <div class="section-label">What Drives Us</div>
        <h2 id="values-heading" style="font-size: var(--text-h2); text-align:center; margin-bottom: var(--sp-12);">
          Our Core <span class="gradient-text">Values</span>
        </h2>
        <div class="grid-2">
          <div style="display:flex; gap: var(--sp-4); align-items:flex-start;" class="reveal">
            <div style="width:60px; height:60px; border-radius: var(--radius-md); background: rgba(0,220,255,0.08); border: 1px solid rgba(0,220,255,0.2); display:flex; align-items:center; justify-content:center; color: var(--clr-accent-1); flex-shrink:0;">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <h3 style="font-size:1.2rem; margin-bottom: var(--sp-2);">Quality Without Compromise</h3>
              <p style="font-size:0.9rem;">We obsess over every detail. From pixel-perfect designs to clean, maintainable code — we never cut corners.</p>
            </div>
          </div>
          <div style="display:flex; gap: var(--sp-4); align-items:flex-start;" class="reveal" style="transition-delay:0.1s">
            <div style="width:60px; height:60px; border-radius: var(--radius-md); background: rgba(123,47,255,0.08); border: 1px solid rgba(123,47,255,0.2); display:flex; align-items:center; justify-content:center; color: #A070FF; flex-shrink:0;">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <div>
              <h3 style="font-size:1.2rem; margin-bottom: var(--sp-2);">On-Time Delivery</h3>
              <p style="font-size:0.9rem;">Deadlines are sacred. We use agile methodology to ensure projects ship on time, every time.</p>
            </div>
          </div>
          <div style="display:flex; gap: var(--sp-4); align-items:flex-start;" class="reveal">
            <div style="width:60px; height:60px; border-radius: var(--radius-md); background: rgba(255,60,110,0.08); border: 1px solid rgba(255,60,110,0.2); display:flex; align-items:center; justify-content:center; color: var(--clr-accent-3); flex-shrink:0;">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <div>
              <h3 style="font-size:1.2rem; margin-bottom: var(--sp-2);">Client-First Culture</h3>
              <p style="font-size:0.9rem;">Your success is our success. We work as an extension of your team, not just a vendor.</p>
            </div>
          </div>
          <div style="display:flex; gap: var(--sp-4); align-items:flex-start;" class="reveal">
            <div style="width:60px; height:60px; border-radius: var(--radius-md); background: rgba(0,220,255,0.08); border: 1px solid rgba(0,220,255,0.2); display:flex; align-items:center; justify-content:center; color: var(--clr-accent-1); flex-shrink:0;">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <div>
              <h3 style="font-size:1.2rem; margin-bottom: var(--sp-2);">Continuous Innovation</h3>
              <p style="font-size:0.9rem;">Tech moves fast. We stay ahead of the curve, adopting best practices and emerging technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <div class="container" style="padding: var(--sp-8) var(--gutter) var(--sp-16);">
      <div class="cta-banner reveal-scale">
        <h2 class="cta-banner__heading">JOIN 150+ HAPPY CLIENTS</h2>
        <p>Let's build something incredible together. Your digital transformation starts here.</p>
        <div class="cta-banner__btns">
          <a href="contact.html" class="btn btn-primary">Get in Touch</a>
          <a href="services.html" class="btn btn-ghost">Our Services</a>
        </div>
      </div>
    </div>

  </main>

  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer__grid">
        <div>
          <span class="footer__brand-name">BIT</span>
          <p class="footer__tagline">Innovation Through Technology.</p>
          <div class="footer__social">
            <a href="#" class="footer__social-link" aria-label="Facebook" data-social="facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
            <a href="#" class="footer__social-link" aria-label="Instagram" data-social="instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="#" class="footer__social-link" aria-label="LinkedIn" data-social="linkedin"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
          </div>
        </div>
        <div><h4 class="footer__col-title">Services</h4><nav class="footer__col-links"><a href="services.html" class="footer__col-link">Web Design</a><a href="services.html" class="footer__col-link">Mobile Apps</a><a href="services.html" class="footer__col-link">E-Commerce</a></nav></div>
        <div><h4 class="footer__col-title">Company</h4><nav class="footer__col-links"><a href="about.html" class="footer__col-link">About Us</a><a href="about.html#team" class="footer__col-link">Our Team</a><a href="contact.html" class="footer__col-link">Contact</a></nav></div>
        <div>
          <h4 class="footer__col-title">Newsletter</h4>
          <form class="footer__newsletter-form" novalidate aria-label="Newsletter signup">
            <input type="email" class="footer__newsletter-input" placeholder="your@email.com" aria-label="Email address" required>
            <button type="submit" class="footer__newsletter-btn" aria-label="Subscribe">→</button>
          </form>
        </div>
      </div>
      <div class="footer__bottom">
        <p data-setting="copyright">© 2025 BIT Group. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <a href="https://wa.me/94771234567" class="whatsapp-btn" aria-label="Chat on WhatsApp" target="_blank" rel="noopener">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.1 1.524 5.827L0 24l6.334-1.512A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.592-.47-5.122-1.297l-.363-.214-3.772.9.935-3.678-.235-.381A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
  </a>
  <button class="scroll-top-btn" aria-label="Scroll to top">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 15l-6-6-6 6"/></svg>
  </button>

  <script src="script.js"></script>
</body>
</html>
