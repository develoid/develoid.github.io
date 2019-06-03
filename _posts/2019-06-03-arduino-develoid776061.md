---
layout: post
title: '아두이노 기본 - Digital I/O 함수'
author: '시류아'
categories: Arduino
tags:
- IoT-Board
- Arduino
- Programming
-
---


<script> location.href='https://cafe.naver.com/develoid/776061' ; </script>

<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMzUg%2FMDAxNDg0NzA0MjExNTM4.BmmMZ_4owOwuOcm1hHfFMpgYKgMsMjspdzLh6ctPgHwg.rSQGP_s0pbykmiNttBF3BjsPzup2rm3C2MeyWFeCnVgg.JPEG.searphiel9%2Farduino_logo.jpg%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <div>
   아두이노 기본
   <b>Digital I/O
  </div>
 </div>
</div>
<div>
 <div>
  <div>
   pinMode
  </div>
 </div>
</div>
<div>
 <p>아두이노의 아날로그와 디지털포트의 입출력을 결정하는 함수이다. 이 함수를 사용해서 지정해주지 않으면 아두이노에서는 사용하려는 포트가 정상적으로 동작하지 않는다.</p>
</div>
<div>
 <div>
  <div>
   pinMode(pin,&nbsp;mode)
   <b>
   <b>//&nbsp;pin&nbsp;:&nbsp;입력&nbsp;받을&nbsp;포트&nbsp;번호
   <b>//&nbsp;mode&nbsp;:&nbsp;INPUT(입력),&nbsp;OUTPUT(출력)
   <b>//&nbsp;mode&nbsp;는&nbsp;1(입력),&nbsp;0(출력)&nbsp;으로&nbsp;대체&nbsp;가능
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
   digitalWrite
  </div>
 </div>
</div>
<div>
 <p>digitalWrite는 디지털포트를 통해서 신호를 출력할때 사용한다.</p>
</div>
<div>
 <div>
  <div>
   digitalWrite(pin,&nbsp;value)
   <b>&nbsp;
   <b>//&nbsp;pin&nbsp;:&nbsp;출력할&nbsp;포트&nbsp;번호
   <b>//&nbsp;value&nbsp;:&nbsp;HIGH(출력),&nbsp;LOW(출력안함)
   <b>//&nbsp;value&nbsp;는&nbsp;1(출력),&nbsp;0(출력안함)&nbsp;으로&nbsp;대체&nbsp;가능
  </div>
 </div>
</div>
<div>
 <p>pinMode &amp; digitalWrite 예제</p>
</div>
<div>
 <div>
  <div>
   #define&nbsp;LED&nbsp;13&nbsp;//&nbsp;LED는&nbsp;디지털포트&nbsp;13번에&nbsp;연결되어있다
   <b>&nbsp;
   <b>void&nbsp;setup()&nbsp;{
   <b>pinMode(LED,&nbsp;OUTPUT);&nbsp;//&nbsp;디지털포트&nbsp;출력&nbsp;설정
   <b>}
   <b>&nbsp;
   <b>void&nbsp;loop()&nbsp;{
   <b>&nbsp;&nbsp;digitalWrite(LED,&nbsp;HIGH);&nbsp;//&nbsp;LED&nbsp;ON
   <b>&nbsp;&nbsp;delay(500);&nbsp;//&nbsp;지연
   <b>&nbsp;&nbsp;digitalWrite(LED,&nbsp;LOW);&nbsp;//&nbsp;LED&nbsp;OFF
   <b>&nbsp;&nbsp;delay(500);&nbsp;//&nbsp;지연
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
   digitalRead
  </div>
 </div>
</div>
<div>
 <p>digitalRead는 디지털 포트를 통해 신호를 입력받을 때 사용한다.</p>
</div>
<div>
 <div>
  <div>
   digitalRead(pin)
   <b>&nbsp;
   <b>//&nbsp;pin&nbsp;:&nbsp;입력받을&nbsp;포트&nbsp;번호
  </div>
 </div>
</div>
<div>
 <p>digitalRead 예제</p>
</div>
<div>
 <div>
  <div>
   #define&nbsp;LED&nbsp;13&nbsp;//&nbsp;LED는&nbsp;디지털포트&nbsp;13번에&nbsp;연결되어있다
   <b>#define&nbsp;Button&nbsp;7&nbsp;//&nbsp;버튼은&nbsp;디지털포트&nbsp;7번에&nbsp;연결되어있다
   <b>&nbsp;
   <b>void&nbsp;setup()&nbsp;{
   <b>&nbsp;&nbsp;pinMode(LED,&nbsp;OUTPUT);&nbsp;//&nbsp;디지털포트&nbsp;출력&nbsp;설정
   <b>&nbsp;&nbsp;pinMode(Button,&nbsp;INPUT);&nbsp;//&nbsp;디지털포트&nbsp;입력&nbsp;설정
   <b>}
   <b>&nbsp;
   <b>void&nbsp;loop()&nbsp;{
   <b>&nbsp;&nbsp;int&nbsp;val&nbsp;=&nbsp;digitalRead(Button);&nbsp;//&nbsp;7번&nbsp;포트를&nbsp;통해서&nbsp;들어오는&nbsp;값&nbsp;수신
   <b>&nbsp;&nbsp;digitalWrite(LED,&nbsp;val);&nbsp;//&nbsp;수신된&nbsp;값을&nbsp;토대로&nbsp;디지털&nbsp;값&nbsp;송출
   <b>}
  </div>
 </div>
</div>
