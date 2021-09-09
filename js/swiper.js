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
  slidesPerView: 3.5,
  // spaceBetween: 5,
  centeredSlides: true,
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  }
});

new Swiper('#store .swiper', {
  loop: true,
  autoplay: {
    delay: 1000
  },
  slidesPerView: 8,
  spaceBetween: 5,
})