// иницилизация slider-swiper
const swiper = new Swiper('.swiper', {
  navigation: {
  nextEl: '.swiper__btn--next',
  prevEl: '.swiper__btn--prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '</span>';
      },
  },
  a11y: {
  enabled: true,
  prevSlideMessage: 'Предыдущий слайд',
  nextSlideMessage: 'Следующий слайд',
  firstSlideMessage: 'Это первый слайд',
  lastSlideMessage: 'Это последний слайд',
  slideLabelMessage: 'Слайд {{index}} из {{slidesLength}}',
  },
});

// иницилизация yandex карты
let center = [59.94432679745379,30.306298888452726];

function init() {
    let map = new ymaps.Map('map__block', {
        center: center,
        zoom: 13,
  },
  );

  let placemark = new ymaps.Placemark(center, {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/mapicon.svg',
      iconImageSize: [56, 56],
      iconImageOffset: [72, -90],
  });

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');
  map.behaviors.disable(['scrollZoom']);
  map.geoObjects.add(placemark);
}

ymaps.ready(init);

 // плавный скролл по якорям
 const smoothLinks = document.querySelectorAll('a[href^="#"]');
 for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

// иницилизация библиотеки анимаций WOW.js
let wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

