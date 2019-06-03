---
layout: post
title: '프로세싱 응용 - 아두이노 LED 제어하기'
author: '시류아'
categories: Programming-Processing
tags:
- Programming
- Language
- Graphic
- Arduino
---


<script> location.href='https://cafe.naver.com/develoid/776090' ; </script>


















						<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMDFfMzYg%2FMDAxNDg1OTIwNjczMDY0.Gd8-4LoA2PIriQcj6yQrLgKZ97I23ywhqmODvPNdFDEg.n-1z0IKrzT-cKc2sOOd9f4QyR5BfLGv2LbZj95NNRj0g.PNG.searphiel9%2Fprocessing_logo.png%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <div>
   프로세싱 응용
   <b>아두이노 LED 제어하기
  </div>
 </div>
</div>
<div>
 <p>프로세싱으로 아두이노의 LED를 제어해보자, 조건은 마우스를 좌클릭하면 LED를 끄며, 우클릭하면 LED를 킨다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   라이브러리 연동
  </div>
 </div>
</div>
<div>
 <a href="http://blog.naver.com/searphiel9/220924444475"> <span> <span> <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fdthumb.phinf.naver.net%2F%3Fsrc%3D%2522http%253A%252F%252Fblogthumb2.naver.net%252FMjAxNzAyMDFfMTc2%252FMDAxNDg1OTIwMTIzODQ5.Q1ax1I1DcOMjaOPlbjLLyv0YWtPocLl_iMotHByIjl4g.0gcNi91QJGCF3u3PfZWeVlnCNLbmewmBPSLYW-dVTk4g.PNG.searphiel9%252Fprocessing_logo.png%253Ftype%253Dw2%2522%26amp%3Btype%3Dff500_300%22&amp;type=cafe_wa740"> </span> <span> <span>프로세싱 응용 - 아두이노 제어 라이브러리 설치</span> <span>프로세싱 응용 아두이노 제어 라이브러리 설치프로세싱으로 아두이노를 제어해보자, 프로세싱과 아두이노는...</span> <span>blog.naver.com</span> </span> <span></span> </span> <span>자세히보기</span> </a>
</div>
<div>
 <p>프로세싱으로 아두이노를 제어하기 위해서는 라이브러리 연동이 필요로하다. 위의 링크를 참조하여 미리 라이브러리를 설정한다.</p>
</div>
<div>
 <div>
  <div></div>
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
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMDFfODYg%2FMDAxNDg1OTIwODIzNTQx.h1v3_ssmmPuUmOELFLxB9URhXcEJNR7r-v2GLEMT2iog.QU4vHQkw3FzPVgY_ybB4GKghh2bJOXW6GbkX66Iire4g.PNG.searphiel9%2F5.png%22&amp;type=cafe_wa740">
  <span>회로배선</span>
 </div>
</div>
<div>
 <p>배선은 간단하게 PIN 13에 LED를 연결한다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   소스코드
  </div>
 </div>
</div>
<div>
 <div>
  <div>
   import&nbsp;processing.serial.*;&nbsp;//&nbsp;아두이노&nbsp;설정
   <b>import&nbsp;cc.arduino.*;
   <b>Arduino&nbsp;arduino;
   <b>&nbsp;
   <b>int&nbsp;LED=13;&nbsp;//&nbsp;LED&nbsp;핀&nbsp;설정
   <b>int&nbsp;LED_ONOFF&nbsp;=&nbsp;0;&nbsp;//&nbsp;ON/OFF&nbsp;여부&nbsp;설정
   <b>&nbsp;
   <b>void&nbsp;setup()&nbsp;{
   <b>&nbsp;&nbsp;size(400,400);
   <b>&nbsp;&nbsp;background(0);
   <b>&nbsp;
   <b>&nbsp;&nbsp;println(Arduino.list());&nbsp;//&nbsp;아두이노&nbsp;리스트&nbsp;검색&nbsp;및&nbsp;연결
   <b>&nbsp;&nbsp;arduino&nbsp;=&nbsp;new&nbsp;Arduino(this,Arduino.list()[0],&nbsp;57600);
   <b>&nbsp;&nbsp;arduino.pinMode(LED,&nbsp;Arduino.OUTPUT);&nbsp;//&nbsp;아두이노&nbsp;핀&nbsp;설정
   <b>}
   <b>&nbsp;
   <b>void&nbsp;draw()&nbsp;{
   <b>&nbsp;&nbsp;if(LED_ONOFF&nbsp;==&nbsp;1)&nbsp;{&nbsp;//&nbsp;ON일&nbsp;경우
   <b>&nbsp;&nbsp;&nbsp;&nbsp;background(255);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;arduino.digitalWrite(LED,&nbsp;Arduino.HIGH);&nbsp;//&nbsp;LED&nbsp;ON
   <b>&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;if(LED_ONOFF&nbsp;==&nbsp;0)&nbsp;{&nbsp;//&nbsp;OFF일&nbsp;경우
   <b>&nbsp;&nbsp;&nbsp;&nbsp;background(0);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;arduino.digitalWrite(LED,&nbsp;Arduino.LOW);&nbsp;//&nbsp;LED&nbsp;OFF
   <b>&nbsp;&nbsp;}
   <b>}
   <b>&nbsp;
   <b>void&nbsp;mousePressed()&nbsp;{&nbsp;//&nbsp;마우스&nbsp;클릭
   <b>&nbsp;&nbsp;if(mouseButton&nbsp;==&nbsp;LEFT)&nbsp;LED_ONOFF=0;&nbsp;//&nbsp;좌클릭
   <b>&nbsp;&nbsp;if(mouseButton&nbsp;==&nbsp;RIGHT)&nbsp;LED_ONOFF=1;&nbsp;//&nbsp;우클릭
   <b>}
  </div>
 </div>
</div>
<div>
 <p>아두이노 제어는 라이브러리 파일에서 아두이노 함수 파일을 arduino 클래스로 묶어두었기 때문에 기존 아두이노 함수 앞에 arduino. 을 붙여주는 것으로 끝난다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   테스트 결과
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMDFfNjUg%2FMDAxNDg1OTIwODY1ODQ1.uNhDxU-GvyTxwkKsNZYJoMKBcWhJ8juq5882I1GM5ycg.Zy0Eoq5hjjsx4Nrqhe6TZcGljxrxvvqUpwChT1n4_vcg.PNG.searphiel9%2F6.png%22&amp;type=cafe_wa740">
  <span>테스트 결과 창</span>
 </div>
</div>
<div>
 <p>테스트를 진행해보면, 팝업 창 위에서 마우스를 우클릭하면 LED가 켜지며, 좌클릭하면 LED가 꺼지는 것을 확인 할 수 있다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <p>소스코드에 정답은 없다. 다양한 생각이 있듯 다양한 방법이 있고, 그 중 하나일 뿐이다.</p>
</div>
