---
layout: post
title:  "TWRP 커스텀 리커버리(Custom Recovery)"
author: SiRyuA
categories: Android
tags:
- Android
- Recovery
- Flash
- Firmware
- CustomROM
- root
- su
---

## TWRP 란?
TWRP(Team Win Recovery Project)는 안드로이드 기반 기기들을 위한 오픈소스 리커버리 모드입니다. 기본적으로 제공되는 리커버리 모드가 지원하지 않는 기능들에 대해서 추가되어있으며, 제조사 고유 SignKey 가 있어야만 설치가 가능했던 순정 리커버리와 달리 사용자 임의적으로 원하는 펌웨어 또는 모드, 에드온 등에 대한 설치, MTP를 이용한 파일 전송, 파일 탐색 기능 등을 지원합니다.
<br /><br />
기본 리커버리와 달리 터치 인터페이스에 최적화 되어있어 사용자가 사용하는 것에 있어서 더욱 더 편리합니다.


## 다운로드 방법
* TWRP 공식 사이트에서 본인의 기기를 조회 후 다운로드 합니다.
* [공식 사이트 다운로드 페이지 바로가기](https://twrp.me/Devices/)
* [TWRP 소스 보기](https://github.com/omnirom/android_bootable_recovery/) - 본인의 기기가 지원되지 않을 경우 직접 컴파일을 통해서 제작 가능합니다.


## 설치방법 (삼성 기기)
* 삼성 기종 같은 경우 **삼성 오딘(Odin)** 을 이용하여 설치합니다.


## 설치방법 (삼성 이외 제조사 기기)
1. 다운로드 받은 TRWP 파일을 **adb** 와 **Fastboot** 가 있는 폴더에 넣습니다.
2. **개발자 옵션** 에서 **ADB 디버깅** 을 활성화 시킵니다.
 * 개발자 옵션은 **설정 > 휴대전화 정보 > 빌드번호** 를 7번 이상 클릭하면 나타납니다.
3. 아래와 같이 입력하여 **Bootloader** 로 진입합니다.
~~~~
$ adb reboot bootloader
~~~~
4. Fastboot 통신이 정상적으로 이루어지는지 확인합니다.
~~~~
$ fastboot devices
~~~~
5. Fastboot 를 이용하여 **Recovery** 파티션에 플래싱합니다.
~~~~
$ fastboot flash recovery twrp.img
~~~~
6. 재부팅합니다.
~~~~
$ fastboot reboot
~~~~


## 설치방법 (루팅되어있는 기기 일 경우)
1. 다운로드 받은 TRWP 파일을 외장 메모리 파티션(/sdcard/)에 넣습니다.
2. 터미널 예뮬레이터 애플리케이션을 실행시킵니다.
3. 아래와 같이 입력하여 설치합니다.
~~~~
$ su
$ dd if=/sdcard/twrp.img of="기기의 Recovery 파티션 Block"
~~~~


## 참조
* [TWRP 공식 사이트](https://twrp.me/)
