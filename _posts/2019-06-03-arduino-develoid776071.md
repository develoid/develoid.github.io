---
layout: post
title: '[커뮤니티] 아두이노 기초 - 가변저항을 통한 서보모터 위치 제어'
author: '시류아'
categories: Arduino
tags:
- IoT-Board
- Arduino
- Programming
-
---


<script> location.href='https://cafe.naver.com/develoid/776071' ; </script>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMTc0%2FMDAxNDg0NzgyNTQ0OTA4.pCBozNJUH39Isgb3UHOf_3kbXgyuI9Ar6RSaYTLiXAMg.09fnJNWl7tq0NGZKhbL7nbdN66YLoVeTc7x0eitw8Fcg.JPEG.searphiel9%2Farduino_logo.jpg%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>
  <p>
   아두이노 기초
   가변저항을 통한 서보모터 위치 제어
  </p>

 </p>

</p>

<p>
 <p>이번에는 가변저항을 통해서 서보모터의 위치 값 제어를 해보자, 아날로그 값으로 들어오는 가변저항의 값을 서보모터의 위치 값으로 변환하여, 서보모터에 입력하여 제어를 하면 된다.</p>

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
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfOTAg%2FMDAxNDg0NzgyNjY3NTEy.DcUqRAwbd6NybVWjMTlxVofUczwtZHOKJe2HXn5ZrlMg.DP0SIacnPzLj2xJAoAW4KCS6fJoW8OdjtmJ-O3vFfyQg.PNG.searphiel9%2F1.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMjAz%2FMDAxNDg0NzgyNjY3NTM3.V22OHwcm4L8b3utSRbq2G_MYiyjAz7IlMolGVcbLNjsg.wm_bJCQsxNYeKg_cfMqyp8DgI0yclkIlkw2J2MFxh0Eg.PNG.searphiel9%2F2.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>아날로그 I/O에 가변저항을 연결하고 디지털 PWM 출력 쪽에는 서보모터를 연결하여 간단하게 구성 할 수 있다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   가변저항의 값을 이용해 서보모터 위치 제어하기
  </p>

 </p>

</p>

<p>
 <p>조건 1 &gt; A5에 연결된 가변저항에 입력되는 값을 수신 받는다.조건 2 &gt; A5에서 수신된 값을 서보모터 위치 값으로 변환한다.조건 3 &gt; 변환한 값을 토대로 서보모터의 위치제어를 실시한다.</p>

</p>

<p>
 <p>
  <p>
   #include&nbsp;&lt;Servo.h&gt;
   &nbsp;
   Servo&nbsp;myservo;
   &nbsp;
   int&nbsp;val;&nbsp;//&nbsp;아날로그&nbsp;값
   &nbsp;
   void&nbsp;setup()
   {
   &nbsp;&nbsp;myservo.attach(6);
   }
   &nbsp;
   void&nbsp;loop()&nbsp;
   {&nbsp;
   &nbsp;&nbsp;val&nbsp;=&nbsp;analogRead(0);&nbsp;//&nbsp;아날로그&nbsp;값&nbsp;저장
   &nbsp;&nbsp;val&nbsp;=&nbsp;map(val,&nbsp;0,&nbsp;1023,&nbsp;0,&nbsp;180);&nbsp;//&nbsp;0~1023사이의&nbsp;아날로그&nbsp;값을&nbsp;0~180&nbsp;사이의&nbsp;값으로&nbsp;변환
   &nbsp;&nbsp;myservo.write(val);&nbsp;//&nbsp;서보모터&nbsp;입력
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
 <p>소스코드에 정답은 없다. 다양한 생각이 있듯 다양한 방법이 있으며, 이는 그 중 하나일 뿐이다.</p>

</p>
