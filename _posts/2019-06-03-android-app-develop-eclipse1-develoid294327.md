---
layout: post
title: '[커뮤니티] #7 EditText는 완전 쉬워요~'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/294327' ; </script>

<p>안녕하세요~</p>
<p>이번에는 EditText입니다</p>
<p>이 에디트 텍스트란?, 글자를 입력할수 있는 공간을 만드는 겁니다</p>
<p>속성이 이 EditText에서 추가할수 있는 게 몇게 있는대요 그것 위주로 설명하도록 하겠습니다</p>
<p> </p>
<p>&nbsp;</p>
<p>7. EditText는 완전 쉬워요~</p>
<p>7-1 일단 프로젝트를 만들자</p>
<p>Ctrl+N을 누르면 새로운 프로젝트를 만드는 창이 뜹니다</p>
<p> </p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F24051E46520ACACB1A2C75%22&amp;type=cafe_wa740"></p>
<p> 자 저는 이렇게 설정했습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F21077346520ACACB1A1391%22&amp;type=cafe_wa740"></p>
<p>이번엔 특별히 아이콘을 지정해 보겠습니다</p>
<p>위에 있는 Clipart를 누르면 안드로이드 기본 아이콘이 나오는대요</p>
<p>저는 연필을 골랐습니다 ㅎㅎ</p>
<p> </p>
<p>&nbsp;</p>
<p>7-2 일단 추가하자</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile9.uf.tistory.com%2Fimage%2F2558E546520ACACB1603E8%22&amp;type=cafe_wa740"></p>
<p>ㅎㅎㅎㅎㅎ 만들어 졌어요 ㅎㅎ</p>
<p>이번에는 EditTexit를 만들것 이기 때문에 옆에 있는 Text Fields를 눌러주세요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile30.uf.tistory.com%2Fimage%2F2507D746520ACACC1A32F0%22&amp;type=cafe_wa740"></p>
<p> Plain Text를 드래그해줍시다</p>
<p> </p>
<p>&nbsp;</p>
<p>[미르의 팁]</p>
<p>-제 이클립스 아이콘이 달라요</p>
<p>SDK를 업데이트 하면 아이콘과 글자, 위젯의 배치가 달라질때가 있습니다</p>
<p>여유가 되시면 한번 업데이트 하시길 ㅎㅎ..</p>
<p> </p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile30.uf.tistory.com%2Fimage%2F27751946520ACACC1A33A0%22&amp;type=cafe_wa740"></p>
<p>자~ 생겼습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile28.uf.tistory.com%2Fimage%2F25718746520ACACC107BD0%22&amp;type=cafe_wa740"></p>
<p>소스를 보면 이렇게 나와 있습니다</p>
<p> </p>
<p>&nbsp;</p>
<p>그럼 여기에다가 전까지 많이 쓰던 android:text를 추가해 봅시다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F25735446520ACACC1B69FF%22&amp;type=cafe_wa740"></p>
<p>확인해 보면</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile6.uf.tistory.com%2Fimage%2F215E473E520ACACF2D7C07%22&amp;type=cafe_wa740"></p>
<p>EditText에 글자가 체워져 있습니다 ㅎㅎ</p>
<p> </p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p> </p>
<p>그런대 우리가 EditText를 보면 글자가 들어있긴 한대 포커스를 대면(커서를 대면)사라지는 글자가 있습니다</p>
<p>속성은</p>
<p>android:hint</p>
<p>입니다 ㅎㅎ</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F233C913E520ACACF26EEAE%22&amp;type=cafe_wa740"></p>
<p>이렇게 추가해 주면</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2412B53E520ACACF2DC47D%22&amp;type=cafe_wa740"></p>
<p>색이 회색으로 바꼈고 어플에서 커서를 대면 저 글자는 사라집니다</p>
<p> </p>
<p>&nbsp;</p>
<p>그리고 EditText소스를 보면</p>
<p>&lt;requestFocus /&gt;</p>
<p>라는게 있는대요</p>
<p>이는 처음에 커서가 어디 있을거냐 라는것을 설정해 주는 겁니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile8.uf.tistory.com%2Fimage%2F211DD83E520ACACF28BE45%22&amp;type=cafe_wa740"></p>
<p> </p>
<p>&nbsp;</p>
<p>마지막으로 EditText에 들어갈 문장을 제한할수도 있습니다</p>
<p>android:inputType</p>
<p>이라는 속성인대요</p>
<p>""에 커서를 둔다음 Ctrl+스페이스바를 누르면 무엇이 들어갈수 있는지 확인이 가능합니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F2554DC3E520ACACF2D57A0%22&amp;type=cafe_wa740"></p>
<p> </p>
<p>EditText에 어떤 종류만 들어갈수 있는지를 제한할수도 있습니다</p>
<p>저는 알기 쉽게 number으로 설정해 보겠습니다</p>
<p> </p>
<p>&nbsp;</p>
<p>또한 글자수도 제한할수 있습니다</p>
<p>android:ems</p>
<p>라는 속성은 글자의 수를 제한 하는 속성입니다</p>
<p> </p>
<p>&nbsp;</p>
<p>자 이렇게 해서 EditText의 xml속성을 확인해봤습니다</p>
<p> </p>
<p>&nbsp;</p>
<p>그럼 간단한 코드를 이용하여 입력한 값을 토스트로 띄어 보도록 하겠습니다 ㅎㅎ</p>
<p>토스트는 다음시간쯤 배울 코드입니다</p>
<p> </p>
<p>&nbsp;</p>
<p>일단 버튼 하나 추가해 주세요</p>
<p> </p>
<p>&nbsp;</p>
<p>&lt;Button        android:        android:layout_        android:layout_height="wrap_content"        android:layout_below="@+id/editText1"        android:layout_centerHorizontal="true"        android:text="Button" /&gt;</p>
<p>&nbsp;</p>
<p>이렇게 추가해 주시면 됩니다 ㅎㅎ</p>
<p> </p>
<p>&nbsp;</p>
<p>-src/(패키지 이름)/MainActivity.java</p>
<p>public class MainActivity extends Activity { +EditText edittext; +Button button;</p>
<p> </p>
<p>@Override</p>
<p>이렇게 EditText와 Button을 추가해 주세요 (+표시는 추가하라는 표시로 +까지 추가하시는 분은 없길...)</p>
<p> </p>
<p>&nbsp;</p>
<p>그다음 onCreate안에 아래 코드를 넣어봅시다</p>
<p>edittext = (EditText) findViewById(R.id.editText1);button = (Button) findViewById(R.id.button1);  button.setOnClickListener(new View.OnClickListener() { // 한 버튼만 OnClickListener를 연결합니다       public void onClick(View v) { //버튼을 눌렀을때 어떤 작업을 할지 선언합니다        String inPutText = edittext.getText().toString();        Toast.makeText(MainActivity.this, inPutText,Toast.LENGTH_SHORT).show();       }});</p>
<p>지금까지 제 강좌를 "모두" 정독하시고 외운정도까지 된다면 위에 있는 두 줄은 이해가 되실겁니다</p>
<p>하지만 아래 있는 setOnClickListener는 처음보는 타입이죠 ㅎㅎ..</p>
<p>원랜 버튼 배울때 언급했어야 하는대요 잠깐 언급하자면</p>
<p> </p>
<p>&nbsp;</p>
<p>버튼을 누르면 동작하는 방식에는 크게 2가지가 있습니다</p>
<p>세세히 나누면 3가지가 있지요</p>
<p>하나는 메소드를 이용한 방법, 또하나는 listener을 이용한 방법인대요</p>
<p>listener을 이용한 방법이 두가지로 나눠집니다</p>
<p>하난 버튼 전체를 리스너로 연결하는것 button.setOnClickListener(listener);으로 리스너에 연결할수 있지요</p>
<p>나머지는 버튼 하나의 리스터를 연결하는 겁니다</p>
<p>위처럼 특정 버튼 하나에만 한 리스너를 만드는 방식입니다</p>
<p> </p>
<p>&nbsp;</p>
<p>버튼 하나만 리스너에 연결해 봤습니다</p>
<p>그리고 한번 코드를 잘 살펴보면 이해가 안되는 코드 2줄이 있어야 합니다</p>
<p>String inPutText = edittext.getText().toString();</p>
<p>Toast.makeText(MainActivity.this, inPutText,Toast.LENGTH_SHORT).show();</p>
<p>여기서 아래에 있는 토스트는 다음시간쯤 더 자세히 배우니 여기서는 그렇구나 하고 넘어가 주세요</p>
<p> </p>
<p>&nbsp;</p>
<p>위에 있는 String inPutText = edittext.getText().toString();은 여기서 꼭 짚고 갈겁니다</p>
<p>자바에서(사실 대부분의 언어가) 변수를 지정하는 방법은 다음과 같습니다</p>
<p> </p>
<p>&nbsp;</p>
<p>[변수타입] [변수 이름] = [대입할 변수값]</p>
<p> </p>
<p>&nbsp;</p>
<p>자바에서 =연산자는 오른쪽 값을 왼쪽에 대입한다 라는 뜻입니다</p>
<p> </p>
<p>&nbsp;</p>
<p>자세한건 이쪽으로~</p>
<p><a href="http://whdghks913.tistory.com/157">2013/02/22 - [미르의 개발 이야기/Java 배움터] - 계산을 할수 있는 연산자에 대해 알아보자! - 1편</a></p>
<p><a href="http://whdghks913.tistory.com/158">2013/02/22 - [미르의 개발 이야기/Java 배움터] - 계산을 할수 있는 연산자에 대해 알아보자! - 2편</a></p>
<p> </p>
<p>&nbsp;</p>
<p>그럼 다시 돌아와서 저 줄을 확인해 보면</p>
<p>String(변수타입) inPutText(변수이름) = edittext.getText().toString();(변수값)</p>
<p>이 됩니다</p>
<p>String은 자바에서 문장을 저장하는 변수형(자바강좌를 참조하시길)이며</p>
<p>inPutText는 제가 임의로 지정하는 변수의 이름입니다</p>
<p>'=' 오른쪽에 있는 값들은 inPutText에 저장될 변수의 값이라는 것이죠</p>
<p> </p>
<p>&nbsp;</p>
<p>그럼 변수값을 봐야겠죠</p>
<p>edittext(edittext라는 EditText에서 참조한다).getText()(입력한 글자를 얻어온다).toString()(얻어온 글자를 스트링의 형태로 바꾼다)라는 뜻입니다</p>
<p> </p>
<p>&nbsp;</p>
<p>getText().toString()는 각각 EditText에서 사용가능한 메소드라는 것만 알아두시고 지금은 그렇구나 하고 넘어갑시다 ㅎㅎ</p>
<p> </p>
<p>&nbsp;</p>
<p> </p>
<p>&nbsp;</p>
<p>자 EditText에서 꼭 알아야할 코드를 살펴봤습니다</p>
<p>테스트 해볼까요?</p>
<p> </p>
<p>&nbsp;</p>
<p> </p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile8.uf.tistory.com%2Fimage%2F264D4E42520AD5D324FB60%22&amp;type=cafe_wa740"></p>
<p> 정상적으로 hint가 나옵니다 ㅎㅎ</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F21460642520AD5D423CB40%22&amp;type=cafe_wa740"></p>
<p>아까 inputtype를 number으로 설정하였기 때문에 저 EditText에는 숫자만 들어갑니다</p>
<p>그리고 버튼을 눌렀더니 입력한 값이랑 똑같게 토스트 메세지가 나오는 모습을 확인해 봤습니다 ㅎㅎ</p>
<p> </p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p> </p>
<p>오늘 배운 EditText는 아주 많이 쓰입니다</p>
<p>안드로이드에서 글자 입력하는 모든 부분에 이 EditText가 쓰인다고 할수 있으니 꼭 아셔야 합니다!!</p>
<p> </p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p> </p>
<p>예제 소스 : 네이버 카페에서는 다운이 제한됩니다</p>
<p>&nbsp;</p>
<p><a href="http://whdghks913.tistory.com/306">http://itmir.tistory.com/306</a></p>
