---
layout: post
title:  "Xperia 플래시/패스트부트/리커버리 모드"
author: SiRyuA
categories: Sony
tags:
- Android
- Sony
- Hardware
- Mode
- Key
---

## 하드웨어 모드란?

펌웨어 교체, 복구, 부트로더 언락 등을 위해서 사용되는 하드웨어의 특수한 상태를 말합니다.


## 구분

| 모드                       | 진입 방법      | 설명                                                            |
|----------------------------|----------------|-----------------------------------------------------------------|
| Flash Mode                 | 볼륨 하        | 기기의 순정 펌웨어 등을 설치하기 위해 사용하는 모드             |
| Fastboot Mode (Bootloader) | 볼륨 상        | 기기의 언락 또는 펌웨어 이미지 등을 설치하기 위해 사용하는 모드 |
| Recovery Mode              | 전원 + 볼륨 하 | 기기의 복구모드                                                 |


## adb 를 이용한 진입 방법
* Fastboot Mode
~~~~
$ adb reboot bootloader
~~~~
* Recovery Mode
~~~~
$ adb reboot recovery
~~~~


### 참고사항
아래의 기기들은 Fastboot 모드를 진입하기 위해서 **볼륨 상** 이 아닌 **Menu** 버튼을 눌러야 합니다.
* Live with Walkman
* Xperia arc
* Xperia arc S
* Xperia neo
* Xperia neo V
* Xperia pro
* Xperia PLAY


## 참조
* [Sony Developer](https://developer.sony.com/develop/open-devices/get-started/flash-tool/useful-key-combinations/)
