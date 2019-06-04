---
layout: post
title: '삼성 마시멜로 밝기 슬라이더 바로 보이도록 하기'
author: '세나'
categories: Samsung-Custom
tags:
- Samsung
- Device
- Custom
-
---


<script> location.href='https://cafe.naver.com/develoid/696492' ; </script>

<p>2016B 그레이스 기준</p><p>SystemUI.apk</p><p>Feature.smali</p><p>BrightnessConceptV2 검색</p><p>v0을 v2로 변경</p><p>그 아래에</p><p>SupportSFinderBarStyle:Z</p><p>v0을 v2로 변경</p><p>tw_status_bar_expanded_header.xml</p><p>ImageView android: 의 width height를 0.0dip로 변경</p><p>이렇게 하면 퀵패널을 확장하지 않아도 밝기슬라이더가 보이며.....남아있는 에스파인더의 레이아웃으로 인해서 밝기슬라이더가 짤리는 현상이 픽스가 되고 </p><p>전혀 쓸일이 없는 에스파인더 버튼은 사라집니다.</p>
