const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

const themeToggle = document.querySelector('[data-theme-toggle]');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') document.body.classList.add('dark');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
}

document.querySelectorAll('[data-current-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});
