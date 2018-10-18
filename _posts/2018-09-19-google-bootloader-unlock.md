---
layout: post
title:  "구글 부트로더 언락(Bootloader Unlock)"
author: SiRyuA
categories: Google
tags:
- Android
- Google
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

| 기기 명                | 코드네임   | 하드웨어 입력                                |
|------------------------|------------|----------------------------------------------|
| Pixel XL               | marlin     | 볼륨 하 + 전원                               |
| Pixel                  | sailfish   | 볼륨 하 + 전원                               |
| hikey                  | hikey      | PIN1 - 2 와 PIN 5-6 을 J15에 연결            |
| Nexus 6P               | angler     | 볼륨 하 + 전원                               |
| Nexus 5X               | bullhead   | 볼륨 하 + 전원                               |
| Nexus 6                | shamu      | 볼륨 하 + 전원                               |
| Nexus Player           | fugu       | 전원                                         |
| Nexus 9                | volantis   | 볼륨 하 + 전원                               |
| Nexus 5                | hammerhead | 볼륨 상 + 볼륨 하 + 전원                     |
| Nexus 7                | flo        | 볼륨 하 + 전원                               |
| Nexus 7 3G             | deb        | 볼륨 하 + 전원                               |
| Nexus 10               | manta      | 볼륨 상 + 볼륨 하 + 전원                     |
| Nexus 4                | mako       | 볼륨 하 + 전원                               |
| Nexus 7 (2012)         | grouper    | 볼륨 하 + 전원                               |
| Nexus 7 3G (2012)      | tilapia    | 볼륨 하 + 전원                               |
| Nexus Q                | phantasm   | 전원을 키고 LED 가 적색이 될때까지 커버 덮기 |
| Galaxy Nexus GSM       | maguro     | 볼륨 상 + 볼륨 하 + 전원                     |
| Galaxy Nexus (Verizon) | toro       | 볼륨 상 + 볼륨 하 + 전원                     |
| Galaxy Nexus (Sprint)  | toroplus   | 볼륨 상 + 볼륨 하 + 전원                     |
| Motorola Xoom          | wingray    | 볼륨 하 + 전원                               |
| Nexus S                | crespo     | 볼륨 상 + 전원                               |
| Nexus SG               | crespo4g   | 볼륨 상 + 전원                               |


## 부트로더 언락(Bootloader Unlock) 방법
* 2015년 이후 기기
~~~~
$ fastboot flashing unlock
~~~~
또는
~~~~
$ fastboot flashing unlock_critical
~~~~

* 2014년 이전 기기
~~~~
$ fastboot oem unlock
~~~~


## 부트로더 리락(Bootloader Re-Lock) 방법
* 2015년 이후 기기
~~~~
$ fastboot flashing lock
~~~~

* 2014년 이전 기기
~~~~
$ fastboot oem lock
~~~~


## 버라이즌(Verizon) 기기 언락 방법
1. 시스템 상에서 ADB로 아래와 같이 입력
~~~~
$ adb shell pm uninstall --user 0 com.android.phone
~~~~
2. 부트로더 진입 후 부트로더 언락 커맨드 입력


## 부트로더 언락/리락 후 재부팅
~~~~
$ fastboot reboot
~~~~


## 참조
* [Android Developer](https://source.android.com/setup/build/running)
