---
layout: post
title: '[커뮤니티] "아마도 쉬운 안드로이드 어플만들기" [40] ~키가 눌렸을 때 (onPressed)'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/376113' ; </script>

<p>&nbsp;</p>
<p>&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"> </p>
<p><p><p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페</u> </p>
<p><u>업로드 시간 :&nbsp;매달 2,4주 오후 11시</u> <p></p>
<p>&nbsp;난이도 : ★★★★★</p>
<p></p>
<p></p>
</p>
</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>오늘은 앱 만드는데 거의 필수적인</p>
<p>'~키가 눌렸을 때'와 관련된 코딩을 하겠습니다.</p>
<p>&nbsp;</p>
<p>그 중 오늘은 백 키를 두 번 눌리면 종료하는 걸 해보겠습니다.&nbsp;&nbsp;&nbsp;&nbsp; 참고자료 : <a href="http://cafe.naver.com/develoid/110822">여기</a></p>
<p>&nbsp;</p>
<table><tbody><tr><td ><p>&nbsp;public class SelectActivity extends Activity {&nbsp; private static final int MSG_TIMER_EXPIRED = 1;&nbsp; private static final int Second = 2000;&nbsp; private boolean K = false;&nbsp; private long&nbsp;b = 0;</p>
<p>&nbsp;</p>
<p>&nbsp;@Override&nbsp;protected void onCreate(Bundle savedInstanceState) {&nbsp;&nbsp;super.onCreate(savedInstanceState);&nbsp;&nbsp;setContentView(R.layout.activity_select);&nbsp;}&nbsp;&nbsp;public void onBackPressed() {&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp; if (K == false) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K = true;&nbsp; </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; mCurrTimeInMillis = Calendar.getInstance().getTimeInMillis();</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Toast.makeText(this, "종료를 원하시면 한번 더 누르세요",&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Toast.LENGTH_LONG).show();</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; startTimer();&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp; } else {&nbsp;&nbsp;&nbsp;&nbsp; mIsBackKeyPressed = false;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; if (Calendar.getInstance().getTimeInMillis() &lt;= b+Second ) { &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; finish();&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp; }</p>
<p>&nbsp;&nbsp; </p>
<p>&nbsp;&nbsp; private void startTimer() {&nbsp;&nbsp;&nbsp; mTimerHandler.sendEmptyMessageDelayed(MSG_TIMER_EXPIRED,Second);&nbsp;&nbsp; }</p>
<p>&nbsp;&nbsp; </p>
<p>&nbsp;&nbsp; private Handler mTimerHandler = new Handler() {&nbsp;&nbsp;&nbsp; public void handleMessage(Message msg) {</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; switch (msg.what) {&nbsp;&nbsp;&nbsp;&nbsp; case MSG_TIMER_EXPIRED: {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K = false;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; break;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp; };</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
</td></tr></tbody></table><p>&nbsp;</p>
<p>이제 해석을 해 봅시다</p>
<p>&nbsp;</p>
<p>public void onBackPressed() {&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp; if (K == false) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K = true;&nbsp; </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; mCurrTimeInMillis = Calendar.getInstance().getTimeInMillis();</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Toast.makeText(this, "종료를 원하시면 한번 더 누르세요",&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Toast.LENGTH_LONG).show();</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; startTimer();&nbsp;</p>
<p>일단 Back 키가 눌렀을 때</p>
<p>K라는 변수를 통해 다시 눌려졌는지 확인합니다.</p>
<p>K라는 boolean 변수가 참이 아닐 때(시간 내 처음 누를 때시간을 재기 위해서)</p>
<p>K를 참으로 합니다.</p>
<p>그 뒤 현재시간을 넣고</p>
<p>한번 더 누르면 종료된다는 메세지가 출력합니다.</p>
<p>setTimer 함수를 실행하는데, 이게 좀 중요합니다.(좀 있다가)</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>} else {&nbsp;&nbsp;&nbsp;&nbsp; mIsBackKeyPressed = false;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; if (Calendar.getInstance().getTimeInMillis() &lt;= mCurrTimeInMillis + Second) { &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; finish();&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp; }아닐 때는 눌렀는데, 시간 안에 눌려진 상태라는 거겠죠</p>
<p>이것을 확인을 합니다. 여기서 조건이 만족한다면 종료</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;&nbsp; private void startTimer() {&nbsp;&nbsp;&nbsp; mTimerHandler.sendEmptyMessageDelayed(MSG_TIMER_EXPIRED,Second);&nbsp;&nbsp; }</p>
<p>&nbsp;&nbsp; </p>
<p>&nbsp;&nbsp; private Handler mTimerHandler = new Handler() {&nbsp;&nbsp;&nbsp; public void handleMessage(Message msg) {</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; switch (msg.what) {&nbsp;&nbsp;&nbsp;&nbsp; case MSG_TIMER_EXPIRED: {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K = false;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; break;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp; };</p>
<p>﻿마지막 부분입니다. 여기는 시간이 다 되면 다시 K를 false로 만들어놓습니다.</p>
<p>그 외에는 별 부분이.... 없네요</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>뭐 어쨌든 도움이 되는 부분이긴 합니다.</p>
<p>다음은 랜덤에 대해 알아보겠습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>cf) 강좌 할 것 추천해주세요</p>
