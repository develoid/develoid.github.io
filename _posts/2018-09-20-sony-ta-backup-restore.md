---
layout: post
title:  "소니 TA 백업/복원(TA Backup/Restore)"
author: SiRyuA
categories: Sony
tags:
- Android
- Sony
- Stock
- Firmware
- TA
- Backup
- Restore
---

## TA 이란?
TA 는 Sony Xperia 기기의 보증 상태, DRM Key 등 중요 정보를 저장하고 있는 파티션입니다. 이 파티션이 손상되어있을 경우 노이즈 감소 알고리즘, 카메라 기능 등 소니 고유 기능에 대해서 영구적으로 사용할 수 없게 됩니다.


## 왜 백업을 진행하는 것인가?
TA 는 부트로더 언락을 진행하게되면 깔끔하게 손상되어 영구적으로 사용 할 수 없게 됩니다. 단, 다행이도 부트로더 언락 전 TA를 백업해놓는 경우 향후 복원 작업을 통해서 원상복구 가능합니다.


## TA 백업 도구
* [TA Backup v2 (XDA:rayman님) 다운로드](https://forum.xda-developers.com/crossdevice-dev/sony/universal-dirtycow-based-ta-backup-t3514236) ([소스보기](https://github.com/EnJens/backupTA))
* [Backup TA (DevShaft) 다운로드](https://github.com/DevShaft/Backup-TA/releases) ([소스보기](https://github.com/DevShaft/Backup-TA))


## TA 백업 방법
1. **개발자 옵션** 에서 **ADB 디버깅** 을 활성화 시킵니다.
 * 개발자 옵션은 **설정 > 휴대전화 정보 > 빌드번호** 를 7번 이상 클릭하면 나타납니다.
2. PC 와 Xperia 기기를 USB 케이블로 연결합니다.
3. 다운로드 받은 TA 백업 도구의 **BAT/CMD/SH** 파일을 실행시킵니다.
4. 이후 백업되어 나온 결과물을 보관합니다.

* 이 방법 이외에는 [소니 Flashtool](/sony/sony-flashtool.html) 을 이용하는 방법이 있습니다.


## TA 복원 방법
1. 복원을 진행하기 앞서서 **Recovery** 가 **TWRP** 로 설치되어있어야 합니다.
2. **TA Backup IMG 파일** 을 **adb** 와 같은 폴더에 넣습니다.
3. 아래와 같이 입력하여 Xperia 기기를 **Recovery Mode** 로 부팅시킵니다.
~~~~
$ adb reboot recovery
~~~~
4. TWRP에서 정상적으로 adb 연결이 되는지 확인합니다.
~~~~
$ adb devices
~~~~
5. 아래와 같이 입력하여 **TA Backup IMG 파일** 을 기기로 옮깁니다.
~~~~
$ adb push TAbackup.img /sdcard
~~~~
또는
~~~~
$ adb push TAbackup.img /data/local/tmp
~~~~
6. **adb shell** 을 이용하여 TA 파티션을 복구합니다.
~~~~
$ adb shell dd if=/sdcard/TAbackup.img of=/dev/block/bootdevice/by-name/TA
~~~~
또는
~~~~
$ adb shell dd if=/data/local/tmp/TAbackup.img of=/dev/block/bootdevice/by-name/TA
~~~~
7. 기기를 재부팅하면 TA 복원이 완료됩니다.


## 참조
[XDA Developer Xperia Forum](https://forum.xda-developers.com/crossdevice-dev/sony/universal-dirtycow-based-ta-backup-t3514236)
