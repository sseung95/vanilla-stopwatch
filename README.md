# vanillaJS-my-stopwatch


## 1. 버튼 4개하고 시간 남으면 추후 2개로 변경예정

## 2. 시작, 중지, 기록, 초기화

해야할 작업
- 처음에는 이벤트를 4개로 각각 만든다. => 추후에 wrapper 에 이벤트를 1개로 축소하고 내부에서 분기.


변수작업
- Element  
    - 분 : const minuteEl = document.querySelector("#minute"); 
    - 초 : 
    - 밀리초 : 

    - 스타트 : const startBtn = document.querySelector("#button-start")
    - 스탑 : 
    - 리셋 : 
    - 랩 :

- LAB 기록을 담을 배열을 선언 : history_push[] ,history_unshift[] 


- 00:00.00
값 - let minute = 00 , 초 = 00, 밀리초

기능 : Start
1. button Element 찾고 -> 이벤트(click)을 걸고, 내부에서 setInterval 함수 불러온다. 
SetInterval(콜백함수, 주기시간);
setInterval 함수가 실행되면서 값을 리턴할 때 : 리턴하는 값을 변수에 담으면 된다.


계속 증가하다가 (밀리초 <= 59)

조건에 따른 분기
if 밀리초가 60이 되면, (밀리초를 00 으로, second를 +1)
if 세컨이 60이되면, (세컨은 00으로, 분은 +1) 
if 분이 60이 되면, (스탑) // 60:00.00

----------------------------------------------------------------------------
STOP 기능

setInterval을 멈추면 된다
-> clearInterval(timerId) 함수를 호출하면 된다. 

----------------------------------------------------------------------------
Reset 기능
로직순서 : Stop 기능이 먼저 동작한후, 모든 변수(값 - let minute = 00 , 초 = 00, 밀리초) 을 초기화

----------------------------------------------------------------------------
Lab 기능

1. 동작
버튼을 눌렀을 때, (시간 값을 받아온다.) 
click 이벤트가 발생할 때마다 history.push(); (나중에 출력할 때도 편하게??)


구간기록을 담는 태그를 만드는 함수
(단, ul이 없으면, ul 생성 후 li 생성
ul이 있으면, li만 생성
)
(조건을 확인할 때, 
    // document.querySelector("ul") true면, html안에 ul태그가 있다는 의미.
    //document.querySelector("ul") false면, html안에 ul태그가 없다는 의미.
    if(!document.querySelector("ul")) {
        ul을 생성해준 후, li 생성주고 작업하면됌
    }
    else {
        li만 생성한 후 작업
    }
)
ul -> li : 
createElement() -> appaendChild -> innerHTML(textContent)을 통해 값을 입력


2. 출력
출력할 때는 history 배열을 반복하여 값을 가져온다. 


[OPTION]
한번은 push로 담긴 배열을 불러보고,
다른 한번은 unshift로 담긴 배열을 불러보고
순서를 확인
