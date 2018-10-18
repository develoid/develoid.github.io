---
layout: post
title:  "안드로이드 Kernel 컴파일"
author: SiRyuA
categories:
- Android
tags:
- Android
- Build
---

### [안드로이드 빌드 환경 구성](/android/android-build-settings.html) 이 되어있어야 합니다.

## Kernel 컴파일하기
1. Kernel 소스 및 크로스컴파일러를 담아 둘 폴더를 생성
~~~~
$ mkdir ~/android-kernel
$ cd ~/android-kernel
~~~~
2. 크로스 컴파일러 다운로드
~~~~
$ git clone https://android.googlesource.com/platform/prebuilts/gcc/linux-x86/aarch64/aarch64-linux-android-4.9/
~~~~
3. 크로스 컴파일러 export
~~~~
$ export CROSS_COMPILE=/android/prebuilts/gcc/linux-x86/aarch64/aarch64-linux-android-4.9/bin/aarch64-linux-android-
~~~~
4. 제조사의 오픈소스 사이트에 공개되어있는 Kernel 소스를 다운로드
 * 예시 : Sony Xperia
 ~~~~
 $ git clone https://github.com/sonyxperiadev/kernel && cd kernel && git branch -r && git checkout <branch>
 ~~~~
5. Compile 할 기기의 Kernel 을 지정
~~~~
$ make ARCH=arm64 CROSS_COMPILE=$CROSS_COMPILE <device_defconfig>
~~~~
6. Kernel 컴파일
~~~~
$ make ARCH=arm64 CROSS_COMPILE=$CROSS_COMPILE
~~~~


## 기타사항
1. device_defconfig 는 확인 방법
 * ~/kernel/arch/arm64/configs
 * 없을 경우 추가도 저 경로에 추가
2. 컴파일 속도 향상 방법
~~~~
make "-j<N>"
~~~~
 * "N" 의 값은 코어 갯수 x 쓰레드 갯수
3. 결과물 위치
 * ~/kernel/arch/arm64/boot/
 * "Image.gz-dtb" 또는 "zImage" 로 출력


## 참조
[Android Developer](https://source.android.com/setup/build/requirements)
