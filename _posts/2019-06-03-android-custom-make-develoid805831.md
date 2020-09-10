---
layout: post
title: '[커뮤니티] APK 디컴파일 / 컴파일 방법'
author: 'NVME'
categories: Android-Custom-Make
tags:
- Android
- Custom
- Make
-
---


<script> location.href='https://cafe.naver.com/develoid/805831' ; </script>

<p></p>
<p>* 본 글로 인하여 발생한 문제는 작성자가 책임 지지 않습니다.</p>
<p></p>
<p>안녕하십니까? 코어입니다.</p>
<p>바로 시작하겠습니다.</p>
<p>기본 프로그램 설치!</p>
<p></p>
<p>먼저, apk managers라는 프로그램을 가지고, 강좌를 할건데요. 프로그램을 설치해야겠죠?</p>
<p>그 전에, JDK를 설치하여야 합니다.</p>
<p><a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk9-downloads-3848520.html">http://www.oracle.com/technetwork/java/javase/downloads/jdk9-downloads-3848520.html</a>&nbsp;</p>
<p>이 링크에서 동의 후 설치하시면 됩니다.</p>
<p>이제 Apk Managers를 설치해봅시다.</p>
<p><a href="http://softdx.kr/220791587177">http://softdx.kr/220791587177</a>&nbsp;여기서 설치하신 후 아무 경로에나 압축을 풀어주세요.</p>
<p>압축을 푼 후 apk managers 폴더에 들어갑니다. 여기서 중요한 것은&nbsp;</p>
<p>framework-res.apk와 twframwork-res.apk 이 두가지 파일이 필요합니다.&nbsp;</p>
<p>되도록이면 개인 핸드폰에서&nbsp;/system /framework 경로에 진입하셔서, 뽑는 것을 추천드립니다.</p>
<p></p>
<p>디컴파일러의 시작!</p>
<p></p>
<p>자 그럼 이제 사진으로 진행하겠습니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzEyMzFfMjI2/MDAxNTE0NzEwNzM2NTUx.9ekvNH4VcJIegrHh4s7D3yBIjW849VE-tCOg9loDD5Ig.LgjJ1Z3qgRIwCwOC7eOcCzA4SgYnPW516hiJBCoSaqwg.PNG.uuuuu1226/1.PNG?type=w740">&nbsp;</p>
<p>apk manager 폴더에 진입하면, 이렇게 뜹니다.</p>
<p>여기서 place-res-apk-here-to-install에 들어가셔서, 아까 준비한&nbsp;framework-res.apk와 twframework-res.apk&nbsp;이 두 개의 파일을 넣어주시고, 다시 apk manager 폴더로 갑니다. 그리고, 이번에는 Script.cmd를 실행 시킵니다.</p>
<p>실행 시켜서, 77을 입력하세요.</p>
<p>그리고, Enter 키를 눌르시면, 두 가지 프레임워크 파일이 보이는데, 이 때 여기서 1을 눌러,&nbsp;프레임워크를 설치합니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzEyMzFfMjk5/MDAxNTE0NzExMDYzNjY5.MU5a2pUTlsuAH8WU5hBgvZHaN8dFpzGst3CJFxPRLdkg.Vi8pZKcdtnsLbu6-eifalIFiebVC0L8aYyEydB-SnC4g.PNG.uuuuu1226/3.PNG?type=w740">&nbsp;</p>
<p>이렇게 뜨시면 정상입니다. 이 방식 그대로~ twframework-res.apk를 설치해주시면 됩니다.</p>
<p>이제 디컴&amp;컴파일러의 준비는 모두 끝났습니다.</p>
<p>디컴할 앱(apk 확장자)를 place-apk-here-for-modding 폴더에 넣습니다.</p>
<p>이제&nbsp;Script.cmd 메인 화면으로 가서,&nbsp;22 명령어를 적고, Enter 키를 눌러주세요.&nbsp;</p>
<p>그럼 아까 넣은 디컴할 앱 이름.apk가 옆의 숫자로 진열되어있을텐데요. 첫번째 파일을 디컴한다고 칩시다.</p>
<p>그럼&nbsp;1을 선택한 후에 Enter 키를 누르면 다시 메인으로&nbsp;갈겁니다.</p>
<p>이 때,&nbsp;명령어 9를 눌러서, 디컴을 하시면 됩니다.</p>
<p>디컴이 완료되면,&nbsp;Project 폴더에 있을 것 입니다.</p>
<p></p>
<p>JAR 파일 디컴 방법!</p>
<p></p>
<p>jar 파일 디컴 방법도 알려드려야 하네요.&nbsp;</p>
<p>jar 파일은 더 쉬워요! 일단&nbsp;apk manager 폴더에 제 dir를 만들어야 합니다.</p>
<p>dir 이름을&nbsp;place-jar-here-for-modding이라고 하셔서 만듭니다.</p>
<p>그리고, 디컴할 jar 확장자 파일을 그 폴더에 넣습니다.</p>
<p>그 후,&nbsp;Script.cmd에 가셔서 명령어 70을 적고,&nbsp;Enter 키를 누릅니다.</p>
<p>그럼&nbsp;선택 칸에 진입하는데, 거기서&nbsp;디컴할 파일의 우선순위 번호를 입력하고,&nbsp;Enter 키를 누르시면 다시, 메인으로 옵니다.</p>
<p>이 때는, 명령어&nbsp;9가 아닌 71을 적고,&nbsp;Enter 키를 눌러 디컴하셔야 합니다.&nbsp;</p>
<p>디컴이 완료되면,&nbsp;아까와 같이&nbsp;Project 폴더에 있을 것 입니다.</p>
<p></p>
<p>그럼 또 컴파일도 해봐야겠죠?</p>
<p>컴파일은 디컴보다 약간 어렵습니다.&nbsp;이유는 오류 때문이죠.&nbsp;물론, 잘 수정할 경우에는 오류가 없겠지만요.</p>
<p>일단 디컴을 한 방식과 비슷하니 그래도 오류만 빼면 쉽습니다.</p>
<p>자 그럼 해보겠습니다.</p>
<p>일단 아까와 같이, Script.cmd 메인 화면에서&nbsp;명령어 22를&nbsp;적고,&nbsp;Enter Key를 눌러,&nbsp;앱 선택 칸에 진입합니다.</p>
<p>진입 후, 아까 디컴한 앱을 선택한 후, 번호를 적은 다음, Enter 키를 누르면, 다시 메인으로 갑니다.</p>
<p>이 때는&nbsp;11를 눌러서,&nbsp;컴파일을 시도합니다.</p>
<p>만일 22 오류가 뜰 경우에는 apk manager 폴더에 log.txt를 참고해서 수정하신 후 다시 컴파일하시면 되겠습니다!</p>
<p></p>
<p>JAR 파일 컴파일 방법!</p>
<p>일단 아까와 같이, Script.cmd 메인 화면에서&nbsp;명령어 70을&nbsp;적고,&nbsp;Enter Key를 눌러,&nbsp;파일&nbsp;선택 칸에 진입합니다.</p>
<p>진입 후,&nbsp;아까 디컴한 파일을 선택한 후,&nbsp;우선순위 번호를 적은 다음, Enter 키를 누르면,&nbsp;다시 메인으로 갑니다.</p>
<p>이 때는&nbsp;74를 눌러서,&nbsp;컴파일을 시도합니다.</p>
<p>아까와 같이, 만일 22 오류가 뜰 경우에는 apk manager 폴더에&nbsp;log.txt를 참고해서 수정하신 후 다시 컴파일하시면 되겠습니다!</p>
<p>그럼,&nbsp;마치겠습니다. ^^</p>
<p>감사합니다.</p>
<p><p >코어의 IT 세상</p>
<p >-----------------------------------------------</p>
<p >&nbsp;연락처 [ 협찬 및 제휴 문의 ]&nbsp;: uuuuu1226@naver.com</p>
<p >-----------------------------------------------</p>
<p >Copyright©코어넷. All rights reserved.</p>
<p>&nbsp;</p>
</p>
