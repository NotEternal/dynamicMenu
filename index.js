'use strict';

// -----------------------------------------------
// Toggle menu and main

const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.header__nav');
const main = document.querySelector('.main');

navToggle.onclick = () => {
  navToggle.classList.toggle('active');
  navigation.classList.toggle('visible');
  main.classList.toggle('reduce');
};

main.addEventListener('click', () => {
  navToggle.classList.remove('active');
  navigation.classList.remove('visible');
  main.classList.remove('reduce');
});

// -----------------------------------------------
// Change sections

const arrNavLinks = [...document.querySelectorAll('.header__link')];
const arrSections = [...document.querySelectorAll('.section')];
const headerNav = document.querySelector('.header__nav');

arrNavLinks[0].classList.add('active');
arrSections[0].classList.add('active');

headerNav.addEventListener('click', (event) => {
  if (event.target.classList.contains('header__link')) {
    document.querySelector('.header__link.active').classList.remove('active');
    event.target.classList.add('active');

    document.querySelector('.section.active').classList.remove('active');
    arrSections[arrNavLinks.indexOf(event.target)].classList.add('active');
  }
});
