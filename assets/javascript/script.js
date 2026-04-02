const themeLink = document.getElementById('themeStylesheet');
const themeItems = document.querySelectorAll('#themeSidecar li');
const sidecar = document.getElementById('themeSidecar');
const button = document.getElementById('themeButton');

// Lade gespeichertes Theme oder Default
let currentTheme = localStorage.getItem('theme') || 'style.css';
themeLink.href = currentTheme;

// Button öffnet / schließt Sidecar
button.onclick = () => sidecar.classList.toggle('hidden');

// Theme auswählen
themeItems.forEach(item => {
  item.onclick = () => {
    const theme = item.getAttribute('data-theme');
    themeLink.href = theme;
    localStorage.setItem('theme', theme);
  };
});