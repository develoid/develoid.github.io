---
layout: post
title:  "우분투 터치패드 반전시키기"
author: SiRyuA
categories:
- Linux
tags:
- Linux
- TouchPad
- Command
---

### Terminal 사용되는 명령어 입니다.

# 터치패드 반전시키기
1. 터미널에서 gedit 실행
~~~
gksu gedit
~~~
2. 아래의 항목들을 참고해서 입력 후 ".Xmodmap" 란 이름으로 저장
3. 재부팅


# 터치패드 값
* 기본
~~~
pointer = 1 2 3 4 5 6 7 8 9 10 11 12
~~~
* 상하반전
~~~
pointer = 1 2 3 5 4 6 7 8 9 10 11 12
~~~
* 좌우반전
~~~
pointer = 1 2 3 4 5 7 6 8 9 10 11 12
~~~
* 상하좌우반전
~~~
pointer = 1 2 3 5 4 7 6 8 9 10 11 12
~~~
