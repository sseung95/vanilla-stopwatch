// 엘리먼트 요소
const wrapper = document.querySelector('.wrapper');
const minuteEl = document.querySelector('#minute');
const secondEl = document.querySelector('#second');
const miliSecondEl = document.querySelector('#mili_second');

// 버튼 요소
const startBtn = document.querySelector('#button-start');
const stopBtn = document.querySelector('#button-stop');
const resetBtn = document.querySelector('#button-reset');
const lapBtn = document.querySelector('#button-lap');

const history = [];

// 시간 관련 변수
let minute = 0;
let second = 0;
let miliSecond = 0;

let interval;

// 이벤트
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);

// 시작
function start() {
  // interval 이 없으면 (빈 값이면) interval 생성하여 넣어주기
  if (!interval) {
    interval = setInterval(() => {
      miliSecond++;

      if (miliSecond === 100) {
        miliSecond = 0;
        second++;
      }
      if (second === 10) {
        second = 0;
        minute++;
      }
      if (minute === 60) {
        clearInterval(interval);
      }

      miliSecondEl.textContent = convertNumber(miliSecond);
      secondEl.textContent = convertNumber(second);
      minuteEl.textContent = convertNumber(minute);
    }, 10);
  }
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  // 시간 변수 초기화
  minute = 0;
  second = 0;
  miliSecond = 0;

  // 화면 시간 초기화
  miliSecondEl.textContent = '00';
  secondEl.textContent = '00';
  minuteEl.textContent = '00';

  // 인터벌 중지
  clearInterval(interval);
  interval = null;

  // 기록 초기화
  const ul = document.querySelector('ul');
  // ul이 있으면 안의 내용 초기화
  if (ul) {
    ul.innerHTML = '';
  }
}

function lap() {
  const lapStr = `${convertNumber(minute)}:${convertNumber(
    second
  )}.${convertNumber(miliSecond)}`;
  history.push(lapStr);

  let ul = document.querySelector('ul');

  if (!ul) {
    ul = document.createElement('ul');
    wrapper.appendChild(ul);
  }

  const li = document.createElement('li');
  li.innerHTML = lapStr;

  ul.prepend(li);
}

function convertNumber(number) {
  return String(number).padStart(2, '0');
}
