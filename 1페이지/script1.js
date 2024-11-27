// 이미지 요소와 오버레이 관련 요소 가져오기
const listItems = document.querySelectorAll('.text-list li');

// 각 리스트 항목에 대응하는 팝업 콘텐츠를 추적할 객체
const contentMap = {
  'popup1': 'popup1',
  'popup2': 'popup2'
};

//CALENDAR.EXE로 가는 코드
function goToIndex2() {
  window.location.href = 'index2.html';
}

//1. 리스트 
 //항목 클릭 이벤트 처리
listItems.forEach(item => {
  let clickCount = 0; // 클릭 횟수를 저장하는 변수

  item.addEventListener('click', (event) => {
    event.stopPropagation(); // 이벤트 전파 방지

    clickCount++;

    if (clickCount === 1) {
      // 첫 번째 클릭: 배경색 변경
      listItems.forEach(el => el.classList.remove('active')); // 다른 항목의 active 제거
      item.classList.add('active'); // 클릭한 항목에만 active 추가

      // 1초 후 클릭 횟수를 초기화
      setTimeout(() => {
        clickCount = 0;
      }, 1000);
    }

    if (clickCount === 2) {
      // 두 번째 클릭: 팝업 표시
      const popupId = item.dataset.popup; // data-popup 속성에서 팝업 ID 가져오기
      const popupContentId = contentMap[popupId]; // 팝업 콘텐츠 ID 가져오기

      if (popupContentId) {
        // 팝업 콘텐츠 보이기
        document.querySelectorAll('.popup-content').forEach(content => content.style.display = 'none');
        const contentElement = document.getElementById(popupContentId);
        contentElement.style.display = 'block';
      }

      clickCount = 0; // 클릭 횟수 초기화
    }
  });
});

// 2. 팝업 이미지1
//이미지 요소와 body 요소 가져오기
const popupImage = document.querySelector('.popup-image');
const body = document.querySelector('body');

// 알림창과 버튼 가져오기
const showAlertBtn = document.querySelector('#popup1 .okaybutton');
const alertBox = document.getElementById('alertBox');
const closeBtn = document.getElementById('closeBtn');

// 초기 상태에서 버튼 비활성화
showAlertBtn.disabled = true;

// 이미지 클릭 시 커서 변경 
popupImage.addEventListener('click', () => {
  body.style.cursor = 'url(pointerchange.png), auto'; // 커서 이미지를 'pointerchange.png'로 설정

  //.closebutton 요소에 커서 스타일 변경
  document.querySelectorAll('.closebutton').forEach(button => {
    button.style.cursor = 'url(pointerchange.png), auto'; // 커서 변경
  });
  //.okaybutton 요소에 커서 스타일 변경 
  document.querySelectorAll('.okaybutton').forEach(button => {
    button.style.cursor = 'url(pointerchange.png), auto'; // 커서 변경
  });
 
  // 커서 변경 후 버튼 활성화
  showAlertBtn.disabled = false; // 'okaybutton' 활성화
});

// .closebutton 이미지 클릭 전 디폴트 모습
document.querySelectorAll('.closebutton').forEach(button => {
  button.style.cursor = 'auto'; // 기본 커서 스타일
});

//2-1.팝업1 이벤트 알림
// "확인" 버튼 클릭 시 알림창 표시
showAlertBtn.addEventListener('click', () => {
  alertBox.style.display = 'block'; // 알림창 보이기
});

// 알림창 닫기 버튼 클릭 시 알림창 숨기기
closeBtn.addEventListener('click', () => {
  alertBox.style.display = 'none'; // 알림창 숨기기
});

//3. 팝업 닫기 함수
 //팝업 닫기 기본 함수
function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
}

 // 모든 팝업 닫기 함수
function closeAllPopups() {
  document.querySelectorAll('.popup-content').forEach(content => content.style.display = 'none');
}

 // 팝업 닫기 버튼에 클릭 이벤트 리스너 추가 (closebutton을 누르면 모든 팝업이 꺼지겠금 하는 명령어)
const closeButtons = document.querySelectorAll('.popup-content .closebutton');
closeButtons.forEach(button => {
  button.addEventListener('click', () => closeAllPopups());
});

 // 글씨 크기 조절 슬라이더 요소 가져오기
const fontSizeSlider = document.getElementById('fontSizeSlider');

 // 텍스트 리스트 항목에 스타일을 적용하기 위한 요소
const textListItems = document.querySelectorAll('.text-list li');

 // 슬라이더 값에 따라 글씨 크기 변경
fontSizeSlider.addEventListener('input', (event) => {
  const fontSize = event.target.value;  // 슬라이더 값 가져오기

 // 텍스트 리스트 항목에 글씨 크기 적용
  textListItems.forEach(item => {
    item.style.fontSize = fontSize + 'px';  // 글씨 크기 적용
  });
});

// 10x10 격자를 자동으로 생성
const gridContainer = document.querySelector('.grid-container');
for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    gridContainer.appendChild(cell);
}

// 각 셀을 클릭했을 때 빨간 원을 토글하는 코드
document.querySelectorAll('.grid-container div').forEach(cell => {
  cell.addEventListener('click', function() {
    // 셀 안에 원이 있는지 확인
    const existingCircle = cell.querySelector('.circle');

    if (existingCircle) {
      // 원이 있으면 삭제
      existingCircle.remove();
    } else {
      // 원이 없으면 새로 생성하여 추가
      const circle = document.createElement('div');
      circle.classList.add('circle');
      cell.appendChild(circle);
    }
  });
});

function playClickSound() {
  const audio = document.getElementById('audio_play');
  audio.currentTime = 0; // 소리를 처음부터 재생
  audio.play();
};