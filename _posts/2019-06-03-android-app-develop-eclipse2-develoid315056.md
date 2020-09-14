---
layout: post
title: '[커뮤니티] 아마도 쉬운 안드로이드 어플만들기 6-4 목록 대화상자'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/315056' ; </script>

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
<p>﻿</p>
<p>﻿</p>
<p>﻿﻿﻿</p>
<p>﻿지난 강좌까지는 버튼 3개까지를 이용해서 결정 및 리스너 실행을 했습니다.</p>
<p>﻿﻿이번에는 목록을 이용해 지난번보다는 조금 더 많이 선택할 수 있게 하겠습니다.</p>
<p>﻿﻿﻿﻿﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿일단 선택할 목록을 만들겠습니다.﻿</p>
<p>﻿﻿﻿</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130929_263%2Ftjdtnsu_1380460558536gtw18_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>﻿﻿﻿res-values에 array.xml 파일을 만듭니다.</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130929_186%2Ftjdtnsu_1380460686758xCoFO_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>﻿﻿﻿그리고 이렇게 잘 설정합니다.</p>
<p>﻿﻿﻿</p>
<p>﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿﻿﻿</p>
<p>﻿﻿﻿대망의 소스파일입니다.</p>
<p>



<table><tbody><tr><td ><p>&nbsp;&nbsp; public void dia(View v){&nbsp;&nbsp;&nbsp; &nbsp;new AlertDialog.Builder(this)&nbsp;&nbsp;&nbsp; &nbsp;.setTitle("빈칸을 채우시오.")&nbsp;&nbsp;&nbsp; &nbsp;.setIcon(R.drawable.ic_launcher)&nbsp;&nbsp;&nbsp; &nbsp;.setItems(R.array.foods,&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;new DialogInterface.OnClickListener() {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public void onClick(DialogInterface dialog, int which) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String[] foods = getResources().getStringArray(R.array.foods);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TextView text = (TextView)findViewById(R.id.textView6);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text.setText("빈칸을 채우면 : 찾아보자 "+ foods[which]);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;})</p>
<p>&nbsp;&nbsp;&nbsp; &nbsp;.setNegativeButton("취소",null)&nbsp;&nbsp;&nbsp; &nbsp;.show();&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;}&nbsp;&nbsp;&nbsp; </p>
</td></tr></tbody></table><p>&nbsp;</p>
<p>﻿뭐 역시 살펴보면 쉬운 예제입니다.&nbsp;</p>
<p>setItems에서 'foods'라는 배열을 가져와 선택하게 하고, 고르게 합니다.&nbsp;</p>
<p>뭐 단점이라면 Message는 못 쓴다는 겁니다.&nbsp;</p>
<p>&nbsp;</p>
<p>﻿&nbsp;</p>
<p>이렇게 해서 실행해 봅니다.&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130929_83%2Ftjdtnsu_1380460906322bWzMS_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740">&nbsp;</p>
<p>﻿&nbsp;</p>
<p>﻿&nbsp;</p>
<p>여기서 which 인수가 선택한 음식 이름을 조사해 뷰로 출력합니다.&nbsp;</p>
<p>항목을 클릭할 때 선택이 완료되어 대화상자는 닫히게 됩니다.﻿&nbsp;</p>
<p>앞 예재와는 다르게 이제 이 대화상자를 단일 선택 목록(RadioButton)으로 바꾸겠습니다.&nbsp;</p>
<p>﻿&nbsp;</p>
<p>﻿</p>




