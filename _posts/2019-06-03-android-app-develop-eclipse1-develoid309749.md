---
layout: post
title: '[커뮤니티] #15 SeekBar로 화면 밝기 조절해 보자'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/309749' ; </script>

<p>안녕하세요~ 추석전이네요~</p>
<p>저번 프로그래스바를 공부한다음 너무 어려워 하시는 분들이 많아서 (정말 쉽게 서술했는대...)</p>
<p>이제부터는 예제소스를 한턴씩 띄어서 올려드릴까 합니다</p>
<p>즉 이번 강좌부터 예제소스는 다음 강좌가 올라올때 이 게시글에서 다운받을수 있습니다</p>
<p>15번(이글)강좌 업로드(예제소스 없음) → 16번 강좌 업로드됨&nbsp;→ 15번 강좌 예제소스가 15번 강좌 글에 표시됨</p>
<p>이런 방식입니다</p>
<p>예제소스를 아에 제공하지 않을까 하다가...혹시 힘들어 하시는 분이 계실까봐 아에 안올리지는 않고 한턴씩 건너서 올리겠습니다</p>
<p>그럼 시작합니다~</p>
<p>15.&nbsp;SeekBar로 화면 밝기 조절해 보자</p>
<p>15-1 시크바란?</p>
<p>프로그래스바는 이름도 익숙한대 시크바(Seekbar)는 무엇일까요?</p>
<p>이름이 조금 어색하게 들릴수도 있습니다</p>
<p>Seekbar란&nbsp;<strike>프로그래스바를 상속하여 만들어진</strike>&nbsp;바인대요</p>
<p>프로그래스바는 직접 이동이 불가능했던것에 반에 시크바는 마치 볼륨조절처럼 동그라미를 터치해서 이동이 가능합니다</p>
<p>예를들면 설정의 볼륨이나, 볼륨키를 누르면 나오는 막대기와 동그라미가 시크바의 대표적인 예시 입니다</p>
<p>15-2 우리는 뭘 만들건가</p>
<p>저번에 프로그래스바를 구현할때 쓰래드를 사용했는대요</p>
<p>쓰래드가 뭔지 모르는 상태에서 막 나가니 이해가 안된다는 분들이 너무 많기에...</p>
<p>이제부터는 안배운 개념은 안하겠습니다</p>
<p>그래서 생각한게</p>
<p>화면 밝기를 조절해 보겠습니다</p>
<p>즉 SeekBar를 움직이면 화면 밝기가 바뀌는 거죠~</p>
<p>15-3 레이아웃 구성하기</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile28.uf.tistory.com%2Fimage%2F213E9D3F523838DA32966D%22&amp;type=cafe_wa740"></p>
<p>SeekBar는 ProgressBar밑에 있습니다</p>
<p>저거 많이 본 막대기죠?ㅋㅋ</p>
<p>알아서 추가해 주시고...</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F244AFF395238392D186E5F%22&amp;type=cafe_wa740"></p>
<p>저는 이렇게 TextView와 SeekBar을 두었습니다</p>
<p>밝기는 100%가 끝이기 때문에 최대값을 100으로 둡시다</p>
<p>android:max="100"</p>
<p>SeekBar라는건 ProgressBar를 상속하고 있다고 했는대요</p>
<p>포함한다는 의미로 받아드리면 되는대 그래서 같은 속성을 사용할수 있습니다</p>
<p>그리고 이 예제소스에 나오는 소스는 어플의 화면 밝기만 변경, 즉 시스탬의 화면 밝기를 변경하지 않는 어플입니다</p>
<p>이때 값이 10이하로 떨어지면 화면이 꺼져버리는대요</p>
<p>그래서 이를 방지하기 위한 코드를 삽입할 겁니다</p>
<p>android:progress="10"</p>
<p>이제 MainActivity.java로 넘어오셔서...</p>
<p>SeekBar와 TextView를 사용할수 있도록 소스 최상단에 추가해 봅시다</p>
<p>(이제 부터는 이런 언급이 없어도 알아서 넣으셔야 합니다)</p>
<p>SeekBar seekbar;</p>
<p>TextView status;</p>
<p>ID값을 연결해 볼까요?</p>
<p>seekbar = (SeekBar) findViewById(R.id.seekbar);</p>
<p>status = (TextView) findViewById(R.id.status);</p>
<p>xml할때 언급은 안했지만 바로 위 파란상자를 보면 id값을 수정했구나 라는걸 아셔야 합니다</p>
<p>지금쯤 되서 모른다면 다시 처음부터 읽으셔야 합니다</p>
<p>그다음 시크바가 변경될때마다 호출될 리스너를 연결해야 합니다</p>
<p>seekbar.setOnSeekBarChangeListener(new SeekBar_Listener());</p>
<p>위처럼 class를 새로 만들어서 리스너를 만들수 있습니다</p>
<p>class SeekBar_Listener implements OnSeekBarChangeListener {</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; }</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; public void onStartTrackingTouch(SeekBar seekBar) {</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; }</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; public void onStopTrackingTouch(SeekBar seekBar) {</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; }</p>
<p>&nbsp; &nbsp; }</p>
<p>그러나 우리는 이렇게 class라는걸 따로 안만들고&nbsp;setOnSeekBarChangeListener에 바로 리스너 메소드를 연결해 보겠습니다</p>
<p>(위 하얀박스&nbsp;코드를 그대로 복사하는 멍청이는 없길 설명을 똑바로 안들었단 소리입니다)</p>
<p>seekbar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {</p>
<p> @Override</p>
<p> public void onStartTrackingTouch(SeekBar seekBar) {</p>
<p>// 메소드 이름대로 사용자가 SeekBar를 터치했을때 실행됩니다</p>
<p>  // TODO Auto-generated method stub</p>
<p> }</p>
<p> @Override</p>
<p> public void onStopTrackingTouch(SeekBar seekBar) {</p>
<p>// 메소드 이름대로 사용자가 SeekBar를 손에서 땠을때 실행됩니다</p>
<p>  // TODO Auto-generated method stub</p>
<p> }</p>
<p> @Override</p>
<p> public void onProgressChanged(SeekBar seekBar,&nbsp;int progress,</p>
<p>   boolean fromUser) {</p>
// 메소드 이름대로 사용자가 SeekBar를 움직일때 실행됩니다<p>// 주로 사용되는 메소드 입니다</p>
<p>  // TODO Auto-generated method stub</p>
<p> }</p>
<p>});</p>
<p>기본적인 리스너의 형태입니다</p>
<p>setOnSeekBarChangeListener을 연결하며 바로 작업할 내용을 지정해 주고있는대요</p>
<p>하얀박스와 차이점은 하얀박스는 아래에서 또는 딴곳에서 리스너를 생성하고, 방금 본 소스는 리스너를 지정하며 바로 할 작업을 명시해 주는겁니다</p>
<p>위치의 차이만 있을뿐 같답니다~</p>
<p>주로 사용하는 메소드인&nbsp;onProgressChanged에다가 화면 밝기를 바꾸는 소스를 넣어보겠습니다</p>
<p>onProgressChanged()안에 있는&nbsp;int progress를 보시면 굵은글씨로 해뒀는대요</p>
<p>현재 SeekBar의 진행 정도를 표시하는 값입니다</p>
<p>max를 100으로 지정했으니 최대로 올리면 저 값은 100이 되고 가장 아래로 바꾸면 0이 됩니다</p>
<p>저 메소드 안에 아래 코드를 넣어보겠습니다</p>
<p>if(progress&lt;10){</p>
<p>progress=10;</p>
<p>seekbar.setProgress(progress);</p>
<p>}</p>
<p>status.setText("밝기 수준 : " + progress);</p>
<p>WindowManager.LayoutParams params = getWindow().getAttributes();</p>
<p>params.screenBrightness = (float) progress / 100;</p>
<p>getWindow().setAttributes(params);</p>
<p>간단한 코드입니다</p>
<p>중간 Enter위까지는 모두 아는 코드죠?</p>
<p>progress값이 10아래로 떨어지면 움직이지 못하게 설정했습니다</p>
<p>즉 10아래로는 설정할수가 없습니다</p>
<p>그다음 setText로 텍스트를 설정하고</p>
<p>그 아래부분은 어플 밝기를 조절하는 코드입니다</p>
<p>저런 코드가 있구나~하고 넘어가 주시면 됩니다</p>
<p>이 강좌의 목표는 SeekBar사용법을 익히는 것이니까요 ㅎㅎ</p>
<p>이제, 작동해 봅시다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F21133C4D523843130E8F6B%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F26598B4D523843132A3D16%22&amp;type=cafe_wa740"></p>
<p>자, 정상적으로 SeekBar를 움직일때마다 밝기와 글자가 변하는것을 볼수 있습니다!!</p>
<p>정리한번 해볼까요?</p>
<p>1. SeekBar는 ProgressBar에서 사용한 코드를 그대로 사용해도 된다</p>
<p>2. seekbar.setOnSeekBarChangeListener를 이용해 시크바의 값이 변할때마다 어떤 작업을 할건지를 결정할수 있다</p>
<p>3.&nbsp;onStartTrackingTouch는 터치해서 끌기 시작할때 호출되는 메소드다</p>
<p>4.&nbsp;onStopTrackingTouch는&nbsp;onStartTrackingTouch와 정반대 메소드이다</p>
<p>5.&nbsp;onProgressChanged는 값이 변할때마다 실행되는 메소드이고, 가장 자주 쓰이는 메소드이다</p>
<p>6.&nbsp;</p>
<p>WindowManager.LayoutParams params = getWindow().getAttributes();</p>
<p>params.screenBrightness = (float) progress / 100;</p>
<p>getWindow().setAttributes(params);</p>
<p>위 세게의 코드는 어플의 밝기를 조절하는 코드이다(만 어플을 종료하면 원래 밝기로 돌아온다)</p>
<p>어떠나요?</p>
<p>간단한 SeekBar라고 해도 배울께 많습니다</p>
<p>전 최선을 다해 쉽게 풀어쓰려고 하는대....잘 이해가 되는지 모르겠내요</p>
<p>이해 안되는 부분 질문해 주시면 감사드리겠습니다~(정리 6번은 이해 안되도 정상입니다)</p>
<p>어려운거 있다면 알려주세요 ㅠㅠ</p>
<p>그리고 다음 강좌 추천좀... 뭐배울까요? 이제?</p>
<p>예제소스는 강좌16편이 나올때 이 부분에&nbsp;업로드 됩니다</p>
<p>즉 이 Text아래에 첨부되어 집니다</p>
<p>네이버 카페에서는 원본글에서만 예제소스 다운로드가 가능합니다</p>
<p></p>
<p>이글은 [http://whdghks913.tistory.com/347] 에서 다시 보실수 있으며 원본 글의 저작권은 미르에게 있습니다</p>
