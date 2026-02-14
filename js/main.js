const header = document.querySelector('.mog-header');
const nav = document.getElementById('mogNav');
const toggle = document.getElementById('mogNavToggle');

// Transparent → solid header on scroll
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// Toggle mobile menu
toggle.addEventListener('click', (e) => {
  e.stopPropagation();         // prevent document click from immediately closing
  nav.classList.toggle('show');
  toggle.classList.toggle('active');
});

// Auto-close when clicking a link inside nav
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
    toggle.classList.remove('active');
  });
});

// Auto-close when clicking outside nav & toggle
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('show');
    toggle.classList.remove('active');
  }
});
