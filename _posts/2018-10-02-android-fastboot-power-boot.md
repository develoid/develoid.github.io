---
layout: post
title:  "패스트부트(Fastboot) 전원 연결시 자동 부팅"
date:   2018-10-02 00:00:00 +0900
author: SiRyuA
categories:
- Android
tags:
- Android
- Fastboot
---

## 전원 연결시 자동 부팅

#### 자동부팅되게 만들기
~~~~
$ fastboot oem off-mode-charge 0
~~~~
또는
~~~~
$ fastboot oem off-mode-charge disable
~~~~

#### 원상복구

~~~~
$ fastboot oem off-mode-charge 1
~~~~
또는
~~~~
$ fastboot oem off-mode-charge enable
~~~~
