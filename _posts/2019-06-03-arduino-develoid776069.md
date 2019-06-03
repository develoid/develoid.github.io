---
layout: post
title: '아두이노 응용 - Adafruit사 모터 쉴드 이용해 모터 제어하기'
author: '시류아'
categories: Arduino
tags:
- IoT-Board
- Arduino
- Programming
-
---


<script> location.href='https://cafe.naver.com/develoid/776069' ; </script>


















						<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfNTIg%2FMDAxNDg0NzQzNTU0MTE1.QSKfXXDUAchv4CUV5r-KfxIBwRDd_bp1C3_2WMpbh2cg.JqGP_gaAmR_7yl-aTHjgTQcDSQ6tt-ZWAJZ1G3RHEZcg.JPEG.searphiel9%2Farduino_logo.jpg%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <div>
   아두이노 응용
   <b>Adafruit사 모터 쉴드 이용해 모터 제어하기
  </div>
 </div>
</div>
<div>
 <p>확실히 오픈하드웨어의 장점은 거의 모든 것이 공개되어 있다보니 서드파티 제품이 많이 나오는 것도 장점 중의 장점인 것 같다고 생각한다. 이번에는 그 중에서도 모터 쉴드 서드파티 제품중에서도 Adafruit사 제품을 통해 모터 제어해보도록하자</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   Adafruit사 모터쉴드
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMjgz%2FMDAxNDg0NzQzNjM2NDMz.KtSKEEuseTDFYfmjgyXsN4EstbCDWGd65MPxnvz7WHMg.jcxVSBk6I5L9UhCRRKKi223o-49SGFVYJoo0RvhkpUEg.PNG.searphiel9%2F1.png%22&amp;type=cafe_wa740">
  <span>Adafruit 사 모터쉴드</span>
 </div>
</div>
<div>
 <p>순정 모터 쉴드에 비해서 많은 모터를 제어 할 수 있으며, 2개의 5V 서보모터, 4개의 DC모터, 2개의 스태핑모터를 제어 할 수 있다. 필요에 따라서는 외부 전원을 연결하여 사용 할 수 있으며, 이 쉴드를 2층으로 적층하게 될 경우 최대 4개의 스태핑 모터까지 제어가 가능하다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   라이브러리 설치
  </div>
 </div>
</div>
<div>
 <p><span>순정 모터 쉴드 같은 경우 IDE 안에 라이브러리가 내장되어있지만, Adafruit 사의 모터 쉴드 같은 경우 IDE안에 라이브러리가 없기 때문에 별도적으로 추가하여 사용해야 된다. 아래의 링크에서 우측 Download ZIP을 눌러 다운로드 받은 후 압축을 풀어서 "C:\Program Files\Arduino\Libraries"폴더에 폴더 채 추가해주면 된다.</span></p>
</div>
<div>
 <a href="https://github.com/adafruit/Adafruit_Motor_Shield_V2_Library"> <span> <span> <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fdthumb.phinf.naver.net%2F%3Fsrc%3D%2522https%253A%252F%252Favatars3.githubusercontent.com%252Fu%252F181069%253Fv%253D3%2526s%253D400%2522%26amp%3Btype%3Dff120%22&amp;type=cafe_wa740"> </span> <span> <span>adafruit/Adafruit_Motor_Shield_V2_Library</span> <span>Adafruit_Motor_Shield_V2_Library - v2!</span> <span>github.com</span> </span> <span></span> </span> <span>자세히보기</span> </a>
</div>
<div>
 <p>* 라이브러리 설치 하지 않고 할 수 있지만, 상대적으로 불편하기 때문에 사용하는 것을 권장한다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   PIN 배치도
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfNTMg%2FMDAxNDg0NzQ0MjYzOTc3.KzoMyIYDeFyBRCznxwACPdmgikshU2ydWdu1swp6UZQg.gOsjKDS-JBGerNzShf6fz1e_XixoWls-tH8kw2WPKzQg.PNG.searphiel9%2F2.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p>쉴드를 적층하지 않고, 점프를 하여 사용 할 경우 PIN 배치도를 참조하여 배선하면 된다. 개인적으로는 점프하는 것보다는 적층하는 것을 추천하는 쉴드 중 하나이다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   DC모터 가감속 제어(라이브러리 포함 기본 예제)
  </div>
 </div>
