// Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isOpen = navLinks.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });

  // Smooth Scrolling
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });

  // Sticky Navbar
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('active');
    } else {
      navbar.classList.remove('active');
    }
  });

  // Accordion in Custom Section
  document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.accordion-icon').style.transform = 'rotate(0deg)';
      });
      if (!isActive) {
        item.classList.add('active');
        item.querySelector('.accordion-icon').style.transform = 'rotate(180deg)';
      }
    });
  });

  // Accordion in Questions Section
  document.querySelectorAll('.lef, .faq-item, .faq').forEach(item => {
    item.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      const button = item.querySelector('.toggle-btn, .btn');
      const answer = item.querySelector('.answer');

      // Close all other items
      document.querySelectorAll('.lef, .faq-item, .faq').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.answer').classList.remove('active');
        const btn = i.querySelector('.btn, .btn');
        if (btn) {
          btn.textContent = '−';
          btn.setAttribute('aria-expanded', 'false');
        }
      });

      if (!isActive) {
        item.classList.add('active');
        answer.classList.add('active');
        button.textContent = '+';
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Testimonial Carousel
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const testimonialPrev = document.querySelector('.testimonial-section .prev-arrow');
  const testimonialNext = document.querySelector('.testimonial-section .next-arrow');
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
  }

  testimonialNext.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
  });

  testimonialPrev.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
  });

  // Why Choose Carousel
  const cards = document.querySelectorAll('.why-choose-section .card');
  const indicators = document.querySelectorAll('.progress-indicator');
  const prevArrow = document.querySelector('.why-choose-section .prev-arrow');
  const nextArrow = document.querySelector('.why-choose-section .next-arrow');
  let currentCard = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
  }

  nextArrow.addEventListener('click', () => {
    currentCard = (currentCard + 1) % cards.length;
    showCard(currentCard);
  });

  prevArrow.addEventListener('click', () => {
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    showCard(currentCard);
  });
});