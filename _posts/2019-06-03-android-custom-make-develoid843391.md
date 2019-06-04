---
layout: post
title: '[툴] 누구나 쉽게 사용할 수 있는 디/컴파일 툴 - APK Easy Tool'
author: '글작성자'
categories: Android-Custom-Make
tags:
- Android
- Custom
- Make
-
---


<script> location.href='https://cafe.naver.com/develoid/843391' ; </script>

<p>|&nbsp;APK 파일의 디컴파일이란?</p><p>&nbsp;&nbsp;</p><p>앱 모딩을 위해서, 또는 앱을 개발하는 데 참고하고 싶어서 APK 파일을 종종 읽고 수정해야 할 경우가 있다.<b></p><p>그러나 APK 파일 내부의 소스코드를 얻기 위해 아무 작업 없이 열면 대부분의 소스코드가 깨져있을 것이다.</p><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMzFfMTE3/MDAxNTQ4OTQxMDk3MTI3.VMoGPa5LBTWSU9Y7oqG2tOryKcVULN6h09b6553uN8Qg.nOD8HRpJsEGmNChrI3WYaaysYg8wnMS_1PHsTh63Goog.PNG.hsm8hsm8/%EC%9D%B4%EB%AF%B8%EC%A7%80_001.png?type=w740"><b></p><p>이는 안드로이드에서 달빅이 인식할 수 있도록 class 파일과 같은 파일들을 바이트 코드로 변환하기 때문인데, 이유를 설명하기에는 글이 너무 길어지므로 <a href="https://wanzargen.tistory.com/10">자바의 컴파일에 대한&nbsp;설명</a>이나 <a href="http://blurayha.blog.me/110178160957">APK의 구조</a>를&nbsp;참고하도록 하자.<b></p><p>따라서 코드 난독화가 되지 않았다면, 우리는 디컴파일을 통해 어느 정도 소스를 읽고 수정할 수 있다.</p><p>디컴파일링을 하기 위해 사용할 수 있는 툴은 많다.</p><p>아마 제일 많이 쓰이는 툴은 APK Manager이 아닐까 싶다.</p><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMzFfMTUy/MDAxNTQ4OTQyNzM0NTc3.wf0K8nUpYDw8xvRzqQ8J5jbDBXg0Hrj0FGSxo0qf87sg.vM1dQ87E9Nu2oC8kKiP1cXY-xUpTMwEa6ZwEJd6mDCsg.PNG.hsm8hsm8/%EC%9D%B4%EB%AF%B8%EC%A7%80_002.png?type=w740"><b></p><p>그러나 APK Manager은 블로그에서 공유가 되어 APK Manager의 디/컴파일을 할 때 사용되는 Apktool 업데이트가 제대로 되지 않고 에러가 발생해도 원인을 알기 어렵다.</p><p>그래서 에러(21번)를 해결을 못 해 다른 툴을 알아보다 찾았던 프로그램이 이번에 소개할 APK Easy Tool 이다.</p><p>&nbsp;</p><p>| APK Easy tool를 사용하기 위한 준비</p><p>일단 시작하기 전에 우리는 Java SE가 필요하다.</p><p>Java SE의 최신 버전은 Apksigner을 지원하지 않으므로 하단의 주소에서 자바 8을 다운로드 받아야 한다.<b></p><p>
        <p>
                          <p>
                        <p>Java SE Development Kit 8 - Downloads</p>
                        <p>Overview Downloads Documentation Community Technologies Training Java SE Development Kit 8 Downloads Than..</p>
                        <p>www.oracle.com</p>
                </p>
                <a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html"></a>
        </p>
