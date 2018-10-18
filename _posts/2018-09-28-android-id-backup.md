---
layout: post
title:  "안드로이드 ID 백업하기(android_id Backup)"
author: SiRyuA
categories:
- Android
tags:
- Android
- ID
---


## 주의사항
1. **개발자 옵션** 에서 **ADB 디버깅** 이 활성화 되어있어야 합니다.
 * 개발자 옵션은 **설정 > 휴대전화 정보 > 빌드번호** 를 7번 이상 클릭하면 나타납니다.


## 현재 android_id 가져오기
~~~~
$ adb shell content query --uri content://settings/secure --where "name=\'android_id\'"
~~~~


## android_id 값 업데이트하기
~~~~
$ adb shell content update --uri content://settings/secure --bind value:s:<new_android_id> --where "name=\'android_id\'"
~~~~


## android_id 값 삭제
~~~~
$ adb shell content delete --uri content://settings/secure --where "name=\'android_id\'"
~~~~


## android_id 값 삽입
~~~~
$ adb shell content insert --uri content://settings/secure --bind name:s:android_id --bind value:s:<new_android_id>
~~~~
