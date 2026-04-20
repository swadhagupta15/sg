// Dr. Swadha Gupta — Personal Website
// assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {

  // ---- Scroll Progress Bar ----
  const scrollLine = document.getElementById('scrollLine');
  if (scrollLine) {
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      scrollLine.style.width = scrolled + '%';
    });
  }

  // ---- Fade-in on Scroll ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = (i * 0.07) + 's';
        entry.target.style.animation = 'fadeUp 0.6s ease forwards';
        entry.target.style.opacity = '0';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(
    '.skill-card, .exp-item, .edu-card, .pub-item, .detail-row, .research-card, .resume-block, .contact-link'
  ).forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });

  // ---- Active nav link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage || link.getAttribute('href') === './' + currentPage) {
      link.classList.add('active');
    }
  });

  // ---- Counter animation (for index hero stats) ----
  const counters = document.querySelectorAll('[data-count]');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const suffix = counter.getAttribute('data-suffix') || '';
    let count = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      count = Math.min(count + step, target);
      counter.textContent = count + suffix;
      if (count >= target) clearInterval(timer);
    }, 25);
  });

});
