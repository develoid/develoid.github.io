---
layout: post
title: '"아마도 쉬운 안드로이드 어플만들기" 3-3 뷰(2)'
author: 'Snails'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/270084' ; </script>


















						<!-- Not Allowed Attribute Filtered ( nowrap="nowrap") --><table class="post-body" id="printPost1" cellspacing="0" cellpadding="0"><tbody><tr><td class="bcl"></td><td class="bcc"><div><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p><p><i>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</i></p><p><i>저작자는 Snails(tjdtnsu)입니다.</i></p><p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p><p><u>참고 : 이 강좌는 매주 일요일마다 업데이트합니다.</u> (공휴일, 개인사정 등등 제외)</p><p><span><strong><span>개인강좌게시판을 득템하기 위하여</span></strong></span><span>&nbsp;</span></p><p>&nbsp;</p><p><u>﻿</u></p><p><b><span>학습목표 :&nbsp;TextView, ImageView의 주요한 속성을 이해할 수 있다.</span></b></p><p><b><span><span>난이도 : ★★</span></span></b>★</p><div>&nbsp;</div><div>이번에도 메인 액티비티의 xml 코드 작성을 위한 암기의 시간을 가져 보도록 하겠습니다.</div><div>좀 지루하겠지만 기초라는 걸 알아 두시기 바랍니다.(All 그래픽으로 넘어가기 전까지)</div><p></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>1. TextView 속성</p><p>&nbsp;</p><p><strong>text</strong></p><p>출력할 문자열을 지정한다.</p><p>일관된 메세지 관리를 위해서 string.xml(3-1 참조)를 지정하기도 한다.</p><p>ex) android:text="안녕"</p><p>&nbsp;</p><p><strong>textColor</strong></p><p>문자열의 색상을 지정한다.</p><p>ex) android:textColor="#ff0000"</p><p>&nbsp;</p><p><strong>textSize</strong></p><p>텍스트이 폰트 크기를 지정한다.</p><p>단위는 sp가 적당하다. </p><p>ex) android:textSize="25sp"</p><p>&nbsp;</p><p><strong>textStyle</strong></p><p>폰트의 속성을 지정한다.</p><p>normal, bold, italic 중 하나를 쓰기나 '|' 로 묶어 두 개 이상 할 수도 있다.</p><p>ex) android:textStyle="bold|italic"</p><p>&nbsp;</p><p><strong>typeface</strong></p><p>글꼴의 모양을 지정한다.<b>normal, sans, serif, monospace 중 하나를 선택할 수 있다.&nbsp;</p><p>ex) android:typeface="normal"</p><p>&nbsp;</p><p><strong>width,height</strong></p><p>텍스트 뷰의 폭과 높이이다.</p><p>위젯의 가장 기본적 속성이지만 거의 사용되지 않는다.</p><p>width, height 대신 layout_width, layout_height 로 사용된다.</p><p>&nbsp;</p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130630_168%2Ftjdtnsu_1372563356841KToMu_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p><p>&nbsp;</p><p>&nbsp;</p><p>2. ImageView 속성</p><p>&nbsp;</p><p><strong>src</strong></p><p>출력할 이미지를 지정한다.</p><p>ex) android:src="@drawable/Scan06172013_172111"</p><p>&nbsp;</p><p><strong>adjustViewBounds</strong></p><p>이미지 뷰를 적당히 조정할 것인가를 지정한다.</p><p>ex)&nbsp;android:adjustViewBounds="false"</p><p>&nbsp;</p><p><strong>cropToPadding</strong></p><p>true이면 여백을 맞추기 위해 이미지 일부를 자른다.</p><p>ex) android:cropToPadding="true"</p><p>&nbsp;</p><p><strong>maxHeight, maxWidth</strong></p><p>이미지 최대 크기를 지정한다.</p><p>ex)&nbsp;android:maxWidth="200dp"</p><p>&nbsp;</p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130630_101%2Ftjdtnsu_1372576844490Pni5S_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>일단 기본 적인 것은 여기까지입니다.</p><p>따로 Button, Edittext는 하지 않겠습니다.</p><p>다음 시간에는 연습문제를 풀고 대단원 4로 넘어가겠습니다.</p><p>&nbsp;</p><p>&nbsp;</p><p><u>읽었으면 덧글 부탁드리겠습니다. 너무 외로워요.</u></p></div></td></tr></tbody></table>  
