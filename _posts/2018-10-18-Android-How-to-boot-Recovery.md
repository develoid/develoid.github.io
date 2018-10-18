---
layout: post
title:  "안드로이드 리커버리 모드로 부팅하기"
author: SiRyuA
categories:
- Android
tags:
- Android
- Recovery
---

## 리커버리모드란?
안드로이드 기기에서 펌웨어 업데이트, 복구, 공장초기화, 캐시삭제 등의 작업이 진행가능한 모드입니다.


## 커스텀 리커버리
* [TWRP 커스텀 리커버리](/android/android-twrp.html)
* [TWRP 커스텀 리커버리 메뉴](/android/android-twrp-menu.html)


## 제조사별 진입 방법
* 공통상황 : 안드로이드 기기 전원을 끕니다.
* Samsung Galaxy
  * POWER + Volume UP + HOME(or Bixby)
* LG
  1. POWER + Volume DOWN 버튼을 LG 로고가 나타날때까지 누르기
  2. LG 로고가 나타나면 손을 때고 Reset Menu 가 보일때까지 POWER + Volume 버튼을 다시 누름
  3. POWER 버튼을 눌러 HARD RESET 을 하면 Recovery Mode 가 부팅됨
* HTC
  1. 설정 > 배터리 > FASTBOOT 옵션 선택 취소
  2. 전원 종료
  3. POWER + Volume DOWN 버튼을 5초간 누름
  4. POWER 버튼을 때고 Volume DOWN 버튼만 누름 유지
  5. BOOTLOADER 에 진입하면 Volume 버튼을 이용하여 Recovery Mode 를 선택
  6. POWER 버튼을 눌러 Recovery Mode 진입
* Google
  1. Volume UP + Volume DOWN + POWER 버튼을 눌러서 BOOTLOADER 진입
  2. BOOTLOADER 에 진입하면 Volume 버튼을 이용하여 Recovery Mode 를 선택
  3. POWER 버튼을 눌러 Recovery Mode 진입
* Sony Xperia
  1. Sony 로고가 나타날때까지 POWER 버튼 누름
  2. Sony 로고가 나타나면 Recovery Mode 진입할 때까지 Volume UP 또는 Volume DOWN 을 빠르게 계속 클릭


## ADB 이용 진입 방법
* [ADB 재부팅 가이드](/android/android-adb-reboot.html)
