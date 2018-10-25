---
layout: post
title:  "윈도우 멀티부팅 부트메뉴 텍스트 타입으로 변경"
author: SiRyuA
categories:
- Microsoft
tags:
- Microsoft
- Windows
- Command
---

### CMD 또는 Powershell 에서 사용되는 명령어를 이용합니다.

# GUI 형식에서 텍스트 형식으로 변경
~~~
bcdedit /set {default} bootmenupolicy legacy
~~~
