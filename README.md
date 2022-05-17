# vanillaJS-my-stopwatch

## 추후 고려사항

현재는 버튼 4개(start, stop, reset, lap)로 하고 시간 남으면 추후 2개로 변경예정

<br>

## 개요

### 변수

- Element : 분, 초, 밀리초
- Button Element : 시작, 중지, 리셋, 랩
- 기록을 담을 배열: history
- 시간 담을 변수 : minute, seconde, milliSecond

<br>

### 기능

#### Start

1. 만약 Interval이 있으면 setInterval 함수를 0.01초 마다 실행시킨다.
   1. milliSecond + 1 해준다.
   2. 만약 milliSecond가 60이면
      1. milliSecond = 0
      2. second + 1
   3. 만약 second가 60이면
      1. second = 0
      2. minute + 1
   4. 만약 minute이 60이면
      1. 스탑워치를 중지 시킨다.
   5. 화면에 시간을 출력한다.

<br>

#### Stop

1. clearInterval 함수를 호출하여 interval 멈춰준다.
2. 인터벌 변수를 비운다.

<br>

### Reset

1. 모든 시간 변수(minute, seconde, milliSecond) 초기화한다.
2. 화면에 있는 시간 00:00.00 으로 초기화한다.
3. 인터벌 중지 및 인터벌 변수 비운다.
4. 기록 내용을 초기화한다.
5. history 배열을 초기화한다.

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
