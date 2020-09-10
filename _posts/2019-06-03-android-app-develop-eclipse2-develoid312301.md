---
layout: post
title: '[커뮤니티] "아마도 쉬운 안드로이드 어플만들기" 6-3 질문 대화상자'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/312301' ; </script>

<p>&nbsp;</p>
<p></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페, App Development 카페, 프그머 카페</u></p>
<p><u>업로드 시간 : 매주 일요일 오후 11시</u><p></p>
<p>&nbsp;난이도 : ★★★★★★☆</p>
<p>﻿&nbsp;</p>
<p>일반적으로 전달 사항을 알리는 것은 쉽지만</p>
<p>질문을 한 뒤에 응답 결과에 따른 실행의 값이 다를 경우 좀 더 복잡해질 수 있습니다.</p>
<p>﻿</p>
<p>&nbsp;</p>
<p>오늘은 그 간단한 예를 적용해 보도록 하겠습니다.</p>
<p>﻿</p>
<p>일단 간단하게 정리하자면&nbsp;</p>
<p>﻿&nbsp;</p>
<p></p>




<table><tbody><tr><td  ><p>1. a 값 정하기&nbsp;- 질문하기 (1 or 2)</p>
<p>2. b&nbsp;값 정하기 - 질문하기 (3 or 4)</p>
<p>3. result 계산 - 질문하기 (더하기 or 곱하기)</p>
<p>&nbsp;</p>
<p>4. 연산 결과 출력</p>
</td></tr></tbody></table><p>&nbsp;</p>
<p>﻿&nbsp;</p>
<p>이것만으로도 소스가 많이 복잡해집니다.&nbsp;</p>
<p>소스를 소개합니다.&nbsp;</p>
<p>﻿&nbsp;</p>
<p>﻿&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130922_257%2Ftjdtnsu_1379852008223ycdKq_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740">&nbsp;</p>
<p>&nbsp;</p>




<table><tbody><tr><td ><p>package naver.plus;</p>
<p>import android.app.Activity;import android.app.AlertDialog;import android.content.Context;import android.content.DialogInterface;import android.os.Bundle;import android.os.Vibrator;import android.view.Menu;import android.view.MenuInflater;import android.view.View;import android.widget.EditText;import android.widget.TextView;import android.widget.Toast;</p>
<p>public class MainActivity extends Activity {&nbsp;int a,b,result;&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp; @Override&nbsp;&nbsp;&nbsp; protected void onCreate(Bundle savedInstanceState) {</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; super.onCreate(savedInstanceState);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; setContentView(R.layout.activity_main);&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; @Override&nbsp;&nbsp;&nbsp; public boolean onCreateOptionsMenu(Menu menu) {&nbsp;&nbsp;&nbsp; &nbsp;super.onCreateOptionsMenu(menu);&nbsp;&nbsp;&nbsp; &nbsp;MenuInflater inflater = getMenuInflater();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; inflater.inflate(R.menu.menucheck, menu);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return true;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public void dia(View v){&nbsp;&nbsp;&nbsp; &nbsp;new AlertDialog.Builder(this)&nbsp;&nbsp;&nbsp; &nbsp;.setTitle("설문조사중입니다... 20%")&nbsp;&nbsp;&nbsp; &nbsp;.setMessage("1과 2중 뭐선택할래?")&nbsp;&nbsp;&nbsp; &nbsp;.setIcon(R.drawable.ic_launcher)&nbsp;&nbsp;.setPositiveButton("1",One)&nbsp;&nbsp;.setNegativeButton("2",One)&nbsp;&nbsp;&nbsp; &nbsp;.show();&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;}&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; DialogInterface.OnClickListener One =&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;new DialogInterface.OnClickListener(){&nbsp;&nbsp;&nbsp; &nbsp;public void onClick(DialogInterface dialog, int whichButton){&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;if(whichButton == DialogInterface.BUTTON_POSITIVE){&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;a=1;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;} else {&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;a=2;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;new AlertDialog.Builder(MainActivity.this)&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;.setTitle("설문조사중입니다... 50%")&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;.setMessage("그러면 3과 4중 뭐선택할래?")&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;.setIcon(R.drawable.ic_launcher)&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;.setPositiveButton("3",Two)&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;.setNegativeButton("4",Two)&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;.show();&nbsp;&nbsp;&nbsp; &nbsp;}&nbsp;&nbsp;&nbsp; };&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; DialogInterface.OnClickListener Two =&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;new DialogInterface.OnClickListener() {&nbsp;&nbsp;&nbsp;&nbsp;public void onClick(DialogInterface dialog, int whichButton) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(whichButton == DialogInterface.BUTTON_POSITIVE){&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b=3;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b=4;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new AlertDialog.Builder(MainActivity.this)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.setTitle("설문조사중입니다... 80%")&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.setMessage("마지막으로 어떤연산할래?")&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.setPositiveButton("덧셈", Com)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.setNegativeButton("곱셈",Com)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.show();&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DialogInterface.OnClickListener Com =&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; new DialogInterface.OnClickListener() {&nbsp;public void onClick(DialogInterface dialog, int whichButton) {&nbsp;&nbsp;if(whichButton == DialogInterface.BUTTON_POSITIVE){&nbsp;&nbsp;&nbsp;result=a+b;&nbsp;&nbsp;} else {&nbsp;&nbsp;&nbsp;result=a*b;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;TextView text=(TextView)findViewById(R.id.textView5);&nbsp;&nbsp;text.setText("튀어나온 값은" + result + "인데");&nbsp;&nbsp;&nbsp;}};</p>
<p>}</p>
</td></tr></tbody></table><p>흐어어어어ㅓ어엌ㅋㅋㅋ 초보가 보면 돌겠죠?</p>
<p>&nbsp;</p>
<p>java 파일입니다.</p>
<p>엄청 복잡하게 생겼는데 풀이하면 아주 쉽습니다.</p>
<p>&nbsp;</p>
<p>한번 그림으로 정리해보았습니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130922_138%2Ftjdtnsu_1379855892205lXszz_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>이렇게 연결되는 방식을 띠고 있습니다.</p>
<p>대화상자가 하나하나 연결하면서 a,b 값과 연산을 결정하게 됩니다.</p>
<p>&nbsp;</p>
<p>그러면 실행영상을 보시죠</p>
<p><iframe frame scrolling="no" name="mplayer" title="플레이어"  height="405" src="https://serviceapi.nmv.naver.com/view/ugcPlayer.nhn?vid=40E014CBD22ED554409BBBC72B7A66561CB9&amp;inKey=V1211063502310ca805f6338657ee98c82b52d1b36008d6f5917412118a1f1a9aae47338657ee98c82b52&amp;wmode=opaque&amp;hasLink=0&amp;autoPlay=false&amp;beginTime=0" allowfullscreen="allowfullscreen"></iframe></p>
<p>네 성공적으로 실행되었습니다.</p>
<p>&nbsp;</p>
<p>오늘은 소스가 장난이 아니었는데요.</p>
<p>다음은 목록을 가지고 있는 대화상자를 살펴보도록 하겠습니다.</p>
<p></p>
</p>
