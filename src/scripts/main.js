/**
 * main.js
 * Senior Engineer Portfolio Logic
 */

const init = () => {
  const header = document.getElementById('main-header');
  const toggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  // --- Sticky navbar ---
  let lastScroll = 0;

  window.addEventListener(
    'scroll',
    () => {
      const currentScroll = window.scrollY;

      if (header) {
        header.classList.toggle('nav-scrolled', currentScroll > 24);

        const menuOpen = toggle?.getAttribute('aria-expanded') === 'true';

        if (!menuOpen && currentScroll > lastScroll && currentScroll > 240) {
          header.classList.add('nav-hidden');
        } else {
          header.classList.remove('nav-hidden');
        }
      }

      lastScroll = currentScroll;
    },
    { passive: true }
  );

  // --- Mobile menu ---
  const setMenu = (open) => {
    if (!toggle || !mobileMenu) return;

    toggle.setAttribute('aria-expanded', String(open));
    mobileMenu.hidden = !open;
    document.body.classList.toggle('menu-open', open);

    if (open) {
      header?.classList.remove('nav-hidden');
      mobileMenu.querySelector('a')?.focus();
    }
  };

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenu(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900 && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
      }
    });
  }

  // --- Reveal on scroll ---
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
