---
layout: post
title: 'Android Studio로 구글 예제 앱 만들어보기'
author: '시류아'
categories: Android-App-Develop(Studio)
tags:
- Android
- App
- Develop
- Studio
---


<script> location.href='https://cafe.naver.com/develoid/788499' ; </script>


















						<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px"><span><span>* 주의사항<b></span><span>1.&nbsp;<span>본 글은 개인이 공부한 내용을 바탕으로 정리한 게시글입니다.</span><b></span><span>2. 본 글은&nbsp;</span>구글 공식 가이드를 기반으로 개인이 실습하는 과정을 적은 글입니다. 공식 가이드 문서를 보시려면 아래의 링크를 클릭해서 이동해주세요 :)<b></span><span></span></p>
</div>
<div>
 <a href="https://developer.android.com/training/basics/firstapp/index.html?hl=ko"> <span> <span> <span> 첫 앱 빌드 | Android Developers </span> <span>첫 앱 빌드 종속성 Android Studio Android 애플리케이션 개발에 오신 것을 환영합니다! 이 과정에서는 첫 Android 앱을 구축하는 방법에 대해 설명합니다. Android Studio를 사용하여 Android 프로젝트를 생성하고 디버깅 가능한 버전의 앱을 실행하는 방법에 대해 배웁니다. 간단한 사용자 인터페이스 구축 및 사용자 입력 처리 방법에 대한 설명을 포함하여 Android 앱 디자인에 대한 기본 사항에 대해서도 배웁니다. 이 과정을 시작하기 전에 먼저 Android Studio 를 다운로드하여 설치하세요. </span> <span>developer.android.com</span> </span> <span></span> </span> <span>자세히보기</span> </a>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px"></p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px"><span>어쩌다보니 사실상 간단한 수정 이외에는 거의 손대지 않는 안드로이드와 관련해서 다시 손잡고 건들 일이 생겼습니다. 바로 앱 개발입니다. 안드로이드 앱 개발 같은 경우 이클립스시절 잠시 건들여보고 그 이후로 한 번도 안건들였기 때문에 사실생 새로배우는 것이나 다름없기 때문에 차근차근 공부해보면 한 번 구글 공식 문서의 기초를 실습해보았습니다.</span></p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   Android Studio로 구글 예제 앱 만들어보기
  </div>
 </div>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   Android Studio 설치
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfNzYg%2FMDAxNTIxNTkzMzc0MjQx.s3YigOm9NbrZLLbUNQl8SJj8ZA59bdlXtCzeoozmhjMg.f497s6sh-mXz7VkLLSXNJUFUSTAuU823_rM2KPZXb0Ig.PNG.searphiel9%2F0000.png%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px"><span>먼저 아래의 링크를 통해서 안드로이드 스튜디오를 설치해주세요. 설치과정에서 필요로하다, 추가적인 설치가 필요로 하는 것들에 대해서는 전부 다 설치해주세요.<b></span><span>(본인이 필요없다 싶으면 알아서 해주세요XD 저 같은 경우 중간중간에 설치하는게 귀찮아서 다 설치하고 시작합니다.)<b></span><span></span></p>
</div>
<div>
 <a href="https://developer.android.com/studio/index.html?hl=ko"> <span> <span> <span> Android Studio 및 SDK 도구 다운로드 | Android Studio </span> <span>Android Studio Android용 공식 IDE Android Studio는 모든 유형의 Android 기기에서 앱을 빌드하기 위한 가장 빠른 도구를 제공합니다. 최고 수준의 코드 편집, 디버깅, 성능 도구, 유연한 빌드 시스템 및 인스턴트 빌드/배포 시스템을 사용하여 뛰어난 품질의 앱을 빌드하는 데 집중할 수 있습니다. 다운로드 Android Studio 3.0.1.0 문서 읽기 릴리스 노트 참조 기능 최신 뉴스 리소스 동영상 다운로드 옵션 Instant Run 코드 및 리소스 변경사항을 기기 또는 에뮬레이터에서 실행 중인</span> <span>developer.android.com</span> </span> <span></span> </span> <span>자세히보기</span> </a>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   프로젝트 생성
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMTMz%2FMDAxNTIxNTkzMzc0MjA2.PB-55pFx_7qZ7lmPY6oisCIZlPc5qftdHm5yfXFWgVcg.1Y_LaZX_GG9V04Hi3f4Gu-ingpiC1jAwwrIB8ELFPN8g.PNG.searphiel9%2F0001.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfNTYg%2FMDAxNTIxNTkzMzc0MjEw.dqWJQE7Kp23WO_vTX8nzAQS0c3QEu7LtQaesvv9ah7Eg.rkfQzNH7ubfHUxFF_ct46K1M3QF9WTiQcPReATapk9Yg.PNG.searphiel9%2F0002.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px"><span>안드로이드 스튜디오를 실행하면 위와 같은 페이지가 나타납니다. "Start a new Android Studio project"를 클릭해주세요. 그러고나면 "</span><span>Create Android Project" 페이지로 넘어옵니다. 기입해야되는 항목에 아래를 참고해서 기입해주세요 :)</span></p>
</div>
<div>
 <div>
  <div>
   Application&nbsp;name&nbsp;→&nbsp;"My&nbsp;First&nbsp;App"&nbsp;기입
   <b>Company&nbsp;domain&nbsp;→&nbsp;"example.com"&nbsp;기입
   <b>Include&nbsp;C++&nbsp;support&nbsp;&amp;&nbsp;Include&nbsp;Kotlin&nbsp;support&nbsp;→&nbsp;체크해제
  </div>
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px"><span></span><span>이후 Next 를 눌러주세요 :)</span></p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMjIy%2FMDAxNTIxNTkzMzc0MjEy.Xuw18RBxY9xFDcIYOYbgzQCdMR33NvIFT07QLxA7Jucg.0M3mc55FSH3lk6x3oTBai7DA4LfbPyDDR2Gxp10Nuwkg.PNG.searphiel9%2F0003_2.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMjQz%2FMDAxNTIxNTkzMzc0MjEw.UsqWD59FqGBxWULOln3x6XuneCTA-L4u9YHgZNc8OAIg.Bl7fluMU3V5WyKT-XUHDzKAuOxWQcJYMycigJTW-K1Ug.PNG.searphiel9%2F0003.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">Target Android Devices 에서는 다양하게 API 버전 별로 있습니다. 본인이 원하시는대로 선택해주시면 됩니다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfNDkg%2FMDAxNTIxNTkzMzc0MjEy.XX8iDWNgWSfsPeWO99K4vZlRLYyhjv91DrRavOwj3rEg.ltR4ydNWh_8430WR25AfKsPgi7H-xu0Kl-BxbFJuumog.PNG.searphiel9%2F0004.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMjU5%2FMDAxNTIxNTkzMzc0Mjc3._lgxim0is6_4UhJO049ij4UUd3rSrfidq9qeSYWF6eYg.sfy5kImNeRbGDgsDTl4-_unZ1qxk8cygRXng1ZthkQwg.PNG.searphiel9%2F0005.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">"Add an Activity to Mobile"은 가장 기본 페이지(메인 페이지, 첫 페이지)를 어떠한 레이아웃을 가지고 시작할 것인지 정하는 페이지입니다. "Empty Activity"를 선택하고 Next, "Configure Activity"는 손댈 것이 없습니다. "Finish"를 눌러서 프로젝트 생성을 완료해주세요.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMjQ5%2FMDAxNTIxNTkzMzc0MzAy.cdj-5GYEROz5lbqVrhjMaubabiEg-T4XmahVXAZPtGog.oQzMV9fd4HJjK74HVKYvJJAMrpxMiFgqLGUAXwdeYZog.PNG.searphiel9%2F0006.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">이후 프로젝트 폴더 및 소스 파일들이 생성되어서 위와 같은 IDE화면으로 전환되며 프로젝트 생성이 완료됩니다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   AVD(Android Virtual Device) 생성하기
  </div>
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px"><span>안드로이드 앱을 작성하면 테스트 해볼 필요성이 있겠죠? ADB를 통해서 기기에서 직접 실행하는 방법도 있지만, 가상의 안드로이드 기기를 구성해서 테스트를 진행할 수 있습니다. 한 번 가상의 안드로이드 기기를 구성해보도록 하겠습니다.</span></p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMTIx%2FMDAxNTIxNTk0Njk2MDM0.igVPmk1LE4ImtprspPMYAmmIMjFKJ5gMEZPT2PoLTxQg.U0TGk9mOCNh8q2AYcJBvbH4E1kgHwdTsuQW_gzc_de4g.PNG.searphiel9%2F0050.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">먼저 우측 상단에 보면 네모단 기기 앞에 안드로이드가 그려진 아이콘이 있을 것입니다. 위의 아이콘을 클릭해주세요.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMTc4%2FMDAxNTIxNTkzMzc0Mjky.ZunOZ1VSpIjFk10o8AUe9cWZlYQG6Heyp0uMou2aMC0g.woBQFChnUgP50GlIYF3ttNDMfi-jYO7KTXWTRnpI5cgg.PNG.searphiel9%2F0007.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">"Your Virtual Devices" 페이지가 열립니다. 처음 시작한 경우 가상기기가 생성되어있는 것이 없을 것입니다. 좌측 하단의 "Create Virtual Device"를 클릭해주세요 :)</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMTk1%2FMDAxNTIxNTkzMzc0MzI0.W0zsjP-o3KT7re38tyeAuEEVmBlXp963iBxTQEB1jUYg.QHpiHAA-UlJ-ueUAlONGmSn6aPj5gaYHegnwI_FZwDkg.PNG.searphiel9%2F0008.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMjg5%2FMDAxNTIxNTkzMzc0MzEy.x_M7wQUst_00WEP8pNEH8VbJWyMWjRbEp9w8GLSP7lwg.16A_cO968IhltvoVZQ0uuiZ6a1dGiN-g3HbAmeQFRvcg.PNG.searphiel9%2F0009.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px"><span>"Select Hardware"페이지는 기기의 종류를 선택하는 페이지입니다. 본인이 원하시는 기기를 선택하고 "Next"를 클릭해주세요.<b></span><span><b></span><span>"Select Image"페이지는 안드로이드 버전을 지정하는 페이지입니다. 몇 버전의 안드로이드에서 테스트할 지 선택하고 "Download"를 눌러서 이미지를 다운받은 후 "Next"를 클릭해주세요.</span></p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfOTQg%2FMDAxNTIxNTkzMzc0MzI4.RkSsECuZsLIsK3t6irVFqjZfVaVM_BKubPk2glbKjywg.T_Z2pNt40aJlONvjnyyfGfNaPNzTfbERbSft-nfd7ckg.PNG.searphiel9%2F0010.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">마지막으로 "AVD Name"을 지정하고 "Finish"를 누르면 생성이 완료되었습니다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   구글 공식 가이드 예제 앱 만들어보기
  </div>
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px"><span>기본적인 셋팅은 끝났으니 한 번 예제 앱을 만들어보도록 하겠습니다.&nbsp;</span><span>예제의 앱은 메인 페이지에서 메세지를 작성하여 버튼을 누르면 다른 페이지에서 작성한 메세지가 나타나는 앱입니다.&nbsp;</span><span>조금 내용이 많지만 쉽게 보고 따라 할 수 있도록 이미지 중심으로 준비했으니, 차근차근 읽으시면서 따라와주세요 :)</span></p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfNzUg%2FMDAxNTIxNTkzMzg3NDI4.YS_LCGcxJOplsZie--Ylt-DOxuVdOTc2DeqreIuOro8g.VdgO3xi6MvbD-0CBe31678NiKPSbcTuVqp3LtrIwE8sg.PNG.searphiel9%2F0011.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px"><span>먼저 왼쪽 프로젝트 메뉴에서 "app &gt; res &gt; layout &gt; activity_main.xml" 을 열어주세요. 그럼 위의 이미지처럼 Hello World! 가 적힌 페이지가 나타납니다.<b></span><span><b></span><span>간단하게 위의 화면을 설명하면 제일 왼쪽은 프로젝트 메뉴, 가운데는 Layout Design, 오른쪽은 Attributes 로 Layout 요소들에 대한 설정 메뉴입니다.<b></span><span><b></span><span>일단, "Hello World!"는 필요없으니 해당 텍스트를 클릭하고 "Delete"키를 눌러서 지워주세요 :)</span><b></p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMTA4%2FMDAxNTIxNTkzMzg3NDI2.n2HOiXRzIrZf4CltBNr27FRVUFk3j37ms501uIWRPiEg.5i4jOLmzR8lNsISUjGyqnrfDj38MTp81miR0A3ezK9Eg.PNG.searphiel9%2F0012.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px"><span>프로젝트 메뉴 옆 "Palette" 메뉴에서 "Plain Text"를 클릭하고 드래그하여 App 화면 위로 가져와주세요. 그럼 대략적으로 위치가 잡힙니다.<b></span><span><b></span><span>* "Plain Text"는 텍스트 입력 창입니다.</span><b></p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMjYz%2FMDAxNTIxNTkzMzg3NDMw.cHhjlHraYNEv5IQl80aDQqpLEP8sTvWuwmiPBIwGRT8g.FU5mNC4YIVzWovkbdsVc9l4tmKgJpePdDndlPW8Y260g.PNG.searphiel9%2F0013.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">이후 드래그하여 가져온 "Plain Text"를 클릭하면 "Attributes"창에 설정 메뉴가 나타납니다. 제일 위의 여백 설정에서 왼쪽과 위쪽의 "+"를 누른 후 16으로 설정해주세요.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfNDUg%2FMDAxNTIxNTkzMzg3NDQ1.aTA6Txp5dAyU0lERFyXkcCQLChef1QRHLuMK51cyyLEg.Yi41l7WejFMDDhbLpcrmxp3GBMHeGmS6KjWg1vo6hcMg.PNG.searphiel9%2F0014.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">텍스트 입력창을 만들었으니 이번에는 버튼을 만들어야겠죠? "Palette"에서 "Button"을 선택 한 후 드래그하여 우측으로 가져와주세요. 그리고&nbsp;<span>"Attributes" 창의 여백설정에서 오른쪽 "+"를 클릭하여 여백을 16으로 지정합니다.</span></p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMTM0%2FMDAxNTIxNTkzMzg3NDM3.Qw-omwIZ44b1pQ30acqxUg-i0QOS9xMiHVUpKtYeHycg.sPOc-U1mMX8n22hiG3QCapNSo29c1gjg68AGhqj1Au4g.PNG.searphiel9%2F0016.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px"><span>가져온 것들에 대해서 이리저리 흐트러져 있는 것보단 하나의 기준선으로 맞추어져 있는 것이 더 보기 깔끔하겠죠? 기준선을 맞추는 작업을 진행해보겠습니다.<b></span><span><b></span><span>버튼을 클릭하면 아래에 "AB"라 적힌 아이콘이 나타납니다.&nbsp;</span><span></span><span>해당 아이콘을 클릭하면 버튼의 글자 밑으로 타원이 생성되며,&nbsp;</span><span>타원을 클릭해서 드래그하여 옆의 입력창에 가져가면 기준선이 맞추어집니다.</span></p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMTAw%2FMDAxNTIxNTkzMzg3NTIy.WcMJeWe6imdmDGNoMvL3IjwI36mRid4G1KTp0cdVJqkg.wfm4tKNw8P3LmlWqrVPCYxv-EhAZPvsBdOSr0gwRpFUg.PNG.searphiel9%2F0018.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px"><span>좌우로 여백이 크게 있는 것보다는 꽉 차보이게 하는 것이 더 보기좋겠죠? 텍스트 입력창의 크기가 자유롭게 변할 수 있도록 설정해보겠습니다.<b></span><span><b></span><span>먼저 텍스트 입력창을 클릭하면 우측 선에 동그라미가 나타납니다. 해당 동그라미를 클릭, 드래그하여 버튼으로 이어주면 버튼과 이어지며 좌우 여백의 크기가 늘어납니다. 이후 "<span>Attributes" 의 여백설정에서 사각형 안의 "&gt;&gt;&gt;" 모양을 클릭하여 톱니모양으로 바꾸어주면, 입력창이 늘어나며 좌우 여백이 줄어드는 것을 확인 할 수 있습니다.&nbsp;</span></span><span>그리고 우측 청사진을 보게되면 가로선들이 톱니모양으로 되어있는 것을 확인 할 수 있습니다. 해당 모양으로 바뀌게되면 크기가 기기의 해상도에 맞추어서 늘어났다 줄어들었다 하게되었다는 것입니다.</span></p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMjYg%2FMDAxNTIxNTkzMzg3NTE3.izK9lqn6KSMNk330IBY0jP8V3FlMqZT53DCNXGr8xqog.CJ8M5JuK0ZB2zBbdkQ40-0uVviMW1IegoMpUOJV6l8kg.PNG.searphiel9%2F0020.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px"><span>기본적인 레이아웃 작업이 완료되었으니, 안에 텍스트 문구들에 대해서 변경을 해보겠습니다.</span><span><b></span><span>먼저 "app &gt; res &gt; values &gt; strings.xml" 을 클릭하여 열어주세요.</span></p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMTAx%2FMDAxNTIxNTkzMzk4NDU5.A2rrXqacUklMNgLJHX8KBfQxWbhp4Ocq8ID12KwJXa8g.XJ2ROxbPgj_fRHuxeKRcOOVihIRLOolKQ1pM2xLtESAg.PNG.searphiel9%2F0021.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px"><span>그리고 우측 상단에 "Open Editor"를 클릭합니다. 그러면 "Translation Editor"가 열리며 Key 값들에 대해서 작성 할 수 있게 됩니다. <b></span><span><b></span><span>* 해당 페이지는 <span>이름 그대로 목적이 언어별 값 지정용도입니다.&nbsp;</span>나중에 앱을 각 국가별 언어로 UI를 번역하는데도 사용 할 수 있습니다.</span></p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfODcg%2FMDAxNTIxNTkzMzk4NDQx.CGY7O2N54yFebQCEgIm2faFXlU_N7GH9_fLHPp2KcSog.4UOhkml69ktKDREMi8WgFiDrd6h4oK2MBb7WZGCTivMg.PNG.searphiel9%2F0022.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMTQw%2FMDAxNTIxNTkzMzk4NDQw.dR0nbMA0gFSsAOOQn2Mo33qT2C_iqKMqy9V056QSOP4g.6fDpiJaTkOQOkxSwy8ZO78WGygWBaWIFpgKQ8Bke6GEg.PNG.searphiel9%2F0023.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px"><span>중앙의 "+" 를 클릭하고 "Add Key" 창을 열어 아래와 같이 작성하고 "OK"를 눌러서 생성합니다.<b></span><span><b></span><span>Key : edit_message<b></span><span>Default Value : Enter a message<b></span><span><b></span><span>Key : button_send<b></span><span>Default Value : Send</span></p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMTMz%2FMDAxNTIxNTkzMzk4NDY3.X079G4mW9rPJErBW5lfC_lbZWulxOHzfsVbk9dAbj3gg.Ox-XLWFN-j242TX6IneNnmX7__WCoAi-sE-QCgSyy4wg.PNG.searphiel9%2F0025.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">키 값을 생성한 이후 "strings.xml"을 열어보면 자동으로 리소스에 대해서 출력할 글자들이 작성되어있는 것을 확인 할 수 있습니다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfOTQg%2FMDAxNTIxNTkzMzk4NTQ3.XLQirdimklmilPQ6b4X4ApbCyngpNSil5VNytI_Fh00g.eUuC47u_nbq1t_PzEP_wpCax2oM6t-6-8PtXt0lA0tcg.PNG.searphiel9%2F0027.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">이제 출력할 문자들을 연결시켜주어야 되겠죠?&nbsp;<span>"app &gt; res &gt; layout &gt; activity_main.xml" 로 돌아와서 텍스트 입력창을 클릭하고 "Attributes" 창에서 "TextView" 부분의 "text" 옆 "…"을 클릭합니다. 이후</span><span>&nbsp;"Resource"창이 나타나며, "edit_message"를 클릭하고 "OK"를 눌러주면 연결이 끝납니다. 버튼도 동일하게 진행해서 "button_send"로 연결해주세요 :)</span></p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMTM4%2FMDAxNTIxNTkzMzk4NTgx.m0AzOO_MjoSGaeJfxB6X33GmZoOUwux5E52UTd5BfIog.-5oA5sGN1JibEUhKntnRI-m-PmjhWyhxbwgF1ZE7RAkg.PNG.searphiel9%2F0028.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">이제 메인 페이지의 UI 작업이 얼추 끝났습니다. 이제 버튼을 클릭했을때 어떠한 코드를 실행시킬지 지정하는 작업을 진행해봅시다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfNTkg%2FMDAxNTIxNTkzMzk4NjM4.H7UMJAqr2c9Gdeg-v6vJj2d9AAwOBZncrQhEdVE1L_4g.UOrEMhPTRPCuYygZgqLBPgEuQNDVJLp2s33cZo5eI74g.PNG.searphiel9%2F0029.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">먼저 "app &gt; manifests &gt; java &gt; co<a href="http://m.example.myfirstapp">m.example.myfirstapp</a>&nbsp;&gt; MainActivity"를 클릭하여 열어주세요. 그리고 아래와 같이 입력을 진행해주세요.</p>
</div>
<div>
 <div>
  <div>
   public&nbsp;class&nbsp;MainActivity&nbsp;extends&nbsp;AppCompatActivity&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;@Override
   <b>&nbsp;&nbsp;&nbsp;&nbsp;protected&nbsp;void&nbsp;onCreate(Bundle&nbsp;savedInstanceState)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super.onCreate(savedInstanceState);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setContentView(R.layout.activity_main);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;}
   <b>
   <b>&nbsp;&nbsp;&nbsp;&nbsp;/**&nbsp;사용자가&nbsp;Send&nbsp;버튼을&nbsp;눌렀을때&nbsp;호출됩니다.&nbsp;*/
   <b>&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;void&nbsp;sendMessage(View&nbsp;view)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;눌렀을때&nbsp;어떠한&nbsp;작업을&nbsp;할지&nbsp;작성하세요&nbsp;:)
   <b>&nbsp;&nbsp;&nbsp;&nbsp;}
   <b>}
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfNDMg%2FMDAxNTIxNTkzMzk4NjQx.5B5Hmj9-2kwYCpBY1nfVuSy5wvtKs1_y3pe13UhyT6kg.wCCL5-8y6-uf5vosIrWGTOp1SEn4ZP8h6lORESsRaYsg.PNG.searphiel9%2F0030.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">작성하고나면 위의 이미지처럼 "? android.view.View? Alt+Enter"라는 구름이 나타납니다. View 에 관련된 부분이 import(들여오기, 추가)되지 않아 발생하는 문제로 "Alt+Enter"를 누르면 자동으로 추가 작업을 진행해줍니다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMjI3%2FMDAxNTIxNTkzNDExMTM5.TNJsjLJOF7qLTFbPr7RFunezT0SlFqTw8F7i2S4JfpAg.hbklYgsL4m_OgrMlWhSB5aZLTy3vvUOTBZb3n2b-scgg.PNG.searphiel9%2F0032.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">이후 다시&nbsp;<span>"app &gt; res &gt; layout &gt; activity_main.xml" 로 돌아와서 버튼을 클릭합니다. 그리고&nbsp;<span>"Attributes"<span>&nbsp;창에서 "onClick" 항목을 보면 "sendMessage"가 추가된 것을 확인하실 수 있습니다. "sendMessage"로 변경해주면, 앞으로 버튼을 클릭하면 "sendMessage" 함수가 호출되어 사용됩니다.</span></span></span><span></span></p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfNjUg%2FMDAxNTIxNTk5MTMyMzg1.g4JYoaYZUboNJ9mqCgcqJ1CyC8l8EPUmt0DaG7rqfugg.Noj2Y-XtQXAHOBLlnwFDOzApuHEOY56_i_ReUls_Zwsg.PNG.searphiel9%2F0051.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">그럼 "sendMessage" 함수를 사용했을때 동작이 이루어져야 되는 부분을 마무리지어야되겠죠? 이 예제에서는 "새로운 페이지에 입력한 값을 출력" 하도록 되어있습니다.&nbsp;<span>"app &gt; manifests &gt; java &gt; co</span><a href="http://m.example.myfirstapp/">m.example.myfirstapp</a><span>&nbsp;&gt; MainActivity"로 돌아가서 아래처럼 코드를 수정하고 "Alt+Enter"를 이용하여 Import 시켜서 작성을 마무리해줍니다.</span></p>
</div>
<div>
 <div>
  <div>
   public&nbsp;class&nbsp;MainActivity&nbsp;extends&nbsp;AppCompatActivity&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;static&nbsp;final&nbsp;String&nbsp;EXTRA_MESSAGE&nbsp;=&nbsp;"com.example.myfirstapp.MESSAGE";
   <b>&nbsp;&nbsp;&nbsp;&nbsp;@Override
   <b>&nbsp;&nbsp;&nbsp;&nbsp;protected&nbsp;void&nbsp;onCreate(Bundle&nbsp;savedInstanceState)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super.onCreate(savedInstanceState);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setContentView(R.layout.activity_main);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;}
   <b>
   <b>&nbsp;&nbsp;&nbsp;&nbsp;/**&nbsp;사용자가&nbsp;Send&nbsp;버튼을&nbsp;눌렀을때&nbsp;호출됩니다.&nbsp;*/
   <b>&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;void&nbsp;sendMessage(View&nbsp;view)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Intent&nbsp;intent&nbsp;=&nbsp;new&nbsp;Intent(this,&nbsp;DisplayMessageActivity.class);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EditText&nbsp;editText&nbsp;=&nbsp;(EditText)&nbsp;findViewById(R.id.editText);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String&nbsp;message&nbsp;=&nbsp;editText.getText().toString();
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;intent.putExtra(EXTRA_MESSAGE,&nbsp;message);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startActivity(intent);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;}
   <b>}
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfNDIg%2FMDAxNTIxNTkzNDExMTM1.c4Rq312F4JfgQG4-A5PsYKTSUGh3KgHXijhfPMsGlG0g.9e98MU5n9bSyyhCJCT4ALASyoEMmD6JhWHtZdMVPoRUg.PNG.searphiel9%2F0034.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">이제 버튼을 누르고 난 다음 새로운 값을 가져올 창을 만들어보도록 하겠습니다. 프로젝트메뉴에서 "app"을 우클릭, "new &gt; Activity &gt; Empty Activity"를 클릭합니다.&nbsp;</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMzkg%2FMDAxNTIxNTkzNDExMTE2.SJORGwmQYlK1Gid3kwHi_PYi-Y_83UELThmcm1fVoAcg.ZW-EqKfve0BFXqwHHrlPF59McAwiS2gxP6gRfYKqP_0g.PNG.searphiel9%2F0035.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">새로 만들 창의 이름(Activity Name)을 "DisplayMessageActivity"로 지정하고, 나머지 값은 병경하지 않고 Finish를 눌러서 생성합니다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMjI3%2FMDAxNTIxNTkzNDExMjA5.jmQqtFul7viIjPKNRw9FzDlfL6-M0wfczarhkcGHozAg.30vo3CEWOwknI7eww8uRRIXz6fgwQQaYoPld25OZQDYg.PNG.searphiel9%2F0037.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">이후&nbsp;<span>"app &gt; res &gt; layout &gt; activity_display_message.xml" 를 클릭해서 들어가면 공백 페이지가 나타납니다. "Palette"에서 "TextView"를 드래그해서 배치 한 다음 위에 진행했던 것들을 바탕으로 <span>"Attributes"를 이용해서&nbsp;</span>중앙에 표기되게끔 지정하고 글자 크기 등을 하고싶은대로 꾸며줍니다.</span></p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMzEg%2FMDAxNTIxNTkzNDExMjI1.8W9bVY5IDGvhWS30gRHKvUG1b18icLdIbaPAQUxBDwwg.xq717zAMNGAs_Bs_AYs4hP1Hh6fe0rvR8-HgVTEaijgg.PNG.searphiel9%2F0039.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">그리고&nbsp;<span>"app &gt; manifests &gt; java &gt; co</span><a href="http://m.example.myfirstapp/">m.example.myfirstapp</a><span>&nbsp;&gt; DisplayMessageActivity"를 열어서 아래와 같이 코드를 작성해줍니다.</span></p>
</div>
<div>
 <div>
  <div>
   public&nbsp;class&nbsp;DisplayMessageActivity&nbsp;extends&nbsp;AppCompatActivity&nbsp;{
   <b>
   <b>&nbsp;&nbsp;&nbsp;&nbsp;@Override
   <b>&nbsp;&nbsp;&nbsp;&nbsp;protected&nbsp;void&nbsp;onCreate(Bundle&nbsp;savedInstanceState)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super.onCreate(savedInstanceState);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setContentView(R.layout.activity_display_message);
   <b>
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;이&nbsp;Activity를&nbsp;실행한&nbsp;Intent에서&nbsp;문자열을&nbsp;가져옵니다.
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Intent&nbsp;intent&nbsp;=&nbsp;getIntent();
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String&nbsp;message&nbsp;=&nbsp;intent.getStringExtra(MainActivity.EXTRA_MESSAGE);
   <b>
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;레이아웃의&nbsp;TextView에&nbsp;추출한&nbsp;문자열을&nbsp;입력합니다.
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TextView&nbsp;textView&nbsp;=&nbsp;findViewById(R.id.textView);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;textView.setText(message);
   <b>&nbsp;&nbsp;&nbsp;&nbsp;}
   <b>}
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMjU0%2FMDAxNTIxNTkzNDExMjM0.53nxYAflitdCxYXawKByYpdXyZhzPdQNF5k9rCWWJuwg.2lylMH14uVkMoqJb2-vO23rDl1fhZsBptBbIF0sCxwIg.PNG.searphiel9%2F0041.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">마지막으로 "DisplayMessageActivity"의 상단에 "뒤로가기" 를 추가해서 다시 처음 페이지인 "MainActivity"로 넘어가도록 만드는 것만 남았습니다. "app &gt; manifests &gt; AndroidManifest.xml" 을 열어서 "DisplayMessageActivity" 부분을 아래와 같이 수정해주세요.</p>
</div>
<div>
 <div>
  <div>
   &lt;activity&nbsp;android:name=".DisplayMessageActivity"
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;android:parentActivityName=".MainActivity"&nbsp;&gt;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;The&nbsp;meta-data&nbsp;tag&nbsp;is&nbsp;required&nbsp;if&nbsp;you&nbsp;support&nbsp;API&nbsp;level&nbsp;15&nbsp;and&nbsp;lower&nbsp;--&gt;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta-data
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;android:name="android.support.PARENT_ACTIVITY"
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;android:value=".MainActivity"&nbsp;/&gt;
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/activity&gt;
  </div>
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">축하합니다. 예제 앱 작성이 완료되었습니다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   작성한 앱 실행시키기(테스트하기)
  </div>
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">이제 작성한 예제 앱을 한 번 AVD를 통해서 실행(테스트) 해보도록 하겠습니다. "Shift+F10"을 누르던가 우측 상단 메뉴의 재생버튼 모양의 화살표를 눌러주세요.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfNzQg%2FMDAxNTIxNTkzNDExMjY1.GUAIiMEhrQXT5xdgF2viBvV0n_D2gu7YLg1Zyv_SC8Ug.i_mE-VSExGhJhwS1LLXPMlCF0bCOAjJfMFcS_Ask4Q8g.PNG.searphiel9%2F0043.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">테스트 목적의 안드로이드 기기 또는 AVD가 실행되어있지 않다면 "Select Deployment Target" 페이지가 나타납니다. "Available Virtual Devices"에서 테스트에 사용할 이미지를 선택해주세요. 이후 해당 AVD가 실행되며 안드로이드 스튜디오에서는 작성한 APP에 대해서 컴파일 작업을 시작, 완료가 되면 자동으로 AVD에 설치하여 작성한 APP을 보여줍니다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfMjI0%2FMDAxNTIxNTkzNDExMzUy.plSF-clx2mlQzGu3yBXRN5ukBJsa5_kpqzgEft5Cc9Ag.zQnknbHmuVANuUhxJxIcILiJOHslxSlD7W0xL5VHi18g.PNG.searphiel9%2F0048.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMjFfNTUg%2FMDAxNTIxNTkzNDExMzY0.CAAfgEcYg79rqxlSCVm6ER0WVbOPcfHeoSKM1trc9gcg.SQoyjnYnQCu0v8hVROtrlRJI5S_eYhi-7AOklm_8NDQg.PNG.searphiel9%2F0049.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">한 번 입력창에 텍스트를 작성하고 Send 버튼을 눌러봅시다. 그러면 새로운 창이 열리면서 입력한 텍스트가 나타나는 것을 확인하실 수 있습니다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   마무리
  </div>
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px">구글 공식 가이드 문서를 참고해서 예제 앱 만드는 과정을 한 번 실습해보았습니다. 이 실습을 통해서 대략적으로 어떻게 안드로이드 스튜디오를 통해서 애플리케이션을 작성하는지 충분히 알 수 있었을 것이라 생각됩니다. 이제 부가적으로 다른 요소들에 대해서도 공부해서 마켓에 올라가있는 앱처럼 만들 수 있기를 바랍니다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   참조문서
  </div>
 </div>
</div>
<div>
 <p style="padding:0;margin:0;max-width:100%;display:inline-block;vertical-align:middle;font-size:16px"><span><a href="https://developer.android.com/training/basics/firstapp/index.html?hl=ko">https://developer.android.com/training/basics/firstapp/index.html</a><b></span><span><a href="https://developer.android.com/training/basics/firstapp/creating-project.html?hl=ko">https://developer.android.com/training/basics/firstapp/creating-project.html</a><b></span><span><a href="https://developer.android.com/training/basics/firstapp/creating-project.html?hl=ko"></a><a href="https://developer.android.com/training/basics/firstapp/running-app.html?hl=ko">https://developer.android.com/training/basics/firstapp/running-app.html</a><b></span><span><a href="https://developer.android.com/training/basics/firstapp/building-ui.html?hl=ko">https://developer.android.com/training/basics/firstapp/building-ui.html</a><b></span><a href="https://developer.android.com/training/basics/firstapp/starting-activity.html?hl=ko">https://developer.android.com/training/basics/firstapp/starting-activity.html</a></p>
</div>
