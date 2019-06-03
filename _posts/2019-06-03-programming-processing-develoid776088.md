---
layout: post
title: '프로세싱 응용 - 벽돌깨기 게임 만들기'
author: '시류아'
categories: Programming-Processing
tags:
- Programming
- Language
- Graphic
- Arduino
---


<script> location.href='https://cafe.naver.com/develoid/776088' ; </script>


















						<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMjZfMTQg%2FMDAxNDg1MzkzNzQ3ODQy.0hi4InYEnCJo-uDjJxIEXMuk-obUiY10MweBv_x7qZMg.hvqqmDmcC21WTjK7ikczYfan0oPMvrQ8QkYjr0QV2jkg.PNG.searphiel9%2Fprocessing_logo.png%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <div>
   프로세싱 응용
   <b>벽돌깨기 게임 만들기
  </div>
 </div>
</div>
<div>
 <p>이번에는 프로세싱으로 벽돌깨기 게임을 만들어보자, 차근차근 라켓부터 시작해서 벽돌을 만들고 플레이하는 것까지가 목표이다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   라켓 그리기
  </div>
 </div>
</div>
<div>
 <p>마우스를 이용해서 움직이는 라켓을 만들어보자</p>
</div>
<div>
 <div>
  <div>
   화면출력
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMjZfMjcg%2FMDAxNDg1MzkzOTY0ODA3.q-rMm7RfjAjW4eBpBzlglRKh39eBZBLt08sEx9Tfaqkg.Xi02jqjgv2ljiYw6FS0v6Mt9DQXnD_RF5_r2xAShJagg.PNG.searphiel9%2F1.png%22&amp;type=cafe_wa740">
  <span>라켓 제작</span>
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
   int&nbsp;padX;
   <b>int&nbsp;padWidth=200;
   <b>&nbsp;
   <b>void&nbsp;setup()&nbsp;{
   <b>&nbsp;&nbsp;size(480,&nbsp;480);&nbsp;//&nbsp;화면사이즈
   <b>&nbsp;&nbsp;stroke(255);&nbsp;//&nbsp;선&nbsp;색상
   <b>}
   <b>&nbsp;
   <b>void&nbsp;draw()&nbsp;{
   <b>&nbsp;&nbsp;background(0);
   <b>&nbsp;&nbsp;
   <b>&nbsp;&nbsp;padX&nbsp;=&nbsp;mouseX;
   <b>&nbsp;&nbsp;line(padX,&nbsp;height-50,&nbsp;padX+padWidth,&nbsp;height-50);&nbsp;//&nbsp;선&nbsp;긋기,&nbsp;마우스와&nbsp;계산식에&nbsp;따라&nbsp;위치가&nbsp;바뀐다
   <b>}
  </div>
 </div>
</div>
<div>
 <p>마우스를 좌/우로 이동하면 라켓이 같이 움직이는 것을 확인 할 수 있다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   공 그리기
  </div>
 </div>
</div>
<div>
 <p>벽돌깨기를 하려면 공이 있어야 되지 않는가? 한 번 그려보자. 공은 계속해서 움직여야되고, 배경 밖으로 벗어나려고 하면 다른 방향으로 반사되서 돌아와야된다. 그리고 라인에 부딪혀도 반사가 되어서 팅겨나가야 된다.</p>
