---
layout: post
title: '[커뮤니티] 아마도 쉬운 안드로이드 어플만들기 [8] 레이아웃 이동하기'
author: 'Snails'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/245345' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130517_266%2Ftjdtnsu_1368772568157vEMv8_JPEG%2Fand.jpg%22&amp;type=cafe_wa740"></p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p><u>참고 : 이 강좌가 쓰여진 컴퓨터 사양은 엄청 안좋습니다.(Celeron D 2.66GHz, 768MB) 그러므로 다른 컴퓨터도 거의 다 될겁니다.</u>&nbsp;</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p>&nbsp;</p>
<p>학습목표 : *.java 파일을 사용할 수 있다학습목표 : java 문법을 응용해 명령을 구현할 수 있다</p>
<p>난이도 : ★★★★</p>
<p>&nbsp;</p>
<p></p>
<p>네 이번부터는 짜증나는 코드를 다뤄 보겠습니다.</p>
<p>그러므로 난이도는 확 증가하고</p>
<p>난이도는 계속 올라갈 예정(10개?)</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>1. 프로젝트 생성(많은 것을 생략)</p>
<table><tbody><tr><td ><p>&nbsp;project name&nbsp;</p>
</td><td ><p>&nbsp;moveactivity</p>
</td></tr><tr><td ><p>&nbsp;target version&nbsp;</p>
</td><td ><p>&nbsp;android 2.3.3&nbsp;</p>
</td></tr><tr><td ><p>&nbsp;package name&nbsp;</p>
</td><td ><p>&nbsp;naver.moveactivity</p>
</td></tr><tr><td ><p>&nbsp;activity</p>
</td><td ><p>&nbsp;blank activity</p>
</td></tr></tbody></table><p>&nbsp;</p>
<p>&nbsp;</p>
<p>2. 일단 재주껏 꾸미고 레이아웃을 이동할 버튼을 하나 만들어 줍니다. (역시 설명은 생략합니다)&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130517_14%2Ftjdtnsu_1368773344659o3p9W_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>3. 레이아웃 이동위한 작업&nbsp;</p>
<p>&nbsp;</p>
<p>- Graphical Layout 옆에 activity_main.xml을 클릭하면 코드창이 뜹니다.</p>
<p>&nbsp;</p>
<p>- 여기서 &lt;button ~/&gt;에서 아무 곳이나&nbsp;</p>
<p>&nbsp; android:onClick="go"를 추가해 줍니다.</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130517_110%2Ftjdtnsu_1368773729737gHoJQ_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>이것의 의미는 클릭하면 go메서드(?)로 이동해 그 문장을 수행하는 것을 의미합니다.</p>
<p>참고로 원래는 onclick 대신 onclicklistener를 쓰지만 넘깁니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>- 레이아웃 java 파일 추가하기 위해서 androidmanifest.xml-Application-Add을 클릭하면 어떤 창이 나옵니다.</p>
<p>&nbsp;&nbsp; 그리고 activity를 클릭한 후 ok를 누릅니다.&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130517_50%2Ftjdtnsu_1368774124699d9wgG_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>- 그리고 위에 밑줄쳐진 name을 클릭후 name을 지정 후 ok를 누릅니다.(저는 nextactivity로)</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130517_296%2Ftjdtnsu_1368774217296CU97t_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>- 그리고 또 xml 파일을 만들겠습니다. 일단 layout폴더에서 오른쪽 클릭-new-other를 누릅니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130517_162%2Ftjdtnsu_13687743564567PrRq_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>그리고 알아서 입력해서 Finish를 누릅니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130517_275%2Ftjdtnsu_1368774571155nqM5o_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>이러면 모든 레이아웃의 생성이 완료됩니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>4. 알아서 2번째 레이아웃을 꾸밉니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130517_199%2Ftjdtnsu_1368774827788Dkx3Q_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>5. 버튼에 이벤트를 추가하자</p>
<p>이제 하이라이트입니다.</p>
<p>이 부분은 java를 어느정도 아는 사람이 하는 편이 좋습니다.</p>
<p>오늘은 Intent를 이용해 보겠습니다.</p>
<p>&nbsp;</p>
<p>- src - naver.moveactivity - mainactivity.java 파일에 들어갑니다.&nbsp;</p>
<p>&nbsp;</p>
<p>- 적절하게 &nbsp;</p>
<p>public void go (View v) {&nbsp;&nbsp;&nbsp; Intent myintent = new Intent(this, nextactivity.class);&nbsp;&nbsp;&nbsp; startActivity(myintent);}</p>
<p>를 끼워 넣습니다. (주의 : <u>대소문자 구분</u>합니다!)</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130517_2%2Ftjdtnsu_1368775216491guBjp_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p><u>&nbsp;위는 잘못된 예 허허</u></p>
<p>&nbsp;</p>
<p>그러면 뭔가 전구에 x가 있는 것이 발견되는데 그것은 import가 되지 않아 생기는 오류입니다.</p>
<p>전구를 클릭해 뭔가 누르거나 ctrl+shift+o를 이용해 import합니다.&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>- 그리고 src - naver.moveactivity - nextactivity.java 파일에 들어갑니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>그리고 java 파일에</p>
<p>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; @Override &nbsp;&nbsp;&nbsp; public void onCreate(Bundle savedInstanceState) {&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; super.onCreate(savedInstanceState);&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; setContentView(R.layout.activity_next);&nbsp;&nbsp;&nbsp; }}</p>
<p>&nbsp;</p>
<p>를 입력합니다.</p>
<p>&nbsp;</p>
<p>6. 그리고 실행합니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>이번 강좌는 코드 강좌 중 그렇게 어렵지 않은 강좌였습니다.</p>
<p>다음에는 어려워지는데 저도 모르겠습니다...&nbsp;</p>
