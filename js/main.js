const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-button');
const navBtnImg = document.querySelector('#nav-button-image');
const navLinks = document.querySelectorAll('.nav-link');

navBtn.onclick = () => {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = '/images/icons/nav-close.svg';
  } else {
    navBtnImg.src = '/images/icons/nav-open.svg';
  }
};

// Добавляем обработчик события для каждой ссылки в навигационном меню
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Закрываем навигационное меню
    nav.classList.remove('open');
    navBtnImg.src = '/images/icons/nav-open.svg';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Прокручиваем страницу вверх при загрузке
  window.scrollTo(0, 0);
});

AOS.init();
