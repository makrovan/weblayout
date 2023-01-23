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

let tabsHref = document.querySelectorAll('.tabs-nav__href');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsHref.forEach(function (href) {
  href.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsHref.forEach(function (href) {
      href.classList.remove('tabs-nav__href--active');
      e.currentTarget.classList.add('tabs-nav__href--active');

      tabsItem.forEach(function (item) {
        item.classList.remove('tabs-item--active');
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
      })
    })
  })
})

let swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  allowTouchMove: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

let headerSearchBtn = document.querySelector('.header__search');
let searchForm = document.querySelector('.header__action');
let searchCloseBtn = document.querySelector('.header-action__btn-close');
headerSearchBtn.addEventListener('click',
  function () {
    searchForm.classList.add('header__action--active');
  })
searchCloseBtn.addEventListener('click',
  function () {
    searchForm.classList.remove('header__action--active');
  })
