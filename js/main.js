// иницилизация slider-swiper
// const swiper = new Swiper('.slider', {
//   direction: 'horizontal',
//   slidesPerView: '2',
//   slidesPerGroup: '1',
//   spaceBetween: 15,
//   loop: true,

//   slideClass: 'slider__slide',
//   wrapperClass: 'slider__wrapper',

//   navigation: {
//     nextEl: '.slider__button-next',
//     prevEl: '.slider__button-prev',
//   },

//   pagination: {
//     el: '.slider__pagination',
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + '</span>';          return '<span class="' + className + '">' + '</span>';
//     },
//   },

//   a11y: {
//     enabled: true,
//     prevSlideMessage: 'Предыдущий слайд',
//     nextSlideMessage: 'Следующий слайд',
//     firstSlideMessage: 'Это первый слайд',
//     lastSlideMessage: 'Это последний слайд',
//     slideLabelMessage: 'Слайд {{index}} из {{slidesLength}}',
//   }
// });
const swiper = new Swiper('.swiper', {
  // slidesPerView: 3,
  // slidesPerGroup: 3,
  loop: true,
  // spaceBetween: 20,
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

  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
});


