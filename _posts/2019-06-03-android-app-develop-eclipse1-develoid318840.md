---
layout: post
title: '#17 커스텀 알림(Alert) 띄우기'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/318840' ; </script>

<p>강좌를 시작하기 전에 부탁드리는 말씀</p>
<p>티스토리 블로그가 확실히 보시기에 편합니다</p>
<p>그리고 카페 모바일에서는 소스가 줄을 넘어서 보기에 너무 불편합니다</p>
<p>꼭 PC로 (또는 PC버전) 봐주세요~</p>
<p>그리고 일부 기능과 예제소스는 원본 글에서만(티스토리) 사용할수 있습니다</p>
<p>한번씩 들러주시고 덧글 부탁드려요~ 쓰는대 3시간 걸렸어요 ㅠㅠ</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>안녕하세요~</p>
<p>이번강좌는 조금 복잡한 내용을 다루고 있습니다</p>
<p>알림을 띄우는것은 전에 모두 했었던 내용입니다</p>
<p><a href="http://whdghks913.tistory.com/315"><strong>[Development/App] - #11 알림 메세지 띄우기</strong></a></p>
<p>그러나 이것만으로는 할수 없는것들이 있기 때문에 이번에는 그것을 배워보도록 하겠습니다</p>
<p>이처럼 점점 이미 배웠던것을 심화시켜서 강좌를 쓰도록 하겠습니다</p>
<p>아마도 이번 강좌부터 난이도가 조금씩 생기지 않을까 생각됩니다</p>
<p>&nbsp;</p>
<p><strong>17. 커스텀 알림(Alert) 띄우기</strong></p>
<p>17-1 이번시간에 배울 내용은?</p>
<p>이번시간에는 알림을 이용한 방법 모두!! 마스터 해보겠습니다</p>
<p>&nbsp;</p>
<p>알림은 오로지 자바에서만 다루므로 레이아웃은 각자 짜셔야 합니다</p>
<p>버튼 4개만 있으면 됩니다</p>
<p>그리고 각각 onClick메소드를 이용하셔서 버튼을 누를때마다 다른 메소드가 실행되게 작성하시면 됩니다</p>
<p>(정 안되겠다 하시면 저번 강좌를 보시길)</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>17-2 배울내용 스크린샷 미리보기</p>
<p>이 강좌를 마치면 아래와 같은 알림을 사용할수 있습니다</p>
<p>꼭 해봅시다 ㅎㅎ</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F24357A455253EFC50883DB%22&amp;type=cafe_wa740"></p>
<p>[그림 2-1] setMessage로는 넣을수 없는 SeekBar를 사용하고 있다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F277FFD465253EFCF3075B9%22&amp;type=cafe_wa740"></p>
<p>[그림 2-2] 여러개 목록중 하나를 터치하는 동시에 알림이 닫히는 종류이다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F254980415253EFD82BFCEE%22&amp;type=cafe_wa740"></p>
<p>[그림 2-3] 하나를 선택하는 것은 [그림 2-2]와 같으나 선택해도 창이 닫히지 않아 확인/취소 버튼이 따로 필요하다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F26752A405253EFE129A3D4%22&amp;type=cafe_wa740"></p>
<p>[그림 2-4] 여러개를 선택할수 있는 알림으로, 가장 구현하기 어렵고, 이해하기 약간 복잡한 알림 형태이다</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>17-3 커스텀 알림에 커스텀 레이아웃 추가하기</p>
<p>첫번째 [그림 2-1]을 구현하는 부분입니다</p>
<p>먼저 첫번째 메소드의 맨 위에 아래 소스가 필요합니다</p>
<p>LayoutInflater inflater = (LayoutInflater)getSystemService(this.LAYOUT_INFLATER_SERVICE);</p>
<p>View view = inflater.inflate(<u><strong>R.layout.activity_alert1</strong></u>, null);</p>
<p>[소스 3-1] LayoutInflater를 이용한 코드</p>
<p>여기서 레이아웃 인플레이터이란? 20번대 강좌에서 살펴볼 예정이지만 한번 그림으로&nbsp; 보겠습니다</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile10.uf.tistory.com%2Fimage%2F2352C33E5253F3FA1B95E5%22&amp;type=cafe_wa740"></p>
<p>[그림 3-1] LayoutInflater에 관한 설명, 이 사진은 나중에 재활용 될 예정(왜냐면 만들기 힘들어요 ㅠㅠ)</p>
<p>정리하자면 한 부분을 따로 떼어 레이아웃 파일(xml)으로 따로 작성한 것 입니다</p>
<p>&nbsp;</p>
<p>여기서 <strong><u>R.layout.activity_alert1</u></strong>을 주목해 주세요</p>
<p>이것은 자주 보면 형식인대 우리는 아직 activity_alert1이라는 xml파일을 안만들었습니다</p>
<p>그래서 한번 만들어 봤습니다 여러분도 따로 만들어 보세요~</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile30.uf.tistory.com%2Fimage%2F2760B0445253F516223974%22&amp;type=cafe_wa740"></p>
<p>[그림 3-2] xml파일 만드는법</p>
<p>&nbsp;</p>
<p>컨트롤+N키를 눌러 창을 띄운다음 Android XML File, XML Layout File 등등 선택하셔서 만드시면 됩니다</p>
<p>내용은 아무렇게나~</p>
<p>&nbsp;</p>
<p>그다음 소스는 아래와 같습니다</p>
<p>AlertDialog.Builder alert = new AlertDialog.Builder(this);</p>
<p>alert.setTitle("알림");alert.setPositiveButton("확인", new DialogInterface.OnClickListener() {&nbsp;&nbsp;&nbsp; @Override&nbsp;&nbsp;&nbsp; public void onClick(DialogInterface dialog, int which) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;dialog.dismiss();&nbsp;&nbsp;&nbsp; }});alert.setNegativeButton("취소", null);alert.<strong><u>setView(view);</u></strong>alert.show();</p>
<p>[소스 3-2] setView를 사용한 알림 소스</p>
<p>이미 배운 내용이라 익숙하실탠대 한가지 중요한 코드가 있습니다</p>
<p>setView라는 부분인대요</p>
<p>이 부분은 아까 배운 인플레이터를 적용한 부분입니다</p>
<p>View를 적용할수 있는 setView()메소드 잘 기억해 두세요!</p>
<p>&nbsp;</p>
<p>완성 코드</p>
<p>&nbsp;&nbsp;LayoutInflater inflater = (LayoutInflater)getSystemService(this.LAYOUT_INFLATER_SERVICE);&nbsp;&nbsp;View view = inflater.inflate(R.layout.activity_alert1, null);&nbsp;&nbsp;&nbsp;&nbsp;AlertDialog.Builder alert = new AlertDialog.Builder(this);&nbsp;&nbsp;alert.setTitle("알림");&nbsp;&nbsp;alert.setPositiveButton("확인", new DialogInterface.OnClickListener() {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @Override&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public void onClick(DialogInterface dialog, int which) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; dialog.dismiss();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;});&nbsp;&nbsp;alert.setNegativeButton("취소", null);&nbsp;&nbsp;alert.setView(view);&nbsp;&nbsp;alert.show();</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>17-4 커스텀 알림에 리스트 추가하기 - 1</p>
<p>이번에는 [그림 2-2]를 구현해 보겠습니다</p>
<p>그리고 이번에는 알림 코드의 단축형(?)을 사용해 보겠습니다</p>
<p>new AlertDialog.Builder(this).setTitle("알림")<strong>.<u>setItems</u>(<u>R.array.Like</u>,&nbsp;&nbsp;&nbsp; new DialogInterface.OnClickListener(){&nbsp;&nbsp;&nbsp; public void onClick(DialogInterface dialog, int which){&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u>String[] Like = getResources().getStringArray(R.array.Like);</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Toast.makeText(MainActivity.this, "가장 좋아하는것은: " + <u>Like[which]</u>, Toast.LENGTH_SHORT).show();</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; dialog.dismiss();&nbsp;&nbsp;&nbsp; }})</strong></p>
<p>.setPositiveButton("확인", new DialogInterface.OnClickListener(){&nbsp;&nbsp;&nbsp; @Override&nbsp;&nbsp;&nbsp; public void onClick(DialogInterface dialog, int which) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; dialog.dismiss();&nbsp;&nbsp;&nbsp; }}).show();</p>
<p>[소스 4-1] 터치하면 창이 닫히는 리스트 알림 소스</p>
<p>개발자분들이 자주 사용하는 알림 소스의 형태입니다</p>
<p>쭉 보시면 위와는 뭔가 다른것을 알수있는대요</p>
<p>맨 마지막 show()에만 ;가 있는것을 확인할수 있습니다</p>
<p>&nbsp;</p>
<p>아무튼 이런 소스가 있다~ 해주시고 ㅎ</p>
<p>소스 분석해 보겠습니다</p>
<p>&nbsp;</p>
<p>R.array.Like라는게 걸리지만 잠시 넘어가고 String[] Like = getResources().getStringArray(R.array.Like);부터 봅시다</p>
<p>String[]란? 자바 상식이 필요한대요 문자 배열을 저장하는 변수입니다</p>
<p>아무튼 여기서는 array.xml의 값을 가져온다 라고 생각해 주세요 ㅎㅎ(아래에서 언급)</p>
<p>&nbsp;</p>
<p>그 아래에 있는 Like[which]는 배열중에서 몇번째 값을 표시할지를 정해주는 역할을 합니다</p>
<p>&nbsp;</p>
<p>이제 R.array.Like를 설명해 볼까요?</p>
<p>이것은 배열을 미리저장하는 xml을 작성하고, 그 값을 읽어 올수 있도록 해줍니다</p>
<p>저장위치는 values/array.xml입니다</p>
<p>&nbsp;</p>
<p>만들어 볼까요?</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile24.uf.tistory.com%2Fimage%2F2352863E5253F83934E268%22&amp;type=cafe_wa740"></p>
<p>&nbsp;New XML File을 만들어 주시고 위치는 res/values, 이름은 array.xml으로 해주세요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F2609D53E5253F8390B9895%22&amp;type=cafe_wa740"></p>
<p>완성되면 Add..버튼을 누른다음 String Array를 선택해주시길 바랍니다</p>
<p>그다음 옆에 뜨는 Name란에 알맞게 써주시면 됩니다</p>
<p>저는 Like로 하겠습니다</p>
<p>(R.array.Like에서 Like가 String Array의 이름입니다)</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile8.uf.tistory.com%2Fimage%2F27553F3E5253F839317848%22&amp;type=cafe_wa740"></p>
<p>이제 String Array에서 Add..를 눌러 Item을 추가해 주세요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F223F6E3E5253F83A3DEB60%22&amp;type=cafe_wa740"></p>
<p>&nbsp;아이탬을 여러개 추가해 주시면 됩니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F2568F93E5253F83A23583A%22&amp;type=cafe_wa740"></p>
<p>완성된 코드는 위 사진과 같습니다</p>
<p>아이탬을 모두 입력하셨으면 다시 자바로 넘어와 주세요 ^^</p>
<p>[그림 4-1 ~ 4-5] values/array.xml만들기, 이부분은 꼭 해야 다른 알림도 띄울수 있습니다</p>
<p>&nbsp;</p>
<p>이제 작동시켜 보시면 재대로 작동하는 모습을 확인할수 있습니다</p>
<p>&nbsp;</p>
<p>작동 코드</p>
<p>&nbsp;&nbsp;new AlertDialog.Builder(this)&nbsp;&nbsp;.setTitle("알림")&nbsp;&nbsp;.setItems(R.array.Like,&nbsp;&nbsp;&nbsp;new DialogInterface.OnClickListener(){&nbsp;&nbsp;&nbsp;public void onClick(DialogInterface dialog, int which){&nbsp;&nbsp;&nbsp;&nbsp;String[] Like = getResources().getStringArray(R.array.Like);&nbsp;&nbsp;&nbsp;&nbsp;Toast.makeText(MainActivity.this, "가장 좋아하는것은: " + Like[which], Toast.LENGTH_SHORT).show();&nbsp;&nbsp;&nbsp;&nbsp;dialog.dismiss();&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;})&nbsp;&nbsp;.setPositiveButton("확인", new DialogInterface.OnClickListener(){&nbsp;&nbsp;&nbsp;@Override&nbsp;&nbsp;&nbsp;public void onClick(DialogInterface dialog, int which) {&nbsp;&nbsp;&nbsp;&nbsp;dialog.dismiss();&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;})&nbsp;&nbsp;.show();</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>17-5 커스텀 알림에 리스트 추가하기 - 2</p>
<p>으어 강좌가 너무 길어지는대요;;</p>
<p>아무튼 이번에는 [그림 2-3]을 구현해 보겠습니다</p>
<p><strong>int Choose = 0;</strong></p>
<p>&nbsp;</p>
<p>...</p>
<p>&nbsp;</p>
<p>new AlertDialog.Builder(this).setTitle("알림")<strong>.setSingleChoiceItems(R.array.Like, Choose,&nbsp;new DialogInterface.OnClickListener(){&nbsp;public void onClick(DialogInterface dialog, <u>int which</u>){</strong>&nbsp;&nbsp;&nbsp;&nbsp; <strong><u>Choose=which;</u>&nbsp;}})</strong>.setPositiveButton("확인",new DialogInterface.OnClickListener(){&nbsp;public void onClick(DialogInterface dialog, int whichButton){&nbsp;&nbsp;&nbsp;&nbsp; <strong>String[] Like = getResources().getStringArray(R.array.Like);</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Toast.makeText(MainActivity.this, "가장 좋아하는것은: "+<strong>Like[Choose]</strong>, Toast.LENGTH_SHORT).show();&nbsp;&nbsp; &nbsp;&nbsp;dialog.dismiss();&nbsp;}}).setNegativeButton("취소",null).show();</p>
<p>[소스 5-1] 라디오 버튼이 있는 리스트 알림 띄우기</p>
<p>이 예제는 위와 비슷해서 많은 설명은 필요 없습니다</p>
<p>&nbsp;</p>
<p>먼저 onClick()메소드의 int which를 보시면 선택할때마다 onClick메소드가 실행되는대요</p>
<p>선택한 배열의 번호수가 넘어오게 됩니다</p>
<p>우리는 이것을 저장해 줘야 하는대요</p>
<p>그래서 Choose라는 int형 변수를 사용하여 값을 저장해 줍니다</p>
<p>&nbsp;</p>
<p>그다음은 모두 같으므로 더이상의 설명은 필요 없을듯 합니다</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>17-6 커스텀 알림에 리스트 추가하기 - 3</p>
<p>ㅁ..마지막 입니다!!</p>
<p>이것은 위에서 설명했드시 이해하기 좀 어렵습니다</p>
<p>그러므로 지금 이해가 안된다면 꼭 이해하려 하지 마세요</p>
<p><strong>boolean[]</strong> MultChoose = {false, false, false, false, false}</p>
<p>&nbsp;</p>
... <p>&nbsp;</p>
<p>new AlertDialog.Builder(this)&nbsp;&nbsp;.setTitle("알림")&nbsp;&nbsp;.setMultiChoiceItems(R.array.Like, MultChoose,&nbsp;&nbsp;&nbsp;new DialogInterface.OnMultiChoiceClickListener() {&nbsp;&nbsp;&nbsp;public void onClick(DialogInterface dialog, <strong>int which</strong>, <strong>boolean isChecked</strong>) {&nbsp;&nbsp;&nbsp;&nbsp;MultChoose[which]=<strong>isChecked</strong>;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;})&nbsp;&nbsp;.setPositiveButton("확인",new DialogInterface.OnClickListener() {&nbsp;&nbsp;&nbsp;public void onClick(DialogInterface dialog, int whichButton) {&nbsp;&nbsp;&nbsp;&nbsp;<strong>String[]</strong> foods = getResources().getStringArray(R.array.Like);&nbsp;&nbsp;&nbsp;&nbsp;String string= "가장 좋아하는것은: ";&nbsp;&nbsp;&nbsp;&nbsp;for(int i=0; i&lt;MultChoose.length;i++){&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>if(MultChoose[i]){&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string += foods[i] + ", ";&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</strong>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;Toast.makeText(MainActivity.this, string, Toast.LENGTH_SHORT).show();&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;})&nbsp;&nbsp;.setNegativeButton("취소",null)&nbsp;&nbsp;.show();</p>
<p>[소스 6-1]&nbsp;체크&nbsp;박스가 있는 리스트 알림 띄우기</p>
<p>이 예제에도 역시 배열이 등장하는대요</p>
<p>약간 어렵습니다...</p>
<p>&nbsp;</p>
<p>맨 위에서 모두 false로 주어 체크된것이 하나도 없도록 지정합니다</p>
<p>&nbsp;</p>
<p>중간쯤에 onClick메소드가 실행될때 넘어오는 값이 뭔가 잘 확인해 보세요</p>
<p>배열의 순서와 체크 여부가 넘어오게 됩니다</p>
<p>&nbsp;</p>
<p>이때 boolean배열의 *번째 값을 isChecked의 값으로 변경하게 됩니다</p>
<p>즉 which가 2고 isChecked가 true가 되면</p>
<p>boolean[] MultChoose = {false, <strong>true</strong>, false, false, false};</p>
<p>로 변하게 됩니다</p>
<p>&nbsp;</p>
<p>마지막으로 확인버튼을 누르게 되면 배열의 수를 확인해서 for문을 돌립니다</p>
<p>일일히 boolean[] MultChoose의 값을 확인해서</p>
<p>true일경우 내용을 더하는 방식으로 이루어 집니다</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>17-7 완성!!</p>
<p>엄청나게 고생해서 이번 코드가 만들어 졌습니다!</p>
<p>동작 확인 해볼까요?</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F213E6F465253FE640CC4E4%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F221DC83E5253FE582572C9%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile28.uf.tistory.com%2Fimage%2F22358D3E5253FE5814E1D6%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F215E6B415253FE6E1FF3A7%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile10.uf.tistory.com%2Fimage%2F2633A03E5253FE5817EECE%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>마지막 구글 ","이 걸리긴 하지만 모든 소스가 잘 작동하는 것을 확인할수 있습니다^^</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>이번에는 조금 정신없이 배워봤는대요</p>
<p>정리하자면</p>
<p>&nbsp;</p>
<p>setView를 이용하여 다양하게 알림을 추가할수 있다</p>
<p>리스트, 라디오버튼, 체크박스를 이용한 알림을 띄울수 있다</p>
<p>&nbsp;</p>
<p>라는 두문장으로 정리됩니다^^</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>이번 내용은 좀 어렵기도 하고 강좌 시간도 두시간에서 세시간이 넘어가는듯 합니다</p>
<p>어려운거 있으시면 알려주세요~</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>이글은 [ http://whdghks913.tistory.com/358 ] 에서 다시 보실수 있으며 원본 글의 저작권은 미르에게 있습니다</p>
<p>&nbsp;</p>
<p>이 강좌의 예제소스는 #18 강좌가 나오면 업로드 됩니다</p>

