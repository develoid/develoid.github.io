---
layout: post
title: '[커뮤니티] 아두이노 응용 - MIT 앱 인벤터로 나만의 블루투스 제어 앱 만들기'
author: '시류아'
categories: Arduino
tags:
- IoT-Board
- Arduino
- Programming
-
---


<script> location.href='https://cafe.naver.com/develoid/776075' ; </script>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfNjQg%2FMDAxNDg0ODI2NzA4NzYw.jMovSmNqfStePeXUf8cAKf49j_qLUcqeFsg4o9lNmwIg.sufxTsuc4xoArYgWxOUDP71gHjLkHRdfnQHhDrCNBdAg.JPEG.searphiel9%2Farduino_logo.jpg%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>
  <p>
   아두이노 응용
   MIT 앱 인벤터로 나만의 블루투스 제어 앱 만들기
  </p>

 </p>

</p>

<p>
 <p>사실 이 글은 아두이노 관련보단 안드로이드 관련에 더 가깝지만, 주 목적은 아두이노를 블루투스 제어 할 앱을 만드는 것이니 아두이노 관련으로 작성한다. MIT에서는 안드로이드 스마트폰 대상으로 스크래치 형식으로 앱을 제작 할 수 있도록 만들어진 웹 기반 안드로이드 IDE인 MIT 앱 인벤터를 제공하고있다. 이를 이용해서 나만의 블루투스 제어 앱을 만들어보도록하자.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   프로젝트 생성
  </p>

 </p>

</p>

<p>
 <a href="http://ai2.appinventor.mit.edu/?locale=ko_KR">   ai2.appinventor.mit.edu    자세히보기 </a>
</p>

<p>
 <p>일단 먼저 위의 링크를 통해서 MIT 앱 인벤터2로 접속하자.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfODIg%2FMDAxNDg0ODI2ODg1NTkw.h15GEVORBu9NWKwgDJ3ppr1AlgjOSTEFB3r4EA8fXFkg.NUKiZEPmoHQtP5GNUekaHi8WurD-luoNIgtpWELTTWUg.PNG.searphiel9%2F2.png%22&amp;type=cafe_wa740">
  프로젝트 시작 화면
 </p>

</p>

<p>
 <p>접속을 했다면 먼저 구글 로그인을 하라고 할 것이다. 구글 로그인을 하고나면 위와 같은 프로젝트 관리 메뉴가 나타날 것이다.&nbsp;</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMTk5%2FMDAxNDg0ODI2OTkwMjA1.PPO9nu_wCqrI_cZlQ1yYiXBWdvi5Jj3PsQjFegM0nG4g.IJRObjhvyVjoo0f4GOEPAwYb600drGgfDau2RFjDZWEg.PNG.searphiel9%2F3.png%22&amp;type=cafe_wa740">
  프로젝트 생성
 </p>

</p>

<p>
 <p>좌측 상단의 "새 프로젝트 시작하기"를 클릭하여 새로운 프로젝트를 생성한다. 이때 이름은 앱의 이름이 되며, 띄어쓰기가 불가능하다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   앱 인벤터 화면 설명
  </p>

 </p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMTgx%2FMDAxNDg0ODI3MDQ2MDg2.C_2tHBqJGEpL5_OkHLkAqxUM3jkkNgopCLdnq9wzkY8g.xjas1E0EaoF1OKcPQajWosMmF3TVZ8h-fS4o6JymO_sg.PNG.searphiel9%2F4.png%22&amp;type=cafe_wa740">
  메인 화면
 </p>

</p>

<p>
 <p>프로젝트를 생성하면 메인 화면으로 넘어온다. 이 화면에서의 기능은 제일 좌측 팔레트는 앱의 구성 버튼, 이미지, 레이아웃 등을 가지고 있는 영역이다. 필요한 구성을 드래그하여 가운데 뷰어 부분으로 가져오면 앱 내 화면으로 해당 인터페이스가 추가된다. 이외에도 부가적인 기능(진동, 소리 등)을 추가 할 수도 있다. 뷰어는 앱 내 보여주는 페이지 화면이며, 우측 첫번째인 컴포넌트는 사용한 인터페이스들을 정리하여 나타낸다. 마지막으로 우측 마지막 속성 탭은 각 인터페이스별 속성 등을 설정 할 수 있는 곳이다.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMTQ1%2FMDAxNDg0ODI3MTc1MzM5.hwlkDxoY-qHZGcKlzWKLlQC23PS25D3hF6RLd7QvDmMg.OybfTAutK1jXebwxjK9K-G8FKZ3S5xBsAvc0ZlXVBI8g.PNG.searphiel9%2F5.png%22&amp;type=cafe_wa740">
  스크래치 화면
 </p>

</p>

