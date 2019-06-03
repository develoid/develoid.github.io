---
layout: post
title: '아두이노 응용 - Xbee 설정과 서보모터 제어'
author: '시류아'
categories: Arduino
tags:
- IoT-Board
- Arduino
- Programming
-
---


<script> location.href='https://cafe.naver.com/develoid/776073' ; </script>

<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMjAw%2FMDAxNDg0Nzk3Mjg5MTc2.R4XIjjcd9TqMPczvGg1RXW99BmyVxGmusI1SziBkV_8g.o83mhE6pZqJk_qpZlTaCckq9-qZ7bGbcfSa4CkwtM_Ug.JPEG.searphiel9%2Farduino_logo.jpg%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <div>
   아두이노 응용
   <b>Xbee 설정과 서보모터 제어
  </div>
 </div>
</div>
<div>
 <p>아두이노를 무선 제어하는데 있어서 Bluetooth나 Wi-Fi 등 다양한 통신을 이용한다. 이번에는 그 중에서도 Xbee(Zigbee)를 이용해서 무선 제어하여 서보모터를 제어해보자. 통신 설정 및 방법만 제외하면 Bluetooth 나 Xbee(Zigbee)는 코드 상에서의 차이가 거의 없다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   X-CTU를 이용한 Xbee 설정
  </div>
 </div>
</div>
<div>
 <div>
  <div>
   X-CTU 소프트웨어 설치
  </div>
 </div>
</div>
<div>
 <p>Xbee 를 설정하기 위해서는 X-CTU가 필요로 하다. X-CTU는 digi.com 에서 다운로드 받을 수 있다.</p>
</div>
<div>
 <a href="http://digi.com/"> <span> <span> <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fdthumb.phinf.naver.net%2F%3Fsrc%3D%2522https%253A%252F%252Fimages.digi.com%252Fnav-logo-digi.png%2522%26amp%3Btype%3Dff120%22&amp;type=cafe_wa740"> </span> <span> <span>M2M Communications, Remote Monitoring &amp; Management - Digi International</span> <span>digi.com</span> </span> <span></span> </span> <span>자세히보기</span> </a>
</div>
<div>
 <p>digi.com 사이트에서 X-CTU를 검색하면 바로 찾을 수 있으며, 자신이 사용하는 OS에 맞추어서 다운로드하면된다. 귀찮을 경우를 대비하여 다운로드사이트 링크를 아래에 건다.</p>
</div>
<div>
 <a href="http://www.digi.com/support/productdetail?pid=3352"> <span> <span> <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fdthumb.phinf.naver.net%2F%3Fsrc%3D%2522https%253A%252F%252Fimages.digi.com%252Fnav-logo-digi.png%2522%26amp%3Btype%3Dff120%22&amp;type=cafe_wa740"> </span> <span> <span>XCTU Software Product Detail - Digi International</span> <span>www.digi.com</span> </span> <span></span> </span> <span>자세히보기</span> </a>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   X-CTU를 이용한 Xbee 설정
  </div>
 </div>
</div>
<div>
 <p>X-CTU를 다운로드 받았으면 설치하고 실행시킨다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfNDIg%2FMDAxNDg0Nzk3NzQ4MDUz.LFxk6Ece9huFXPBFGPHW-_o4M5I5bOdWHwV_j39TIoQg.8PEs5_Cwd2EezMWiswcT2smcK5jfrGchpHAzko3GFlog.PNG.searphiel9%2F1.png%22&amp;type=cafe_wa740">
  <span>X-CTU 메인화면</span>
 </div>
