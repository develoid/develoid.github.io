---
layout: post
title:  "윈도우에서 GRUB 제거"
author: SiRyuA
categories:
- Microsoft
tags:
- Microsoft
- Windows
- Command
- Linux
- GRUB
- MultiBoot
---

# GRUB 삭제 방법
1. 부팅디스크를 통해서 컴퓨터 복구에 들어간다.
2. 명령프롬포트 창을 띄운다
3. bootrec.exe /fixmbr 을 입력한다.
4. "작업을 완료했습니다" 를 확인하고 재부팅한다.
5. GRUB 제거 완료되어있으며 정상적으로 윈도우 부팅이 이루어지는 것을 확인 할 수 있다.
