---
layout: post
title: '원하는 폰트를 ADB OVERLAY ENABLE 로 적용하는법'
author: 'killumina'
categories: Android-Custom
tags:
- Android
- Custom
-
-
---


<script> location.href='https://cafe.naver.com/develoid/798517' ; </script>

<p>일단 adb fastboot는 구글링 하셔서 필수 설치가 되있으셔야 합니다하다가 잘못되서 일어나는 모든 문제는 사용자에게 있습니다<b>논란이 생길 시 글을 내리겠습니다.<b>1. USB 디버깅 켜기<b>2. </p><a href="https://forum.xda-developers.com/devdb/project/?id=23390#downloads">https://forum.xda-developers.com/devdb/project/?id=23390#downloads</a><b><p><b>(여기서 7.0 누가는 Wings google product sans 받습니다)<b>( 8.0 오레오는 OREO v2 붙어있는걸로 받아주세요 )<b>3. 플레이스토어에서 apk editor 설치합니다<b>4. 원하는 폰트를 받습니다 ttf만 가능<b>5. 원하는 폰트 이름을 GoogleSans-Regualr 로 바꿉니다<b>6.Apk Editor 실행<b>7.</p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA1MTVfNzYg/MDAxNTI2MzY2ODg0OTkx.TjrKZsRtf9i_rG6hUZLNLbiL9erUFshTLtOo1CHLVOog.EVSLoh5_NFFvyGk54jJKXH3ZLOkrB5se0unfeLqz2Nkg.JPEG.yallee123/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C1.JPG?type=w740"><b><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA1MTVfNDkg/MDAxNTI2MzY2ODg1MTQ2.TROsqnXCk7nUWcp2F7a-P6dsNsmks5qmNteWQElitCog.Nn668f2NmTT1XFQrkkgRQ1f20-dSoZbUcD9UuQU8hzog.JPEG.yallee123/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C2.JPG?type=w740"><b><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA1MTVfMTQg/MDAxNTI2MzY2ODg1MjM4.iEBkluDQuufM2dZnxnNfnacPNTQw9WtAKGYVGsje_90g.x4j_7Yj_2WHH8ylRlC2c2G9MalvNxbNiqBuwWXeH2AIg.JPEG.yallee123/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C3.JPG?type=w740"><b><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA1MTVfMSAg/MDAxNTI2MzY2ODg1MzQ1.3q0BXQ5ZRbBrJG5OHcp07Lw5h92tJ-JUXW1_6msws_gg.fuZJOmxfFTSg8HM9y_pzqZqamn2jWje16d8q9gzNC5sg.JPEG.yallee123/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C4.JPG?type=w740"><b><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA1MTVfMzAw/MDAxNTI2MzY2ODg1NDQy.wgyJJdYFkF32_BB-Ob7mfLq-ksNw1MKnnt6U6-jjaSwg.Ft7IgkZXH7Gdh-ynE26c-9JfXOk34NZSoJmoES9a508g.JPEG.yallee123/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C5.JPG?type=w740"><b><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA1MTVfMTUg/MDAxNTI2MzY2ODg1NTA3.NY9AH6s4Pzs_f2bmqA44oDsSG9Piz5F-bEtPU5DoVhYg.jrG60mhlYcgM9gr0MpdSd8LbdOY7rDiYs0FIDyX_ubsg.JPEG.yallee123/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C6.JPG?type=w740"><b><p>8. 재부팅이 완료되셨다면 cmd를 킵니다.<b>9. cmd에 adb shell 을 쳐서 기기와 연결합니다.<b>10. cmd에<b><b>cmd overlay enable com.monotype.android.font.foundation.WingsSamsungFonts.GoogleProductSans<b><b>를 입력하고 엔터를 누릅니다.<b>11. 설정에 가서 GoogleSans-Regualr를 선택하시면 원하는 ttf 파일이 적용된게 확인이 가능합니다.</p><p><b></p><p><b><span>정보 | cmd overlay disable ~~~ 한번 하신 후 다시 enable 해주시면 작동한다는 정보가 들어왔습니다. 만약 처음엔 성공하셨는데 다시 했더니 안되시는분들은 disable -&gt; enable 한번 거쳐서 해주세요.</span></b></p>
