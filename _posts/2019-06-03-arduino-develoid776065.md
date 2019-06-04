---
layout: post
title: '아두이노 기초 - LED를 이용한 기초 TIP'
author: '시류아'
categories: Arduino
tags:
- IoT-Board
- Arduino
- Programming
-
---


<script> location.href='https://cafe.naver.com/develoid/776065' ; </script>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMTU4%2FMDAxNDg0NzE3NzI4NjM3.452lguoZWrTR-7NWiEaG_sPwvdEx3EXyh6SvbuiNH6Yg.hx0szRLNPfpXIYPSNtQCR3szSrliA-qO7DW11tCtSC0g.JPEG.searphiel9%2Farduino_logo.jpg%22&amp;type=cafe_wa740">
 </p>
</p>
<p>
 <p>
  <p>
   아두이노 기초
   <b>LED를 이용한 기초 TIP
  </p>
 </p>
</p>
<p>
 <p>이번에는 LED를 이용해서 아두이노의 정말 순수한 기초에 대해서 한 번 연습해보도록하자. 일단 먼저 회로도를 보고 따라서 구성해주길 바란다.</p>
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
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMjI3%2FMDAxNDg0NzE3ODEzOTYx.mZkolc3xcFAHg79gQiswOCYc3XOqSqYrJnKl4Aq66kwg.ENG84QTVomFbr0N4Rod15TFOdwNkUa1Y8a3V5fuukcAg.PNG.searphiel9%2F1.png%22&amp;type=cafe_wa740">
 </p>
</p>
<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMjYy%2FMDAxNDg0NzE3ODEzOTg0.oVMR7xk7edctGuN-m8-zAaveurZByJrMoUiVnCa75W4g.GAy5iGun-HtQQm-jObxif8BlPWOqC8jg2FabSt-B27wg.PNG.searphiel9%2F2.png%22&amp;type=cafe_wa740">
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
   버튼 누르고 있으면 LED 켜기
  </p>
 </p>
</p>
<p>
 <p>조건 1 &gt; 버튼 1을 누르고 있으면 6번 PIN의 LED가 켜진다.<b>조건 2 &gt; 버튼 2를 누르고 있으면 7번 PIN의 LED가 켜진다.</p>
