---
layout: post
title:  "ADB 로그캣 사용하기(Logcat)"
date:   2018-09-28 00:00:00 +0900
author: SiRyuA
categories:
- Android
tags:
- Android
- Adb
- Logcat
---

## adb logcat 이란?
디버깅에 있어서 가장 기본은 로그를 읽어와서 원인을 분석하는 것입니다. adb는 logcat 명령어를 이용하여 기기 전체의 로그 모니터링 및 특정 이슈(Error, Fatal 등)에 대해서 확인이 가능합니다.


## 주의사항
1. **개발자 옵션** 에서 **ADB 디버깅** 이 활성화 되어있어야 합니다.
 * 개발자 옵션은 **설정 > 휴대전화 정보 > 빌드번호** 를 7번 이상 클릭하면 나타납니다.


## 명령어
~~~~
$ adb logcat
~~~~


## 특정 로그만 출력하기
특정 로그만 출력하고 싶은 경우 logcat 뒤에 추가적인 명령어를 붙여주는 것으로 가능합니다.
~~~~
$ adb logcat *:"명령어"
~~~~
* 명령어 목록
  * V : Verbose <= 가장 낮은 우선순위
  * D : Debug
  * I : Info
  * W : Warning
  * E : Error
  * F : Fatal
  * S : Silent <= 가장 높은 우선순위
* 예시 : 에러만 보기
~~~~
$ adb logcat *:E
~~~~


## 참조
* [Android Developer > Android 디버그 브리지](https://developer.android.com/studio/command-line/adb?hl=ko)
