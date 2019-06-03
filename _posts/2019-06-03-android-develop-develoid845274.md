---
layout: post
title: 'Linux에서 adb와 fastboot 설치'
author: 'ilcm96'
categories: Android-Develop
tags:
- Android
- Develop
---


<script> location.href='https://cafe.naver.com/develoid/845274' ; </script>

<div><span>더 깔끔한 글을 보고 싶으시면 아래 링크로 방문해주세요.</span></div><span><a href="https://ilcm96.github.io/2019-01-20/linux-adb-fastboot-setup"><span>https://ilcm96.github.io/2019-01-20/linux-adb-fastboot-setup</span></a></span><div><span>(광고 같은건 없고 방문자 수도 남지 않습니다)</span><b><span></span><div><div><b></div></div><div><span>&nbsp;</span><span>1. Google의 SDK Platform Tools 페이지 방문 후 SDK Platform-Tools for Linux 다운로드</span></div><div><span><a href="https://developer.android.com/studio/releases/platform-tools을">https://developer.android.com/studio/releases/platform-tools을</a> 방문하면 Download 부분에 SDK Platform-Tools for Linux 링크가 있습니다.</span></div><div><span>먼저 그 링크를 클릭해서 다운받은 후 자신이 원하는 장소에 압축을 풀어주세요.</span></div><div><span>필자는 개발과 관련된 모든 것들을 모아 둔 ~/Development/platform-tools에 압축을 풀었습니다.</span></div><div><b></div><div><span>&nbsp;</span><span>2. 어느 폴더에서든 adb와 fastboot를 사용할 수 있도록 .bashrc 파일에 등록</span></div><div><div><span>platform-tools 폴더를 굳이 .bashrc에 등록을 안해도 해당 폴더로 이동 후 ./adb &lt;command&gt;로 adb나 fastboot를 쓸 수는 있지만 다른 폴더에서는 사용이 안되고 ./를 입력하는것도 귀찮으니 등록.bashrc 파일에 등록해 봅시다.</span></div><div><b></div><div><span>gedit ~/.bashrc</span></div></div><div><span><b></span></div><div><span>위 명령어로 .bashrc 파일을 열어준 후 마지막 줄로 이동해서 다음과 같이 입력해 주세요.</span></div><div><span>export PATH=$PATH:adb와 fastboot 파일이 있는 폴더</span></div><div><b></div><div><span>필자는 ~/Development/platform-tools에 adb와 fastboot 파일이 있기때문에 아래와 같이 입력했습니다.</span></div><div><span>export PATH=$PATH:~/Development/platform-tools</span></div><div><b></div><div><span>3. 잘 설치되었나 확인하기</span></div><div><span>단순하게 새로운 터미널을 열어서 adb --version를 입력해서 다음과 같이 adb의 버전과 설치된 경로가 잘 나오면 성공입니다.</span></div><div><b></div><div><span>Android Debug Bridge version 1.0.40</span></div><div><div><span>Version 4986621</span></div><div><span>Installed as /home/ilcm96/development/platform-tools/adb</span></div></div></div>
