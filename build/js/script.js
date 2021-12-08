'use strict';
var matchForm = document.querySelector(".match-form form");
var matchSubmitButton = matchForm.querySelector(".match-form__submit");
var matchName = matchForm.querySelector("#name");
var matchPhone = matchForm.querySelector("#phone");
var body = document.querySelector('.page__body');

var isStorageSupport = true;
var storageName = "";
var storagePhone = "";

try {
  storageName = localStorage.getItem("matchName");
  storagePhone = localStorage.getItem("matchPhone");
} catch (err) {
  isStorageSupport = false;
}

window.addEventListener("load", function() {
  if (storageName) {
    matchName.value = storageName;
  }
  
  if (storagePhone) {
    matchPhone.value = storagePhone;
  }
});

matchForm.addEventListener("submit", function (evt) {
  if (isStorageSupport) {
    localStorage.setItem("matchName", matchName.value);
    localStorage.setItem("matchPhone", matchPhone.value);
  }
});

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--opened');
  body.classList.toggle('overflow-hidden');
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
    body.classList.toggle('overflow-hidden');
  });
});