</div>
<div>
 <div>
  <div>
   화면 출력
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMjZfNiAg%2FMDAxNDg1Mzk0MTIwNzM1.1y9WbeOMUQN-sbqDZvXpBMlkXmhMFyO8cNwyJQpfxFEg.D8_M3ENlZx92F7cjLC-d0r7IjiiVs1dFfMi32k2Rv80g.PNG.searphiel9%2F2.png%22&amp;type=cafe_wa740">
  <span>공 제작</span>
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
   int&nbsp;xPos,&nbsp;yPos;
   <b>int&nbsp;xDir,&nbsp;yDir;
   <b>int&nbsp;padX,&nbsp;padWidth;
   <b>&nbsp;
   <b>void&nbsp;setup()&nbsp;{
   <b>&nbsp;&nbsp;size(480,&nbsp;480);
   <b>&nbsp;&nbsp;xPos&nbsp;=&nbsp;yPos&nbsp;=&nbsp;10;
   <b>&nbsp;&nbsp;xDir&nbsp;=&nbsp;-2;
   <b>&nbsp;&nbsp;yDir&nbsp;=&nbsp;-3;
   <b>&nbsp;&nbsp;padX&nbsp;=&nbsp;30;
   <b>&nbsp;&nbsp;padWidth&nbsp;=&nbsp;200;
   <b>&nbsp;&nbsp;
   <b>&nbsp;&nbsp;stroke(255);
   <b>}
   <b>&nbsp;
   <b>void&nbsp;draw()&nbsp;{
   <b>&nbsp;&nbsp;background(0);&nbsp;//&nbsp;배경&nbsp;검정색
   <b>&nbsp;&nbsp;ellipse(xPos,&nbsp;yPos,&nbsp;20,&nbsp;20);&nbsp;//&nbsp;공그리기
   <b>&nbsp;&nbsp;
   <b>&nbsp;&nbsp;xPos&nbsp;+=&nbsp;xDir;&nbsp;//&nbsp;공&nbsp;이동
   <b>&nbsp;&nbsp;yPos&nbsp;+=&nbsp;yDir;
   <b>&nbsp;&nbsp;
   <b>&nbsp;&nbsp;padX&nbsp;=&nbsp;mouseX;&nbsp;//&nbsp;라켓&nbsp;이동을&nbsp;위해&nbsp;마우스&nbsp;값&nbsp;입력
   <b>&nbsp;&nbsp;line(padX,&nbsp;height-50,&nbsp;padX+padWidth,&nbsp;height-50);&nbsp;//&nbsp;라켓&nbsp;그리기
   <b>&nbsp;&nbsp;//&nbsp;공의&nbsp;벽과&nbsp;라케사,&nbsp;충돌&nbsp;감지
   <b>&nbsp;&nbsp;if(xPos&lt;10||xPos&gt;width-10)&nbsp;xDir&nbsp;*=&nbsp;-1;&nbsp;//&nbsp;좌우&nbsp;벽&nbsp;충돌&nbsp;감지&nbsp;시&nbsp;값&nbsp;역전
   <b>&nbsp;&nbsp;if(yPos&lt;0&nbsp;||&nbsp;yPos&gt;height-50&nbsp;&amp;&amp;&nbsp;xPos&gt;=padX&nbsp;&amp;&amp;&nbsp;xPos&lt;=padX+padWidth)&nbsp;yDir&nbsp;*=&nbsp;-1;
   <b>&nbsp;&nbsp;//&nbsp;상단&nbsp;충돌,&nbsp;하단&nbsp;충돌,&nbsp;라켓&nbsp;충돌&nbsp;감지&nbsp;시&nbsp;값&nbsp;역전
   <b>}
  </div>
 </div>
</div>
<div>
 <p>마우스를 움직이면 라켓이 움직이고, 공은 계속해서 움직이며 상/하/좌/우 벽과 라켓에 부딪히면 반대방향으로 반사되어 날라간다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   벽돌그리기
  </div>
 </div>
</div>
<div>
 <p>마지막 남은 것은 무엇이겠는가? 벽돌깨기에 벽돌이 없으면 섭하지 않는가? 한 번 그려보자. 배열을 이용해서 그리며, 만들어진 벽돌은 마우스 클릭을 통해 없어지도록 해보자.</p>
