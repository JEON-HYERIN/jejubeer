// 올해년도 구하기
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// 상단버튼(top-btn)
const header = document.querySelector('#header');
const videoHeight = video.getBoundingClientRect().height;
const topBtn = document.querySelector('.floating-btns .top-btn');

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

// 링크버튼(link-btn)
const shareEl = document.querySelector('.share');
const linkBtn = document.querySelector('.floating-btns .link-btn');
linkBtn.addEventListener('click', function () {
  shareEl.classList.remove('hidden');
});

shareEl.addEventListener('click', function () {
  shareEl.classList.add('hidden');
});

// url버튼 클릭시 alert 실행
const urlBtn = shareEl.querySelector('.url-btn');
urlBtn.addEventListener('click', function() {
  alert('URL이 복사 되었습니다. 원하시는 곳에 붙여넣기 해 주세요.');
});

