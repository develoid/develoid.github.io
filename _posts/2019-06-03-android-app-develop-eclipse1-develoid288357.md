---
layout: post
title: '[커뮤니티] #6 버튼(Button)을 만들어 보자'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/288357' ; </script>

<p>자, 이번시간에 배울 내용은 버튼입니다</p>
<p>약간 복잡한 내용도 있고 하니 잘 따라 오시길 바랍니다</p>
<p>버튼에는 일반 버튼, 이미지 버튼이 있는대요 일반 버튼을 마스터 하면 이미지 버튼도 되므로</p>
<p>이미지 버튼은 생략합니다</p>
<p>잠깐 강의의 흐름을 보면&nbsp;버튼을 마스터 한다음에는 EditView의 기초(응용은 좀 뒤에), 이미지 띄우기를 할 예정입니다</p>
<p>아마 이미지까지 나가게 되면 볼폼 없어도 나만의 앱 하나는 만드실수 있으실 겁니다 ㅎㅎ</p>
<p>6. 버튼(Button)을 만들어 보자</p>
<p>6-1 버튼 생성</p>
<p>저번 강좌에서 말한대로 프로젝트 생성은 건너 뜁니다</p>
<p>이름 : Button</p>
<p>액티비티 : BlankActivity로 만들어 주시면 됩니다</p>
<p>전 강좌에서 버튼 만드는방법을 잠시나마 배웠습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile30.uf.tistory.com%2Fimage%2F2233D74C51FDA7A32072CC%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile8.uf.tistory.com%2Fimage%2F262B924C51FDA7A308E7CB%22&amp;type=cafe_wa740"></p>
<p>이렇게 드래그 해서 버튼 하나 만들어 주세요</p>
<p>&lt;Button</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:layout_</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:layout_height="wrap_content"</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:layout_alignParentTop="true"</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:layout_centerHorizontal="true"</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:layout_marginTop="98dp"</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:text="Button" /&gt;</p>
<p>버튼의 소스입니다</p>
<p>지금까지 제 강좌를 모두 보셨다면 이 소스가 이해가 되실탠대요</p>
<p>id값부여</p>
<p>넓이, 높이</p>
<p>위부터 정렬</p>
<p>가운데 정렬</p>
<p>위에서 98dp만큼 떨어져 있다</p>
<p>라는 뜻이죠</p>
<p>자, 이렇게 하면 xml상에서의 버튼이 끝났습니다 (?)</p>
<p>왜냐... 버튼의 속성은 텍스트뷰의 속성과 많이 같습니다</p>
<p>그러므로 텍스트뷰를 알게되면 버튼의 속성은 비슷하니 그냥 따라올수 있는거죠</p>
<p>android:background</p>
<p>뭐 이런 속성은 버튼뿐만 아니라 모든 위젯(TexiView, Button, EditView등등)에서 사용가능하니 총정리 할때쯤 나오고 언급할 필요도 사실 없지요 ㅎㅎ</p>
<p>사실상 버튼은 xml이 아니라 java에서많이 사용합니다</p>
<p>그러므로 이번에는 자바에서 다뤄보도록 하겠습니다</p>
<p>버튼을 누르면 새로운 창이 나타나도록 구현해 볼건대요</p>
<p>이를 위해서는 새로운 액티비티를 만들어야 합니다</p>
<p>New - Other - Android Activity를 눌러 액티비티 하나 만듭시다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile10.uf.tistory.com%2Fimage%2F225D924D51FDA98E266AC7%22&amp;type=cafe_wa740"></p>
<p>이렇게 선택해 주시면 됩니다</p>
<p>[미르의 팁]</p>
<p>-New - Other - Android Activity로만 액티비티를 만들수 있나요?</p>
<p>아닙니다</p>
<p>자바 파일을 복사해서 만들수 있습니다</p>
<p>만 AndroidManifest.xml에 자동등록이 되는 이 방법으로 만드는게 편합니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F2376A83451FDAACD3A6B1B%22&amp;type=cafe_wa740"></p>
<p>Blank Activity를 눌러주시고 다음을 눌러줍시다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F2647233451FDAACE3DF6B4%22&amp;type=cafe_wa740"></p>
<p>자, 이건 액티비티 이름을 설정하는 건대요</p>
<p>이미 MainActivity는 있으니</p>
<p>이름을&nbsp;<u>ButtonActivity.java</u>으로 해주세요</p>
<p>정상적으로 액티비티가 만들어 졌습니다~&nbsp;ㅎㅎ</p>
<p>이제 버튼을 누르면 저 화면으로 이동하게 해봅시다</p>
<p>MainActivity에 들어가 봅시다</p>
<p>버튼을 눌렀을때 어떤 작업을 할껀지를 정해야 합니다</p>
<p>이때 사용하는 방법은 2가지가 있습니다</p>
<p>메소드를 이용한 방법과&nbsp;listener을 이용한 방법인대요</p>
<p>여기서는&nbsp;listener을 이용할것이므로 메소드에 관한 내용은 짧게 짚고 넘어갑시다(별로 추천하고 싶지 않은 방법인지라..)</p>
<p>public void (메소드 이름) (View v) {</p>
<p> Intent myintent = new Intent(this, (이동할 액티비티 이름).class);</p>
<p> startActivity(myintent);</p>
<p>}</p>
<p>자바코드의 아무데나(그렇다고 onCreate같은대 넣으시면 안되요) 위 메소드를 넣어줍시다</p>
<p>(메소드 이름)란에는 원하는것을 입력하시면 됩니다</p>
<p>android:onClick="(메소드 이름)"</p>
<p>xm으로 돌아와서 Button에 위 코드를 넣어줍시다</p>
<p>그럼 버튼을 클릭할경우 (메소드 이름)이라는 메소드를 실행한다 라는 뜻입니다</p>
<p>만 별로 추천하고 싶지 않군요</p>
<p>이 강좌에서는&nbsp;listener을 이용할겁니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile28.uf.tistory.com%2Fimage%2F272C694D51FDADF32B2FB4%22&amp;type=cafe_wa740"></p>
<p>이렇게 추가해 주세요</p>
<p>public class MainActivity extends Activity {</p>
<p> Button button1;</p>
<p> @Override</p>
<p> protected void onCreate(Bundle savedInstanceState) {</p>
<p>  super.onCreate(savedInstanceState);</p>
<p>  setContentView(R.layout.activity_main);</p>
<p>  </p>
<p>  button1 = (Button)findViewById(R.id.button1);</p>
<p>  button1.setOnClickListener(listener);</p>
<p> }</p>
<p>추가후, Import하는거 잊지 마시길</p>
<p>그다음 빨간색 '}'아래에 아래 소스를 추가합시다</p>
<p>Button.OnClickListener listener = new Button.OnClickListener()</p>
<p>  &nbsp;{</p>
<p>  &nbsp;&nbsp;public void onClick(View v)</p>
<p>  &nbsp;&nbsp;{</p>
<p>  &nbsp;&nbsp; switch(v.getId()){</p>
<p>//case문이 들어갑니다</p>
<p>  &nbsp;&nbsp; }</p>
<p>  &nbsp;&nbsp;}</p>
<p>  &nbsp;};</p>
<p>그다음 또 import해주시고요 ㅎ..</p>
<p>switch-case문으로 어떤 버튼이 눌려졌는지 판단후 작업을 할겁니다</p>
<p>case R.id.button1:</p>
<p> Intent myintent = new Intent(this, (이동할 액티비티 이름).class);</p>
<p> startActivity(myintent);</p>
<p>break;</p>
<p>이런 형태로 구현해 주세요</p>
<p>여기서&nbsp;Intent myintent = new Intent(this, Button.class);을 보시면 this앞에 MainActivity.이 있는대요</p>
<p>만약 그냥 this라고 했을때 오류가 뜬다면 액티비티 이름을 붙혀주시면 오류가 해결됩니다</p>
<p>완성된 소스를 보면</p>
<p>public class MainActivity extends Activity {</p>
<p> Button&nbsp;<u>button1</u>;</p>
<p> @Override</p>
<p> protected void onCreate(Bundle savedInstanceState) {</p>
<p>  super.onCreate(savedInstanceState);</p>
<p>  setContentView(R.layout.activity_main);</p>
<p>  </p>
<p>  <u>button1&nbsp;= (Button) findViewById(R.id.button1);</u></p>
<p>  <u>button1.setOnClickListener(listener);</u></p>
<p> }</p>
<p> </p>
<p> Button.OnClickListener listener = new Button.OnClickListener()</p>
<p> &nbsp;{</p>
<p> &nbsp;&nbsp;public void onClick(View v)</p>
<p> &nbsp;&nbsp;{</p>
<p> &nbsp;&nbsp; switch(v.getId()){</p>
<p> &nbsp;&nbsp;&nbsp;<u>case R.id.button1:</u></p>
<p> &nbsp;&nbsp; &nbsp;<u>Intent myintent = new Intent(MainActivity.this, ButtonActivity.class);</u></p>
<p> &nbsp;&nbsp; &nbsp;<u>startActivity(myintent);</u></p>
<p> &nbsp;&nbsp;&nbsp;<u>break;</u></p>
<p> &nbsp;&nbsp; }</p>
<p> &nbsp;&nbsp;}</p>
<p> &nbsp;};</p>
<p>입니다 (굵은 글씨 추가)</p>
<p>만약 버튼을 2개이상 추가하려면 밑줄친 부분이 반복되겠죠??</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F2411223E51FDBF490E75A9%22&amp;type=cafe_wa740"></p>
<p>버튼을 누르면</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile9.uf.tistory.com%2Fimage%2F2776623E51FDBF4A0FFB6F%22&amp;type=cafe_wa740"></p>
<p>또다른 액티비티가 실행됩니다</p>
<p>이렇게 해서 버튼에 대해서도 알아봤습니다</p>
<p>버튼의 글자도 button1.setText();를 이용하여 변경이 가능합니다</p>
<p>응용은 당신의 몫!</p>
