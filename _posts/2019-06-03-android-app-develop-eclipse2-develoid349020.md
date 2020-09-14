---
layout: post
title: '[커뮤니티] 아마도 쉬운 안드로이드 어플만들기 [36] SQLite Administrator 다루기'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/349020' ; </script>

<p>&nbsp;</p>
<p><table    ><tbody><tr><td ></td><td ><table ><tbody><tr><td  valign="bottom"><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p>
</td></tr></tbody></table><p><p><p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페</u></p>
<p><u>업로드 시간 : 매주 일요일 오후 11시</u><p></p>
<p>&nbsp;난이도 : ★★★★</p>
<p></p>
<p></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p></p>
<p>&nbsp;</p>
<p>오늘은 프로그래밍을 하지 않는 대신</p>
<p>관련 프로그램을 소개하게습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>1. 첨부파일을 다운받아서 압축을 푼 뒤 열어줍니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>2. 아주 기괴한 독일어가 나타납니다. 우리가 알아볼 수 있게 영어로 바꿉시다.</p>
<p>Hilfe - &nbsp;Change Language를 누릅니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131208_49%2Ftjdtnsu_1386502445746TGsEm_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>그리고 나서 영어로 설정해둡시다.</p>
<p>english - Select</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131208_22%2Ftjdtnsu_1386502491016Xr8E6_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>3. 그리고 파일을 만듭니다.</p>
<p>&nbsp;</p>
<p>4. 테이블을 추가해 보겠습니다. Tables 우클릭 - Create Table 클릭</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131208_145%2Ftjdtnsu_13865048392008y1hH_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>그리고 솜씨를 발휘해서 만들어 봅시다.</p>
<p>사용법은 말해주지 않겠습니다. 다 되었으면 Create 누르기</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131208_272%2Ftjdtnsu_1386505016395YahTv_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>5. 뭐 이렇게 다 만들었으면 닫고 이클립스를 열어서 넣어보도록 하겠습니다.</p>
<p>일단 AVD를 실행시키고 나서 </p>
<p>Windows - Open Perspective - DDMS 클릭</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131208_56%2Ftjdtnsu_13865051874458eVVc_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>잠깐 기다리면 emulator가 온라인으로 뜹니다.</p>
<p>그 뒤 조금 더 기다리면 폴더 같은게 뜹니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131208_32%2Ftjdtnsu_1386505333225Nb9cz_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>data-data-(package name)-databases에 들어갑니다.</p>
<p>(package name)은 패키지 이름이라는 걸 알죠</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131208_75%2Ftjdtnsu_1386505592677jCDTu_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>여기서 드래그 앤 드롭으로 놓으시면 파일이 복사됩니다.</p>
<p>그러면 완료됩니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>이걸로 오늘의 강좌는 끝이고</p>
<p>다음 강좌도 어렵게 찾아오겠습니다.</p>
<p></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p></p>
</p>
</p>
</td></tr></tbody></table></p>
