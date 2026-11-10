/**
 * main.js
 * Senior Engineer Portfolio Logic
 * - Smart Sticky Navbar
 * - Intersection Observer for Fade-in Animations
 */

const init = () => {
  // --- Smart Sticky Navbar ---
  const header = document.getElementById('main-header');
  let lastScroll = 0;

  if (header) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      // Add class for styling when scrolled
      if (currentScroll > 50) {
        header.classList.add('nav-scrolled');
      } else {
        header.classList.remove('nav-scrolled');
      }

      // Smart hide/show logic
      if (currentScroll > lastScroll && currentScroll > 150) {
        // Scrolling down
        header.classList.add('nav-hidden');
      } else {
        // Scrolling up
        header.classList.remove('nav-hidden');
      }

      lastScroll = currentScroll;
    });
  }

  // --- Intersection Observer (Fade-in Animations) ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Once animated, no need to observe anymore
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.fade-in-up');
  animatedElements.forEach((el) => observer.observe(el));

  // --- Mobile Menu Toggle ---
  const mobileToggle = document.querySelector('.mobile-toggle');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      // In a real app, you'd show a mobile overlay.
      // For this single page, we can toggle a class on body or nav.
      alert(
        'Mobile menu functionality would open an overlay here. Layout is currently mobile-first optimized.'
      );
    });
  }

  // --- Smooth Scroll Adjustments ---
  // Offsetting scroll to account for fixed header
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
