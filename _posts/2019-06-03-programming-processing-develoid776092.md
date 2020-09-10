---
layout: post
title: '[커뮤니티] 프로세싱 응용 - 아두이노 저항 값 입력 받기'
author: '시류아'
categories: Programming-Processing
tags:
- Programming
- Language
- Graphic
- Arduino
---


<script> location.href='https://cafe.naver.com/develoid/776092' ; </script>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMDFfNDAg%2FMDAxNDg1OTIxNjgxNzUy.DJQSmpg4IP5bJZmaXP7cfFxTqbXQARTvjjAL10zahLgg.vLur5D854VwZ9TgzXw4fT6YGO_2l57HQ0GwOH3dT0Bwg.PNG.searphiel9%2Fprocessing_logo.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>
  <p>
   프로세싱 응용
   아두이노 저항 값 입력 받기
  </p>

 </p>

</p>

<p>
 <p>아두이노에 가변저항을 연결하고, 프로세싱으로 아두이노에서 가변저항 값을 입력 받아서 슬라이드로 표시해보자.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   라이브러리 연동
  </p>

 </p>

</p>

<p>
 <a href="http://blog.naver.com/searphiel9/220924444475">   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fdthumb.phinf.naver.net%2F%3Fsrc%3D%2522http%253A%252F%252Fblogthumb2.naver.net%252FMjAxNzAyMDFfMTc2%252FMDAxNDg1OTIwMTIzODQ5.Q1ax1I1DcOMjaOPlbjLLyv0YWtPocLl_iMotHByIjl4g.0gcNi91QJGCF3u3PfZWeVlnCNLbmewmBPSLYW-dVTk4g.PNG.searphiel9%252Fprocessing_logo.png%253Ftype%253Dw2%2522%26amp%3Btype%3Dff500_300%22&amp;type=cafe_wa740">   프로세싱 응용 - 아두이노 제어 라이브러리 설치 프로세싱 응용 아두이노 제어 라이브러리 설치프로세싱으로 아두이노를 제어해보자, 프로세싱과 아두이노는... blog.naver.com    자세히보기 </a>
</p>

<p>
 <p>프로세싱으로&nbsp;아두이노를&nbsp;제어하기&nbsp;위해서는&nbsp;라이브러리&nbsp;연동이&nbsp;필요로하다.&nbsp;위의&nbsp;링크를&nbsp;참조하여&nbsp;미리&nbsp;라이브러리를&nbsp;설정한다.</p>

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
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMDFfMTM4%2FMDAxNDg1OTIxNzU2MzQ4.ybBvGZ4wSv9LJnDtHkRQZXAYQz2Bj3ww5ACCiWbMZngg.VfrJnFMhVtALg29gOONOSRCJO2JzBnZAM7b_uscNbf0g.PNG.searphiel9%2F9.png%22&amp;type=cafe_wa740">
  회로 배선
 </p>

</p>

