// Fade-in on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 300;
    const height = sec.offsetHeight;
    if (top > offset && top < offset + height) {
      sec.classList.add('reveal');
    }
  });
});

// Back to Top button
const backToTopBtn = document.createElement('button');
backToTopBtn.id = 'backToTop';
backToTopBtn.textContent = '↑ Top';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
