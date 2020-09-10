---
layout: post
title: '[커뮤니티] #9 Toast와, 도둑잡기 게임을 만들어 봐요! (rand함수 이용)'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/294610' ; </script>

<p>Toast를 배우는 시간입니다~</p>
<p>토스트란 기기 아래 잠깐 표시되는 간단한 메세지 입니다</p>
<p>이번시간에는 토스트를 배울탠대 이것만 배우기에는 너무 강좌가 짧아서</p>
<p>함께 도둑잡기 게임을 만들어 보겠습니다~~~</p>
<p>재미있으니 꼭 따라해보세요!</p>
<p>이번 시간을 위해 자바 책을 뒤져보고 네이버도 찾아봤습니다~</p>
<p>오늘은 rand함수도 같이 배울겁니다</p>
<p>기본지식 : <a href="http://whdghks913.tistory.com/309">2013/08/14 - [미르의 개발 이야기/Java 배움터] - 번외 - rand함수를 이해하자</a></p>
<p>자바 기본 지식을 알고싶다면 여기로~</p>
<p>9. Toast와, 도둑잡기 게임을 만들어 봐요! (rand함수 이용)</p>
<p>9-1 프로젝트 생성 Pass~</p>
<p>9-2 Toast 완전정복</p>
<p>자바 소스로 오신다음 한 줄만 입력하시면 됩니다 ㅎㅎ</p>
<p>Toast.makeText(this,"토스트 메세지 내용",Toast.LENGTH_SHORT).show();</p>
<p>한줄이면 토스트가 끝나는대요</p>
<p>makeText()를 보면</p>
<p>this가 있습니다, 이것, 즉 이 액티비티를 보낸다 라는것인대요</p>
<p>저도 자세히는 모릅니다</p>
<p>만약 그대로 추가했을때 오류가 뜬다면 일반 Activity를 상속하는 메소드는</p>
<p>(자바파일이름).this해주시면 됩니다</p>
<p>fragment같이 context를 상속하고 있다면 Context같은것을 넣어주시면 됩니다</p>
<p>[미르의 팁]</p>
<p>-상속을 어떻게 알수 있나요?</p>
<p>public class MainActivity <u>extends Activity</u> {</p>
<p>이걸 보면 밑줄이 있죠? extends가 상속한다는 뜻입니다</p>
<p>저건 Activity를 상속하고 있지요</p>
<p>this다음 쉼표(,)뒤에는 토스트 메세지가 들어갑니다</p>
<p>저렇게 큰따음표""로 묶어도 되고 R.string.(스트링 이름)으로 사용해도 됩니다</p>
<p>R.string.(스트링 이름)을 쓸때는</p>
<p>Toast.makeText(this, <u>R.string.toast</u>,Toast.LENGTH_SHORT).show();</p>
<p>이런식으로 작성해 주시면 됩니다</p>
<p>그 옆에 있는 Toast.LENGTH_SHORT는 얼마만큼 토스트 메세지를 띄우는 시간입니다</p>
<p>Toast.LENGTH_LONG과</p>
<p>Toast.LENGTH_SHORT이 들어갈수 있는대요</p>
<p>long은 약 5초, short는 약 2초라 합니다</p>
<p>안타깝지만 시간을 늘리거나 줄일수는 없다 합니다</p>
<p>자 이렇게 Toast도 끝났습니다</p>
<p>이건 짧아요</p>
<p>그래서 도둑잡기 게임을 만들었는대요</p>
<p>한번 봅시다 ㅎㅎ</p>
<p>9-3 도둑잡기 게임을 위한 rand함수 설명</p>
<p>도둑잡기 게임을 위해 우리는 rand라는 함수의 사용법을 알아야 합니다</p>
<p>rand란 랜덤의 약자인대요</p>
<p>자바에서 랜덤 숫자를 구할수 있는 함수 입니다</p>
<p>rand의 자세한 내용은 <a href="http://whdghks913.tistory.com/309">2013/08/14 - [미르의 개발 이야기/Java 배움터] - 번외 - rand함수를 이해하자</a></p>
<p>에서 자세하게 다루고 있습니다</p>
<p>우리는 아래 코드만 알면 됩니다</p>
<p>num = ((int)(Math.random() * 9));num++;</p>
<p>이게 랜덤의 숫자를 구하는 가장 최소한의 두줄입니다 ㅎㅎㅎㅎㅎㅎㅎㅎ 제가 직접 짰어요</p>
<p>곱하는 9는 도둑잡기에 쓰일 버튼이 9개라 1~9의 숫자가 나와야 하므로 9를 곱하는 겁니다</p>
<p>그다음 1을 증가시켜야만 하고요</p>
<p>그럼 rand도 살펴봤으니 직접 만들어 보겠습니다</p>
<p>9-4 도둑잡기 게임을 만들어봐요~</p>
<p>먼저 activity_main.xml의 코드 내용입니다</p>
<p>    &lt;Button        android:        android:layout_        android:layout_height="80sp"        android:layout_alignParentLeft="true"        android:layout_alignParentTop="true"        android:onClick="ClickMethod"        /&gt;</p>
<p>    &lt;Button        android:        android:layout_        android:layout_height="80sp"        android:layout_alignBaseline="@+id/button1"        android:layout_alignBottom="@+id/button1"        android:layout_centerHorizontal="true"        android:onClick="ClickMethod"        /&gt;        &lt;Button        android:        android:layout_        android:layout_height="80sp"        android:layout_alignBaseline="@+id/button2"        android:layout_alignBottom="@+id/button2"        android:layout_alignParentRight="true"        android:onClick="ClickMethod"        /&gt;</p>
<p>    &lt;Button        android:        android:layout_        android:layout_height="80sp"        android:layout_alignLeft="@+id/button1"        android:layout_below="@+id/button1"        android:layout_marginTop="30dp"        android:onClick="ClickMethod"        /&gt;</p>
<p>    &lt;Button        android:        android:layout_        android:layout_height="80sp"        android:layout_alignBaseline="@+id/button4"        android:layout_alignBottom="@+id/button4"        android:layout_alignLeft="@+id/button2"        android:onClick="ClickMethod"        /&gt;</p>
<p>    &lt;Button        android:        android:layout_        android:layout_height="80sp"        android:layout_alignBaseline="@+id/button5"        android:layout_alignBottom="@+id/button5"        android:layout_alignLeft="@+id/button3"        android:onClick="ClickMethod"        /&gt;</p>
<p>    &lt;Button        android:        android:layout_        android:layout_height="80sp"        android:layout_alignLeft="@+id/button4"        android:layout_below="@+id/button4"        android:layout_marginTop="30dp"        android:onClick="ClickMethod"        /&gt;</p>
<p>    &lt;Button        android:        android:layout_        android:layout_height="80sp"        android:layout_alignBaseline="@+id/button7"        android:layout_alignBottom="@+id/button7"        android:layout_alignLeft="@+id/button5"        android:onClick="ClickMethod"        /&gt;</p>
<p>    &lt;Button        android:        android:layout_        android:layout_height="80sp"        android:layout_alignBaseline="@+id/button8"        android:layout_alignBottom="@+id/button8"        android:layout_alignLeft="@+id/button6"        android:onClick="ClickMethod"        /&gt;</p>
<p>도둑잡기에 쓰일 9개 버튼을 만들었습니다</p>
<p>이번 어플에서는 listener을 사용하지 않고 한 메소드로만 사용할 예정입니다</p>
<p>왜냐, 메소드를 이용한 방법도 알아야 하고 listener을 사용하면 ID값을 찾고 일일히 listener을 연결해야 합니다</p>
<p>public class MainActivity extends Activity {    +int num;</p>
<p>여기서</p>
<p>int num;을 추가해 주세요</p>
<p>그다음 메소드를 하나 추가할건대요 이번 어플에서는 onCreate를 건들지 않습니다</p>
<p>public void ClickMethod(View v){     num = ((int)(Math.random() * 9));     num++;     switch(v.getId()){     case R.id.button1:      if (num==1)       Toast.makeText(MainActivity.this,"도둑잡았다!",Toast.LENGTH_SHORT).show();      break;     case R.id.button2:      if (num==2)       Toast.makeText(MainActivity.this,"도둑잡았다!",Toast.LENGTH_SHORT).show();      break;     case R.id.button3:      if (num==3)       Toast.makeText(MainActivity.this,"도둑잡았다!",Toast.LENGTH_SHORT).show();      break;     case R.id.button4:      if (num==4)       Toast.makeText(MainActivity.this,"도둑잡았다!",Toast.LENGTH_SHORT).show();      break;     case R.id.button5:      if (num==5)       Toast.makeText(MainActivity.this,"도둑잡았다!",Toast.LENGTH_SHORT).show();      break;     case R.id.button6:      if (num==6)       Toast.makeText(MainActivity.this,"도둑잡았다!",Toast.LENGTH_SHORT).show();      break;     case R.id.button7:      if (num==7)       Toast.makeText(MainActivity.this,"도둑잡았다!",Toast.LENGTH_SHORT).show();      break;     case R.id.button8:      if (num==8)       Toast.makeText(MainActivity.this,"도둑잡았다!",Toast.LENGTH_SHORT).show();      break;     case R.id.button9:      if (num==9)       Toast.makeText(MainActivity.this,"도둑잡았다!",Toast.LENGTH_SHORT).show();      break;     } }</p>
<p>이 코드를 통채로 넣어버리면 됩니다</p>
<p>버튼이 클릭할때마다 android:onClick으로 인해 저 메소드가 실행되는대요</p>
<p>그때마다 랜덤값을 다시 구합니다</p>
<p>즉 한번 눌렀던 버튼이 도둑이라면 다시 같은 버튼을 눌렀을때 또 도둑인 문제를 미리 방지하는 겁니다 ㅎㅎ</p>
<p>그다음 id값을 판명하여 버튼1이 눌리면, 버튼 2가 눌리면....버튼 9가 눌리면 에서</p>
<p>if문으로 아까 구했던 랜덤값이 맞아 떨어진다면 도둑 당첨!이 되는겁니다 ㅎㅎ</p>
<p>예제소스에는 listener을 이용한 방법도 주석으로 설명하고 있으니 참고하시길 바랍니다~</p>
<p>버튼을 생성하고 id값을 주고 일일히 listener과 연결해야 해서 소스의 낭비가 심합니다</p>
<p>자 그럼 실행 화면을 볼까요?</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F267EBC4B520B526233CC7F%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F2749E44B520B52622B0E9F%22&amp;type=cafe_wa740"></p>
<p>히힛 이렇게 랜덤으로 구한 1부터 9까지의 값이랑 여러분이 누른 버튼의 값이랑 맞아 떨어지면 "도둑잡았다!"라는 토스트 메세지를 뛰우게 됩니다 ㅎㅎ</p>
<p>여기서 문제, 도둑이 아닐경우 "아 실패네요"라는 토스트 메세지를 띄워 봅시다</p>
<p>코드는 간단합니다 한두줄만 추가하면 완성됩니다 ㅎㅎ</p>
<p>버튼을 눌렀을때 실행할 코드가 저 토스트 메세지 하나라면 몰라도 버튼도 많고 실행 소스도 많은대 각각의 소스가 공통점이 많다면</p>
<p>따로 메소드를 하나 만들고 버튼을 눌렀을때 메소드랑 전달해줄 값을 지정해주면 더욱 효율적인 어플을 만들수 있습니다</p>
<p>그럼 이쯤해서 이번 강좌 마치도록 하겠습니다~</p>
<p>예제소스는 원본글에서..</p>
<p>이글은 [http://whdghks913.tistory.com/310 ] 에서 다시 보실수 있으며 원본 글의 저작권은 미르에게 있습니다</p>
