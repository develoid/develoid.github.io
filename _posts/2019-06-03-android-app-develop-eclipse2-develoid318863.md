---
layout: post
title: '[커뮤니티] 아마도 쉬운 안드로이드 어플만들기 7-1 사각형 그리기'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/318863' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p>
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
<p>﻿안드로이드 상에서 그래픽을 직접 코드로 짜서 출력하는 시간입니다.</p>
<p>﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿오늘은 간단히 초록색 사각형을 그려(출력해)보겠습니다.</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿일단 MainActivity.java 파일을 엽니다.</p>
<p></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131006_185%2Ftjdtnsu_1381047373223md1VG_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>그리고 그쪽에 코드를 적거나 복사합니다.</p>
<p>



<table><tbody><tr><td ><p>&nbsp;package naver.maybeeasyandroidprogramming;</p>
<p>import android.app.Activity;import android.content.Context;import android.graphics.Canvas;import android.graphics.Color;import android.graphics.Paint;import android.os.Bundle;import android.view.Menu;import android.view.View;</p>
<p>public class MainActivity extends Activity {</p>
<p>&nbsp;@Override&nbsp;protected void onCreate(Bundle savedInstanceState) {&nbsp;&nbsp;super.onCreate(savedInstanceState);&nbsp;&nbsp;setContentView(R.layout.activity_main);&nbsp;&nbsp;MyView test = new MyView(this);&nbsp;&nbsp;setContentView(test);&nbsp;}&nbsp;&nbsp;protected class MyView extends View {&nbsp;&nbsp;public MyView(Context context) {&nbsp;&nbsp;&nbsp;super(context);&nbsp;&nbsp;}</p>
<p>&nbsp;&nbsp;public void onDraw(Canvas canvas) {&nbsp;&nbsp;&nbsp;canvas.drawColor(Color.LTGRAY);&nbsp;&nbsp;&nbsp;Paint p= new Paint();&nbsp;&nbsp;&nbsp;p.setColor(Color.GREEN);&nbsp;&nbsp;&nbsp;canvas.drawRect(100,100,200,300,p);&nbsp;&nbsp;}&nbsp;}</p>
<p>&nbsp;</p>
<p>}&nbsp;</p>
</td></tr></tbody></table><p>&nbsp;</p>
<p>&nbsp;</p>
<p>그리고 실행합니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131006_203%2Ftjdtnsu_13810486821594epLq_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>제대로 실행되었네요.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>참고로&nbsp;canvas.drawRect(100,100,200,300,p);&nbsp;부분은 다른 것으로 대체가 가능합니다.</p>
<p>&nbsp;</p>
<p>canvas.drawPoing(x,y,p) : 점</p>
<p>canvas.drawLine(x1,y1,x2,y2,p) : 선</p>
<p>canvas.drawRect(x1,y1,x2,y2,p) : 사각형</p>
<p>canvas.drawCircle(x1,y1,r,p) : 원</p>
<p>canvas.drawPath(path,p) : 패스</p>
<p>canvas.drawBitmap(bitmap,x,y,p) : 비트맵</p>
<p>&nbsp;</p>
<p>등등이 있습니다.</p>
<p>&nbsp;</p>
<p>또&nbsp;&nbsp;&nbsp;p.setColor(Color.GREEN); 부분은 색깔이라는 건 아시겠죠?</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿다음은 그래픽을 그릴 때의 설정을 알아보겠습니다.</p>
</p>
<p></p>
