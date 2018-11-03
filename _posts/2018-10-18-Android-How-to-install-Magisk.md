---
layout: post
title:  "안드로이드 매지스크(Magisk) 설치하기"
author: SiRyuA
categories:
- Android-Custom
tags:
- Android
- Android-Custom
- Magisk
---

## 매지스크(Magisk)란?
Topjohnwu 님께서 개발하신 Google Pay 등의 Root 권한을 체크하는 서비스에 대해서 회피하여 루트 권한 및 사용자 지정 모드를 같이 사용 할 수 있는 툴입니다. Google SafetyNet 시스템으로부터도 자유로우며, 기존 시스템 파티션을 그대로 두고 부팅 파티션을 수정함으로써 동작합니다.


## 매지스크 설치에 필요로 한 것
1. Android 5.0 이상의 기기
2. 커스텀 리커버리 [[참고:리커버리모드진입](/android/Android-How-to-boot-Recovery.html)] [[참고:TWRP](/android/android-twrp.html)]
  * 설명에는 TWRP 를 기준으로 함


## 매지스크 설치 방법
1. [매지스크 XDA 공식 스레드](https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445) 에서 최신 버전을 기기에 다운로드
2. [TWRP](/android/android-twrp.html) 리커버리 진입
3. Install 메뉴 선택
4. 매지스크 설치용 zip 파일 선택
5. 슬라이드를 스와이프하여 매지스크 설치
6. 시스템 재부팅
7. [매지스크 매니저](https://www.apkmirror.com/apk/topjohnwu/magisk-manager/) 를 다운로드 받아서 기기에 APK 설치
8. 매지스크 매니저를 실행시켜서 **녹색** 체크 표시가 되어있는지 확인하여 정상적으로 설치되었는지 확인
9. 메뉴에서 "SafetyNet Check" 를 클릭하여 정상적으로 Google SafetyNet 통과가 되는지 확인


## 매지스크 설치에서 문제가 생길 경우
[매지스크 XDA 공식 스레드](https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445) 참고


##  참조
[XDA-Developer Magisk Install Guide](https://www.xda-developers.com/how-to-install-magisk/)
[XDA-Developer Thread](https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445)
