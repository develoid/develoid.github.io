---
layout: post
title:  "안드로이드 빌드 할때 Open Gapps 추가"
date:   2018-09-29 00:00:00 +0900
author: SiRyuA
categories:
- Android
tags:
- Android
- Build
---

### [안드로이드 빌드 환경 구성](/android/android-build-settings.html) 이 되어있어야 합니다.

### [안드로이드 소스 다운로드](/android/android-source-download.html) 에서 "repo sync"을 제외한 나머지 작업이 되어있어야됩니다.


## Open Gapps 다운로드 소스 추가
repo sync 전 manifest 에 아래와 같이 추가
~~~~
<remote name="opengapps" fetch="https://github.com/opengapps/"  />

<project path="vendor/opengapps/build" name="aosp_build" revision="master" remote="opengapps" />
<project path="vendor/opengapps/sources/all" name="all" clone-depth="1" revision="master" remote="opengapps" />

<!-- arm64 depends on arm -->
<project path="vendor/opengapps/sources/arm" name="arm" clone-depth="1" revision="master" remote="opengapps" />
<project path="vendor/opengapps/sources/arm64" name="arm64" clone-depth="1" revision="master" remote="opengapps" />

<project path="vendor/opengapps/sources/x86" name="x86" clone-depth="1" revision="master" remote="opengapps" />
<project path="vendor/opengapps/sources/x86_64" name="x86_64" clone-depth="1" revision="master" remote="opengapps" />
~~~~


## 빌드 과정에 Open Gapps 포함시키기
"device/<제조사 명>/<기기 명>/device.mk" 에 아래와 같이 추가
~~~~
GAPPS_VARIANT := <Gapps 버전>
$(call inherit-product, vendor/opengapps/build/opengapps-packages.mk)
~~~~
* 예시
~~~~
GAPPS_VARIANT := stock
$(call inherit-product, vendor/opengapps/build/opengapps-packages.mk)
~~~~
* 추가 가능한 버전
  * nano, micro, mini, full, stock, super


## Open Gapps 커스터마이즈하기
1. 앱 패키지 추가
~~~~
GAPPS_PRODUCT_PACKAGES += <앱 패키지명>
~~~~
 * 예시
 ~~~~
 GAPPS_PRODUCT_PACKAGES += Chrome
 GAPPS_PRODUCT_PACKAGES += Youtube
 GAPPS_PRODUCT_PACKAGES += Music2
 ~~~~
2. 앱 패키지 제외
~~~~
GAPPS_EXCLUDED_PACKAGES := <앱 패키지명>
~~~~
 * 예시
 ~~~~
 GAPPS_EXCLUDED_PACKAGES := Hangouts
 GAPPS_EXCLUDED_PACKAGES := Chrome
 ~~~~
3. AOSP 순정에서 Gapps 로 앱 덮어쓰기
 * 전체 패키지
 ~~~~
 GAPPS_FORCE_PACKAGE_OVERRIDES := true
 ~~~~
 * Webview
 ~~~~
 GAPPS_FORCE_WEBVIEW_OVERRIDES := true
 ~~~~
 * SMS/MMS
 ~~~~
 GAPPS_FORCE_MMS_OVERRIDES := true
 ~~~~
 * 전화/연락처
 ~~~~
 GAPPS_FORCE_DIALER_OVERRIDES := true
 ~~~~
 * 브라우저
 ~~~~
 GAPPS_FORCE_BROWSER_OVERRIDES := true
 ~~~~
 * 픽셀 런처로 변경
 ~~~~
 GAPPS_FORCE_PIXEL_LAUNCHER := true
 ~~~~
 * 개별 앱 별로 패키지에 덮어쓰기
 ~~~~
 GAPPS_PACKAGE_OVERRIDES := <앱 패키지 명>
 ~~~~
4. 기본 패키지를 덮어쓰지 않게 하기
~~~~
GAPPS_BYPASS_PACKAGE_OVERRIDES := <앱 패키지 명>
~~~~
5. 기기의 DPI 에 맞는 패키지 가져오게 하기
~~~~
GAPPS_FORCE_MATCHING_DPI := true
~~~~


## 기타사항
1. 앱 패키지명 확인 방법
  * ~/android/vendor/opengapps/opengapps-packages.mk 에서 확인가능
2. Gapps 를 내장했는데 Google 로그인이 안되는 경우
  * GAPPS_FORCE_WEBVIEW_OVERRIDES := false 추가
  * Chrome Webview 를 사용하는 경우 발생


## 참조
[Open Gapps Github](https://github.com/opengapps/aosp_build)
