---
layout: post
title: '[커뮤니티] #8 이미지뷰를 정복하자(최종결과:버튼으로 이미지 바꾸기)'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/294400' ; </script>

<p>안녕하세요~</p>
<p>아마 이 이미지 뷰까지 배우고 나면 기본 위젯은 마스터 하실겁니다 ㅎㅎ</p>
<p>이미지뷰는 이미지를 띄워주는 뷰입니다</p>
<p>비슷한 예로는 이미지 버튼도 있지요 ㅎㅎ</p>
<p>여담입니다만 저는 이미지 뷰 쓸려고 했다가 이미지가 왜곡되서 편법으로 일반 버튼에 백그라운드를 이미지로 지정해버리는 수를 사용했...</p>
<p>아무튼 시작해 보겠습니다~</p>
<p>8 이미지뷰를 정복하자(최종결과:버튼으로 이미지 바꾸기)</p>
<p>8-1 프로젝트 생성 생략</p>
<p>8-2 이미지 뷰 추가하기</p>
<p>프로젝트 생성은 저번 7강좌 동안 꾸준히 사진으로 설명했으므로 생략합니다</p>
<p>이미지뷰를 추가해 볼까요?</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile28.uf.tistory.com%2Fimage%2F264E5741520AF163347ABD%22&amp;type=cafe_wa740"></p>
<p>이미지뷰는 Image &amp; Media랑에 있습니다</p>
<p>드래그 하면 아래와 같은 창이 뜹니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F25052441520AF16412C812%22&amp;type=cafe_wa740"></p>
<p>어떤 이미지를 사용할거냐?라는건대요</p>
<p>아직 우리는 이미지를 추가하지 않았습니다</p>
<p>추가해 보겠습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F27318042520AF20D2471B9%22&amp;type=cafe_wa740"></p>
<p>이렇게 드래그를 해주시면 추가가 됩니다</p>
<p>그런대 잠깐 drawable폴더를 보면</p>
<p>drawable-(어쩌구)가 있습니다</p>
<p>전에 언급한적이 있지만 다시 언급하자면 해상도에 맞게 사진 크기를 조절해서 각각 추가할수가 있습니다</p>
<p>만약 모든 해상도에서 지원이 가능하다면??</p>
<p>-이 붙지 않는 그냥 drawable폴더에 넣으면 됩니다</p>
<p>drawable폴더는 기본으로 생성되지 않으므로 직접 만듭시다</p>
<p>New - Folder을 눌러주세요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F275FD441520AF164163942%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F242F0E41520AF1642F15E7%22&amp;type=cafe_wa740"></p>
<p>이렇게 생성해 주시면 되겠습니다 ㅎㅎ</p>
<p>이제 drawable폴더에 드래그 해주신다음</p>
<p>Copy Files해주시면 되요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F223D8441520AF1651981B4%22&amp;type=cafe_wa740"></p>
<p>8-3 Android Lint 경고 무시해보기</p>
<p>어라?그런대 에러가 발생했어요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F256ECA41520AF1652B1804%22&amp;type=cafe_wa740"></p>
<p>알고보니 리소스파일들의 이름이 잘못되서 그럽니다</p>
<p>R.java파일에 기록되는 변수들은(사실 자바에서의 변수의 이름과 관련이 있습니다)</p>
<p>숫자로 시작해서는 안됩니다</p>
<p>그러므로 F2를 눌러 이름을 바꿔봅시다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile10.uf.tistory.com%2Fimage%2F21113241520AF1651175AF%22&amp;type=cafe_wa740"></p>
<p>이렇게 이름을 바꾸는 창이 뜨면 바꿔주세요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile8.uf.tistory.com%2Fimage%2F21472F41520AF16502AF28%22&amp;type=cafe_wa740"></p>
<p>정상적으로 바꿨고, 오류도 사라졌습니다 ㅎㅎ</p>
<p>이제 이미지를 추가했으니 ImageView에서 추가해 봅시다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F275AAE41520AF1650B75CA%22&amp;type=cafe_wa740"></p>
<p>이렇게 이미지 뷰에서 이미지를 선택해 주세요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F2766FC44520AF1660E091C%22&amp;type=cafe_wa740"></p>
<p>정상적으로 추가되었습니다 ㅎㅎ</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F237FEF44520AF1660C6223%22&amp;type=cafe_wa740"></p>
<p>소스를 보면 이렇게 생겼습니다</p>
<p>그런대 ImageView에 노란 밑줄이 있어요</p>
<p>린트 에러 입니다</p>
<p>[Accessibility] Missing contentDescription attribute on image</p>
<p>이런 오류가 뜹니다</p>
<p>해결법은&nbsp;android:contentDescription="@string/(스트링)"을 추가해주던가 린트에러를 꺼주면 됩니다</p>
<p>그냥 무시해도 되니 ㅎㅎ 아무것도 건들지 말고 넘어가 줍시다</p>
<p>xml의 속성 살펴보겠습니다</p>
<p>src : 이미지를 지정하는 속성</p>
<p>maxWidth, MaxHeight : 최대 크기를 지정하는 속성</p>
<p>tint : 이미지위에 덫붙힐 색을 설정하는 겁니다 #AARRGGBB로 하시면 되고 반투명으로 지정할경우 색다른 느낌이 납니다 ㅎㅎ</p>
<p>이정도면 ImageView는 정복할수 있습니다 ㅎ</p>
<p>8-4 버튼을 누르면 위 아래 이미지가 바뀌게 해보기</p>
<p>자 이제 ImageView의 기초는 배웠으니 응용을 해볼까요?</p>
<p>버튼을 누르면 위 아래의 이미지가 바뀌는 어플을 구현해 봅시다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile9.uf.tistory.com%2Fimage%2F224FA944520AF16619F458%22&amp;type=cafe_wa740"></p>
<p>일단 버튼을 만들어 주세요 ㅎㅎ</p>
<p>그다음 java로 넘어가주세요~</p>
<p>public class MainActivity extends Activity {</p>
<p>밑에 아래를 추가해 주세요</p>
<p>ImageView up, down;</p>
<p>Button change;</p>
<p>int count=0;</p>
<p>이미지뷰와 버튼을 정의하고 아래 있는 int count와 if를 이용해 버튼을 누를때 마다 바뀌도록 설정할겁니다</p>
<p>마찬가지로 onCreate()안에 추가해 주세요</p>
<p>up = (ImageView) findViewById(R.id.up);</p>
<p>down = (ImageView) findViewById(R.id.down);</p>
<p>change = (Button) findViewById(R.id.button1);</p>
<p>id값을 연결해 주는거죠?ㅎㅎ</p>
<p>위 코드를 입력하고 바로 아래에 아래 코드를 복붙하면 됩니다</p>
<p>change.setOnClickListener(new View.OnClickListener() {</p>
<p>  &nbsp;&nbsp; &nbsp; &nbsp; public void onClick(View v) {</p>
<p>  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; if (count==0){</p>
<p>  &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp; up.setImageResource(R.drawable.down);</p>
<p>   &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; down.setImageResource(R.drawable.up);</p>
<p>   &nbsp;&nbsp; &nbsp;</p>
<p>   &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; up.invalidate();</p>
<p>   &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; down.invalidate();</p>
<p>   &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
<p>   &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; count++;</p>
<p>  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; }else{</p>
<p>  &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp; up.setImageResource(R.drawable.up);</p>
<p>   &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; down.setImageResource(R.drawable.down);</p>
<p>   &nbsp;&nbsp; &nbsp;</p>
<p>   &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; up.invalidate();</p>
<p>   &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; down.invalidate();</p>
<p>   &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
<p>   &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; count--;</p>
<p>  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; }</p>
<p>  &nbsp;&nbsp; &nbsp; &nbsp; }});</p>
<p>코드설명을 해보겠습니다</p>
<p>onClickListener는 전에 배웠으므로 Pass</p>
<p>up.setImageResource(R.drawable.down);</p>
<p>down.setImageResource(R.drawable.up);</p>
<p>이 코드를 봅시다</p>
<p>이미지 리소스를 찾아 지정해 주는 코드입니다 ㅎㅎ</p>
<p>count가 0일때는 (처음이므로)up은 down이미지로, down은 up이미지로 바꿔줍니다</p>
<p>그다음</p>
<p>up.invalidate();</p>
<p>down.invalidate();</p>
<p>을 보면 이미지를 갱신하는, 즉 다시 화면에 뿌려주는 역할을 합니다</p>
<p>아래에 있는 count++;는 count의 값을 하나 늘려서 다음에는 else부분이 실행되도록 하는것 이지요 ㅎㅎ</p>
<p>실행 스샷을 보겠습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile28.uf.tistory.com%2Fimage%2F2330633C520AF68E1EEA17%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile6.uf.tistory.com%2Fimage%2F2329243C520AF68F20652F%22&amp;type=cafe_wa740"></p>
<p>정상 작동하는 모습을 볼수 있습니다 ㅎㅎ</p>
<p>레이아웃의 background속성이라던지로 저는 잘 쓰진 않더군요</p>
<p>하지만 사진이 필요할때는 꼭 필요합니다 ㅎㅎ</p>
<p>한가지 팁을 드리자면</p>
<p>이미지의 크기가 너무 크거나 사진이 너무 많을경우 어플이 틩깁니다</p>
<p>안드로이드 메모리 때문인대요</p>
<p>Heap Size를 늘려주거나 사진의 크기를 줄여야만 합니다</p>
<p>안드로이드의 숙명입니다 ㅠㅠ</p>
<p>그럼 다음강좌에서 봐요~</p>
<p></p>
<p>이글은 [http://whdghks913.tistory.com/308] 에서 다시 보실수 있으며 원본 글의 저작권은 미르에게 있습니다</p>
<p></p>
<p>이글에 사용된 두개의 이미지는&nbsp;http://cafe.naver.com/ppc1004/22589,&nbsp;http://cafe.naver.com/take22/273567에 있습니다</p>
