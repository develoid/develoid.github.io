---
layout: post
title: '"아마도 쉬운 안드로이드 어플만들기" '어서와 연습문제'-1'
author: 'Snails'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/248996' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%22&amp;type=cafe_wa740"></p><p><i>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</i></p><p><i>저작자는 Snails(tjdtnsu)입니다.</i></p><p><u>참고 : 이 강좌가 쓰여진 컴퓨터 사양은 엄청 안좋습니다.(Celeron D 2.66GHz, 768MB) 그러므로 다른 컴퓨터도 거의 다 될겁니다.</u>&nbsp;</p><p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p><p>&nbsp;</p><p>네 처음으로 연습문제에 들어가는데요</p><p>저는 일단 반복을 좀 중요시해서 어렵지는 않지만 귀찮은 문제를 좋아합니다.</p><p>&nbsp;</p><p>일명 '어서와 연습문제' 시리즈 입니다.</p><p>전 강좌에 답이 다 있으니 그걸 참고하면 됩니다.</p><p>&nbsp;</p><p>'어서와 연습문제' 시리즈는 총 5문제로 지필 4문제, 실기 1문제입니다.</p><p>&nbsp;</p><p>-------------------------------------------------------------------------------------</p><p><b>어서와 연습문제 1회</b></p><p>범위 : Layout, Textview, Editview, MoveLayout, AddPicture</p><p>문제 : 5문제(지필 4문제, 실기 1문제)</p><p>배점 : 1번-15점, 2번-15점, 3번-20점, 4번-20점, 5번-30점</p><p>제한시간 : 1시간</p><p>5번 채점기준 : 7개의 소문항 하나당 5점</p><p>&nbsp;</p><p>&nbsp;</p><p>1. 레이아웃에 텍스트를 추가하고 싶다. 잘못된 설명은?</p><p>&nbsp; 1) 일단 먼저 프로젝트를 추가한다.</p><p>&nbsp; 2) Mainactivity.java에 들어간다.</p><p>&nbsp; 3) 파일에 textview를 추가한다.</p><p>&nbsp; 4) 코드모드로 전환해 텍스트를 고친다.</p><p>&nbsp;</p><p>2. 레이아웃을 RelativeLayout으로 정렬하고 싶다. 잘못된 설명은?</p><p>&nbsp; 1) RelativeLayout은 배치를 절대적으로 배치하는 방법이다.</p><p>&nbsp; 2) 이를 이용하면 배치를 더 잘할 수 있다.</p><p>&nbsp; 3) 정렬이 간단하다.</p><p>&nbsp; 4) 복잡한 코드를 직접 적을 필요가 없다.</p><p>&nbsp;</p><p>3. 레이아웃을 추가하고 싶다. 맞는 설명은?</p><p>&nbsp; 1) 레이아웃을 추가하기 전에 버튼을 만들어야 한다.</p><p>&nbsp; 2) xml 파일을 만들고 java 파일을 만들어야 한다.</p><p>&nbsp; 3) 버튼으로 메서드를 실행할 때는 onClick을 사용한다.</p><p>&nbsp; 4) 레이아웃 이름은 MainActivity(숫자)로 해야 한다.</p><p>&nbsp;</p><p>4. 레이아웃에 그림을 추가하고 싶다. 잘못된 설명은?</p><p>&nbsp; 1) 그림을 끌어올 때 그림 잘라내기와, 그림 링크하는 방법이 있다.</p><p>&nbsp; 2) 그림은 drawable_hdpi에 넣는다.</p><p>&nbsp; 3) xml 파일로 가서 imageview로 추가한다.</p><p>&nbsp; 4) 그림도 RelativeLayout으로 위치를 바꿀 수 있다.</p><p>5. 다음 조건에 맞춰 레이아웃을 제작하시오.</p>






















<!-- Not Allowed Attribute Filtered ( se2_tbl_template="8") --><table><tbody><tr><td ><p>&nbsp;조건 1</p></td><td ><p>&nbsp;레이아웃을 3개로 추가하시오&nbsp;</p></td></tr><tr><td ><p>&nbsp;조건 2</p></td><td ><p>&nbsp;첫 번째 레이아웃에 '어서오세요 고객님 집에 오신 것을 환영합니다'를 추가하시오&nbsp;</p></td></tr><tr><td ><p>&nbsp;조건 3</p></td><td ><p>&nbsp;조건 2에 추가한 textview 밑줄 오른쪽에 '로그인하기'라 적힌 버튼을 만들어서 두번째 레이아웃에 링크하시오&nbsp;</p></td></tr><tr><td ><p>&nbsp;조건 4</p></td><td ><p>&nbsp;두번째 레이아웃에는 아이디, 패스워드 글자 옆에 아이디, 패스워드를 입력할 칸을 만드시오&nbsp;</p></td></tr><tr><td ><p>&nbsp;조건 5</p></td><td  ><p>&nbsp;조건 4에 추가한 것들 밑줄 오른쪽에 'Login'라 적힌 버튼을 만들어서 세번째 레이아웃에 링크하시오</p></td></tr><tr><td ><p>&nbsp;조건 6</p></td><td  ><p>&nbsp;세번쩨 레이아웃에 인사하는 사진을 넣으시오 &nbsp;</p></td></tr><tr><td ><p>&nbsp;조건 7</p></td><td ><p>&nbsp;조건 6 밑에 '감사합니다. 잠시만 기다려주세요'라는 텍스트를 추가하시오</p></td></tr></tbody></table><p><b>---------------------------------------------------------------------</p><p>정답은 다음 강좌에 공개합니다.&nbsp;</p>
