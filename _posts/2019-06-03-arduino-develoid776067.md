---
layout: post
title: '[커뮤니티] 아두이노 기초 - 서보모터 제어'
author: '시류아'
categories: Arduino
tags:
- IoT-Board
- Arduino
- Programming
-
---


<script> location.href='https://cafe.naver.com/develoid/776067' ; </script>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMTEz%2FMDAxNDg0NzQwODQ2MzI2.G7xCFFc6XmQmONhafY5AsGtgVhQHxBJvNMxwJzQWlz8g.G9wwxt6pNlHVjeFQ1i94MXF4P7Hl00INRnlV71sDdSgg.JPEG.searphiel9%2Farduino_logo.jpg%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>
  <p>
   아두이노 기초
   서보모터 제어
  </p>

 </p>

</p>

<p>
 <p>아두이노를 사용하다보면 서보모터를 사용하는 경우도 많고, 사용하는 방법 역시 정말 간단하고 쉽다. 한 번 서보모터 사용방법에 대해서 알아보자</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   아두이노에서 일반적으로 사용하는 모터 정리
  </p>

 </p>

</p>

<p>
 <p>▶ DC모터· 주변에서 흔히 쓰는 모터, 입력 전류 방향으로 회전 방향 제어가 가능하다.·&nbsp;상대적으로 고회전에 유리하다.·&nbsp;회전 움직임을 사용하는 RC카, 쿼드콥터 등 사용할 수 있는 범위가 매우 다양하다.·&nbsp;단 회전수 방향등을 제어하기 위해서는 별도의 드라이버 모듈이 필요로 하다.▶&nbsp;서보모터·&nbsp;보통 0~180 사이를 움직이며, 해당 회전 범위 안에서 위치를 사용자가 설정가능하다.·&nbsp;동작 범위가 제한적이지만 정확한 위치 제어가 가능하다.·&nbsp;RC카 핸들, 로봇의 관절 등 회전 각도 제어가 필요한 곳에 광범위하게 사용된다.▶&nbsp;스태핑모터·&nbsp;회전 방향과 속도 뿐만 아니라 회전각을 정밀 제어 할 수 있다.·&nbsp;DC모터와 서보모터의 장점을 합친 모터이지만 다소 제어가 위의 두 모터에 비해 복잡하다.·&nbsp;보통 스태핑모터 드라이버 모듈 또는 모터쉴드를 통해서 제어한다.·&nbsp;3D프린터에 많이 사용되고 있으며, 상대적으로 고회전이 필요하지 않으면서 정밀 제어 필요한 곳에 사용된다.▶&nbsp;서보모터와 스태핑모터 조금 더 알기</p>

</p>

