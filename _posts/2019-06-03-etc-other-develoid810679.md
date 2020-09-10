---
layout: post
title: '[커뮤니티] [스냅드래곤 전기종 해당] 자신의 폰의 ARB값을 확인하는 법'
author: 'lq092007'
categories: Etc-Ohter
tags:
- Android
- Snapdragon
-
-
---


<script> location.href='https://cafe.naver.com/develoid/810679' ; </script>

<p>1. aboot파티션을 dd if명령어로 추출해줍니다.2. hex에디터로 해당 파일을 연뒤 ASCII 검색기능으로 SW_ID를 검색해줍니다.</p>
<img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA3MTVfNTMg/MDAxNTMxNjMxMTc0OTQ3.ej9x_KXKqDfrToudzNzCsfEJKqeMMqie-reHq6sowIkg.aEBdCpNR5SnS5qi-PmqbYo9TwQnVu87r1o8QUBHVBpYg.JPEG.lq092007/externalFile.jpg?type=w740"><p>위 사진 처럼 SW_ID문자 바로 전의 숫자 코드값 부분의 8번째 자리의 숫자가 현재 자신의 ARB값입니다. LG G4의 경우는 부트로더를 언락하지 않으면 0 언락하면 2가 됩니다. 저는 부트로더를 언락한 상태기에 2를 가리키고 있습니다. </p>
