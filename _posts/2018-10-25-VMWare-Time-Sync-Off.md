---
layout: post
title:  "VMWare 시간 동기화 끄기"
author: SiRyuA
categories:
- IT
tags:
- VMWare
- Time
---

# 시간 동기화 끄기
1. VMWare 설정 파일인 vmx 파일을 텍스트에디터를 통해서 열기
2. 아래와 같은 문구를 찾아서 수정 또는 추가
~~~
tools.syncTime = "FALSE"
time.synchronize.continue = "FALSE"
time.synchronize.restore = "FALSE"
time.synchronize.resume.disk = "FALSE"
time.synchronize.shrink = "FALSE"
time.synchronize.tools.startup = "FALSE"
~~~
3. 가상머신 내 OS 에서 시간 동기화 설정 끄기
