---
layout: post
title:  "안드로이드 소스 다운로드"
author: SiRyuA
categories:
- Android-Develop
tags:
- Android
- Android-Develop
- Build
---

### [안드로이드 빌드 환경 구성](/android/android-build-settings.html) 이 되어있어야 합니다.


## 안드로이드 소스 받기
1. 소스 받을 폴더 및 해당 폴더 진입
~~~~
$ mkdir ~/android
$ cd ~/android
~~~~
2. Git 의 "유저명" 과 "이메일" 를 설정
~~~~
$ git config --global user.name "<USER NAME>"
$ git config --global user.email "<EMAIL>"
~~~~
 * 예시
 ~~~~
 $ git config --global user.name "Develoid"
 $ git config --global user.email "develoid@naver.com"
 ~~~~
3. repo 설정
~~~~
$ repo init -u https://android.googlesource.com/platform/manifest -b <branch>
~~~~
 * 예시
 ~~~~
 $ repo init -u https://android.googlesource.com/platform/manifest -b android-9.0.0_r1
 ~~~~
4. 소스 동기화 (소스 받기)
~~~~
$ repo sync
~~~~


## 기타사항
1. branch 란?
 * 간단하게 생각해서 소스코드의 버전관리
2. 안드로이드 버전 branch 는 어디서 확인 가능한가?
 * [Android Manifest](https://android.googlesource.com/platform/manifest) 에서 가능
3. 조금 더 소스를 빨리 받는 방법
 * repo sync 뒤에 "-j<N>"
 * "N" 의 값은 코어 갯수 x 쓰레드 갯수


## 참조
[Android Developer](https://source.android.com/setup/build/requirements)
