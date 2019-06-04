---
layout: post
title: '아두이노 기본 - Timer 함수'
author: '시류아'
categories: Arduino
tags:
- IoT-Board
- Arduino
- Programming
-
---


<script> location.href='https://cafe.naver.com/develoid/776063' ; </script>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMjI2%2FMDAxNDg0NzA1MTUxNzc1.KpEcc-C8CsasW-WfSNIE99O8Ut30K7wTPFwvzfrr1H8g.AuvlN0uPDKgio8XR_3CG9G0N1mfBcSULsfbQIU7yH08g.JPEG.searphiel9%2Farduino_logo.jpg%22&amp;type=cafe_wa740">
 </p>
</p>
<p>
 <p>
  <p>
   아두이노 기본
   <b>Timer 함수
  </p>
 </p>
</p>
<p>
 <p>
  <p>
   delay
  </p>
 </p>
</p>
<p>
 <p>특정 시간 동안 시간을 지연 할 때 사용한다. delay가 사용되는 지연시간동안에는 아두이노는 모든 처리하던 것을 멈추고 유지만 하고 있다.</p>
</p>
<p>
 <p>
  <p>
   delay(ms)
   <b>&nbsp;
   <b>ms&nbsp;:&nbsp;지연시간
   <b>지연시간은&nbsp;1000이&nbsp;1초이다
  </p>
 </p>
</p>
<p>
 <p>delay 예제</p>
</p>
<p>
 <p>
  <p>
   void&nbsp;loop()&nbsp;{
   <b>&nbsp;&nbsp;digitalWrite(LED,&nbsp;HIGH);
   <b>&nbsp;&nbsp;delay(500);&nbsp;//&nbsp;0.5초&nbsp;지연
   <b>&nbsp;&nbsp;digitalWrite(LED,&nbsp;LOW);
   <b>&nbsp;&nbsp;delay(500);&nbsp;//&nbsp;0.5초&nbsp;지연
   <b>}
  </p>
 </p>
</p>
<p>
 <p>
  <p></p>
 </p>
</p>
<p>
 <p>
  <p>
   millis
  </p>
 </p>
</p>
<p>
 <p>아두이노가 전원 넣고 동작하기 시작한 이후로 계속해서 작동되고 있는 함수이다. 시작과 동시에 계속해서 카운트 되고잇으며, 전체 진행 시간 표기 또는 다른 작업을 진행하면서 특정 작업을 지연할때 사용한다.<b><b>millis 예제</p>
</p>
<p>
 <p>
  <p>
   void&nbsp;setup()&nbsp;{
   <b>&nbsp;&nbsp;Serial.begin(9600);
   <b>}
   <b>&nbsp;
   <b>void&nbsp;loop()&nbsp;{
   <b>&nbsp;&nbsp;Serial.print(“Time&nbsp;:&nbsp;”);
   <b>&nbsp;&nbsp;unsigned&nbsp;long&nbsp;time&nbsp;=&nbsp;millis();&nbsp;//&nbsp;millis의&nbsp;값을&nbsp;time에&nbsp;저장
   <b>&nbsp;&nbsp;Serial.println(time);&nbsp;//&nbsp;time&nbsp;값을&nbsp;시리얼&nbsp;통신으로&nbsp;출력
   <b>&nbsp;&nbsp;delay(1000);&nbsp;//&nbsp;시간&nbsp;지연&nbsp;1초
   <b>}
  </p>
 </p>
</p>
