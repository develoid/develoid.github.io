---
layout: post
title: '[커뮤니티] "아마도 쉬운 안드로이드 어플만들기" 4-3 진동'
author: 'Snails'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/283993' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페, App Development 카페, 프그머 카페</u></p>
<p>&nbsp;</p>
<p><u>﻿</u></p>
<p>학습목표 :&nbsp;진동의 삽입법에 대해알 수 있다.</p>
<p>난이도 : ★★★★&nbsp; </p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>오늘은 진동입니다.</p>
<p>안드로이드에서 거의 빠지지 않습니다(제 넥7은 안됟)</p>
<p>진동은 모바일 장비에 사건을 발생을 알리는 중요한 수단이라서 도서관, 강의실 등에서도 사용, 전화, 게임 캐릭터들간의 충돌을 표현이 가능합니다.</p>
<p>&nbsp;</p>
<p>진동은 모터 돌아가면서 내는 떨림이니</p>
<p>진동 아주 많이 쓰면 배터리가 빨리 닳는 전설ㅇ.....</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>어쨌든 구현해보겠습니다.</p>
<p>진동은 Vibrator 시스템 서비스에서 제공됩니다. 그래서 객체 생성없이 메서드로 언제든지 구할 수 있습니다.</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130727_172%2Ftjdtnsu_1374891191899rONQU_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>메니페스트에 가서 &lt;used sdk&gt;밑에 빨간색 코드를 복붙해 줍니다.</p>
<p>&nbsp;&nbsp;&nbsp; &lt;uses-sdk&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:minSdkVersion="8"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:targetSdkVersion="17" /&gt;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &lt;uses-permission android:name= "android.permission.VIBRATE" /&gt;</p>
<p>이건 vibrate 퍼미션을 부여하는 작업입니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>그리고 버튼으로 와서 버튼 클릭 메서드에서 빨간색 코드를 복붙해 줍니다.</p>
<p>&nbsp;&nbsp;&nbsp; &nbsp;Vibrator vibe = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);&nbsp;&nbsp;&nbsp; &nbsp;vibe.vibrate(500);</p>
<p>&nbsp;</p>
<p>vibe 메서드를 만들어 주어서</p>
<p>0.5초동안 진동이 울리게 한다</p>
<p>&nbsp;</p>
<p>그 소립니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>테스트를 합니다.</p>
<p>(ADT는 진동이 지원되지 않으므로 실제 기기에서 테스트를 해주세요)</p>
<p>직접 보여드릴 수 없습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>다음은 이벤트 핸들러로 들어가겠습니다.</p>
<p></p>
