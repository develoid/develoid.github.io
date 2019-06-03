---
layout: post
title: '프로세싱 기초 - 도형 그리기'
author: '시류아'
categories: Programming-Processing
tags:
- Programming
- Language
- Graphic
- Arduino
---


<script> location.href='https://cafe.naver.com/develoid/776087' ; </script>

<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMjRfMTc4%2FMDAxNDg1MjQxOTk5NTQy.7dFyqc_Dvx16On1h532dRDWs_0zEpvbiTyJ_g0NjHFEg.MuA30BH1Afkl_6Qfys3K77mtj9-RFCGvvBz8ZUdO-aog.PNG.searphiel9%2Fprocessing_logo.png%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <div>
   프로세싱 기초
   <b>도형 그리기
  </div>
 </div>
</div>
<div>
 <p>프로세싱에 익숙해지기 위해서 점, 선, 사각형, 삼각형, 사각형, 모래시계, 원 등 다양한 도형을 한 번 그려보자. 이미지로 불러와서 사용하면 될 것을 왜 이미지를 그리느냐? 상당히 많은 아이템들이 있다면 이미지로 가져오는 것보다 도형으로 그리는 것이 오히려 리소스를 적게 먹는다. 즉, 이미지로 대체 할 수 있는 것은 도형으로 그리는 것이 훨씬 이득이다. 그러므로 한 번 이미지를 여러가지로 그려보며 익숙해질 필요성이 있다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   결과 샘플
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMjRfOCAg%2FMDAxNDg1MjQyMDM3NTYx.9KsjfvNrqqnQ85yL1LzXg3OlfsRWclaW5x8Rc30V_jMg.QckkTUQ-_gnWX0TqZRJy_xx3KZHb5U2xDjFdTdXVEGog.PNG.searphiel9%2F1.png%22&amp;type=cafe_wa740">
  <span>샘플</span>
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
   소스코드
  </div>
 </div>
</div>
<div>
 <div>
  <div>
   void&nbsp;setup()&nbsp;{
   <b>&nbsp;&nbsp;background(0);&nbsp;
   <b>&nbsp;&nbsp;size(480,&nbsp;480);
   <b>&nbsp;&nbsp;&nbsp;stroke(255);
   <b>&nbsp;&nbsp;strokeWeight(5);
   <b>}
   <b>&nbsp;
   <b>void&nbsp;draw()&nbsp;{
   <b>&nbsp;&nbsp;point(10,&nbsp;10);&nbsp;//&nbsp;점
   <b>&nbsp;&nbsp;line(10,&nbsp;20,&nbsp;100,&nbsp;20);&nbsp;//&nbsp;선
   <b>&nbsp;&nbsp;rect(10,&nbsp;30,&nbsp;30,&nbsp;30);&nbsp;//&nbsp;사각형
   <b>&nbsp;&nbsp;triangle(10,&nbsp;80,&nbsp;10,&nbsp;150,&nbsp;100,&nbsp;150);&nbsp;//&nbsp;삼각형
   <b>&nbsp;&nbsp;quad(10,&nbsp;160,&nbsp;&nbsp;10,&nbsp;200,&nbsp;&nbsp;160,&nbsp;200,&nbsp;&nbsp;160,&nbsp;160);&nbsp;//&nbsp;사각형
   <b>&nbsp;&nbsp;quad(10,&nbsp;210,&nbsp;&nbsp;160,&nbsp;250,&nbsp;&nbsp;10,&nbsp;250,&nbsp;&nbsp;160,&nbsp;210);&nbsp;//&nbsp;모래시계
   <b>&nbsp;&nbsp;ellipse(60,&nbsp;310,&nbsp;100,&nbsp;100);&nbsp;//&nbsp;원
   <b>}
  </div>
 </div>
</div>
<div>
 <p>4 점을 연결하는 quad 함수 같은 경우 좌표 설정에 따라서 모래시계, 마름모 등 다양한 모양을 만들 수 있다. 또 라인 여러개를 연결해서도 도형을 그릴 수도 있다. 이외에도 다양하게 그릴 수 있으니 한 번 연습해보길 바란다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <p>소스코드에는 정답이 없다. 다양한 생각이 있듯 다양한 방법이 있으며, 그 중 하나일 뿐이다.</p>
</div>
