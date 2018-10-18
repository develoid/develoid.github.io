---
layout: post
title:  "ADB 이용하여 화면 기록하기(Screencap&Record)"
author: SiRyuA
categories:
- Android
tags:
- Android
- Adb
- Screen
---

## adb 로 화면 기록하기
간혹 버그 피드백을 해야되지만, 앱 제작자가 인위적으로 막아놓아서 스크린샷 촬영 및 화면 녹화가 진행이 불가능하여 피드백 과정이 힘든 경우가 있습니다. 이때 adb shell 커맨드를 통해서 스크린샷 및 화면 녹화를 진행할 수도 있습니다.


## 주의사항
1. **개발자 옵션** 에서 **ADB 디버깅** 이 활성화 되어있어야 합니다.
 * 개발자 옵션은 **설정 > 휴대전화 정보 > 빌드번호** 를 7번 이상 클릭하면 나타납니다.


## 명령어 : 스크린샷 촬영
~~~~
$ adb shell screencap /sdcard/screen.png
~~~~


## 명령어 : 화면 녹화
~~~~
$ adb shell screenrecord /sdcard/screen.mp4
~~~~


## 참조
* [Android Developer > Android 디버그 브리지](https://developer.android.com/studio/command-line/adb?hl=ko)
