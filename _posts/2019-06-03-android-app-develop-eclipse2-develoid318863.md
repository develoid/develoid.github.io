---
layout: post
title: '"아마도 쉬운 안드로이드 어플만들기" 7-1 사각형 그리기'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/318863' ; </script>


















						<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p><div><p><i>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</i></p><p><i>저작자는 Snails(tjdtnsu)입니다.</i></p><p><span><strong><span>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</span></strong></span></p><p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p><p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페, App Development 카페, 프그머 카페</u></p><div><span><u><strong>업로드 시간 : 매주 일요일 오후 11시</strong></u><div></div><p>&nbsp;<strong><span>난이도 : ★</span><span>★★★</span></strong><span>﻿<span>﻿</span></span></p><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿</span></span></span></div><div><span><span><span><span>﻿</span>﻿<span>﻿</span></span></span></span></div><div><span><span><span><span>﻿안드로이드 상에서 그래픽을 직접 코드로 짜서 출력하는 시간입니다.</span></span></span></span></div><div><span><span><span><span><span>﻿</span>﻿<span>﻿</span></span></span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿오늘은 간단히 초록색 사각형을 그려(출력해)보겠습니다.</span></span></span></div><div><span><span><span><span>﻿</span>﻿<span>﻿</span></span></span></span></div><div><span><span><span><span>﻿</span>﻿<span>﻿</span></span></span></span></div><div><span><span><span><span>﻿</span>﻿<span>﻿</span>일단 MainActivity.java 파일을 엽니다.</span></span></span></div><p></p></span><div><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131006_185%2Ftjdtnsu_1381047373223md1VG_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></div><div>&nbsp;</div><div>그리고 그쪽에 코드를 적거나 복사합니다.</div><div>



<table class="__se_tbl" style="border-width: 1px 1px 0px 0px; border-style: solid solid none none; border-color: rgb(204, 204, 204) rgb(204, 204, 204) currentColor currentColor;" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="border-width: 0px 0px 1px 1px; border-style: none none solid solid; border-color: currentColor currentColor rgb(204, 204, 204) rgb(204, 204, 204); width: 740px; height: 480px; background-color: rgb(255, 255, 255);"><p>&nbsp;package naver.maybeeasyandroidprogramming;</p><p>import android.app.Activity;<b>import android.content.Context;<b>import android.graphics.Canvas;<b>import android.graphics.Color;<b>import android.graphics.Paint;<b>import android.os.Bundle;<b>import android.view.Menu;<b>import android.view.View;</p><p>public class MainActivity extends Activity {</p><p>&nbsp;@Override<b>&nbsp;protected void onCreate(Bundle savedInstanceState) {<b>&nbsp;&nbsp;super.onCreate(savedInstanceState);<b>&nbsp;&nbsp;setContentView(R.layout.activity_main);<b>&nbsp;<span>&nbsp;MyView test = new MyView(this);</span><b><span>&nbsp;&nbsp;setContentView(test);</span><b>&nbsp;}<b>&nbsp;<b>&nbsp;<span>protected class MyView extends View {</span><b><span>&nbsp;&nbsp;public MyView(Context context) {</span><b><span>&nbsp;&nbsp;&nbsp;super(context);</span><b><span>&nbsp;&nbsp;}</span></p><p><span>&nbsp;&nbsp;public void onDraw(Canvas canvas) {</span><b><span>&nbsp;&nbsp;&nbsp;canvas.drawColor(Color.LTGRAY);</span><b><span>&nbsp;&nbsp;&nbsp;Paint p= new Paint();</span><b><span>&nbsp;&nbsp;&nbsp;p.setColor(Color.GREEN);</span><b><span>&nbsp;&nbsp;&nbsp;canvas.drawRect(100,100,200,300,p);</span><b><span>&nbsp;&nbsp;}</span><b><span>&nbsp;}</span></p><p><span>&nbsp;</span></p><p>}&nbsp;</p></td></tr></tbody></table><p>&nbsp;</p><p>&nbsp;</p><p>그리고 실행합니다.</p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131006_203%2Ftjdtnsu_13810486821594epLq_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p></div><div>&nbsp;</div><div>제대로 실행되었네요.</div><div>&nbsp;</div><div>&nbsp;</div><div>참고로&nbsp;canvas.drawRect(100,100,200,300,p);&nbsp;부분은 다른 것으로 대체가 가능합니다.</div><div>&nbsp;</div><div>canvas.drawPoing(x,y,p) : 점</div><div>canvas.drawLine(x1,y1,x2,y2,p) : 선</div><div><div>canvas.drawRect(x1,y1,x2,y2,p) : 사각형</div><div><div>canvas.drawCircle(x1,y1,r,p) : 원</div><div>canvas.drawPath(path,p) : 패스</div><div>canvas.drawBitmap(bitmap,x,y,p) : 비트맵</div><div>&nbsp;</div><div>등등이 있습니다.</div><div>&nbsp;</div><div>또&nbsp;&nbsp;&nbsp;p.setColor(Color.GREEN);<span> 부분은 색깔이라는 건 아시겠죠?</span></div><div><span><span>﻿</span>﻿<span>﻿</span></span></div><div><span><span>﻿</span>﻿<span>﻿</span></span></div><div><span><span>﻿</span>﻿<span>﻿</span></span></div><div><span><span>﻿</span>﻿<span>﻿</span>다음은 그래픽을 그릴 때의 설정을 알아보겠습니다.</span></div></div></div></div><p></p></div>
