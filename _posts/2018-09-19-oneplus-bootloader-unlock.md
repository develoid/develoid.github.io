---
layout: post
title:  "원플러스 부트로더 언락(Bootloader Unlock)"
author: SiRyuA
categories: Oneplus
tags:
- Android
- Oneplus
- Bootloader
- Unlock
---

### **부트로더 언락(Bootloader Unlock)** 후 발생하는 일에 대한 모든 책임은 본인에게 있습니다.

## 주의사항

* **부트로더 언락(Bootloader Unlock)** 과정에서 모든 데이터가 초기화됩니다. 사전에 백업을 필수로 해야됩니다.
* adb와 fastboot 를 필요로 합니다. ( [다운로드](/android/android-what-is-adb.html) )


## 부트로더 진입 전 시스템에서 설정해야 할 것
1. **개발자 옵션** 에서 **OEM 잠금해제** 를 활성화 시킵니다.
2. **개발자 옵션** 에서 **ADB 디버깅** 을 활성화 시킵니다.

* 개발자 옵션은 **설정 > 휴대전화 정보 > 빌드번호** 를 7번 이상 클릭하면 나타납니다.


## adb 를 이용한 부트로더 진입 방법
~~~~
$ adb devices
$ adb reboot bootloader
~~~~

## 하드웨어 입력을 이용한 부트로더 진입 방법

* 볼륨 상 + 전원


## Advanced Reboot 이용 방법

1. **개발자 옵션** 에서 **Advanced Reboot** 을 활성화 시킵니다.
2. 전원 버튼을 눌러서 **Reboot** 을 선택하면 **Reboot / Recovery / Bootloader** 선택지가 생기며 **Bootloader** 선택지를 누릅니다.


## 부트로더 언락(Bootloader Unlock) 방법
~~~~
$ fastboot oem unlock
~~~~
