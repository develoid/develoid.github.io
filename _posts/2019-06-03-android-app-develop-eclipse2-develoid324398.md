---
layout: post
title: '[커뮤니티] 아마도 쉬운 안드로이드 어플만들기 [31] 그리기 객체'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/324398' ; </script>

<p>&nbsp;</p>
<p></p>
<p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페, App Development 카페, 프그머 카페</u></p>
<p><u>업로드 시간 : 매주 일요일 오후 11시</u><p></p>
<p>&nbsp;난이도 : ★★★★﻿﻿</p>
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
<p>이번 시간에는 그리기 객체를 이용해서 뭔가를 그려보겠습니다.</p>
<p>﻿﻿﻿오늘은 3가지를 다뤄 볼 텐데 그 세가지는 비트맵, 텍스트, 패스가 있습니다.</p>
<p>﻿﻿﻿</p>
<p>﻿﻿일단 코드와 실행 사진을 보여드리겠습니다.﻿﻿﻿</p>
<p></p>
<p>&nbsp;</p>
<p></p>
<p><table><tbody><tr><td ><p>&nbsp;package naver.maybeeasyandroidprogramming;</p>
<p>import android.app.Activity;import android.content.Context;import android.content.res.Resources;import android.graphics.Bitmap;import android.graphics.Canvas;import android.graphics.Color;import android.graphics.Paint;import android.graphics.Path;import android.graphics.Rect;import android.graphics.drawable.BitmapDrawable;import android.os.Bundle;import android.view.Display;import android.view.Menu;import android.view.View;import android.view.WindowManager;</p>
<p>public class MainActivity extends Activity {&nbsp;&nbsp;int width;&nbsp;int height;</p>
<p>&nbsp;@SuppressWarnings("deprecation")&nbsp;@Override&nbsp;protected void onCreate(Bundle savedInstanceState) {&nbsp;&nbsp;super.onCreate(savedInstanceState);&nbsp;&nbsp;MyView test = new MyView(this);&nbsp;&nbsp;Display display = ((WindowManager)getSystemService(WINDOW_SERVICE)).getDefaultDisplay();&nbsp;&nbsp;width=display.getWidth();&nbsp;&nbsp;height=display.getHeight();&nbsp;&nbsp;setContentView(test);&nbsp;}&nbsp;&nbsp;protected class MyView extends View {&nbsp;&nbsp;public MyView(Context context) {&nbsp;&nbsp;&nbsp;super(context);&nbsp;&nbsp;}</p>
<p>&nbsp;&nbsp;public void onDraw(Canvas canvas) {&nbsp;&nbsp;&nbsp;super.onDraw(canvas);&nbsp;&nbsp;&nbsp;Path path = new Path();&nbsp;&nbsp;&nbsp;Paint p=new Paint();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resources res = getResources();&nbsp;&nbsp;&nbsp;BitmapDrawable bd = (BitmapDrawable)res.getDrawable(R.drawable.nofile);&nbsp;&nbsp;&nbsp;Bitmap bit = bd.getBitmap();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;canvas.drawBitmap(bit, 10,10,null);&nbsp;&nbsp;&nbsp;canvas.drawBitmap(bit, null, new Rect(0,500,width,700),null);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String ws = String.valueOf(width);&nbsp;&nbsp;&nbsp;String hs = String.valueOf(height);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p.setColor(Color.RED);&nbsp;&nbsp;&nbsp;p.setTextSize(20);&nbsp;&nbsp;&nbsp;p.setTextAlign(Paint.Align.LEFT);&nbsp;&nbsp;&nbsp;canvas.drawText(ws,100,200,p);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p.setColor(Color.BLUE);&nbsp;&nbsp;&nbsp;p.setTextAlign(Paint.Align.CENTER);&nbsp;&nbsp;&nbsp;p.setAntiAlias(true);&nbsp;&nbsp;&nbsp;canvas.drawText(hs,100,230,p);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p.setColor(Color.BLACK);&nbsp;&nbsp;&nbsp;p.setStrokeWidth(7);&nbsp;&nbsp;&nbsp;p.setStyle(Paint.Style.STROKE);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path.addCircle(50,300,40,Path.Direction.CW);&nbsp;&nbsp;&nbsp;path.addRect(100,280,150,330,Path.Direction.CW);&nbsp;&nbsp;&nbsp;path.moveTo(180,300);&nbsp;&nbsp;&nbsp;path.lineTo(190,320);&nbsp;&nbsp;&nbsp;path.rLineTo(50,20);&nbsp;&nbsp;&nbsp;path.cubicTo(240,340,260,380,300,300);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;canvas.drawPath(path, p);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;}</p>
<p>&nbsp;@Override&nbsp;public boolean onCreateOptionsMenu(Menu menu) {&nbsp;&nbsp;// Inflate the menu; this adds items to the action bar if it is present.&nbsp;&nbsp;getMenuInflater().inflate(R.menu.main, menu);&nbsp;&nbsp;return true;&nbsp;}</p>
<p>}&nbsp;</p>
</td></tr></tbody></table><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131020_249%2Ftjdtnsu_1382275978851zGq5W_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>일단 비트맵 설명드리겠습니다.</p>
<p>&nbsp;&nbsp;&nbsp;Resources res = getResources();&nbsp;&nbsp;&nbsp;BitmapDrawable bd = (BitmapDrawable)res.getDrawable(R.drawable.nofile);&nbsp;&nbsp;&nbsp;Bitmap bit = bd.getBitmap();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;canvas.drawBitmap(bit, 10,10,null);&nbsp;&nbsp;&nbsp;canvas.drawBitmap(bit, null, new Rect(0,500,width,700),null);일단 리소스를 가져와서 비트맵을 다음과 같이 정렬시킵니다.</p>
<p>위에는 (10,10)에서 원본 크기에 그립니다.</p>
<p>그 다음에는 (0,500)에서 (width,700)까지 그립니다.</p>
<p>&nbsp;</p>
<p>참고로 width는 위에서 정의한 변수입니다.</p>
<p>&nbsp;&nbsp;Display display = ((WindowManager)getSystemService(WINDOW_SERVICE)).getDefaultDisplay();&nbsp;&nbsp;width=display.getWidth();&nbsp;&nbsp;height=display.getHeight();</p>
<p>위는 windowmanager를 이용해 디바이스의 폭과 너비를 구하는 겁니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>그 다음에는 텍스트입니다.</p>
<p>&nbsp;&nbsp;&nbsp;String ws = String.valueOf(width);&nbsp;&nbsp;&nbsp;String hs = String.valueOf(height);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p.setColor(Color.RED);&nbsp;&nbsp;&nbsp;p.setTextSize(20);&nbsp;&nbsp;&nbsp;p.setTextAlign(Paint.Align.LEFT);&nbsp;&nbsp;&nbsp;canvas.drawText(ws,100,200,p);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p.setColor(Color.BLUE);&nbsp;&nbsp;&nbsp;p.setTextAlign(Paint.Align.CENTER);&nbsp;&nbsp;&nbsp;p.setAntiAlias(true);&nbsp;&nbsp;&nbsp;canvas.drawText(hs,100,230,p);</p>
<p>&nbsp;</p>
<p>위에는 빨간색에 왼쪽정렬, (100,200)에 나타나고</p>
<p>아래것은 파란색에 알리아싱을 적용하고 가운데 정렬에 (100,230)을 나타내는 겁니다.</p>
<p>텍스트는 직접 입력하거나 string 형태로 하기 때문에 int형에서 바꾸었습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>마지막으로 패스입니다. 약간 어렵긴 합니다.</p>
<p>&nbsp;&nbsp;&nbsp;p.setColor(Color.BLACK);&nbsp;&nbsp;&nbsp;p.setStrokeWidth(7);&nbsp;&nbsp;&nbsp;p.setStyle(Paint.Style.STROKE);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path.addCircle(50,300,40,Path.Direction.CW);&nbsp;&nbsp;&nbsp;path.addRect(100,280,150,330,Path.Direction.CW);&nbsp;&nbsp;&nbsp;path.moveTo(180,300);&nbsp;&nbsp;&nbsp;path.lineTo(190,320);&nbsp;&nbsp;&nbsp;path.rLineTo(50,20);&nbsp;&nbsp;&nbsp;path.cubicTo(240,340,260,380,300,300);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;canvas.drawPath(path, p);</p>
<p>일단 검정색 폭 7로 출발합니다.</p>
<p>일단 원을 그리고 그 옆에 사각형을 그립니다.</p>
<p>그리고 직접 따는 방법이 있는데</p>
<p>&nbsp;</p>
<p>180,300-&gt;190,320-&gt;240,340으로 직선으로 연결 되는데타원형으로 또 그리는것은 너무 복잡해 생략하겠습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>다음 시간에는 그라이던트를 하겠습니다.</p>
<p>&nbsp;</p>
<p></p>
<p>&nbsp;</p>
<p></p>
</p>
