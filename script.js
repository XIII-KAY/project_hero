(function () {
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var pages = {
    home: document.getElementById('page-home'),
    services: document.getElementById('page-services')
  };

  var SECTION_IDS = [
    'capabilities', 'ai-data', 'research', 'workforce',
    'transcription', 'technology', 'process', 'why', 'contact'
  ];

  var nav = document.querySelector('nav');
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelectorAll('[data-page]');
  var contactNav = document.querySelector('.contact-nav');

  function closeMenu() {
    if (nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    }
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ── page routing ── */
  function showPage(pageId, opts) {
    opts = opts || {};
    Object.keys(pages).forEach(function (key) {
      if (pages[key]) pages[key].classList.remove('active');
    });
    if (pages[pageId]) pages[pageId].classList.add('active');

    navLinks.forEach(function (link) {
      var isTopLevel = !link.closest('.nav-dropdown-menu') && !link.dataset.scroll;
      link.classList.toggle('active', isTopLevel && link.dataset.page === pageId);
    });

    var hash = opts.hash || pageId;
    if (history.pushState) {
      history.pushState(null, '', '#' + hash);
    } else {
      window.location.hash = hash;
    }

    window.scrollTo({ top: 0, behavior: opts.instantTop ? 'auto' : 'smooth' });

    if (window.gsap && window.ScrollTrigger) {
      setTimeout(function () { window.ScrollTrigger.refresh(); }, 150);
    }
  }

  function scrollToSection(targetId) {
    var el = document.getElementById(targetId);
    if (el) {
      setTimeout(function () {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 280);
    }
  }

  function handleNavClick(e) {
    var link = e.currentTarget;
    var page = link.dataset.page;
    var scrollTo = link.dataset.scroll;

    if (scrollTo && page) {
      e.preventDefault();
      showPage(page, { hash: scrollTo, instantTop: true });
      scrollToSection(scrollTo);
      return;
    }

    if (page) {
      e.preventDefault();
      showPage(page);
    }
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', handleNavClick);
    link.addEventListener('click', closeMenu);
  });

  if (contactNav) {
    contactNav.addEventListener('click', function (e) {
      e.preventDefault();
      showPage('services');
      setTimeout(function () {
        var block = document.querySelector('.contact-block');
        if (block) {
          block.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 220);
    });
  }

  function routeFromHash() {
    var hash = window.location.hash.replace('#', '');
    if (hash === 'services') {
      showPage('services');
    } else if (SECTION_IDS.indexOf(hash) !== -1) {
      showPage('home', { instantTop: true });
      scrollToSection(hash);
    } else {
      showPage('home');
    }
  }

  window.addEventListener('hashchange', routeFromHash);
  window.addEventListener('popstate', routeFromHash);

  if (window.location.hash) {
    routeFromHash();
  } else {
    showPage('home');
  }

  /* ── fallback: reveal on scroll (no GSAP) ── */
  var revealEls = document.querySelectorAll('.reveal');
  if (!window.gsap || reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ── hero parallax (fallback when no GSAP) ── */
  var hero = document.querySelector('.hero');
  if (hero && !window.gsap && !reduceMotion) {
    var heroContent = hero.querySelector('.hero-content');
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      var h = hero.offsetHeight;
      if (y > h || !heroContent) return;
      var p = y / h;
      heroContent.style.opacity = String(Math.max(1 - p * 1.6, 0.15));
      heroContent.style.transform = 'translateY(' + (p * 42) + 'px) scale(' + (1 - p * 0.04) + ')';
    }, { passive: true });

    var glow = hero.querySelector('.hero-glow');
    if (glow) {
      hero.addEventListener('mousemove', function (e) {
        var r = hero.getBoundingClientRect();
        glow.style.left = (e.clientX - r.left) + 'px';
        glow.style.top = (e.clientY - r.top) + 'px';
      });
    }
  }

  /* ─────────────────────────────────────────────
     GSAP — text reveals, entrances, service stack,
     cursor-reactive hero (only when lib present)
     ───────────────────────────────────────────── */
  if (window.gsap && !reduceMotion) {
    gsap.registerPlugin(window.ScrollTrigger);

    var hasSplit = typeof window.SplitText !== 'undefined';

    /* hero headline — line reveal */
    if (hasSplit) {
      var heroHead = document.querySelector('.hero-headline');
      if (heroHead) {
        var heroSplit = new window.SplitText(heroHead, { type: 'lines' });
        gsap.from(heroSplit.lines, {
          yPercent: 110,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.15
        });
      }
    }

    /* section + detail titles — masked line reveal on scroll */
    if (hasSplit) {
      document.querySelectorAll('.section-title, .detail-title, .services-title, .cta-headline').forEach(function (el) {
        var split = new window.SplitText(el, { type: 'lines' });
        gsap.from(split.lines, {
          yPercent: 90,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        });
      });
    }

    /* component entrances — cards lift + fade */
    var entranceEls = gsap.utils.toArray('.cap-card, .why-card, .work-item, .svc, .hero-index');
    entranceEls.forEach(function (el, i) {
      gsap.fromTo(el, {
        y: 44,
        opacity: 0,
        scale: 0.97
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        delay: (i % 3) * 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          once: true
        }
      });
    });

    /* service stack — subtle 3D settle while cards cascade on scroll */
    var svcCards = gsap.utils.toArray('.svc');
    svcCards.forEach(function (card) {
      gsap.fromTo(card, { rotateX: 6 }, {
        rotateX: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'top top',
          scrub: true
        }
      });
    });

    /* cursor-reactive hero glow + blob drift */
    if (hero) {
      var glow = hero.querySelector('.hero-glow');
      var blobs = hero.querySelector('.hero-blobs');
      var glowX = glow ? gsap.quickTo(glow, 'left', { duration: 0.6, ease: 'power2.out' }) : null;
      var glowY = glow ? gsap.quickTo(glow, 'top', { duration: 0.6, ease: 'power2.out' }) : null;
      var blobX = blobs ? gsap.quickTo(blobs, 'x', { duration: 0.9, ease: 'power2.out' }) : null;
      var blobY = blobs ? gsap.quickTo(blobs, 'y', { duration: 0.9, ease: 'power2.out' }) : null;

      hero.addEventListener('mousemove', function (e) {
        var r = hero.getBoundingClientRect();
        var x = e.clientX - r.left;
        var y = e.clientY - r.top;
        if (glowX && glowY) {
          glowX(x);
          glowY(y);
        }
        if (blobX && blobY) {
          blobX((x - r.width / 2) * 0.05);
          blobY((y - r.height / 2) * 0.05);
        }
      });
    }

    /* recalc trigger positions once late-loading assets settle */
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { window.ScrollTrigger.refresh(); });
    }
    window.addEventListener('load', function () { window.ScrollTrigger.refresh(); });
  }
})();