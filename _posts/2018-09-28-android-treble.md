---
layout: post
title:  "안드로이드 트레블(Android Treble)"
author: SiRyuA
categories:
- Android
tags:
- Android
- Treble
---


## 안드로이드 트레블이란?
새로운 안드로이드 OS가 출시될 때, 안드로이드 사용자가 업데이트 하기 위해서는 제조사에서 엄청난 시간과 비용을 소요해서 새로히 단말기에 맞추어서 개발하는데 투자를 해야된다는 것입니다. 이에 대해서 장비 제조업체와 칩셋 제조업체와의 협력하여 이 부분을 개선한 것이 바로 안드로이드 트레블입니다. 안드로이드 트레블은 안드로이드 자체를 모듈화 시켜서 업데이트 과정을 축소, 보다 빠르게 사용자가 새로운 안드로이드 OS를 경험 할 수 있도록 하는데 중점을 두고 있습니다.


## 안드로이드 트레블 세부분석
1. 기존 제조사들은 안드로이드가 업데이트되면 퀄컴 등 칩셋 제조업체에서 업데이트 된 드라이버를 제공해야지만 작업이 가능하고, 이후 안드로이드 OS 프레임워크를 전체적으로 수정하여 업데이트를 진행 할 수 있었습니다.
2. 이에 대해서 구글은 칩셋 제조사별 코드를 안드로이드 OS 프레임워크에서 분리하는 대신 자체적으로 구현하여 적용 할 수 있도록 하였습니다. 즉, 트레블이 적용된 이후부터 HAL(하드웨어 추상화 레이어) 등 하드웨어 관련 벤더가 안드로이드 OS 프레임워크와 별개적으로 업데이트를 진행할 수 있게 되었습니다.
3. 제조사는 안드로이드 OS 프레임워크와 표준화된 방식으로 HAL과 통신 할 수 있는 코드를 구현해야됩니다. 이는 HIDL(HAL Interface Definition Language)를 통해서 이루어지게 됩니다. 이를 통해서 제조사는 칩셋 제조사가 HAL을 업데이트 할 때 까지 기다리지 않고 언제든지 안드로이드 업데이트를 수행 할 수 있게 되었습니다.
4. 즉, 제조사가 Play스토어를 통해서 언제든지 코드를 APK를 통해서 업데이트를 할 수 있게 됨으로 전체 안드로이드 업데이트 프로세스의 속도가 빨라집니다.