<table><tbody><tr><td ><p>&nbsp;package naver.plus;</p>
<p>import android.app.Activity;import android.app.AlertDialog;import android.content.Context;import android.content.DialogInterface;import android.os.Bundle;import android.os.Vibrator;import android.view.View;import android.widget.EditText;import android.widget.TextView;import android.widget.Toast;</p>
<p>public class MainActivity extends Activity {&nbsp;int mS = 0;.&nbsp;</p>
<p>.&nbsp;</p>
<p>.﻿&nbsp;</p>
<p>﻿.&nbsp;</p>
<p>﻿&nbsp;</p>
<p>﻿&nbsp;</p>
<p>public void dia(View v){&nbsp;&nbsp;&nbsp; &nbsp;new AlertDialog.Builder(this)&nbsp;&nbsp;&nbsp; &nbsp;.setTitle("빈칸을 채우시오.")&nbsp;&nbsp;&nbsp; &nbsp;.setIcon(R.drawable.ic_launcher)&nbsp;&nbsp;&nbsp; &nbsp;.setSingleChoiceItems(R.array.foods, mS,&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;new DialogInterface.OnClickListener() {&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;public void onClick(DialogInterface dialog, int which){&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;mS=which;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;}&nbsp;&nbsp;&nbsp; &nbsp;})&nbsp;&nbsp;&nbsp; &nbsp;.setPositiveButton("확인",new DialogInterface.OnClickListener() {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public void onClick(DialogInterface dialog, int whichButton) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String[] foods = getResources().getStringArray(R.array.foods);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TextView text = (TextView)findViewById(R.id.textView6);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text.setText("빈칸을 채우면 : 찾아보자 "+ foods[mS]);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;})&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp; &nbsp;.setNegativeButton("취소",null)&nbsp;&nbsp;&nbsp; &nbsp;.show();&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;}&nbsp;&nbsp;&nbsp; </p>
</td></tr></tbody></table><p>﻿&nbsp;﻿뭔가 다르지요, which 인수 대신 mS으로 대신 했으며, SingleChoice로 단일 선택 상자를 만들었습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>역시 실행해 봅니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130929_48%2Ftjdtnsu_1380461284938W9hkB_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740">﻿﻿﻿﻿﻿﻿﻿&nbsp;</p>
<p>&nbsp;</p>
<p>﻿이렇게 변했습니다. 그런데 이 대화 상자의 특징은&nbsp;</p>
<p>눌러도 닫히지 않다는 겁니다. 그래서 닫는 기능이 자체적으로 없어&nbsp;</p>
<p>확인, 취소를 배치해야 합니다.&nbsp;</p>
<p>﻿&nbsp;</p>
<p>﻿&nbsp;</p>
<p>﻿&nbsp;</p>
<p>다음은 체크 박스입니다.&nbsp;</p>
<p>﻿체크 박스는 복수로 선택이 가능하며&nbsp;</p>
<p>역시 눌러도 닫히지 않﻿습니다.&nbsp;</p>
<p></p>




<table><tbody><tr><td ><p>&nbsp;package naver.plus;</p>
<p>import android.app.Activity;import android.app.AlertDialog;import android.content.Context;import android.content.DialogInterface;import android.os.Bundle;import android.os.Vibrator;import android.view.View;import android.widget.EditText;import android.widget.TextView;import android.widget.Toast;</p>
<p>public class MainActivity extends Activity {&nbsp;boolean[] mS = {false,false,false,false,false};&nbsp;</p>
<p>&nbsp;</p>
<p>.</p>
<p>.</p>
<p>.</p>
<p>.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp; public void dia(View v){&nbsp;&nbsp;&nbsp; &nbsp;new AlertDialog.Builder(this)&nbsp;&nbsp;&nbsp; &nbsp;.setTitle("빈칸을 채우시오.")&nbsp;&nbsp;&nbsp; &nbsp;.setIcon(R.drawable.ic_launcher)&nbsp;&nbsp;&nbsp; &nbsp;.setMultiChoiceItems(R.array.foods, mS,&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;new DialogInterface.OnMultiChoiceClickListener() {&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;public void onClick(DialogInterface dialog, int which, boolean isChecked) {&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;mS[which]=isChecked;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;}&nbsp;&nbsp;&nbsp; &nbsp;})&nbsp;&nbsp;&nbsp; &nbsp;.setPositiveButton("확인",new DialogInterface.OnClickListener() {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public void onClick(DialogInterface dialog, int whichButton) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String[] foods = getResources().getStringArray(R.array.foods);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TextView text = (TextView)findViewById(R.id.textView6);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String result= "찾아보자 ";&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int i=0; i&lt;mS.length;i++){&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(mS[i]){&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result += foods[i] + " ";&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text.setText(result);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;})</p>
<p>&nbsp;&nbsp;&nbsp; &nbsp;.setNegativeButton("취소",null)&nbsp;&nbsp;&nbsp; &nbsp;.show();&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;}&nbsp;</p>
</td></tr></tbody></table><p>&nbsp;</p>
<p>﻿이렇게 바뀝니다. 많은 곳이 바뀌는데&nbsp;어려우므로 풀이는 생략하겠습니다.&nbsp;</p>
<p>﻿간단하게 말하면 mS을 참거짓값으로 지정해 체크되었는지 안되었는지를 판단하여 출력하는 것입니다.&nbsp;</p>
<p>﻿&nbsp;</p>
<p>역시 실행결과입니다.&nbsp;</p>
<p>﻿&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130929_264%2Ftjdtnsu_1380462296141azj5H_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>﻿&nbsp;</p>
<p>﻿&nbsp;</p>
<p>﻿이걸로&nbsp;정말&nbsp;이 정도만 하면 거의&nbsp;중수 정도 단계까지 왔습니다.&nbsp;</p>
<p>다음은 그래픽 자체생성 기능 쪽으로 나가보겠습니다.﻿&nbsp;</p>
<p></p>
<p></p>
</p>
