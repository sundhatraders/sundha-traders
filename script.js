// ===========================
// SUNDHA TRADERS
// script.js
// ===========================

document.addEventListener("DOMContentLoaded", () => {

  // Smooth Scroll
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Header Shadow
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
      header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";
    } else {
      header.style.boxShadow = "0 5px 15px rgba(0,0,0,.15)";
    }

  });

  // Fade-in Animation
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }

    });

  }, {
    threshold: 0.2
  });

  cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";

    observer.observe(card);

  });

});
