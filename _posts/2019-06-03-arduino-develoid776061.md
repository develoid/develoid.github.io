---
layout: post
title: '[커뮤니티] 아두이노 기본 - Digital I/O 함수'
author: '시류아'
categories: Arduino
tags:
- IoT-Board
- Arduino
- Programming
-
---


<script> location.href='https://cafe.naver.com/develoid/776061' ; </script>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMzUg%2FMDAxNDg0NzA0MjExNTM4.BmmMZ_4owOwuOcm1hHfFMpgYKgMsMjspdzLh6ctPgHwg.rSQGP_s0pbykmiNttBF3BjsPzup2rm3C2MeyWFeCnVgg.JPEG.searphiel9%2Farduino_logo.jpg%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>
  <p>
   아두이노 기본
   Digital I/O
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   pinMode
  </p>

 </p>

</p>

<p>
 <p>아두이노의 아날로그와 디지털포트의 입출력을 결정하는 함수이다. 이 함수를 사용해서 지정해주지 않으면 아두이노에서는 사용하려는 포트가 정상적으로 동작하지 않는다.</p>

</p>

<p>
 <p>
  <p>
   pinMode(pin,&nbsp;mode)

   //&nbsp;pin&nbsp;:&nbsp;입력&nbsp;받을&nbsp;포트&nbsp;번호
   //&nbsp;mode&nbsp;:&nbsp;INPUT(입력),&nbsp;OUTPUT(출력)
   //&nbsp;mode&nbsp;는&nbsp;1(입력),&nbsp;0(출력)&nbsp;으로&nbsp;대체&nbsp;가능
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
   digitalWrite
  </p>

 </p>

</p>

<p>
 <p>digitalWrite는 디지털포트를 통해서 신호를 출력할때 사용한다.</p>

</p>

<p>
 <p>
  <p>
   digitalWrite(pin,&nbsp;value)
   &nbsp;
   //&nbsp;pin&nbsp;:&nbsp;출력할&nbsp;포트&nbsp;번호
   //&nbsp;value&nbsp;:&nbsp;HIGH(출력),&nbsp;LOW(출력안함)
   //&nbsp;value&nbsp;는&nbsp;1(출력),&nbsp;0(출력안함)&nbsp;으로&nbsp;대체&nbsp;가능
  </p>

 </p>

</p>

<p>
 <p>pinMode &amp; digitalWrite 예제</p>

</p>

<p>
 <p>
  <p>
   #define&nbsp;LED&nbsp;13&nbsp;//&nbsp;LED는&nbsp;디지털포트&nbsp;13번에&nbsp;연결되어있다
   &nbsp;
   void&nbsp;setup()&nbsp;{
   pinMode(LED,&nbsp;OUTPUT);&nbsp;//&nbsp;디지털포트&nbsp;출력&nbsp;설정
   }
   &nbsp;
   void&nbsp;loop()&nbsp;{
   &nbsp;&nbsp;digitalWrite(LED,&nbsp;HIGH);&nbsp;//&nbsp;LED&nbsp;ON
   &nbsp;&nbsp;delay(500);&nbsp;//&nbsp;지연
   &nbsp;&nbsp;digitalWrite(LED,&nbsp;LOW);&nbsp;//&nbsp;LED&nbsp;OFF
   &nbsp;&nbsp;delay(500);&nbsp;//&nbsp;지연
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
 <p>
  <p>
   digitalRead
  </p>

 </p>

</p>

<p>
 <p>digitalRead는 디지털 포트를 통해 신호를 입력받을 때 사용한다.</p>

</p>

<p>
 <p>
  <p>
   digitalRead(pin)
   &nbsp;
   //&nbsp;pin&nbsp;:&nbsp;입력받을&nbsp;포트&nbsp;번호
  </p>

 </p>

</p>

<p>
 <p>digitalRead 예제</p>

</p>

<p>
 <p>
  <p>
   #define&nbsp;LED&nbsp;13&nbsp;//&nbsp;LED는&nbsp;디지털포트&nbsp;13번에&nbsp;연결되어있다
   #define&nbsp;Button&nbsp;7&nbsp;//&nbsp;버튼은&nbsp;디지털포트&nbsp;7번에&nbsp;연결되어있다
   &nbsp;
   void&nbsp;setup()&nbsp;{
   &nbsp;&nbsp;pinMode(LED,&nbsp;OUTPUT);&nbsp;//&nbsp;디지털포트&nbsp;출력&nbsp;설정
   &nbsp;&nbsp;pinMode(Button,&nbsp;INPUT);&nbsp;//&nbsp;디지털포트&nbsp;입력&nbsp;설정
   }
   &nbsp;
   void&nbsp;loop()&nbsp;{
   &nbsp;&nbsp;int&nbsp;val&nbsp;=&nbsp;digitalRead(Button);&nbsp;//&nbsp;7번&nbsp;포트를&nbsp;통해서&nbsp;들어오는&nbsp;값&nbsp;수신
   &nbsp;&nbsp;digitalWrite(LED,&nbsp;val);&nbsp;//&nbsp;수신된&nbsp;값을&nbsp;토대로&nbsp;디지털&nbsp;값&nbsp;송출
   }
  </p>

 </p>

</p>
