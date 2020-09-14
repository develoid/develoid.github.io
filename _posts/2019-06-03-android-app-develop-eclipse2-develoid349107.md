---
layout: post
title: '[커뮤니티] 아마도 쉬운 안드로이드 어플만들기 [37] 데이터 조회하기(1)'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/349107' ; </script>

<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"><p><p><p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페</u></p>
<p><u>업로드 시간 : 매주 일요일 오후 11시</u><p></p>
<p>&nbsp;난이도 : ★★★★★★★★﻿﻿</p>
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
<p>오늘은 본격적으로 데이터베이스 생성, 표 생성, 레코드 입력 뒤</p>
<p>헬퍼 클래스를 사용 후 데이터를 조회해 보겠습니다.</p>
<p>&nbsp;</p>
<p>일단 코드를 쭉 나열하고 풀이는 몇 시간에 나누어서 하겠습니다.</p>
<p><table><tbody><tr><td ><p>&nbsp;XML</p>
<p>&nbsp;</p>
<p>&nbsp;&lt;LinearLayout xmlns:androhttp://schemas.android.com/apk/res/android">http://schemas.android.com/apk/res/android</a>"&nbsp;&nbsp;&nbsp; xmlns:tools="<a href="http://schemas.android.com/tools">http://schemas.android.com/tools</a>"&nbsp;&nbsp;&nbsp; android:layout_&nbsp;&nbsp;&nbsp; android:layout_height="match_parent"&nbsp;&nbsp;&nbsp; android:orientation="vertical"&nbsp;&nbsp;&nbsp; android:paddingTop="10dp" &gt;</p>
<p>&nbsp;&nbsp;&nbsp; &lt;LinearLayout &nbsp;&nbsp;&nbsp;&nbsp; android:orientation="horizontal"&nbsp;&nbsp;&nbsp;&nbsp; android:layout_&nbsp;&nbsp;&nbsp;&nbsp; android:layout_height="wrap_content"&nbsp;&nbsp;&nbsp;&nbsp; android:paddingLeft="10dp"&nbsp;&nbsp;&nbsp;&nbsp; &gt;&nbsp;&nbsp;&nbsp; &nbsp;&lt;Button &nbsp;&nbsp;&nbsp;android:&nbsp;&nbsp;&nbsp;android:layout_&nbsp;&nbsp;&nbsp;android:layout_height="wrap_content"&nbsp;&nbsp;&nbsp;android:&nbsp;&nbsp;&nbsp;android:text="조회"&nbsp;&nbsp;&nbsp;android:textSize="14dp"&nbsp;&nbsp;&nbsp;/&gt;&nbsp;&nbsp;&lt;EditText&nbsp; &nbsp;&nbsp;&nbsp;android:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_height="wrap_content" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:hint="조회할 텍스트 입력"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:textSize="18dp"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /&gt;&nbsp;&lt;/LinearLayout&gt;&nbsp;&lt;LinearLayout &nbsp;&nbsp;&nbsp;&nbsp; android:orientation="horizontal"&nbsp;&nbsp;&nbsp;&nbsp; android:layout_&nbsp;&nbsp;&nbsp;&nbsp; android:layout_height="wrap_content"&nbsp;&nbsp;&nbsp;&nbsp; android:paddingLeft="10dp"&nbsp;&nbsp;&nbsp;&nbsp; &gt;</p>
<p>&nbsp;&lt;/LinearLayout&gt;&nbsp;&lt;TextView&nbsp; &nbsp;&nbsp;android:&nbsp;&nbsp;&nbsp;&nbsp; android:layout_ &nbsp;&nbsp;&nbsp;&nbsp; android:layout_height="wrap_content" &nbsp;&nbsp;&nbsp;&nbsp; android:text="상태 : "&nbsp;&nbsp;&nbsp;&nbsp; android:textSize="14dp"&nbsp;&nbsp;&nbsp;&nbsp; android:paddingLeft="10dp"&nbsp;&nbsp;&nbsp;&nbsp; android:layout_marginTop="10dp"&nbsp;&nbsp;&nbsp;&nbsp; /&gt;</p>
<p>&lt;/LinearLayout&gt;&nbsp;&nbsp;</p>
</td></tr><tr><td ><p>&nbsp;JAVA</p>
<p>&nbsp;</p>
<p>package naver.maybeeasyandroidprogramming;&nbsp;import android.app.Activity;import android.content.Context;import android.database.Cursor;import android.database.sqlite.SQLiteDatabase;import android.database.sqlite.SQLiteOpenHelper;import android.os.Bundle;import android.util.Log;import android.view.Menu;import android.view.View;import android.view.View.OnClickListener;import android.widget.Button;import android.widget.EditText;import android.widget.TextView;&nbsp;public class MainActivity extends Activity {&nbsp; &nbsp;&nbsp;&nbsp; private TextView status;&nbsp;&nbsp;&nbsp;&nbsp; public static final String TAG = "MainActivity";&nbsp;&nbsp;&nbsp;&nbsp; private static String DATABASE_NAME = null;&nbsp;&nbsp;&nbsp; private static String TABLE_NAME = "employee";&nbsp;&nbsp;&nbsp; private static int DATABASE_VERSION = 1;&nbsp;&nbsp;&nbsp; private DatabaseHelper dbHelper;&nbsp;&nbsp;&nbsp; private SQLiteDatabase db;&nbsp;&nbsp;&nbsp;&nbsp; @Override&nbsp;&nbsp;&nbsp; public void onCreate(Bundle savedInstanceState) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; super.onCreate(savedInstanceState);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; setContentView(R.layout.activity_main);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status = (TextView) findViewById(R.id.status);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; final EditText input01 = (EditText) findViewById(R.id.input);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Button queryBtn = (Button) findViewById(R.id.Button);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; queryBtn.setOnClickListener(new OnClickListener() {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public void onClick(View v) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DATABASE_NAME = input01.getText().toString();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; boolean isOpen = openDatabase();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if (isOpen) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; executeRawQuery();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; executeRawQueryParam();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; });&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp; private boolean openDatabase() {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println("opening database [" + DATABASE_NAME + "].");&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; dbHelper = new DatabaseHelper(this);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; db = dbHelper.getWritableDatabase();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return true;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp; private void executeRawQuery() {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println("\nexecuteRawQuery called.\n");&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cursor c1 = db.rawQuery("select count(*) as Total from " + TABLE_NAME, null);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println("cursor count : " + c1.getCount());&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c1.moveToNext();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println("record count : " + c1.getInt(0));&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c1.close();&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp; private void executeRawQueryParam() {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println("\nexecuteRawQueryParam called.\n");&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String SQL = "select name, age, phone "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + " from " + TABLE_NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + " where age &gt; ?";&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String[] args= {"30"};&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cursor c1 = db.rawQuery(SQL, args);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; int recordCount = c1.getCount();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println("cursor count : " + recordCount + "\n");&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; for (int i = 0; i &lt; recordCount; i++) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c1.moveToNext();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String name = c1.getString(0);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; int age = c1.getInt(1);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String phone = c1.getString(2);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println("Record #" + i + " : " + name + ", " + age + ", " + phone);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c1.close();&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp; private void executeRawQueryParam2() {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println("\nexecuteRawQueryParam2 called.\n");&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String[] columns = {"name", "age", "phone"};&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String whereStr = "where age &gt; ?";&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String[] whereParams = {"30"};&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cursor c1 = db.query(TABLE_NAME, columns,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; whereStr, whereParams,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; null, null, null);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; int recordCount = c1.getCount();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println("cursor count : " + recordCount + "\n");&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; for (int i = 0; i &lt; recordCount; i++) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c1.moveToNext();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String name = c1.getString(0);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; int age = c1.getInt(1);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String phone = c1.getString(2);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println("Record #" + i + " : " + name + ", " + age + ", " + phone);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c1.close();&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp; private void println(String msg) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Log.d(TAG, msg);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status.append("\n" + msg);&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; private class DatabaseHelper extends SQLiteOpenHelper {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public DatabaseHelper(Context context) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; super(context, DATABASE_NAME, null, DATABASE_VERSION);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public void onCreate(SQLiteDatabase db) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println("creating table [" + TABLE_NAME + "].");&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; try {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String DROP_SQL = "drop table if exists " + TABLE_NAME;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; db.execSQL(DROP_SQL);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; } catch(Exception ex) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Log.e(TAG, "Exception in DROP_SQL", ex);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String CREATE_SQL = "create table " + TABLE_NAME + "("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + " _id integer PRIMARY KEY autoincrement, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + " name text, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + " age integer, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + " phone text)";&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; try {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; db.execSQL(CREATE_SQL);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; } catch(Exception ex) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Log.e(TAG, "Exception in CREATE_SQL", ex);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println("inserting records.");&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; try {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; db.execSQL( "insert into " + TABLE_NAME + "(name, age, phone) values ('John', 20, '010-7788-1234');" );&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; db.execSQL( "insert into " + TABLE_NAME + "(name, age, phone) values ('Mike', 35, '010-8888-1111');" );&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; db.execSQL( "insert into " + TABLE_NAME + "(name, age, phone) values ('Sean', 26, '010-6677-4321');" );&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; } catch(Exception ex) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Log.e(TAG, "Exception in insert SQL", ex);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public void onOpen(SQLiteDatabase db) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; println("opened database [" + DATABASE_NAME + "].");&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Log.w(TAG, "Upgrading database from version " + oldVersion + " to " + newVersion + ".");&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp; }</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @Override&nbsp;&nbsp;&nbsp; public boolean onCreateOptionsMenu(Menu menu) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // Inflate the menu; this adds items to the action bar if it is present.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; getMenuInflater().inflate(R.menu.main, menu);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return true;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;/이 코드는 어딘가의 예제에 있는 것을 사용했음을 밝힙니다.</p>
</td></tr></tbody></table><p>&nbsp;</p>
<p>&nbsp;JAVA 코드를 유심히 살펴 보아야 하는데</p>
<p>200줄이나 됩니다.&nbsp;</p>
<p>하나씩 살펴보아야 하는데</p>
<p>이해가 안될겁니다(아마)</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>-1-</p>
<p>@Override</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code >public</code> <code >void</code> <code >onCreate(Bundle savedInstanceState) {</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >super</code><code >.onCreate(savedInstanceState);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >setContentView(R.layout.activity_main);</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >status = (TextView) findViewById(R.id.status);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >final</code> <code >EditText input01 = (EditText) findViewById(R.id.input01);</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >Button queryBtn = (Button) findViewById(R.id.queryBtn);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >queryBtn.setOnClickListener(</code><code >new</code> <code >OnClickListener() {</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >public</code> <code >void</code> <code >onClick(View v) {</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >DATABASE_NAME = input01.getText().toString();</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >boolean</code> <code >isOpen = openDatabase();</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >if</code> <code >(isOpen) {</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >executeRawQuery();</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >executeRawQueryParam();</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >});</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}</code></p>
<p>&nbsp;</p>
<p>제일 앞쪽에 있는 부분입니다.</p>
<p>지금 빨간색으로 칠해놓은 부분은</p>
<p>새로운 <u>헬퍼 클래스</u>를 정의해놓은 부분입니다.</p>
<p>메인 액티비에에서 선언된 변수들 중 dbHelper는 DatabaseHelper 객체를 위한 것입니다.</p>
<p>&nbsp;</p>
<p><u>헬퍼 클래스</u> : 데이터베이스를 만들거나 열기 위해 필요한 일들을 도와주는 역할을 함</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>-2-</p>
<p>&nbsp;&nbsp;&nbsp;<code >private</code> <code >boolean</code> <code >openDatabase() {</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >println(</code><code >"opening database ["</code> <code >+ DATABASE_NAME + </code><code >"]."</code><code >);</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >dbHelper = </code><code >new</code> <code >DatabaseHelper(</code><code >this</code><code >);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >db = dbHelper.getWritableDatabase();</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >return</code> <code >true</code><code >;</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code >private</code> <code >void</code> <code >executeRawQuery() {</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >println(</code><code >"\nexecuteRawQuery called.\n"</code><code >);</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >Cursor c1 = db.rawQuery(</code><code >"select count(*) as Total from "</code> <code >+ TABLE_NAME, </code><code >null</code><code >);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >println(</code><code >"cursor count : "</code> <code >+ c1.getCount());</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >c1.moveToNext();</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >println(</code><code >"record count : "</code> <code >+ c1.getInt(</code><code >0</code><code >));</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >c1.close();</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code >private</code> <code >void</code> <code >executeRawQueryParam() {</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >println(</code><code >"\nexecuteRawQueryParam called.\n"</code><code >);</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >String SQL = </code><code >"select name, age, phone "</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >+ </code><code >" from "</code> <code >+ TABLE_NAME</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >+ </code><code >" where age &gt; ?"</code><code >;</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >String[] args= {</code><code >"30"</code><code >};</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >Cursor c1 = db.rawQuery(SQL, args);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >int</code> <code >recordCount = c1.getCount();</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >println(</code><code >"cursor count : "</code> <code >+ recordCount + </code><code >"\n"</code><code >);</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >for</code> <code >(</code><code >int</code> <code >i = </code><code >0</code><code >; i &lt; recordCount; i++) {</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >c1.moveToNext();</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >String name = c1.getString(</code><code >0</code><code >);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >int</code> <code >age = c1.getInt(</code><code >1</code><code >);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >String phone = c1.getString(</code><code >2</code><code >);</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >println(</code><code >"Record #"</code> <code >+ i + </code><code >" : "</code> <code >+ name + </code><code >", "</code> <code >+ age + </code><code >", "</code> <code >+ phone);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >c1.close();</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code >private</code> <code >void</code> <code >executeRawQueryParam2() {</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >println(</code><code >"\nexecuteRawQueryParam2 called.\n"</code><code >);</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >String[] columns = {</code><code >"name"</code><code >, </code><code >"age"</code><code >, </code><code >"phone"</code><code >};</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >String whereStr = </code><code >"where age &gt; ?"</code><code >;</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >String[] whereParams = {</code><code >"30"</code><code >};</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >Cursor c1 = db.query(TABLE_NAME, columns,</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >whereStr, whereParams,</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >null</code><code >, </code><code >null</code><code >, </code><code >null</code><code >);</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >int</code> <code >recordCount = c1.getCount();</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >println(</code><code >"cursor count : "</code> <code >+ recordCount + </code><code >"\n"</code><code >);</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >for</code> <code >(</code><code >int</code> <code >i = </code><code >0</code><code >; i &lt; recordCount; i++) {</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >c1.moveToNext();</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >String name = c1.getString(</code><code >0</code><code >);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >int</code> <code >age = c1.getInt(</code><code >1</code><code >);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >String phone = c1.getString(</code><code >2</code><code >);</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >println(</code><code >"Record #"</code> <code >+ i + </code><code >" : "</code> <code >+ name + </code><code >", "</code> <code >+ age + </code><code >", "</code> <code >+ phone);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >c1.close();</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}</code></p>
﻿<p>&nbsp;</p>
<p>다음 부분입니다.</p>
<p>빨간 색으로 칠해놓은 부분은 상위 클래스의 생성자를 호출하는 부분입니다.</p>
<p>상세하게 설명하면 생성자에서 데이터베이스 이름과 버젼을 이용하는 겁니다.</p>
<p>&nbsp;</p>
<p>그 다음 주황색 부분입니다.</p>
<p>rawQuery() 메소드를 이용해 <u>SELECT SQL</u>문을 실행합니다.</p>
<p>여기서 rewQuery는 결과값을 Cursor 객체를 받을 수 있는 SQL 실행 방법입니다.</p>
<p>&nbsp;</p>
<p><u>SELECT SQL</u> : SELECT 문에서 필수 구성 절. 지정 열을 설명하는 것</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>노랑색 부분에는 커서 객체를 이용해 레코드를 하나씩 처리하는 구문입니다.</p>
<p>moveToNext 메소드를 이용해 레코드를 가리키도록 해 false 값을 리턴할 때 까지 레코드 값을 가져오는 방법을 일반적으로 사용합니다.</p>
<p>for문을 사용할 때에는 getCount를 이용하면 됩니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>갈색 부분에는 커서를 닫는 부분입니다.</p>
<p>&nbsp;</p>
<p>초록색 부분에는 파라미터를 전달하면서 rawQuery() 메소드를 이용합니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>어쨌든 이렇게 되면 테이블이 없으면 새로 만들고, 레코드를 추가 한 후 쿼리를 실행하고</p>
<p>있으면 열기만 하고 기존에 만들어진 테이블의 내용을 조회하면 됩니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>다음 시간에 계속 하겠습니다.</p>
<p>&nbsp;</p>
<p></p>
<p></p>
<p></p>
<p></p>
</p>
</p>
