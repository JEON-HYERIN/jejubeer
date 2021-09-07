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

// 상단버튼
const header = document.querySelector('#header');
const video = document.querySelector('#video');
const videoHeight = video.getBoundingClientRect().height;
const topBtn = document.querySelector('.top-btn');

window.addEventListener('scroll', () => {
  if(window.scrollY > videoHeight / 2) {
    topBtn.classList.remove('hidden');
  } else {
    topBtn.classList.add('hidden');
  }
});

topBtn.addEventListener('click', () => {
  header.scrollIntoView({behavior: "smooth"});
});
