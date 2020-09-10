---
layout: post
title: '[커뮤니티] YouTube 화질제한 걸린 기종을 위한 Tip!'
author: 'Kimss'
categories: Android-App
tags:
- Android
- App
-
-
---


<script> location.href='https://cafe.naver.com/develoid/792442' ; </script>

<p>현재 유튜브는&nbsp;몇몇 기종에 대해&nbsp;성능과 무관하게</p>
<p>60프레임 영상을 480p로만 재생되도록 제한을 걸어두고 있습니다.</p>
<p>그래서 이를 해결하기 위해 이것저것 많은 시도를 해보았습니다.</p>
<p>아래에 소개드릴 방법은 기본적으로&nbsp;YouTube Vanced(구 iYTBP)의 숨겨진 개발자 설정을</p>
<p>이용한 방법이므로,&nbsp;루팅, 비루팅, 매지스크 사용자 모두 이용 가능한 방법입니다.</p>
<p>기존&nbsp;YouTube Vanced(구 iYTBP) 기능에 코덱 덮어쓰기 기능이 있고&nbsp;이를 통해 강제로</p>
<p>화질을 끌어올릴 수 있으나,&nbsp;굳이&nbsp;개발자 옵션을 활성화 시킨 이유는 다음과 같습니다.</p>
<p>→&nbsp;기본 설정상의 코덱 덮어쓰기로 화질을 강제로 올리면&nbsp;구형 기종에서는</p>
<p>엄청난 발열과 버퍼링이 동반됩니다.&nbsp;(여러 기종을 가지고 직접 실험해 본 결과)</p>
<p>방법 설명</p>
<p>1. XDA 포럼에서 YouTube Vaced 또는 iYTBP를 내려 받아서 설치해 주세요.</p>
<p>→ 루팅, 비루팅, 매지스크 등등 자신에게 맞는 버전을 내려받아 설치 (자세한 설명은 생략)</p>
<p>→&nbsp;YouTube Vanced :&nbsp;<a href="https://goo.gl/ko4LWp">https://goo.gl/ko4LWp</a>&nbsp;</p>
<p>→&nbsp;iYTBP :&nbsp;<a href="https://goo.gl/9lJQ9N">https://goo.gl/9lJQ9N</a></p>
<p>2. 새로 설치한 유튜브를 실행한 후 설정으로 들어가 주세요.</p>
<p>3.&nbsp;YouTube Vanced를 설치한 경우 Vanced Settings&nbsp;/</p>
<p>iYTBP를 설치한 경우&nbsp;iYTBP Settings 메뉴로 들어가 주세요.</p>
<p>4. 공통적으로 제일 하단에는 개발자분들을 소개하는 About 탭이 있습니다.</p>
<p>→&nbsp;이 탭을 5번 이상 빠르게 연타해주세요. (개발자 옵션을 활성화 하듯이)</p>
<p>→&nbsp;메뉴 활성화까지 몇 번의 터치가 남았다는 영어 문구가 뜨다가,</p>
<p>메뉴가 활성화 된 이후에는 활성화 되었다는 문구로 바뀝니다.</p>
<p>5. 이제 제일 상단의 Codec Override 세팅으로 들어가주세요.</p>
<p>→&nbsp;메뉴가&nbsp;6개로 늘어나 있다면 개발자 옵션이 활성화 된 것입니다.</p>
<p>6. Override Manafacturer 메뉴를 누르고, samsung를 기입해 주세요.</p>
<p>Override Model 메뉴를 누르고, GT-I9500을(9500 앞에 대문자 i 입니다) 기입해 주세요.</p>
<p>→ 유튜브가 지금 손에 쥐고 있는 폰을 해외판 갤럭시S4로&nbsp;인식하도록 만드는 작업입니다.</p>
<p>→ 굳이 해외판 갤럭시S4를 선택해야 할 이유는 없으며,&nbsp;현재 화질 제한이 걸리지 않은 기종 중</p>
<p>아무 기종을 골라서&nbsp;제조사와 기기명을 입력하시면 됩니다.&nbsp;</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTA1MjNfMTg2/MDAxNTU4NjE4MDQzOTY2.QOGUsEuwMY2TD95YkJvLi4yRZW6c5ktJRRoQ0-_PXewg.Hw_YoI7boVcG6ZnXKFN_fEO5i5UppIGuMUzP_kYlIPUg.PNG/Screenshot_2018-04-10-14-22-04_.png?type=w740"></p>
<p>7. 유튜브를 완전히 종료하고 다시 실행 한 후에 60프레임 영상의 화질 제한이 풀렸는지 확인!</p>
<p>→ 서랍에 박혀있던 갤2를 위와 같은 방법으로 테스해 본 결과,</p>
<p>720p60fps까지는 약간의 버벅임과&nbsp;함께 무난하게 재생합니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTA1MjNfMjk4/MDAxNTU4NjE4MDg5NjQ1.9oQrClmWTzfIc4riIHQRGh5AZXzZ1B7qKSKZk2vqAOcg.QLv8UM8PhlPiKhqDgMupePcrmi90-YIWyZjVwgjZQPsg.PNG/Screenshot_2018-04-10-14-22-51.png?type=w740"></p>
