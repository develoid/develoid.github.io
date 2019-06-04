---
layout: post
title: '"아마도 쉬운 안드로이드 어플만들기" [32] 그라디언트(1)'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/327500' ; </script>

<p></p>
<p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p><strong>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</strong></p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페</u></p>
<p><u><strong>업로드 시간 : 매주 일요일 오후 11시</strong></u><p></p>
<p>&nbsp;<strong>난이도 : ★★★★</strong>﻿﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿</p>
<p>﻿﻿﻿</p>
<p>오늘은 이해하면 쉬운 그라디언트를 해보겠습니다.</p>
<p>﻿﻿﻿그 중에서도 이번 시간에는 직선 그라디언트입니다.﻿﻿﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿(책에는 그래디언트라고 나와 있는데 뭐 똑같다고 칩시다&lt;&lt;퍽)</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿이번 시간에 가장 중요한 명령어는 </p>
<p>﻿﻿﻿LinearGradient(x1,y1,x2,y2,color1,color2,TileMode)﻿﻿﻿</p>
<p>﻿﻿﻿입니다. 뭐 간단하고도 어려운데 예제를 통해 해보겠습니다.</p>
<p>﻿﻿﻿ <table><tbody><tr><td ><p>&nbsp;package naver.maybeeasyandroidprogramming;</p>
<p>import android.app.Activity;import android.content.Context;import android.graphics.Canvas;import android.graphics.Color;import android.graphics.LinearGradient;import android.graphics.Paint;import android.graphics.Shader.TileMode;import android.os.Bundle;import android.view.Display;import android.view.Menu;import android.view.View;import android.view.WindowManager;</p>
<p>public class MainActivity extends Activity {&nbsp;&nbsp;int width;&nbsp;int height;</p>
<p>&nbsp;@SuppressWarnings("deprecation")&nbsp;@Override&nbsp;protected void onCreate(Bundle savedInstanceState) {&nbsp;&nbsp;super.onCreate(savedInstanceState);&nbsp;&nbsp;MyView test = new MyView(this);&nbsp;&nbsp;Display display = ((WindowManager)getSystemService(WINDOW_SERVICE)).getDefaultDisplay();&nbsp;&nbsp;width=display.getWidth();&nbsp;&nbsp;height=display.getHeight();&nbsp;&nbsp;setContentView(test);&nbsp;}&nbsp;&nbsp;protected class MyView extends View {&nbsp;&nbsp;public MyView(Context context) {&nbsp;&nbsp;&nbsp;super(context);&nbsp;&nbsp;}</p>
<p>&nbsp;&nbsp;public void onDraw(Canvas canvas) {&nbsp;&nbsp;&nbsp;super.onDraw(canvas);&nbsp;&nbsp;&nbsp;Paint p=new Paint();&nbsp;&nbsp;&nbsp;p.setAntiAlias(true);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int[] colors = {Color.BLUE,Color.GREEN,Color.RED,Color.YELLOW,Color.WHITE};&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p.setShader(new LinearGradient(0,0,100,0,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Color.BLUE,Color.GREEN,TileMode.CLAMP));&nbsp;&nbsp;&nbsp;canvas.drawRect(0, 0,100,100,p);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p.setShader(new LinearGradient(110,0,210,100,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Color.BLUE,Color.YELLOW,TileMode.CLAMP));&nbsp;&nbsp;&nbsp;canvas.drawRect(110,0,210,100,p);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p.setShader(new LinearGradient(0,0,50,0,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Color.GREEN,Color.YELLOW,TileMode.CLAMP));&nbsp;&nbsp;&nbsp;canvas.drawRect(0,110,210,150,p);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p.setShader(new LinearGradient(0,0,50,0,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Color.GREEN,Color.WHITE,TileMode.REPEAT));&nbsp;&nbsp;&nbsp;canvas.drawRect(0,160,210,200,p);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p.setShader(new LinearGradient(0,0,50,0,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Color.YELLOW,Color.RED,TileMode.MIRROR));&nbsp;&nbsp;&nbsp;canvas.drawRect(0,210,210,250,p);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p.setShader(new LinearGradient(0,0,210,0,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colors,null,TileMode.CLAMP));&nbsp;&nbsp;&nbsp;canvas.drawRect(0,260,210,300,p);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</p>
<p>&nbsp;@Override&nbsp;public boolean onCreateOptionsMenu(Menu menu) {&nbsp;&nbsp;// Inflate the menu; this adds items to the action bar if it is present.&nbsp;&nbsp;getMenuInflater().inflate(R.menu.main, menu);&nbsp;&nbsp;return true;&nbsp;}</p>
<p>}&nbsp;</p>
</td></tr></tbody></table><p>&nbsp;</p>
<p>여기 6가지의 예가 있습니다.&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131027_41%2Ftjdtnsu_13828641491108F5ND_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740">&nbsp;</p>
<p>이것이 실행 결과인데 이제 하나씩 알아보겠습니다.﻿﻿﻿﻿﻿&nbsp;</p>
<p>﻿</p>
<p>﻿﻿﻿</p>
<p>&nbsp;&nbsp;&nbsp;p.setShader(new LinearGradient(0,0,100,0,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Color.BLUE,Color.GREEN,TileMode.CLAMP));&nbsp;&nbsp;&nbsp;canvas.drawRect(0, 0,100,100,p);﻿﻿﻿</p>
<p>&nbsp;</p>
<p>파란색-&gt;초록색으로 변해가는 그라이언트입니다.</p>
<p>제일 간단한 형태입니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp;p.setShader(new LinearGradient(110,0,210,100,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Color.BLUE,Color.YELLOW,TileMode.CLAMP));&nbsp;&nbsp;&nbsp;canvas.drawRect(110,0,210,100,p);</p>
<p>&nbsp;</p>
<p>여기서는 북서쪽에는 파란색, 남동쪽에는 노란색으로 그라이언트 처리가 됩니다.</p>
<p>방향의 차이는</p>
<p>LinearGradient(<strong>x1,y1,x2,y2</strong>,color1,color2,TileMode)</p>
<p>에서 납니다.</p>
<p>&nbsp;</p>
<p>간단히 그림으로 설명하자면</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131027_94%2Ftjdtnsu_1382864421664KpcEb_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>뭐 그렇다는 겁니다. (x1,y1)에는 첫번째 색깔이, (x2,y2)에는 두번째 색깔이 들어가게 해서 방향을 지정하는 겁니다.</p>
<p>이 부분이 좀 어렵다는 겁니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp;p.setShader(new LinearGradient(0,0,50,0,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Color.GREEN,Color.YELLOW,TileMode.CLAMP));&nbsp;&nbsp;&nbsp;canvas.drawRect(0,110,210,150,p);</p>
<p>세 번째 코드입니다.</p>
<p>꼬리부분을 그대로 노란색으로 남겨두는 겁니다.</p>
<p>위에서 설명했으므로 생략</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp;p.setShader(new LinearGradient(0,0,50,0,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Color.GREEN,Color.WHITE,TileMode.REPEAT));&nbsp;&nbsp;&nbsp;canvas.drawRect(0,160,210,200,p);</p>
<p>&nbsp;</p>
<p>네 번째는 반복하게 합니다.</p>
<p>TileMode가 REPEAT로 바뀌었는데 그것은 끝난 자리부터 다시 시작하라는 겁니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp;p.setShader(new LinearGradient(0,0,50,0,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Color.YELLOW,Color.RED,TileMode.MIRROR));&nbsp;&nbsp;&nbsp;canvas.drawRect(0,210,210,250,p);</p>
<p>&nbsp;</p>
<p>다섯번째 코드인데 이것은 TileMode가 MIRROR입니다. 그것은 끝난 자리부터 반대로 처음으로 출력하게 하는 방법입니다.</p>
<p>일반적으로 REPEAT보다 보기 좋군요.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp;int[] colors = {Color.BLUE,Color.GREEN,Color.RED,Color.YELLOW,Color.WHITE};</p>
<p>&nbsp;&nbsp;&nbsp;p.setShader(new LinearGradient(0,0,210,0,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colors,null,TileMode.CLAMP));&nbsp;&nbsp;&nbsp;canvas.drawRect(0,260,210,300,p);</p>
<p>&nbsp;</p>
<p>마지막 코드입니다. 이번에는 color라는 int를 주고, 그렇게 차례차례 출력하는 겁니다.</p>
<p>위에서 두개의 색상밖에 못 넣은 단점을 해소합니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>다음은 원형 그라이언트 (코드)에 대해 알아보겠습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
</p>

