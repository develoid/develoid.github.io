---
layout: post
title: '"아마도 쉬운 안드로이드 어플만들기" [41] 난수 생성하기 (Random)'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/386657' ; </script>

<p> <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"> </p><div><div><div><div><p><i>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</i></p><p><i>저작자는 Snails(tjdtnsu)입니다.</i></p><p><span><span>덧글은 강의 제작자에게 큰 힘이 됩니다</span></span></p><p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p><p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페</u></p><div><span><u><strong>업로드 시간 : 매달 2,4주 오후 11시</strong></u><div></div><p> <strong><span>난이도 : ★</span><span>★★★</span></strong></p><strong></strong><div><strong></strong></div></span><strong></strong><p>그렇습니다. 오늘은 간단하게 난수 생성법에 대해 알려드리겠습니다</p><p>&nbsp;</p><p>난수 : 어떤 확률분포로부터 무선적으로 선택이 된 수를 말한다</p><p>&nbsp;</p><p>그렇다 합니다. 그러면 난수 생성법은 2가지가 있습니다.</p><p>&nbsp;</p><p>&nbsp;</p><span><p><strong><span>1. random() 함수 이용하기</span></strong></p><p><span>double&nbsp;r = Math.random();</span></p><p>&nbsp;</p><p><span>0&lt;x&lt;1의 실수가 나옵니다.</span>&nbsp;</p><p><span>여기서 정수형 변환, 범위는 작업을 해야 합니다.﻿</span>&nbsp;</p><p><span>&nbsp;</span>&nbsp;</p><p><span>﻿</span>&nbsp;</p><p><strong><span>2. Random Class 이용하기</span></strong></p><p><span>Random rnd = new Random();</span><span>&nbsp;</span></p><p><span><span>int&nbsp;r = rnd.nextInt();</span><span>﻿</span><span>﻿</span></span></p><p><span></span>&nbsp;</p><p><span><span>이건﻿</span><span>﻿</span><span>&nbsp;-2147483648(-2^31) &lt; k &lt; 2147483647(2^31-1)까지의 정수를 출력합니다.</span></span></p><p>여기서 rnd.nextInt(10)을 넣으면 0~9까지의 정수를 출력합니다.</p><p>&nbsp;</p><p>&nbsp;</p><p></p><p>그러면 예시를<span>﻿ </span>보겠습니다.</p><p>&nbsp;</p><p>&nbsp;</p>





<table style="border-width: 1px 1px 0px 0px; border-style: solid solid none none; border-color: rgb(204, 204, 204) rgb(204, 204, 204) currentColor currentColor;" class="__se_tbl" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="border-width: 0px 0px 1px 1px; border-style: none none solid solid; border-color: currentColor currentColor rgb(204, 204, 204) rgb(204, 204, 204); width: 739px; height: 32px; background-color: rgb(255, 255, 255);"><p>&nbsp;Random rnd = new Random();<b>&nbsp;int o = rnd.nextInt(500); // 변수 o에 0~499까지의 정수의 난수 출력</p></td></tr><tr><td style="border-width: 0px 0px 1px 1px; border-style: none none solid solid; border-color: currentColor currentColor rgb(204, 204, 204) rgb(204, 204, 204); width: 739px; height: 16px; background-color: rgb(255, 255, 255);"><p><span>&nbsp;int</span><span>&nbsp;p = (int)((Math.random())*400)+100); // 변수 p에 100~499까지의 정수의 난수 출력</span></p></td></tr></tbody></table><p></p><p>&nbsp;</p><p>&nbsp;</p><p>이렇게 되겠습니다.</p><p>&nbsp;</p><p>&nbsp;</p><p>오늘은 간단했죠? 다음은 시드바에 대해 알아보겠습니다.</p></span><p>&nbsp;<span></span><span></span><span></span><span></span><span></span><span></span></p><p>&nbsp;</p></div><p></p></div></div></div></div>
