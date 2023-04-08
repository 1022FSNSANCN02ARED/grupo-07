const menuBtn = document.querySelector('.header__menu');
const openMenu = document.querySelector('.openMenu');

menuBtn.addEventListener('click', function() {
  openMenu.classList.toggle('active');
});