<p>
 <p>우측 상단의 블록 부분을 클릭하면 위와 같이 스크래치 프로그래밍 공간으로 넘어온다. 스크래치와 동일하게 퍼즐을 끼워 맞추는 것으로 프로그래밍을 할 수 있다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>그럼 한 번 원하는대로 블루투스이 앱을 디자인하길 바란다. 단 이때 들어가야 되는것은 이전에 만든 서보를 제어하기 위한 상/하/좌/우/정지 총 5개의 버튼과 장비의 연결 상태를 알기 위한 텍스트, 마지막으로 연갈 장비 선택을 위한 목록 뷰이다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   앱 화면 제작
  </p>

 </p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMjQ1%2FMDAxNDg0ODI3MjgyODM2.fyg_gndNkUk-PZDb2xy5pz4aUuAhACCYCG0QE1pWTGUg.h5DyX-Yv-S-v-uSmCckoehk59cqVLjNvpAQSVqcvwJUg.PNG.searphiel9%2F6.png%22&amp;type=cafe_wa740">
  앱 화면 제작
 </p>

</p>

<p>
 <p>내가 한 형태이다. 옆의 팔레트에서 끌어와서 위와 같이 십자 형태로 상/하/좌/우/정지 를 구성했으며 아래에는 블루투스 연결 확인용 텍스트 및 연결 버튼을 만들었다.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMTkz%2FMDAxNDg0ODI3MzQ4NDI2.SJLj8aQTmFW_HBIx2c6YXT0BdATJTBy5f_qJhxy0M_cg.PDAALIHzjk-Ppw15fRNexT8kQ_KTnt5VLDav0HMKv0Ug.PNG.searphiel9%2F7.png%22&amp;type=cafe_wa740">
  블록 프로그래밍
 </p>

</p>

<p>
 <p>스크래치 프로그래밍은 버튼과 시간 등을 기준으로 논리에 맞추어서 블록을 작성해보았다. 내가 작성한 것은 아래를 참고하길 바란다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   스크래치 프로그래밍
  </p>

 </p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfNjIg%2FMDAxNDg0ODI3NDA5MDYz.cRdILy5zomrijYTfp8yp3m4hY6xmuqkL6r8LdaKzZJcg.HKcrOCeKmIdebzpzZK7-aRVJSdj5w5YxzFCzChOo9akg.PNG.searphiel9%2F8.png%22&amp;type=cafe_wa740">
  스크래치 프로그래밍
 </p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   앱으로 컴파일하기
  </p>

 </p>

</p>

<p>
 <p>작성이 끝났으니 마무리로 apk로 만들어서 스마트폰에 설치 할 수있도록 하자.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfNDAg%2FMDAxNDg0ODI3NDgyNDU0.xNdTE-04sC_dQ3EMySEyBu_y0zCXJzimz6fWjj45PE0g.qYceqY5yM6UkBapRhPGkkybTV5YAlpNkw7C9Uc8fRAog.PNG.searphiel9%2F9.png%22&amp;type=cafe_wa740">
  빌드
 </p>

</p>

<p>
 <p>상단의 빌드 메뉴를 클릭하면 QR코드나 내 컴퓨터 저장을 통해서 앱을 컴파일하여 받을 수 있게 되어있다. 둘 중 편한 것으로 다운로드 받아서 폰에서 생성한 앱을 설치하면 된다.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMjU1%2FMDAxNDg0ODI3NTM0MjE2.Yh0VwXapw4CTc6KRrmY9AESb2aBbHoGEwo6eQGTsmHsg.ZEUUC-IS76ufhjU0r7WzyEW1jGWEqkwTHKYnnKXck3kg.PNG.searphiel9%2F10.png%22&amp;type=cafe_wa740">
  빌드 프로세스바
 </p>

</p>

<p>
 <p>선택하고나면 빌드를 시작하고 잠시 기다리면 QR코드가 나오던가 컴퓨터에 파일이 다운로드 된다. 이후 앱을 스마트폰에 설치하면 된다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTlfMTA1%2FMDAxNDg0ODI3NTg3Mzg0.YK9_AsRbnBa0g-_nyVDowSweVLHA075rLBEGun3LW_Ug.9YTrFu8vdRtwFIo3u6AeDbdBhQgDSzZ7WKnp-4L151Ug.PNG.searphiel9%2F11.png%22&amp;type=cafe_wa740">
  완성
 </p>

</p>

<p>
 <p>이로서 나만의 블루투스 제어 앱이 완성되었다. 한 번 작성된 블루투스 앱을 통해서 아두이노를 제어해보자!</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>소스코드에는 정답이 없다. 다양한 생각이 있듯 다양한 방법이 있으며, 그 중 하나일 뿐이다.</p>

</p>
