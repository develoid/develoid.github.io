---
layout: post
title:  "소니 플래시툴(Flashtool)"
date:   2018-09-20 00:00:00 +0900
author: SiRyuA
categories: Sony
tags:
- Android
- Sony
- Flashtool
- Stock
- Bootloader
- Unlock
- Firmware
- Download
---

### **소니 플래시툴(Flashtool)** 사용 후 발생하는 일에 대한 모든 책임은 본인에게 있습니다.



## 주의사항

1. 사용에 있어 절대적 주의가 필요합니다. **한 번의 실수로 영원히 기기를 벽돌(하드 브릭)** 로 만들 수 있습니다.
2. **모든 작업은 공장초기화가 진행** 됩니다.


## 플래시툴(Flashtool) 이란?

Flashtool 은 Androxyde 님께서 만든 X10부터 시작해서 최근 출시한 기종까지 모든 소니 스마트폰에서 작동하는 S1 플래시 소프트웨어 입니다. 원 목적은 SEUS 또는 PCC에서 다운로드 받은 sin 파일을 플래시 하기 위해서 만들어졌으며, 부트로더 언락/리락, TA 백업/복원 등의 작업이 추가되어진 툴입니다.


## 플래시툴(Flashtool) 을 사용해야되는 이유
1. 부트로더가 언락 되어있을 경우 소니 공식 툴이 작동하지 않습니다.
2. 소니 공식 툴은 업그레이드만 지원하며 다운그레이드는 지원하지 않습니다.
3. 다운로드 대상 선택이 가능하여, 필요에 따라 맞추어서 설치가 가능합니다.


## 플래시툴(Flashtool) 다운로드
* [Flashtool 다운로드](http://www.flashtool.net/downloads.php)
* [Flashtool Github](https://github.com/Androxyde/Flashtool)


## 플래시툴(Flashtool) 설명

![Flashtool]({{ site.baseurl }}/postImage/sony-flashtool-01.png)

1. 번개 버튼
 * Fastboot 모드, Flash 모드 선택
 * Fastboot 모드 일 경우 Fastboot 관련해서 진행 할 수 있는 것에 대한 메뉴 출력
 * Flash 모드 선택 할 경우 Flash 모드 펌웨어 설치 작업 진행
2. BLU 버튼
 * 부트로더 언락/리락 진행
3. XF 버튼
 * 순정 펌웨어 다운로드 툴 실행
4. 메뉴 > Advanced > Trim Area > S1 항목
 * TA 파티션 백업/복원 작업 실행


## 순정 펌웨어 설치
1. [XF 버튼을 눌러서 순정 펌웨어를 다운로드 받습니다.](/sony/sony-stock-firmware.html)
2. 번개 버튼을 누른 후 Flash 모드를 선택합니다.
3. 순정 펌웨어를 선택하고 Wipe 항목을 전체 선택합니다.
 * 선택 항목은 개인의 필요에 따라서 조절하면 됩니다.
 * 개인의 필요에 따라서 Exclude 항목도 선택 합니다.
4. Flash 를 눌러서 순정 펌웨어 설치를 진행합니다.
5. 기기를 재부팅 합니다.


## 참조
* [Flashtool](http://www.flashtool.net/)
