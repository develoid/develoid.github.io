---
layout: post
title: '[커뮤니티] 아마도 쉬운 안드로이드 어플만들기 [30] 그래픽 스타일 설정'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/324395' ; </script>

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
<p>이번 시간에는 7-1에서 한 circle,rect 등등을 설정하는 것 중 대표적인 것을 알아 보겠습니다.</p>
<p></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p></p>
<p>일단 Stroke,Fill로 나누어지고</p>
<p>색깔은 직접 지정할 수 있습니다.</p>
<p></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p></p>
<p>&nbsp;</p>
<table><tbody><tr><td ><p>&nbsp;&nbsp;﻿&nbsp;public void onDraw(Canvas canvas) {&nbsp;&nbsp;&nbsp;super.onDraw(canvas);&nbsp;&nbsp;&nbsp;Paint p=new Paint();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p.setStyle(Style.FILL);&nbsp;&nbsp;&nbsp;p.setColor(Color.RED);&nbsp;&nbsp;&nbsp;canvas.drawRect(0,0,100,100,p);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;//1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p.setStyle(Style.STROKE);&nbsp;&nbsp;&nbsp;p.setColor(Color.BLUE);&nbsp;&nbsp;&nbsp;canvas.drawRect(0,0,100,100,p);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p.setStyle(Style.FILL);&nbsp;&nbsp;&nbsp;p.setColor(Color.LTGRAY);&nbsp;&nbsp;&nbsp;canvas.drawCircle(50, 150, 50, p);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p.setStyle(Style.FILL);&nbsp;&nbsp;&nbsp;p.setColor(Color.YELLOW);&nbsp;&nbsp;&nbsp;p.setTextSize(50);&nbsp;&nbsp;&nbsp;canvas.drawText("Yammy",100,50,p);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p.setStyle(Style.STROKE);&nbsp;&nbsp;&nbsp;p.setColor(Color.BLACK);&nbsp;&nbsp;&nbsp;p.setStrokeWidth(1);&nbsp;&nbsp;&nbsp;p.setTextSize(50);&nbsp;&nbsp;&nbsp;canvas.drawText("ymmaY",100,150,p);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;//5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</p>
</td></tr></tbody></table><p>&nbsp;</p>
<p>1번은 사각형을 빨간색으로 채우게 합니다.</p>
<p>2번은 사각형을 파란색으로 선을 따게 합니다.</p>
<p>3번은 원을 회색 비슷한 색으로 채이게 합니다.</p>
<p>4번은 텍스트를 크기 50으로 노란색으로 채우게 합니다.</p>
<p>5번은 텍스트를 크기 50으로 검은색으로 선 1으로 합니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>Run 한 결과입니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131013_94%2Ftjdtnsu_1381672542526mxj95_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>오늘은 아주 아주 간단하게</p>
<p>설정을 살펴 보았습니다.</p>
<p>다음시간에는 그리기 객체에 대해 알아보겠습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>다음 강좌 : <a href="http://tjdtnsu.blog.me/120200279109">http://tjdtnsu.blog.me/120200279109</a></p>
