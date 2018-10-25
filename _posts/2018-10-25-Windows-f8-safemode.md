---
layout: post
title:  "윈도우 F8 안전모드 활성화하기"
author: SiRyuA
categories:
- Microsoft
tags:
- Microsoft
- Windows
- Command
---

### CMD 또는 Powershell 에서 사용되는 명령어 입니다.

# F8 안전모드 부팅 활성화
~~~
bcdedit /set {default} bootmenupolicy legacy
~~~


# F8 안전모드 부팅 비활성화
~~~
bcdedit /set {default} bootmenupolicy standard
~~~
