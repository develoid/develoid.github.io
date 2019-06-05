---
layout: post
title: '"아마도 쉬운 안드로이드 어플만들기" 3-3 뷰(1)'
author: 'Snails'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/265849' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>참고 : 이 강좌는 매주 일요일마다 업데이트합니다.</u> (공휴일, 개인사정 등등 제외)</p>
<p>개인강좌게시판을 득템하기 위하여&nbsp;</p>
<p>내일 -&nbsp;학원을 10시부터 10시까지 해서 못올려서..&nbsp;</p>
<p>&nbsp;</p>
<p><u>﻿</u></p>
<p>학습목표 :&nbsp;뷰의 계층과 자주 쓰이는 속성을 이해할 수 있다.</p>
<p>난이도 : ★★★</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>안드로이드 프로그램을 구성하는 주요 컴포넌트는 액티비티입니다.</p>
<p>액티비티 자체에는 화면에 직접 보이지 않는데 실제 사용자와 대면하는 것은 액티비티 안의 뷰입니다.</p>
<p>뷰가 여러개 모여 액티비티를 구성하고 액티비티 여러 개가 모여 응용 프로그램이 됩니다.</p>
<p>뷰는 ui 핵심 컴포넌트로서 자신의 모양을 그리고 입력을 받아들입니다.</p>
<p>&nbsp;</p>
<p>근데 view의 클래스는 개수가 엄청나고 클래스 속성, 메서드도 달라서 모두 외우려면 엄청난 시간이 소요됩니다.</p>
<p>그렇지만 응용 프로그램을 구성하는 기본적인 부품으로 충분한 시간을 들여 연구 해 보아야 합니다.</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130622_99%2Ftjdtnsu_1371908882329LDVRM_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>위 그림 : 뷰 그룹의 계층 (안드로이드 프로그래밍 정복 Chapter 3 중)</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>일단 모든 뷰는 view 클래스로부터 파생되어서 view가 가진 모든 속성, 메서드를 그대로 상속받습니다.</p>
<p>최상위 뷰에 정의된 멤버는 사용 빈도가 높으며 중요한 의미를 가집니다.</p>
<p>근데 속성이 또 엄청나므로 자주 사용하는 것부터 살펴 보도록 하겠습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>id</p>
<p>뷰 고유 이름 정의</p>
<p>ex) android:</p>
<p>&nbsp;</p>
<p>layout_width, layout_height</p>
<p>뷰의 폭과 높이를 지정</p>
<p>match_parent(fill_parent) : 부모의 주어진 크기를 다 채운다.</p>
<p>wrap_content : 내용물의 크기만큼만 맞춘다.</p>
<p>ex) android:layout_</p>
<p>background</p>
<p>뷰의 배경을 어떻게 채울 것인지 지정</p>
<p>ex)android:background="#ff0000"</p>
<p>&nbsp;</p>
<p>visibility</p>
<p>뷰가 보일 것인가 아닌가를 지정한다.</p>
<p>visible : 보이는 상태invisible : 숨겨지되 자리는 차지</p>
<p>gone : 숨겨지되 자리도 차지하지 않음</p>
<p>ex)android:visibility="visible"</p>
<p>&nbsp;</p>
<p>clickable, longClickable</p>
<p>클릭 이벤트(손가락으로 누르는 것)를 받을 것인지, 롱 클릭 이벤트(누른 채로 기다리는 것)를 받을 것인지 지정</p>
<p>ex) android:longClickable="true"</p>
<p>&nbsp;</p>
<p>focusable</p>
<p>키보드 포커스를 받을 수 있는지 지정</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>오늘은 view의 속성중 아주 기초적인 것만 알아보았고</p>
<p>다음은 TextView, ImageView&nbsp;전용으로 알아보겠습니다.</p>

