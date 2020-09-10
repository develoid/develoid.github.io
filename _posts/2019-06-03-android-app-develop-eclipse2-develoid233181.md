---
layout: post
title: '[커뮤니티] "아마도 쉬운 안드로이드 어플만들기" [5] 텍스트 출력하기'
author: 'Snails'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/233181' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130427_51%2Ftjdtnsu_13670324652685asRT_JPEG%2Fand.jpg%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p><u>참고 : 이 강좌가 쓰여진 컴퓨터 사양은 엄청 안좋습니다.(Celeron D 2.66GHz, 768MB) 그러므로 다른 컴퓨터도 거의 다 될겁니다.</u>&nbsp;</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>학습목표 : 화면에 "Hello World!"라 출력할 수 있다</p>
<p>학습목표 : 디폴트값을 수정할 수 있다.</p>
<p>난이도 : ★</p>
<p></p>
<p>﻿네 이번엔 아주 기초적인 것</p>
<p>화면에 텍스트를 출력하는 강좌입니다.</p>
<p>&nbsp;</p>
<p>이번 강좌도 쉬운 편입니다.(못하면 어쩔 수 없고)</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>1. Project를 생성합니다.</p>
<table><tbody><tr><td  ><p>&nbsp;project name&nbsp;</p>
</td><td  ><p>&nbsp;textview</p>
</td></tr><tr><td  ><p>&nbsp;build target&nbsp;</p>
</td><td  ><p>&nbsp;android 2.3.3&nbsp;</p>
</td></tr><tr><td  ><p>&nbsp;apprication name&nbsp;</p>
</td><td  ><p>&nbsp;textview</p>
</td></tr><tr><td  ><p>&nbsp;package name&nbsp;</p>
</td><td  ><p>&nbsp;naver.textview</p>
</td></tr><tr><td  ><p>&nbsp;create activity&nbsp;</p>
</td><td  ><p>&nbsp;textview</p>
</td></tr><tr><td  ><p>&nbsp;min sdk version&nbsp;</p>
</td><td  ><p>&nbsp;10</p>
</td></tr></tbody></table><p>액티비티는 Blank Activity로 합니다.</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130427_152%2Ftjdtnsu_1367033216338jgoWF_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.PNG%22&amp;type=cafe_wa740">&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>2. 일단 실행해 봅니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130427_277%2Ftjdtnsu_1367033542014W3egG_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.PNG%22&amp;type=cafe_wa740"></p>
<p>이렇게 나왔습니다.&nbsp;</p>
<p>&nbsp;</p>
<p>이것으로 1번째 학습목표를 달생했습니다.</p>
<p>&nbsp;</p>
<p>다음으로 Hello World!를 수정해 보도록 하겠습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>3. 그래픽 레이아웃으로 보기&nbsp;</p>
<p>&nbsp;</p>
<p>layout에 activity main.xml을 연 후 Graphical Layout을 누릅니다.&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130427_225%2Ftjdtnsu_1367033804696poyLY_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.PNG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>여기서 실행한 textview와 hello world!가 있습니다.</p>
<p>이 중 hello world!를 바꾸겠습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>4. Hello World! 바꾸기</p>
<p>이제 Hello World!를 더블클릭합니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130427_13%2Ftjdtnsu_1367033997812agxBS_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.PNG%22&amp;type=cafe_wa740"><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130427_271%2Ftjdtnsu_1367034158543jBlWt_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.PNG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>그리면 듣도 보지도 못한 코드가 눈 앞에 나타납니다.</p>
<p>드래그되어 있던 부분이 바로 Hello World!가 생성되어진 부분인데</p>
<p>이 부분을 수정해줍니다.&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>저는 이렇게 바꿨습니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130427_243%2Ftjdtnsu_1367034304610P17Wa_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.PNG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>5. 그리고 다시 실행합니다.</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130427_152%2Ftjdtnsu_1367034398330la9So_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.PNG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>네 성공입니다!!</p>
<p>&nbsp;</p>
<p>이걸로 2번째 학습목표도 달성했습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>다음은 데이터를 직접 입력 할 수 있는 EditText에 대해서 알아보겠습니다.&nbsp;</p>
