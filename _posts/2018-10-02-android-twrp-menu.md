---
layout: post
title:  "TWRP 리커버리 메뉴(TWRP Recovery)"
author: SiRyuA
categories: Android-Custom
tags:
- Android
- Android-Custom
- Recovery
- Flash
- Firmware
- CustomROM
- root
- su
---

### TWRP 리커버리 메뉴들에 대한 간단한 설명입니다.

## TWRP 메인
![TWRP Menu]({{ site.baseurl }}/postImage/twrp-01.jpg)
* Install : ROM, 커널 등을 설치 페이지
* Wipe : 특정 파티션의 데이터를 삭제 페이지
* Backup : 현재 시스템을 백업 페이지
* Restore : 백업해둔 시스템을 복원 페이지
* Mount : 특정 파티션을 마운트(연결)
* Setting : TWRP 리커버리 관련 설정 페이지
* Advanced : Log, 파일매니저, 터미널 등 도구 페이지
* Reboot : 재부팅 메뉴


## Install 메뉴
![TWRP Install]({{ site.baseurl }}/postImage/twrp-02.jpg)
저장소에 있는 ROM, Kernel, Mod, Gapps 등 설치파일을 설치할 수 있습니다.
* Select Storage : 저장 공간 선택
* Install Image : 선택한 이미지 설치


## Wipe 메뉴
![TWRP Wipe]({{ site.baseurl }}/postImage/twrp-03.jpg)
기기의 초기화 또는 특정 파티션을 포멧 할 수 있습니다.
* Swipe to Factory Reset : 공장초기화
* Advanced Wipe : 특정 파티션을 선택하여 포멧
* Format Data : 데이터 포멧
* Repair or Change File System : 선택한 파티션 리사이즈 또는 포멧 형식 변경, 복원
* Resize File System : 파티션 리사이즈
* Repair File System : 파티션 복원
* Change File System : 파티션 포멧 형식 변경


## Backup & Restore 메뉴
![TWRP Wipe]({{ site.baseurl }}/postImage/twrp-04.jpg)
Backup 메뉴는 현재 기기의 시스템에 대해서 백업을 진행하는 메뉴이며, Restore 메뉴는 백업된 시스템을 복원하는 메뉴입니다.
* Name : 백업 파일 명
* Select Partitions to Backup : 백업 진행할 파티션 선택
* Swipe to Backup : 백업 진행
* 복원은 Wipe 진행 후 백업 파일 선택해서 시작


## Mount 메뉴
![TWRP Wipe]({{ site.baseurl }}/postImage/twrp-05.jpg)
Recovery 에서 특정 영역에 대해서 접근하기 위해 마운트(연결)을 지정하는 메뉴입니다.
* Select Partitions to Mount : 선택한 파티션 연결
* Enable/Disable MTP : PC와 MTP 연결 허용 유무


## Setting 메뉴
![TWRP Wipe]({{ site.baseurl }}/postImage/twrp-06.jpg)
TWRP 리커버리에 대해서 다양한 설정을 진행하는 메뉴입니다.


## Advanced 메뉴
![TWRP Wipe]({{ site.baseurl }}/postImage/twrp-07.jpg)
TWRP 에 포함되어있는 각종 툴 메뉴입니다.
* Copy Log : 진행 로그 복사
* File Manager : 파일매니저
* Terminal : 터미널
* ADB Sideload : adb sideload 명령어를 이용해서 PC 에서 파일을 ADB로 전송하여 설치 진행

## Reboot 메뉴
![TWRP Wipe]({{ site.baseurl }}/postImage/twrp-08.jpg)
기기 재부팅 등에 대한 선택 메뉴입니다.
* System : 현재 시스템(ROM) 으로 재부팅
* Power Off : 전원 종료 (기기 끔)
* Recovery : 리커버리 모드 재부팅
* Bootloader : 부트로더 모드로 재부팅
