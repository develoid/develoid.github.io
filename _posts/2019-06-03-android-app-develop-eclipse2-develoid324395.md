---
layout: post
title: '"아마도 쉬운 안드로이드 어플만들기" [30] 그래픽 스타일 설정'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/324395' ; </script>


















						<div><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p><div><p><i>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</i></p><p><i>저작자는 Snails(tjdtnsu)입니다.</i></p><p><span><strong><span>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</span></strong></span></p><p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p><p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페, App Development 카페, 프그머 카페</u></p><div><span><u><strong>업로드 시간 : 매주 일요일 오후 11시</strong></u><div></div><p>&nbsp;<strong><span>난이도 : ★</span><span>★★★</span></strong><span>﻿<span>﻿</span></span></p><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿</span><span>﻿</span></span></span></div><div><span><span><span><span>﻿</span>﻿<span>﻿</span></span></span></span></div><div><span><span><span><span>이번 시간에는 7-1에서 한 circle,rect 등등을 설정하는 것 중 대표적인 것을 알아 보겠습니다.</span></span></span></span></div><p></p><p>&nbsp;</p><p>&nbsp;</p><p></p></span><div>일단 Stroke,Fill로 나누어지고</div><div>색깔은 직접 지정할 수 있습니다.</div></div><p></p><p>&nbsp;</p><p>&nbsp;</p><p></p></div><p>&nbsp;</p><table style="BORDER-BOTTOM: 0px; BORDER-LEFT: 0px; BORDER-TOP: rgb(204,204,204) 1px solid; BORDER-RIGHT: rgb(204,204,204) 1px solid" class="__se_tbl" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="BORDER-BOTTOM: 1px solid; BORDER-LEFT: 1px solid; BACKGROUND-COLOR: rgb(255,255,255); WIDTH: 740px; HEIGHT: 502px; BORDER-TOP: 0px; BORDER-RIGHT: 0px"><p>&nbsp;&nbsp;<span>﻿</span><span>&nbsp;public void onDraw(Canvas canvas) {</span><b><span>&nbsp;&nbsp;&nbsp;super.onDraw(canvas);</span><b><span>&nbsp;&nbsp;&nbsp;Paint p=new Paint();</span><b><span>&nbsp;&nbsp;&nbsp;</span><b><span>&nbsp;&nbsp;&nbsp;p.setStyle(Style.FILL);</span><b><span>&nbsp;&nbsp;&nbsp;p.setColor(Color.RED);</span><b><span>&nbsp;&nbsp;&nbsp;canvas.drawRect(0,0,100,100,p);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<span>//1</span></span><b><span>&nbsp;&nbsp;&nbsp;</span><b><span>&nbsp;&nbsp;&nbsp;p.setStyle(Style.STROKE);</span><b><span>&nbsp;&nbsp;&nbsp;p.setColor(Color.BLUE);</span><b><span>&nbsp;&nbsp;&nbsp;canvas.drawRect(0,0,100,100,p);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>//2</span></span><b><span>&nbsp;&nbsp;&nbsp;</span><b><span>&nbsp;&nbsp;&nbsp;p.setStyle(Style.FILL);</span><b><span>&nbsp;&nbsp;&nbsp;p.setColor(Color.LTGRAY);</span><b><span>&nbsp;&nbsp;&nbsp;canvas.drawCircle(50, 150, 50, p);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>//3</span></span><b><span>&nbsp;&nbsp;&nbsp;</span><b><span>&nbsp;&nbsp;&nbsp;p.setStyle(Style.FILL);</span><b><span>&nbsp;&nbsp;&nbsp;p.setColor(Color.YELLOW);</span><b><span>&nbsp;&nbsp;&nbsp;p.setTextSize(50);</span><b><span>&nbsp;&nbsp;&nbsp;canvas.drawText("Yammy",100,50,p);</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>//4</span><b><span>&nbsp;&nbsp;&nbsp;</span><b><span>&nbsp;&nbsp;&nbsp;p.setStyle(Style.STROKE);</span><b><span>&nbsp;&nbsp;&nbsp;p.setColor(Color.BLACK);</span><b><span>&nbsp;&nbsp;&nbsp;p.setStrokeWidth(1);</span><b><span>&nbsp;&nbsp;&nbsp;p.setTextSize(50);</span><b><span>&nbsp;&nbsp;&nbsp;canvas.drawText("ymmaY",100,150,p);</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<span>//5</span><b><span>&nbsp;&nbsp;&nbsp;</span><b><span>&nbsp;&nbsp;}</span></p></td></tr></tbody></table><p>&nbsp;</p><p>1번은 사각형을 빨간색으로 채우게 합니다.</p><p>2번은 사각형을 파란색으로 선을 따게 합니다.</p><p>3번은 원을 회색 비슷한 색으로 채이게 합니다.</p><p>4번은 텍스트를 크기 50으로 노란색으로 채우게 합니다.</p><p>5번은 텍스트를 크기 50으로 검은색으로 선 1으로 합니다.</p><p>&nbsp;</p><p>&nbsp;</p><p>Run 한 결과입니다.</p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131013_94%2Ftjdtnsu_1381672542526mxj95_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p><p>&nbsp;</p><p>오늘은 아주 아주 간단하게</p><p>설정을 살펴 보았습니다.</p><p>다음시간에는 그리기 객체에 대해 알아보겠습니다.</p><p>&nbsp;</p><p>&nbsp;</p><p>다음 강좌 : <a href="http://tjdtnsu.blog.me/120200279109">http://tjdtnsu.blog.me/120200279109</a></p></div>
