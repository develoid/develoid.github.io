---
layout: post
title: '[커뮤니티] 프로세싱 기초 - 자주 사용하는 함수 정리'
author: '시류아'
categories: Programming-Processing
tags:
- Programming
- Language
- Graphic
- Arduino
---


<script> location.href='https://cafe.naver.com/develoid/776086' ; </script>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMjRfNjcg%2FMDAxNDg1MjM5MjcyMDkx.8NnpKR1RW-0S80KQ5RC8lxzmjT-JsDzgAcB75gSqPmYg.lHEv9th1bjFk-cMvrZ_7J-jbTdRmxf_zHDdpQ7I3i4Qg.PNG.searphiel9%2Fprocessing_logo.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>
  <p>
   프로세싱 기초
   자주 사용하는 함수 정리
  </p>

 </p>

</p>

<p>
 <p>프로세싱에서 자주 사용하는 기초 함수들을 한 번 살펴보자, 설명에 앞서서 프로세싱은 좌표계를 이용하고 있으며, 설명 상 약어료 W(width, 너비), H(height, 높이), X(가로좌표), Y(세로좌표)로 요약한다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   setup
  </p>

 </p>

</p>

<p>
 <p>처음&nbsp;시작&nbsp;할&nbsp;때&nbsp;한&nbsp;번만&nbsp;실행하는&nbsp;것들을 모아놓는 함수이다.</p>

</p>

<p>
 <p>
  <p>
   setup()&nbsp;{}
  </p>

 </p>

</p>

<p>
 <p>
  <p>
    draw
  </p>

 </p>

</p>

<p>
 <p>반복해서 실행 되는 것들을 모아놓는 루프 함수이다.</p>

</p>

<p>
 <p>
  <p>
   draw()&nbsp;{}
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   size
  </p>

 </p>

</p>

<p>
 <p>화면의 크기를 지정하는 함수이다.</p>

</p>

<p>
 <p>
  <p>
   size(W,&nbsp;H);

   //&nbsp;ex&nbsp;//
   size(360,&nbsp;240);
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
   background
  </p>

 </p>

</p>

<p>
 <p>뒷 배경 색상을 지정한다. 0~255까지의 색상 밝기로도 가능하며, RGB / 웹컬러 등으로도 가능하다.</p>

</p>

