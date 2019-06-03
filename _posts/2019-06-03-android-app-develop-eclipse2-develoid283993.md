---
layout: post
title: '"아마도 쉬운 안드로이드 어플만들기" 4-3 진동'
author: 'Snails'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/283993' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p><p><i>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</i></p><p><i>저작자는 Snails(tjdtnsu)입니다.</i></p><p><span><strong><span>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</span></strong></span></p><p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p><p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페, App Development 카페, 프그머 카페</u></p><p>&nbsp;</p><p><u>﻿</u></p><p><b><span>학습목표 :&nbsp;진동의 삽입법에 대해알 수 있다.</span></b></p><p><span><span><strong>난이도 : ★★</strong><strong>★</strong><strong>★</strong>&nbsp;</span></span> </p><div>&nbsp;</div><div>&nbsp;</div><div>오늘은 진동입니다.</div><div>안드로이드에서 거의 빠지지 않습니다(제 넥7은 안됟)</div><div>진동은 모바일 장비에 사건을 발생을 알리는 중요한 수단이라서 도서관, 강의실 등에서도 사용, 전화, 게임 캐릭터들간의 충돌을 표현이 가능합니다.</div><div>&nbsp;</div><div>진동은 모터 돌아가면서 내는 떨림이니</div><div>진동 아주 많이 쓰면 배터리가 빨리 닳는 전설ㅇ.....</div><div>&nbsp;</div><div>&nbsp;</div><div>어쨌든 구현해보겠습니다.</div><div>진동은 Vibrator 시스템 서비스에서 제공됩니다. 그래서 객체 생성없이 메서드로 언제든지 구할 수 있습니다.</div><div>&nbsp;</div><div><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130727_172%2Ftjdtnsu_1374891191899rONQU_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></div><div>&nbsp;</div><div>&nbsp;</div><div>메니페스트에 가서 &lt;used sdk&gt;밑에 빨간색 코드를 복붙해 줍니다.</div><div>&nbsp;&nbsp;&nbsp; &lt;uses-sdk<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:minSdkVersion="8"<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:targetSdkVersion="17" /&gt;<b>&nbsp;&nbsp;&nbsp; <b>&nbsp;&nbsp;&nbsp; <span>&lt;uses-permission android:name= "android.permission.VIBRATE" /&gt;</span></div><div>이건 vibrate 퍼미션을 부여하는 작업입니다.</div><div>&nbsp;</div><div>&nbsp;</div><div>그리고 버튼으로 와서 버튼 클릭 메서드에서 빨간색 코드를 복붙해 줍니다.</div><div>&nbsp;&nbsp;&nbsp; &nbsp;<span>Vibrator vibe = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);</span><b><span>&nbsp;&nbsp;&nbsp; &nbsp;vibe.vibrate(500);</span></div><div>&nbsp;</div><div>vibe 메서드를 만들어 주어서</div><div>0.5초동안 진동이 울리게 한다</div><div>&nbsp;</div><div>그 소립니다.</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>테스트를 합니다.</div><div>(ADT는 진동이 지원되지 않으므로 실제 기기에서 테스트를 해주세요)</div><div>직접 보여드릴 수 없습니다.</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>다음은 이벤트 핸들러로 들어가겠습니다.</div><p></p>
