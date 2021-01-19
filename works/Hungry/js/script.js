"use strict";

document.addEventListener('DOMContentLoaded', () => {
//menu 
const burger = document.querySelector('.header__burger'),
      menu = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger_active');
    menu.classList.toggle('header__nav_active');
});

//gallery
lightGallery(document.getElementById('lightgallery'));

//tabs and slider

const mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true, 
    autoplay: {
        delay: 5000,
      }
});

const tabItems = document.querySelectorAll('.menu__tabs-item');

tabItems.forEach((item, i) => {
    item.addEventListener('click', () => {
        mySwiper[1].slideTo(i,1000, false);
    });
});

//smooth scrolling

function scrollToElem() {
    const anchors = document.querySelectorAll('a[data-target]');

    anchors.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            let target = item.getAttribute('data-target');
            const elem = document.querySelector(`#${target}`);

            elem.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

scrollToElem();

});