---
layout: post
title: '[커뮤니티] #16 한번에3개를, [토글버튼/체크박스/라디오버튼]'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/316991' ; </script>

<p>안녕하세요 ㅎ</p>
<p>엄청~ 오래간 만인대</p>
<p>시험기간때문에........</p>
<p>아무튼 빨리 시작합니다!!</p>
<p>참고로 15번 seekbar예제소스는 이 글이 올라가는 즉시 첨부되어 집니다</p>
<p>이글이 올라와 있다면&nbsp;<a href="http://whdghks913.tistory.com/347">#15 SeekBar로 화면 밝기 조절해 보자</a>&nbsp;강좌의 아랫부분에 예제소스가 첨부되어 있는겁니다 ㅎㅎ</p>
<p>16번째 이 강좌의 예제소스도 17번째 강좌가 올라오면 첨부되어 집니다</p>
<p>16.&nbsp;한번에 3개를, [토글버튼/체크박스/라디오버튼]</p>
<p>16-1 뭐지 한번에 3개는?</p>
<p>자, 아래 사진을 봅시다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F2330E33E524E7AB507199B%22&amp;type=cafe_wa740"></p>
<p>[그림 1] 배운 위젯 사용법을 체크해 두었다</p>
<p></p>
<p>우리는 실력을 쌓기 위해 여러가지 기본 위젯을 배웠습니다</p>
<p>TextView, Button, ProgressBar, SeekBar...</p>
<p>그런대도 엄청나게 많이 남아 있습니ㅏㄷ...</p>
<p>토글버튼, 체크박스, 스위치, 스피너, 별, 라디오버튼....</p>
<p>이중에서 오늘은 한 강좌에 3개 위젯을 모두 설명하겠습니다</p>
<p>그리고... 이제부터 조금 꼬와서 어플을 만들어 보겠습니다</p>
<p>16-2 어떻게 만들어 볼까?</p>
<p>이 질문의 답은 추후에 여러분이 스스로 답해서 만들어 보세요</p>
<p>저는 이렇게 답하겠습니다</p>
<p>"먼저 체크박스에 선택을 하면 나머지 토글버튼, 라디오 버튼이&nbsp;아래에 나타나고</p>
<p>각각 선택할때마다 토스트 알림이 나오도록 만들어 보겠습니다"</p>
<p>16-3 이론적 배경은?</p>
<p>없어도 됩니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ</p>
<p>설명 주의깊게 읽고 따라와 주셔야만 성공할수 있는 부분입니다</p>
<p>16-4 만들어 볼까요?</p>
<p>일단 체크박스를 배치해 봅시다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile28.uf.tistory.com%2Fimage%2F233B8D4E524E7C2109307A%22&amp;type=cafe_wa740"></p>
<p>체크박스 추가했습니다 ㅎㅎ</p>
<p>바로 체크박스 아래에 레이아웃을 하나 만들어 줘야 합니다</p>
<p>Layouts이라는 폴더를 열어 RelativeLayout을 바로 체크박스 아래로 드래그 해주세요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F2449FA49524E7CC8092C42%22&amp;type=cafe_wa740"></p>
<p>추가하자 마자 코드를 보면 다음과 같습니다</p>
<p>&lt;RelativeLayout</p>
<p>&nbsp; &nbsp; android:layout_</p>
<p>&nbsp; &nbsp; android:layout_height="wrap_content"</p>
<p>&nbsp; &nbsp; android:layout_below="@+id/checkBox1"</p>
<p>&nbsp; &nbsp; android:layout_centerHorizontal="true"</p>
<p>&nbsp; &nbsp; android:layout_marginTop="28dp" &gt;&nbsp;</p>
<p>&lt;/RelativeLayout&gt;</p>
<p>잘 추가되었내요 ㅎㅎ</p>
<p>몇가지 수정해봅시다</p>
<p>일단 크기를 모두&nbsp;match_parent으로 바꿔줄까요?</p>
<p>작으면 추가하기도 힘드니까요ㅋ</p>
<p>그다음에 id값도 줍시다</p>
<p>android:</p>
<p>이거면 되겠죠??</p>
<p></p>
<p>만들어진 코드는 아래와 같습니다</p>
<p>&lt;CheckBox</p>
<p>&nbsp; &nbsp; android:</p>
<p>&nbsp; &nbsp; android:layout_</p>
<p>&nbsp; &nbsp; android:layout_height="wrap_content"</p>
<p>&nbsp; &nbsp; android:layout_alignParentTop="true"</p>
<p>&nbsp; &nbsp; android:layout_centerHorizontal="true"</p>
<p>&nbsp; &nbsp; android:layout_marginTop="45dp"</p>
<p>&nbsp; &nbsp; android:text="체크하시면 나타납니다" /&gt;</p>
<p>&lt;RelativeLayout</p>
<p>&nbsp; &nbsp; android:</p>
<p>&nbsp; &nbsp; android:layout_</p>
<p>&nbsp; &nbsp; android:layout_height="match_parent"</p>
<p>&nbsp; &nbsp; android:layout_below="@+id/checkBox1"</p>
<p>&nbsp; &nbsp; android:layout_centerHorizontal="true"</p>
<p>&nbsp; &nbsp; android:layout_marginTop="28dp" &gt;</p>
<p>&lt;/RelativeLayout&gt;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F2368914D524E7E4E38A10A%22&amp;type=cafe_wa740"></p>
<p>호호 잘되어 가고 있군요</p>
<p>이제 우리는 저 파란상자, 즉 아까 추가한 레이아웃에 필요한 것을 넣을겁니다</p>
<p>필요한건 3가지</p>
<p>ToggleButton,&nbsp;RadioGroup,&nbsp;RadioButton입니다</p>
<p>[미르의 팁]</p>
<p>Q. 라디오 버튼과 체크박스는 뭐가 다를까요?</p>
<p>A. 체크박스는 여러개를 선택할수 있습니다</p>
<p>그러나 라디오 버튼은 여러개중 딱 한개만 선택이 가능합니다</p>
<p>오지선다형 시험문제에서 5개의 보기중 딱 한개만 선택할수 있다 라고 이해해 주세요 ㅎㅎ</p>
<p>먼저 토글부터 추가해 보겠습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F2137A13E524E807E2DF00A%22&amp;type=cafe_wa740"></p>
<p>토글을 추가해 주세요</p>
<p>물론 아까 만든 레이아웃에 넣어야만 합니다!!</p>
<p>그다음은.. 라디오 그룹이랑 라디오 버튼인대요</p>
<p>라디오 버튼은 Form Widgets아래에 있습니다</p>
<p>라디오 그룹은 어디 있는지 모르겠내요;;</p>
<p>그러나 꼭 필요합니다</p>
<p>그래서 이번에는 드래그 추가 말고 코드 입력 방식으로 해볼까 합니다</p>
<p>...물론 그냥 코드를 던져주진 않을겁니다</p>
<p>처음 라디오 그룹을 지정할때의 코드입니다</p>
<p>&lt;RadioGroup</p>
<p>&nbsp; &nbsp; android:</p>
<p>&nbsp; &nbsp; android:layout_ &nbsp;</p>
<p>&nbsp; &nbsp; android:layout_height="wrap_content"</p>
<p>&nbsp; &nbsp; android:layout_below="@+id/toggleButton1"</p>
<p>&nbsp; &nbsp; android:layout_centerHorizontal="true"</p>
<p>&nbsp; &nbsp;&nbsp;android:orientation="vertical"</p>
<p>&nbsp; &nbsp;&nbsp;android:padding="5dp"&gt;</p>
<p>id값 주고있고... 특별한건 일단 두개 말곤 눈에 안틔죠?</p>
<p>android:orientation은 정렬 방향입니다</p>
<p>두개가 들어갈수 있는대요 horizontal는 수평(왼쪽에서 오른쪽으로 배열),</p>
<p>verticall은 수직(위에서 아래로)배열 방법입니다</p>
<p>우리는 위에서 아래로 배열이 필요하니&nbsp;verticall을 쓰죠</p>
<p>android:padding은 여백입니다</p>
<p>라디오 버튼 사이의 여백을 결정해 줍니다</p>
<p>그다음!!</p>
<p>&nbsp; &nbsp; &lt;RadioButton</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:layout_</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:layout_height="wrap_content"</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:layout_marginTop="27dp"</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:text="남자" /&gt;</p>
<p>&nbsp; &nbsp; &lt;RadioButton</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:layout_</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:layout_height="wrap_content"</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:layout_alignLeft="@+id/radioButton1"</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:layout_below="@+id/radioButton1"</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:text="여자" /&gt;</p>
<p>요놈들은 뭐...</p>
<p>설명할게 없내요</p>
<p>&lt;RadioButton&gt;인것 말고는 모두 &lt;Button&gt;과 같으니 말이죠 ㅋㅋ</p>
<p>마지막으로 라디오 그룹을 닫아줘야 하므로</p>
<p>&lt;/RadioGroup&gt;</p>
<p>을 입력해 주세요!!!!</p>
<p>이제 레이아웃은 다 짠거 같네요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F23773F33524E8313302E54%22&amp;type=cafe_wa740"></p>
<p>올ㅋ</p>
<p>모두 완성됬습니다</p>
<p>이제 java로 넘어와 주세요</p>
<p>먼저 맨날 하던거 먼저 하겠습니다 ㅎㅎ</p>
<p>뭘 사용할건지 정의를 해야죠~</p>
<p>CheckBox checkBox1;</p>
<p>RelativeLayout Layout;</p>
<p>ToggleButton toggleButton1;</p>
<p>RadioGroup Radiogroup;</p>
<p>뭔지 대충 아시죠??ㅋㅋ</p>
<p>평소처럼 추가해 주시면 됩니다</p>
<p>그다음에 id값을 연결해 봅시다</p>
<p>checkBox1 = (CheckBox) findViewById(R.id.checkBox1);</p>
<p>Layout = (RelativeLayout) findViewById(R.id.Layout);</p>
<p>toggleButton1 = (ToggleButton) findViewById(R.id.toggleButton1);</p>
<p>Radiogroup = (RadioGroup) findViewById(R.id.Radiogroup);</p>
<p>음음 여기까진 모두 따라 오시고 계시죠?</p>
<p>익숙한거니 ㅎ</p>
<p>그다음 Layout을 일단 안보이게 해야 합니다</p>
<p>Layout.setVisibility(View.GONE);</p>
<p>쉬운거 끝~!</p>
<p>이제부턴 천천히 따라와 주세요</p>
<p>먼저 체크박스 부터 해볼까요?</p>
<p>체크가 변경될때마다 리스너를 이용하여 레이아웃을 안보이게/보이게 만들어 봅시다</p>
<p>checkBox1.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {</p>
<p> @Override</p>
<p> public void&nbsp;onCheckedChanged(CompoundButton buttonView, boolean isChecked) {</p>
<p>  // TODO Auto-generated method stub</p>
<p>  if(isChecked)</p>
<p>   Layout.setVisibility(View.VISIBLE);</p>
<p>  else</p>
<p>   Layout.setVisibility(View.GONE);</p>
<p> }</p>
<p>});</p>
<p>(색 바꿔봤어요 ㅎㅎ, 그리고&nbsp;PC버전으로 봐주세요 되도록)</p>
<p>처음보는 것들이 많이 있습니다</p>
<p>먼저 첫번째줄부터</p>
<p>setOnCheckedChangeListener</p>
<p>뜻 그대로 체크가 변경될때마다 확인할 리스너를 결정하는 일입니다</p>
<p>버튼만들때 많이 만져봤죠?</p>
<p>체크박스를 해제/선택할때마다 리스너 안에있는&nbsp;onCheckedChanged 메소드가 실행됩니다</p>
<p>체크박스가 선택되어 있다면&nbsp;isChecked의&nbsp;값은 true가 됩니다</p>
<p>즉 체크되어 있다면!!!! if구문에 의해 레이아웃이 화면에 보여지게 됩니다 (setVisibility)</p>
<p>반대로 체크 해제를 한다면 isChecked의 값이 false가 되므로</p>
<p>레이아웃이 화면에 안보이게 되죠</p>
<p>[미르의 팁]</p>
<p>Q. 리스너말고 다른 곳에서는 체크 여부를 확인할수 없는대요?</p>
<p>A. 우리는 리스너로 바로 연결해서 onCheckedChanged가 호출될때 boolean isChecked으로 인해 체크한 값이 넘어옵니다</p>
<p>그러나 checkBox1.isChecked()으로도 체크 여부 확인이 가능하다는점 기억해 두세요!!</p>
<p>그다음 토글버튼 해봅시다</p>
<p>toggleButton1.setOnClickListener(new OnClickListener() {</p>
<p> @Override</p>
<p> public void onClick(View v) {</p>
<p>  // TODO Auto-generated method stub</p>
<p>  if(toggleButton1.isChecked())</p>
<p>   Toast.makeText(MainActivity.this, "토글버튼 체크됨", Toast.LENGTH_SHORT).show();</p>
<p>  else</p>
<p>   Toast.makeText(MainActivity.this, "토글버튼 체크 해제", Toast.LENGTH_SHORT).show();</p>
<p> }</p>
<p>});</p>
<p>이건 뭐...</p>
<p>설명 안해도 되지 않을까요..?ㅎㅎ</p>
<p>토글을 클릭하면 onClick메소드가 실행되는대요</p>
<p>위와 마찬가지로 체크되어 있다면 true, 체크 해제되어 있다면 false를 반환합니다</p>
<p>토글버튼은 체크박스+일반버튼 이라 생각하시면 됩니다</p>
<p>마지막 라디오 버튼관련 소스입니다</p>
<p>Radiogroup.setOnCheckedChangeListener(new OnCheckedChangeListener() {</p>
<p> @Override</p>
<p> public void&nbsp;onCheckedChanged(RadioGroup group,&nbsp;int checkedId) {</p>
<p>  // TODO Auto-generated method stub</p>
<p>  switch (checkedId){</p>
<p>  case R.id.radioButton1:</p>
<p>   Toast.makeText(MainActivity.this, "당신은 남자군요", Toast.LENGTH_SHORT).show();</p>
<p>   break;</p>
<p>  case R.id.radioButton2:</p>
<p>   Toast.makeText(MainActivity.this, "당신은 여자군요", Toast.LENGTH_SHORT).show();</p>
<p>   break;</p>
<p>  }</p>
<p> }</p>
<p>});</p>
<p>라디오 버튼을 감싸고 있던 라디오 그룹 기억 나시나 모르겠내요 ㅎ</p>
<p>이놈은 특이하게도 그룹을 사용해서 알아냅니다</p>
<p>위에서 설명을 안한거 같습니다만... 라디오 버튼은 여러개중&nbsp;한개만 선택가능합니다</p>
<p>체크박스는 여러개를 동시에 선택이 가능하지만 라디오 버튼은 단 한개!!!</p>
<p>코드는 체크박스와 비슷하나.. int checkedId를 주목해 주세요</p>
<p>이 리스너의&nbsp;onCheckedChanged메소드는 체크한 라디오 버튼의 id값을 넘겨주는군요</p>
<p>switch문으로 id값을 확인하여 토스트 메세지를 띄워주고 있습니다 ㅎㅎ</p>
<p>자, 끝났습니다 코드도!!</p>
<p>설명이 부족하거나 어려운건 알려주세요~</p>
<p>마지막으로 작동 확인해 보겠습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile26.uf.tistory.com%2Fimage%2F231F774B524E8C3F08B739%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile6.uf.tistory.com%2Fimage%2F2272D04B524E8C3F26736A%22&amp;type=cafe_wa740"></p>
<p>체크하면 정상적으로 나머지 것들이 표시됩니다 ㅎㅎ</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F253FA147524E8C760D19D0%22&amp;type=cafe_wa740">&nbsp;&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F21229F4A524E8C83026EF8%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F21401247524E8C970EB6B0%22&amp;type=cafe_wa740">&nbsp;&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F27158647524E8CAA2F6FC5%22&amp;type=cafe_wa740"></p>
<p>테스트 결과, 정상적으로 동작하는것을 확인할수 있습니다!!</p>
<p>이렇게 한시간 반에 걸쳐 강좌가 끝났습니다 ㅎ..</p>
<p>강좌 하나 쓰는건 한시간 반에서 두시간.. 덧글은 1초!!</p>
<p>정성을 생각해서라도 따뜻한 덧글 달아주세요~</p>
<p>그리고 이번 강좌는 설명이 뭔가 자신이 없내요;</p>
<p>설명이 오락가락 한거 같은대 이해 안된거 있으시면 꼭!! 알려주세요!!</p>
<p></p>
<p>이글은 [<a href="http://whdghks913.tistory.com/354">http://whdghks913.tistory.com/354</a>] 에서 다시 보실수 있으며 원본 글의 저작권은 미르에게 있습니다</p>
<p></p>
<p>예제소스는 다음 17번 강좌가 업로드 될때 첨부됩니다</p>
