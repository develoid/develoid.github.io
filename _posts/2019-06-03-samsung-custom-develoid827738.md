---
layout: post
title: '[커뮤니티] Knox 부트애니메이션 변경 어플'
author: '이라시타'
categories: Samsung-Custom
tags:
- Samsung
- Device
- Custom
-
---


<script> location.href='https://cafe.naver.com/develoid/827738' ; </script>

<p>경고합니다.</p>
<p></p>
<p>커스텀롬,루팅,Knox 0x1, 커스텀롬 설치후 순정으로 원복한 기기의 경우에는</p>
<p>테스트가 진행되지 않았습니다.</p>
<p>이 건에 관하여는 답글을 달아드리지 않습니다. (모르기때문)</p>
<p></p>
<p>녹스가 살아있는 순정펌웨어에서만 정상작동합니다.</p>
<p></p>
<p><u>** 귀찮아서 백업기능을 구현하지 않았습니다. **</u></p>
<p><u>루팅을 하지 않고 변경이 가능한 어플입니다. (관련 덧글은 답글을 달지 않습니다.)</u></p>
<p><u>삼성페이 정상작동합니다. (Knox 0x0)</u></p>
<p>따라서, 원래의 부트애니메이션으로 원복하기 위해서는</p>
<p>사전에 백업해둔파일을 사용하거나, 휴대전화를 초기화해야합니다.</p>
<p></p>
<p>이 경고문을 숙지하시고 작업을 하시기 바라며 개인의 힘으로 복원이 가능한분만 시도하는것을 권장합니다.</p>
<p>작업하셨다가 생긴 어떠한 문제점도 지원해드리지 않습니다.</p>
<p>이 게시글을 다른곳으로 퍼가실거면, 원문 링크를 기재하여주시면 상관없습니다.</p>
<p><a href="https://cafe.naver.com/develoid/827738">https://cafe.naver.com/develoid/827738</a></p>
<p>발급받는 방법이 적힌 게시글 주소</p>
<p><a href="https://cafe.naver.com/develoid/827758">https://cafe.naver.com/develoid/827758</a></p>
<p>부트애니메이션 다운로드</p>
<p><a href="https://cafe.naver.com/develoid/830611">https://cafe.naver.com/develoid/830611</a></p>
<p>^</p>
<p>새 게시글을 작성했으니 따라하시면 됩니다.</p>
<p>임시 빌드가 올라왔습니다. 확인하셔서 받으시고 다시 시도해보세요.</p>
<p><a href="https://drive.google.com/open?id=1PArQT0uUL2ygbziVimseiWZPWeVkwQeH">https://drive.google.com/open?id=1PArQT0uUL2ygbziVimseiWZPWeVkwQeH</a></p>
<p>API레벨 25이상(안드로이드 8.0, Oreo)&nbsp;이며,&nbsp;삼성 기기일때 지원됩니다.</p>
<p><strike>(사실상 Knox 2.5.0 이상 기기도 지원은 합니다만 어플이 깔릴지 모르겠네요)</strike></p>
<p><a href="https://developer.android.com/guide/topics/manifest/uses-sdk-element?hl=ko">https://developer.android.com/guide/topics/manifest/uses-sdk-element?hl=ko</a></p>
<p>----</p>
<p>친구와 함께 달갑지 않은(?) 통신사 로고를 지우고자</p>
<p>2일만에 개발하게 된 어플입니다.</p>
<p>나와있는대로 대충 만들고 대충해서 올립니다.</p>
<p>높은 완성도를 기대하지 마셔요.</p>
<p>각 휴대폰의 부트애니.qmg파일 원본 가지고 계신분들은 연락을 부탁드립니다..</p>
<p><a target="_blank" title="새창으로 열림">ohmtech.feedback@gmail.com</a>의 메일로 보내주시면 감사하겠습니다.</p>
<p>구글드라이브에 업로드될 예정입니다.</p>
<p>파일은 모든파일을 보내주시는것을 기본으로 하겠습니다.</p>
<p>bootup.qmg, bootloop.qmg, shutdown.qmg, <u>bootup.ogg, shutdown.ogg</u> <u>사운드파일 두개는 있을시에만 보내주세요.</u></p>
<p><u></u></p>
<p>메일 주제는 기기명, 통신사로 해주시면 감사합니다. (자급제라면 자급제라고 적어주시기 바랍니다)</p>
<p>예시 : 갤럭시 노트 FE, KT / 갤럭시 S9, 자급제</p>
<p>구글드라이브에 피드백해주신분의 닉네임을 적어드립니다.</p>
<p>원하시는 닉네임을 적어서 보내주세요. (없을시 메일주소 일부분을 *로 표시하여 적을예정)</p>
<p>Github 링크입니다.</p>
<p><a href="https://github.com/ohm1935/Knox-Bootanimation">https://github.com/ohm1935/Knox-Bootanimation</a></p>
<p>구글드라이브 링크입니다.</p>
<p><a href="https://drive.google.com/open?id=1stP1XxwYpKw_c66ha7zjjrrfcMyxWH08">https://drive.google.com/open?id=1stP1XxwYpKw_c66ha7zjjrrfcMyxWH08</a></p>
<p>작동영상</p>
<p><a href="https://youtu.be/KJY7_IVaogo">https://youtu.be/KJY7_IVaogo</a></p>
<p>개발당시 테스트된 디바이스</p>
갤럭시 노트 FE</blockquote>갤럭시 A8 (2018)</blockquote></p>
<p>아래는 사용법입니다.</p>
<p>----</p>
라이선스키를 변경해서 배포합니다.<p>사용법은 내장메모리 루트에 BOOT_LOGO라는 폴더를 만들어주셔야합니다.</p>
<p>예시 : /internal storage/BOOT_LOGO/~files~</p>
<p>BOOT_LOGO폴더 안에 .qmg 부팅애니 파일을 넣어주셔야합니다.</p>
<p>파일과 폴더의 이름과 대/소문자를 구분합니다.</p>
<p>모든 파일은 예시에 명시된 폴더 안에 위치해야합니다.</p>
<p>*부트애니 시작지점 파일명은 bootup.qmg로 지정되어야 합니다.</p>
<p>*부트애니 루프지점 파일명은 bootloop.qmg로 지정되어야 합니다.</p>
<p>#부트애니 종료지점 파일명은 shutdown.qmg로 지정되어야 합니다.</p>
<p>*@부트애니가 켜질때 소리를 출력하시려면 소리가 나는&nbsp;bootup.ogg파일을 넣어주시면 됩니다.</p>
<p>#@부트애니가 꺼질때 소리를 출력하시려면 소리가 나는&nbsp;shutdown.ogg파일을 넣어주시면 됩니다.</p>
<p>@ 항목</p>
<p>48Khz를 초과하지 않는 Ogg / Ogg Vorbis의 사운드 파일이어야합니다.</p>
<p>사운드를 재생하지 않거나 제거하려면, 공백의 음원파일을 넣어야합니다.</p>
<p>음원파일이 없으면 적용이 되질 않습니다.</p>
<p>* 항목</p>
<p>휴대기기가 켜질때 사용되는 항목입니다.</p>
<p># 항목</p>
<p>휴대기기가 꺼질때 사용되는 항목입니다.</p>
<p>어플이 켜지자마자 기기저장공간 접근여부를 묻습니다.</p>
<p>관리자 모드 활성화를 먼저 눌러주세요.</p>
<p>항목에 동의를 하신다음, 라이선스 활성화를 눌러주세요. 라이선스가 즉시 활성화됩니다.</p>
<p>라이선스 비활성화를 하시면 즉시 라이선스가 비활성화되며 다시 활성화하실수 있습니다.</p>
<p>탭하여 즉시 부트애니메이션 변경 버튼을 누르시면 즉시 부팅애니가 변경됩니다.</p>
<p>소리 재생시간은 50ms가 권장시간입니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODEwMTRfMjgx/MDAxNTM5NDQ0NDUxODI5.f_R-1Z128t6R-JJYREVOvTRfreFOZar-bGyAZ1453iMg.G4KyVbQSeMT6XCx2vreQNgpotFX8p_G5AQIzHmQgigMg.JPEG.ohm08/Knox.jpg?type=w740"></p>
<p>렌더링 이미지입니다. (갤럭시 노트 FE)</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODEwMTRfMjQ0/MDAxNTM5NDQ0NzE4NDMy.FsAdjJ3o0ae9_GEjzvAu6oUK4tI3sv-wqcRbEPvNOQAg.pt6KHdqiNh-RhVSEL_U7ub19xwXd1UaQGUUHjbbmphgg.PNG.ohm08/KnoxRender.png?type=w740"></p>
<p>감사합니다. 궁금하신건 덧글로 적어주시면 시간날때 답변드리겠습니다.</p>
<p>이 글의 소유권은 ohmTech가 소유합니다.</p>
<p>본문 링크를 기재하면 어느곳에나 공유해도 상관없습니다.</p>
<p></p>
<p>다른 피드백이나 무단으로 이 게시글이 사용된것을 보시면</p>
<p>스크린샷같은 증거물이나 사이트의 링크를 <a target="_blank" title="새창으로 열림">ohmtech.feedback@gmail.com</a>으로 메일을 보내주시면 감사하겠습니다.</p>
<p>Knox SDK를 이용한 프로그램입니다. (소리소문없이 사라질수 있습니다..)</p>