</div>
<div>
 <div>
  <div>
   #include&nbsp;&lt;Wire.h&gt;
   <b>#include&nbsp;&lt;Adafruit_MotorShield.h&gt;
   <b>#include&nbsp;"utility/Adafruit_MS_PWMServoDriver.h"
   <b>&nbsp;
   <b>Adafruit_MotorShield&nbsp;AFMS&nbsp;=&nbsp;Adafruit_MotorShield();&nbsp;
   <b>Adafruit_DCMotor&nbsp;*myMotor&nbsp;=&nbsp;AFMS.getMotor(1);
   <b>&nbsp;
   <b>void&nbsp;setup()&nbsp;{
   <b>&nbsp;&nbsp;Serial.begin(9600);&nbsp;
   <b>&nbsp;&nbsp;AFMS.begin();&nbsp;
   <b>&nbsp;&nbsp;myMotor-&gt;setSpeed(150);
   <b>&nbsp;&nbsp;myMotor-&gt;run(FORWARD);
   <b>&nbsp;&nbsp;myMotor-&gt;run(RELEASE);
   <b>}
   <b>&nbsp;
   <b>void&nbsp;loop()&nbsp;{
   <b>&nbsp;&nbsp;uint8_t&nbsp;i;
   <b>&nbsp;&nbsp;Serial.print("tick");
   <b>&nbsp;&nbsp;myMotor-&gt;run(FORWARD);
   <b>&nbsp;&nbsp;for&nbsp;(i=0;&nbsp;i&lt;255;&nbsp;i++)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;myMotor-&gt;setSpeed(i);&nbsp;&nbsp;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;delay(10);
   <b>&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;for&nbsp;(i=255;&nbsp;i!=0;&nbsp;i--)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;myMotor-&gt;setSpeed(i);&nbsp;&nbsp;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;delay(10);
   <b>&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;Serial.print("tock");
   <b>&nbsp;&nbsp;myMotor-&gt;run(BACKWARD);
   <b>&nbsp;&nbsp;for&nbsp;(i=0;&nbsp;i&lt;255;&nbsp;i++)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;myMotor-&gt;setSpeed(i);&nbsp;&nbsp;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;delay(10);
   <b>&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;for&nbsp;(i=255;&nbsp;i!=0;&nbsp;i--)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;myMotor-&gt;setSpeed(i);&nbsp;&nbsp;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;delay(10);
   <b>&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;Serial.print("tech");
   <b>&nbsp;&nbsp;myMotor-&gt;run(RELEASE);
   <b>&nbsp;&nbsp;delay(1000);
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
   스태핑모터 위치 제어(라이브러리 포함 기본 예제)
  </div>
 </div>
</div>
<div>
 <div>
  <div>
   #include&nbsp;&lt;Wire.h&gt;
   <b>#include&nbsp;&lt;Adafruit_MotorShield.h&gt;
   <b>#include&nbsp;"utility/Adafruit_MS_PWMServoDriver.h"
   <b>&nbsp;
   <b>Adafruit_MotorShield&nbsp;AFMS&nbsp;=&nbsp;Adafruit_MotorShield();&nbsp;
   <b>Adafruit_StepperMotor&nbsp;*myMotor&nbsp;=&nbsp;AFMS.getStepper(200,&nbsp;2);
   <b>&nbsp;
   <b>&nbsp;
   <b>void&nbsp;setup()&nbsp;{
   <b>&nbsp;&nbsp;Serial.begin(9600);
   <b>&nbsp;&nbsp;Serial.println("Stepper&nbsp;test!");
   <b>&nbsp;
   <b>&nbsp;&nbsp;AFMS.begin();
   <b>&nbsp;&nbsp;myMotor-&gt;setSpeed(10);&nbsp;&nbsp;//&nbsp;10&nbsp;rpm&nbsp;&nbsp;&nbsp;
   <b>}
   <b>&nbsp;
   <b>void&nbsp;loop()&nbsp;{
   <b>&nbsp;&nbsp;Serial.println("Single&nbsp;coil&nbsp;steps");
   <b>&nbsp;&nbsp;myMotor-&gt;step(100,&nbsp;FORWARD,&nbsp;SINGLE);&nbsp;
   <b>&nbsp;&nbsp;myMotor-&gt;step(100,&nbsp;BACKWARD,&nbsp;SINGLE);&nbsp;
   <b>&nbsp;
   <b>&nbsp;&nbsp;Serial.println("Double&nbsp;coil&nbsp;steps");
   <b>&nbsp;&nbsp;myMotor-&gt;step(100,&nbsp;FORWARD,&nbsp;DOUBLE);&nbsp;
   <b>&nbsp;&nbsp;myMotor-&gt;step(100,&nbsp;BACKWARD,&nbsp;DOUBLE);
   <b>&nbsp;&nbsp;
   <b>&nbsp;&nbsp;Serial.println("Interleave&nbsp;coil&nbsp;steps");
   <b>&nbsp;&nbsp;myMotor-&gt;step(100,&nbsp;FORWARD,&nbsp;INTERLEAVE);&nbsp;
   <b>&nbsp;&nbsp;myMotor-&gt;step(100,&nbsp;BACKWARD,&nbsp;INTERLEAVE);&nbsp;
   <b>&nbsp;&nbsp;
   <b>&nbsp;&nbsp;Serial.println("Microstep&nbsp;steps");
   <b>&nbsp;&nbsp;myMotor-&gt;step(50,&nbsp;FORWARD,&nbsp;MICROSTEP);&nbsp;
   <b>&nbsp;&nbsp;myMotor-&gt;step(50,&nbsp;BACKWARD,&nbsp;MICROSTEP);
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
 <p>내가 작성한 코드를 통해서 예제를 보여주어도 되지만, 내 코드보다는 기본 제공 예제 라이브러리가 훨씬 더 깔끔하기 때문에 기본 제공 라이브러리 예제를 사용했다. 확실히 아두이노가 오픈되어있다는 장점을 느낄 수 있다. 서드파티 제품임에도 불구하고 어느정도 수준으로 손 쉽게 할 수 있게끔 기본 제공 예제 라이브러리가 충실하게 구성되어있다. 한 번 자료를 찾아서 다른 방법으로도 해보길 바란다.<b></p>
</div>
