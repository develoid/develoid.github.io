---
layout: post
title: '[커뮤니티] 안드로이드 P DP 4 모든 기기에 올려보자!'
author: 'EdgeDEV'
categories: Android-Treble
tags:
- Android
- Treble
---


<script> location.href='https://cafe.naver.com/develoid/811800' ; </script>

#요구조건: Snapdragon ARM64 기기, Treble Support, Seemless Update 미지원(Only A)<p>#공식 GSI 이미지가 아닌 Pixel XL에서 포팅한 이미지지만, 꽤 안정적으로 보입니다.</p>
<p>xda 개발자분들의 노력(<a href="https://forum.xda-developers.com/project-treble/trebleenabled-device-development/rom-android-p-developer-preview-t3816659">https://forum.xda-developers.com/project-treble/trebleenabled-device-development/rom-android-p-developer-preview-t3816659</a>)으로, 모든 Treble 기기에서 최신 안드로이드 P DP4 를 사용할 수 있게 되었습니다. 아직 우리나라에는 소개된 자료가 없는 것 같아, 방금 제 홍미노트 4x에 올려본 뒤, 디벨에도 소개해봅니다.</p>
<p>STEP 1 - 준비물</p>
<p>준비물 몇가지를 받으셔야 합니다. 언급이 없는 한 컴퓨터에 저장해주세요.</p>
<p>1.&nbsp;<a href="https://androidfilehost.com/?w=files&amp;flid=279295">https://androidfilehost.com/?w=files&amp;flid=279295</a>에 있는 파일 4개 전부 받아, 폰에 넣어두세요. 파일 중&nbsp;P-DP4-sGSI-Aonly.zip는 압축을 풀어 두셔야 합니다.</p>
<p>2. adb가 필요합니다. 사용법은 여기에서 다루지 않습니다.</p>
<p>3. Google Play Service가 필요합니다.&nbsp;<a href="https://www.apkmirror.com/apk/google-inc/google-play-services/google-play-services-12-8-74-release/google-play-services-12-8-74-100400-204998136-android-apk-download/">https://www.apkmirror.com/apk/google-inc/google-play-services/google-play-services-12-8-74-release/google-play-services-12-8-74-100400-204998136-android-apk-download/</a>에서 받아주세요.</p>
<p>4. 첨부파일의 lagfix.zip을 받아 폰에 옮겨주세요.</p>
<p>STEP 2 - TWRP 작업</p>
<p># 이미 Treble화 된 기기에서 작업한다고 가정합니다. 홍미노트 4x 같이 정식으로 Treble이 지원되지 않는 기기는 따로 Treblize하는 과정이 필요합니다.</p>
<p>커스텀롬 올리는 것과 꽤 유사하지만 Treble 이미지는 조금 다른 점이 있습니다.</p>
<p>0. 백업은 필수! (저는 귀찮아서 안합니다만..)</p>
<p>1. 마찬가지로 Wipe 들어가셔서 Full Wipe 해주세요. System, Cache, Data, Dalvik 말하는겁니다.</p>
<p>2. Install에 들어가서 아까 폰에 파일들을 옮겨놓은 폴더로 이동해주세요. 그냥 zip을 설치하는 것이 아니라 하단의 Install Image를 클릭하고 아까 압축 풀어 나온 img 파일을 선택해주세요. 그 후 창에서 System선택 후, 화살표를 땡겨줍니다.</p>
<p>3. 메인 메뉴에서 Mount에 들어가 Vendor 도 선택해주고 나옵니다.</p>
<p>4. 다시 Install 에 들어가 총 4개의 zip 파일을 플래싱할거에요. 아까 받은 zip 3개를 숫자 순서대로 (1,2,3) 플래싱 한 뒤, lagfix.zip을 플래싱해주세요.</p>
<p>5. 재부팅해주세요.</p>
<p>STEP 3 - 부팅 후 설정</p>
<p>재부팅하시면, Google Play Service가 충돌해 구글 앱들이 아무것도 동작하지 않습니다. 사실 이대로 쓰기는 조금 어렵겠죠.</p>
<p>아까 받아놓은 Google Play Service apk 를 adb install(방법은 구글링하세요)로 설치하신 뒤 재부팅만 해주시면 문제가 해결됩니다.</p>
<p>STEP 4 - 후기 및 스크린샷</p>
<p>사실 실사는 10분도 되지 않지만 큰 문제는 없을 것 같습니다. 지문 인식이 작동하는 것을 확인했는데, Treble 롬에서 지문 인식이 작동하는 정도라면 Device-Specific한 문제는 거의 없을 것으로 보거든요.&nbsp;</p>
<p>간혹 문제가 발생하셔서 실사가 어렵다면 다음 달에 다시 시도해보세요. 다음 달(8월)에는 Android P 소스가 공개되어 정식 GSI 이미지를 빌드할 수 있습니다. 그때는 정말 거의 문제가 없을 거에요.</p>
<p>가이드를 따라하시다가 문제가 있으시다면 바로 댓글 남겨주세요. 너무 더워서 조금 대충 쓴 감이 있네요;;(저도 알아듣기 힘듭니 ㄷ..)</p>
<p>마지막으로 스크린샷 몇개 보여드리고 마치겠습니다. 감사합니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA3MjFfMTgy/MDAxNTMyMTQ2NzU0NDg2.rhhn-6dseUJw5rKnYmfGAyDiaIMzbaHCnXNlWo9YWLwg.sQzwIxaGm-sl8lNKRxYg54U0GSBIo3uZQDTUN4Gt4gkg.PNG.eric1344/Screenshot_20180721-130533.png?type=w740"><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA3MjFfMTM3/MDAxNTMyMTQ2NzU0NjMx.z0PhgyEE9tEGiqtEc0bKf4DH_MUR3mA4LNG1jhQd0log.ja1RdhiS1GgoTH0XjSGE8ZrAYCPVR828zbhDpkIHBuYg.PNG.eric1344/Screenshot_20180721-130152.png?type=w740"><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA3MjFfMTkx/MDAxNTMyMTQ2NzU1MDc5.oginv4cybaCmUj3S9U3piLp4sBubJRH7xt_nc8BtwaAg.s8ArypTWrwTtZnROeAxS8Zn0ColhwmFuEQ_MbCBQBuUg.PNG.eric1344/Screenshot_20180721-123601.png?type=w740"><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA3MjFfNDAg/MDAxNTMyMTQ2NzU1MTk5.LaHApzEnH1p_DT_1G6XMlwNJkbr5Ab9syLFfLtYRFTYg.Kv1L5amMBjthzpvUJOtgdHXYUfLKbvGQ9CX2h3tRuz8g.PNG.eric1344/Screenshot_20180721-123616.png?type=w740"></p>
