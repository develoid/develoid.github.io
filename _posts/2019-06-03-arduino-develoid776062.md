---
layout: post
title: '아두이노 기본 - Analog I/O 함수'
author: '시류아'
categories: Arduino
tags:
- IoT-Board
- Arduino
- Programming
-
---


<script> location.href='https://cafe.naver.com/develoid/776062' ; </script>

<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMzEg%2FMDAxNDg0NzA0Njg4MzAz.VWtKvbqVQ_kKZEOPMnL-JVOtsOcVXNDRwFEVUQnoiEEg.OR6WkRiQ21_kcqV1_wE9f9oFZ0alrIDO_UNWf8TISf0g.JPEG.searphiel9%2Farduino_logo.jpg%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <div>
   아두이노 기본
   <b>Analog I/O 함수
  </div>
 </div>
</div>
<div>
 <div>
  <div>
   analogRead
  </div>
 </div>
</div>
<div>
 <p>아놀로그 포트를 통해서 신호를 입력받을때 사용한다.</p>
</div>
<div>
 <div>
  <div>
   analogRead(pin)
   <b>&nbsp;
   <b>pin&nbsp;:&nbsp;입력받을&nbsp;포트&nbsp;번호
  </div>
 </div>
</div>
<div>
 <p><span></span>analogRead&nbsp;예제</p>
</div>
<div>
 <div>
  <div>
   #define&nbsp;analogPin&nbsp;A0&nbsp;//&nbsp;A0&nbsp;아날로그&nbsp;포트를&nbsp;통해서&nbsp;값을&nbsp;입력&nbsp;받을&nbsp;예정
   <b>&nbsp;
   <b>void&nbsp;setup()&nbsp;{
   <b>&nbsp;&nbsp;Serial.begin(9600);
   <b>}
   <b>&nbsp;
   <b>void&nbsp;loop()&nbsp;{
   <b>&nbsp;&nbsp;int&nbsp;val&nbsp;=&nbsp;analogRead(analogPin);&nbsp;//&nbsp;A0번&nbsp;포트를&nbsp;통해서&nbsp;들어오는&nbsp;값&nbsp;수신
   <b>&nbsp;&nbsp;Serial.println(val);&nbsp;//&nbsp;수신된&nbsp;값을&nbsp;토대로&nbsp;아날로그&nbsp;값&nbsp;송출
   <b>}
  </div>
 </div>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   analogWrite
  </div>
 </div>
</div>
<div>
 <p>아날로그 출력 또는 PWM 출력을 할 때 사용한다. 아두이노에서 포트 번호 앞에 ~ 표시가 적혀있는데 이 포트를 통해서 PWM 출력이 사용 할 수 있다.</p>
</div>
<div>
 <div>
  <div>
   analogWrite(pin,&nbsp;value)
   <b>&nbsp;
   <b>pin&nbsp;:&nbsp;출력할&nbsp;포트&nbsp;번호
   <b>value&nbsp;:&nbsp;출력할&nbsp;값,&nbsp;0(계속&nbsp;꺼짐)&nbsp;~&nbsp;255(계속&nbsp;켜짐)
  </div>
 </div>
</div>
<div>
 <p>analogWrite&nbsp;예제</p>
</div>
<div>
 <div>
  <div>
   #define&nbsp;PWM&nbsp;6&nbsp;//
   <b>&nbsp;
   <b>void&nbsp;setup()&nbsp;{
   <b>&nbsp;&nbsp;pinMode(LED,&nbsp;OUTPUT);&nbsp;//&nbsp;디지털포트&nbsp;출력&nbsp;설정
   <b>}
   <b>&nbsp;
   <b>void&nbsp;loop()&nbsp;{
   <b>&nbsp;&nbsp;analogWrite(PWM,&nbsp;1024);
   <b>&nbsp;&nbsp;delay(1000);
   <b>&nbsp;&nbsp;analogWrite(PWM,&nbsp;0);
   <b>&nbsp;&nbsp;delay(1000);
   <b>}
  </div>
 </div>
</div>
<div>
 <p></p>
</div>
