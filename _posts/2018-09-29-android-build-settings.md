---
layout: post
title:  "안드로이드 빌드 환경 구성"
author: SiRyuA
categories:
- Android
tags:
- Android
- Build
---


## 빌드 환경 요구 사양
1. 64 bit 이상의 CPU
2. 최소 100GB, 넉넉잡아서 150GB 이상의 저장공간 (개인적으로 300GB 정도 추천)
3. 4~8GB 이상의 RAM (16GB 이상의 RAM 추천)
4. Ubuntu 14.04 LTS 이상 (네이티브 설치 권장)

#### 네이티브 외 환경 일 경우 주의사항
* 가상환경에서 빌드 가능합니다. 단 Swap 포함 16GB 이상의 RAM 이 필요로 합니다.
* Windows Subsystem for Linux 에서도 빌드 가능하며, WSL 안에서만 작업하셔야됩니다.


## 빌드환경 구성
1. 필요 패키지 설치
~~~~
$ sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install openjdk-8-jdk git git-core gnupg flex bison gperf build-essential zip curl zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 lib32ncurses5-dev x11proto-core-dev libx11-dev lib32z-dev libgl1-mesa-dev libxml2-utils xsltproc unzip make liblz4-tool libncurses5 python repo android-tools-adb android-tools-fastboot chrpath gawk texinfo libsdl1.2-dev whiptail diffstat cpio libssl-dev lzip -y
~~~~
2. USB 인식을 위한 "android.rules" 작성을 위해 "gedit" 실행
~~~~
$ sudo gedit /etc/udev/rules.d/51-android.rules
~~~~
3. "android.rules" 작성 후 저장
~~~~
SUBSYSTEM=="usb", ATTR{idVendor}=="0502", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="0b05", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="413c", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="0489", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="091E", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="18d1", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="0bb4", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="12d1", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="24e3", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="2116", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="0482", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="17EF", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="1004", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="22b8", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="0409", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="2080", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="0955", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="2257", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="10A9", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="0471", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="04da", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="05c6", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="1f53", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="04e8", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="04dd", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="0fce", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="0930", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="19D2", MODE="0666"
~~~~
4. "android.rules"에 권한 부여
~~~~
$ sudo chmod a+r /etc/udev/rules.d/51-android.rules
~~~~


## 참조
[Android Developer](https://source.android.com/setup/build/requirements)
