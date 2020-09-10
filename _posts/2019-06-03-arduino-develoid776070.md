---
layout: post
title: '[커뮤니티] 아두이노 기초 - 버튼으로 서보모터 제어하기'
author: '시류아'
categories: Arduino
tags:
- IoT-Board
- Arduino
- Programming
-
---


<script> location.href='https://cafe.naver.com/develoid/776070' ; </script>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMjIy%2FMDAxNDg0NzgxODY2Nzc0._7PjKUMMj9JuNNgMyASPOHJZsN6ueuVRGymTgNGxOXQg.KdoD2oreokf9yJaiWqpjF6BJHDf8M0cvuQO97iK5dfkg.JPEG.searphiel9%2Farduino_logo.jpg%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>
  <p>
   아두이노 기초
   버튼으로 서보모터 제어하기
  </p>

 </p>

</p>

<p>
 <p>이번에는 버튼을 통해서 서보모터를 제어이다. 간단하게 버튼을 누르면 서보모터의 위치값이 변경되는 것과, 버튼을 누르면 특정 위치로 이동하는 것 두 가지로 나누어 해보자.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   회로도
  </p>

 </p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMjYx%2FMDAxNDg0NzgyMDE0NjE3.fInJsqzSw3CtfUcWm7ycZw5PaSBVS13a5IYi_PXRjpsg.C160WZNaLwm-xxzk8Sef1Az8qxFeilO85rYl5R-zXLEg.PNG.searphiel9%2F1.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfOTkg%2FMDAxNDg0NzgyMDE0NjUx.4njo7CEIsK6YZpGKoATekvMa_21cLeVGEHvKuJFcKvUg.oUKkBYCDgMT3rwphZ4v-CSg2rOunMAnyoawXn97The4g.PNG.searphiel9%2F2.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>기존 서보모터 배선에서 버튼 배선을 추가 하는 것으로 끝이 난다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   버튼을 통해 서보모터 위치 변경제어
  </p>

 </p>

</p>

<p>
 <p>조건 1 &gt; pin에 연결된 버튼 1을 누르면 위치 값 증가조건 2 &gt; pin에 연결된 버튼 2를 누르면 위치 값 감소</p>

</p>

<p>
 <p>
  <p>
   #include&nbsp;&lt;Servo.h&gt;
   &nbsp;
   Servo&nbsp;myservo;
   &nbsp;
   int&nbsp;pos=90;
   &nbsp;
   void&nbsp;setup()&nbsp;{
   &nbsp;&nbsp;//&nbsp;put&nbsp;your&nbsp;setup&nbsp;code&nbsp;here,&nbsp;to&nbsp;run&nbsp;once:
   &nbsp;&nbsp;myservo.attach(6);
   &nbsp;&nbsp;pinMode(2,&nbsp;INPUT);
   &nbsp;&nbsp;pinMode(3,&nbsp;INPUT);
   &nbsp;&nbsp;myservo.write(90);
   &nbsp;&nbsp;delay(500);
   }
   &nbsp;
   void&nbsp;loop()&nbsp;{
   &nbsp;&nbsp;//&nbsp;put&nbsp;your&nbsp;main&nbsp;code&nbsp;here,&nbsp;to&nbsp;run&nbsp;repeatedly:
   &nbsp;&nbsp;if(digitalRead(2)&nbsp;==&nbsp;LOW)&nbsp;pos&nbsp;++;&nbsp;//&nbsp;2번&nbsp;핀의&nbsp;버튼이&nbsp;눌러지면&nbsp;위치&nbsp;값&nbsp;증가
   &nbsp;&nbsp;if(digitalRead(3)&nbsp;==&nbsp;LOW)&nbsp;pos&nbsp;--;&nbsp;//&nbsp;3번&nbsp;핀의&nbsp;버튼이&nbsp;눌러지면&nbsp;위치&nbsp;값&nbsp;감소
   &nbsp;
   &nbsp;&nbsp;if(pos&nbsp;&lt;&nbsp;0)&nbsp;pos&nbsp;=&nbsp;0;&nbsp;//&nbsp;0보다&nbsp;작아지면&nbsp;0으로
   &nbsp;&nbsp;if(pos&nbsp;&gt;&nbsp;180)&nbsp;pos&nbsp;=&nbsp;180;&nbsp;//&nbsp;180보다&nbsp;커지면&nbsp;180으로
   &nbsp;
   &nbsp;&nbsp;myservo.write(pos);
   &nbsp;&nbsp;delay(15);
   }
  </p>

 </p>

</p>

<p>
 <p>이 소스코드를 이용 할 경우 양쪽 다 눌러지면 입력 값이 겹쳐져서 제자리에 멈추어 있는다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   버튼을 통해서 서보모터 특정위치로 이동시키기
  </p>

 </p>

</p>

<p>
 <p>이번에는 버튼을 누르면 서보모터를 특정 위치로 이동시켜보자. 조건은 아래와 같다.조건 1 &gt; 버튼 1을 누를 경우 서보모터는 180도 지점으로 이동조건 2 &gt; 버튼 2를 누를 경우 서보모터는 0도 지점으로 이동</p>

</p>

<p>
 <p>
  <p>
   #include&nbsp;&lt;Servo.h&gt;
   &nbsp;
   Servo&nbsp;myservo;
   &nbsp;
   int&nbsp;pos=90;
   &nbsp;
   void&nbsp;setup()&nbsp;{
   &nbsp;&nbsp;//&nbsp;put&nbsp;your&nbsp;setup&nbsp;code&nbsp;here,&nbsp;to&nbsp;run&nbsp;once:
   &nbsp;&nbsp;myservo.attach(6);
   &nbsp;&nbsp;pinMode(2,&nbsp;INPUT);
   &nbsp;&nbsp;pinMode(3,&nbsp;INPUT);
   &nbsp;&nbsp;myservo.write(90);
   &nbsp;&nbsp;delay(500);
   }
   &nbsp;
   void&nbsp;loop()&nbsp;{
   &nbsp;&nbsp;//&nbsp;put&nbsp;your&nbsp;main&nbsp;code&nbsp;here,&nbsp;to&nbsp;run&nbsp;repeatedly:
   &nbsp;&nbsp;if(digitalRead(2)&nbsp;==&nbsp;LOW)&nbsp;myservo.write(180);&nbsp;//&nbsp;2번&nbsp;핀의&nbsp;버튼이&nbsp;눌러지면&nbsp;180으로&nbsp;이동
   &nbsp;&nbsp;if(digitalRead(3)&nbsp;==&nbsp;LOW)&nbsp;myservo.write(0);&nbsp;//&nbsp;3번&nbsp;핀의&nbsp;버튼이&nbsp;눌러지면&nbsp;0으로&nbsp;이동
   &nbsp;&nbsp;delay(15);
   }
  </p>

 </p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>소스코드에는 정답은 없다. 다양한 생각이 있듯 다양한 방법이 있으며, 그 중 하나일 뿐이다.</p>

</p>