<p>
 <a href="http://blog.naver.com/searphiel9/220914541459">   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fdthumb.phinf.naver.net%2F%3Fsrc%3D%2522http%253A%252F%252Fblogthumb2.naver.net%252FMjAxNzAxMThfMTQ2%252FMDAxNDg0NzQwMDU5MTM2.mCbyLSqP2LZrlI_e2Sex6wASQCpElwgygn6SkfCertkg.4IxeJYnYQVSb9qSbHFEn1dJ3m_JWJwTjYMOEjPVNqV8g.PNG.searphiel9%252F1.png%253Ftype%253Dw2%2522%26amp%3Btype%3Dff500_300%22&amp;type=cafe_wa740">   서보모터, 스태핑모터, PWM 정의 서보모터Servo의 뜻은 "추종한다" 또는 "따른다"이다. 즉 명령에 따라서 기계 등 여러 기계장비에서 정확... blog.naver.com    자세히보기 </a>
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
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMzcg%2FMDAxNDg0NzQxMTQxNTQ0.9GQ_zHY-89f8RLSALE_4tiE1BklHd9vAFCy8cDKUS40g.awJNWUlFMcoIP6qGbml4rDRGxjWYzAh815sDrJ8jpiMg.PNG.searphiel9%2F1.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMjI2%2FMDAxNDg0NzQxMTQxNTg2.Zr-SGVKqG8IejPYlCimfpfQruC0wJcrPBWY2E0KTpkAg.J2MKpVC2uNHtvqcMlXkScovXAwkXeqERAnugYoWTdFYg.PNG.searphiel9%2F2.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>PWR(5V) : 적색GND(0V) : 흑색 또는 갈색SIG : 황색서보모터가 약하거나 제대로 동작하지 않는다면 아두이노의 보드 출력보다 더 많은 전류를 요구하는 것이다. 이 경우 외부전원으로 파워를 별도 공급해주어야 한다.서보모터는 PWM으로 제어하며 아두이노에서의 PWM 출력이 가능한 포트는 우노 기준으로 3/5/6/9/10/11 이다. 이외의 아두이노 제품에서는 핀포트 옆에 ~ 표시를 확인하면 된다.* ~ 표시가 잇을 경우 PWM 출력 가능</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   서보모터 좌/우로 반복하기
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   #include&nbsp;&lt;Servo.h&gt;&nbsp;//&nbsp;서보&nbsp;제어&nbsp;함수&nbsp;불러오기
   &nbsp;
   Servo&nbsp;myservo;&nbsp;//&nbsp;서보&nbsp;함수&nbsp;클래스&nbsp;지정
   &nbsp;
   int&nbsp;pos&nbsp;=&nbsp;0;&nbsp;//&nbsp;위치&nbsp;좌표&nbsp;값
   &nbsp;
   void&nbsp;setup()&nbsp;
   {&nbsp;
   &nbsp;&nbsp;myservo.attach(6);&nbsp;//&nbsp;6번&nbsp;핀에&nbsp;연결된&nbsp;서보&nbsp;연결
   }&nbsp;
   &nbsp;
   void&nbsp;loop()&nbsp;
   {&nbsp;
   &nbsp;&nbsp;for(pos&nbsp;=&nbsp;0;&nbsp;pos&nbsp;&lt;=&nbsp;180;&nbsp;pos++)
   &nbsp;&nbsp;{
   &nbsp;&nbsp;&nbsp;&nbsp;myservo.write(pos);&nbsp;//&nbsp;서보&nbsp;값&nbsp;입력
   &nbsp;&nbsp;&nbsp;&nbsp;delay(15);
   &nbsp;&nbsp;}&nbsp;
   &nbsp;&nbsp;for(pos&nbsp;=&nbsp;180;&nbsp;pos&gt;=0;&nbsp;pos--)
   &nbsp;&nbsp;{
   &nbsp;&nbsp;&nbsp;&nbsp;myservo.write(pos);&nbsp;//&nbsp;서보&nbsp;값&nbsp;입력
   &nbsp;&nbsp;&nbsp;&nbsp;delay(15);
   &nbsp;&nbsp;}
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
   시리얼 통신으로 입력받은 값의 좌표로 모터 위치 변경하기
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   #include&nbsp;&lt;Servo.h&gt;&nbsp;//&nbsp;서보&nbsp;제어&nbsp;함수&nbsp;불러오기
   &nbsp;
   Servo&nbsp;myservo;&nbsp;//&nbsp;서보&nbsp;함수&nbsp;클래스&nbsp;지정
   &nbsp;
   int&nbsp;pos&nbsp;=&nbsp;0;&nbsp;//&nbsp;위치&nbsp;좌표&nbsp;값
   &nbsp;
   void&nbsp;setup()&nbsp;
   {&nbsp;
   &nbsp;&nbsp;Serial.begin(9600);
   &nbsp;&nbsp;myservo.attach(6);&nbsp;//&nbsp;6번&nbsp;핀에&nbsp;연결된&nbsp;서보&nbsp;연결
   }&nbsp;
   &nbsp;
   void&nbsp;loop()&nbsp;
   {&nbsp;
   &nbsp;&nbsp;while(Serial.available())&nbsp;{&nbsp;//&nbsp;시리얼&nbsp;값&nbsp;입력이&nbsp;있으면
   &nbsp;&nbsp;&nbsp;&nbsp;pos&nbsp;=&nbsp;Serial.read();&nbsp;//&nbsp;pos에&nbsp;입력&nbsp;값&nbsp;저장
   &nbsp;&nbsp;&nbsp;&nbsp;myservo.write(pos);&nbsp;//&nbsp;서보&nbsp;값&nbsp;입력
   &nbsp;&nbsp;&nbsp;&nbsp;delay(15);
   &nbsp;&nbsp;}
   }
  </p>

 </p>

</p>

<p>
 <p>단 이 코드로 제어시 서보모터의 동작범위인 0~180 사이의 값으로 시리얼 모니터에 입력해야 된다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>생각보다 아두이노에서의 서보모터 제어는 간단하지 않은가? 아두이노가 오픈하드웨어 프로젝트이고 많은 자료들이 오픈되어있다보니 그 만큼 손 쉽게 할 수 있도록 라이브러리가 많이 제공되어있어서 누구나 쉽게 제어 할 수 있다. 이를 바탕으로 다양한 것을 만들어보길 바란다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>소스코드에는 정답이 없다. 다양한 생각이 있듯 다양한 방법이 있고, 이 예제는 그 중 하나일 뿐이다.</p>

</p>