<p>
 <p>
  <p>
   background(color);
   background(webcolor);
   background(r,&nbsp;g,&nbsp;b);

   //&nbsp;ex&nbsp;//
   background(0);
   background(#000000);
   background(255,&nbsp;255,&nbsp;255);
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   strokeWeight
  </p>

 </p>

</p>

<p>
 <p>점과 선의 두께를 설정한다.</p>

</p>

<p>
 <p>
  <p>
   strokeWeight(size);

   //&nbsp;ex&nbsp;//
   strokeWeight(10);
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   stroke
  </p>

 </p>

</p>

<p>
 <p>점과 선의 색상 설정, 0~255 까지 색상 밝기 또는 RGB / 웹컬러 등으로 설정 할 수 있다.</p>

</p>

<p>
 <p>
  <p>
   stroke(color);
   stroke(webcolor);
   stroke(r,&nbsp;g,&nbsp;b);

   //&nbsp;ex&nbsp;//
   stroke(0);
   stroke(#000000);
   stroke(255,&nbsp;127,&nbsp;0);
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
   point
  </p>

 </p>

</p>

<p>
 <p>해당 좌표에 점을 찍는다.</p>

</p>

<p>
 <p>
  <p>
   point(x,&nbsp;y);

   //&nbsp;ex&nbsp;//
   point(10,&nbsp;10);
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   line
  </p>

 </p>

</p>

<p>
 <p>해당 좌표에 선을 긋는다. X1/Y1 은 첫 번째 점, X2/Y2는 두 번째 점의 위치 좌표이다.</p>

</p>

<p>
 <p>
  <p>
   line(x1,&nbsp;y1,&nbsp;x2,&nbsp;y2);

   //&nbsp;ex&nbsp;//
   line(10,&nbsp;10,&nbsp;50,&nbsp;50);
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   rect
  </p>

 </p>

</p>

<p>
 <p>해당 좌표를 기준으로 사각형을 그린다. X/Y는 왼쪽 위의 시작 점, W/H 는 크기이다.</p>

</p>

<p>
 <p>
  <p>
   rect(X,&nbsp;Y,&nbsp;W,&nbsp;H);

   //&nbsp;ex&nbsp;//
   rect(10,&nbsp;10,&nbsp;50,&nbsp;50);
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   triangle
  </p>

 </p>

</p>

<p>
 <p>해당 좌표들을 잇는 삼각형을 그린다.</p>

</p>

<p>
 <p>
  <p>
   triangle(x1,&nbsp;y1,&nbsp;x2,&nbsp;y2,&nbsp;x3,&nbsp;y3);

   //&nbsp;ex&nbsp;//
   triangle(50,50,0,0,100,0);
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   quad
  </p>

 </p>

</p>

<p>
 <p>해당 좌표들을 잇는 사각형을 그린다.</p>

</p>

<p>
 <p>
  <p>
   quad(x1,&nbsp;y1,&nbsp;x2,&nbsp;y2,&nbsp;x3,&nbsp;y3,&nbsp;x4,&nbsp;y4);

   //&nbsp;ex&nbsp;//
   quad(0,0,50,0,0,50,50,50);
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   ellipse
  </p>

 </p>

</p>

<p>
 <p>해당 좌표를 기준으로 원을 그린다. X/Y 는 원의 중앙 좌표이며, W/H 는 크기이다.</p>

</p>

<p>
 <p>
  <p>
   ellipse(x,&nbsp;y,&nbsp;w,&nbsp;h);

   //&nbsp;ex&nbsp;//
   ellipse(10,&nbsp;10,&nbsp;50,&nbsp;50);
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   Text
  </p>

 </p>

</p>

<p>
 <p>X/Y 좌표에 글자를 작성한다.</p>

</p>

<p>
 <p>
  <p>
   text(TEXT,&nbsp;X,&nbsp;Y);

   //&nbsp;ex&nbsp;//
   text(“TEST”,&nbsp;20,&nbsp;20);
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
   PImage
  </p>

 </p>

</p>

<p>
 <p>PNG, JPG 등 이미지 파일을 가져온다.</p>

</p>

<p>
 <p>
  <p>
   PImage&nbsp;img;
   img&nbsp;=&nbsp;loadImage("test.jpg");
   image(img,&nbsp;0,&nbsp;0);
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   PFont
  </p>

 </p>

</p>

<p>
 <p>VLW 폰트 파일을 가져온다.</p>

</p>

<p>
 <p>
  <p>
   PFont&nbsp;font;
   font&nbsp;=&nbsp;loadFont("test.vlw");
   textFont(font);
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   PShape
  </p>

 </p>

</p>

<p>
 <p>SVG 등 벡터 파일을 가져온다.</p>

</p>

<p>
 <p>
  <p>
   PShape&nbsp;svg;
   svg&nbsp;=&nbsp;loadShape("test.svg");
   shape(test&nbsp;0,&nbsp;0);
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
   Mouse Position
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   mouseX&nbsp;//&nbsp;마우스&nbsp;포인터의&nbsp;현재&nbsp;X&nbsp;좌표
   mouseY&nbsp;//&nbsp;마우스&nbsp;포인터의&nbsp;현재&nbsp;Y&nbsp;좌표
   pmouseX&nbsp;//&nbsp;마우스&nbsp;포인터의&nbsp;이전&nbsp;X&nbsp;좌표
   pmouseY&nbsp;//&nbsp;마우스&nbsp;포인터의&nbsp;이전&nbsp;Y&nbsp;좌표
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   mousePressed
  </p>

 </p>

</p>

<p>
 <p>마우스 클릭 감지 함수</p>

</p>

<p>
 <p>
  <p>
   void&nbsp;mousePressed()&nbsp;{
   &nbsp;&nbsp;...
   }
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   Mause Parameter
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   mouseMoved&nbsp;//&nbsp;마우스&nbsp;움직일&nbsp;때
   mouseDragged&nbsp;//&nbsp;마우스&nbsp;드래그&nbsp;할&nbsp;때
   mouseWheel&nbsp;//&nbsp;마우스&nbsp;휠&nbsp;움직일&nbsp;때
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
   keyPressed
  </p>

 </p>

</p>

<p>
 <p>키보드 입력 감지 함수이다.</p>

</p>

<p>
 <p>
  <p>
   void&nbsp;keyPressed()&nbsp;{
   &nbsp;&nbsp;...
   }
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   KeyReleased
  </p>

 </p>

</p>

<p>
 <p>키보드가 띄어지면 실해되는 함수이다.</p>

</p>

<p>
 <p>
  <p>
   void&nbsp;keyReleased()&nbsp;{
   &nbsp;&nbsp;...
   }
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   Keyboard Parameter
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   keyPressed&nbsp;//&nbsp;키보드&nbsp;입력&nbsp;감지
   key&nbsp;==&nbsp;''&nbsp;//&nbsp;키보드&nbsp;입력&nbsp;값&nbsp;저장&nbsp;변수
   keyCode&nbsp;==&nbsp;"KEY"&nbsp;//&nbsp;Ctrl,&nbsp;Shift,&nbsp;Up,&nbsp;Down,&nbsp;Left,&nbsp;Right&nbsp;등&nbsp;특수키&nbsp;입력
   //&nbsp;ex&nbsp;//&nbsp;keyCode&nbsp;==&nbsp;CONTROL
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
   Frame (FPS)
  </p>

 </p>

</p>

<p>
 <p>
  <p>
   frameCount&nbsp;//&nbsp;현재&nbsp;프레임&nbsp;번호
   framerRate&nbsp;//&nbsp;초당&nbsp;프레임&nbsp;개수
  </p>

 </p>

</p>

<p>
 <p></p>

</p>
