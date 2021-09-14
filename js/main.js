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

// 토글버튼 클릭시 드롭메뉴 활성화
const toggleBtn = document.querySelector('.toggle-btn');
const navEls = document.querySelectorAll('#header nav');
toggleBtn.addEventListener('click', function () {
  navEls.forEach(function (navEl) {
    navEl.classList.toggle('open');
  });
  header.classList.toggle('white');
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
const urlBtn2 = document.querySelector('#together .url-btn');
urlBtn.addEventListener('click', function() {
  alert('URL이 복사 되었습니다. 원하시는 곳에 붙여넣기 해 주세요.');
});
urlBtn2.addEventListener('click', function() {
  alert('URL이 복사 되었습니다. 원하시는 곳에 붙여넣기 해 주세요.');
});

// inquiry창 활성화
const chatBtn = document.querySelector('.floating-btns .chat-btn');
const inquiryEl = document.querySelector('.inquiry');
const closeBtn = inquiryEl.querySelector('.btn.close');
const fadeInEls = inquiryEl.querySelectorAll('.fade-in');

chatBtn.addEventListener('click', function () {
  inquiryEl.classList.remove('hidden');
  header.scrollIntoView();
  fadeInEls.forEach(function(fadeInEl) {
    fadeInEl.classList.remove('fade-in');
  });
});

closeBtn.addEventListener('click', function () {
  inquiryEl.classList.add('hidden');
  fadeInEls.forEach(function(fadeInEl) {
    fadeInEl.classList.add('fade-in');
  });
});

const messengerEl = inquiryEl.querySelector('.messenger');
const copyBtn = document.querySelector('.messenger__links li:nth-child(2) button.btn');

copyBtn.addEventListener('click', function () {
  alert('링크가 복사되었습니다!');
});

// 운영시간 체크(9 to 6)
const hours = new Date().getHours();
const day = new Date().getDay();
const inquiryDescriptionEls = inquiryEl.querySelectorAll('.inquiry__description span');

if ((hours >= 9 && hours < 18) && (day >= 1 && day <= 5)) {
  inquiryDescriptionEls.forEach(function (el, index) {
    switch (index) {
      case 0:
        el.textContent = '응답시간 보통';
        el.classList.remove('night');
        break;
      case 1:
        el.textContent = '보통 수십 분 내에 응답합니다.';
        break;
    }
  });
} else {
  inquiryDescriptionEls.forEach(function (el, index) {
    switch (index) {
      case 0:
        el.textContent = '운영시간 아님';
        el.classList.add('night');
        break;
      case 1:
        el.textContent = '오전 9시부터 상담이 운영됩니다.';
        break;
    }
  });
}

// inquiry 운영시간 보기
const inquiryHours = inquiryEl.querySelector('.inquiry__description__hours');
const inquiryHoursOpen = inquiryEl.querySelector('.business-hours');
inquiryHours.addEventListener('click', function () {
  inquiryHoursOpen.classList.toggle('open');
});

// 테마메뉴 필터링
const themeMenu = document.querySelector('.theme__menu');
const themeContents = document.querySelectorAll('.theme__content');

themeMenu.addEventListener('click', function (event) {
  const filter = event.target.dataset.filter || event.target.parentElement.dataset.filter;
  if (filter === null || filter === undefined) {
    return;
  }

  themeContents.forEach(function (themeContent) {
    if (filter === themeContent.dataset.type) {
      themeContent.classList.remove('invisible');
    } else {
      themeContent.classList.add('invisible');
    }

    const themeMenuBtn = themeMenu.querySelector('button.selected');
    if (themeMenuBtn !== null) {
      themeMenuBtn.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
});

// 메뉴버튼 활성화
// const mainMenu = document.querySelector('#header ul.main-menu');
// const active = mainMenu.querySelector('li.active');
// mainMenu.addEventListener('click', function (event) {
//   if (active !== null) {
//     active.classList.remove('active');
//     console.log(event.target)
//   }
//   console.log(event.target)
//   event.target.classList.add('active');
// });

// 비디오 모바일버전으로 변경
// const videoEl = document.querySelector('#video video');
// const moSrc = './video/jb_tvc_event_mo.mp4';
// const webSrc = './video/jb_tvc_event_web.mp4';

// window.addEventListener('resize', function () {
//   if (window.innerWidth < 768) {
//     videoEl.setAttribute('src', moSrc);
//   } else {
//     videoEl.setAttribute('src', webSrc);
//   }
// });

