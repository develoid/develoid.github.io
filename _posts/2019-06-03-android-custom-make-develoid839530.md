---
layout: post
title: '플래싱 파일 만들기'
author: '첫발짝'
categories: Android-Custom-Make
tags:
- Android
- Custom
- Make
-
---


<script> location.href='https://cafe.naver.com/develoid/839530' ; </script>

<p>플래싱 파일을 만드려면 먼저 빈 폴더를 하나 만들어 주세요. (안만드셔도 상관없지만 편의상 만드는 것이 편합니다. 저는 zip으로 했습니다)<b>그런 뒤 META-INF 폴더와 system 폴더를 만들어 주시고 system 폴더 안에는 system 폴더 안에 변경/추가할 것들을 넣어 주세요<b>테마 스토어를 넣으려고 할 시 <b>ZIP/system/priv-app/SamsungThemes_v4<b>ZIP/system/priv-app/ThemeCenter<b><b>이런 식으로 폴더를 만들어 주셔야 합니다<b><b>그다음 META-INF 폴더 안에 com 폴더, 그 안에 google 폴더, 그 안에 android 폴더를 만들어 주시고 그 안에 updater-script (확장자 없음) 파일을 만들어 주시고 텍스트 편집기로 열어 주세요.<b><b>run_program("/sbin/mount", "/system");<b>package_extract_dir("system", "/system");<b>run_program("/sbin/umount", "/system");<b><b>이 내용을 안에 넣어 주시고 저장해 주세요.<b>만약 출력하고 싶으신 문구가 있으시다면 ui_print("출력하고 싶으신 문구");<b>를 넣어주세요(영어만 가능합니다)<b><b>예시:<b><b>run_program("/sbin/mount", "/system");<b>package_extract_dir("system", "/system");<b>run_program("/sbin/umount", "/system");<b>ui_print("PATCH DONE!");<b><b>그리고 update-binary를 넣어주세요 (구글에 검색하시면 다운받으실 수 있습니다)<b>그런 뒤 META-INF와 system 2개를 선택하고 압축하기를 눌러주시면 완료입니다!</p>
