---
layout: post
title: '[커뮤니티] 아마도 쉬운 안드로이드 어플만들기 [3]  안드로이드 개발환경 설정'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/231821' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_140%2Ftjdtnsu_1366796577554IaH4H_JPEG%2Fand.jpg%22&amp;type=cafe_wa740">&nbsp;</p>
<p>&nbsp;</p>
<p>1. 설치 작업을 하려면 3가지 파일을 관련 사이트에서 다운로드한다.</p>
<p>&nbsp; - JAVA JDK : 자바 소스 프록램 컴파일</p>
<p>&nbsp;&nbsp;&nbsp; ㄴ <a href="http://www.oracle.com/">http://www.oracle.com</a></p>
<p>&nbsp; - Android SDK : 안드로이드 프로그래밍 개발 통합</p>
<p>&nbsp;&nbsp;&nbsp; ㄴ <a href="http://developer.android.com/sdk/index.html">http://developer.android.com/sdk/index.html</a></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>2. JDK 설치하기</p>
<p>&nbsp; (1) oracle 사이트에서 jdk를 다운 받는다</p>
<p>&nbsp; (2) 실행하고 나오는 지시에 따라 진행한다.</p>
<p>&nbsp; (3) 등록하라는 화면이 나오면 맘대로 한다.</p>
<p>&nbsp; (4) 환경 변수 설정</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; - Windows7 : 제어판-시스템-고급시스템설정</p>
<p>&nbsp;&nbsp;&nbsp; - Windows XP : 내컴퓨터-속성-고급</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>환경 변수 클릭</p>
<p>&nbsp;</p>
<p>&nbsp;&nbsp; <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_71%2Ftjdtnsu_1366794069077AtH0g_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;새로 만들기 클릭</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_21%2Ftjdtnsu_1366794181013bRYB8_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>위와 같이 입력하고 확인</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_273%2Ftjdtnsu_1366794371265bSlAw_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>시스템 변수에 Path를 누르고 편집 클릭</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>세미클론 붙이고 그 뒤에 추가한 후 확인&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_176%2Ftjdtnsu_1366794301686hJx8e_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>3. SDK 설치하기</p>
<p>&nbsp; (1) android-sdk-rxx-windows.zip를 다운 받아 압축을 푼다</p>
<p>&nbsp; (2) 폴더를 원하는 다른 폴더에 옮기거나 복사한다</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_247%2Ftjdtnsu_1366794514824em6Gj_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>4. 이클립스를 실행한다.</p>
<p>&nbsp; - workspace 위치를 지정해준다(아무 곳이나 가능)</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>5. SDK Manager를 연다</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_24%2Ftjdtnsu_13667947936656TWK9_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>6. Tool은 필수로 선택하고 개발하는데 필요한 버젼을 체크에 Install ㅁㅁ packages...를 누른다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_167%2Ftjdtnsu_1366794894433350vq_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740">&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_297%2Ftjdtnsu_1366794950058vfQi6_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740">&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>7. Accept를 선택하고 Install를 클릭한다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>8.&nbsp; SDK 위치 지정</p>
<p>&nbsp;</p>
<p>- Windows-Preferences 선택</p>
<p>- SDK 사용 폴더 지정</p>
<p>- Apply - OK&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_25%2Ftjdtnsu_1366795963012mkiCR_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>9. AVD 생성하기</p>
<p>&nbsp;</p>
<p>- Windows-Android Virtual Device Manager 클릭<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_20%2Ftjdtnsu_1366796092562rFEuN_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>- New 클릭</p>
<p>- Name 적당한 이름 입력</p>
<p>- Target에 적용할 버젼에 해당하는 항목 선택</p>
<p>- skin, Hardware 선택 (선택하기)</p>
<p>- Create AVD 클릭</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_187%2Ftjdtnsu_1366796212195UEMmj_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>- 이것으로 생성되었음</p>
<p>- 작업 중 언제나 새로운 AVD 추가 삭제가 가능하다&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
