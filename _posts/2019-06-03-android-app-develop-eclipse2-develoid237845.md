---
layout: post
title: '[커뮤니티] 아마도 쉬운 안드로이드 어플만들기 [7] Relative Layout 사용하기'
author: 'Snails'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/237845' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130504_294%2Ftjdtnsu_13676398217903UN7D_JPEG%2Fand.jpg%22&amp;type=cafe_wa740"></p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p><u>참고 : 이 강좌가 쓰여진 컴퓨터 사양은 엄청 안좋습니다.(Celeron D 2.66GHz, 768MB) 그러므로 다른 컴퓨터도 거의 다 될겁니다.</u>&nbsp;</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p>&nbsp;</p>
<p>학습목표 : Relative Layout을 사용할 수 있다</p>
<p>난이도 : ★★</p>
<p></p>
<p></p>
<p>이번 강좌는 레이아웃을 강좌하겠습니다.</p>
<p>&nbsp;</p>
<p>레이아웃은 많은 종류가 있지만 그 중 우리는 Relative Layout를 해보겠습니다.</p>
<p>&nbsp;ㄴ 이것을 할 줄 알면 다른 것도 할 수 있습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>1. Relative Layout을 이용해 보자!</p>
<p>&nbsp;</p>
<p>&nbsp; - Relative Layout은 화면을 구성하는 객체를 다른 객체를 기준으로 오른쪽 또는 왼쪽 아니면 아래쪽으로 상대적 위치를 지정해 배치하는 방법이다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>일단 프로젝트를 생성합니다.</p>
<table><tbody><tr><td ><p>&nbsp;Project Name&nbsp;</p>
</td><td ><p>&nbsp;rel_lay</p>
</td></tr><tr><td ><p>&nbsp;Build Target&nbsp;</p>
</td><td ><p>&nbsp;Android 2.3.3&nbsp;</p>
</td></tr><tr><td ><p>&nbsp;Application name&nbsp;</p>
</td><td ><p>&nbsp;rel_lay</p>
</td></tr><tr><td >&nbsp;Package Name</td><td ><p>&nbsp;naver.rel_lay</p>
</td></tr><tr><td ><p>&nbsp;Create Activity&nbsp;</p>
</td><td >rel_lay</td></tr><tr><td ><p>&nbsp;Min SDK virsion&nbsp;</p>
</td><td ><p>&nbsp;10</p>
</td></tr></tbody></table><p>&nbsp;</p>
<p>화면과 만드는 방법은 생략하겠습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>역시 레이아웃의 activity_main - Graphical Layout로 들어갑니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130504_194%2Ftjdtnsu_1367640502358qYzwt_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.PNG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>layout에 relactivelayout을 누릅니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130504_101%2Ftjdtnsu_1367640940284bbx7Y_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.PNG%22&amp;type=cafe_wa740">&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>일단 Hello World를 삭제하고</p>
<p>옆에 폴더를 만지작만지적 거리면서 이렇게 끌어옵니다.</p>
<p>(삭제법 : Right Click-Delete)</p>
<p>(삽입법 : 그림 Drag)</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130504_159%2Ftjdtnsu_1367640762691y79N0_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.PNG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>여기서 Editview 객체와 Button 객체를 잘 이동해서 이렇게 만듭니다.(그냥 드래그하면 됩니다.)</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130504_266%2Ftjdtnsu_1367641007571B3a3h_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.PNG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>그리고 TextView, Editview와 Button를 지 멋대로 수정합니다.</p>
<p>(수정법은 2-2,3에서 강좌했습니다.)</p>
<p>참고 : Hint 추가법은 android:hint="Enter ID"를 입력하시면 됩니다(위치는 감으로 잡습니다)&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130504_100%2Ftjdtnsu_1367641306978XBnFy_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.PNG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>실행은 생략합니다. &nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>그 외 많은 레이아웃이 있지만 뛰어넘고 다음은 EventHandler를 하도록 하겠습니다.&nbsp;</p>
<p>&nbsp;</p>
