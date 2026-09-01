(function () {
  const pages = {
    home: document.getElementById('page-home'),
    services: document.getElementById('page-services')
  };

  const navLinks = document.querySelectorAll('[data-page]');
  const contactNav = document.querySelector('.contact-nav');

  function showPage(pageId) {
    Object.values(pages).forEach(p => p.classList.remove('active'));
    const target = pages[pageId];
    if (target) target.classList.add('active');

    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.page === pageId);
    });

    if (history.pushState) {
      history.pushState(null, '', '#' + pageId);
    } else {
      window.location.hash = pageId;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function scrollToSection(targetId) {
    const el = document.getElementById(targetId);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }

  function handleNavClick(e) {
    const link = e.currentTarget;
    const page = link.dataset.page;
    const scrollTo = link.dataset.scroll;

    if (scrollTo && page) {
      e.preventDefault();
      showPage(page);
      scrollToSection(scrollTo);
      return;
    }

    if (page) {
      e.preventDefault();
      showPage(page);
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
  });

  if (contactNav) {
    contactNav.addEventListener('click', function (e) {
      e.preventDefault();
      showPage('services');
      setTimeout(() => {
        const block = document.querySelector('.contact-block');
        if (block) {
          block.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 200);
    });
  }

  function routeFromHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'services') {
      showPage('services');
    } else {
      showPage('home');
    }
  }

  window.addEventListener('hashchange', routeFromHash);

  if (window.location.hash) {
    routeFromHash();
  } else {
    showPage('home');
  }

  window.addEventListener('popstate', function () {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'services') {
      showPage('services');
    } else {
      showPage('home');
    }
  });
})();
