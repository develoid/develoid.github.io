---
layout: post
title: '아두이노 응용 - 릴레이 제어'
author: '시류아'
categories: Arduino
tags:
- IoT-Board
- Arduino
- Programming
-
---


<script> location.href='https://cafe.naver.com/develoid/776076' ; </script>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMjg3%2FMDAxNDg0ODMwMjU0ODIz.N39JJngmYAdobFMDJpbMhYAiivbHGCPPPsK4ckjp6_sg.epHPb2F8f9SyAzwrneWG4jvXFEXTRmDCP3HWq46yd_sg.JPEG.searphiel9%2Farduino_logo.jpg%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>
  <p>
   아두이노 응용
   릴레이제어
  </p>

 </p>

</p>

<p>
 <p>아두이노에는 다양한 릴레이 쉴드가 있다. 그 중에서도 릴레이 쉴드를 기준으로 한 번 릴레이 제어를 해보도록 하자.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   순정 릴레이 쉴드
  </p>

 </p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMTg2%2FMDAxNDg0ODMwNTcxODI3.fYHFoX3EWGc3QgOvbfXF6nfliKXWXx7AWvc8QxWRVT8g.JwpV36rNwB2mtM4NWzbLPn1qbDkbK2xUcb2scBTwKe8g.PNG.searphiel9%2F1.png%22&amp;type=cafe_wa740">
  순정 릴레이 쉴드
 </p>

</p>

<p>
 <p>순정 릴레이 쉴드는 5V 릴레이가 총 4개 결합되어 있다. 릴레이의 크고 꺼짐을 확인 할 수 있도록 리셋스위치 아래 각 릴레이 별로 연결된 LED가 4EA 있다.</p>

</p>

<p>
 <p>
  <p>
   PIN 배치
  </p>

 </p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMzQg%2FMDAxNDg0ODMwNzkwOTM2.9Sh5iNknq04zvlvXcRjLf4dEgIdq1-CKL6fbYPTjBAkg.sC1urw89T9uc2yKs4dH3pV7X00iuqQDvCnjEuhOnog8g.PNG.searphiel9%2F4.PNG%22&amp;type=cafe_wa740">
  pin 배치
 </p>

</p>

<p>
 <p>D4에 HIGH 값을 출력하면 R1의 접점이 붙고, LOW 값을 넣으면 떨어진다. 나머지 릴레이 역시 동일하게 작동되며 사용하고자 하는 것에 맞추어 디지털 입력 제어를 하면 된다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   릴레이를 이용한 LED 제어
  </p>

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
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMjEx%2FMDAxNDg0ODMwOTkzMTYy.YI9Y7II4iUOGNfvx3MfnjznjKC-eRV2TVRI4Pm33TL0g.-dldip4ANWvJMe9SkVWbWFhtZOiQNE26Nh31ZcCyXWkg.PNG.searphiel9%2F2.png%22&amp;type=cafe_wa740">
  LED 제어 회로도
 </p>

</p>

<p>
 <p>아두이노 위에 바로 적층해서 사용해도 되며, 위의 회로도처럼 일일이 개별적으로 배선하여 사용해도 무관하다.</p>

</p>

<p>
 <p>
  <p>
   제어하기
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   void&nbsp;setup()&nbsp;{
   &nbsp;&nbsp;Serial.begin(9600);
   &nbsp;&nbsp;pinMode(12,&nbsp;OUTPUT);
   }
   &nbsp;
   void&nbsp;loop()&nbsp;{
   &nbsp;&nbsp;if&nbsp;(Serial.available()&nbsp;&gt;&nbsp;0)&nbsp;{
   &nbsp;&nbsp;&nbsp;&nbsp;char&nbsp;data&nbsp;=&nbsp;Serial.read();
   &nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;if(data&nbsp;==&nbsp;'a')&nbsp;digitalWrite(12,&nbsp;HIGH);
   &nbsp;&nbsp;&nbsp;&nbsp;if(data&nbsp;==&nbsp;'b')&nbsp;digitalWrite(12,&nbsp;LOW);
   &nbsp;&nbsp;}
   }
  </p>

 </p>

</p>

<p>
 <p>시리얼 모니터로 a 값을 전송하면 LED 1이 켜지고, LED 2가 꺼진다. 그리고 b 값을 전송하면 반대로 LED 1 이 꺼지고, LED 2에 불이 들어온다.</p>

</p>

