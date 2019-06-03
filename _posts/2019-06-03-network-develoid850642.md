---
layout: post
title: 'HTTPS 리셋 패킷을 기다리지 말고 DPI를 우회해보자'
author: 'Mokky'
categories: Network
tags:
- Network
- HTTPS
-
-
---


<script> location.href='https://cafe.naver.com/develoid/850642' ; </script>

<strike>왜 이사단까지 났는지 모르겠지만...</strike><div><strike><b></strike></div><div>DPI를 우회?하게 해주는 프로그램이 있습니다.</div><div><b></div><div>인터넷 공급자인 ISP가 패킷을 뜯어보고 다시 클라이언트에게 HTTPS 커넥션 리셋을 응답하기전에 입력받은 사이트로 직행하게 해주는 프로그램입니다.</div><div><b></div><div>원래는 러시아에서 검열을 피하고자 만든 러시아제 프로그램인데 이게 한국에서 쓰일줄이야...</div><div><b></div><div>ESNI가 표준화 되기전까진 이게 최선의 방법인거 같네요.</div><div><b></div><div>많은 홈페이지가 클라우드 플레어 CDN도 아니고 ESNI를 갖추고 있지도 않기에 DPI 우회하는게 낫습니다.</div><div><b></div><div><b></div><div>깃허브:&nbsp;<a href="https://github.com/Include-sys/GUI-for-GoodbyeDPI/releases">https://github.com/Include-sys/GUI-for-GoodbyeDPI/releases</a> (GUI 버전)</div><div><b></div><div>32비트랑 64비트중 맞는걸 선택하시고 압축푼다음&nbsp;GoodByeDPI GUI.exe를 실행하면 스마트 디펜더가 막아주는데 추가정보를 눌러서 실행을 누릅니다.</div><div><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAyMTJfMjE0/MDAxNTQ5OTU3MzMxNTcw.OqT1Jsr5TuwCM8QDMJUQBnq7K_3GTxECZ8scFgdQChAg.4xdwTRbgZ4_WKo1z5hIPAdOCZmakukutXA-dmku51qUg.JPEG.yms2772/%7BA8FC0B23-A9B7-45EF-9719-13DC23417463%7D.png.jpg?type=w740"><b></div><div><b></div><div>여기서 아무것도 건들지 말고 Durdur 왼쪽에 있는 Ba~~를 누르면 실행이 되는데 실행 후 프로그램을 닫으면 시스템 트레이로 최소화 되어서 사용가능합니다.</div><div><b></div>
