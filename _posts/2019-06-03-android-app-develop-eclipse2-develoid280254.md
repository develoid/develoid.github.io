---
layout: post
title: '"아마도 쉬운 안드로이드 어플만들기" 4-1 토스트'
author: 'Snails'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/280254' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페, App Development 카페, 프그머 카페</u></p>
<p>&nbsp;</p>
<p><u>﻿</u></p>
<p>학습목표 :&nbsp;토스트를 생성할 수 있다.</p>
<p><strong>난이도 : ★★</strong><strong>★</strong><strong>★</strong>&nbsp; </p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>네 제가 난이도를 4개로 한 이유가 뭘까요?</p>
<p>암기와 코드 때문입니다.</p>
<p>이제 코드를 줄줄이 외우셔야 할 것 같은데요</p>
<p>그래서 난이도+3입니다.</p>
<p>그래도 코드 관련 작업 중 가장 간단합니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>이번에는 토스트를 만들어 보려고 합니다.</p>
<p>토스트는 많이 보셨을 텐데</p>
<p>밑에 밑에 포커스가 잡히면서 잠시 나타나는 메세지를 말합니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130720_188%2Ftjdtnsu_13743010343283TjgS_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>네 많이 보셨죠?</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>토스트는 이 한줄만 외우면 기본이 끝납니다.</p>
<p>Toast.makeText(this, 텍스트, 얼마나).show();</p>
<p><em>﻿</em></p>
<p><em>﻿﻿﻿</em></p>
<p><em>﻿﻿﻿</em>일단 텍스트는 "" 사이에 적어주시고요</p>
<p>﻿﻿﻿그 뒤에는 Toast.LENGTH_SHORT나 LENGTH_LONG이 있습니다.</p>
<p>﻿﻿﻿짧은 건 2초, 긴것은 4초가 나타난다네요</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿cancel 메서드를 부르면 지속시간 전이라도 토스트는 사라진다고 합니다.﻿﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿﻿﻿</p>
<p>﻿</p>
<p>﻿﻿﻿뭐 어쨌든 이렇게 해서 직접 만들어 보겠습니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130720_297%2Ftjdtnsu_1374301550284kAH6N_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>짜잔 자바 파일입니다.</p>
<p>어디 있는지 모르시겠다고요? src 폴더를 찾아 보세요.</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿아무 상태도 안하고 열면 여기서 뭔가 빠져 있을 겁니다.</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿﻿﻿</p>
<p>그리고 레이아웃 파일을 엽니다.</p>
<p>﻿﻿﻿<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130720_150%2Ftjdtnsu_1374301742630o1OjT_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿저는 이렇게 해 놓았는데</p>
<p>﻿﻿﻿계산 버튼만 볼 겁니다.</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿저 oncllick에서 메서드를 하나 지정합니다.</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿그러면 분석하겠습니다.</p>
<p>﻿﻿﻿<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130720_232%2Ftjdtnsu_13743019254763wz8I_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿우리는 여기서 이 두개의 코드만 있으면 됩니다.</p>
<p>일단 xml을 살펴 보겠습니다.</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿1. android:onClike="plus"</p>
<p>이 소리는 버튼을 클릭하면 plus 메서드가 호출된다는 뜻입니다.</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿﻿2. public void plus(View v)﻿</p>
<p>﻿</p>
<p>1번에서 plus 메서드를 정의합니다.﻿﻿﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿3. Toast.makeText(this,"더하기를 시작합니다.",Toast.LENGTH_LONG).show();</p>
<p>토스트를 "더하기를 시작합니다"라는 메서드로 길게 출력합니다.</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿네 이걸 실행해 봅니다.</p>
<p>﻿﻿﻿</p>
<p><iframe frame scrolling="no" name="mplayer" title="플레이어"  height="405" src="https://serviceapi.nmv.naver.com/view/ugcPlayer.nhn?vid=637C2FD2FBF6B01170C1757BD6F9E80411AA&amp;inKey=V1251e730010aee041cbcbc314fcfb1e408e8f6f625c27c53f6128c3feb17086cfa63bc314fcfb1e408e8&amp;wmode=opaque&amp;hasLink=0&amp;autoPlay=false&amp;beginTime=0" allowfullscreen="allowfullscreen"></iframe></p>
<p>﻿</p>
<p>이렇게 됩니다.</p>
<p>근데 문제는 몇번 누르면 중복 생성이 아니라</p>
<p>제한시간이 지난 후 그 다음게 생긴다는 소리입니다.</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿</p>
<p>﻿</p>
<p>그래서 짜증날 때에는 show(); 대신 cancel();을 붙여 주면 됩니다.</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿다음은 비프음에 대해 배워보겠습니다.﻿﻿﻿﻿﻿﻿</p>
<p>﻿﻿﻿﻿﻿﻿﻿﻿</p>
<p>﻿﻿﻿<em>﻿﻿</em></p>
<p>&nbsp;</p>
 <p></p>