</p><b><b></p><p>혹시나 어떻게 다운로드 받아야 하는지 모르면 사진을 참고하자.</p><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMzFfMjYg/MDAxNTQ4OTQ1MzQxOTk4.fkKhzq1YO_Wh38TGY0QEP8NQQhBA3HECQdx5FsYq5n4g.rhZif5TESr3m76OgDJa7TUx8QbifpLp87GSSOM8D51Mg.PNG.hsm8hsm8/%EA%B7%B8%EB%A6%BC2.png?type=w740"><b></p><p>Windows x86이 32비트 전용이고, Windows x64가 64비트 전용이다.</p><p>세부 버전은 딱히 상관은 없으므로, 만일에 사이트에 다른 세부버전이 업데이트되더라도 최상단에 있는 버전을 다운로드 받는 것이 좋다.</p><p>그 외에도 .NET Framework 4.6.2 이상이 필요하나, Windows 7 이상에서는 권장업데이트로 설치된다.</p><p>설치가 끝났다면, 이제 APK Easy Tool을 다운로드 받자.</p><p>
        <p>
                          <p>
                        <img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fi.imgur.com%2F95eMIU9.png%22&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;type=f560_336">
                        
                </p>
                <p>
                        <p>[TOOL] APK Easy Tool 1.541 (Windows) (16 sep. 2018)</p>
                        <p>APK Easy Tool in action. Note: Sided log output is only available for higher resolution with 1250 width and above..</p>
                        <p>forum.xda-developers.com</p>
                </p>
                <a href="https://forum.xda-developers.com/android/software-hacking/tool-apk-easy-tool-v1-02-windows-gui-t3333960"></a>
        </p>
</p><b><b></p><p>하단의 Download links 에서 다운로드 할 수 있다.</p><p>Setup.msi/zip 파일은 설치파일로, x86은 32비트, x64는 64비트 전용이며, Portable.zip 파일은 무설치 버전이다.</p><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAyMDFfMTU5/MDAxNTQ4OTQ3Njg3MzQ4.KWv2kwfJjHL48HegPpA6eHzcGq5kaETD-vUlfWBit6Ig.fF-OXxchun8aaUpKnshQBIMpVfsrHKXc1284eCvWG2Ag.PNG.hsm8hsm8/%EC%9D%B4%EB%AF%B8%EC%A7%80_008.png?type=w740"><b></p><p>이 프로그램을 처음 실행했을 때 작업한 파일이나 폴더를 저장할 폴더를 생성할 것인지를 묻는 창이 뜬다.</p><p><b>만일 아니요를 선택하더라도 나중에 옵션에서 따로 설정할 수 있다.</p><p>|&nbsp;Apk Easy Tool로 APK 디컴파일하는 방법</p><p>&nbsp;<b></p><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMTFfMTA3/MDAxNTQ3MjA2MDU2MjQ3.jfzRVlYdXpptYpspTJttz2t91WG7mDC--gjcBczunAkg.Fc0h4UJiFY5DxbHZhvPhcvMbpRcWvmiCVg7CSudgeyMg.PNG.hsm8hsm8/1.png?type=w740"></p><p>전반적인 인터페이스는 Apk Manager 보다 사용하기 편하게 이루어져 있다.</p><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAyMDFfODcg/MDAxNTQ4OTUyMjA3MzUw.QWfksdsy79TQTxXvG6t1fdSLaYCw8NxMECr7j10K64kg.M3qZ5kjhZxdnYrKGheCv84Yl5yVIyBvztIin5BibHSwg.PNG.hsm8hsm8/%EC%9D%B4%EB%AF%B8%EC%A7%80_007.png?type=w740"><b></p><p>세부적인 옵션은 Options에서 설정할 수 있다. 예를 들자면 서명할 때 키파일이 있으면 Signing에서 키를 지정하면 된다.</p><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAyMDFfODQg/MDAxNTQ4OTYwNzE4MDIx.jEXY4N3Qvy8iILYpivG0jN23BInsfeVAQc3Q-AEndtMg.fkCbGyTFwW09J77mOsv3Cu7ygf7-4TdbdGSt9khNwjwg.PNG.hsm8hsm8/1.png?type=w740"><b></p><p>디컴파일을 하기에 앞서 메인의 우측 상단에 있는 "Sel.APK/JAR"에서 APK 파일을 지정해야 한다.</p><p>그 다음에 Decompile을 누르면 자동으로 디컴파일을 진행한다.</p><p>'The Decompile directory is not set'이라는 경고창이 뜨면&nbsp;Options - General에 있는 Directory에서 'Decompiled APK directory'와 'Compiled APK directory'를 따로 지정해야 한다.</p><p>'Decompile successfully'라는 안내창이 뜨면 디컴파일이 성공적으로 끝난 것이다.</p><p>좌측 하단의 'Decompiled APK directroy'로 해당 폴더의 상위 폴더를 열 수 있다.</p><p>&nbsp;<img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAyMDFfMTc0/MDAxNTQ4OTUzNDg0Njcz.fXDcj-QmcaUP5kIzQC7kMXFUaipTPI-KJrDkI1xCHzQg.o1-_J3kqiciNtD4pzLz8kH2DBR73ExfxsP2d1gf-QBMg.PNG.hsm8hsm8/%EC%9D%B4%EB%AF%B8%EC%A7%80_009.png?type=w740"><b></p><p>해당 폴더로 이동하면 classes.dex 파일이 class 파일로 디컴파일된 후 smali 파일로 변환이 되었고, xml파일들은 읽을 수 있게 변환이 되었음을 알 수 있다.</p><p>&nbsp;<b></p><p>|&nbsp;XML, SMALI 파일의 읽기와 수정</p><p>이제 xml 파일이나 smali 파일에서 소스코드를 깨짐 없이 읽고 마음대로 수정할 수 있다.</p><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAyMDFfMjU4/MDAxNTQ4OTg4ODMzNTM4.EKSLFQp1exu5pIARWnTgbJfIXgvaj5OTW2AXOosiHHUg.qz9L_NjLRDl9JrSZo4E162Z-J8Mv_BuGd6NypFpY61Ag.PNG.hsm8hsm8/2.png?type=w740"><b></p><p>그러나&nbsp;smali 파일이나 xml파일에서&nbsp;복잡한 소스코드의 경우 메모장으로 보는 데 무리가 있으므로</p><p>소스코드를 읽거나 수정하는 것은 Notepad++를 사용하는 것을 추천한다.</p><p>
        <p>
                          <p>
                        <img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fnotepad-plus-plus.org%2Fassets%2Fimages%2Ffolder_download_4.png%22&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;type=f220">
                        
                </p>
                <p>
                        <p>Notepad++ v7.6.3 - Current Version</p>
                        <p>Release Date: 2019-01-27 Download 32-bit x86 Notepad++ Installer 32-bit x86 : Take this one if you have no idea w..</p>
                        <p>notepad-plus-plus.org</p>
                </p>
                <a href="https://notepad-plus-plus.org/download"></a>
        </p>
