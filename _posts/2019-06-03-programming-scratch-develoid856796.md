---
layout: post
title: '[커뮤니티] 정말 쉬운 코딩 강의 13번째 시간입니다 (쿠키런 게임 - 실전#4)'
author: '나도코딩'
categories: Programming-Scratch
tags:
- Programming
- Language
- Scratch
-
---


<script> location.href='https://cafe.naver.com/develoid/856796' ; </script>

<p>안녕하세요 !</p>
<p>정말 쉬운 코딩, 스크래치 3.0 강의 열세 번째이자 네 번째 실전 프로젝트 시간입니다.</p>
<p>이번에 만들어볼 게임은 '쿠키런'인데요, 너무 유명한 게임이라 많이들 아실 거라 생각합니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAzMDlfMTQ0/MDAxNTUyMDg2NjY0NTA5.hAKxi2wBFGaTqUlb3ivErQsJZDMvrRwyIIooYec9lqQg.78tMWkbiwgRFyuuApDux6_YaAJiWIY7DW4Jn1YMQMp8g.PNG.nadocoding/%EC%BF%A0%ED%82%A4%EB%9F%B01.png?type=w740"></p>
<p>유명하기도 하고 스크래치 교육할 때 정말 기본적으로 회자되는 게임이지요.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAzMDlfMjc1/MDAxNTUyMDg2Njg4OTkw.TYXtTfQ-N8raRY5W1SO3uNe9IpR93MLNa4amm50Yenwg.DFCg3Ucd25jv5BjYtXyiVETEAnzhiToIl954OSCnsRAg.GIF.nadocoding/NEW_GIF_4.gif?type=w740"></p>
<p>쿠키런 게임에서 특히 눈여겨 볼 부분은 3가지 입니다.</p>
<p>(1) 움직이는 배경 만들기</p>
<p>이전에 '장난꾸러기 고스트' 강의에서 한번 만들어 보았는데요, 그 때는 이미지 2개만 가지고 움직이는 단순한 배경이었는데, 이번에는 약간 업그레이드 된 3단계 움직이는 배경을 만들어 봅니다. 가장 뒤에 있는 달 부분은 그대로 있고, 앞에 무덤 부분은 천천히 움직이고, 맨 앞에 땅 (캐릭터가 이동하는) 부분은 빠르게 움직입니다. 그래서 더욱 실감나는 배경 애니메이션을 만들수 있습니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAzMDlfOTUg/MDAxNTUyMDg2NzA1MDI4.HcjMp4R31QWMO3pMfZHC8KNhC83mT4VRkwvS23ht7Jog.OvUsTtGIuUwGFX361bekdtpV0rC-rJmGyj3esXocPsUg.GIF.nadocoding/%EC%BF%A0%ED%82%A4%EB%9F%B0%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94%EB%B0%B0%EA%B2%BD.gif?type=w740"></p>
<p>(2) 점프하기</p>
<p>캐릭터가 드디어 점프를 합니다. 점프를 할 때는 올라갈땐 점점 느려졌다가 내려올떈 점점 빨라지는 동작이 필요해요, 포물선 형식으로 뛰지 않으면 거꾸로 V 자 모양으로 딱딱하게 쭉 올랐다가 쭉 내리는 부자연스러운 동작이 나오게 됩니다. 이에 대해 충분히 이론 설명을 하고 스크립로 만들어볼거에요</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAzMDlfMTE3/MDAxNTUyMDg2NzIxMTI3.1NfueR2MpS9LX5k_Inz9bVphbfsDcrsPq01f_j9xiuYg.XASx2pxDqUf-pei0D3DwOUIivsrkVp-ynCFE_rbWqekg.GIF.nadocoding/%EC%BF%A0%ED%82%A4%EB%9F%B0_%EC%A0%90%ED%94%84.gif?type=w740"></p>
<p>(3) 아이템 패턴</p>
<p>쿠키런에는 굉장히 많은 패턴의 아이템들이 나옵니다. 아이템으로 글자를 만들기도 하고 바닥에서 장애물이 나오기도 하고 천장에서 장애물이 나오기도 하고 아이템만 주구장창 나오기도 하구요. 우리 강좌에서는 기본적인 3가지 패턴에 대해서 처리를 해봅니다. 서로 다른 위치에서 나오는 장애물과 그에 따른 아이템 배치, 그리고 패턴 간 간격 조정도 어떻게 하는지 배워봅니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAzMDlfMTA5/MDAxNTUyMDg2NzM1NDM0.T7E8HWYjOUzXlyRVgy4ae1SZayRrTHljpgHSxS52LYUg.fONuGx93AbCeE3KrljGckD5GLSxPtzoxx4tcsyQgvIAg.GIF.nadocoding/%EC%BF%A0%ED%82%A4%EB%9F%B0_%EC%95%84%EC%9D%B4%ED%85%9C%ED%8C%A8%ED%84%B4.gif?type=w740"></p>
<p>이번에는 실제 게임의 이미지를 그대로 사용하지 않고 완전 별도의 이미지들을 사용하도록 합니다. 원작과 비슷하면서도 다른 테마로 '할로윈' 느낌이 물씬 나도록 만들어 봤습니다 ^^</p>
<p>열세 번째 교육 영상 진행합니다.</p>
<p>13-1.설마 이 게임을 모르는 사람은 없겠지? 쿠키런 (실전 프로젝트 #4) </p>
<p><iframe src="https://www.youtube.com/embed/CRtPuR342xY?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>13-2.게임 이미지 준비 및 움직이는 배경 만들기 </p>
<p><iframe src="https://www.youtube.com/embed/mKnxFDJlZLk?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>13-3.캐릭터 추가하기 </p>
<p><iframe src="https://www.youtube.com/embed/CHHAf0okY-g?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>13-4.쿠키걸 점프하기 - 이론편 </p>
<p><iframe src="https://www.youtube.com/embed/1xd9OcUlemU?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>13-5.쿠키걸 점프하기 - 실습편 </p>
<p><iframe src="https://www.youtube.com/embed/dVWue6c1-l8?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>13-6.3가지 아이템 패턴 - 이론편 </p>
<p><iframe src="https://www.youtube.com/embed/tp8_IF5-AHY?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>13-7.아이템 패턴 #1 </p>
<p><iframe src="https://www.youtube.com/embed/19haD407CXg?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>13-8.아이템 패턴 #2-1 (아이템) </p>
<p><iframe src="https://www.youtube.com/embed/UL6dGh7BBQs?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>13-9.아이템 패턴 #2-2 (바닥 장애물) </p>
<p><iframe src="https://www.youtube.com/embed/xHULYVOnCi4?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>13-10.아이템 패턴 #3 (천장 장애물과 아이템) </p>
<p><iframe src="https://www.youtube.com/embed/8owwTZVqJhI?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>13-11.쿠키걸 충돌 시 게임오버 처리 </p>
<p><iframe src="https://www.youtube.com/embed/bYSPJe1TZHE?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>감사합니다.</p>
<p>(덧)</p>
<p>참고로 스크래치는 코딩 교육 의무화에 따라 학교에서 가르치는 기본 툴은 아닙니다.</p>
<p>교육청에서는 '엔트리'라는 프로그램으로 교육을 하도록 가이드 한다고 들었습니다.</p>
<p>엔트리를 직접 다뤄보지는 않았지만 스크래치와 대동소이하며 확장성은 오히려 스크래치가 더 좋다고 합니다.</p>
<p>어차피 툴을 배우는 것이 아니라 툴을 통한 코딩 교육 - 사고력을 기르는 것이 목적이므로,&nbsp;</p>
<p>어느 툴을 쓰건 크게 교육의 질이 다를 거라고는 생각되지 않네요.</p>
<p>다만 학교 교과과정을 선행하기 위해서 도움이 되는 강좌는 아닐 수도 있다는 말씀 드립니다 ㅎㅎ</p>
<p>처음 보실 분들을 위해, 아래는 이 강의의 소개 영상입니다. ^^</p>
<p><iframe src="https://www.youtube.com/embed/xN8O_mhR-7Y?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
