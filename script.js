'use strict';

// ── UTILITY: Generic JSON fetcher ─────────────────────────────────────────────
async function loadJSON(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to load ${path}`);
    return await res.json();
  } catch (err) {
    console.warn(`[CMS Data] Could not load ${path}:`, err.message);
    return null;
  }
}

// ── UTILITY: Create element shorthand ─────────────────────────────────────────
function el(tag, cls = '', attrs = {}) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v));
  return e;
}

function txt(str) { return document.createTextNode(str); }

// ─────────────────────────────────────────────────────────────────────────────
// PRELOADER
// ─────────────────────────────────────────────────────────────────────────────
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  const bar = preloader.querySelector('.preloader__bar');
  if (bar) {
    setTimeout(() => { bar.style.width = '70%'; }, 100);
    setTimeout(() => { bar.style.width = '100%'; }, 700);
  }
  const hide = () => {
    preloader.classList.add('is-hidden');
    document.body.style.overflow = '';
    initHeroAnimation();
  };
  document.body.style.overflow = 'hidden';
  if (document.readyState === 'complete') {
    setTimeout(hide, 900);
  } else {
    window.addEventListener('load', () => setTimeout(hide, 900));
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO ANIMATION
// ─────────────────────────────────────────────────────────────────────────────
function initHeroAnimation() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const words = hero.querySelectorAll('.hero__headline-word');
  words.forEach((w, i) => {
    w.style.transitionDelay = `${0.3 + i * 0.1}s`;
  });
  requestAnimationFrame(() => hero.classList.add('is-visible'));
}

// ─────────────────────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────────────────────
function initNavigation() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  // Scroll state
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 80);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active link
  const links = nav.querySelectorAll('.nav__link');
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('is-active');
    }
  });

  // Mobile menu
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      // Stagger mobile links
      const mobileLinks = mobileMenu.querySelectorAll('.nav__mobile-link');
      mobileLinks.forEach((link, i) => {
        link.style.transitionDelay = isOpen ? `${i * 0.08}s` : '0s';
      });
    });
    // Close on link click
    mobileMenu.querySelectorAll('.nav__mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
    // Close on outside click
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        hamburger.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// REVEAL ANIMATIONS (IntersectionObserver)
// ─────────────────────────────────────────────────────────────────────────────
let revealObserver;
function initRevealAnimations() {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    revealObserver.observe(el);
  });
}

function observeNewElements(container) {
  if (!revealObserver || !container) return;
  container.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    revealObserver.observe(el);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// MARQUEE
// ─────────────────────────────────────────────────────────────────────────────
function initMarquee() {
  const track = document.querySelector('.marquee__track');
  if (!track) return;
  // Duplicate for seamless loop
  const clone = track.cloneNode(true);
  track.parentElement.appendChild(clone);
}

// ─────────────────────────────────────────────────────────────────────────────
// COUNTER (stats)
// ─────────────────────────────────────────────────────────────────────────────
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const duration = 1800;
      const start = performance.now();
      const isDecimal = target % 1 !== 0;
      const update = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        const current = target * ease;
        el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = isDecimal ? target.toFixed(1) : target.toLocaleString();
      };
      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ─────────────────────────────────────────────────────────────────────────────
// CAROUSEL (testimonials)
// ─────────────────────────────────────────────────────────────────────────────
function initCarousel() {
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel__track');
    const slides = carousel.querySelectorAll('.carousel__slide');
    const dotsContainer = carousel.querySelector('.carousel__dots');
    const prevBtn = carousel.querySelector('.carousel__btn--prev');
    const nextBtn = carousel.querySelector('.carousel__btn--next');
    if (!track || !slides.length) return;

    let current = 0;
    let autoTimer;
    const total = slides.length;

    // Build dots
    if (dotsContainer) {
      slides.forEach((_, i) => {
        const dot = el('button', 'carousel__dot', { 'aria-label': `Slide ${i + 1}` });
        if (i === 0) dot.classList.add('is-active');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      });
    }

    function goTo(idx) {
      current = (idx + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      if (dotsContainer) {
        dotsContainer.querySelectorAll('.carousel__dot').forEach((d, i) => d.classList.toggle('is-active', i === current));
      }
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() { autoTimer = setInterval(next, 5000); }
    function stopAuto() { clearInterval(autoTimer); }

    if (prevBtn) prevBtn.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { stopAuto(); next(); startAuto(); });
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);

    startAuto();
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// ACCORDION
// ─────────────────────────────────────────────────────────────────────────────
function initAccordion() {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      // Close all
      document.querySelectorAll('.accordion-trigger').forEach(t => {
        t.setAttribute('aria-expanded', 'false');
        const c = t.closest('.accordion-item').querySelector('.accordion-content');
        if (c) c.style.maxHeight = '0';
      });

      // Open this one
      if (!isOpen && content) {
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SMOOTH SCROLL
// ─────────────────────────────────────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SCROLL TO TOP
// ─────────────────────────────────────────────────────────────────────────────
function initScrollTop() {
  const btn = document.querySelector('.scroll-top-btn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('is-visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT FILTER
// ─────────────────────────────────────────────────────────────────────────────
function initProductFilter(services) {
  const pills = document.querySelectorAll('.filter-pill');
  const searchInput = document.querySelector('.filter-search__input');
  if (!pills.length && !searchInput) return;

  let activeCategory = 'all';
  let searchQuery = '';

  function filterCards() {
    const cards = document.querySelectorAll('.service-list-card');
    cards.forEach(card => {
      const cat = card.dataset.category || '';
      const name = (card.dataset.name || '').toLowerCase();
      const matchCat = activeCategory === 'all' || cat === activeCategory;
      const matchSearch = !searchQuery || name.includes(searchQuery);
      card.style.display = matchCat && matchSearch ? '' : 'none';
    });
  }

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      activeCategory = pill.dataset.filter || 'all';
      filterCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchQuery = searchInput.value.toLowerCase().trim();
      filterCards();
    });
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT MODAL
// ─────────────────────────────────────────────────────────────────────────────
function initProductModal(services) {
  const overlay = document.getElementById('service-modal');
  if (!overlay) return;
  const closeBtn = overlay.querySelector('.modal__close');
  const modal = overlay.querySelector('.modal');

  function openModal(id) {
    if (!services) return;
    const service = services.find(s => s.slug === id || s.name === id);
    if (!service) return;

    const img = overlay.querySelector('.modal__image img');
    const title = overlay.querySelector('.modal__title');
    const desc = overlay.querySelector('.modal__desc');
    const price = overlay.querySelector('.modal__price');
    const specsList = overlay.querySelector('.modal__specs');
    const tag = overlay.querySelector('.modal__tag');

    if (img) { img.src = service.image || ''; img.alt = service.name || ''; }
    if (title) title.textContent = service.name || '';
    if (tag) tag.textContent = service.category || '';
    if (desc) desc.textContent = service.description || service.shortDesc || '';
    if (price) price.textContent = service.price || 'Contact for pricing';
    if (specsList) {
      specsList.innerHTML = '';
      (service.specs || []).forEach(spec => {
        const row = el('div', 'modal__spec-item');
        const label = el('span', 'modal__spec-label');
        label.textContent = spec.label;
        const val = el('span', 'modal__spec-value');
        val.textContent = spec.value;
        row.appendChild(label);
        row.appendChild(val);
        specsList.appendChild(row);
      });
    }

    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    overlay.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    overlay.setAttribute('aria-hidden', 'true');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  // Delegate card clicks
  document.querySelectorAll('[data-modal]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.modal));
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// FORMS
// ─────────────────────────────────────────────────────────────────────────────
function initForms() {
  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const status = contactForm.querySelector('.form-status');
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      if (status) status.textContent = 'Sending...';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
      // Simulate API call
      await new Promise(r => setTimeout(r, 1800));
      if (status) status.textContent = '✓ Message sent! We\'ll get back to you soon.';
      if (btn) { btn.disabled = false; btn.textContent = 'Send Message'; }
      contactForm.reset();
      setTimeout(() => { if (status) status.textContent = ''; }, 5000);
    });
  }

  // Newsletter form
  document.querySelectorAll('.footer__newsletter-form').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const input = form.querySelector('input');
      if (btn) btn.textContent = '✓';
      await new Promise(r => setTimeout(r, 1500));
      if (btn) btn.textContent = 'Subscribe';
      if (input) input.value = '';
    });
  });

  // Textarea auto-resize
  document.querySelectorAll('.form-textarea').forEach(ta => {
    ta.addEventListener('input', () => {
      ta.style.height = 'auto';
      ta.style.height = ta.scrollHeight + 'px';
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// APPLY SETTINGS (from site-settings.json)
// ─────────────────────────────────────────────────────────────────────────────
function applySettings(settings) {
  if (!settings) return;

  // WhatsApp button
  const waBtn = document.querySelector('.whatsapp-btn');
  if (waBtn && settings.whatsapp) {
    waBtn.href = `https://wa.me/${settings.whatsapp}`;
  }

  // Footer contact
  const phoneEls = document.querySelectorAll('[data-setting="phone"]');
  const emailEls = document.querySelectorAll('[data-setting="email"]');
  const addressEls = document.querySelectorAll('[data-setting="address"]');
  const copyrightEls = document.querySelectorAll('[data-setting="copyright"]');
  const brandEls = document.querySelectorAll('[data-setting="brandName"]');

  phoneEls.forEach(e => { if (settings.phone) e.textContent = settings.phone; });
  emailEls.forEach(e => { if (settings.email) e.textContent = settings.email; });
  addressEls.forEach(e => { if (settings.address) e.textContent = settings.address; });
  copyrightEls.forEach(e => { if (settings.copyright) e.textContent = settings.copyright; });
  brandEls.forEach(e => { if (settings.brandName) e.textContent = settings.brandName; });

  // Social links
  if (settings.social) {
    Object.entries(settings.social).forEach(([platform, url]) => {
      const links = document.querySelectorAll(`[data-social="${platform}"]`);
      links.forEach(link => {
        if (url) { link.href = url; link.style.display = ''; }
        else { link.style.display = 'none'; }
      });
    });
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER HERO
// ─────────────────────────────────────────────────────────────────────────────
function renderHero(heroData) {
  if (!heroData) return;
  const headline = document.querySelector('[data-hero="headline"]');
  const subheadline = document.querySelector('[data-hero="subheadline"]');
  const ctaPrimary = document.querySelector('[data-hero="cta-primary"]');
  const ctaSecondary = document.querySelector('[data-hero="cta-secondary"]');

  if (headline && heroData.headline) {
    const words = heroData.headline.split(' ');
    headline.innerHTML = '';
    words.forEach(word => {
      const line = el('span', 'hero__headline-line');
      const wordEl = el('span', 'hero__headline-word gradient-text');
      wordEl.textContent = word;
      line.appendChild(wordEl);
      headline.appendChild(line);
    });
  }
  if (subheadline && heroData.subheadline) subheadline.textContent = heroData.subheadline;
  if (ctaPrimary) { ctaPrimary.textContent = heroData.ctaPrimary || 'Get Started'; ctaPrimary.href = heroData.ctaPrimaryLink || 'contact.html'; }
  if (ctaSecondary) { ctaSecondary.textContent = heroData.ctaSecondary || 'Our Work'; ctaSecondary.href = heroData.ctaSecondaryLink || 'services.html'; }
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER STATS
// ─────────────────────────────────────────────────────────────────────────────
function renderStats(statsData) {
  if (!statsData) return;
  const grid = document.querySelector('.stats__grid');
  if (!grid) return;
  grid.innerHTML = '';
  statsData.forEach((stat, i) => {
    const card = el('div', 'stat-card reveal');
    card.style.transitionDelay = `${i * 0.1}s`;
    const num = el('span', 'stat-card__number');
    num.setAttribute('data-count', stat.value);
    num.setAttribute('data-suffix', stat.suffix || '');
    num.textContent = '0';
    const suffix = el('span', 'stat-card__number');
    suffix.textContent = stat.suffix || '';
    const label = el('p', 'stat-card__label');
    label.textContent = stat.label;
    card.appendChild(num);
    card.appendChild(suffix);
    card.appendChild(label);
    grid.appendChild(card);
    if (revealObserver) revealObserver.observe(card);
  });
  initCounters();
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER TESTIMONIALS
// ─────────────────────────────────────────────────────────────────────────────
function renderTestimonials(testimonials) {
  if (!testimonials) return;
  const track = document.querySelector('.carousel__track');
  if (!track) return;
  track.innerHTML = '';
  testimonials.forEach(t => {
    const slide = el('div', 'carousel__slide');
    const card = el('div', 'testimonial-card');
    const stars = el('div', 'testimonial__stars');
    for (let i = 0; i < (t.rating || 5); i++) {
      const star = el('span', 'testimonial__star');
      star.textContent = '★';
      stars.appendChild(star);
    }
    const quote = el('p', 'testimonial__quote');
    quote.textContent = t.quote;
    const author = el('div', 'testimonial__author');
    const avatar = el('div', 'testimonial__avatar');
    if (t.avatar) {
      const img = el('img', '', { src: t.avatar, alt: t.name });
      avatar.appendChild(img);
    } else {
      avatar.textContent = (t.name || 'A').charAt(0);
    }
    const info = el('div', 'testimonial__info');
    const name = el('p', 'testimonial__name');
    name.textContent = t.name;
    const role = el('p', 'testimonial__role');
    role.textContent = t.role + (t.company ? ` · ${t.company}` : '');
    info.appendChild(name);
    info.appendChild(role);
    author.appendChild(avatar);
    author.appendChild(info);
    card.appendChild(stars);
    card.appendChild(quote);
    card.appendChild(author);
    slide.appendChild(card);
    track.appendChild(slide);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER TEAM
// ─────────────────────────────────────────────────────────────────────────────
function renderTeam(members) {
  if (!members) return;
  const grid = document.querySelector('.team-grid');
  if (!grid) return;
  grid.innerHTML = '';
  members.forEach((member, i) => {
    const card = el('div', 'team-card reveal');
    card.style.transitionDelay = `${i * 0.1}s`;
    if (member.photo) {
      const img = el('img', 'team-card__photo', { src: member.photo, alt: member.name, loading: 'lazy', decoding: 'async' });
      card.appendChild(img);
    } else {
      const placeholder = el('div', 'team-card__photo');
      placeholder.style.cssText = `background: linear-gradient(135deg, var(--clr-accent-2), var(--clr-accent-1)); display:flex; align-items:center; justify-content:center; font-family: var(--font-display); font-size: 3rem; color: #fff;`;
      placeholder.textContent = (member.name || 'T').charAt(0);
      card.appendChild(placeholder);
    }
    const overlay = el('div', 'team-card__overlay');
    const bio = el('p', 'team-card__bio');
    bio.textContent = member.bio || '';
    const name = el('h4', 'team-card__name');
    name.textContent = member.name;
    const role = el('p', 'team-card__role');
    role.textContent = member.role;
    const social = el('div', 'team-card__social');
    if (member.linkedin) {
      const li = el('a', '', { href: member.linkedin, target: '_blank', 'aria-label': 'LinkedIn' });
      li.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`;
      social.appendChild(li);
    }
    overlay.appendChild(bio);
    overlay.appendChild(name);
    overlay.appendChild(role);
    overlay.appendChild(social);
    card.appendChild(overlay);
    grid.appendChild(card);
    if (revealObserver) revealObserver.observe(card);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER FAQs
// ─────────────────────────────────────────────────────────────────────────────
function renderFAQs(faqs) {
  if (!faqs) return;
  const container = document.querySelector('.accordion');
  if (!container) return;
  container.innerHTML = '';
  faqs.forEach((faq, i) => {
    const item = el('div', 'accordion-item');
    const trigger = el('button', 'accordion-trigger', { 'aria-expanded': 'false', 'aria-controls': `faq-${i}` });
    const triggerText = el('span');
    triggerText.textContent = faq.question;
    const icon = el('span', 'accordion-icon', { 'aria-hidden': 'true' });
    icon.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
    trigger.appendChild(triggerText);
    trigger.appendChild(icon);
    const content = el('div', 'accordion-content', { id: `faq-${i}`, role: 'region', 'aria-labelledby': `faq-btn-${i}` });
    const inner = el('div', 'accordion-content-inner');
    inner.textContent = faq.answer;
    content.appendChild(inner);
    item.appendChild(trigger);
    item.appendChild(content);
    container.appendChild(item);
  });
  initAccordion();
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER FEATURED SERVICES (homepage)
// ─────────────────────────────────────────────────────────────────────────────
function renderFeaturedServices(services) {
  if (!services || !services.length) return;
  const grid = document.querySelector('.services-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const featured = services.filter(s => s.featured);
  const toShow = featured.length ? featured : services.slice(0, 6);
  toShow.forEach((service, i) => {
    const card = el('div', 'service-card reveal');
    card.style.transitionDelay = `${i * 0.1}s`;
    const STOCK_IMAGES = [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      'https://images.unsplash.com/photo-1432888622747-4eb9a8f5f01b?w=800&q=80',
    ];
    const imgSrc = service.image || STOCK_IMAGES[i % STOCK_IMAGES.length];
    const img = el('img', 'service-card__image', { src: imgSrc, alt: service.name || '', loading: 'lazy', decoding: 'async' });
    const overlay = el('div', 'service-card__overlay');
    const tag = el('p', 'service-card__tag');
    tag.textContent = service.category || 'Service';
    const title = el('h3', 'service-card__title');
    title.textContent = service.name || '';
    const desc = el('p', 'service-card__desc');
    desc.textContent = service.shortDesc || '';
    const arrow = el('div', 'service-card__arrow', { 'aria-hidden': 'true' });
    arrow.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
    overlay.appendChild(tag);
    overlay.appendChild(title);
    overlay.appendChild(desc);
    card.appendChild(img);
    card.appendChild(overlay);
    card.appendChild(arrow);
    card.setAttribute('data-modal', service.slug || service.name);
    card.style.cursor = 'pointer';
    grid.appendChild(card);
    if (revealObserver) revealObserver.observe(card);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER SERVICES LIST (services page)
// ─────────────────────────────────────────────────────────────────────────────
function renderServicesList(services) {
  if (!services || !services.length) return;
  const grid = document.querySelector('.services-list-grid');
  if (!grid) return;
  grid.innerHTML = '';

  // Build filter pills
  const categories = ['All', ...new Set(services.map(s => s.category).filter(Boolean))];
  const pillContainer = document.querySelector('.filter-pills');
  if (pillContainer) {
    pillContainer.innerHTML = '';
    categories.forEach(cat => {
      const pill = el('button', 'filter-pill' + (cat === 'All' ? ' is-active' : ''));
      pill.textContent = cat;
      pill.dataset.filter = cat === 'All' ? 'all' : cat;
      pillContainer.appendChild(pill);
    });
  }

  const STOCK_IMAGES = [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    'https://images.unsplash.com/photo-1432888622747-4eb9a8f5f01b?w=800&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80',
  ];

  services.forEach((service, i) => {
    const card = el('div', 'service-list-card reveal');
    card.style.transitionDelay = `${i * 0.08}s`;
    card.dataset.category = service.category || '';
    card.dataset.name = service.name || '';
    card.setAttribute('data-modal', service.slug || service.name);

    const imgWrap = el('div', 'service-list-card__img');
    const imgSrc = service.image || STOCK_IMAGES[i % STOCK_IMAGES.length];
    const img = el('img', '', { src: imgSrc, alt: service.name || '', loading: 'lazy', decoding: 'async' });
    imgWrap.appendChild(img);

    const body = el('div', 'service-list-card__body');
    const badge = el('span', 'card__category');
    badge.textContent = service.category || 'Service';
    const title = el('h3', 'card__title');
    title.textContent = service.name || '';
    const desc = el('p', 'card__desc');
    desc.textContent = service.shortDesc || '';
    const price = el('p', 'service-list-card__price');
    price.textContent = service.price || 'Contact for pricing';

    body.appendChild(badge);
    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(price);
    card.appendChild(imgWrap);
    card.appendChild(body);
    grid.appendChild(card);
    if (revealObserver) revealObserver.observe(card);
  });

  initProductFilter(services);
  initProductModal(services);
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN INIT
// ─────────────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  initPreloader();
  initNavigation();
  initRevealAnimations();
  initSmoothScroll();
  initScrollTop();

  // Load all CMS data
  const [settings, services, testimonials, team, faqs, heroData, statsData] = await Promise.all([
    loadJSON('_data/site-settings.json'),
    loadJSON('_data/services.json'),
    loadJSON('_data/testimonials.json'),
    loadJSON('_data/team.json'),
    loadJSON('_data/faqs.json'),
    loadJSON('_data/hero.json'),
    loadJSON('_data/stats.json'),
  ]);

  applySettings(settings);
  renderHero(heroData);
  renderStats(statsData?.items || statsData);
  // services.json is a plain array
  const servicesArr = Array.isArray(services) ? services : (services?.items || []);
  renderFeaturedServices(servicesArr);
  renderServicesList(servicesArr);
  renderTestimonials(testimonials?.items || testimonials);
  renderTeam(team?.members || team);
  renderFAQs(faqs?.items || faqs);

  initMarquee();
  initCounters();
  initCarousel();
  initForms();
  initAccordion();
  initProductModal(servicesArr);
});
