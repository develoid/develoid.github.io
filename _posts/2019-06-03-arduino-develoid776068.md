---
layout: post
title: '[커뮤니티] 아두이노 응용 - 순정 모터 쉴드 이용해서 모터제어하기'
author: '시류아'
categories: Arduino
tags:
- IoT-Board
- Arduino
- Programming
-
---


<script> location.href='https://cafe.naver.com/develoid/776068' ; </script>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfNDMg%2FMDAxNDg0NzQxODQyNjc4.RDeJPAuU8RnaiE4JDoF0CaHEoJ3_9JKSZALo-yj1KIcg.DHzzCBh3ICsUxoH91wpNcekoaQoVQVKUkru6erk1bacg.JPEG.searphiel9%2Farduino_logo.jpg%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>
  <p>
   아두이노 응용
   순정 모터 쉴드 이용해서 모터 제어하기
  </p>

 </p>

</p>

<p>
 <p>아두이노하면 떠오르는 가장 큰 장점이 무엇인가? 손 쉽게 할 수 있도록 많은 라이브러리가 있는거? 오픈하드웨어라 많은 파생제품이 나온다는 것? 개인적으로는 쉴드의 개념이다. 간단하게 적층 하는 것으로 모듈을 손 쉽게 추가 할 수 있다는 것이 아두이노의 가장 큰 장점이 아닐까 싶다. 이번에는 아두이노에서 나오는 순정 모터쉴드를 이용해서 모터를 제어해보도록 하자.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   순정 모터 쉴드
  </p>

 </p>

</p>

<p>
 <p>DC모터, 스태핑모터, 서보모터 등을 제어하기 위해서 사용하는 모터쉴드로 L298칩을 이용해서 만들어져있다. 서보모터 같은 경우 아래의 네모 친 부분을 통해서 제어가 가능하며, 스태핑모터와 DC모터 같은 경우 동그라미 친 곳을 통해서 제어가 가능하다.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMTE2%2FMDAxNDg0NzQyMDAzMzgz.pl0MQU_phiC_9H_2Al_GCzgIdHaxRQJp-M41vIYQ42Ug.MsP69N_0usBAbGHG9jXg2p3J_TRXrNSdg4LKgZruULgg.PNG.searphiel9%2F1.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>동그라미 친 부분에 외부 전원 인가가 가능하도록 만들어져 있어, 최대 12V 전압에서 채널 당 최대 2A 또는 한 채널에 4A의 전류를 제어 할 수 있다. 모터가 9V 이상의 전원을 필요로 하는 경우 뒷면의 'Vin Connect' 점퍼를 절단하여 아두이노 보드와 모터 쉴드의 전원을 분리하여 입력되는 외부전원을 통해서 제어가 가능하다. 'Vin'스크류 터미널의 최대 입력 전압은 18V 이다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   핀 배치도
  </p>

 </p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMjMy%2FMDAxNDg0NzQyNzk2MDM1.44AGE_Q9-dNdHoOAu3YtaF4vJwnsHXSkUyaV-L5eEz8g.4QeWjpCZYHC_3en4kM09-zT3rVIea5Fd7SKQqB4KTSUg.PNG.searphiel9%2F2.PNG%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>-&nbsp;Screw&nbsp;terminal&nbsp;to&nbsp;connect&nbsp;the&nbsp;motors&nbsp;and&nbsp;their&nbsp;power&nbsp;supply.&nbsp; -&nbsp;2&nbsp;TinkerKit&nbsp;connectors&nbsp;for&nbsp;two&nbsp;Analog&nbsp;Inputs&nbsp;(in&nbsp;white),&nbsp;connected&nbsp;to&nbsp;A2&nbsp;and&nbsp;A3.&nbsp; -&nbsp;2&nbsp;TinkerKit&nbsp;connectors&nbsp;for&nbsp;two&nbsp;Aanlog&nbsp;Outputs&nbsp;(in&nbsp;orange&nbsp;in&nbsp;the&nbsp;middle),&nbsp;connected&nbsp;to&nbsp;PWM&nbsp;outputs&nbsp;on&nbsp;pins&nbsp;D5&nbsp;and&nbsp;D6.&nbsp; -&nbsp;2&nbsp;TinkerKit&nbsp;connectors&nbsp;for&nbsp;the&nbsp;TWI&nbsp;interface&nbsp;(in&nbsp;white&nbsp;with&nbsp;4&nbsp;pins),&nbsp;one&nbsp;for&nbsp;input&nbsp;and&nbsp;the&nbsp;other&nbsp;one&nbsp;for&nbsp;output.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   DC모터 제어
  </p>

 </p>

