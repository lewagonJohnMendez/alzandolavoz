// Efecto de aparición suave al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.idea-card').forEach(card => {
  observer.observe(card);
});

// Cambiar el color del botón CTA al hacer clic
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
  ctaButton.style.backgroundColor = '#CC0000';
  ctaButton.textContent = '¡Gracias por tu apoyo!';
});

document.querySelector('.cta-button').addEventListener('click', function() {
    window.location.href = 'https://forms.gle/PegkBftorxPXSRuY6';
});

document.querySelectorAll('.cta-button')[1].addEventListener('click', function() {
    window.location.href = 'https://forms.gle/PegkBftorxPXSRuY6';
});