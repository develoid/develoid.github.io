---
layout: post
title: '[커뮤니티] [개정]"아마도 쉬운 안드로이드 어플만들기" [3] Android Studio 설치 및 안드로이드 개발환경 설정'
author: '달팽이들'
categories: Android-App-Develop(Studio)
tags:
- Android
- App
- Develop
- Studio
---


<script> location.href='https://cafe.naver.com/develoid/541148' ; </script>

<p align="center" >안녕하세요! 여기 글 적는 것도 오랜만입니다.</p>
<p align="center" ></p>
<p align="center" >2013년부터 시작한 어플만들기 시리즈는&nbsp;1년동안 묵혀두고 &nbsp;</p>
<p align="center" >원래는 [新]을 붙여서 새로 작성하려 했는데, 그냥 포스트만 수정하기로 했습니다.</p>
<p align="center" ></p>
<p align="center" >여튼 그렇고요, 게시글 이야기를 해 보죠.</p>
<p align="center" >이번에는 개발환경 설정에 관한 내용인데요</p>
<p align="center" >툴이 Android Studio로 바뀌면서 내용이 안 맞은 부분이 있더라고요.</p>
<p align="center" ><strike>6개월간의 귀차니즘 끝에&nbsp;</strike>제가 드디어 강좌내용도 싹 뒤집어 엎음에 성공했습니다.</p>
<p align="center" >정말 엄청 고생했습니다. <strike>뷁</strike></p>
<p align="center" ></p>
<p align="center" >하나하나씩 업데이트할 때 마다 [개정]을 붙어서 올릴겁니다.</p>
<p align="center" ></p>
<p align="center" ></p>
<p align="center" >하나더 : 동영상 강의 제작중입니다. 인코딩이 오래 걸려 포기한 상태이다만 당분간은 나올 것 같습니다.</p>
<p align="center" ></p>
<p align="center" >-----------------------------------------------------------------------------------------</p>
<p align="center" ></p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_257%2Ftjdtnsu_1434272828131p2wjv_PNG%2Fmaybe.png%22&amp;type=cafe_wa740"></p>
<p align="center" >&nbsp;</p>
<p align="center" >안녕하세요!</p>
<p align="center" >​</p>
<p align="center" >오늘은 안드로이드 중에서 안드로이드 어플을 만들기 위해 작업을 해 볼 텐데요.</p>
<p align="center" >일단 툴이 있어야 뭘 만들기도 하겠죠? 그리고 별도의 작업을 해야 합니다.</p>
<p align="center" >잘 따라오면 쉽게 설치할 수 있을 겁니다.</p>
<p align="center" >​</p>
<p align="center" >﻿</p>
<p align="center" >1. 사이트에 접속</p>
<p align="center" >​&nbsp;</p>
<p align="center" >&nbsp; - JAVA JDK : 자바 소스 프록램 컴파일&nbsp;</p>
<p align="center" >&nbsp;&nbsp;&nbsp; ㄴ <a href="http://www.oracle.com/">http://www.oracle.com</a></p>
<p align="center" ></p>
<p align="center" >&nbsp; - Android Studio&nbsp;: 안드로이드 프로그래밍 개발 통합&nbsp;</p>
<p align="center" >&nbsp;&nbsp;&nbsp; ㄴ <a href="http://developer.android.com/sdk/index.html">http://developer.android.com/sdk/index.html</a></p>
<p align="center" >﻿&nbsp;</p>
<p align="center" >&nbsp;﻿</p>
<p align="center" >﻿&nbsp;</p>
<p align="center" >﻿&nbsp;</p>
<p align="center" >﻿&nbsp;</p>
<p align="center" >2. JDK 설치</p>
<p align="center" >﻿</p>
<p align="center" >﻿&nbsp;﻿</p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_191%2Ftjdtnsu_1434272206767WQP4s_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" ></p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_181%2Ftjdtnsu_1434272243486uajJE_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740">​</p>
<p align="center" ></p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_296%2Ftjdtnsu_1434272280106fHnvH_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" >​</p>
<p align="center" >Downloads - Java for Developers - Java Platform (JDK)&nbsp;</p>
<p align="center" >&nbsp;﻿</p>
<p align="center" ></p>
<p align="center" >﻿&nbsp;﻿</p>
<p align="center" >﻿&nbsp;</p>
<p align="center" >﻿&nbsp;﻿</p>
<p align="center" >3. 환경 변수 설정</p>
<p align="center" ></p>
<p align="center" >&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_259%2Ftjdtnsu_1434253454685uf2dL_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" ></p>
<p align="center" >컴퓨터 오른쪽클릭 - 속성을 클릭합니다.</p>
<p align="center" ></p>
<p align="center" >​</p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_252%2Ftjdtnsu_1434253504197lkCvf_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" ></p>
<p align="center" >&nbsp;고급 시스템 설정을 클릭합니다.</p>
<p align="center" >﻿</p>
<p align="center" >﻿&nbsp;﻿</p>
<p align="center" >﻿</p>
<p>&nbsp;&nbsp; <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_40%2Ftjdtnsu_1434253535094Cngl7_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" ></p>
<p align="center" >&nbsp; 환경 변수를 클릭합니다.</p>
<p align="center" ></p>
<p align="center" >﻿</p>
<p align="center" >﻿</p>
<p align="center" >﻿</p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_35%2Ftjdtnsu_1434253681017USQfC_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" ></p>
<p align="center" >&nbsp; 사용자 변수의 새로 만들기를 클릭합니다.</p>
<p align="center" >&nbsp;</p>
<p align="center" ></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_216%2Ftjdtnsu_1434253593476uy9SA_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" >﻿&nbsp;</p>
<p align="center" >변수 이름을 JAVA_HOME으로 지정하고</p>
<p align="center" >변수 값에 JDK 폴더의 주소를 넣습니다.</p>
<p align="center" >​</p>
<p align="center" >﻿</p>
<p align="center" >​&nbsp;</p>
<p>﻿<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_94%2Ftjdtnsu_1434253749929pQjGA_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" ></p>
<p align="center" >시스템 변수의 Path 편수를 누르고 편집을 클릭합니다.</p>
<p align="center" ></p>
<p align="center" >﻿</p>
<p align="center" >﻿</p>
<p align="center" >﻿</p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_38%2Ftjdtnsu_1434253799468NLVOn_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" ></p>
<p align="center" >맨 끝자락에 ;JAVA_HOME%\bin\ 을 입력하고 확인을 누릅니다.</p>
<p align="center" ></p>
<p>&nbsp;﻿</p>
<p align="center" >&nbsp;﻿</p>
<p align="center" >﻿</p>
<p align="center" >﻿&nbsp;</p>
<p align="center" >4.&nbsp;Android Studio&nbsp;설치</p>
<p align="center" >﻿&nbsp;</p>
<p align="center" >&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_13%2Ftjdtnsu_1434269808702bfLmB_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" ></p>
<p>Download Android Studio for Windows를 클릭합니다.&nbsp;</p>
<p>​</p>
<p align="center" ></p>
<p align="center" >&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_105%2Ftjdtnsu_1434269853972AsfK9_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" ></p>
<p align="center" >동의, 다운로드 버튼을 누르면 다운로드 창이 뜹니다.&nbsp;</p>
<p align="center" >android-studio-bundle-xxxxx.zip를 실행합니다.&nbsp;</p>
<p align="center" >&nbsp;</p>
<p align="center" >﻿&nbsp;</p>
<p align="center" >&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_169%2Ftjdtnsu_1434270168208obwEq_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" >﻿</p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_250%2Ftjdtnsu_1434270228588XYDxI_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" ></p>
<p align="center" >&nbsp;그냥 다 설치한다 치고 Next를 누릅니다.</p>
<p align="center" >3.9GB가 필요합니다. 꽤 많이 들죠?</p>
<p align="center" >​</p>
<p align="center" >​</p>
<p align="center" >​<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_272%2Ftjdtnsu_1434270305392KYWs9_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" >​</p>
<p align="center" >​<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_170%2Ftjdtnsu_14342703772852h1lq_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" >​</p>
<p align="center" >​<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_43%2Ftjdtnsu_1434270419201YV7ad_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" >​</p>
<p align="center" >​<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_111%2Ftjdtnsu_1434270464008XgWSF_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" >​</p>
<p align="center" >​<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_154%2Ftjdtnsu_1434270702562QA9rg_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" >​</p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_156%2Ftjdtnsu_1434270740654s5NqS_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" ></p>
<p align="center" >이렇게 설치하시면 됩니다. 별 거 아니죠?</p>
<p align="center" >정상적으로 실행이 되는지 확인하세요.</p>
<p align="center" >​</p>
<p align="center" >​</p>
<p align="center" ></p>
<p align="center" ></p>
<p align="center" >​</p>
<p align="center" >5.&nbsp;SDK 설정</p>
<p align="center" >​</p>
<p align="center" >Start Android Studio로 실행합니다.</p>
<p align="center" >​</p>
<p align="center" >​</p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_116%2Ftjdtnsu_1434270654617lVRRr_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" >​</p>
<p align="center" >​<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_63%2Ftjdtnsu_1434270862615NPoBg_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" ></p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_95%2Ftjdtnsu_1434270903599KA258_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" >​</p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_213%2Ftjdtnsu_1434271180539h6RYK_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" >​</p>
<p align="center" >알아서 프로젝트 하나를 만드세요.</p>
<p align="center" >프로젝트명만 입력하고, Next, Finish 누르면 됩니다.</p>
<p align="center" >​</p>
<p align="center" ></p>
<p align="center" >﻿<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_184%2Ftjdtnsu_1434271441409VzO41_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" ></p>
<p align="center" >SDK Manager 아이콘을 누르세요.​</p>
<p align="center" ></p>
<p align="center" >&nbsp;</p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_83%2Ftjdtnsu_1434271527180r6DwI_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" >﻿</p>
<p align="center" >﻿﻿Tool은 무조건 체크하고, </p>
<p align="center" >일반적으로 최신 버젼과 API 15, 10은 설치합니다.</p>
<p align="center" ></p>
<p align="center" >​</p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_167%2Ftjdtnsu_1434271629467fOnNn_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740">​&nbsp;</p>
<p>﻿</p>
<p align="center" >﻿﻿</p>
<p align="center" >﻿</p>
<p align="center" >﻿&nbsp;</p>
<p align="center" >&nbsp;﻿</p>
<p align="center" >6.&nbsp;AVD 설정 (선택)</p>
<p align="center" >​</p>
<p align="center" >​이 부분은 실험할 안드로이드 기기가 없을 때 이용합니다.</p>
<p align="center" >저는 딱히 추천하지 않습니다.</p>
<p align="center" ></p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_260%2Ftjdtnsu_1434271783859VUAOh_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740">​</p>
<p align="center" ></p>
<p align="center" >AVD Manager 아이콘을 누릅니다.</p>
<p align="center" >​</p>
<p align="center" >​</p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_72%2Ftjdtnsu_1434271863104A0ptL_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" ></p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_45%2Ftjdtnsu_1434271882509YacF1_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740">​</p>
<p align="center" ></p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_23%2Ftjdtnsu_1434271911826pJYkF_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" ></p>
<p align="center" ><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20150614_137%2Ftjdtnsu_1434271929754TzRmA_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p align="center" ></p>
<p align="center" >이러면 됩니다.</p>
<p align="center" ></p>
<p align="center" ></p>
<p align="center" >이걸로 안드로이드 어플을 만들기 위한 개발환경을 설정해 보았습니다.</p>
<p align="center" ></p>
<p align="center" >이제 안드로이드 어플을 직접 만들어 보도록 하겠습니다.</p>
<p align="center" ></p>
<p align="center" >&nbsp;</p>
<p align="center" ></p>
<p align="center" >&nbsp;</p>
<p align="center" >|&nbsp;​글 작성일 : 2013.04.24 | 재작성본 0차 수정&nbsp;|​&nbsp; 최종수정 2015.06.14&nbsp;|​ </p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p align="center" ></p>
<p align="center" ><!-- Not Allowed Attribute Filtered ( r rheight="200") --><!-- Not Allowed Attribute Filtered ( r rheight="200") --><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles2.naver.net%2F20150405_17%2Ftjdtnsu_1428245363358aqORn_PNG%2Fgood.png%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p align="center" ></p>
<p align="center" >&nbsp;</p>
<p></p>
<p></p>
