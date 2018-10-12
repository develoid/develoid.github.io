---
layout: post
title:  "ADB 재부팅 하기(Reboot)"
date:   2018-09-28 00:00:00 +0900
author: SiRyuA
categories:
- Android
tags:
- Android
- Adb
- Reboot
---

## adb reboot
adb reboot 커맨드를 이용해서 System, Recovery, Bootloader 등의 상태로 기기 재시작이 가능합니다.


## 주의사항
1. **개발자 옵션** 에서 **ADB 디버깅** 이 활성화 되어있어야 합니다.
 * 개발자 옵션은 **설정 > 휴대전화 정보 > 빌드번호** 를 7번 이상 클릭하면 나타납니다.


## 명령어 : 일반 시스템(System) 재부팅
~~~~
$ adb reboot
~~~~


## 명령어 : 리커버리모드(Recovery Mode) 재부팅
~~~~
$ adb reboot recovery
~~~~


## 명령어 : 부트로더(Bootloader) 재부팅
~~~~
$ adb reboot bootloader
~~~~



## 참조
* [Android Developer > Android 디버그 브리지](https://developer.android.com/studio/command-line/adb?hl=ko)
