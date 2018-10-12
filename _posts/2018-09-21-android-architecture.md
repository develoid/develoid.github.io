---
layout: post
title:  "안드로이드 아키텍처(Android Architecture)"
date:   2018-09-20 00:00:00 +0900
author: SiRyuA
categories:
- Android
tags:
- Android
- Platform
- Architecture
---

## 아키텍처(Architecture)란?
시스템이 어떻게 작동하는지, 컴퓨터를 기능면에서 본 구성 방식. 기억 장치의 번지 방식, 입출력 장치의 구성 방식 등을 말하는 용어입니다.


## 안드로이드 아키텍처 구조

![안드로이드 아키텍처 1](http://postfiles7.naver.net/MjAxNzA1MDdfODgg/MDAxNDk0MTQ5MzE2ODA0.g6uVLWMj30bxuyuIb2Pgs_f3bDNQbQK18upZzVk870Ig.XPYyRYDTYOBlfd3txPijOcJ5whgAlvnnyNPi_EfuQHIg.PNG.searphiel9/android_framework_details.png?type=w966)
##### 출처 : 구글 개발자 블로그

![안드로이드 아키텍처 2](http://postfiles15.naver.net/MjAxNzA1MDdfNTgg/MDAxNDk0MTQ5MzE2ODA3.rF3Zi5QiImBcv0E2CyaXCGT26DKZaf-T7D9LblZ3BlYg._kXJE_87_LPXJtnUyiypryATWBS-BkOhNVTc0d4V4pwg.PNG.searphiel9/android-stack_2x.png?type=w966)
##### 출처 : 구글 개발자 블로그

![안드로이드 아키텍처 2](https://source.android.com/devices/images/ape_fwk_all.png)
##### 출처 : 구글 개발자 블로그


안드로이드 플랫폼 아키텍처를 나누어보면, 리눅스 커널(LINUX KERNEL) / 하드웨어 추상화 계층(HAL : Hardware Abstraction Layer) / 네이티브 라이브러리(NATIVE LIBRARIES) / 안드로이드 런타임(ANDROID RUNTIME) / 안드로이드 프레임워크(ANDROID FRAMEWORK) / 애플리케이션(APPLECATION) 으로 나뉘어 있습니다.


## 참조
[Android Developer](https://developer.android.com/guide/platform/)
