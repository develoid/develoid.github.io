---
layout: post
title:  "ADB 백업/복원하기(Backup/Restore)"
author: SiRyuA
categories:
- Android
tags:
- Android
- Adb
- Backup
- Restroe
---

## ADB 를 이용한 백업
ADB 자체적으로 App 및 App Data 를 백업 및 복원을 할 수 있는 기능을 제공해주고 있습니다.


## 주의사항
1. **개발자 옵션** 에서 **ADB 디버깅** 이 활성화 되어있어야 합니다.
 * 개발자 옵션은 **설정 > 휴대전화 정보 > 빌드번호** 를 7번 이상 클릭하면 나타납니다.
2. 다른 기기로 백업 데이터를 이동 할 경우 불안정 할 수도 있습니다.


## 백업 방법
1. ADB 디버깅 활성화
2. 명령어 입력
3. 안드로이드 기기에서 "비밀번호 설정" 후 백업 진행



## 백업 명령어
~~~~
$ adb backup -all -f backup.ad
~~~~


## 명령어 설명
~~~~
$ adb backup [-f <file>] [-apk|-noapk] [-shared|-noshared] [-all] [-system|nosystem] [<packages...>]
~~~~
* -f : 파일 저장, 파일명 지정
* -apk / -noapk : apk 파일 포함 유무
* -shared / -noshared : 저장소 백업 유무
* -all : 전체 백업
* -system / -nosystem : 시스템 영역 백업 유무


## 예시
* 예시 1 : 앱 / 앱데이터 / 저장소 / 시스템
~~~~
$ adb backup -apk -shared -system -all -f backup.ad
~~~~
* 예시 2 : 앱 / 앱데이터 / 저장소
~~~~
$ adb backup -apk -shared -nosystem -all -f backup.ad
~~~~
* 예시 3 : 앱 / 앱데이터
~~~~
$ adb backup -apk -noshared -nosystem -all -f backup.ad
~~~~
* 예시 4 : 앱데이터만
~~~~
$ adb backup -noapk -noshared -nosystem -all -f backup.ad
~~~~
* 예시 5 : 개별 앱
~~~~
$ adb backup "apk package name" -f backup."apk name".ad
=> $ adb backup com.test.package -f backup.test.ad
~~~~


## 복원방법
~~~~
$ adb restore backup.ad
=> 이후 안드로이드 기기 확인
~~~~


## 참조
* [Android Developer > Android 디버그 브리지](https://developer.android.com/studio/command-line/adb?hl=ko)
