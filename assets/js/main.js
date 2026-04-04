// ============================= MENU TOGGLE =================================

function toggleMenu() {
  var menu = document.getElementById('nav-menu');
  var button = document.getElementById('menu-button');
  var isOpen = menu.classList.contains('open');

  if (isOpen) {
    menu.classList.remove('open');
    button.classList.remove('menu-open');
    button.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('disable-scroll');
  } else {
    menu.classList.add('open');
    button.classList.add('menu-open');
    button.setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('disable-scroll');
  }
}

// =========================== DARK MODE TOGGLE ===============================

function toggleDarkMode() {
  var html = document.documentElement;
  var isDark = html.classList.contains('dark');

  if (isDark) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}
