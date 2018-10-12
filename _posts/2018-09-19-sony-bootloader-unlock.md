---
layout: post
title:  "소니 부트로더 언락(Bootloader Unlock)"
date:   2018-09-19 00:00:00 +0900
author: SiRyuA
categories: Sony
tags:
- Android
- Sony
- Bootloader
- Unlock
---

### **부트로더 언락(Bootloader Unlock)** 후 발생하는 일에 대한 모든 책임은 본인에게 있습니다.


## 주의사항
* **부트로더 언락(Bootloader Unlock)** 과정에서 모든 데이터가 초기화됩니다. 사전에 백업을 필수로 해야됩니다.
* adb와 fastboot 를 필요로 합니다. ( [다운로드](/android/android-what-is-adb.html) )


## 주의사항 (by Sony)
* Xperia 장치에 커스텀롬을 포함한 사용자 정의의 ROM 을 설치할 수 있습니다.
* **부트로더 언락(Bootloader Unlock)** 시 모든 장치의 보증은 무효화 됩니다.
* **부트로더 언락(Bootloader Unlock)** 후 최악의 경우 장치의 과열로 신체적 상해나 물질적 손상을 발생시킬 수 있습니다.
* **DRM 보안 키** 가 제거되어 사용자는 Xperia 의 **특정 콘텐츠 영역에 접근 할 수 없게됩니다.** (카메라 기능, 노이즈 제거 알고리즘 등)


## 부트로더 언락(Bootloader Unlock) 방법
1. **전화** 앱을 실행키셔서 `*#*#7378423#*#*` 을 눌러 **서비스 메뉴** 에 접근합니다.
2. **Service info > Configuration > Rooting Status** 에서 **Bootloader unlock allowed** 항목이 **Yes** 일 경우 **부트로더 언락(Bootloader Unlock)** 을 진행할 수 있습니다.
3. [부트로더 언락 사이트](https://developer.sony.com/develop/open-devices/get-started/unlock-bootloader#unlock-code)를 방문하여 **본인의 기기** 를 선택 후 **IMEI** 정보를 제공하여 **부트로더 언락 키(Bootloader Unlock Key)** 를 발급받습니다.
4. **개발자 옵션** 에서 **OEM 잠금해제** 를 활성화 시킵니다.
 * 개발자 옵션은 **설정 > 휴대전화 정보 > 빌드번호** 를 7번 이상 클릭하면 나타납니다.
5. **개발자 옵션** 에서 **ADB 디버깅** 을 활성화 시킵니다.
6. 아래와 같이 입력 또는 기기의 전원 종료 후 **볼륨 상** 버튼을 누르면서 USB 케이블을 연결합니다.
~~~~
$ adb devices
$ adb reboot bootloader
~~~~
7. **Bootloader** 진입 후 아래와 같이 입력하여 기기 연결 상태를 확인합니다.
~~~~
$ fastboot devices
~~~~
8. **Bootloader** 에서 아래와 같이 입력하여 언락을 진행합니다.
~~~~
fastboot -i 0x0fce oem unlock 0x"부트로더 언락 키"
~~~~
또는
~~~~
fastboot oem unlock 0x"부트로더 언락 키"
~~~~
9. **부트로더 언락(Bootloader Unlock)** 이 완료되었습니다.


## 참조
* [Sony Developer](https://developer.sony.com/develop/open-devices/get-started/unlock-bootloader)
