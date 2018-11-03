---
layout: post
title:  "Recovery Error 7 해결하기"
author: "i0n"
categories:
- Android-Custom
tags:
- Android
- Android-Custom
- TWRP
- Lineage OS
- Error
- "Updater Script"
---

# ERROR 7 발생 이유
대다수 커스텀 롬의 설치는 플래싱 파일로 진행됩니다. 플래싱 파일 안에는 어떻게 설치를 진행하는지 적혀있는 스크립트 구문이 있습니다. 이 과정에서 사용자가 잘 못된 기기에 설치하는 것을 방지하기 위해 **Updater-Script(또는 Updater-Binary)** 안에 기기명을 확인하는 명령어를 기입해서 잘 못 되었을 경우 설치를 진행하지 않도록 해놓습니다.

이 과정에서 한 가지 문제점이 발생하는데, 글로벌 모델을 포함해서 국가별로 출시한 기기가 모델 명칭이 다른 경우가 많이 있습니다. 이 경우 분명 설치가 가능한 기기임에도 불구하고 기기명을 확인하는 과정에서 이름이 다르기 때문에 설치를 진행하지 못하고 `Updater process ended with Error:7` 이라 빨간 오류 메시지를 출력하고 설치를 정지하게 됩니다.


# ERROR 7 해결 방법

1. 기기명 인식 오류 같은 경우
  * **Updater-Script(또는 Updater-Binary)** 를 **Notepad++** 등의 텍스트 에디터로 열어서 `getprop` 구문에 본인의 기기명을 추가하거나, 모든 기기명칭을 확인하는 과정을 삭제하면 됩니다.

2. 부트로더 버전의 문제
  * 대다수 이 경우 ERROR 7 이라 표기하지 않고, `zip signature verification failed!` 으로 오류 메세지를 출력합니다. 이 경우 적합한 부트로더 버전으로 업데이트를 진행 한 후 설치합니다.


## 참조
[Lineage OS](http://www.lineageosdownloads.com/fix-error-7-lineage-os/)
