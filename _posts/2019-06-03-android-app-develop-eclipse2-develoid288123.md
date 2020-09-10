---
layout: post
title: '[커뮤니티] "아마도 쉬운 안드로이드 어플만들기" 5-2 이벤트의 종류(1)'
author: 'Snails'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/288123' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페, App Development 카페, 프그머 카페</u></p>
<p>&nbsp;</p>
<p>지난번에는 이벤트 처리법에 대해 했고</p>
<p>오늘은 이벤트의 종류를 하겠습니다.</p>
<p>&nbsp;</p>
<p>이벤트 종류는 아주 많은데</p>
<p>그 중 대표적인 것만 하겠습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>1. 터치 입력</p>
<p>스마트폰에서 가장 기본적인 입력 방법입니다.</p>
<p>지난번에도 말했다싶이</p>
<p>터치는 입력 시간뿐만 아니라 x,y좌표까지 알아냅니다.</p>
<p>&nbsp;</p>
<p>동작</p>
<p>&nbsp; - ACTION_DOWN 화면을 누름</p>
<p>&nbsp; - ACTION_MOVE 누른채로 움직임</p>
<p>&nbsp; - ACTION-UP 화면을 땜</p>
<p>&nbsp;</p>
<p>예</p>
<p>쿠키런의 점프, 슬라이드을 구현</p>
<p>만약에&nbsp;터치한 자리가&nbsp;가로 화면의 크기의 반보다 작으면 점프, 크면 슬라이드를 한다.&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>2.&nbsp;키보드 입력</p>
<p>장비에 따라 하드웨어 키보드, 스크린 키보드가 제공되는데 문자를 둘 다 입력이 가능하다.</p>
<p>&nbsp;</p>
<p>상수</p>
<p>&nbsp; - KEYCODE_DPAD_LEFT 왼쪽 이동키</p>
<p>&nbsp; - KEYCODE_A 알파벳 A</p>
<p>&nbsp; - KEYCODE_CALL 통화</p>
<p>&nbsp; - KEYCODE_HOME 홈</p>
<p>&nbsp; - KEYCODE_VOLUME_UP 볼륨증가버튼</p>
<p>&nbsp;</p>
<p>동작</p>
<p>&nbsp; -&nbsp;ACTION_DOWN</p>
<p>&nbsp; - ACTION_UP</p>
<p>&nbsp; - ACTION_MULTIPLE 같은 키를 여러번 눌림</p>
<p>&nbsp;</p>
<p>예</p>
<p>숫자 그대로 쓰기를 구현</p>
<p>만약 0~9의 키가 눌렸을 때 sum*10+key를 한다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>3. 위젯의 이벤트 처리</p>
<p>위젯의 이벤트는 동일하지만 효율적 방법이 존재한다.</p>
<p>위젯의 대표적 예로 버튼을 해보면</p>
<p>클릭은 단순히 누르고 떼는 동작이며 터치에 희해 추가로 발생하는 이벤트이다.</p>
<p>이럴 때 처리 코드로</p>
<p>&nbsp;</p>
<p>void onClick(View&nbsp;v)</p>
<p>이다.</p>
<p>이건 그냥 단순이 클릭되었다는 사실만 있다는 것이다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>다음 강좌 : <a href="http://tjdtnsu.blog.me/120195369040">http://tjdtnsu.blog.me/120195369040</a></p>
<p></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
