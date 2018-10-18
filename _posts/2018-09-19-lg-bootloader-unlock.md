---
layout: post
title:  "LG 부트로더 언락(Bootloader Unlock)"
author: SiRyuA
categories: LG
tags:
- Android
- LG
- Bootloader
- Unlock
---

### **부트로더 언락(Bootloader Unlock)** 후 발생하는 일에 대한 모든 책임은 본인에게 있습니다.

## 주의사항
* **부트로더 언락(Bootloader Unlock)** 과정에서 모든 데이터가 초기화됩니다. 사전에 백업을 필수로 해야됩니다.
* adb와 fastboot 를 필요로 합니다. ( [다운로드](/android/android-what-is-adb.html) )


## 주의사항 (by LG)
* 부트로더 언락 후 더 이상 LG 보증이 적용되지 않습니다.
* 일부 기능 및 서비스가 더 이상 지원되지 않을 수 있습니다.
* 바이러스, 악성 코드 및 해킹으로 인한 개인 정보 누출로 인해 금전적 손해가 발생 등 보안에 취약해질 수 있습니다.
* 기기가 작동을 멈출 수 있습니다.
* 특정 기능 및 기능이 사용 중지 될 수 있습니다.
* 기기가 위험을 초래할 정도로 안전하지 않을 수 있습니다.
* 과열로 인해 장치가 물리적으로 손상됩니다.
* 장치의 동작이 변경 될 수 있습니다.
* 잘못된 DRM 키로 인해 기기의 일부 콘텐츠에 더 이상 액세스하거나 재생할 수 없습니다.
* LG FOTA (Firmware Over The Air) 또는 웹 다운로드 서비스를 통해 제공되는 소프트웨어 업데이트가 더 이상 사용자의 장치에서 작동하지 않을 수 있습니다.


## 부트로더 진입 전 시스템에서 설정해야 할 것
1. **개발자 옵션** 에서 **OEM 잠금해제** 를 활성화 시킵니다.
2. **개발자 옵션** 에서 **ADB 디버깅** 을 활성화 시킵니다.

* 개발자 옵션은 **설정 > 휴대전화 정보 > 빌드번호** 를 7번 이상 클릭하면 나타납니다.


## 부트로더 언락 지원 기기 목록

| 기기 명 | 모델 명          | 국가      |
|---------|------------------|-----------|
| G7      | LMG710EM         | EU        |
| V30     | H930 / H930G     | EU        |
| G6      | US997.USA / H870 | U.S. / EU |
| V20     | US996.USA        | U.S.      |
| V10 [!] | H960A            | EU        |
| G5 SE   | H840             | EU        |
| G5      | RS988.USA / H850 | U.S. / EU |
| G4      | H815             | EU        |

* V10 같은 경우 Android M 한정


## 부트로더 언락(Bootloader Unlock) 방법
1. 부트로더 진입
~~~~
$ adb reboot bootloader
~~~~
2. 장치 고유 ID 값 확인
~~~~
fastboot oem device-id
~~~~
3. [LG Bootloader Unlock Site](http://developer.lge.com/resource/mobile/RetrieveBootloader.dev?categoryId=CTULRS0702#) 에서 장치 고유 ID 값 제출 후 Unlock-Key 다운로드
4. 부트로더에 Unlock-Key 플래싱
~~~~
$ fastboot flash unlock unlock.bin
~~~~
5. 재부팅
~~~~
$ fastboot reboot
~~~~

## 부트로더 언락 유무 확인 방법
1. 부트로더 진입
~~~~
$ adb reboot bootloader
~~~~
2. 아래와 같이 명령어 입력
~~~~
$ fastboot getvar unlocked
~~~~
3. **unlocked: yes** 가 뜨는지 확인

* yes 일 경우 언락 된 상태


## 참조
* [LG Developer](https://developer.lge.com/resource/mobile/RetrieveBootloader.dev?categoryTypeCode=ANRS)
