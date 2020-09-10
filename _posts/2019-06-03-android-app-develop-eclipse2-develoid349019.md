---
layout: post
title: '[커뮤니티] "아마도 쉬운 안드로이드 어플만들기" [35] 데이터베이스, 테이블 생성하기'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/349019' ; </script>

<table    ><tbody><tr><td ></td><td ><table ><tbody><tr><td  valign="bottom"><p>&nbsp;</p>
</td></tr></tbody></table><p><p><p>&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</p>
<p>&nbsp;</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페</u></p>
<p><u>업로드 시간 : 매주 일요일 오후 11시</u><p></p>
<p>&nbsp;난이도 : ★★★★★★★﻿﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿</p>
<p></p>
<p>&nbsp;</p>
<p>﻿네 이제 할게 슬슬 없어지기 시작합니다.&nbsp;</p>
<p>오늘은 데이터베이스로 가겠습니다.&nbsp;</p>
<p>﻿&nbsp;</p>
<p>﻿&nbsp;</p>
<p>﻿여기서 데이터베이스의 활용 순서는&nbsp;</p>
<p>(데이터베이스&nbsp;생성 -&gt; 테이블 생성 -&gt; 레코드 추가)&nbsp;&nbsp;&nbsp;&nbsp; -&gt; 데이터 조회﻿&nbsp;</p>
<p>로 일단 생성을 해야겠죠</p>
<p>&nbsp;</p>
<p>코드를 보면서 이해를 해야 할 듯합니다.(엄청난 길이는 스포)</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131201_11%2Ftjdtnsu_1385902205236nlSnF_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p></p>
<table><tbody><tr><td ><p>xml&nbsp;파일&nbsp; </p>
<p>&nbsp;</p>
<p>&lt;LinearLayout xmlns:androhttp://schemas.android.com/apk/res/android">http://schemas.android.com/apk/res/android</a>"&nbsp;&nbsp;&nbsp; xmlns:tools="<a href="http://schemas.android.com/tools">http://schemas.android.com/tools</a>"&nbsp;&nbsp;&nbsp; android:layout_&nbsp;&nbsp;&nbsp; android:layout_height="match_parent"&nbsp;&nbsp;&nbsp; android:orientation="vertical"&nbsp;&nbsp;&nbsp; android:paddingTop="10dp" &gt;</p>
<p>&nbsp;&nbsp;&nbsp; &lt;LinearLayout &nbsp;&nbsp;&nbsp;&nbsp; android:orientation="horizontal"&nbsp;&nbsp;&nbsp;&nbsp; android:layout_&nbsp;&nbsp;&nbsp;&nbsp; android:layout_height="wrap_content"&nbsp;&nbsp;&nbsp;&nbsp; android:paddingLeft="10dp"&nbsp;&nbsp;&nbsp;&nbsp; &gt;&nbsp;&nbsp;&nbsp; &nbsp;&lt;Button &nbsp;&nbsp;&nbsp;android:&nbsp;&nbsp;&nbsp;android:layout_&nbsp;&nbsp;&nbsp;android:layout_height="wrap_content"&nbsp;&nbsp;&nbsp;android:&nbsp;&nbsp;&nbsp;android:text="데이터베이스 생성"&nbsp;&nbsp;&nbsp;android:textSize="14dp"&nbsp;&nbsp;&nbsp;/&gt;&nbsp;&nbsp;&lt;EditText&nbsp; &nbsp;&nbsp;&nbsp;android:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_height="wrap_content" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:hint="데이터베이스 이름 입력"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:text="Database.db"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:textSize="18dp"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /&gt;&nbsp;&lt;/LinearLayout&gt;&nbsp;&lt;LinearLayout &nbsp;&nbsp;&nbsp;&nbsp; android:orientation="horizontal"&nbsp;&nbsp;&nbsp;&nbsp; android:layout_&nbsp;&nbsp;&nbsp;&nbsp; android:layout_height="wrap_content"&nbsp;&nbsp;&nbsp;&nbsp; android:paddingLeft="10dp"&nbsp;&nbsp;&nbsp;&nbsp; &gt;&nbsp;&nbsp;&nbsp; &nbsp;&lt;Button &nbsp;&nbsp;&nbsp;android:&nbsp;&nbsp;&nbsp;android:layout_&nbsp;&nbsp;&nbsp;android:layout_height="wrap_content"&nbsp;&nbsp;&nbsp;android:&nbsp;&nbsp;&nbsp;android:text="테이블 생성"&nbsp;&nbsp;&nbsp;android:textSize="14dp"&nbsp;&nbsp;&nbsp;/&gt;&nbsp;&nbsp;&lt;EditText&nbsp; &nbsp;&nbsp;&nbsp;android:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_height="wrap_content" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:hint="테이블 이름 입력"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:text="Table1"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:textSize="18dp"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /&gt;&nbsp;&lt;/LinearLayout&gt;&nbsp;&lt;TextView&nbsp; &nbsp;&nbsp;android:&nbsp;&nbsp;&nbsp;&nbsp; android:layout_ &nbsp;&nbsp;&nbsp;&nbsp; android:layout_height="wrap_content" &nbsp;&nbsp;&nbsp;&nbsp; android:text="상태 : "&nbsp;&nbsp;&nbsp;&nbsp; android:textSize="14dp"&nbsp;&nbsp;&nbsp;&nbsp; android:paddingLeft="10dp"&nbsp;&nbsp;&nbsp;&nbsp; android:layout_marginTop="10dp"&nbsp;&nbsp;&nbsp;&nbsp; /&gt;</p>
<p>&lt;/LinearLayout&gt;&nbsp;&nbsp;</p>
</td></tr><tr><td ><p>&nbsp;java 파일</p>
<p>&nbsp;</p>
<p>package naver.maybeeasyandroidprogramming;&nbsp;import android.app.Activity;import android.content.ContentValues;import android.database.sqlite.SQLiteDatabase;import android.os.Bundle;import android.util.Log;import android.view.Menu;import android.view.View;import android.view.View.OnClickListener;import android.widget.Button;import android.widget.EditText;import android.widget.TextView;&nbsp;public class MainActivity extends Activity {&nbsp;&nbsp;&nbsp;&nbsp; String databaseName;&nbsp;&nbsp;&nbsp; String tableName;&nbsp;&nbsp;&nbsp; TextView status;&nbsp;&nbsp;&nbsp; boolean databaseCreated = false;&nbsp;&nbsp;&nbsp; boolean tableCreated = false;&nbsp;&nbsp;&nbsp;&nbsp; SQLiteDatabase db;&nbsp;&nbsp;&nbsp;&nbsp; @Override&nbsp;&nbsp;&nbsp; public void onCreate(Bundle savedInstanceState) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; super.onCreate(savedInstanceState);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; setContentView(R.layout.activity_main);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; final EditText databaseNameInput = (EditText) findViewById(R.id.databaseNameInput); // EditText&nbsp;값 불러옴&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; final EditText tableNameInput = (EditText) findViewById(R.id.tableNameInput);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Button createDatabaseBtn = (Button) findViewById(R.id.createDatabaseBtn);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; createDatabaseBtn.setOnClickListener(new OnClickListener() { //누르면 이벤트 발생&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public void onClick(View v) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; databaseName = databaseNameInput.getText().toString();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; createDatabase(databaseName); //&nbsp;createDatabase함수 실행&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; });&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Button createTableBtn = (Button) findViewById(R.id.createTableBtn); // 위와 같음&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; createTableBtn.setOnClickListener(new OnClickListener() {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public void onClick(View v) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; tableName = tableNameInput.getText().toString();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; createTable(tableName);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; int count = insertRecord(tableName);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println(count + " records inserted.");&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; });&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status = (TextView) findViewById(R.id.status);&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp; private void createDatabase(String name) {&nbsp; //여기서부터 createDatabase 함수&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println("creating database [" + name + "].");&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; try {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; db = openOrCreateDatabase(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; name,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MODE_WORLD_WRITEABLE,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; null); //데이터베이스 생성&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; databaseCreated = true;&nbsp;//정상적이면&nbsp;true&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println("database is created.");&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; } catch(Exception ex) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ex.printStackTrace();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println("database is not created."); // 아니면 false&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp; private void createTable(String name) { //여기서부터 createTable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println("creating table [" + name + "].");&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; db.execSQL("create table if not exists " + name + "("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + " _id integer PRIMARY KEY autoincrement, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + " name text, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + " age integer, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + " phone text);" ); //테이블 생성&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; tableCreated = true;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp; private int insertRecord(String name) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println("inserting records into table " + name + ".");&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; int count = 3;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; db.execSQL( "insert into " + name + "(name, age, phone) values ('John', 20, '010-7788-1234');" );&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; db.execSQL( "insert into " + name + "(name, age, phone) values ('Mike', 35, '010-8888-1111');" );&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; db.execSQL( "insert into " + name + "(name, age, phone) values ('Sean', 26, '010-6677-4321');" );&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return count;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; private void println(String msg) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Log.d("SampleDatabase", msg);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status.append("\n" + msg);&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @Override&nbsp;&nbsp;&nbsp; public boolean onCreateOptionsMenu(Menu menu) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // Inflate the menu; this adds items to the action bar if it is present.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; getMenuInflater().inflate(R.menu.main, menu);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return true;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;</p>
</td></tr></tbody></table><p>&nbsp;</p>
<p>뭐 이렇습니다.</p>
<p>내일은 데이터를 업그레이드해보도록 하겠습니다.</p>
<p></p>
<p>&nbsp;</p>
<p></p>
</p>
</p>
</td></tr></tbody></table>