<p>
 <p>* 이러한 형식을 응용해서 만들어져 있는 것이 실생활에 많이 찾아 볼 수 있다. 대표적으로 신호등이다. 타임릴레이를 사용해서 불이 끄고 켜지고 있는 형태이다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   릴레이를 이용한 DC모터 정역제어
  </p>

 </p>

</p>

<p>
 <p>이번에는 릴레이를 이용해서 DC모터를 정역제어해보자. 어떤 원리를 이용하는 이전 게시글 중 하나인 "DC모터 정역제어와 H-Bridge 회로"를 참조하길 바란다.</p>

</p>

<p>
 <a href="http://blog.naver.com/searphiel9/220915484692">   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fdthumb.phinf.naver.net%2F%3Fsrc%3D%2522http%253A%252F%252Fblogthumb2.naver.net%252FMjAxNzAxMTlfMjQ4%252FMDAxNDg0ODMwMDM3ODAz.Ogd8p58ni1rkeldo_DSmEZciYxJp_d7GL0PBPMmMkwog.jNqTV6cMOZ8Rr-3eo6NUrmeosZr7FlGrWesufjau0RAg.PNG.searphiel9%252F3.png%253Ftype%253Dw2%2522%26amp%3Btype%3Dff500_300%22&amp;type=cafe_wa740">   DC모터 정역제어와 H-Bridge 회로 DC모터 정역제어일반적으로 DC모터는 전원이 연결되면 한 쪽으로 회전한다. 소프트에어 적으로 모터의 ... blog.naver.com    자세히보기 </a>
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
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMTcz%2FMDAxNDg0ODMxMzA4MTYw.b_zJIilChw6KxSd7CVtmbRAUqtTc0eklgvOSDV-Mln0g.u8uUbc4xBsKJLHsq7TT8bxbcy7Prq0tKu2c_GLcUoDkg.PNG.searphiel9%2F3.png%22&amp;type=cafe_wa740">
  DC모터 정역제어 회로도
 </p>

</p>

<p>
 <p>릴레이를 이용해서 DC모터를 정역제어 하기 위해서는 두개 이상의 릴레이를 이용해야된다. 그래서 D12와 D8에 연결된 릴레이를 사용해서 구성해보았다. Relay의 NO에서는 외부 전원 +를, NC에는 외부전원 -를 연결하고, C접점에는 각각 모터의 +와 -를 연결하면 된다.</p>

</p>

<p>
 <p>
  <p>
   제어하기
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   void&nbsp;setup()&nbsp;{
   &nbsp;&nbsp;Serial.begin(9600);
   &nbsp;&nbsp;pinMode(12,&nbsp;OUTPUT);
   &nbsp;&nbsp;pinMode(8,&nbsp;OUTPUT);
   }
   &nbsp;
   void&nbsp;loop()&nbsp;{
   &nbsp;&nbsp;if&nbsp;(Serial.available()&nbsp;&gt;&nbsp;0)&nbsp;{
   &nbsp;&nbsp;&nbsp;&nbsp;char&nbsp;data&nbsp;=&nbsp;Serial.read();
   &nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;if(data&nbsp;==&nbsp;'a')&nbsp;{
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(12,&nbsp;HIGH);
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(8,&nbsp;LOW);
   &nbsp;&nbsp;&nbsp;&nbsp;}
   &nbsp;&nbsp;&nbsp;&nbsp;if(data&nbsp;==&nbsp;'b')&nbsp;{
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(12,&nbsp;LOW);
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(8,&nbsp;HIGH);
   &nbsp;&nbsp;&nbsp;&nbsp;}
   &nbsp;&nbsp;&nbsp;&nbsp;if(data&nbsp;==&nbsp;'c')&nbsp;{
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(12,&nbsp;LOW);
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(8,&nbsp;LOW);
   &nbsp;&nbsp;&nbsp;&nbsp;}
   }
  </p>

 </p>

</p>

<p>
 <p>모터의 정역제어를 위해서 두 릴레이가 서로 반전되게끔 HIGH 값과 LOW 값을 부여하면 된다. 그리고 모터를 멈추고 싶으면 둘 다 LOW 값을 주게되면 모터가 정지한다. 이러한 형식으로 모터의 정/역/정지 제어가 가능해진다. 이러한 제어 형식에 아날로그 또는 PWM을 이용해서 엔코더의 펄스 값을 받아서 복합제어 할 경우 서보모터나 스태핑모터처럼 위치 제어도 가능해진다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>소스코드에는 정답이 없다. 다양한 생각이 있듯 다양한 방법이 있으며, 그 중 하나일 뿐이다.</p>

</p>

