---
layout: post
title: '[커뮤니티] #1 컴퓨터의 개발환경을 구축하자'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/285862' ; </script>

<p>안녕하세요~ 처음뵙겠습니다 미르라고 합니다 ㅎㅎ</p>
<p>이 게시글부터 제가 어플을 만들며 배운 지식을 나누기 위해 작성할 예정인대요</p>
<p>많은 강좌가 있지만 밀리지 않기 위해 자세하게 포스팅 해보도록 하겠습니다!</p>
<p>만약 오타, 잘못된 부분이 있다면 따끔한 지적 부탁드립니다~</p>
<p>최대한 앱 프로그래밍에 대해 모르시는 분이 봐도 쉽게 이해할수 있도록</p>
<p>한편 한편 자세하고 읽기 쉽게 작성해 보도록 하겠습니다~</p>
<p><strike>강좌의 또다른 목적은&nbsp;</strike><strike>Snails님의 독점을 막기위해(?)</strike></p>
<p>1. 어플 개발 환경을 구축하자!</p>
<p>일단 어플을 만들기 위한 개발 환경을 구축해야 합니다</p>
<p>어플을 만들기 위해서 필요한것은? 자바와 이클립스, SDK입니다 ㅎㅎ</p>
<p>1-1 자바를 깔자</p>
<p>일단 자바를 깔아볼까요?</p>
<p>자바 다운로드 사이트&nbsp;<a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html">http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html</a></p>
<p>으로 이동하셔서 자바를 깔아주세요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F275B574D51F7C15807941A%22&amp;type=cafe_wa740"></p>
<p>라이센스에 동의한다는 체크를 해주시면 아래와 같이 글자가 변경됩니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile6.uf.tistory.com%2Fimage%2F2720954F51F7C1650CCB65%22&amp;type=cafe_wa740"></p>
<p>아래에서 각 OS에 맞게 깔아주시면 됩니다 ㅎㅎ</p>
<p>[미르의 팁]</p>
<p>-OS버전을 어떻게 알수 있나요?</p>
<p>Windows의 경우 컴퓨터 - 속성을 들어가시면 몇 비트인지 알수 있습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile28.uf.tistory.com%2Fimage%2F247BF94751F7C1470CB8A7%22&amp;type=cafe_wa740"></p>
<p>리눅스의 경우&nbsp;System - About Ubuntu에 들어가서 확인하거나&nbsp;uname -a으로 확인 (i686 = 32bit, x86/64 = 64bit)</p>
<p>만약 페이지를 찾지 못했다는 오류가 발생할경우&nbsp;<a href="http://www.oracle.com/">http://www.oracle.com</a>에서 찾아주시면 됩니다</p>
<p>1-2 이클립스와 SDK</p>
<p>자바를 깔으셨다면 이제 이클립스와 SDK를 설치해야 합니다</p>
<p>이 두가지는 따로따로 설치할수 있으나 불편합니다 따로 설정해야 하고...</p>
<p>그러므로 이 포스팅에서는 한번에 통합되어 있는 파일을 받아보도록 하겠습니다</p>
<p><a href="http://developer.android.com/sdk/index.html">http://developer.android.com/sdk/index.html</a></p>
<p>구글 안드로이드 개발자 사이트의 sdk항목 입니다</p>
<p>들어가신다음 ADT Bundle을 받아주세요</p>
<p>[미르의 팁]</p>
<p>-ADT란&nbsp;Android Developer Tools의 약자입니다</p>
<p>ADT Bundle을 받는 이유는</p>
<p>Eclipse + ADT plugin (이클립스와 ADT 플러그인이 합처져 있습니다)</p>
<p>Android SDK Tools (SDK가 통합되어 있습니다)</p>
<p>Android Platform-tools (Platform-tools이 내장되어 있습니다)</p>
<p>The latest Android platform (최신버전의 SDK가 탑재되었습니다)</p>
<p>The latest Android system image for the emulator&nbsp;최신버전의 SDK가 탑재되었습니다)</p>
<p>이 사가지의 이유로 ADT 번들을 받는답니다~</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F271D784951F7C29C2DD1A0%22&amp;type=cafe_wa740"></p>
<p>윈도우 환경이라면 이런 버튼을 눌러주세요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F26592D4F51F7C332090292%22&amp;type=cafe_wa740"></p>
<p>약관에 동의합니다 체크하신다음</p>
<p>운영체제의 비트를 선택해주세요 그럼 아래 버튼이 활성화 됩니다</p>
<p>[미르의 팁]</p>
<p>-만약 다른 운영체제라면?</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile28.uf.tistory.com%2Fimage%2F21045C4951F7C29C12D60C%22&amp;type=cafe_wa740"></p>
<p>이 글자를 클릭하시면 아래와 같이 나타납니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F275F824951F7C29C3B5945%22&amp;type=cafe_wa740">각 OS에 맞는 ADT를 선택해서 다운로드 하시면 됩니다~</p>
<p>다운로드하신다음 아무데다 압축 풀으시면 끝입니다 ㅎㅎ</p>
<p>1-3 SDK</p>
<p>압축푼 폴더에 들어간다음 SDK Manager.exe를 실행해 주세요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F2705D94351F7C4492D5F99%22&amp;type=cafe_wa740"></p>
<p>도스창이 하나 뜬다음 아래와 같은 창이 뜹니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F271BFA4351F7C4492A52AA%22&amp;type=cafe_wa740"></p>
<p>만들 어플이 지원할 안드로이드 버전(API)를 선택한다음 설치해주세요</p>
<p>만약 어플이 진저브레드와 ICS JB에서 돌아가게 하려면 GB, ICS, JB를 다운로드 해주셔야 합니다</p>
<p>[미르의 팁]</p>
<p>-모든 API를 받아야 하나요?</p>
<p>그럴 필요는 없습니다</p>
<p>자신에게 필요한, 또는 어플에게 필요한 API만 받으셔도 됩니다</p>
<p>저는 젤리빈에서 작동하는 어플을 만들 예정이므로 API17과 16을 받았습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F244ED54351F7C44A36691D%22&amp;type=cafe_wa740"></p>
<p>저는 이미 설치해서 이렇게 뜨지만 창은 같습니다</p>
<p>Accept Licence를 체크해 주신다음 Install을 눌러주세요</p>
<p>자, 이제 SDK도 다운로드가 끝났습니다!</p>
<p>이제 당신의 PC에서도 어플을 개발할수 있습니다!</p>
<p>뭔 개발환경 구축이 이렇게 빨리 끝나냐고요?</p>
<p>ADT Bundle의 힘입니다 하하</p>
<p>다음 강좌에서는 이클립스를 실행해 보고 기본적인 인터페이스에 대해 알아보겠습니다</p>
<p></p>
<p>이글은 [http://itmir.tistory.com/286] 에서 다시 보실수 있으며 원본 글의 저작권은 미르에게 있습니다</p>
