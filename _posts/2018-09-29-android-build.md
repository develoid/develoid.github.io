---
layout: post
title:  "안드로이드 빌드하기"
author: SiRyuA
categories:
- Android-Develop
tags:
- Android
- Android-Develop
- Build
---

### [안드로이드 빌드 환경 구성](/android-develop/android-build-settings.html) 이 되어있어야 합니다.

### [안드로이드 소스 다운로드](/android-develop/android-source-download.html) 가 되어있어야 합니다.


## 안드로이드 빌드하기
1.  envsetup 스크립트를 통해서 환경을 초기화하고 lunch 를 통해서 빌드할 타겟 지정
~~~~
$ source build/envsetup.sh && lunch
~~~~
2. 아래의 조건을 참고하여 빌드 대상 선택
 * user : 제한된 액세스, 제조사 펌웨어<br>ro.secure=1 / ro.debuggable=0 / adb 비활성화
 * userdebug : 루트 엑세스 및 디버깅 권한을 가지고 있는 상태<br>ro.debuggable=1 / adb 활성화
 * eng : 디버깅 도구 및 개발 구성 등이 활성화 되어있는 상태<br>ro.secure=0 / ro.debuggable=1/ ro.kernel.android.checkjni=1 / adb 활성화
3. "make" 를 통해서 빌드
~~~~
$ make
~~~~


## 결과물 기기에 설치
~~~~
$ fastboot flash boot out/target/product/<device>/boot.img
$ fastboot flash recovery out/target/product/<device>/recovery.img
$ fastboot flash system out/target/product/<device>/system.img
$ fastboot flash vendor out/target/product/<device>/vendor.img
$ fastboot flash userdata out/target/product/<device>/userdata.img

/* make otapackage 로 출력했을 경우 */
$ fastboot flashall -w
~~~~
* Bootloader 가 Unlock 되어있는 기기 일 경우 fastboot 를 통해서 결과물을 설치가능


## 기타사항
1. 빌드 속도 향상 방법
~~~~
make "-j<N>"
~~~~
  * "N" 의 값은 코어 갯수 x 쓰레드 갯수
2. 빌드 속도를 빠르게 하는 방법
~~~~
$ export USE_CCACHE=1
$ export CCACHE_COMPRESS=1
$ prebuilts/misc/linux-x86/ccache/ccache -M 50G
~~~~
3. "lexer.cpp" 또는 "LC_TIME" 관련 오류가 발생
~~~~
$ export LC_ALL=C
~~~~
4. 결과물 위치
  * ~/android/out/target/product/"기기 명" 경로
5. 결과물 한 번에 묶어서 받을려면
~~~~
$ make otapackage
~~~~


## 참조
[Android Developer](https://source.android.com/setup/build/requirements)
