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
  autoplay: true,
  slidesPerView: 7,
  spaceBetween: 5,
})


// 올해년도 구하기
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();