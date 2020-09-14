---
layout: post
title: '[커뮤니티] 아마도 쉬운 안드로이드 어플만들기 [39] 일시정지(Delay)'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/369009' ; </script>

<p>&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"> </p>
<p><p><p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페</u> </p>
<p><u>업로드 시간 :&nbsp;매달 2,4주 오후 11시</u> <p></p>
<p>&nbsp;난이도 : ★★★</p>
<p></p>
<p></p>
</p>
</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>네, 오늘은 딴 걸 하겠습니다.</p>
<p>액티비티, 스레드 등을 일시정지하게 할 수 있을까요?</p>
<p>&nbsp;</p>
<p>네, 얼마만큼 아무 작업도 안 하게 할 수 있습니다.</p>
<p>&nbsp;</p>
<p>일반적으로 C언어에서 sleep이라는 걸 배웠죠</p>
<p>이것도 스레드에서는 sleep을 씁니다.</p>
<p>&nbsp;</p>
<p>하지만, 액티비티 코드에서는 sleep이 통하지 않습니다.</p>
<p>그러면 어떻게 해야 할까요?</p>
<p><table><tbody><tr><td  ><p>...</p>
<p>final Handler handler = new Handler();handler.postDelayed(new Runnable() {&nbsp;@Override&nbsp;public void run() {&nbsp; m.setText("Ang!");&nbsp; //여기에 실행될 코드를</p>
<p>&nbsp; }}, 1000); //1000은 1초</p>
<p>...</p>
</td></tr></tbody></table></p>
<p>&nbsp;</p>
<p>이렇게 된다 합니다.</p>
<p>정말 이건 할 게 없습니다.</p>
<p>포스팅 할 것도 없으므로</p>
<p>예제만 한번 주고, 끝내겠습니다.</p>
<p>(제 미완성 앱중 하나 자동 액티비티 이동 코드, MainActivity.java)</p>
<table><tbody><tr><td  ><p>&nbsp;package com.naver.j;</p>
<p>import android.app.Activity;import android.content.Intent;import android.os.Bundle;import android.os.Handler;import android.view.Menu;</p>
<p>public class MainActivity extends Activity {</p>
<p>&nbsp;@Override&nbsp;protected void onCreate(Bundle savedInstanceState) {&nbsp;&nbsp;super.onCreate(savedInstanceState);&nbsp;&nbsp;setContentView(R.layout.activity_main);&nbsp;&nbsp;Handler mHandler = new Handler();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; mHandler.postDelayed(new Runnable() {&nbsp;&nbsp;public void run()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Intent main_intro = new Intent(MainActivity.this,SelectActivity.class);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; startActivity(main_intro);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; finish();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }, 3000);&nbsp;}</p>
<p>&nbsp;@Override&nbsp;public boolean onCreateOptionsMenu(Menu menu) {&nbsp;&nbsp;// Inflate the menu; this adds items to the action bar if it is present.&nbsp;&nbsp;getMenuInflater().inflate(R.menu.main, menu);&nbsp;&nbsp;return true;&nbsp;}</p>
<p>}&nbsp;</p>
</td></tr></tbody></table><p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><iframe frame scrolling="no" name="mplayer" title="플레이어"  height="405" src="https://serviceapi.nmv.naver.com/view/ugcPlayer.nhn?vid=E9E22E96ACAF39AD7906258F3043A7F03459&amp;inKey=V12140ad1ec08bf1fe8c8338657ee98c82b52d1b36008d6f591745466a8f7e2af9530338657ee98c82b52&amp;wmode=opaque&amp;hasLink=1&amp;autoPlay=false&amp;beginTime=0" allowfullscreen="allowfullscreen"></iframe></p>
<p>&nbsp;</p>
<p>영상입니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>다음 시간부터는 대단원 중단원 형식이 아니라</p>
<p>번호로 붙여 나가도록 하겠습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
