# vanillaJS-my-stopwatch

## 추후 고려사항

현재는 버튼 4개(start, stop, reset, lap)로 하고 시간 남으면 추후 2개로 변경예정

<br>

## 변수

---

- Element : 분, 초, 밀리초
- Button Element : 시작, 중지, 리셋, 랩
- 기록을 담을 배열: history_push[] ,history_unshift[]
- 시간 담을 변수 : minute, seconde, milliSecond

<br>

## 기능

---

### Start

1. setInterval 함수를 0.01초 마다 실행시킨다.

1) milliSecond + 1 해준다.

2) 만약 milliSecond가 60이면
   (1) milliSecond = 0
   (2) second + 1
3) 만약 second가 60이면
   (1) second = 0
   (2) minute + 1
4) 만약 minute이 60이면
   (1) STOP()

<br>

### Star

1. clearInterval 함수를 호출하여 interval 멈춰준다.

<br>

### Reset

1. STOP() 호출
2. 모든 시간 변수(minute, seconde, milliSecond) 초기화

<br>

### Lap

1. 기록 배열에 현재 분, 초, 밀리초 String 형태로 push한다.
2. ul 요소를 찾아온다.
3. 만약 ul 요소가 없으면
   1. ul 요소를 만들어준다.
   2. wrapper에 ul 삽입한다.
4. li 요소를 만든다.
5. li 요소의 text에 기록정보를 입력한다.
6. ul 요소에 li 요소를 첫번째 요소에 넣는다.
