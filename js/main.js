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

// inquiry창 활성화
const chatBtn = document.querySelector('.floating-btns .chat-btn');
const inquiryEl = document.querySelector('.inquiry');
const closeBtn = inquiryEl.querySelector('.btn.close');
const invisibleEls = inquiryEl.querySelectorAll('.invisible');

chatBtn.addEventListener('click', function () {
  inquiryEl.classList.remove('hidden');
  header.scrollIntoView();
  invisibleEls.forEach(function(invisibleEl) {
    invisibleEl.classList.remove('invisible');
  });
});

closeBtn.addEventListener('click', function () {
  inquiryEl.classList.add('hidden');
  invisibleEls.forEach(function(invisibleEl) {
    invisibleEl.classList.add('invisible');
  });
});

const messengerEl = inquiryEl.querySelector('.messenger');
const copyBtn = document.querySelector('.messenger__links li:nth-child(2) button.btn');

copyBtn.addEventListener('click', function () {
  alert('링크가 복사되었습니다!');
});

// 시간 불러오기
const hours = new Date().getHours();
const inquiryDescriptionEls = inquiryEl.querySelectorAll('.inquiry__description span');

if (hours >= 18) {
  inquiryDescriptionEls.forEach(function (el, index) {
    switch (index) {
      case 0:
        el.textContent = '운영시간 아님';
        el.classList.add('night');
        break;
      case 1:
        el.textContent = '15시간 뒤 상담이 운영됩니다.';
        break;
    }
  });
};

