---
layout: post
title:  "구글 순정 펌웨어 다운로드(Stock Firmware)"
date:   2018-09-20 00:00:00 +0900
author: SiRyuA
categories: Google
tags:
- Android
- Google
- Stock
- Firmware
- Download
---

### 주의! 본인의 기기의 펌웨어가 아닌 다른 기기의 펌웨어를 올릴 경우 벽돌이 될 수 있습니다.

## 주의사항
1. 순정 펌웨어를 기기에 설치하기 위해서는 Fastboot 를 사용할 수 있어야 됩니다.
2. 순정 펌웨어를 업로드하는 과정에서 전체 초기화가 발생하며, 부트로더 언락 및 리락을 진행합니다.


## 이용약관 (by.Google)
1. 구글 계정에 백업된 특정 데이터 복원이 가능하지만 앱 및 관련데이터는 삭제됩니다. 진행하기 전 보관하려는 데이터가 [구글계정에 백업되어있는지 확인하십시오.](https://support.google.com/nexus/answer/2819582#backup)
2. 시스템 이미지 다운로드 및 소프트웨어 사용은 [구글 서비스 약관](https://www.google.com/intl/en/policies/terms/)을 적용받습니다. 진행 할 경우 [구글 서비스 약관](https://www.google.com/intl/en/policies/terms/) 및 [개인 정보 취급 방침](https://www.google.com/intl/en/policies/privacy/)에 동의하시는 것입니다.
3. 시스템 이미지 다운로드 및 소프트웨어 사용은 **설정 > 회사정보 > 법률정보** 또는 특정 타사 서비스 약관의 적용을 받을 수 있습니다.


## 구글 공식 이미지 다운로드 받기

| 기기 명                                            | 코드 네임           | 다운로드                                                                   |
|----------------------------------------------------|---------------------|----------------------------------------------------------------------------|
| Pixel 2 XL                                         | taimen              | [페이지 바로가기](https://developers.google.com/android/images#taimen)     |
| Pixel 2                                            | walleye             | [페이지 바로가기](https://developers.google.com/android/images#walleye)    |
| Pixel XL                                           | marlin              | [페이지 바로가기](https://developers.google.com/android/images#marlin)     |
| Pixel                                              | sailfish            | [페이지 바로가기](https://developers.google.com/android/images#sailfish)   |
| Pixel C                                            | ryu                 | [페이지 바로가기](https://developers.google.com/android/images#ryu)        |
| Nexus 6P                                           | angler              | [페이지 바로가기](https://developers.google.com/android/images#angler)     |
| Nexus 5X                                           | bullhead            | [페이지 바로가기](https://developers.google.com/android/images#bullhead)   |
| Nexus 6                                            | shamu               | [페이지 바로가기](https://developers.google.com/android/images#shamu)      |
| Nexus Player                                       | fugu                | [페이지 바로가기](https://developers.google.com/android/images#fugu)       |
| Nexus 9 (LTE)                                      | volantisg           | [페이지 바로가기](https://developers.google.com/android/images#volantisg)  |
| Nexus 9 (Wi-Fi)                                    | volantis            | [페이지 바로가기](https://developers.google.com/android/images#volantis)   |
| Nexus 5 (GSM/LTE)                                  | hammerhead          | [페이지 바로가기](https://developers.google.com/android/images#hammerhead) |
| Nexus 7 2013 (Wi-Fi)                               | razor               | [페이지 바로가기](https://developers.google.com/android/images#razor)      |
| Nexus 7 2013 (Mobile)                              | razorg              | [페이지 바로가기](https://developers.google.com/android/images#razorg)     |
| Nexus 10                                           | mantaray            | [페이지 바로가기](https://developers.google.com/android/images#mantaray)   |
| Nexus 4                                            | occam               | [페이지 바로가기](https://developers.google.com/android/images#occam)      |
| Nexus 7 (Wi-Fi)                                    | nakasi              | [페이지 바로가기](https://developers.google.com/android/images#nakasi)     |
| Nexus 7 (Mobile)                                   | nakasig             | [페이지 바로가기](https://developers.google.com/android/images#nakasig)    |
| Nexus Q                                            | tungsten            | [페이지 바로가기](https://developers.google.com/android/images#tungsten)   |
| Galaxy Nexus (GSM/HSPA+)<br />(with Google Wallet) | takju (maguro)      | [페이지 바로가기](https://developers.google.com/android/images#takju)      |
| Galaxy Nexus (GSM/HSPA+)                           | yakju (maguro)      | [페이지 바로가기](https://developers.google.com/android/images#yakju)      |
| Galaxy Nexus (Verizon CDMA/LTE)                    | mysid (toro)        | [페이지 바로가기](https://developers.google.com/android/images#mysid)      |
| Galaxy Nexus (Sprint CDMA/LTE)                     | mysidspr (toroplus) | [페이지 바로가기](https://developers.google.com/android/images#mysidspr)   |
| Nexus S (worldwide version, i9020t and i9023)      | soju                | [페이지 바로가기](https://developers.google.com/android/images#soju)       |
| Nexus S (850MHz version, i9020a)                   | sojua               | [페이지 바로가기](https://developers.google.com/android/images#sojua)      |
| Nexus S (Korea version, m200)                      | sojuk               | [페이지 바로가기](https://developers.google.com/android/images#sojuk)      |
| Nexus S 4G (d720)                                  | sojus               | [페이지 바로가기](https://developers.google.com/android/images#sojus)      |


## 구글 공식 이미지 설치방법
1. **공식 이미지** 파일을 다운로드 받아 압축 해제 후, 이미지 파일을 **adb** 와 **Fastboot** 와 같은 폴더에 넣습니다.
2. **개발자 옵션** 에서 **adb 디버깅** 을 활성화 합니다.
 * 개발자 옵션은 **설정 > 휴대전화 정보 > 빌드번호** 를 7번 이상 클릭하면 나타납니다.
3. PC와 Pixel 또는 Nexus 기기를 USB 로 연결합니다.
4. adb 명령창에 아래와 같이 입력 또는 **전원 종료** 후 **볼륨 하 + 전원** 버튼을 눌러서 **Bootloader** 로 진입합니다.
~~~~
$ adb reboot bootloader
~~~~
5. 부트로더 언락을 진행합니다.
 * 2014년 이전 출시 기기
 ~~~~
 $ fastboot oem unlock
 ~~~~
 * 2015년 이후 출시 기기(Nexus 5X, Nexus 6P, Pixel, Pixel XL, Pixel 2, Pixel 2 XL)
 ~~~~
 $ fastboot flashing unlock
 ~~~~
 * TMZ20a 이전의 부트로더를 사용하는 Pixel 2 XL 일 경우
 ~~~~
 $ fastboot flashing unlock_critical
 ~~~~
  * Pixel 2 일 경우 부트로더를 Oreo MR1 버전 이상으로 업데이트를 진행해야됩니다. 아래의 OTA 이미지 설치 방법 항목을 참고하여 업데이트 진행 후 진행해주세요.
6. adb 명령창에 아래와 같이 입력하여 펌웨어 설치 스크립트를 실행합니다.
~~~~
$ flash-all
~~~~
7. 스크립트가 완료되면 재부팅됩니다. 종료 후 부트로더로 진입하여 보안을 위해 부트로더 리락을 진행합니다.
 * 2014년 이전 출시 기기
 ~~~~
 $ fastboot oem lock
 ~~~~
 * 2015년 이후 출시 기기(Nexus 5X, Nexus 6P, Pixel, Pixel XL, Pixel 2, Pixel 2 XL)
 ~~~~
 $ fastboot flashing lock
 ~~~~


## OTA 이미지
1. OTA 용 이미지는 **설정 > 휴대 전화 정보 > 시스템 업데이트** 를 통해서 업데이트가 되지 않을때 사용 할 수 있는 이미지 입니다.
2. 다운로드는 [OTA 이미지 배포 페이지](https://developers.google.com/android/ota) 에서 가능합니다.


## OTA 이미지 설치 방법
1. **OTA 이미지 파일** 을 다운로드 받아 **adb** 와 같은 폴더에 넣습니다.
2. **개발자 옵션** 에서 **adb 디버깅** 을 활성화 합니다.
3. PC와 Pixel 또는 Nexus 기기를 USB 로 연결합니다.
4. adb 명령창에 아래와 같이 입력 또는 **전원 종료** 후 **볼륨 상 + 전원** 버튼을 눌러서 **Recovery Mode** 로 진입합니다.
~~~~
$ adb reboot recovery
~~~~
5. adb 명령창에 아래와 같이 입력해서 **Recovery Mode** 상태로 **adb** 와 통신이 되는지 확인합니다.
~~~~
$ adb devices
~~~~
6. adb 명령창에 아래와 같이 입력해서 설치를 진행합니다.
~~~~
$ adb sideload "OTA 이미지 파일".zip
~~~~
7. 설치가 완료되면 **Reboot system now** 를 통해서 재부팅합니다.


## 드라이버 바이너리
Pixel 및 Nexus 기기용 드라이버 바이너리는 [바이너리 배포 페이지](https://developers.google.com/android/drivers) 에서 다운로드 가능합니다.


## 참조
* [Android Developer](https://developers.google.com/android/images)
