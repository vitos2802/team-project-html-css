const burger = document.querySelector('.burger');
const submenu = document.querySelector('.navigation');
const logotype = document.querySelector('.header__logotype');


burger.addEventListener('click', function (e) {
  e.preventDefault();
  burger.classList.toggle('open-close');
  submenu.classList.toggle('show');
  logotype.classList.toggle('visible');
});
