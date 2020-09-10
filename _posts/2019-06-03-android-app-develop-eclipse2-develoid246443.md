---
layout: post
title: '[커뮤니티] "아마도 쉬운 안드로이드 어플만들기" 2-6 이미지 추가하기'
author: 'Snails'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/246443' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles11.naver.net%2F20130517_266%2Ftjdtnsu_1368772568157vEMv8_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p><u>참고 : 이 강좌가 쓰여진 컴퓨터 사양은 엄청 안좋습니다.(Celeron D 2.66GHz, 768MB) 그러므로 다른 컴퓨터도 거의 다 될겁니다.</u>&nbsp;</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p>&nbsp;</p>
<p>학습목표 : 이미지를 레이아웃에 추가할 수 있다&nbsp;</p>
<p>난이도 : ★☆</p>
<p>&nbsp;</p>
<p><strike>(여담으로 월요일에 졸업여행갑니다ㅋㅋ..)</strike></p>
<p>&nbsp;</p>
<p>오랜만에 쉬운 부분으로 가 보겠습니다. </p>
<p>이번에는 역시 안드로이드 어플을 만들때 제일 중요한 것</p>
<p>이미지를 넣을 줄 알아야 합니다.</p>
<p>어플만들 때도 자바 뿐 만 아니라 다른 것도 할 줄 알아야 합니다.(예를 들어 저는 디자인을 중점으로 둡니다.)</p>
<p>어플에 텍스트만 있으면 보기 좋지 않잖아요</p>
<p>이제 시작하겠습니다.</p>
<p>&nbsp;</p>
<p>1. 프로젝트 추가(정말 이건 알아서 하세요)</p>














<table><tbody><tr><td  ><p>&nbsp;application name&nbsp;</p>
</td><td  ><p>&nbsp;picture</p>
</td></tr><tr><td  ><p>&nbsp;target version&nbsp;</p>
</td><td  ><p>&nbsp;2.3.3</p>
</td></tr><tr><td  ><p>&nbsp;package name&nbsp;</p>
</td><td  ><p>&nbsp;naver.picture</p>
</td></tr><tr><td  ><p>&nbsp;activity</p>
</td><td  ><p>black activity&nbsp;</p>
</td></tr></tbody></table><p>&nbsp;</p>
<p>2. 프로젝트 상에 이미지를 추가하기</p>
<p>&nbsp;</p>
<p>- 간단합니다. 이용할 이미지 파일을 drawable_hdpi 폴더로 드래그합니다.&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130518_184%2Ftjdtnsu_1368886021422o0HIy_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>- 복사할 거므로 그냥 ok를 누릅니다. 선호하는 것&nbsp;</p>
<p>링크를 할 거면 두번째 것을 누르는데</p>
<p>다른 컴퓨터로 하면 안뜹니다.(링크가 잡히지 않기 때문)</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130518_270%2Ftjdtnsu_1368886175382DRTCT_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>그러면 복사가 완료되고 폴더에 그 그림이 뜹니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130518_102%2Ftjdtnsu_1368886237970UiQoy_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>3. 레이아웃에 이미지 집어넣기</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>-xml 파일로 가서 images &amp; media - imageview를 레이아웃 안으로 드래그합니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130518_70%2Ftjdtnsu_1368886355598ADCN6_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>- 추가할 사진을 선택 후 ok를 누릅니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130518_290%2Ftjdtnsu_13688864394722oHyH_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740">&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>자 그러면 추가가 완료됩니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130518_202%2Ftjdtnsu_13688864888190zwtY_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>이걸로 모두 완료가 되었는데</p>
<p>참고로 이미지를 이동, 크기 조정은 알아서 하면 됩니다.(전 강좌에도 있었던 것 같았는데)</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>다음은 Bonus 타임으로 실전으로 만들어 보도록 하겠습니다.(범위 : 2-2~2-6)&nbsp;</p>
