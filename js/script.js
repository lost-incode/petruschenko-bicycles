'use strict';
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--opened');
});

var smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach(function (smoothLink) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    var id = smoothLink.getAttribute('href');
    var linkSelector = 'a[name="' + id.slice(1, id.length) + '"]';

    document.querySelector(linkSelector).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    navMain.classList.toggle('main-nav--closed');
    navMain.classList.toggle('main-nav--opened');
  });
});