</div>
<div>
 <div>
  <div>
   화면출력
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMjZfMTc4%2FMDAxNDg1Mzk0MjI4MDIz.hEvuNBtzl9ChiQGZE74NK3ow-iYqSeOucKav7yNzqIMg.N99CyYhvzyJalG2-rfzJCUCMw3-TCW8Z8QtthPSWDwUg.PNG.searphiel9%2F3.png%22&amp;type=cafe_wa740">
  <span>벽돌 제작</span>
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
   int&nbsp;[][]bricks&nbsp;=&nbsp;new&nbsp;int&nbsp;[5][10];
   <b>&nbsp;
   <b>void&nbsp;setup()&nbsp;{
   <b>&nbsp;&nbsp;int&nbsp;i,&nbsp;j;
   <b>&nbsp;&nbsp;size(500,&nbsp;500);
   <b>&nbsp;&nbsp;for(i=0;i&lt;5;i++)&nbsp;{&nbsp;//&nbsp;벽돌&nbsp;위치&nbsp;값&nbsp;생성
   <b>&nbsp;&nbsp;&nbsp;&nbsp;for(j=0;j&lt;10;j++)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bricks[i][j]&nbsp;=&nbsp;1;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;
   <b>&nbsp;&nbsp;}
   <b>}
   <b>&nbsp;
   <b>void&nbsp;draw()&nbsp;{
   <b>&nbsp;&nbsp;int&nbsp;i,&nbsp;j;
   <b>&nbsp;&nbsp;background(0);
   <b>&nbsp;&nbsp;for(i=0;i&lt;5;i++)&nbsp;{&nbsp;//&nbsp;벽돌&nbsp;생성
   <b>&nbsp;&nbsp;&nbsp;&nbsp;for(j=0;j&lt;10;j++)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(bricks[i][j]&nbsp;==&nbsp;1)&nbsp;fill(255);&nbsp;//&nbsp;벽돌&nbsp;위치&nbsp;값이&nbsp;1&nbsp;일&nbsp;경우&nbsp;색상은&nbsp;힌색
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else&nbsp;fill(0);&nbsp;//&nbsp;벽돌&nbsp;위치&nbsp;값이&nbsp;0&nbsp;일&nbsp;경우&nbsp;색상은&nbsp;검정색
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rect(j*50,&nbsp;i*20,&nbsp;50,&nbsp;20);&nbsp;//&nbsp;벽돌&nbsp;그리기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;
   <b>&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;if(mousePressed)&nbsp;{&nbsp;//&nbsp;마우스&nbsp;클릭
   <b>&nbsp;&nbsp;&nbsp;&nbsp;if(bricks[mouseY/20][mouseX/50]&nbsp;==&nbsp;1)&nbsp;{&nbsp;//&nbsp;벽돌&nbsp;값이&nbsp;1일&nbsp;경우&nbsp;0으로&nbsp;변환
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bricks[mouseY/20][mouseX/50]&nbsp;=&nbsp;0;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;}
   <b>}
  </div>
 </div>
</div>
<div>
 <p>벽돌이 5x10 배열로 생성된다. 벽돌의 갯수를 조절하려면 for문의 값을 변경하면 간단하게 해결된다. 배열 값이 1이면 벽돌이 생성되고 0이면 벽돌이 사라지게 되어있기 때문에 마우스 클릭시 값이 바뀌어 벽돌이 사라진다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   벽돌깨기 완성하기
  </div>
 </div>
</div>
<div>
 <p>벽돌깨기를 만드는데 필요한 것들은 이미 다 만들었다. 이를 조합해서 벽돌깨기 게임을 완성해보자.</p>
</div>
<div>
 <div>
  <div>
   화면 출력
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMjZfMjE5%2FMDAxNDg1Mzk0MzI2MTg4.bt02Vkfsn6dGAQq16Ngsumc65I3HxGZc_ijVXXi12ngg.DEg1jmdYUOtX-dWwPkg4jCGxVHdjWdJ60VkPEeu0aTAg.PNG.searphiel9%2F4.png%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMjZfMjkz%2FMDAxNDg1Mzk0MzI2MTg5.B4rj-WK-P8fp4kD_qcwZJFJZb_2FDSTE1eCF_vsmF1Yg.vg8ZpZXeVWmq3db6mYUaWHHpPtnTRYL8nwLBYyjsMcgg.PNG.searphiel9%2F5.png%22&amp;type=cafe_wa740">
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
   int&nbsp;xPos,&nbsp;yPos;
   <b>int&nbsp;xDir,&nbsp;yDir;
   <b>int&nbsp;padX,&nbsp;padWidth;
   <b>int&nbsp;[][]bricks&nbsp;=&nbsp;new&nbsp;int[2][10];
   <b>boolean&nbsp;dead,&nbsp;play;
   <b>&nbsp;
   <b>void&nbsp;setup()&nbsp;{
   <b>&nbsp;&nbsp;size(500,&nbsp;400);
   <b>&nbsp;&nbsp;GameReset();
   <b>}
   <b>&nbsp;
   <b>void&nbsp;draw()&nbsp;{
   <b>&nbsp;&nbsp;int&nbsp;i,&nbsp;j;
   <b>&nbsp;&nbsp;background(0);
   <b>&nbsp;&nbsp;for(i=0;&nbsp;i&lt;2;&nbsp;i++)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;for(j=0;&nbsp;j&lt;10;&nbsp;j++)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(bricks[i][j]&nbsp;==&nbsp;1)&nbsp;rect(j*50,&nbsp;i*20,&nbsp;50,&nbsp;20);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;if(dead)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;text("Click&nbsp;to&nbsp;play&nbsp;again",&nbsp;10,&nbsp;height/2);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;if(mousePressed&nbsp;==&nbsp;true)&nbsp;GameReset();
   <b>&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;if(play)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;ellipse(xPos,&nbsp;yPos,&nbsp;20,&nbsp;20);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;xPos&nbsp;+=&nbsp;xDir;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;yPos&nbsp;+=&nbsp;yDir;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;padX=mouseX;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;if(padX&nbsp;&gt;&nbsp;300)&nbsp;padX&nbsp;=&nbsp;300;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;line(padX,&nbsp;height-75,&nbsp;padX+padWidth,&nbsp;height-75);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;if(xPos&lt;10&nbsp;||&nbsp;xPos&gt;width-10)&nbsp;xDir&nbsp;*=&nbsp;-1;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;if(yPos&lt;40)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(bricks[yPos/20][xPos/50]&nbsp;==&nbsp;1)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yDir&nbsp;*=&nbsp;-1;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bricks[yPos/20][xPos/50]=0;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else&nbsp;if(yPos&lt;0)&nbsp;yDir&nbsp;*=&nbsp;-1;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;
   <b>&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;if(yPos&gt;height-75&nbsp;&amp;&amp;&nbsp;xPos&gt;=padX&nbsp;&amp;&amp;&nbsp;xPos&lt;=padX+padWidth)&nbsp;yDir&nbsp;*=&nbsp;-1;
   <b>&nbsp;&nbsp;if(yPos&gt;height-10)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;dead=true;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;play=false;
   <b>&nbsp;&nbsp;}
   <b>}
   <b>&nbsp;
   <b>void&nbsp;GameReset()&nbsp;{
   <b>&nbsp;&nbsp;int&nbsp;i,&nbsp;j;
   <b>&nbsp;&nbsp;
   <b>&nbsp;&nbsp;xPos&nbsp;=&nbsp;width/2;
   <b>&nbsp;&nbsp;yPos&nbsp;=&nbsp;height/2;
   <b>&nbsp;&nbsp;
   <b>&nbsp;&nbsp;xDir=3;
   <b>&nbsp;&nbsp;yDir=4;
   <b>&nbsp;&nbsp;
   <b>&nbsp;&nbsp;padX=width;
   <b>&nbsp;&nbsp;padWidth=200;
   <b>&nbsp;&nbsp;
   <b>&nbsp;&nbsp;dead=false;
   <b>&nbsp;&nbsp;play=true;
   <b>&nbsp;&nbsp;
   <b>&nbsp;&nbsp;for(i=0;i&lt;2;i++)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;for(j=0;j&lt;10;j++)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bricks[i][j]&nbsp;=&nbsp;1;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;fill(100);
   <b>&nbsp;&nbsp;strokeWeight(5);
   <b>&nbsp;&nbsp;stroke(255);
   <b>}
  </div>
 </div>
</div>
<div>
 <p>마우스 클릭하면 벽돌 값이 바뀌는 것을 공과 값이 겹쳐지면 사라지도록 변경했다. 그리고 아래로 떨어지게 될 경우 게임 오버가 되도록 만들었다. 마지막으로 게임오버 된 경우 마우스 클릭시 다시 처음부터 시작하게 된다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <p>어떤가? 프로세싱으로 생각보다 간단하게 만들어지지 않는가? 갤러그, 테트리스 등 다양하게 쉽게 만들수 있으니 한 번 기회가 된다면 만들어보자.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <p>소스코드에는 정답은 없다. 다양한 생각이 있듯 다양한 방법이 있으며, 그 중 하나일 뿐이다.</p>
</div>
