---
layout: post
title: '[커뮤니티] 아마도 쉬운 안드로이드 어플만들기 [6] 입력 가능한 칸 생성하기'
author: 'Snails'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/233988' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130428_230%2Ftjdtnsu_1367121312983EV5pv_JPEG%2Fand.jpg%22&amp;type=cafe_wa740">&nbsp;</p>
<p></p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p><u>참고 : 이 강좌가 쓰여진 컴퓨터 사양은 엄청 안좋습니다.(Celeron D 2.66GHz, 768MB) 그러므로 다른 컴퓨터도 거의 다 될겁니다.</u>&nbsp;</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>학습목표 : 화면에 직접 입력할 수 있는 EditText를 사용할 수 있다</p>
<p>학습목표 : 디폴트값을 수정할 수 있다.</p>
<p>난이도 : ★☆</p>
<p></p>
<p>전 강좌와 비슷하지만 조금 발전이 된 형태라서</p>
<p>별 반쪽자리를 더 추가 했습니다.</p>
<p>1. 프로젝트 생성</p>
<table><tbody><tr><td  >project name</td><td  ><p>&nbsp;edittext</p>
</td></tr><tr><td  ><p>&nbsp;build target&nbsp;</p>
</td><td  ><p>&nbsp;Android 2.3.3&nbsp;</p>
</td></tr><tr><td  ><p>&nbsp;application name&nbsp;</p>
</td><td  ><p>&nbsp;edittext</p>
</td></tr><tr><td  ><p>&nbsp;package name&nbsp;</p>
</td><td  ><p>&nbsp;naver_edittext</p>
</td></tr><tr><td  ><p>&nbsp;create activity&nbsp;</p>
</td><td  ><p>&nbsp;edittext</p>
</td></tr><tr><td  ><p>&nbsp;min sdk version&nbsp;</p>
</td><td  ><p>10 &nbsp;</p>
</td></tr></tbody></table><p>&nbsp; ㄴ2-1에서 이 위 표의 쓰임을 강좌하였으니 잘 보고 만드세요</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>2. 그래픽 화면을 넣어 edittext 추가하기</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>layout에 edittext.xml을 클릭한 후 graphical layout에 들어갑니다.&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130428_147%2Ftjdtnsu_1367121917315MFYAT_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.PNG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>여기서 text fields 선택 후 기본적인 텍스트 선택 후 그래픽 화면으로 끌어옵니다. 그리고 입력창을 더블클릭합니다.&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130428_126%2Ftjdtnsu_1367122147219eroPa_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.PNG%22&amp;type=cafe_wa740">&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>그러면 이런 창이 뜨는데</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130428_238%2Ftjdtnsu_1367122386554QDNbE_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.PNG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>android:text="@string/hello_world" /&gt;을 입력합니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130428_175%2Ftjdtnsu_13671225013628nfOL_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.PNG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>그리고 그래픽창으로 돌아오면</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130428_215%2Ftjdtnsu_13671225575501ODRu_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.PNG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>이렇게 됩니다. 근데 이것이 너무 짧다면 사각형을 땡기지 말고 오른쪽 클릭 후 layout width에서 선택하시면 됩니다.&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130428_78%2Ftjdtnsu_1367122638289R78tG_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.PNG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>Run은 생략하고 마치도록 하겠습니다.</p>
<p>다음 강좌는 레이아웃에 대해 배워보겠습니다.&nbsp;</p>
