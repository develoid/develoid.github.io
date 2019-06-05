---
layout: post
title: '아두이노 응용 - 조이스틱을 이용, 서보모터 위치/속도 제어하기'
author: '시류아'
categories: Arduino
tags:
- IoT-Board
- Arduino
- Programming
-
---


<script> location.href='https://cafe.naver.com/develoid/776072' ; </script>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMjAg%2FMDAxNDg0NzgyOTg2MDkz.IJ-OFvCuaIXCQj9o-w--akt7nO5HcO4wKTusjASd3nUg.2Xyty9sVYKMUKOMWdOwiiUPd20-sMyrvXpP9XVXyjCQg.JPEG.searphiel9%2Farduino_logo.jpg%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>
  <p>
   아두이노 응용
   조이스틱을 이용, 서보모터 위치/속도 제어하기
  </p>

 </p>

</p>

<p>
 <p>이번에는 약간 응용기로 조이스틱을 통해서 서보모터의 위치제어와 속도제어를 해보도록하자. 만약 조이스틱이 없다면 2개의 가변저항을 통해서 따라 해볼 수 있다. 그리고 아두이노에서 흔히 사용되는 일반적인 서보모터의 속도제어라고하면 "그게 가능해?" 하고 의문이 들겠지만, VarSpeedServo 란 라이브러리를 이용하면 서보모터 동작에 약간의 지연시간이 생기면서 속도 제어가 가능해진다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   라이브러리 설치
  </p>

 </p>

</p>

<p>
 <p>서보모터의 속도조절을 위해서는 VarSpeedServo 란 라이브러리가 필요로 한다. 아래의 링크에서 우측의 Download ZIP을 눌러서 다운로드 받은 후, 압축을 풀어 "C:\Program Files\arduino\libraries" 경로에 폴더 채로 집어넣어 라이브러리 항목에 추가하자</p>

</p>

<p>
 <a href="https://github.com/netlabtoolkit/VarSpeedServo">   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fdthumb.phinf.naver.net%2F%3Fsrc%3D%2522https%253A%252F%252Favatars2.githubusercontent.com%252Fu%252F4582476%253Fv%253D3%2526s%253D400%2522%26amp%3Btype%3Dff120%22&amp;type=cafe_wa740">   netlabtoolkit/VarSpeedServo VarSpeedServo - Arduino library for servos that extends the standard servo.h library with the ability to set speed, and wait for position to complete github.com    자세히보기 </a>
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
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMjc4%2FMDAxNDg0NzgzMjk4ODY3.nmj0giAOsHHCuxCHvvtf4yUS_UTDby_OFphJc2cHGwIg.Nv1d8RBBLtt5_9Xy3tAYEhXjMAKDRZy15imeFW55Nqog.PNG.searphiel9%2F3.png%22&amp;type=cafe_wa740">
  회로도
 </p>

</p>

<p>
 <p>실물 사진을 찍어놓은 것이 없어서 이번엔 회로도만 있다. 위를 참고해서 배선하자</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   조이스틱을 이용해서 서보모터 위치/속도 제어하기
  </p>

 </p>

</p>

<p>
 <p>조건 1 &gt; A0/A1 (A4/A5) 에 연결된 조이스틱에 입력된 값 수신 받는다.조건 2 &gt; 수신 받은 값을 토대로 서보모터의 위치값, 속도값으로 맞추어서 변환한다.조건 3 &gt; 상/하로 조이스틱을 움직 일 경우 서보모터의 속도를 조절한다.조건 4 &gt; 좌/우로 조이스틱을 움직 일 경우 서보모터의 위치를 조절한다.</p>

</p>

<p>
 <p>
  <p>
   #include&nbsp;&lt;VarSpeedServo.h&gt;&nbsp;
   &nbsp;
   VarSpeedServo&nbsp;myservo;
   &nbsp;
   int&nbsp;Servo_deg;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;서보&nbsp;위치
   int&nbsp;Servo_speed;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;서보&nbsp;속도
   &nbsp;
   void&nbsp;setup()&nbsp;{
   &nbsp;&nbsp;Serial.begin(9600);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;시리얼&nbsp;통신&nbsp;설정
   &nbsp;&nbsp;myservo.attach(6);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;서보&nbsp;PIN&nbsp;설정
   &nbsp;&nbsp;myservo.write(90,255,true);&nbsp;&nbsp;//&nbsp;서보&nbsp;위치&nbsp;초기화
   }
   &nbsp;
   void&nbsp;loop()&nbsp;{
   &nbsp;&nbsp;Servo_deg&nbsp;=&nbsp;analogRead(0);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;조이스틱&nbsp;좌우&nbsp;값&nbsp;읽어&nbsp;위치에&nbsp;저장
   &nbsp;&nbsp;Servo_speed&nbsp;=&nbsp;analogRead(1);&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;조이스틱&nbsp;상하&nbsp;값&nbsp;읽어&nbsp;속도에&nbsp;저장
   &nbsp;&nbsp;
   &nbsp;&nbsp;Servo_deg&nbsp;=&nbsp;map(Servo_deg,&nbsp;0,&nbsp;1023,&nbsp;0,&nbsp;180);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;좌우&nbsp;최대&amp;최소에&nbsp;맞추어&nbsp;변경
   &nbsp;&nbsp;Servo_speed&nbsp;=&nbsp;map(Servo_speed,&nbsp;0,&nbsp;1023,&nbsp;0,&nbsp;255);&nbsp;&nbsp;//&nbsp;상하&nbsp;최대&amp;최소에&nbsp;맞추어&nbsp;변경
   &nbsp;
   &nbsp;&nbsp;//시리얼로&nbsp;위치와&nbsp;속도&nbsp;값&nbsp;출력
   &nbsp;&nbsp;Serial.print("deg&nbsp;:&nbsp;");
   &nbsp;&nbsp;Serial.print(Servo_deg);
   &nbsp;&nbsp;Serial.print("\t&nbsp;speed&nbsp;:&nbsp;");
   &nbsp;&nbsp;Serial.println(Servo_speed);
   &nbsp;
   &nbsp;&nbsp;myservo.write(Servo_deg,&nbsp;Servo_speed,&nbsp;true);&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;서보&nbsp;위치&amp;속도&nbsp;제어
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
 <p>생각외로 라이브러리가 정말 재미있는 것도 많이 있다. 아두이노에서 흔히 쓰는 서보모터를 속도 제어 하는 것에 대해서 누가 생각했겠는가? 한 번 시간이 된다면 아두이노의 다양한 라이브러리를 찾아보길 바란다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>소스코드는 정답이 없다. 다양한 생각이 있듯 다양한 방법이 있으며, 이는 그 중 하나다.</p>

</p>