</div>
<div>
 <p>X-CTU를 실행시키면 위와 같이 메인화면이 나타난다. Com Port Setup에는 연결되어있는 포트가 나열되어 잇으며 오른쪽의 Test / Qurey 를 클릭하면 선택된 포트에 대한 연결 상태 테스트가 가능하다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMjU4%2FMDAxNDg0Nzk3ODEyNjAz.K4AiJiKFMscDoCGqdYBRnuODS5Muhto9UCaogbFI92Ug.Yoz9qEjT1HzXWlxE5oNXzMgqLNwIF_7Fv20jbEICWrYg.PNG.searphiel9%2F2.png%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfODYg%2FMDAxNDg0Nzk3ODEyNjA2.q47aB3iU4eE5B2BMeRkp88nGyBLX0ckagtqHhJ6J07Ug.didYhwWo3QU99cX-j8VtpnGKpxOWFTK4a7vNR_21crQg.PNG.searphiel9%2F3.png%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMjMw%2FMDAxNDg0Nzk3ODEyNjIz.817mBbvVw4DcsOQu9GjQpd-qz7OVD_DBXSKheNUe39wg.R1xh35UeNRDRu5_zSGeA5LCJgGeC9pWFn2vZzMJryGwg.PNG.searphiel9%2F4.png%22&amp;type=cafe_wa740">
  <span>비 정상 연결 에러</span>
 </div>
</div>
<div>
 <p><span>비정상적으로 연결 될 경우 여러가지 원인이 있을 수 잇다. 하드웨어 문제, Baud rate 불 일치, AT모드가 아닌 API 모드 설정 상황 등 다양하게 있으며 상황에 맞추어 설정을 수정하여 연결 시도하면 된다. 정상 연결이 되었다면 X-CTU 에서는 Terminal 탭으로 넘아가자</span></p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfODEg%2FMDAxNDg0Nzk3OTE0MjQ0._EOjzkE2h1KHciA-UXng5mc53JOygDmYfa8kBm8ZooIg.436E2YtZ5ir5fo3jJFW_71z8XilFGJehx5IMdFJoX0Eg.PNG.searphiel9%2F5.png%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p>터미널에서는 AT커맨드를 이용하여 Xbee의 파라미터를 변경 할 수 있다. 예를 들어 Baud rate 를 9600에서 19200으로 변경하거나, Address 값을 변경하는 등 설정이 가능하다. AT커맨드를 사용하기 위해서는 +++ 를 사용하며, +++ 입력 후에는 엔터 또는 다른키 입력을 주의해야된다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   Xbee 파라미터 설정 - Xbee Series 1
  </div>
 </div>
</div>
<div>
 <p>X-CTU의 Modem Confinguration 탭에서 Read를 누른다. 그러면 연결된 Xbee의 파라미터들을 읽을 수 있다. Xbee Series 1은 802.15.4 프로토콜을 사용하고 있으며 채널은 C, ID는 3332, 그리고 DH, DL, MY는 각각 0으로 공장 출하시 설정되어 있다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMTAx%2FMDAxNDg0Nzk4MDkwODc2.Y2odAmZ99bRCcXx98ogwuuUZTnz4wKozhUBiUtMxIhkg.wsGjFY7AM-a_K0mi3gA1h0u8Z8JHU0iauC4MMIos_ZYg.PNG.searphiel9%2F6.png%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p><span>개인적으로 Always Update Firmware 체크는 권장하지 않는다. 불필요하게 Write 할 때 마다 업데이트 할 필요성이 없으며, 오류로 인한 문제를 발생 시킬 수 있다.</span></p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   Xbee Series 1 파리미터 설정
  </div>
 </div>
</div>
<div>
 <p>먼저 자주 사용하는 파라미터를 아래의 표를 통해서 알아보자.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfODQg%2FMDAxNDg0Nzk4NTM3MTk5.vEUMw6KjkYu5zMhaqFuHM3Ig619ZNHZKD0uB_ROPzD8g.xczRnThMHPBqJw31RvenZlN04EUmjUrLkbS9WSUsGcMg.PNG.searphiel9%2F%25ED%2591%259C1.PNG%22&amp;type=cafe_wa740">
  <span>자주사용하는 파라미터</span>
 </div>
