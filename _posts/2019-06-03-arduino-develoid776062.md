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

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMzEg%2FMDAxNDg0NzA0Njg4MzAz.VWtKvbqVQ_kKZEOPMnL-JVOtsOcVXNDRwFEVUQnoiEEg.OR6WkRiQ21_kcqV1_wE9f9oFZ0alrIDO_UNWf8TISf0g.JPEG.searphiel9%2Farduino_logo.jpg%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>
  <p>
   아두이노 기본
   Analog I/O 함수
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   analogRead
  </p>

 </p>

</p>

<p>
 <p>아놀로그 포트를 통해서 신호를 입력받을때 사용한다.</p>

</p>

<p>
 <p>
  <p>
   analogRead(pin)
   &nbsp;
   pin&nbsp;:&nbsp;입력받을&nbsp;포트&nbsp;번호
  </p>

 </p>

</p>

<p>
 <p>analogRead&nbsp;예제</p>

</p>

<p>
 <p>
  <p>
   #define&nbsp;analogPin&nbsp;A0&nbsp;//&nbsp;A0&nbsp;아날로그&nbsp;포트를&nbsp;통해서&nbsp;값을&nbsp;입력&nbsp;받을&nbsp;예정
   &nbsp;
   void&nbsp;setup()&nbsp;{
   &nbsp;&nbsp;Serial.begin(9600);
   }
   &nbsp;
   void&nbsp;loop()&nbsp;{
   &nbsp;&nbsp;int&nbsp;val&nbsp;=&nbsp;analogRead(analogPin);&nbsp;//&nbsp;A0번&nbsp;포트를&nbsp;통해서&nbsp;들어오는&nbsp;값&nbsp;수신
   &nbsp;&nbsp;Serial.println(val);&nbsp;//&nbsp;수신된&nbsp;값을&nbsp;토대로&nbsp;아날로그&nbsp;값&nbsp;송출
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
   analogWrite
  </p>

 </p>

</p>

<p>
 <p>아날로그 출력 또는 PWM 출력을 할 때 사용한다. 아두이노에서 포트 번호 앞에 ~ 표시가 적혀있는데 이 포트를 통해서 PWM 출력이 사용 할 수 있다.</p>

</p>

<p>
 <p>
  <p>
   analogWrite(pin,&nbsp;value)
   &nbsp;
   pin&nbsp;:&nbsp;출력할&nbsp;포트&nbsp;번호
   value&nbsp;:&nbsp;출력할&nbsp;값,&nbsp;0(계속&nbsp;꺼짐)&nbsp;~&nbsp;255(계속&nbsp;켜짐)
  </p>

 </p>

</p>

<p>
 <p>analogWrite&nbsp;예제</p>

</p>

<p>
 <p>
  <p>
   #define&nbsp;PWM&nbsp;6&nbsp;//
   &nbsp;
   void&nbsp;setup()&nbsp;{
   &nbsp;&nbsp;pinMode(LED,&nbsp;OUTPUT);&nbsp;//&nbsp;디지털포트&nbsp;출력&nbsp;설정
   }
   &nbsp;
   void&nbsp;loop()&nbsp;{
   &nbsp;&nbsp;analogWrite(PWM,&nbsp;1024);
   &nbsp;&nbsp;delay(1000);
   &nbsp;&nbsp;analogWrite(PWM,&nbsp;0);
   &nbsp;&nbsp;delay(1000);
   }
  </p>

 </p>

</p>

<p>
 <p></p>

</p>

