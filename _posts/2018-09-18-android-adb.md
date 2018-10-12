---
layout: post
title:  "ADB(Android Debug Bridge)"
date:   2018-09-18 00:00:00 +0900
author: SiRyuA
categories: Android
tags:
- Android
- Debug
- ADB
- Tools
---

### 안드로이드 장치를 디버깅하는 툴


## 상세설명
ADB 는 Android Debug Bridge 의 약자로, 예뮬레이터 또는 안드로이드 기기와 통신 할 수 있는 다목적 명령어 툴입니다.
앱 설치 및 디버깅과 같은 다양한 작업을 할 수 있게 해주며, 예뮬레이터 또는 연결된 안드로이드 기기에 다양한 명령을 실행 할 수 있는 Unix Shell 접근을 제공합니다.


## 주요 구성요소
* 명령을 전송하는 클라이언트
* 기기에 명령을 실행하는 데몬
* 클라이언트와 데몬간의 통신을 관리하는 서버


## adb 를 통해서 할 수 있는 것
1. 시스템 정보 확인
2. 발생되는 에러 확인
3. 스크린샷 및 화면녹화
4. 시스템 애플리케이션 비활성화
5. 애플리케이션 백업


## 안드로이드 기기에서 adb 활성화
1. adb 활성화는 개발자 옵션에 있습니다.
2. Android 4.2 이상 버전부터는 기본적으로 숨김 처리되어있습니다.
3. **설정 > 휴대전화 정보 > 빌드번호** 를 7번 이상 클릭하면 **개발자옵션** 나타납니다.


## WiFi 를 이용한 adb 연결
1. 먼저 USB 를 연결 한 후 TCP/IP 통신에 사용할 포트를 활성화 합니다.
~~~~
$ adb tcpip 5555
~~~~
2. 안드로이드 기기의 IP 주소를 통해서 연결합니다.
~~~~
$ adb connect "안드로이드 기기 IP 주소"
~~~~
3. 연결이 되었는지 확인합니다.
~~~~
$ adb device
List of devices attached
"안드로이드 기기 IP 주소":5555 device
~~~~


## adb 와 안드로이드 기기 연결 상태 확인하기
~~~~
$ adb devices
~~~~

| 상태      | 설명                                               |
|-----------|----------------------------------------------------|
| offline   | adb 연결되지 않았거나 응답하지 않을 경우           |
| device    | adb 연결되었을 경우                                |
| no device | 연결된 에뮬레이터 또는 안드로이드 기기가 없을 경우 |


## adb 연결에 이상이 있을 경우 조치 방법
~~~~
$ adb kill-server
$ adb start-server
$ adb devices
~~~~


## adb 명령어 모음

| 명령어                                         | 설명                                                          |
|------------------------------------------------|---------------------------------------------------------------|
| adb -h                                         | 도움말                                                        |
| adb start-server                               | adb server 시작                                               |
| adb kill-server                                | adb server 강제종료                                           |
| adb devices                                    | 연결된 안드로이드 기기 목록                                   |
| adb reboot                                     | 안드로이드 기기 재시작                                        |
| adb reboot recovery                            | 리커버리 모드로 재시작                                        |
| adb reboot bootloader                          | 부트로더로 재시작                                             |
| adb pull "안드로이드 기기 경로 파일" "PC 경로" | 안드로이드 기기 경로의 파일을 PC로 가져오기                   |
| adb push "PC 경로 파일" "안드로이드 기기 경로" | PC 경로내 파일을 안드로이드 기기로 복사하기                   |
| adb install test.apk                           | test.apk 설치                                                 |
| adb install -r test.apk                        | test.apk 재설치                                               |
| adb uninstall "package name"                   | 앱 삭제                                                       |
| adb root                                       | root 권한으로 접근                                            |
| adb unroot                                     | root 권한 해제                                                |
| adb logcat                                     | 로그 보기                                                     |
| adb logcat *:E                                 | 에러 로그 보기                                                |
| adb shell -s 명령어                            | 쉘 명령어                                                     |
| adb shell input text "test"                    | test 라 입력하기                                              |
| adb shell pm list packages -f                  | 설치된 모든 앱의 패키지명 가져오기                            |
| adb shell pm clear "package name"              | 해당 패키지 데이터 삭제                                       |
| adb shell pm enable "package name"             | 해당 패키지 활성화                                            |
| adb shell pm disable "package name"            | 해당 패키지 비활성화                                          |
| adb shell ls "폴더위치"                        | 특정 폴더 위치의 리스트 가져오기                              |
| adb shell am force-stop "package name"         | 특정 패키지 강제 종료                                         |
| adb shell screencap /sdcard/screen.png         | 스크린샷을 촬영하여 지장한 경로에 파일로 저장                 |
| adb shell screenrecord  /sdcard/screen.mp4     | 화면을 기록하여 지정한 경로에 파일로 저장 Ctrl+C 로 기록 중지 |
| adb shell cat /proc/version                    | 커널 버전                                                     |
| adb shell cat /proc/cpuinfo                    | 프로세서 정보, CPU타입                                        |
| adb shell cat /porc/meminfo                    | 실제 메모리 및 가상 메모리                                    |
| adb shell cat /proc/devices                    | 커널에 설정된 장치 목록                                       |
| adb shell cat /porc/filesystems                | 커널에 설정된 파일시스템 목록                                 |
| adb shell cat /proc/swaps                      | 스왑 파티션의 크기&사용량                                     |
| adb shell cat /proc/partitions                 | 파티션 정보                                                   |
| adb shell cat /proc/uptime                     | 시스템 가동시간                                               |
| adb shell cat /proc/stat                       | 시스템 상태 정보                                              |
| adb shell vmstat                               | 시스템 리소스 모니터                                          |
| adb shell ps                                   | 실행중인 프로세스 정보                                        |
| adb shell ps -p -t                             | 프로세스&쓰레드 목록                                          |
| adb shell top                                  | 시스템 프로세스 상황 모니터링                                 |
| adb dmesg                                      | 커널 디버깅 메세지 출력                                       |


## adb 다운로드
* [Windows 다운로드](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
* [Linux 다운로드](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)
* [Mac OS 다운로드](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)


## 명령어를 이용하여 설치하기
* Linux
~~~~
$ sudo apt-get install android-tools-adb
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


## 참조
* [Android Developer > Android 디버그 브리지](https://developer.android.com/studio/command-line/adb?hl=ko)