</div>
<div>
 <p>ID는 Xbee의 네트워크 ID로 네트워크 상의 이름, CH는 Xbee의 통신채널을 말한다. SH/SL은 Xbee의 시리얼 번호를 말하며, MY는 모듈의 주소를 말한다. DH/DL은 통신을 보낼 대상의 주소를 말하며, BD는 통신속도를 말한다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   Xbee Series 1 양방향 통신 주소 설정
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMTQ1%2FMDAxNDg0Nzk4Njk5ODc2.Gyv6yzC98OdWi_KtfpFGBDmDKq63-CWrytPBUDtP3kUg.n-rN2qcVtuWzDszfBg2TceUDjWwzPlcaReDoL53FXT0g.PNG.searphiel9%2F7.png%22&amp;type=cafe_wa740">
  <span>양방향 통신 주소 설정</span>
 </div>
</div>
<div>
 <p>Xbee A 에서 Xbee B 로 1대 1 양방향 통신을 하기 위해서는 각각의 Xbee 모듈을 아래와 같이 설정해야된다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMTcy%2FMDAxNDg0Nzk4ODQwMTg5.R-eUqFCU66up2qgp3YD4ogz0WJNMsHpRMS5uuYzQI_4g.77ownhNdgsgX3Giv5Zwzt_qwH44iOEmP39P1Uv4q7KUg.PNG.searphiel9%2F%25ED%2591%259C2.PNG%22&amp;type=cafe_wa740">
  <span>양방향 통신 파라미터 설정</span>
 </div>
</div>
<div>
 <p>간단하게 설명해서 모듈 A와 B의 설정 값을 동일하게 설정하면 간단하게 바로 된다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   Xbee Series 1 원형 통신 설정
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMTU1%2FMDAxNDg0Nzk4OTA5Njg0.jDY3irdIqYUAaKvNH09CkiDvRINNxeMScZlW9GHqLYsg.OcmpdaB4T2wQmiubQtEJt3f4i3-1EIPZEWfDSd96O1wg.PNG.searphiel9%2F8.png%22&amp;type=cafe_wa740">
  <span>원형 통신 설정</span>
 </div>
</div>
<div>
 <p>원형 통신은 3개 이상의 Xbee 를 통신할때 사용하는 방법이다. 모듈 A는 모듈 B로, 모듈 B는 모듈 C로, 모듈 C는 다시 모듈 A로 하는 형식으로 주소 설정은 아래를 참고하길 바란다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMTMz%2FMDAxNDg0Nzk5MTgwNzY4.YjJYfzIe7Et3hySYUnIC4iJH0har7wRkzsb2pH0hRL8g.eeihP8cTS7BCfHdAEdTlyGCYJPtrGK-_BUlslFRdp3og.PNG.searphiel9%2F%25ED%2591%259C3.PNG%22&amp;type=cafe_wa740">
  <span>원형 통신 파리미터 설정</span>
 </div>
</div>
<div>
 <p>간단하게 전달 순서를 지정하는 것으로 생각하면 된다. 3개 이상을 하게 될 경우 위를 참고해서 하나 하나 더 늘려가면 최대 지정 가능한 범위 안에서 늘릴 수 있다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   Xbee Series 2 설정하기
  </div>
 </div>
</div>
<div>
 <p>Xbee Series 2 는 Series 1 과 달리 Zigbee Mesh 프로토콜을 사용한다. 이 프로토콜은 다음의 세가지 디바이스 타입을 사용하는데 각각 Coordinotor, Router, End Device 이다. 각각의 역활의 이해는 아래를 참고하길 바란다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMjM4%2FMDAxNDg0Nzk5MzA1NDY5.uX-KQ_QVHGRp73gI0fMcPMszLr5TUSK_diHH6djBEAcg.zHV5MXKr8YUbz1trmNxQIX33HzZKciK6NwLrtQxIQKQg.PNG.searphiel9%2F9.png%22&amp;type=cafe_wa740">
  <span>Zigbee Mesh 프로토콜</span>
 </div>
