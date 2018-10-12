---
layout: post
title:  "ADB 파일 복사(Copy&Paste)"
date:   2018-09-28 00:00:00 +0900
author: SiRyuA
categories:
- Android
tags:
- Android
- Adb
- Copy
- Paste
---

## adb 로 파일 복사
MTP 등의 기기 통신을 이용해서 파일 주고받기가 힘들 경우 등 일반적으로 사용하는 방법이 힘들다면, adb pull / adb push 커맨드를 이용하여 파일 복사가 가능합니다.


## 주의사항
1. **개발자 옵션** 에서 **ADB 디버깅** 이 활성화 되어있어야 합니다.
 * 개발자 옵션은 **설정 > 휴대전화 정보 > 빌드번호** 를 7번 이상 클릭하면 나타납니다.


## 명령어 : 안드로이드 기기에서 PC로 파일 복사
~~~~
$ adb pull "안드로이드 기기 경로 파일" "PC 경로"
~~~~
* 예시
~~~~
$ adb pull /sdcard/log.txt .
~~~~


## 명령어 : PC에서 안드로이드 기기로 파일 복사
~~~~
$ adb push "PC 경로 파일" "안드로이드 기기 경로"
~~~~
* 예시
~~~~
$ adb push recovery.zip /sdcard
~~~~


## 참조
* [Android Developer > Android 디버그 브리지](https://developer.android.com/studio/command-line/adb?hl=ko)
