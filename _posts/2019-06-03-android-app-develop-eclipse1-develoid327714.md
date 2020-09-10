---
layout: post
title: '[커뮤니티] #19 어플에서 진동을 사용하는 2가지 방법'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/327714' ; </script>

<p>안녕하세요</p>
<p>겨후 19번대 강좌네요 ㅎ...</p>
<p>허... 벌서 19번이라니; 20번대 강좌부터는 조금 복잡한 쓰래드랑 핸들러같은 "소스"위주로 배울 예정입니다</p>
<p>아무튼 이번 강좌는 쉽습니다 ㅎㅎ</p>
<p>19. 어플에서 진동을 사용하는 2가지 방법</p>
<p>19-1 강좌를 시작하기 전에..</p>
<p>이 강좌를 통해 알수 있는점은 다음과 같습니다</p>
<p>- 진동을 울리는 방법</p>
<p>- 패턴을 넣은 진동</p>
<p>매우 심플한 소스(약 4줄)이므로 강좌만 보면 바로 짤수 있습니다</p>
<p>그리고 당부의 말씀 드립니다</p>
<p>절대로 예제소스 따라하지 마세요</p>
<p>예제는 어려움에 처했을때만 아 이렇게 해야 하구나~ 하는겁니다</p>
<p>예제 따라하면 무엇보다 실력이 안늘어요</p>
<p>그리고 모바일말고 PC로(또는 PC버전)으로 감상 부탁드립니다~</p>
<p>19-2 2가지 방법? 왜 2가지이죠?</p>
<p>제목에서 진동을 사용하는대는 방법에는 2가지가 있다고 했습니다</p>
<p>왜 2가지 일까요?</p>
<p>대부분의 강좌에서는 진동을 사용하는 방법을 1가지만 알려줍니다</p>
<p>그러나 API를 보면 크게 2가지로 알수 있습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile10.uf.tistory.com%2Fimage%2F2167CD33526E366025FA76%22&amp;type=cafe_wa740"></p>
<p>진동은 다음과 같은 코드를 사용할수 있습니다</p>
<p>vibrate는 두가지 소스가 있죠</p>
<p>대부분의 강좌에서 나왔듯이 먼저는 그냥 진동만 울리는 방법입니다</p>
<p>또하나는 진동에 패턴을 주는 방법입니다</p>
<p>예를들면 윙~ ..... 위이이이잉~ .... 윙~</p>
<p>이런씩으로 말이죠</p>
<p>19-3 레아아웃편</p>
<p>이번 레이아웃도 저번 강좌와 마찬가지로 심플합니다</p>
<p>버튼 2개만 만들어 주시고 각각 버튼에 다른 onClick속성을 주시길 바랍니다</p>
<p>&lt;Button</p>
<p>&nbsp; &nbsp;&nbsp;android:</p>
<p>&nbsp; &nbsp; android:layout_</p>
<p>&nbsp; &nbsp; android:layout_height="wrap_content"</p>
<p>&nbsp; &nbsp; android:layout_alignParentTop="true"</p>
<p>&nbsp; &nbsp; android:layout_centerHorizontal="true"</p>
<p>&nbsp; &nbsp; android:layout_marginTop="50dp"</p>
<p>&nbsp; &nbsp; android:onClick="Vibrator_basic"</p>
<p>&nbsp; &nbsp; android:text="일반 진동" /&gt;</p>
<p>&lt;Button</p>
<p>&nbsp; &nbsp; android:</p>
<p>&nbsp; &nbsp; android:layout_</p>
<p>&nbsp; &nbsp; android:layout_height="wrap_content"</p>
<p>&nbsp; &nbsp; android:layout_alignLeft="@+id/button1"</p>
<p>&nbsp; &nbsp; android:layout_below="@+id/button1"</p>
<p>&nbsp; &nbsp; android:layout_marginTop="20dp"</p>
<p>&nbsp; &nbsp; android:onClick="Vibrator_pattern"</p>
<p>&nbsp; &nbsp; android:text="패턴 진동" /&gt;</p>
<p>(그대로 따라하지 말라고 빨간색으로 했습니다 직접 짜는 연습을 하세요)</p>
<p>레이아웃 끝~</p>
<p>19-4 자바 소스편</p>
<p>이번에는 소스가 매우 심플합니다</p>
<p>처음에 정의할 소스는 한줄입니다</p>
<p>Vibrator vide;</p>
<p>Vibrator는 안드로이드에서 진동을 담당하는 객체입니다 (객체라 하는게 맞나요?)</p>
<p>onCreate() 메소드 안에는 다음 한줄을 추가해 주세요</p>
<p>vide = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);</p>
<p>진동은 시스탬 서비스의 한 종류 이므로 이렇게 바로 불러오는 것만으로도 바로 사용이 가능합니다</p>
<p>사전 작업은 모두 마쳤습니다</p>
<p>이제 Vibrator의 사용법을 알아볼까 합니다</p>
<p>첫번째 일반 진동버튼에 정의된 onClick은&nbsp;Vibrator_basic이므로 메소드 이름을&nbsp;Vibrator_basic으로 만들어 봅시다</p>
<p>public void Vibrator_basic(View v){</p>
<p>&nbsp; &nbsp;&nbsp;</p>
<p>}</p>
<p>10번 초반강좌에서 배웠던 방법, Button의 onClick사용은 너무 자주 쓰이니 꼭 숙지해 주세요</p>
<p>물론 리스너도 많이 쓰입니다</p>
<p>저 메소드 안에다가 "한줄만" 추가해 봅시다</p>
<p>vide.vibrate(1000);</p>
<p>자, 일반 진동버튼 구현이 끝났습니다 ?!?!?!?!?!?!</p>
<p>위에서 말한대로 진동은 너무나도 쉽습니다 (20번 강좌부터 Thread등 어려우니 그전에 쉬운거 하나 하는거예요 ㅎㅎ)</p>
<p>vide.vibrate(1000);가 실행되면 진동을 울려줍니다</p>
<p>그안에 있는 숫자 1000이 궁금하시죠?</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F27147833526E36CA1747F6%22&amp;type=cafe_wa740"></p>
<p>이렇게 괄호 ()안에 커서를 올리고 컨트롤+스페이스를 누르면 뭐가 들어갈수 있는지 나옵니다</p>
<p>저기 보시면&nbsp;millisecond라고 되어 있내요</p>
<p>그림처럼&nbsp;밀리세컨드 초(millisecond)로 사용해 주시면 되는대...</p>
<p>밀리세컨드 초란? 시간의 단위인대요 1초가 1000밀리세컨드초 입니다</p>
<p>즉 1000=1초, 2000=2초 이렇게 외우시면 됩니다</p>
<p>안드로이드에서 정밀한 숫자를 위해 자주 쓰이는 숫자 단위이니 꼭 숙지해 두세요</p>
<p>[미르의 팁] (요즘 너무 팁이 안나오긴 한대...)</p>
<p>Q. 밀리 세컨드가 언제 나오나요?</p>
<p>A. 20번대나 30번대 강좌에서 배울예정인 알람(일정 시간후에 실행하기)과, Thread.sleep등 자주 쓰입니다</p>
<p>꼭 숙지하세요</p>
<p>그다음 두번째 버튼의 onClick은 Vibrator_pattern입니다 그러므로 이름이 Vibrator_pattern인 메소드를 만들어 봅시다</p>
<p>public void Vibrator_pattern(View v){</p>
<p>&nbsp; &nbsp;&nbsp;</p>
<p>}</p>
<p>이 메소드에는 두줄만 들어가면 끝입니다</p>
<p>long[] pattern = { 0, 500, 200, 400, 100 };</p>
<p>vide.vibrate(pattern, -1);</p>
<p>엌ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 너무 간단하죠?</p>
<p>그런대 이것은 설명이 조금 복잡합니다</p>
<p>먼저 윗줄부터 설명해 보겠습니다</p>
<p>이것은 long형 배열입니다</p>
<p>이렇게 진동에 패턴을 넣을수 있는대요</p>
<p>각 숫자의 의미에 대해 알아봅시다</p>
<p>첫번째 0은&nbsp;시작시간입니다 지연된 시작을 하려면 0이 아니라 다른 값을 넣으십시오 0은 즉시 시작 입니다</p>
<p>두번째 값은&nbsp;진동이 울릴 시간입니다 500은 0.5초(1000=1초)이므로 0.5초간 진동이 울립니다</p>
<p>세번째 값은&nbsp;진동을 쉴 시간입니다 200은 0.2초이므로 0.2초간 진동이 울리지 않습니다</p>
<p>네번째 값은 두번째 값과 같습니다</p>
<p>다섯번째 값은 세번째 값과 같습니다</p>
<p>이렇게 게속 패턴을 만들수 있습니다</p>
<p>예를 들어 지연된 시작(1초), 진동(2초), 쉼(5초), 진동(1초), 쉼(1초), 진동(5초), 쉼(1초)......</p>
<p>는 long[] pattern = { 1000, 2000, 5000, 1000, 1000, 5000, 1000 }; 입니다</p>
<p>배열은 원하시는 대로 많이 만드시면 됩니다</p>
<p>두번째줄을 알아보겠습니다</p>
<p>vide.vibrate(pattern, -1);은 원리가 간단한대 이해를 위해서는 선행 지식이 필요합니다</p>
<p>저 괄호에 첫번째로 들어가는 pattern은 아까 위에서 설명한 long형 배열입니다</p>
<p>배열을 집어넣는거죠</p>
<p>두번째 숫자 -1은 반복에 관련된 숫자인대요</p>
<p>이부분에서 선행지식이 필요합니다</p>
<p>-1(음수)은 1번 반복 하겠다는 뜻입니다</p>
<p>구글 개발자 사이트 원문 : the index into pattern at which to repeat, or -1 if you don't want to repeat.</p>
<p>즉 0과 양수를 넣으면 long[]에서 index부터 시작하겠다는 뜻이 됩니다</p>
<p>예를 들면 vide.vibrate(pattern, 2); 로 하게 되면</p>
<p>56줄(long[])에서 index 2번값은 "200"입니다</p>
<p>그러므로 200, 400, 100만 무한 반복이 됩니다</p>
<p>또 예를 들면 vide.vibrate(pattern, 3); 로 하게 되면</p>
<p>56줄(long[])에서 index 3번값은 "400"입니다</p>
<p>그러므로 400, 100만 무한 반복이 됩니다</p>
<p>무한 반복을 종료하려면 vide.cancel();을 사용하면 됩니다</p>
<p>이 상자를 이해하기 위해서는 index값이라는 선행지식이 필요합니다</p>
<p>index값이란? 배열에서 쓰이는 값인대요</p>
<p>아까 배운&nbsp;long[] pattern = { 0, 500, 200, 400, 100 };과 관련이 있습니다</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<table      align="center" ><tbody><tr><td ><p>index값&nbsp;</p>
</td><td ><p>0&nbsp;</p>
</td><td ><p>1&nbsp;</p>
</td><td ><p>2&nbsp;</p>
</td><td ><p>3&nbsp;</p>
</td><td ><p>&nbsp;4</p>
</td><td ></td></tr><tr><td ><p>long[] pattern = {</p>
</td><td ><p>&nbsp;0,</p>
</td><td ><p>500,</p>
</td><td ><p>200,</p>
</td><td ><p>400,</p>
</td><td ><p>100,</p>
</td><td ><p>};</p>
</td></tr></tbody></table><p></p>
<p></p>
<p></p>
<p></p>
<p>위 표를 보시면 이해가 쉬우실듯 합니다</p>
<p>index값을 가져오는 방법은 []안에 가져올 값을 넣으면 됩니다</p>
<p>예를들면 pattern[3]이렇게요</p>
<p>로그로 확인해 볼까요?</p>
<p>Log.d("pattern index", "0:"+pattern[0]+" 1:"+pattern[1]+" 2:"+pattern[2]+" 3:"+pattern[3]+" 4:"+pattern[4]);</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile6.uf.tistory.com%2Fimage%2F2456AA4B526E39EB1D455D%22&amp;type=cafe_wa740"></p>
<p>이렇게 index값이 이해가 잘 되셨을듯 합니다</p>
<p>이해가 되셨으면 위의 회색박스를 다시 읽어주세요</p>
<p>그럼 뭔말인지 아실겁니다</p>
<p>자! 이제 끝났습니다~</p>
<p>정작 배운코드는 3~4줄이 안되지만 설명은 좀 길었습니다</p>
<p>아무튼 이렇게 진동을 마스터 하셨음이라 믿고 저는 이만 가봅니다~</p>
<p></p>
<p>이글은 [http://whdghks913.tistory.com/365] 에서 다시 보실수 있으며 원본 글의 저작권은 미르에게 있습니다</p>
<p></p>
<p>이 강좌의 예제소스는 20번 강좌가&nbsp;나오는 즉시 업로드 됩니다</p>
<p>카페에서는 원본글에서만 다운로드가 가능합니다</p>
<p>예제소스 다운로드 : 아직 20번 강좌가 업로드 되지 않았습니다</p>