</p>

<p>
 <p>시리얼&nbsp;통신으로&nbsp;0~255&nbsp;사이의&nbsp;값을&nbsp;입력&nbsp;받아서&nbsp;모터의&nbsp;속도를&nbsp;제어하는&nbsp;방식으로&nbsp;CH.&nbsp;A&nbsp;에&nbsp;연결하여&nbsp;제어한다.&nbsp;</p>

</p>

<p>
 <p>
  <p>
   #define&nbsp;DIR&nbsp;12&nbsp;//&nbsp;방향
   #define&nbsp;PWM&nbsp;3&nbsp;&nbsp;//&nbsp;속도
   #define&nbsp;BRK&nbsp;9&nbsp;&nbsp;//&nbsp;브레이크
   &nbsp;
   int&nbsp;Speed&nbsp;=&nbsp;0;
   &nbsp;
   void&nbsp;setup()&nbsp;{
   &nbsp;&nbsp;//&nbsp;put&nbsp;your&nbsp;setup&nbsp;code&nbsp;here,&nbsp;to&nbsp;run&nbsp;once:
   &nbsp;&nbsp;Serial.begin(9600);&nbsp;//&nbsp;시리얼&nbsp;통신&nbsp;설정
   &nbsp;&nbsp;
   &nbsp;&nbsp;pinMode(DIR,&nbsp;OUTPUT);
   &nbsp;&nbsp;pinMode(BRK,&nbsp;OUTPUT);
   &nbsp;&nbsp;
   &nbsp;&nbsp;digitalWrite(BRK,&nbsp;LOW);&nbsp;//&nbsp;브레이크&nbsp;해제
   &nbsp;&nbsp;digitalWrite(DIR&nbsp;HIGH);&nbsp;//&nbsp;정방향
   }
   &nbsp;
   void&nbsp;loop()&nbsp;{
   &nbsp;&nbsp;//&nbsp;put&nbsp;your&nbsp;main&nbsp;code&nbsp;here,&nbsp;to&nbsp;run&nbsp;repeatedly:
   &nbsp;&nbsp;if&nbsp;(Serial.available()&nbsp;&gt;&nbsp;0)&nbsp;{&nbsp;//&nbsp;시리얼&nbsp;입력이&nbsp;있으면
   &nbsp;&nbsp;&nbsp;&nbsp;Speed&nbsp;=&nbsp;Serial.read();&nbsp;&nbsp;//&nbsp;스피드에&nbsp;저장
   &nbsp;&nbsp;&nbsp;&nbsp;if(Speed&nbsp;&gt;&nbsp;255)&nbsp;Speed&nbsp;=&nbsp;255;&nbsp;//&nbsp;255보다&nbsp;크면&nbsp;255로&nbsp;제한
   &nbsp;&nbsp;&nbsp;&nbsp;if(Speed&nbsp;&lt;&nbsp;0)&nbsp;&nbsp;&nbsp;Spped&nbsp;=&nbsp;0;&nbsp;&nbsp;&nbsp;//&nbsp;0보다&nbsp;작으면&nbsp;0으로&nbsp;제한
   &nbsp;&nbsp;}
   &nbsp;
   &nbsp;&nbsp;analogWrite(PWM,&nbsp;Speed);&nbsp;//&nbsp;속도&nbsp;부여
   &nbsp;&nbsp;delay(100);
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
   스태핑모터 제어
  </p>

 </p>

</p>

<p>
 <p>시리얼 통신으로 0~255 사이의 값을 받아서 스태핑 모터를 제어한다. 배선 같은 경우는 스태핑 모터별로 조금씩 차이가 있기 때문에 데이터 시트를 참고하는 것을 권장한다. ( 아니 강요한다. )</p>

</p>

<p>
 <p>
  <p>
   #include&nbsp;&lt;Stepper.h&gt;
   &nbsp;
   #define&nbsp;DIR_A&nbsp;12
   #define&nbsp;DIR_B&nbsp;13
   #define&nbsp;PWM_A&nbsp;3
   #define&nbsp;PWM_B&nbsp;11
   #define&nbsp;BRK_A&nbsp;9
   #define&nbsp;BRK_B&nbsp;8
   &nbsp;
   int&nbsp;Step&nbsp;=&nbsp;200;
   &nbsp;
   Stepper&nbsp;myStepper(Step,&nbsp;12,13);&nbsp;//&nbsp;초기&nbsp;PWM&nbsp;지정
   &nbsp;
   void&nbsp;setup&nbsp;()&nbsp;{
   &nbsp;&nbsp;Serial.begin(9600);
   &nbsp;
   &nbsp;&nbsp;//&nbsp;pin&nbsp;연결
   &nbsp;&nbsp;pinMode(PWM_A,&nbsp;OUTPUT);
   &nbsp;&nbsp;pinMode(PWM_B,&nbsp;OUTPUT);
   &nbsp;&nbsp;pinMode(BRK_A,&nbsp;OUTPUT);
   &nbsp;&nbsp;pinMode(BRK_B,&nbsp;OUTPUT);
   &nbsp;
   &nbsp;&nbsp;//&nbsp;초기화
   &nbsp;&nbsp;digitalWrite(PWM_A,&nbsp;HIGH);
   &nbsp;&nbsp;digitalWrite(PWM_B,&nbsp;HIGH);
   &nbsp;&nbsp;digitalWrite(BRK_A,&nbsp;LOW);
   &nbsp;&nbsp;digitalWrite(BRK_B,&nbsp;LOW);
   &nbsp;&nbsp;myStepper.setSpeed(Step);
   }
   &nbsp;
   void&nbsp;loop&nbsp;()&nbsp;{
   &nbsp;&nbsp;if&nbsp;(Serial.available()&nbsp;&gt;&nbsp;0)&nbsp;{&nbsp;//&nbsp;시리얼&nbsp;입력이&nbsp;있으면
   &nbsp;&nbsp;&nbsp;&nbsp;Step&nbsp;=&nbsp;Serial.read();&nbsp;&nbsp;//&nbsp;Step에&nbsp;저장
   &nbsp;&nbsp;&nbsp;&nbsp;if(Step&nbsp;&gt;&nbsp;255)&nbsp;Step&nbsp;=&nbsp;255;&nbsp;//&nbsp;255보다&nbsp;크면&nbsp;255로&nbsp;제한
   &nbsp;&nbsp;&nbsp;&nbsp;if(Step&nbsp;&lt;&nbsp;0)&nbsp;&nbsp;&nbsp;Step&nbsp;=&nbsp;0;&nbsp;&nbsp;&nbsp;//&nbsp;0보다&nbsp;작으면&nbsp;0으로&nbsp;제한
   &nbsp;&nbsp;}
   &nbsp;
   &nbsp;&nbsp;myStepper.step(Step);
   &nbsp;&nbsp;delay(2000);
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
 <p>어떠한가? 생각보다 다른 제어와 별 반 차이없이 간단하다고 느껴지지 않는가? 이렇기 때문에 개인적으로 아두이노의 가장 큰 장점은 쉴드라고 생각하는 것이다. 쉴드를 이용해서 여러가지 방법으로 모터를 제어해보길 바란다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>소스코드에는 정답이 없다. 다양한 생각이 있듯 다양한 방법이 있으며, 이 예제들은 그 중 하나다.</p>

</p>
