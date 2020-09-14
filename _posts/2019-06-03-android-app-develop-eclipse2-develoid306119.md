---
layout: post
title: '[커뮤니티] 아마도 쉬운 안드로이드 어플만들기  6-1 기초 대화상자(2)'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/306119' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페, App Development 카페, 프그머 카페</u></p>
<p><u>업로드 시간 : 매주 일요일 오후 11시</u><p></p>
<p>&nbsp;난이도 : ★★★★★&nbsp;</p>
<p></p>
<p></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>﻿네 전 강의에서 잇습니다.&nbsp;</p>
<p>전 시간에는 기본적인 생성까지만 알아보았고요&nbsp;</p>
<p>이번 시간에는 대화상자 밑에 확인 등등의 버튼을 넣어보겠습니다.&nbsp;</p>
<p>﻿</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles2.naver.net%2F20130913_33%2Ftjdtnsu_1379058970883nETKx_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%3Ftype%3Dw2%22&amp;type=cafe_wa740">&nbsp;</p>
<p>네 이 대화상자의 문제점은 뭘까요?&nbsp;</p>
<p>이걸 종료시킬만한게 없다는 겁니다.&nbsp;</p>
<p>Back키를 눌러야 한다는 것이죠.&nbsp;</p>
<p>만약에 Back버튼까지 금지시켜 놓으면 이제 답이 없어지는 겁니다.﻿&nbsp;</p>
<p>﻿&nbsp;</p>
<p>﻿&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp; public void dia(View v){&nbsp;&nbsp;&nbsp; &nbsp;AlertDialog.Builder gg=new AlertDialog.Builder(this);&nbsp;&nbsp;&nbsp; &nbsp;gg.setTitle("단언컨데");&nbsp;&nbsp;&nbsp; &nbsp;gg.setMessage("안드로이드는 어려운 겁니다.");&nbsp;&nbsp;&nbsp; &nbsp;gg.setIcon(R.drawable.ic_launcher);&nbsp;&nbsp;&nbsp; &nbsp;gg.setPositiveButton("그럴껄",null);&nbsp;&nbsp;&nbsp; &nbsp;gg.show();&nbsp;&nbsp;&nbsp; }&nbsp;</p>
<p>﻿&nbsp;</p>
<p>﻿여기서 "그럴껄"이라는 버튼을 추가했습니다.</p>
<p>그 뒤﻿&nbsp;null은 리스너의 동작을 나타내는 것인데 없으므로 null로 지정했습니다.&nbsp;</p>
<p>&nbsp;</p>
<p>﻿&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles5.naver.net%2F20130913_228%2Ftjdtnsu_1379059005369l9tSx_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%3Ftype%3Dw2%22&amp;type=cafe_wa740">&nbsp;</p>
<p>﻿&nbsp;</p>
<p>네 이렇게 추가되었습니다.﻿&nbsp;</p>
<p>이번에는 또 버튼이 2개가 있는 걸로 다시 만들어보겠습니다.&nbsp;</p>
<p>﻿&nbsp;</p>
<p>﻿&nbsp;public void dia(View v){&nbsp;&nbsp;&nbsp; &nbsp;AlertDialog.Builder gg=new AlertDialog.Builder(this);&nbsp;&nbsp;&nbsp; &nbsp;gg.setTitle("단언컨데");&nbsp;&nbsp;&nbsp; &nbsp;gg.setMessage("안드로이드는 어려운 겁니다.");&nbsp;&nbsp;&nbsp; &nbsp;gg.setIcon(R.drawable.ic_launcher);&nbsp;&nbsp;&nbsp; &nbsp;gg.setPositiveButton("그럴껄",null);&nbsp;&nbsp;&nbsp; &nbsp;gg.setNegativeButton("무슨 잡소리야", null);&nbsp;&nbsp;&nbsp; &nbsp;gg.show();&nbsp;&nbsp;&nbsp; }&nbsp;</p>
<p>﻿&nbsp;&nbsp;</p>
<p>&nbsp;</p>
<p>﻿&nbsp;</p>
<p>﻿&nbsp;</p>
<p>이걸 이론적으로 설명하자면&nbsp;</p>
<p>setPositiveButton, setNeutralButton, setNegativeButton으로 세가지 버튼까지 표시할 수 있는데&nbsp;</p>
<p>해석으로는 왼쪽부터 '긍정', '중립', '부정' 으로 각각 이름이 붙어여 있는데﻿﻿&nbsp;</p>
<p>모두 표시할 경우 이 순서부터 표시된다고 합니다.&nbsp;</p>
<p>역시 예를 보자면﻿&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles9.naver.net%2F20130913_296%2Ftjdtnsu_1379058953788fMGAJ_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>﻿이렇게 됩니다.&nbsp;</p>
<p>&nbsp;</p>
<p>﻿이제 이걸 이용해 다양한 리스너를 구현해서 집어넣기만 하면&nbsp;기본적인 내용은 마스터하시는 겁니다.&nbsp;</p>
<p>﻿&nbsp;</p>
<p>&nbsp;</p>
<p>다음은 간단하게 대화상자의 활용을 배울 텐데 가장 간단한 알림 메세지에 대해 연구하겠습니다.﻿&nbsp;</p>
<p></p>
<p></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p></p>
