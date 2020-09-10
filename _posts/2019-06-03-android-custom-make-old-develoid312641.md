---
layout: post
title: '[커뮤니티] 통신픽스할떄 TIP(문자 수/발신)'
author: 'kangdroid'
categories: Android-Custom-Make(Old)
tags:
- Android
- Custom
- Make
-
---


<script> location.href='https://cafe.naver.com/develoid/312641' ; </script>

<p>통신픽스할떄 TIP(LG U+)</p>
<p>안녕하세요? 그냥 펌웨어 가지고 장난치는 KangDroid입니다.</p>
<p>본론으로 넘어 갈까요?CM의 롬이나, 여러 커롬들을 만지작 거리면 통신사가 LG U+ 인 사람들은 문자픽스할때&nbsp; 진짜 고민됩니다.</p>
<p>1. 먼저 아무 커롬중에 같은 기종(아님 같은 통신칩, 보드가 같아야 합니다. 여기서는 갤럭시 S2 HD LTE를 예로 들겠습니다.)이 있어야 합니다.</p>
<p>2. 그 다음 픽스할 롬을 A, 이미 픽스된 롬을 B라고 둡시다.</p>
<p>3. 그 다음, B의 롬에 있는 /system/app/Phone.apk, /system/app/TelephonyProvider.apk, /system/framework/telephony-common.jar을 빼내줍시다.</p>
<p>4. 그 다음, 방금 꺼낸 이 apk, jar파일들을 A와 교체해 줍시다.</p>
<p>5. 적용 후, 문자 수/발신 확인하고, 통화 수/발신을 확인합니다.</p>
<p>&nbsp;</p>
<p>* 혹시 PAC, AOKP종류같은 롬들은 이 방법대로 하면, 뭐가 에러가 납니다. Phone.apk문제인데, Phone.apk 백스말리 하셔서 원래 A롬에 있던 method나 정의를 우리가 픽스한 Phone.apk에 추가해주시면 됩니다. 가끔가다가 A/B의 Phone.apk가 호환되니 참고해주시고여!</p>
<p>&nbsp;</p>
<p>*2 이것은 문자 수/발신팁이고, 소스 수정 없이 할수 있습니다. 또한, 전화 수/발신이 된다는 가정으로 진행을 하게됩니다.</p>
<p>&nbsp;</p>
<p>*3 문자 수신이 잘 안되시면... 로그를 보셔야 합니다. (ADB툴에서, adb logcat -b radio *:E 입력) 나머지 질문사항이 있으면 댓글 남겨주세요!</p>
