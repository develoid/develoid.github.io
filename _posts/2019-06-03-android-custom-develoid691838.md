---
layout: post
title: '[커뮤니티] (Root) build.prop을 이용한 볼륨 세분화 하기'
author: 'Shine yongs'
categories: Android-Custom
tags:
- Android
- Custom
-
-
---


<script> location.href='https://cafe.naver.com/develoid/691838' ; </script>

<p>안녕하세요 ?? Shine yongs입니다.며칠전 XDA 둘려보다가 괜찮은 팁이 있어 써 봅니다.원본<a href="https://www.xda-developers.com/how-to-add-more-steps-to-your-volume-slider-root/">https://www.xda-developers.com/how-to-add-more-steps-to-your-volume-slider-root/</a>준비물 루팅 된 폰, Kernel Adiutor 또는 Build prop Editor-App Download-Build prop Editor<a href="https://play.google.com/store/apps/details?id=com.jrummy.apps.build.prop.editor">https://play.google.com/store/apps/details?id=com.jrummy.apps.build.prop.editor</a>Kernel Adiutor<a href="https://play.google.com/store/apps/details?id=com.grarak.kerneladiutor">https://play.google.com/store/apps/details?id=com.grarak.kerneladiutor</a>Build prop Editor 이용해 불륨 세분화 하기실행하면 오른쪽 연필 아이콘 누릅니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fstatic.naver.net%2Fblank.gif%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMTVfMjIw%2FMDAxNDg3MTQ3Mjc1OTg3.oIaRmV_KzPkiKZWnWG__4WEf-OmZJwpnKyW2kpqTpjQg.ux8AQ6c17wiUlxE-psmIqmpzig1Domci4qIcecI0XFcg.PNG.yongs2008%2FScreenshot_20170215-171800.png%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fstatic.naver.net%2Fblank.gif%22&amp;type=cafe_wa740"></p>
<p>그리고 이렇게 입력합니다<a href="http://ro.config.media_vol_steps=30">ro.config.media_vol_steps</a><a href="http://ro.config.media_vol_steps=30">=</a><a href="http://ro.config.media_vol_steps=30">30</a> //미디어 볼륨 세분화 (끝 숫자 부분은 사용자 마음데로 조정)<a href="http://ro.config.vc_call_vol_steps=14">ro.config.vc_call_vol_steps=14</a> //통화 볼륨 세분화 (끝 숫자 부분은 사용자 마음데로 조정)저는 미디어 볼륨만 했습니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fstatic.naver.net%2Fblank.gif%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMTVfMTkw%2FMDAxNDg3MTQ3Mjc1NjI2.kLjE-ukyVKEx_bC0uQWTMDHa1jpv91OJxU9zs31yPSMg.a9IXof5k4ggUiQTJol7m0oxEH3tv9zvxxDMTCmJRDGgg.PNG.yongs2008%2FScreenshot_20170215-171523.png%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fstatic.naver.net%2Fblank.gif%22&amp;type=cafe_wa740"></p>
<p>Kernel Adiutor를 이용한 볼륨 세분화먼저 앱을 실행해 왼쪽 위 아이콘 누릅니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fstatic.naver.net%2Fblank.gif%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMTVfMjYx%2FMDAxNDg3MTQ3Mjc2NDkx.WvgfxC9oc0CnTuwYqmoSkGTvZaqRCEcT1wP1GaEBVZcg.b-l33i4JKMnDVfKiPC_pk6r1QQA-lkgjk1mlBTl2vH4g.PNG.yongs2008%2FScreenshot_20170215-172127.png%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fstatic.naver.net%2Fblank.gif%22&amp;type=cafe_wa740"></p>
<p>거기서 "Build prop Editor" 누릅니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fstatic.naver.net%2Fblank.gif%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMTVfMjEy%2FMDAxNDg3MTQ3Mjc2NzAy.h18buAv1-AKbJLIslD5pyH0ytxEXEOvkN-rtUb8375Qg.WylCOzOC9PaC1z5dvy-a1EnSzqguuY52IzLR3SPA9RAg.PNG.yongs2008%2FScreenshot_20170215-172133.png%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fstatic.naver.net%2Fblank.gif%22&amp;type=cafe_wa740"></p>
<p>여기서 Key 부분엔 <a href="http://ro.config.media_vol_steps">ro.config.media_vol_steps</a>또는 <a href="http://ro.config.vc_call_vol_steps">ro.config.vc_call_vol_steps</a>Value부분엔 숫자를 입력합니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fstatic.naver.net%2Fblank.gif%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMTVfNjIg%2FMDAxNDg3MTQ3Mjc3MDI0.jVVdZneNvItBrV9yaGtVTh56drT5dulHPpYJXpElmxYg.dmnZVXcx-v8dkYqSxk677ZX_QDwBEvtfd-zAeriuklUg.PNG.yongs2008%2FScreenshot_20170215-172200.png%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fstatic.naver.net%2Fblank.gif%22&amp;type=cafe_wa740"></p>
<p>이렇게 하면 됩니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fstatic.naver.net%2Fblank.gif%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMTVfMjU0%2FMDAxNDg3MTQ3Mjc3Mzg4.nteXPeWSfN_oRNqlwpeZUlb-aehw6SHR9eoUu-pzqj8g.HT4vLQniwl-tMojUDzsbMr9l-XLaXOAHSWLJis59yr4g.PNG.yongs2008%2FScreenshot_20170215-172432.png%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fstatic.naver.net%2Fblank.gif%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMTVfMjYx%2FMDAxNDg3MTQ3Mjc3NjM4.hTXrtOrZuK0XMeooHmoLiUxrn3aS5u-nSaXfbv2ScvMg.svqfeZLLYbBwwStgBojhKVd7PP4IiReQd-HX4N20gHIg.PNG.yongs2008%2FScreenshot_20170215-172610.png%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fstatic.naver.net%2Fblank.gif%22&amp;type=cafe_wa740"></p>
<p>그리고 재부팅.볼륨 세분화 적용 어럽지 않죠??</p>
