const header = document.querySelector('.mog-header');
const nav = document.getElementById('mogNav');
const toggle = document.getElementById('mogNavToggle');

// Transparent → solid on scroll
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// Toggle mobile menu
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('show');
  toggle.classList.toggle('active', isOpen);
});

// Auto-close when clicking a link inside nav
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
    toggle.classList.remove('active');
  });
});

// Auto-close when clicking outside nav or toggle
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('show');
    toggle.classList.remove('active');
  }
});

// Optional: close menu on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    nav.classList.remove('show');
    toggle.classList.remove('active');
  }
});
