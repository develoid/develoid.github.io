---
layout: post
title:  "ADB 앱 비활성화 하기"
date:   2018-09-26 00:00:00 +0900
author: SiRyuA
categories:
- Android
tags:
- Android
- Adb
- Application
---

## ADB 를 이용한 비활성화란?
ADB 같은 경우, 시스템 내에서 삭제가 불가능한 앱에 대해서 비활성화 처리하여 동작하지 않도록 할 수 있습니다. 이를 이용해서 삭제가 불가능한 "제조사 애플리케이션"과 "통신사 애플리케이션" 등에 대해서 비활성화 처리가 가능합니다.


## 주의사항
1. 시스템 내에서 앱이 삭제되는 것이 아니라 비활성화 처리 되는 것입니다.
2. 특정 앱을 비활성화 할 경우 시스템에 문제를 발생하여, 정상적으로 사용이 불가능해질 수 있습니다.
3. **개발자 옵션** 에서 **ADB 디버깅** 이 활성화 되어있어야 합니다.
 * 개발자 옵션은 **설정 > 휴대전화 정보 > 빌드번호** 를 7번 이상 클릭하면 나타납니다.


## 비활성화 방법
1. ADB 연결 확인
~~~~
$ adb devices
~~~~
2. 패키지 리스트 불러오기
~~~~
$ adb shell pm list packages
~~~~
 * 만약 패키지 리스트가 전부다 불러와지지 않는다면 별도의 패키지 명을 확인할 수 있는 앱을 통해서 확인해야됩니다.
3. 비활성화 진행
 * 구버전 ADB
 ~~~~
 $ adb shell pm disable "Package Name"
 ~~~~
 * 신버전 ADB
 ~~~~
 $ adb shell pm hide "Package Name"
 ~~~~
 * 권한 문제가 있을 경우
 ~~~~
 $ adb shell pm uninstall -k --user 0 "Package Name"
 ~~~~


## 활성화(원상복구) 방법
1. ADB 연결 확인
~~~~
$ adb devices
~~~~
2. 활성화 진행
 * 구버전 ADB
 ~~~~
 $ adb shell pm enable "Package Name"
 ~~~~
 * 신버전 ADB
 ~~~~
 $ adb shell pm unhide "Package Name"
 ~~~~
 * 권한 문제가 있을 경우
 ~~~~
 패키지 재설치 또는 상위버전 설치
 ~~~~
 * 전부 안될 경우
 ~~~~
 공장 초기화
 ~~~~


## 참조
* [Android Developer > Android 디버그 브리지](https://developer.android.com/studio/command-line/adb?hl=ko)
