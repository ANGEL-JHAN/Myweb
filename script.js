/* ═══════════════════════════════════════════
   ANGEL OFC DEV — Scripts
   ═══════════════════════════════════════════ */

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// Scroll fade-in animation
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.fade-up').forEach(el => {
  fadeObserver.observe(el);
});

// Smooth scroll for anchor links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Navbar background on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(8, 13, 26, 0.95)';
    header.style.backdropFilter = 'blur(12px)';
    header.style.borderBottom = '1px solid rgba(26, 39, 68, 0.5)';
  } else {
    header.style.background = 'transparent';
    header.style.backdropFilter = 'none';
    header.style.borderBottom = 'none';
  }
});
