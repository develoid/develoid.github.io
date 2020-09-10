---
layout: post
title: '[커뮤니티] 갤삼스쿨-(1) 루팅을 해보자 (Feat.주곰 어시스턴트)'
author: '주곰'
categories: Samsung-Custom
tags:
- Samsung
- Device
- Custom
-
---


<script> location.href='https://cafe.naver.com/develoid/712647' ; </script>

<p></p>
<p><p>1. 본 게시글은 디벨로이드 자료정리 프로젝트의 일환으로 작성되는 게시글입니다.</p>
<p>2. 게시글을 작성한 사람이 모든 것을 알고있을 수는 없습니다. 궁금한 부분에 대해서는 검색을 통해서 알아보시길 권장합니다.</p>
<p>3. 틀리거나 부족한 부분에 대해서는 보완할 수 있도록 근거 자료를 바탕으로 지적해주시길 바랍니다.</p>
<p>4. 많은 참고가 되셨으면 감사 댓글 작성은 부탁드리겠습니다 :)</p>
</p>
<p></p>
<p>+) 17.05.13 13:24 1차 수정:&nbsp;삼성 통합 USB드라이버 내용 추가</p>
<p>---------------------------------------------</p>
<p>안녕하세요. 주곰입니다.</p>
<p>갤삼스쿨 1교시, 루팅을 해보자 시간입니다.</p>
<p>오늘의 학습목표는 아래와 같습니다.</p>
<p>&nbsp;</p>
<p>-오딘을 이용하여 커스텀 리커버리를 플래싱 할 수 있다.</p>
<p>-커스텀 리커버리를 이용하여 zip파일을 플래싱 할 수 있다.</p>
<p>-루팅이 무엇인지 대략적으로 설명할 수 있다.</p>
<p>저는 오늘 좀 바빠서, 주곰 어시스턴트라는 최첨단 AI비서를 대여해 드릴테니 자세한 내용은 주곰 어시스턴트에게 물어보시길 바랍니다.</p>
<p>* 많은 내용들을 4부로 압축시키다보니 분량이 꽤 많습니다. 양해바랍니다.</p>
<p>* #뒤에 있는 내용이 사용자의 질문, 그 아래는 주곰 어시스턴트의 답변이라는 설정이니 참고바랍니다.</p>
<p>#오케이 주곰.</p>
<p>(청취중) 무엇을 도와드릴까요?</p>
<p></p>
<p>#용어정리 해줘.</p>
<p>용어정리를 시작합니다.</p>
<p>1.루팅</p>
<p>기본적으로 사용자가 안드로이드 스마트폰을 구매하면, 게스트(Guest)계정 수준의 권한을 부여받습니다. 이는 중요한 시스템파일과 같은 영역을 임의로 수정할 수 없음을 의미합니다. 일반 사용자에게 이러한 영역을 허용했다가는 십중팔구 고장을 낼테니, 허용하지 않는것입니다. 루팅은 이러한 안드로이드 스마트폰에서 일종의 관리자 권한을 얻는 행위입니다. 흔히들 사용하는 윈도우에서 Administrator계정과 흡사한데요. 안드로이드에서는 이러한 권한을 가진 계정을 root(루트)라고 하며, 이러한 권한을 취득하는 행위가 rooting(루팅)입니다.</p>
<p>2.리커버리</p>
<p>리커버리는 회복, 복구 라는 뜻이 있습니다. 안드로이드에서 리커버리 모드라 함은, 안드로이드와 별도의 파티션에 설치된 녀석으로써, 기본적으로 탑재된 순정리커버리는 공장초기화, 재부팅 등을 지원합니다. 이와는 별도로 개발된 커스텀 리커버리는 부분적인 초기화 혹은 더 완전한 초기화, zip파일 플래싱 등의 기능들을 지원합니다.&nbsp;커스텀리커버리는 CWM, TWRP, Philz Touch 등의 종류가 있는데, 저희는 Philz Touch를 사용할 예정입니다.</p>
<p>#나도 해볼까?</p>
<p>해돋이에 대해 검색합니다.</p>
<p>위키백과에 따르면, 해돋이는&nbsp;새벽에 태양의 윗부분이 지평선에 접하는 순간부터...</p>
<p>.</p>
<p>.</p>
<p>.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMjMx/MDAxNDk0NTk3MjAzNzM2.PpOKH06JPmrHZ1XhT68XdfrDjL7sd4Mv9aUU0hyhGnUg.-b34rL8IjGZ4_wQh-wBF66zhg2qeXSmyOcCokRsWJfEg.JPEG.5755084/1de1b73ac3f3e7db01fa5a2788670836.jpg?type=w740"></p>
<p>#('최첨단' 이라더니..)</p>
<p>#아니 그게 아니라, 나도 시도해볼까?</p>
<p>시도하기에 앞서 주의사항을 숙지하시길 바랍니다. 먼저, 앞서 언급했듯이 루팅은 시스템파일과 같은 영역에 접근할 수 있도록 해 줍니다. 하지만, 이를 잘못 조작하여 문제가 생긴 경우 제조사에서는 이러한 부분에 한하여 무상수리를 거부할 수 있습니다(수리를 거부하는게 아닙니다. 무상수리를 거부할 수도 있다는 것 입니다.).저희가 다룰 갤럭시S3는 시스템 파일을 잘못건드려서 벽돌상태가 되어도 오딘(Odin)이라는 프로그램을 이용하여 쉽게 복구할 수 있으니 이러한 부분은 걱정마세요.</p>
<p>하지만, 루팅후에는 일부 앱(특히 금융관련 앱)을 사용하지 못하게 될 수 있으니 주의 바랍니다.</p>
<p>#어떻게 할까?</p>
<p>루팅의 방법에는 흔히 Super SU, Magisk 등이 있는데요. Magisk는 안드로이드 5.0 이상부터 지원하지만 갤럭시S3의 최종 안드로이드 버전은 4.4.4이므로 우리는 Super SU를 이용할 것 입니다.</p>
<p>이제, 아래의 안내에 따라주세요.</p>
<p>1. 파일준비하기</p>
<p>아래의 파일들을 받아주세요.</p>
<table   ><tbody><tr><td   height="1"></td><td  height="1"></td><td   height="1"></td></tr><tr><td  ></td><td ><!--quote_txt--><p>Super SU (<a href="https://drive.google.com/open?id=0BwC_ZR5iVkVfZ1pQYzNjdkxYQ1U">다운로드</a>)</p>
<p>Philz Touch&nbsp;(<a href="https://drive.google.com/open?id=0BwC_ZR5iVkVfT1p1ZVVPdHhrYWc">다운로드</a>)</p>
<p>Odin &nbsp;(<a href="https://drive.google.com/open?id=0BwC_ZR5iVkVfVFZzYlRsU0tVQVk">다운로드</a>)</p>
<p>삼성 통합 USB드라이버 (<a href="http://local.sec.samsung.com/comLocal/support/down/kies_main.do?kind=usb">다운로드</a>) *PC에 설치되지 않은 경우, 설치하시길 바랍니다.</p>
<!--/quote_txt--></td><td  ></td></tr><tr><td   height="1"></td><td  height="1"></td><td   height="1"></td></tr></tbody></table></blockquote><p>Super SU파일을 압축을 풀지 말고 갤럭시S3에 옮겨주시고, 나머지 파일들은 PC에 저장합니다.</p>
<p>PC에 삼성 통합 USB드라이버가 설치되어 있지 않을경우, 설치합니다.</p>
<p>#다 받았어.</p>
<p></p>
<p>2.다운로드모드 진입하기</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfNjEg/MDAxNDk0NTkyNTEzOTM2.GLPFu-S-xAb7SXKUhBPz8MfiYfB7xu57cdnZvWGEHX4g.ZBesXaFsUzgcXh3G7BSgAK5Ss7rfBAiWKqTngcEo5UIg.JPEG.5755084/KakaoTalk_20170512_205433052.jpg?type=w740">전원을 끈 상태에서 볼륨 하키, 홈키, 전원키를 동시에 길게 눌러줍니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMTkg/MDAxNDk0NTkyNTE0MzI4.ROFKxFgawoPr1rIRHSSMC6keLdwAnoGvO0uTOFOPsyEg.K8c01XCVvKmxpr3v_cQ2J6J0TBKCDsJMtKVSys8ltn4g.JPEG.5755084/KakaoTalk_20170512_205446911.jpg?type=w740">그러면 이런화면이 뜨는데, 여기서 볼륨 상키를 눌러줍니다.<img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfNTEg/MDAxNDk0NTkyNTE0NTEw.79sZ_rGzQclGmJS3aoQmfbnY-Mv5z6R3_YkmcWkFv40g.8YAb-7PzNbhi4Wl5mF3QY9he7K-kEEPoE6LFFKvQgHAg.JPEG.5755084/KakaoTalk_20170512_205442973.jpg?type=w740"></p>
<p>다운로드모드 진입이 완료되었습니다.</p>
<p>#계속해.</p>
<p></p>
<p>3.기기간 연결 및 오딘 실행하기</p>
<p>먼저, 폰을 PC에 연결해주세요.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMjIz/MDAxNDk0NTk1NjY1MjYw.8pkjYwYzlVDzvLmdiH1CV-xxrpbk46ulB4I8XaUOfgIg.dcY7Mh2Y-u33w0Ft4NM71NC7JaqXWUVinyM7-DyOQrgg.JPEG.5755084/KakaoTalk_20170512_222617312.jpg?type=w740">이렇게 정상적으로 연결하셨다면,</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMjY4/MDAxNDk0NTk1NjY1NTI5.VdUdv0ZLEDCCso2en_BeQXjS_-MGdNKJfxGy6GP0mDcg.tJfID0V0126ZVbUAIpIxDVEqOAYJi8N-MxrIeiPGx2Ig.JPEG.5755084/%EC%98%A4%EB%94%981.jpg?type=w740"></p>
<p>오딘의 Log창에 Added!!라는 문구가 출력됩니다.</p>
<p>4. 커스텀리커버리 플래싱하고 재부팅 하기</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfNjkg/MDAxNDk0NTk1ODU2NDc5.b6hPAYokS57d8Wq7iTaxO3o9x24-ENg2ggIu3WC1iVAg.3vwMOyy5vp_uCm8MP8H108PoCHyUsNFzChaskD_wqmog.JPEG.5755084/%EC%98%A4%EB%94%982.jpg?type=w740"></p>
<p>붉게 표시된 AP버튼을 누른 후, philz touch파일을 불러옵니다. (philz_touch_6.41.6-i9300_external_sd_fixed_unofficial.tar)</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMjEx/MDAxNDk0NTk2MjI0Njkz.BSOxVJM5EiUoRc92eic0fquGgyhpMPPDV1TrSYDkpU4g.7exo36oidtOXbn06Q8Oc3teol99etO3VEq4_m0eT7PAg.JPEG.5755084/%EC%98%A4%EB%94%983.jpg?type=w740"></p>
<p>좌측의 Options에서 Auto Reboot을 해제해주시고, Start버튼을 눌러줍니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMTcz/MDAxNDk0NTk2NTE0Mjgx.65nP4_zAZO_7ATXRb6SlFA6or-kWWoY0S_OYBtAQGPAg.4pI_bUQVQghtjhQSK8o-IGVZm195ZPTC3IPSNRmFCnwg.JPEG.5755084/KakaoTalk_20170512_223944666.jpg?type=w740"></p>
<p>잠시 기다리면 폰에도 상태바가 생기고,&nbsp;</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMTE1/MDAxNDk0NTk2NjQyNTIx.jU69U36mWIx4iXGMzC6GSSCis_f-aLqxk9U-YK7VyXog.w62BEpC14TA-WwXhpftxipZTqnQyexOFUd4pkGxPKyYg.JPEG.5755084/%EC%98%A4%EB%94%984.jpg?type=w740"></p>
<p>오딘에서도 PASS!라는 메시지가 출력됩니다. 이렇게 커스텀리커버리를 설치했습니다.</p>
<p>폰이 안켜진다고 하시는 분들이 있을텐데, 침착하시고 전원키를 아주 길게 눌러 재부팅하시면 됩니다.</p>
<p>#마침 물어보려던건데, 고마워. 자, 이제 다음엔 뭘하면 되지?</p>
<p></p>
<p>5. 리커버리 모드로 부팅한 후 Super SU플래싱하기</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMTY1/MDAxNDk0NTk4NTc3Njc5.zos2DWIWXuTiVsO3osm9NiqQUYVnwsboLWl21p4KkRsg.LArnwtJOHYfdFib04PaHNiwUyOymZizc2npOxIch8EMg.JPEG.5755084/%EB%A6%AC%EC%BB%A4%EB%B2%84%EB%A6%AC.jpg?type=w740"></p>
<p>다시 전원을 종료하고, 이번에는&nbsp;전원을 끈 상태에서 볼륨 하키, 홈키, 전원키를 동시에 길게 눌러줍니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMjAx/MDAxNDk0NTk5MjYxMzU0.W6z_IYgd0fmKluezLm3AaFr69MkaCOwa7zGOmsAY3aIg.kcpAtek1v9SKNbkQWsnweOVIKpwbZd_eZm7OhFOBobYg.JPEG.5755084/KakaoTalk_Moim_4yg3L3xToxmmFPKeBtPuGufzioL9GF.jpg?type=w740">그러면 이런 화면이 나오는데, 총 3가지의 조작법이 있습니다.</p>
<p>1. 볼륨 상/하로 이동, 전원키로 선택</p>
<p>2. 그냥 터치</p>
<p>3. 하단바 터치(아래/위/취소/확인 순)</p>
<p>#잘 안보이는데?</p>
<p>&nbsp;화면을 확대합니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMTc0/MDAxNDk0NjAwMjM1NTAw.6QSlKAYIEuUTYS-KsYxCowEpVqCUIH-CSrWf-X1DeyYg.ln7P8pg3pXgGjpEhCZtCbgf1n9cA-5raQq_Kg3_5i9og.JPEG.5755084/KakaoTalk_Moim_4yg3L3xToxmmGiR9pVzjVA0HJa2j50.jpg?type=w740">방금 소개해드린 조작법중 편한대로 조작하시면 됩니다.</p>
<p>Install Zip을 선택해줍니다.<img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMTY0/MDAxNDk0NjAwMjM1ODE0.1PAAhUo7MDrh9i4ApSVvH-MWfcNxu9Ipm_jik8Q8-Sog.Ji2OgEyeB4XJDxKLkOYuW4YXPnE09HkUnGbs8-URq3Qg.JPEG.5755084/KakaoTalk_Moim_4yg3L3xToxmmGiR9pVzjVA0HJa3GkG.jpg?type=w740">메뉴는 많지만,&nbsp;첫 번째와 두 번째만 보시면 됩니다. 첫 번째는 내장메모리에서, 두 번째는 외장메모리에서 zip파일을 탐색하는것 입니다. 저는 내장메모리에 저장했으니 첫 번째를 선택하겠습니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMTU3/MDAxNDk0NjAwMjM2NjM3.YmQIECmFOGCRQ3Dy8I7xVszUyUQW59q7c4ZNCch7oiAg.Z8dXMsK4D_QDhLA8iS6mpMi8I-V_1W5CfIGtfmsBTPQg.JPEG.5755084/KakaoTalk_Moim_4yg3L3xToxmmGiR9pVzjVA0HJa5BGa.jpg?type=w740">Super SU 파일을 찾아 선택해 줍니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMTkg/MDAxNDk0NjAwMjM2ODM1.-8e3F9SJrAROakWNbCO7ixNoq9W3Xt1kFGPJw9imOqsg.b8UgfyHQFqNDcOTOr4chrsZ3vpibeqf3Lcs7QN-D3lwg.JPEG.5755084/KakaoTalk_Moim_4yg3L3xToxmmGiR9pVzjVA0HJaahvY.jpg?type=w740">Yes를 눌러줍니다.<img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMSAg/MDAxNDk0NjAwMjM3MDY0.gnR1gxIMp69Gax3aoTWilPYNTaeYPSDVN3U0EkkI6c4g.Q_tVs84Nhi5gCEaMlK1d6-_S_1VovYACyYfa08ATGMAg.JPEG.5755084/KakaoTalk_Moim_4yg3L3xToxmmGiR9pVzjVA0HJacKXw.jpg?type=w740">잠시 기다리면 작업이 완료됩니다. 아무곳이나 눌러 계속할 수 있습니다.<img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfNDgg/MDAxNDk0NjAwMjM3Mzk5.vH8zt45WKgKjrfatOIyYaInNfjPxmKOIyYDxhXrdN6kg.vUqTBrqoqYoy8lVSuKpPhdvvs1IyqjZ3lUWQftEAUdog.JPEG.5755084/KakaoTalk_Moim_4yg3L3xToxmmGiR9pVzjVA0HJae8cW.jpg?type=w740">초기화면으로 돌아와 Reboot System Now를 선택합니다.</p>
<p>#이제 축소해도 될 것 같아.</p>
<p>화면을 축소합니다.<img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMiAg/MDAxNDk0NjAwMjM3Njgz.Moy4jZrWV6MobDabX9JR2olsusepXscyWNqH2ZEZrpEg.YautcIUrCKxcXOSHUW2lvWE-vabCCPMv55LPjooInpUg.JPEG.5755084/KakaoTalk_Moim_4yg3L3xToxmmGiR9pVzjVA0HJag3yq.jpg?type=w740">잠시 커피 한 잔의 여유를 갖고 오시면 됩니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMTQ2/MDAxNDk0NTk5MjYzMDA0.yG4LQFZn8QBOQfGZJbGqLDD8qqPkH8axzv9ML9M21SIg.A_peayhOOIBsbWX4kwMGt2h0ylDFDQaakfeh0N8N3Ywg.JPEG.5755084/KakaoTalk_Moim_4yg3L3xToxmmFPKeBtPuGufzioWqIN.jpg?type=w740">못보던 앱인 Super SU:가 설치되어 있습니다.<img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfNjEg/MDAxNDk0NTk5MjYzMjMx.L1dL-eZVUGcdu2X4MS1M-_hWefWNl1JEhp1Xc62m8DUg.1JQKwR42CpgPZQ5ZyBa_9IyqsjqYNhj-0Tt1WFe7pDog.JPEG.5755084/KakaoTalk_Moim_4yg3L3xToxmmFPKeBtPuGufzioY51v.jpg?type=w740">초보자인지, 숙련자인지 묻는 화면입니다. 저는 숙련자를 택했지만, 처음이시라면 초보자(첫 번째 버튼)을 선택해주세요.<img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMjg4/MDAxNDk0NTk5MjYzNDE3.VRhMUPtqbhyk-kCKOMPitAHSuf1OBYV2JH_1RHy7s3Eg.iLEkAhX48KW7FCAY5RK2gwlwxSQU6sKsQKliaozYLvIg.JPEG.5755084/KakaoTalk_Moim_4yg3L3xToxmmFPKeBtPuGufzip0Pwl.jpg?type=w740">Knox를 비활성화 하는지 물을텐데, 비활성화 해주시면 됩니다.<img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMjYw/MDAxNDk0NTk5MjYzNjE4.yqaDDeaJj0ACVHL1DC3KUAHvhQZyqTM_zl9oSf1Ki3kg.4yh6wE_y7MKKBrtGFXxdo8Q3REqA8AkKwB0kv2cfJNcg.JPEG.5755084/KakaoTalk_Moim_4yg3L3xToxmmFPKeBtPuGufzip2cLL.jpg?type=w740">Knox와 유리와 커플의 공통점은 언젠가 깨진다는것 입니다.<img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfMTI1/MDAxNDk0NTk5MjYzODU1.Ye9VL0515ZFNp6f7_f-KHWnxQLqDF4OLUJId_HlFyOgg.4Fl4tesRlo1z2XtHKLfo0IvLtPXz-N5YgcoZhbS4AIcg.JPEG.5755084/KakaoTalk_Moim_4yg3L3xToxmmFPKeBtPuGufzip4Gdj.jpg?type=w740"></p>
<p>이렇게 루팅이 완료되었습니다.</p>
<p>#와, 이제 루팅 앱들 쓸 수 있는거야?</p>
<p>&nbsp;그렇습니다. 자세한 사용방법이 알고 싶으신건가요?</p>
<p>#알고싶어!</p>
<p>안고싶어에 대해 검색합니다.</p>
<table   ><tbody><tr><td   height="1"></td><td  height="1"></td><td   height="1"></td></tr><tr><td  ></td><td ><!--quote_txt--><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTJfOTcg/MDAxNDk0NjAxMTMyMDQz.KRppNZhzl7cAaSLbebNLquj0SSRiPn9GV7PQ7k5gYTAg.SGrx-S3V3pCL-6D3MWm41lQyY4qMEx4-9wbJ0bmBJPUg.JPEG.5755084/movie_image.jpg?type=w740"></p>
<p>안고 싶어 (Want To Hold, 2014)</p>
<p>드라마, 멜로/로맨스122분 | 일본 |&nbsp;시오타 아키히코</p>
<p>네티즌 평점:★★★☆☆ 6.33</p>
<p>Powered By 네이버 영화</p>
<!--/quote_txt--></td><td  ></td></tr><tr><td   height="1"></td><td  height="1"></td><td   height="1"></td></tr></tbody></table></blockquote><p>#알.고.싶.어.</p>
<p>루팅앱 사용에 대해 알아봅니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTNfMjgy/MDAxNDk0NjAxNTg5MDM4.fLPlh3TM4epqeGF-nz5YqeGjp8ozxEQW5jKb33nrxW8g.PWeCkJykV76LZq_Z_XAnrZdemxEGSkdUfZ_cwWmJDSAg.JPEG.5755084/KakaoTalk_20170513_000218714.jpg?type=w740">대표적인 루팅앱, Root Explorer(루트 익스플로러)입니다.</p>
<p>루트 익스플로러는 시스템 파일에도 접근할 수 있도록 해주며, 이것을 적절히 활용하면 꽤 많은 장난질을 할 수 있습니다. 자세한 내용은 3교시에서 다룹니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTNfMTkg/MDAxNDk0NjAxNTg5Mjc5.afdHVQsapYoLfkOsQDDOKV57l2GrIb8WFDTVPNxgcK0g.tF786WYVmzHma0upq_cDgpxqCa_0RRM8Bg76_tGDyDog.JPEG.5755084/KakaoTalk_20170513_000219968.jpg?type=w740">잘 보이시죠?</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTNfMjE3/MDAxNDk0NjAxNTg5NzE5.Sl8wctfd9jyeCQsg57JmpRzmURdRCum7Ht6WMMUxY38g.IyVKAHRC63OEUA1nre-lWR5LPOMSV3FONtMSjYqlPogg.JPEG.5755084/KakaoTalk_20170513_000223363.jpg?type=w740">시스템 폴더에 접근하면 최초1회에 한하여(다음에도 묻기를 체크하지 않았다면) 루트권한을 요청합니다. 여기서 루트권한을 허용하면 됩니다.&nbsp;<img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA1MTNfMTk1/MDAxNDk0NjAxNTg5OTQ0.oEW_obCnKLJ98qblAS-0TpACfsySGkj4Y31Q_JQYKLog.YmJnqVDjfUuH06wfMWvlIjXGD1LigTNV3dVpTFG-qVMg.JPEG.5755084/KakaoTalk_20170513_000226910.jpg?type=w740"></p>
<p>이제, 즐겁게 놀면됩니다.</p>
<p>앞서 이야기 했듯이, 자세한 내용은 3교시에 다루도록 하겠습니다.</p>
<p>#이제 1교시 끝이야?</p>
<p>그렇습니다. 수고하셨습니다. 다음 강의에서는 커스텀롬에 관한 내용을 다루도록 하겠습니다.</p>
<p>-----</p>
<p>참고자료</p>
<p><a href="http://terms.naver.com/entry.nhn?docId=3573360&amp;cid=59088&amp;categoryId=59096">http://terms.naver.com/entry.nhn?docId=3573360&amp;cid=59088&amp;categoryId=59096</a> (루팅의 정의)</p>
<p>파일출처</p>
<p><a href="http://cafe.naver.com/develoid/640706">http://cafe.naver.com/develoid/640706</a> (갤럭시S3용 philz 리커버리 파일)</p>
<p><a href="http://odindownloader.com/download/odin3-v3-12-5">http://odindownloader.com/download/odin3-v3-12-5</a> (Odin 파일)</p>
<p><a href="http://www.supersu.com/download">http://www.supersu.com/download</a> (Super SU 파일)</p>
</p>
