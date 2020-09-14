---
layout: post
title: '[커뮤니티] 아마도 쉬운 안드로이드 프로그래밍 5-1 이벤트 처리(2)'
author: 'Snails'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/285166' ; </script>

<p></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페, App Development 카페, 프그머 카페</u></p>
<p>&nbsp;</p>
<p><u>﻿</u></p>
<p>학습목표 :&nbsp;이벤트를 처리하는 방법에 대해 알 수 있다.</p>
<p>난이도 : ★★★★★★&nbsp; </p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>두번째 시간입니다.</p>
<p>너무 밤에 올려서 안 본 것 같은 느낌이 드는데요</p>
<p>뭔 말인지 못알아듣겠으면 뒤로 가기를 눌러주시기 바랍니다.&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>4. 뷰가 리스너 구현</p>
<p>3번째 방법에 액티비티로 구현이 가능하면 뷰도 가능합니다.</p>
<p>뷰를 파생하면 클래서 선언문이 있으므로 뷰 스스로 리스너 인터페이스를 상속받아 구현하면 된다.</p>
<p>&nbsp;</p>
<p>5. 익명 이너 클래스 사용</p>
<p>위 3,4번은 적당한 클래스가 있을 때만 쓸 수 있어 일반적이지 않다.</p>
<p>원래 2번이 가장 완벽한데 클래스를 일일이 선언하지 못해 번거롭다.</p>
<p>이런 경우를 위해 익명 이너 클래스라는 문법을 제공하는데</p>
<p>굳이 클래스를 선언할 필요 없이 상속, 재정의를 동시에 할 수 있다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>6. 익명 이너 클래스의 임시 객체 사용</p>
<p>5번 방법으로 코드가 대폭 짧아졌는데TouchListener를 하나만 생성할 수 있다.</p>
<p>특정 뷰에 대한 이벤트 핸들러로만 쓸 경우 두개를 생성할 필요가 없다.</p>
<p>이럴 때 객체의 이름 지정도 하지 않으며 임시 객체를 만들어 등록 메서드의 인수로 전달해버린다.</p>
<p></p>
<p>&nbsp;</p>

 </p>