## 기존 제조사 업데이트 방식
![기존 업데이트 방식](http://postfiles7.naver.net/MjAxODAyMjdfMjgx/MDAxNTE5NzAzOTYyMDA5.vpRjyD2CgpS_y9590OjuLGd2aJzBdswhZPYKtF3a7Qgg.6XmijxObb20ArNOevxVMi4X9n61B6RIOlV4BdZnssD8g.PNG.searphiel9/1.png?type=w966)
##### 출처 : 구글 개발자 블로그

기존 안드로이드 출시 및 업데이트 과정은 다음과 같이 이루어집니다.

1. 안드로이드 팀은 최신 릴리즈된 코드를 오픈소스로 게시합니다.
2. 안드로이드 기기에 사용되는 칩셋 제조회사는 새로운 안드로이드에 맞추어 새로운 버전의 드라이버를 준비합니다.
3. 새로운 드라이버가 준비된 칩셋 제조회사는 기기 제조사에 전달하며, 기기 제조사는 기기에 필요한 것에 맞추어서 새로운 버전을 준비합니다.
4. 기기 제조사와 통신사와 협력하여 새로운 버전에 대해서 테스트를 진행하고 인증합니다.
5. 기기 제조사에서는 새롭게 만들어진 버전에 대해서 사용자가 사용 할 수 있도록 업데이트를 진행합니다.


## 트레블 업데이트 방식
![트레블 업데이트 방식](http://postfiles1.naver.net/MjAxODAyMjdfMzAw/MDAxNTE5NzA2MTg5MzQ5._b_l0-zw5QhEGxWfQSq5s59_6bo9rdLdzeyWfzJg_5Qg.iF8YZq38P8M-ZqYvwR87Mwr9fbETaoo7ay6bKlI3aT4g.PNG.searphiel9/4.png?type=w966)
##### 출처 : 구글 개발자 블로그

트레블이 적용되기 전, 기기 제조사에서 안드로이드 기기를 업데이트 하기 위해서는 안드로이드 전반에 걸쳐서 많은 코드들을 수정하고 업데이트하여야 됩니다. 이러한 부분에 대해서 하드웨어 벤더 부분에 벤더 인터페이스를 도입, 분리함으로 칩셋 제조사에게 새로운 드라이버를 요구하는 작업을 진행 할 필요없이 안드로이드 OS 프레임워크만 업데이트하여 안정적으로 업데이트를 제공할 수 있게 됩니다.


## 트레블 지원하는 기기
1. 안드로이드 8.0 이상으로 출시되는 모든 기기는 안드로이드 트레블을 완전히 지원해야 됩니다.
2. 안드로이드 8.0 으로 업데이트 되는 기기는 트레블을 지원하지 않아도 됩니다.(선택)


## 벤더 인터페이스(Vendor Interface)
![Vendor Interface](http://postfiles4.naver.net/MjAxODAyMjdfMjk0/MDAxNTE5NzA1ODQwMTc1.DryUXDvdg603JSHuWmmmaEnaerR82lax1rAqzaP3h-Ig.FFqQOADUhMDcB_YbW0QN4n7ah04NLDE3v_egpR0xuTUg.PNG.searphiel9/2.png?type=w966)
##### 출처 : 구글 개발자 블로그

2007년 안드로이드가 공개되고, 안드로이드 개발팀은 다양한 제조사에서 안드로이드를 사용하고 확장해 나갈 생각이였습니다. 이를 위해서는 API의 일관성이 중요하다는 것을 알고있었고, 지금은 100만건이 넘는 테스트를 포함한 호환성 정의 문서(CDD)와 관련 CTS(Compatibility Test Suite)에서 지정한 개발자용 API를 위한 호환성 프로그램을 만들었습니다. 그 결과 오늘날 앱개발자는 서로 다른 제조사의 서로 다른 하드웨어, 10억개 이상의 기기에서 작동하는 단일 애플리케이션을 만들 수 있게 되었습니다.

안드로이드 트레블은 CTS 검증을 통해서 단일 애플리케이션이 수 많은 기기에서 돌아가게 한 것처럼 하드웨어에 대해서 같은 목표를 가지고 있습니다. 안드로이드 OS 프레임워크에서 하드웨어 벤더를 분리하고, 이 사이에 새로운 벤터 인터페이스를 도입하며, CTS와 유사한 VTS(Vendor Test Suite)를 이용하여 검증하도록 합니다.


## VTS 란?
Vendor Test Suite, 애플리케이션 호환성 검사 도구인 CTS와 마찬가지로 개발과정에서 하드웨어 벤더와 관련하여 검사 할 수 있는 도구입니다. pre-Trable 및 트레블 환경에서 HAL 과 OS 커널 등 벤더 영역에 대해 테스트를 진행 할 수 있습니다.


## VTS 와 AOSP
앞으로 안드로이드 기기를 출시하기위해서 구글의 인증을 받기 위해서는 VTS를 통과해야됩니다. 즉 하드웨어 벤더 소스코드가 트레블을 지원해야된다는 것입니다. VTS의 요구사항 중 하나는 트레블을 이용하여 안드로이드의 가장 순정인 상태, 즉 AOSP가 부팅이 될 수 있어야됩니다.


## 안드로이드 트레블과 커널
![Treble and Kernel](http://postfiles12.naver.net/MjAxODAyMjdfMjkz/MDAxNTE5NzE0NTA0MDk4.Uk__8dUbyZ8TMylm1NDApzb0OUdmchxRaxXqTFr1dW0g.kw9V4bRCE-LuWWUmILM2zUo68zsFwirUEkonbkKZMsYg.PNG.searphiel9/5.PNG?type=w966)
##### 출처 : 구글 개발자 블로그

* Vendor Interface (VINTF)
  * 버전별 HAL 인터페이스 수집
  * 사용자 인터페이스에 연계된 커널 인터페이스
* Vendor Test Suite(VTS)
  * 구동 확인을 위한 테스트 VINTF 모음집
  * VTS 테스트를 통해서 VINTF가 안드로이드 OS 프레임워크와 잘 연동되는 지 확인합니다.
* Linux Kernel
  * 안드로이드 플랫폼의 기초
  * 프레임워크는 핵심 커널 인터페이스에 의존됩니다.
  * VTS 테스트 대상입니다.
* 최소 커널 버전
  * 2017년 이후 제품화된 SoC는 4.4 이상의 커널이 사용되어야 합니다.
  * 이외 나머지 SoC는 구동을 위해서 3.18 이상 커널이 사용되어야 합니다.


## 트레블 활성화 유무 확인하기 - ADB 이용
~~~~
$ adb shell getprop ro.treble.enabled
~~~~
위의 값 입력 후 True 값이 나온다면 트레블이 활성화 되어있는 것입니다.



## 참조
[Android Developer](https://source.android.com/devices/architecture/treble)
