document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const hamburger = document.querySelector('.hamburger');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('active');
      
      // Animate hamburger (optional simple rotation or cross)
      if (!isExpanded) {
        hamburger.style.transform = 'rotate(45deg)';
        hamburger.style.background = 'transparent';
      } else {
        hamburger.style.transform = 'rotate(0)';
        hamburger.style.background = 'var(--text-primary)';
      }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.main-nav a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        hamburger.style.transform = 'rotate(0)';
        hamburger.style.background = 'var(--text-primary)';
      });
    });
  }

  // Request Resume Button
  const resumeBtn = document.getElementById('resume-btn');
  const messageInput = document.getElementById('message');
  
  if (resumeBtn && messageInput) {
    resumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Pre-fill message after a short delay to allow scroll
      setTimeout(() => {
        messageInput.value = "Hi Moin, I'd like to request a copy of your resume.";
        messageInput.focus();
      }, 800);
    });
  }

  // Smooth Scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll Animations (Intersection Observer)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements
  document.querySelectorAll('.project-card, .section-title, .hero-content, .contact-wrapper').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });

  // Add CSS class for animation via JS to keep CSS clean
  const style = document.createElement('style');
  style.innerHTML = `
    .fade-in-up {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
});