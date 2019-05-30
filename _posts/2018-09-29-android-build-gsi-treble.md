---
layout: post
title:  "안드로이드 GSI Treble 빌드하기"
author: SiRyuA
categories:
- Android-Develop
tags:
- Android
- Android-Develop
- Build
---

### [안드로이드 빌드 환경 구성](/android-develop/android-build-settings.html) 이 되어있어야 합니다.

### [안드로이드 소스 다운로드](/android-develop/android-source-download.html) 에서 "repo sync"을 제외한 나머지 작업이 되어있어야됩니다.


## GSI Treble 빌드하기
1. repo 에 phhusson 님의 repo 를 추가
~~~~
$ git clone https://github.com/phhusson/treble_manifest .repo/local_manifests -b <branch>
~~~~
 * 예시
 ~~~~
 $ git clone https://github.com/phhusson/treble_manifest .repo/local_manifests -b android-8.1
 $ git clone https://github.com/phhusson/treble_manifest .repo/local_manifests -b android-9.0
 ~~~~
2. patches 를 받아와서 패치를 진행
~~~~
$ git clone https://github.com/phhusson/treble_patches -b <branch>
$ patch -p1 < patch
~~~~
3. 환경 초기화 후 대상 선택하여 빌드 진행
~~~~
$ source build/envsetup.sh && lunch
$ WITHOUT_CHECK_API=true
$ make systemimage
~~~~


## 기타사항
1. branch 확인
 * [treble_manifest](https://github.com/phhusson/treble_manifest) 에서 가능합니다.
2. 결과물 위치
 * ~/android/out/target/product/phh * 경로
3. 빌드 속도 향상 방법
~~~~
make "-j<N>"
~~~~
 * "N" 의 값은 코어 갯수 x 쓰레드 갯수
4. 빌드 속도를 빠르게 하는 방법
~~~~
$ export USE_CCACHE=1
$ export CCACHE_COMPRESS=1
$ prebuilts/misc/linux-x86/ccache/ccache -M 50G
~~~~
5. "lexer.cpp" 또는 "LC_TIME" 관련 오류가 발생
~~~~
$ export LC_ALL=C
~~~~




## 참조
[Android Developer](https://source.android.com/setup/build/requirements)