</p><b></p><p>다운로드를 누르면 32비트용 설치파일이 다운로드되며, 64비트 및 포터블이나 다른 옵션을 찾는다면 하단의 하이퍼링크 중 필요한 파일을 찾아 다운로드하면 된다.</p><p>|&nbsp;Apk Easy Tool로 APK 컴파일 및 서명</p><p>APK 파일을 수정한 후 다시 APK 파일로 다시 만들려면 컴파일이라는 작업을 해야한다.</p><p>컴파일하려면 다시 APK Easy tool을 실행한 후 Compile을 누르면 컴파일을 진행한다.</p><p>APK Manager에서는 그 후 재서명을 해야 하지만 APK Easy Tool 좌측의 옵션을 끄지 않으면 자동으로 서명까지 진행한다.</p><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAyMDFfMTg3/MDAxNTQ4OTYwNzUyNDAz.8mUdEUY4DLFZOnfJ20wyLYPyrs4UDeBVpPto1LihH2Mg.HpCcatPbBxwQ7bhO53nE7BeL0kbxP7D4U55Xt4XE7yYg.PNG.hsm8hsm8/2.png?type=w740"><b></p><p>서명이 무엇인지 모르는 사람이라면 저 옵션을 키는 것이 좋다.</p><p>Compile을 누른 후 'Sign successfully'라는 메시지가 뜨면 컴파일과 서명까지 끝난 것이다.</p><p>다행스럽게도 Apk Manager에서 뜨던 지긋지긋한 에러는 뜨지 않고 제대로 설치도 되었다.</p><p>이제 'Compiled APK directory'를 눌러 서명된 APK파일을 확인할 수 있다.</p><p>그러나 필자는 설치 후 동적 라이브러리(SO 파일)에 있던 해시 검사로 인하여 앱이 열리지 않았다.</p><p>이처럼&nbsp;컴파일 후에도 설치 및 실행이 제대로 될지는 장담할 수는 없을 것 같다.</p>
