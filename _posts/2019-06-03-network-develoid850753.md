---
layout: post
title: '[커뮤니티] 루팅한 안드로이드 폰 한정 HTTPS 우회 입니다'
author: 'Shine yongs'
categories: Network
tags:
- Network
- HTTPS
-
-
---


<script> location.href='https://cafe.naver.com/develoid/850753' ; </script>

<p>0 단계 : 준비루팅한폰 Magisk나 SuperSU와 같은거로 루팅 해주세요.플레이 스토어 에서 "터미널 (Terminal)"과 비지박스 (Busy Box) 설치 해주세요.비지박스 루트권한 얻고 Install 해주세요.</p>
<img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAyMTJfMjgg/MDAxNTQ5OTc4MTA1NDg4.vCfpXK1MhG5LSgMQCdzVcn9YYJ_qFJyOEhxo0kh9s78g.zRXwZgWqeZthC4dCS7qKUijwsdr632x7YG-K_wLhiTsg.JPEG.yongs2008/externalFile.jpg?type=w740"><p>1단계 : 본인 ip 주소 알기터미널을 실행하고 su 명령어를 치세요. (루트권한은 당연히 허용!!)그리고 ifconfig를 입력 해주세요.(Mac주소는 지웠습니다)</p>
<img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAyMTJfMTc2/MDAxNTQ5OTc4MTA2NDQz.JqTgOEzEZWZk85yV1Ksw6eaJDQQBhX0Sye31daOJSfAg.cBYNFifUEqA12TjM9HNY4sdz85HgwUR_KObn7GdHqMcg.JPEG.yongs2008/externalFile.jpg?type=w740"><p>윈도우 OS처럼 MTU 값을 변경해야 됩니다ifconfig (장치명) mtu (값 "200~400추천")저는 ifconfig dummy0 mtu 400 입력했습니다또한 wlan0 부분도 mtu값을 400 수정 했습니다</p>
<img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAyMTJfNzMg/MDAxNTQ5OTc4MTA3MDk5.mEcf6b7XfGk0I4tUUTWLIm9qwpT9j35ESPOBKaSJJJYg.1EeCGynPLl7ukdIRKeUK3ow-J_x59AELOAigaROURvsg.JPEG.yongs2008/externalFile.jpg?type=w740"><p>한번더 터미널에 ifconfig치면 mtu값이 변경된걸 확인 할수 있습니다+ 추가 내용재부팅하면 기본 mtu 값으로 변경됩니다.SKB망 기준으로 실험 한거고SKT 망에선 안되는군요..참고로" ip link set (장치명) mtu (값) " 명령어 치면, WiFi와 LTE 바꿀때 마다 mtu 값이 초기화 됩니다좀더 실험 해봐야 겠습니다.</p>