</div>
<div>
 <p>Coordinotor 는 네트워크의 형태 결정 및 보안을 담당한다. 그리고 Router는 네트워크 범위를 확장 할 수 있으며, End Device는 개별적인 센싱 혹은 제어를 담당한다. 이해륻 돕기 위해 스마트홈이라 생각하면 Coordinotor는 홈 시어터로 음향 및 영상 제어, Router는 음향기기 및 조명/영상기기, End Device는 각가의 센서 및 스위치라 생각 할 수 있다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMjI3%2FMDAxNDg0Nzk5NDA4OTg2.CH6hL-tehxvALaMhpueuKWjAZTilkNjvRe6AFWzziRcg.yBJHzf0jPrJ5hp4nJcbkPGMLwxTiKCmzchb-kBvh4WMg.PNG.searphiel9%2F10.png%22&amp;type=cafe_wa740">
  <span>Coordinator 설정</span>
 </div>
</div>
<div>
 <p>먼저 Module A의 Function Set 값을 변경해서 Coordinator로 설정하겠다. 이때 주의할 점은 SC, SD가 Router 설정과 동일해야 된다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMTkg%2FMDAxNDg0Nzk5NDYxNzM0.CQHjcNU_A1yKAEDNySGVy-SBV0mgz0dvD3MkwUrq370g.BDrN4Mvk6yEt7_jYg-T2lm10MFp9lfRtwEAYcPZIvbsg.PNG.searphiel9%2F11.png%22&amp;type=cafe_wa740">
  <span>Router 설정</span>
 </div>
</div>
<div>
 <p><span>그리고 Module B의 Function Set 값을 변경해서 Router로 설정한다. Module B 의 SC, SD의 값 역시 Coordinator 와 동일해야된다.&nbsp;</span><span>이로서 Xbee Series 2 의 통신설정이 끝났다.</span></p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   아두이노로 Xbee 통신하기
  </div>
 </div>
</div>
<div>
 <div>
  <div>
   회로도
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMjI3%2FMDAxNDg0Nzk5NTQxOTQx.uI3NLtHLzhusc_Bt8CExKjU12UIfSxRGfUGCVodbBGsg.8kyWVFfs1v7gIfZBoApeqG0s2U_q45GRr1CX-_cJ-hMg.PNG.searphiel9%2F12.png%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMjk2%2FMDAxNDg0Nzk5NTQxOTQ4.Q3bSmZMoxoXBGdzwjKBf-69LTId1aGCxtmLak7U7B9Ug.-b7HHKuj2X0OANBLf4JSy_0CcVN3eufVOwDd_I8muw8g.PNG.searphiel9%2F13.png%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p>Xbee 를 이용해서 서보모터를 가감속 및 좌우 방향 제어를 할 것이다. 두 대의 아두이노를 사용해서 한 대의 아두이노에서는 서보모터 제어, 또 다른 아두이노에서는 조이스틱으로 수치 값 제어를 실시하며 Xbee를 통해서 두 대의 아두이노가 통신한다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   수신 및 동작 소스코드
  </div>
 </div>
</div>
<div>
 <p><span>조건 1 &gt; Xbee 를 통해서 값을 수신받아야 한다.<b></span><span>조건 2 &gt; 전달 받은 값을 기준으로 서보모터를 위치/속도 제어해야된다.</span></p>
</div>
<div>
 <div>
  <div>
   #include&nbsp;&lt;VarSpeedServo.h&gt;&nbsp;
   <b>&nbsp;
   <b>VarSpeedServo&nbsp;myservo;
   <b>&nbsp;
   <b>int&nbsp;Servo_deg&nbsp;=&nbsp;90;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;서보&nbsp;위치
   <b>int&nbsp;Servo_speed&nbsp;=&nbsp;127;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;서보&nbsp;속도
   <b>&nbsp;
   <b>void&nbsp;setup()&nbsp;{
   <b>&nbsp;&nbsp;Serial.begin(9600);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;시리얼&nbsp;통신&nbsp;설정
   <b>&nbsp;&nbsp;myservo.attach(3);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;서보&nbsp;PIN&nbsp;설정
   <b>&nbsp;&nbsp;myservo.write(90,255,true);&nbsp;&nbsp;//&nbsp;서보&nbsp;위치&nbsp;초기화
   <b>}
   <b>&nbsp;
   <b>void&nbsp;loop()&nbsp;{
   <b>&nbsp;&nbsp;if&nbsp;(Serial.available()&nbsp;&gt;&nbsp;0)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;if(Serial.read()&nbsp;==&nbsp;'u')&nbsp;Servo_speed++;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;if(Serial.read()&nbsp;==&nbsp;'d')&nbsp;Servo_speed--;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;if(Serial.read()&nbsp;==&nbsp;'l')&nbsp;Servo_deg--;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;if(Serial.read()&nbsp;==&nbsp;'r')&nbsp;Servo_deg++;
   <b>&nbsp;&nbsp;}
   <b>&nbsp;
   <b>&nbsp;&nbsp;myservo.write(Servo_deg,&nbsp;Servo_speed,&nbsp;true);&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;서보&nbsp;위치&amp;속도&nbsp;제어
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
   송신 및 제어 소스코드
  </div>
 </div>
