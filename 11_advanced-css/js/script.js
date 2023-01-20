let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuItem = document.querySelectorAll('.list__item');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  })

menuItem.forEach(function (e) {
  e.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})