<p>
 <p>가변저항이 +에는 5V, -는 GND, 마지막 하나는 PIN A0에 연결한다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   소스코드
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   import&nbsp;processing.serial.*;
   import&nbsp;cc.arduino.*;
   Arduino&nbsp;arduino;
   &nbsp;
   float&nbsp;Pos&nbsp;=&nbsp;0;
   &nbsp;
   void&nbsp;setup()&nbsp;{
   &nbsp;&nbsp;size(400,200);
   &nbsp;&nbsp;background(0);
   &nbsp;
   &nbsp;&nbsp;println(Arduino.list());
   &nbsp;&nbsp;arduino&nbsp;=&nbsp;new&nbsp;Arduino(this,Arduino.list()[0],&nbsp;57600);
   &nbsp;&nbsp;
   &nbsp;&nbsp;stroke(255);
   &nbsp;&nbsp;strokeWeight(5);
   }
   &nbsp;
   void&nbsp;draw()&nbsp;{
   &nbsp;&nbsp;background(0);
   &nbsp;&nbsp;Pos&nbsp;=&nbsp;map(arduino.analogRead(0),&nbsp;0,&nbsp;1023,&nbsp;0,&nbsp;400);
   &nbsp;&nbsp;//&nbsp;Pos에&nbsp;저항&nbsp;값을&nbsp;0~400&nbsp;사이의&nbsp;값으로&nbsp;변환하여&nbsp;저장
   &nbsp;&nbsp;if(Pos&lt;0)&nbsp;Pos&nbsp;=&nbsp;0;&nbsp;//&nbsp;0보다&nbsp;작아지면&nbsp;0으로
   &nbsp;&nbsp;if(Pos&gt;400)&nbsp;Pos&nbsp;=&nbsp;400;&nbsp;//&nbsp;400보다&nbsp;커지면&nbsp;400으로
   &nbsp;&nbsp;line(0,100,&nbsp;Pos,&nbsp;100);&nbsp;//&nbsp;선&nbsp;긋기
   &nbsp;&nbsp;ellipse(Pos,&nbsp;100,&nbsp;20,&nbsp;20);&nbsp;//&nbsp;원&nbsp;그리기
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
   테스트 결과
  </p>

 </p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMDFfODIg%2FMDAxNDg1OTIxODE4MzU4.XsjehLd-siodjdaDvK6rthzcfwsJ3gqfS3357l-YJnYg.n3bRUe_Z4x3lpphPuNnhgnRGP6fYP2qR8WP_dmGXl0Qg.PNG.searphiel9%2F10.png%22&amp;type=cafe_wa740">
  테스트 결과 창
 </p>

</p>

<p>
 <p>가변 저항의 값에 따라서 프로세싱에서 드래그 바가 길어지고 짧아 지는 것을 확인 할 수 있다. 그럼 이 것을 조금 더 응용해서 기존 벽돌깨기 게임에다가 합쳐보자</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   벽돌깨기 게임이랑 합치기
  </p>

 </p>

</p>

<p>
 <p>아두이노는 그대로 유지 한 상태로, 프로세싱 벽돌깨기 게임에서의 소스코드 일부분을 수정하여 아두이노에서 값을 가져오도록 변경하면 끝난다. 프로세싱 벽돌깨기 게임은 아래의 링크를 참조하면 된다.</p>

</p>

<p>
 <a href="http://blog.naver.com/searphiel9/220920618818">   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fdthumb.phinf.naver.net%2F%3Fsrc%3D%2522http%253A%252F%252Fblogthumb2.naver.net%252FMjAxNzAxMjZfMTQg%252FMDAxNDg1MzkzNzQ3ODQy.0hi4InYEnCJo-uDjJxIEXMuk-obUiY10MweBv_x7qZMg.hvqqmDmcC21WTjK7ikczYfan0oPMvrQ8QkYjr0QV2jkg.PNG.searphiel9%252Fprocessing_logo.png%253Ftype%253Dw2%2522%26amp%3Btype%3Dff500_300%22&amp;type=cafe_wa740">   프로세싱 응용 - 벽돌깨기 게임 만들기 프로세싱 응용 벽돌깨기 게임 만들기이번에는 프로세싱으로 벽돌깨기 게임을 만들어보자, 차근차근 라켓부... blog.naver.com    자세히보기 </a>
</p>

<p>
 <p>
  <p>
   수정해야되는 소스코드
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   //&nbsp;최상단에&nbsp;추가
   import&nbsp;processing.serial.*;
   import&nbsp;cc.arduino.*;
   Arduino&nbsp;arduino;
   &nbsp;
   &nbsp;
   //&nbsp;상단&nbsp;수정
   int&nbsp;padX,&nbsp;padWidth;
   //&nbsp;↓&nbsp;수정&nbsp;↓&nbsp;//
   int&nbsp;padWidth;
   float&nbsp;padX&nbsp;=&nbsp;0;
   &nbsp;
   &nbsp;
   //&nbsp;setup&nbsp;추가
   println(Arduino.list());
   arduino&nbsp;=&nbsp;new&nbsp;Arduino(this,Arduino.list()[0],&nbsp;57600);
   &nbsp;
   &nbsp;
   //&nbsp;draw&nbsp;수정
   padX=mouseX;&nbsp;&nbsp;&nbsp;&nbsp;
   //&nbsp;↓&nbsp;수정&nbsp;↓&nbsp;//
   padX&nbsp;=&nbsp;map(arduino.analogRead(0),&nbsp;0,&nbsp;1023,&nbsp;0,&nbsp;400);
   if(padX&nbsp;&gt;&nbsp;300)&nbsp;padX&nbsp;=&nbsp;300;
  </p>

 </p>

</p>

<p>
 <p>기존 작성되어있는 코드에서 아두이노와 시리얼 통신 하는 부분을 추가하고, 마우스로 제어하는 부분을 가변저항의 값을 받아서 변환하는 것으로 수정하면 끝난다. 잘 되는지 직접 해보길 바란다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>소스코드에&nbsp;정답은&nbsp;없다.&nbsp;다양한&nbsp;생각이&nbsp;있듯&nbsp;다양한&nbsp;방법이&nbsp;있고,&nbsp;그&nbsp;중&nbsp;하나일&nbsp;뿐이다.</p>

</p>
