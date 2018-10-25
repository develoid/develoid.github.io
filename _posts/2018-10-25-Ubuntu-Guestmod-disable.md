---
layout: post
title:  "우분투 게스트모드 비활성화"
author: SiRyuA
categories:
- Linux
tags:
- Linux
- Guestmod
- Command
---

### Terminal 사용되는 명령어 입니다.

# 게스트모드 비활성화
1. 터미널에 아래와 같이 입력
~~~
sudo gedit /usr/share/lightdm/lightdm.conf.d/50-ubuntu.conf
~~~
2. 아래 문구 추가 후 저장
~~~
allow-guest=false
~~~