</div>
<div>
 <p><span>조건 1 &gt; 아날로그 조이스틱으로부터 값을 받아야 된다.<b></span><span>조건 1 &gt; Xbee 를 통해서 조이스틱으로 부터 받은 값을 송신해야된다.</span></p>
</div>
<div>
 <div>
  <div>
   int&nbsp;Read_deg;
   <b>int&nbsp;Read_speed;
   <b>char&nbsp;Write_deg;
   <b>char&nbsp;Write_speed;
   <b>&nbsp;
   <b>void&nbsp;setup()&nbsp;{
   <b>&nbsp;&nbsp;Serial.begin(9600);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;시리얼&nbsp;통신&nbsp;설정
   <b>}
   <b>&nbsp;
   <b>void&nbsp;loop()&nbsp;{
   <b>&nbsp;&nbsp;Read_deg&nbsp;=&nbsp;analogRead(0);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;조이스틱&nbsp;좌우&nbsp;값&nbsp;읽어&nbsp;위치에&nbsp;저장
   <b>&nbsp;&nbsp;Read_speed&nbsp;=&nbsp;analogRead(1);&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;조이스틱&nbsp;상하&nbsp;값&nbsp;읽어&nbsp;속도에&nbsp;저장
   <b>&nbsp;&nbsp;
   <b>&nbsp;&nbsp;Read_deg&nbsp;=&nbsp;map(Read_deg,&nbsp;0,&nbsp;1023,&nbsp;-1,&nbsp;1);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;좌우&nbsp;최대&amp;최소에&nbsp;맞추어&nbsp;변경
   <b>&nbsp;&nbsp;Read_speed&nbsp;=&nbsp;map(Read_speed,&nbsp;0,&nbsp;1023,&nbsp;-1,&nbsp;1);&nbsp;&nbsp;//&nbsp;상하&nbsp;최대&amp;최소에&nbsp;맞추어&nbsp;변경
   <b>&nbsp;
   <b>&nbsp;&nbsp;//&nbsp;전송
   <b>&nbsp;&nbsp;if(Read_speed&nbsp;&gt;&nbsp;0)&nbsp;Serial.write('u');
   <b>&nbsp;&nbsp;if(Read_speed&nbsp;&lt;&nbsp;0)&nbsp;Serial.write('d');
   <b>&nbsp;&nbsp;if(Read_deg&nbsp;&lt;&nbsp;0)&nbsp;Serial.write('l');
   <b>&nbsp;&nbsp;if(Read_deg&nbsp;&gt;&nbsp;0)&nbsp;Serial.write('r');
   <b>&nbsp;
   <b>&nbsp;&nbsp;delay(2000);&nbsp;//&nbsp;시간&nbsp;지연&nbsp;2초
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
 <p>어떤가? 확실히 설정 방법이 다를 뿐 블루투스와 제어 방법은 동일하지 않는가? 시리얼 통신을 한다면 대다수 다 비슷비슷하다. 이를 참고해서 블루투스 제어 등 시리얼 기반으로하고있는 무선 제어를 해보길 바란다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <p>소스코드에는 정답은 없다. 다양한 생각이 있듯 다양한 방법이 있으며, 이는 그 중 하나다.</p>
</div>
