---
layout: post
title:  "패스트부트(Fastboot)"
author: SiRyuA
categories:
- Android
tags:
- Android
- Fastboot
---

### 안드로이드 기기의 플래시 메모리에 직접 데이터를 쓰는 툴


## 상세설명
Fastboot 는 안드로이드 기기의 플래시 메모리에 직접 데이터를 쓰거나, 진단 할 수 있는 엔지니어링 프로토콜입니다. PC와 USB 연결하여 Bootloader Unlock, Recovery Mode, System, Kernel 등의 안드로이드 기기의 펌웨어들에 대해서 플래시 하는데 가장 많이 사용하고 있습니다.


## Fastboot 로 할 수 있는 것
1. Bootloader Unlock
2. Recovery Mode, System, Kernel 등에 대한 펌웨어 변경
3. 공장초기화
4. 등등..


## Fastboot 다운로드
Fastboot 같은 경우 Android ADB 와 같이 배포되고 있으며, Linux 및 Mac OS 같은 경우 명령어로도 설치가 가능합니다.

#### 설치파일 이용
* [Windows 용](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
* [Linux 용](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)
* [Mac OS 용](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)

#### 명령어 이용
* Linux
~~~~
$ sudo apt-get install android-tools-fastboot
~~~~
* Mac OS (Homebrew)
~~~~
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew cask install android-platform-tools
~~~~
* Mac OS (MacPorts)
~~~~
$ sudo port install android
$ sh /opt/local/share/java/android-sdk-macosx/tools/android
=> 이후 platform-tools 선택 후 설치
$ echo 'export PATH=$PATH:/opt/local/share/java/android-sdk-macosx/platform-tools' >> ~/.bash_profile
$ source ~/.bash_profile
~~~~

## Fastboot Mode 진입하기
보통 Fastboot 모드는 Bootloader 와 동일하며, 간혹 제조사에서 별도적으로 Fastboot Mode 를 따로 만들어 놓는 경우도 있습니다. (ex. Sony) ADB 명령어를 통해서 진입을 하던가 아니면 제조사에서 공식적으로 제공해주고 있는 커맨드 키를 이용하여 진입이 가능합니다.

* ADB 이용 방법
~~~~
$ adb reboot bootloader
~~~~

* 각 제조사 커맨드 키 이용방법
  * 구글링..
* 참고! 삼성 같은 경우
  * Galaxy 제품 군 같은 경우 Fastboot 명령어를 사용 할 수 없으며 Download Mode 와 Odin 을 이용합니다.


## Fastboot 명령어
fastboot 명령어는 아래와 같은 형태를 가지고 있습니다.
~~~~
$ fastboot [<option>] <command>
~~~~
* Command 목록
~~~~
update <filename> // update.zip 파일로 펌웨어를 변경합니다.
flashall // boot, recovery, system 등 패키지 안의 모든 파일을 설치합니다.
flash <partition> [ <filename> ] // 해당 파티션에 패키지 파일을 설치합니다.
erase <partition> // 해당 파티션의 데이터를 삭제합니다.
format <partition> // 해당 파티션을 포멧합니다.
getvar <variable> // 해당 부트로더의 변수를 출력합니다.
boot <kernel> [ <ramdisk> ] // 해당 커널 이미지로 부팅합니다.
devices // 연결된 기기 목록을 가져옵니다.
continue // 자동으로 부팅합니다.
reboot // 재부팅
reboot-bootloader // 부트로더로 재부팅합니다.
help // 도움말
~~~~
* Option 목록
~~~~
-w // 사용자 데이터 및 캐시 삭제 (파티션 유형에 맞추어 포맷)
-u // 포맷 전 파티션 삭제 방지
-s <specific device> // 특정 장치 지정
-l // 연결된 장치 목록
-p <product> // 주요 장치 명 지정
-c <cmdline> // 커맨드 라인 입력
-i <vendor id> // 제조사 USB ID 지정
-b <base_addr> // 커스텀 커널 베이스 주소 재지정
-n <page size> // 낸드 페이지 크기 재지정
-S <size>[K|M|G] // 크기 지정
~~~~


## 기기 연결 유무 확인
Bootloader 또는 Fastboot Mode 에서 기기와 PC의 연결상태를 확인하려면 아래의 명령어 이용합니다.

* 커맨드 이용
~~~~
$ fastboot devices
~~~~
* 옵션 이용
~~~~
$ fastboot -l
~~~~


## 재부팅
* 시스템(ROM)으로 부팅
~~~~
$ fastboot reboot
~~~~
* 부트로더로 재부팅
~~~~
$ fastboot reboot-bootloader
~~~~
* 리커버리로 재부팅
~~~~
$ fastboot reboot recovery
~~~~
* 제조사 별 명령어 지원 유무가 다릅니다.


## 부트로더 정보 보기
~~~~
$ fastboot oem device-info
~~~~


## 부트로더 언락/리락하기
* Unlock
~~~~
$ fastboot oem unlock
~~~~
  * 구글 기준 2015년 이후 기기
  ~~~~
  $ fastboot flashing unlock
  => 또는
  $ fastboot flashing unlock_critical
  ~~~~
* Relock
~~~~
$ fastboot oem lock
~~~~
  * 구글 기준 2015년 이후 기기
  ~~~~
  $ fastboot flashing lock
  ~~~~


## 특정 이미지로 부팅하기
테스트를 진행할때 boot 명령어를 이용해서 특정 이미지 파일로 부팅이 가능합니다.
~~~~
$ fastboot boot "이미지 파일"
~~~~
* 예시
~~~~
$ fastboot boot recovery.img
~~~~


## 특정 ROM 파일 설치하기
update 명령어를 통해서 특정 ROM 파일을 설치가 가능합니다.
~~~~
$ fastboot -w // 초기화
$ fastboot update "ROM.zip" // 설치
~~~~


## 파티션 포멧 변경하기
특정 파티션에 대해서 포멧 형식을 변경하려면 format 명령어를 통해서 가능합니다.
~~~~
$ fastboot format:"포멧 형식" "파티션"
~~~~
* 예시
~~~~
$ fastboot format:ext4 userdata
~~~~


## OEM 커맨드 목록
제조사 명령어로 oem 명령어가 있습니다. 제조사마다 다르며, 지원하는 것 역시 차이가 있습니다. 아래에는 대략적으로 공통적으로 있는 것들에 대해서 적어놓았습니다.
~~~~
$ fastboot oem unlock-go
$ fastboot oem frp-unlock
$ fastboot oem frp-erase
$ fastboot oem enable reduced-version
$ fastboot oem device-info
$ fastboot oem enable-charger-screen // 충전 화면 활성화
$ fastboot oem disable-charger-screen // 충전 화면 비활성화
$ fastboot oem enable-bp-tools
$ fastboot oem disable-bp-tools
$ fastboot oem enable-hw-factory
$ fastboot oem disable-hw-factory
$ fastboot oem select-display-panel
$ fastboot oem off-mode-charge enable // 전원 연결시 자동 부팅 해제
$ fastboot oem off-mode-charge disable // 전원 연결시 자동 부팅 설정
$ fastboot oem ramdump enable
$ fastboot oem ramdump disable
$ fastboot oem uart enable // UART 활성화
$ fastboot oem uart disable // UART 비활성화
$ fastboot oem hwdog certify begin
$ fastboot oem hwdog certify close
$ fastboot oem get-imei1 // IMEI 정보
$ fastboot oem get-meid
$ fastboot oem get-sn // 시리얼 넘버
$ fastboot oem get-bsn
$ fastboot oem get_verify_boot_status
~~~~
* 참고 할 수 있는 링크
  * [XDA-Developers](https://www.xda-developers.com/how-to-discover-hidden-fastboot-commands/)


## 참조
* [XDA-Developers](https://forum.xda-developers.com/android/help/adb-fastboot-commands-bootloader-kernel-t3597181)
