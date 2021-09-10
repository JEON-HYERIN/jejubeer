new Swiper('.swiper.visual-swiper', {
  loop: true,
  autoplay: true,
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  }
});

new Swiper('.swiper.sub-swiper', {
  loop: true,
  autoplay: {
    delay: 5000
  },
  // slidesPerView: 3.5,
  // spaceBetween: 5,
  centeredSlides: true,
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    960: {
      slidesPerView: 3.5,
      spaceBetween: 5
    },
  },
});

new Swiper('#store .swiper', {
  loop: true,
  autoplay: {
    delay: 1000
  },
  // slidesPerView: 8,
  // spaceBetween: 5,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 5,
      spaceBetween: 5
    },
    600: {
      slidesPerView: 6,
      spaceBetween: 5
    },
    960: {
      slidesPerView: 8,
      spaceBetween: 5
    },
  },
});