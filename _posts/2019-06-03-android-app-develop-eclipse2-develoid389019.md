---
layout: post
title: '[커뮤니티] "아마도 쉬운 안드로이드 어플만들기" [42] 시크바(SeekBar)'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/389019' ; </script>

<p>&nbsp;</p>
<p></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"> </p>
<p><p><p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p>덧글은 강의 제작자에게 큰 힘이 됩니다</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페</u></p>
<p><u>업로드 시간 : 매달 2,4주 오후 11시</u><p></p>
<p>난이도 : ★★★★★☆</p>
<p></p>
</p>
<p></p>
<p></p>
</p>
</p>
<p>이번 시간에는 시크바를 하겠습니다</p>
<p>시크바라고 하면, 뭐 볼륨, 밝기 등을 조절 할 때 나오는 바로써</p>
<p>거의 다 봤다고 칩시다</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20140309_270%2Ftjdtnsu_1394364010308XUvJg_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>액티비티에서,</p>
<p>그 많이 보던 것(시드바라고도 하고 프로그래스바라고도 한다)을 드래그 앤 드롭으로 끌어옵시다</p>
<p>Value.. 뭐시기 적혀 있는 건 TextView이므로 참고하세요</p>
<p>&nbsp;</p>
<p>자, 그러면 코드를 보시겠습니다</p>
<table><tbody><tr><td ><p>&nbsp;xml - activity_main.xml</p>
<p>&nbsp;</p>
<p>&lt;RelativeLayout xmlns:androhttp://schemas.android.com/apk/res/android">http://schemas.android.com/apk/res/android</a>"&nbsp;&nbsp;&nbsp; xmlns:tools="<a href="http://schemas.android.com/tools">http://schemas.android.com/tools</a>"&nbsp;&nbsp;&nbsp; android:layout_&nbsp;&nbsp;&nbsp; android:layout_height="match_parent"&nbsp;&nbsp;&nbsp; android:paddingBottom="@dimen/activity_vertical_margin"&nbsp;&nbsp;&nbsp; android:paddingLeft="@dimen/activity_horizontal_margin"&nbsp;&nbsp;&nbsp; android:paddingRight="@dimen/activity_horizontal_margin"&nbsp;&nbsp;&nbsp; android:paddingTop="@dimen/activity_vertical_margin"&nbsp;&nbsp;&nbsp; tools:context=".MainActivity" &gt;</p>
<p>&nbsp;&nbsp;&nbsp; &lt;TextView&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_height="wrap_content"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_alignParentTop="true"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_centerHorizontal="true"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_marginTop="21dp"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:text="Value : 0" /&gt;</p>
<p>&nbsp;&nbsp;&nbsp; &lt;SeekBar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_height="wrap_content"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_alignParentRight="true"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:max="100"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_below="@+id/textView1" /&gt;</p>
<p>&nbsp;&nbsp;&nbsp; &lt;TextView&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_height="wrap_content"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_alignLeft="@+id/seekBar1"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_below="@+id/seekBar1"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:text="" /&gt;</p>
<p>&lt;/RelativeLayout&gt;&nbsp;</p>
</td></tr><tr><td ><p>&nbsp;java - MainActivity.java</p>
<p>&nbsp;</p>
<p>package com.meap;</p>
<p>import android.app.Activity;import android.os.Bundle;import android.view.Menu;import android.widget.SeekBar;import android.widget.TextView;</p>
<p>public class MainActivity extends Activity {&nbsp;&nbsp;SeekBar s; &nbsp;TextView v; &nbsp;TextView e;&nbsp;int progress;&nbsp;&nbsp;@Override&nbsp;protected void onCreate(Bundle savedInstanceState) {&nbsp;&nbsp;super.onCreate(savedInstanceState);&nbsp;&nbsp;setContentView(R.layout.activity_main);&nbsp;&nbsp;s = (SeekBar) findViewById(R.id.seekBar1);&nbsp;&nbsp;v = (TextView) findViewById(R.id.textView1);&nbsp;&nbsp;e = (TextView) findViewById(R.id.textView2);&nbsp;&nbsp;s.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {&nbsp;&nbsp;&nbsp;@Override&nbsp;&nbsp;&nbsp;public void onStartTrackingTouch(SeekBar seekBar1) {&nbsp;&nbsp;&nbsp;&nbsp;e.setText("시드바를 만지고 있습니다");&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;@Override&nbsp;&nbsp;&nbsp;public void onProgressChanged(SeekBar seekBar1, int progress, boolean arg2) {&nbsp;&nbsp;&nbsp;&nbsp;s.setProgress(progress);&nbsp;&nbsp;&nbsp;&nbsp;v.setText("Value : "+ progress);&nbsp;&nbsp;&nbsp;&nbsp;if((int)progress==32) e.setText("음?");&nbsp;&nbsp;&nbsp;&nbsp;else e.setText("시드바를 만지고 있습니다");&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;@Override&nbsp;&nbsp;&nbsp;public void onStopTrackingTouch(SeekBar seekBar1) {&nbsp;&nbsp;&nbsp;&nbsp;e.setText("");&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;});&nbsp;&nbsp;&nbsp;}</p>
<p>&nbsp;@Override&nbsp;public boolean onCreateOptionsMenu(Menu menu) {&nbsp;&nbsp;// Inflate the menu; this adds items to the action bar if it is present.&nbsp;&nbsp;getMenuInflater().inflate(R.menu.main, menu);&nbsp;&nbsp;return true;&nbsp;}</p>
<p>}&nbsp;</p>
</td></tr></tbody></table><p>&nbsp;</p>
<p>&nbsp;</p>
<p>음음음 코드는 복잡하지만 해석은 간단합니다</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>일단 xml 코드에서 볼 건</p>
<p>android:max="100"인데, 이것은 시드바의 최댓값을 지정합니다.</p>
<p>귀찮으니깐 100으로 했습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>SeekBar s; TextView v; TextView e;int progress;변수 정의 부분입니다. 여기서 주의할 점 나갑니다.</p>
<p>제가 많이 겪었던 부분입니다.</p>
<p>값을 미리 지정해주면 강제종료됩니다. 예를 들면</p>
<p>TextView v = (TextView) findViewById(R.id.textView1);</p>
<p>이러면 강제종료됩니다. 그러므로 변수값은 꼭 따로 안에 집어넣으세요</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>s.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {은 클래스를 생성하는 부분입니다. 여기서 시드바에 대한 설정을 합니다.</p>
<p>&nbsp;</p>
<table><tbody><tr><td  ><p>&nbsp;</p>
<p>s.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {</p>
<p>public void onProgressChanged(SeekBar seekBar, int progress, boolean b) {</p>
<p>&nbsp; //여기에 시드바가 터치되고 있을 때의 코드를 지정합니다</p>
<p>}</p>
<p>&nbsp;</p>
<p>public void onStartTrackingTouch(SeekBar seekBar) {</p>
<p>&nbsp;// 여기에 시드바가 터치되기 시작할 때의 코드를 지정합니다</p>
<p>}</p>
<p>&nbsp;</p>
<p>public void onStopTrackingTouch(SeekBar seekBar) {</p>
<p>&nbsp;//&nbsp;여기에 시드바가 터치에서 떼 졌을 때의 코드를 지정합니다</p>
<p>}</p>
<p>});&nbsp;</p>
</td></tr></tbody></table><p>&nbsp;</p>
<p>위는 코드는 이 클래스가 사용될 때의 코드입니다.</p>
<p>저는 onProgressChanged만 썼습니다. 그 만큼 이게 제일 많이 사용됩니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>s.setProgress(progress);v.setText("Value : "+ progress);if((int)progress==32) e.setText("음?");여기서 프로그래스 값을 받아서, TextView에 출력합니다.</p>
<p>그리고 오늘은 특별히 거의 이스터 에그로</p>
<p>progress 값이 32일 때 음? 이라는 걸 추가로 출력하도록 합니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>그러면 설명은 끝났으면 출력 결과를 보시죠</p>
<p><iframe frame scrolling="no" name="mplayer" title="플레이어"  height="405" src="https://serviceapi.nmv.naver.com/view/ugcPlayer.nhn?vid=F6CC3F798919F92F0383141B435665847E88&amp;inKey=V129d0f71e41501acac4d0a6dd4ad132784298f71f52e72c77e9f6abbbc773c3917b20a6dd4ad13278429&amp;wmode=opaque&amp;hasLink=1&amp;autoPlay=false&amp;beginTime=0" allowfullscreen="allowfullscreen"></iframe></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>그렇습니다. 다음 시간에는 시간 출력을 하겠습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
