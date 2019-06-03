---
layout: post
title: '프로세싱 응용 - 아두이노 서보모터 제어하기'
author: '시류아'
categories: Programming-Processing
tags:
- Programming
- Language
- Graphic
- Arduino
---


<script> location.href='https://cafe.naver.com/develoid/776091' ; </script>

<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMDFfODgg%2FMDAxNDg1OTIxMDU2ODA5.DhDdL-OPrjf91TMp_qMxk4UKZpKRgeUO68wm62YhZLAg.R9k0ifJMvfDyrs36r-wxYyRL1LkYgtr2jOdrW2inGzMg.PNG.searphiel9%2Fprocessing_logo.png%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <div>
   프로세싱 응용
   <b>아두이노 서보모터 제어하기
  </div>
 </div>
</div>
<div>
 <p>프로세싱으로 아두이노에 연결된 서보모터를 제어해보도록 하자, 조건은 슬라이드를 만들고, 드래그하여 서보모터가 그 위치에 맞추어 이동하는 것이다.</p>
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
 <p>프로세싱으로&nbsp;아두이노를&nbsp;제어하기&nbsp;위해서는&nbsp;라이브러리&nbsp;연동이&nbsp;필요로하다.&nbsp;위의&nbsp;링크를&nbsp;참조하여&nbsp;미리&nbsp;라이브러리를&nbsp;설정한다.</p>
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
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMDFfMjA4%2FMDAxNDg1OTIxMTMwODAy.fT1eCHo1JgywFTbKjN6BRzGVORtcrtVSeTdP9zn4bRMg.WVpt3P9EwzmYLrRRXMgNl46qnxKZJ344E8b6EwCcDDEg.PNG.searphiel9%2F7.png%22&amp;type=cafe_wa740">
  <span>회로배선</span>
 </div>
</div>
<div>
 <p>서보모터의 PWM을 PIN 6에 연결하고 전원은 아두이노의 전원 PIN 에서 가져온다.</p>
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
   import&nbsp;processing.serial.*;
   <b>import&nbsp;cc.arduino.*;
   <b>Arduino&nbsp;arduino;
   <b>&nbsp;
   <b>int&nbsp;Pos&nbsp;=&nbsp;90;
   <b>int&nbsp;Xline&nbsp;=&nbsp;200;
   <b>&nbsp;
   <b>void&nbsp;setup()&nbsp;{
   <b>&nbsp;&nbsp;size(400,200);
   <b>&nbsp;&nbsp;background(0);
   <b>&nbsp;
   <b>&nbsp;&nbsp;println(Arduino.list());
   <b>&nbsp;&nbsp;arduino&nbsp;=&nbsp;new&nbsp;Arduino(this,Arduino.list()[0],&nbsp;57600);
   <b>&nbsp;&nbsp;arduino.pinMode(6,&nbsp;Arduino.SERVO);
   <b>&nbsp;&nbsp;
   <b>&nbsp;&nbsp;stroke(255);
   <b>&nbsp;&nbsp;strokeWeight(5);
   <b>}
   <b>&nbsp;
   <b>void&nbsp;draw()&nbsp;{
   <b>&nbsp;&nbsp;background(0);
   <b>&nbsp;&nbsp;arduino.servoWrite(6,&nbsp;Pos);&nbsp;//&nbsp;아두이노&nbsp;서보&nbsp;값&nbsp;입력
   <b>&nbsp;&nbsp;
   <b>&nbsp;&nbsp;line(0,100,&nbsp;400,&nbsp;100);&nbsp;//&nbsp;기준&nbsp;라인&nbsp;그리기
   <b>&nbsp;&nbsp;
   <b>&nbsp;&nbsp;ellipse(Xline,&nbsp;100,&nbsp;20,&nbsp;20);&nbsp;//&nbsp;드래그&nbsp;원,&nbsp;제어기준점
   <b>}
   <b>&nbsp;
   <b>void&nbsp;mouseDragged()&nbsp;{&nbsp;//&nbsp;마우스&nbsp;드래그시
   <b>&nbsp;&nbsp;Pos&nbsp;=&nbsp;constrain(mouseX,&nbsp;0,&nbsp;180);&nbsp;//&nbsp;마우스&nbsp;값&nbsp;0~180&nbsp;사이의&nbsp;값으로&nbsp;저장
   <b>&nbsp;&nbsp;Xline&nbsp;=&nbsp;mouseX;&nbsp;//&nbsp;제어&nbsp;기준점&nbsp;지정
   <b>&nbsp;&nbsp;if(Xline&nbsp;&lt;&nbsp;0)&nbsp;Xline&nbsp;=&nbsp;0;&nbsp;//&nbsp;0보다&nbsp;작아지면&nbsp;0으로
   <b>&nbsp;&nbsp;if(Xline&nbsp;&gt;&nbsp;400)&nbsp;Xline&nbsp;=&nbsp;400;&nbsp;//&nbsp;400&nbsp;보다&nbsp;커지면&nbsp;400으로
   <b>}
  </div>
 </div>
</div>
<div>
 <p>마우스가 드래그하여 변경되는 값을 정확히 0~180 사이로 치환하여, 아두이노로 전송하는 것이 중요하다. 이 값이 너무 커지거나, 마이너스가 될 경우 오작동이 될 수 있다.</p>
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
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMDFfMjQy%2FMDAxNDg1OTIxMjc0NTAz.Te500aQZDQZ0XlOpeM1LRUfEoMRc3ulfEehE2b1cY00g.6ny9AmY_tB8Bsda7VCo3T7essv9r1-ZdTdV5XiAGOzMg.PNG.searphiel9%2F10.png%22&amp;type=cafe_wa740">
  <span>테스트 결과 창</span>
 </div>
</div>
<div>
 <p>슬라이드에 잇는 원이 드래그되어 움직이는 것에 맞추어서 서보모터의 각도가 변경된다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <p><span>소스코드에 정답은 없다. 다양한 생각이 있듯 다양한 방법이 있고, 그 중 하나일 뿐이다.</span></p>
</div>