</p>
<p>
 <p>
  <p>
   //&nbsp;변수&nbsp;정의
   <b>#define&nbsp;BUTTON1&nbsp;2&nbsp;//&nbsp;BUTTON1은&nbsp;2번&nbsp;PIN
   <b>#define&nbsp;BUTTON2&nbsp;3&nbsp;//&nbsp;BUTTON2는&nbsp;3번&nbsp;PIN
   <b>
   <b>int&nbsp;LED[4]&nbsp;=&nbsp;{6,7,8,9};&nbsp;//&nbsp;LED1~4는&nbsp;6번&nbsp;핀부터&nbsp;9번&nbsp;핀까지&nbsp;순서대로
   <b>int&nbsp;val1&nbsp;=&nbsp;0;&nbsp;//&nbsp;디지털&nbsp;값&nbsp;저장&nbsp;1
   <b>int&nbsp;val2&nbsp;=&nbsp;0;&nbsp;//&nbsp;디지털&nbsp;값&nbsp;저장&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <b>
   <b>//&nbsp;설정
   <b>void&nbsp;setup()&nbsp;{
   <b>&nbsp;&nbsp;Serial.begin(9600);&nbsp;//&nbsp;PC로&nbsp;확인을&nbsp;위한&nbsp;시리얼&nbsp;통신&nbsp;&nbsp;
   <b>&nbsp;&nbsp;pinMode(BUTTON1,&nbsp;INPUT);&nbsp;//&nbsp;버튼1은&nbsp;INPUT으로&nbsp;&nbsp;
   <b>&nbsp;&nbsp;pinMode(BUTTON2,&nbsp;INPUT);&nbsp;//&nbsp;버튼2는&nbsp;INPUT으로&nbsp;&nbsp;
   <b>&nbsp;&nbsp;for(char&nbsp;i=0;i&lt;4;i++)&nbsp;pinMode(LED[i],&nbsp;OUTPUT);&nbsp;//&nbsp;LED는&nbsp;핀&nbsp;6번부터&nbsp;9번까지&nbsp;순서대로&nbsp;OUTPUT&nbsp;&nbsp;
   <b>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <b>&nbsp;
   <b>void&nbsp;loop()&nbsp;{&nbsp;&nbsp;//&nbsp;디지털&nbsp;값&nbsp;수신&nbsp;&nbsp;
   <b>&nbsp;&nbsp;val1&nbsp;=&nbsp;digitalRead(BUTTON1);
   <b>&nbsp;&nbsp;val2&nbsp;=&nbsp;digitalRead(BUTTON2);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <b>&nbsp;&nbsp;if(val1&nbsp;==&nbsp;LOW)&nbsp;{&nbsp;//&nbsp;만약&nbsp;1번&nbsp;버튼이&nbsp;눌러졌다면
   <b>&nbsp;&nbsp;&nbsp;&nbsp;Serial.println("BUTTON1");&nbsp;//&nbsp;PC로&nbsp;버튼&nbsp;1&nbsp;출력
   <b>&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(LED[0],&nbsp;HIGH);&nbsp;//&nbsp;LED&nbsp;1번&nbsp;켜기
   <b>&nbsp;&nbsp;}else&nbsp;digitalWrite(LED[0],&nbsp;LOW);&nbsp;//&nbsp;눌러지지&nbsp;않을&nbsp;경우&nbsp;LED&nbsp;1번&nbsp;끄기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <b>&nbsp;&nbsp;if(val2&nbsp;==&nbsp;LOW)&nbsp;{&nbsp;//&nbsp;만약&nbsp;2번&nbsp;버튼이&nbsp;눌러졌다면
   <b>&nbsp;&nbsp;&nbsp;&nbsp;Serial.println("BUTTON2");&nbsp;//&nbsp;PC로&nbsp;버튼&nbsp;2&nbsp;출력
   <b>&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(LED[1],&nbsp;HIGH);&nbsp;//&nbsp;LED&nbsp;2번&nbsp;켜기
   <b>&nbsp;&nbsp;}else&nbsp;digitalWrite(LED[1],&nbsp;LOW);&nbsp;//&nbsp;눌러지지&nbsp;않을&nbsp;경우&nbsp;LED&nbsp;2번&nbsp;끄기
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
   버튼 누르고 있으면 1초간 LED 켜기
  </p>
 </p>
</p>
<p>
 <p>조건 1 &gt; 버튼 1을 누르고 있으면 6번 PIN의 LED가 1초간 켜진다.<b>조건 2 &gt; 버튼 2를 누르고 있으면 7번 PIN의 LED가 1초간 켜진다.</p>
</p>
<p>
 <p>
  <p>
   void&nbsp;loop()&nbsp;{
   <b>&nbsp;&nbsp;//&nbsp;디지털&nbsp;값&nbsp;수신
   <b>&nbsp;&nbsp;val1&nbsp;=&nbsp;digitalRead(BUTTON1);
   <b>&nbsp;&nbsp;val2&nbsp;=&nbsp;digitalRead(BUTTON2);
   <b>&nbsp;
   <b>&nbsp;&nbsp;if(val1&nbsp;==&nbsp;LOW)&nbsp;{&nbsp;//&nbsp;만약&nbsp;1번&nbsp;버튼이&nbsp;눌러졌다면
   <b>&nbsp;&nbsp;&nbsp;&nbsp;Serial.println("BUTTON1");&nbsp;//&nbsp;PC로&nbsp;버튼&nbsp;1&nbsp;출력
   <b>&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(LED[0],&nbsp;HIGH);&nbsp;//&nbsp;LED&nbsp;1번&nbsp;켜기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;delay(1000);&nbsp;//&nbsp;지연&nbsp;1초
   <b>&nbsp;&nbsp;}else&nbsp;digitalWrite(LED[0],&nbsp;LOW);&nbsp;//&nbsp;눌러지지&nbsp;않을&nbsp;경우&nbsp;LED&nbsp;1번&nbsp;끄기
   <b>&nbsp;
   <b>&nbsp;&nbsp;if(val2&nbsp;==&nbsp;LOW)&nbsp;{&nbsp;//&nbsp;만약&nbsp;2번&nbsp;버튼이&nbsp;눌러졌다면
   <b>&nbsp;&nbsp;&nbsp;&nbsp;Serial.println("BUTTON2");&nbsp;//&nbsp;PC로&nbsp;버튼&nbsp;2&nbsp;출력
   <b>&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(LED[1],&nbsp;HIGH);&nbsp;//&nbsp;LED&nbsp;2번&nbsp;켜기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;delay(1000);&nbsp;//&nbsp;지연&nbsp;1초
   <b>&nbsp;&nbsp;}else&nbsp;digitalWrite(LED[1],&nbsp;LOW);&nbsp;//&nbsp;눌러지지&nbsp;않을&nbsp;경우&nbsp;LED&nbsp;2번&nbsp;끄기
   <b>}
  </p>
 </p>
</p>
<p>
 <p>버튼&nbsp;누르고&nbsp;있으면&nbsp;LED&nbsp;켜기의 코드에서&nbsp;delay(1000) 을 추가하는 것으로 끝난다. 이 이외에도 millis()를 이용하는 방법도 있고 for문 또는 while문을 통한 카운트 딜레이 방법도 있다.</p>
</p>
<p>
 <p>
  <p></p>
 </p>
</p>
<p>
 <p>
  <p>
   버튼 동시에 눌러도 한 쪽 불만 켜지기
  </p>
 </p>
</p>
<p>
 <p>조건 1 &gt; 예제 1과 똑같이 버튼을 누르면 LED가 켜져야 한다.<b>조건 2 &gt; 버튼 두 개를 동시에 눌렀을 경우 먼저 누른 쪽만 켜지고, 아닌 쪽은 불이 켜지지 않아야 한다.</p>
</p>
<p>
 <p>
  <p>
   int&nbsp;limit&nbsp;=&nbsp;0;&nbsp;//&nbsp;추가&nbsp;버튼&nbsp;입력&nbsp;제한
   <b>
   <b>...
   <b>
   <b>void&nbsp;loop()&nbsp;{
   <b>&nbsp;&nbsp;//&nbsp;디지털&nbsp;값&nbsp;수신
   <b>&nbsp;&nbsp;val1&nbsp;=&nbsp;digitalRead(BUTTON1);
   <b>&nbsp;&nbsp;val2&nbsp;=&nbsp;digitalRead(BUTTON2);
   <b>&nbsp;
   <b>&nbsp;&nbsp;//&nbsp;만약&nbsp;1번&nbsp;버튼이&nbsp;눌러졌고,&nbsp;리미트가&nbsp;0이라면
   <b>&nbsp;&nbsp;if(val1&nbsp;==&nbsp;HIGH&nbsp;&amp;&amp;&nbsp;limit&nbsp;==&nbsp;0)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;Serial.println("BUTTON1");&nbsp;//&nbsp;PC로&nbsp;버튼&nbsp;1&nbsp;출력
   <b>&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(LED[0],&nbsp;HIGH);&nbsp;//&nbsp;LED&nbsp;1번&nbsp;켜기
   <b>&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;else&nbsp;if(val2&nbsp;==&nbsp;HIGH)&nbsp;{&nbsp;//&nbsp;만약&nbsp;2번&nbsp;버튼이&nbsp;눌러졌다면
   <b>&nbsp;&nbsp;&nbsp;&nbsp;Serial.println("BUTTON2");&nbsp;//&nbsp;PC로&nbsp;버튼&nbsp;2&nbsp;출력
   <b>&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(LED[1],&nbsp;HIGH);&nbsp;//&nbsp;LED&nbsp;2번&nbsp;켜기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;limit&nbsp;=&nbsp;1;&nbsp;//&nbsp;리미트를&nbsp;1로&nbsp;변경,&nbsp;1번&nbsp;버튼&nbsp;방지
   <b>&nbsp;&nbsp;}else{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;눌러지지&nbsp;않을&nbsp;경우&nbsp;LED&nbsp;0번과&nbsp;2번&nbsp;끄기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(LED[0],&nbsp;LOW);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(LED[1],&nbsp;LOW);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;limit&nbsp;=&nbsp;0;&nbsp;//&nbsp;리미트를&nbsp;0으로&nbsp;변경,&nbsp;초기화
   <b>&nbsp;&nbsp;}
   <b>}
  </p>
 </p>
</p>
<p>
 <p>단순하게 else if 구문으로 변경하면 될 것이라 생각되는 경우가 있다. 실제로 단순히 else if 변경 하는 것 만으로도 동시 입력을 막을 수 있다. 하지만 그 경우 첫 번째 버튼 입력을 막을 수 없다는 단점이 있다. 이를 보안하기 위해서 임의 변수를 통해서 값이 없을 경우 1번 버튼이 작동되게 하며, 다른 버튼이 눌러졌을 경우 값을 집어넣어 작동되지 않게 막아야 한다.</p>
</p>
<p>
 <p>
  <p></p>
 </p>
</p>
<p>
 <p>
  <p>
   LED 파도타기
  </p>
 </p>
</p>
<p>
 <p>조건 1 &gt; 처음 시작했을 때 왼쪽에서 오른쪽으로 LED가 파도를 탄다.<b>조건 2 &gt; 2번 버튼을 누르면 방향을 바꾸어 반대로 오른쪽에서 왼쪽으로 LED가 파도를 탄다.<b>조건 3 &gt; 1번 버튼을 누르면 다시 방향을 바꾸어 정상적으로 왼쪽에서 오른쪽으로 LED가 파도를 탄다.</p>
</p>
<p>
 <p>
  <p>
   int&nbsp;limit&nbsp;=&nbsp;0;&nbsp;//&nbsp;추가&nbsp;버튼&nbsp;입력&nbsp;제한
   <b>int&nbsp;way&nbsp;=&nbsp;0;&nbsp;//&nbsp;파도타기&nbsp;방향
   <b>int&nbsp;way_LED&nbsp;=&nbsp;0;&nbsp;//&nbsp;LED&nbsp;지정
   <b>&nbsp;
   <b>...
   <b>&nbsp;
   <b>void&nbsp;loop()&nbsp;{
   <b>&nbsp;&nbsp;//&nbsp;디지털&nbsp;값&nbsp;수신
   <b>&nbsp;&nbsp;val1&nbsp;=&nbsp;digitalRead(BUTTON1);
   <b>&nbsp;&nbsp;val2&nbsp;=&nbsp;digitalRead(BUTTON2);
   <b>&nbsp;
   <b>&nbsp;&nbsp;//&nbsp;파도타기&nbsp;방향&nbsp;지정
   <b>&nbsp;&nbsp;if(val1&nbsp;==&nbsp;HIGH&nbsp;&amp;&amp;&nbsp;limit&nbsp;==&nbsp;0)&nbsp;way&nbsp;=&nbsp;0;
   <b>&nbsp;&nbsp;else&nbsp;if(val2&nbsp;==&nbsp;HIGH)&nbsp;way&nbsp;=&nbsp;1,&nbsp;limit&nbsp;=&nbsp;1;
   <b>&nbsp;&nbsp;else&nbsp;limit&nbsp;=&nbsp;0;
   <b>&nbsp;
   <b>&nbsp;&nbsp;//&nbsp;LED&nbsp;켜기
   <b>&nbsp;&nbsp;digitalWrite(LED[way_LED],&nbsp;HIGH);&nbsp;//&nbsp;way_LED&nbsp;번의&nbsp;LED를&nbsp;켜라
   <b>&nbsp;&nbsp;if(way&nbsp;==&nbsp;0){&nbsp;//&nbsp;way가&nbsp;0일&nbsp;경우
   <b>&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(LED[way_LED-1],&nbsp;LOW);&nbsp;//&nbsp;LED보다&nbsp;낮은&nbsp;번호의&nbsp;LED는&nbsp;꺼라
   <b>&nbsp;&nbsp;&nbsp;&nbsp;way_LED++;&nbsp;//&nbsp;LED의&nbsp;위치가&nbsp;1&nbsp;증가하라
   <b>&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;else&nbsp;if(way&nbsp;==&nbsp;1){&nbsp;//&nbsp;way가&nbsp;1일&nbsp;경우
   <b>&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(LED[way_LED+1],&nbsp;LOW);&nbsp;//&nbsp;LED보다&nbsp;높은&nbsp;번호의&nbsp;LED는&nbsp;꺼라
   <b>&nbsp;&nbsp;&nbsp;&nbsp;way_LED--;&nbsp;//&nbsp;LED의&nbsp;위치가&nbsp;1&nbsp;감소하라
   <b>&nbsp;&nbsp;}
   <b>&nbsp;
   <b>&nbsp;&nbsp;if(way_LED&nbsp;&gt;&nbsp;4)&nbsp;way_LED&nbsp;=&nbsp;0;&nbsp;//&nbsp;4보다&nbsp;커지면&nbsp;0으로&nbsp;돌아가라
   <b>&nbsp;&nbsp;if(way_LED&nbsp;&lt;&nbsp;-1)&nbsp;way_LED&nbsp;=&nbsp;3;&nbsp;//&nbsp;3보다&nbsp;커지면&nbsp;1으로&nbsp;돌아가라
   <b>&nbsp;
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
   파도타기 응용
  </p>
 </p>
</p>
<p>
 <p>조건 1 &gt; 파도타기 예제의 조건이 충족되어야 한다.<b>조건 2 &gt; 양 끝의 마지막 LED에 갔을 때 LED의 파도타기 방향을 반대로 다시 돌아가게 되어야 한다.</p>
</p>
<p>
 <p>
  <p>
   if(way_LED&nbsp;&gt;&nbsp;4)&nbsp;way_LED&nbsp;=&nbsp;0;&nbsp;//&nbsp;4보다&nbsp;커지면&nbsp;0으로&nbsp;돌아가라
   <b>if(way_LED&nbsp;&lt;&nbsp;-1)&nbsp;way_LED&nbsp;=&nbsp;3;&nbsp;//&nbsp;3보다&nbsp;커지면&nbsp;1으로&nbsp;돌아가라
   <b>&nbsp;
   <b>//&nbsp;↓&nbsp;위의&nbsp;코드를&nbsp;아래의&nbsp;코드처럼&nbsp;변경하면&nbsp;끝난다.&nbsp;↓&nbsp;//
   <b>&nbsp;
   <b>if(way_LED&nbsp;&gt;&nbsp;4)&nbsp;way&nbsp;=&nbsp;1;&nbsp;//&nbsp;4보다&nbsp;커지면&nbsp;방향&nbsp;전환
   <b>if(way_LED&nbsp;&lt;&nbsp;-1)&nbsp;way&nbsp;=&nbsp;0;&nbsp;//&nbsp;-1보다&nbsp;작아지면&nbsp;방향&nbsp;전환
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
   홀짝 LED 깜박이기
  </p>
 </p>
</p>
<p>
 <p>조건 1 &gt; 아두이노에서 특정 값이 계속해서 증가한다.<b>조건 2 &gt; 특정 값이 홀수 일때는 6번 LED가 켜지고, 짝수 일때는 반대로 꺼져야 한다.<b>조건 3 &gt; 특정 갑싱 짝수 일때는 7번 LED가 켜지고, 홀수 일때는 반대로 꺼져야 한다.</p>
</p>
<p>
 <p>
  <p>
   int&nbsp;i&nbsp;=&nbsp;0;
   <b>while(i)&nbsp;{
   <b>&nbsp;&nbsp;if(i%2&nbsp;==&nbsp;0)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(LED[0],&nbsp;HIGH);&nbsp;//&nbsp;LED&nbsp;1번&nbsp;켜기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(LED[1],&nbsp;LOW);&nbsp;//&nbsp;LED&nbsp;2번&nbsp;끄기
   <b>&nbsp;&nbsp;}&nbsp;else&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(LED[0],&nbsp;LOW);&nbsp;//&nbsp;LED&nbsp;1번&nbsp;끄기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(LED[1],&nbsp;HIGH);&nbsp;//&nbsp;LED&nbsp;2번&nbsp;켜기
   <b>&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;Serial.println(i);&nbsp;//&nbsp;확인을&nbsp;위한&nbsp;시리얼&nbsp;출력
   <b>&nbsp;&nbsp;delay(1000);&nbsp;//&nbsp;확인을&nbsp;위한&nbsp;시간&nbsp;지연
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
 <p>소스코드에는 정답이 없다. 다양한 생각이 있듯 다양한 방법이 있다. 이 예제들은 그 중 하나일 뿐이다.</p>
</p>
