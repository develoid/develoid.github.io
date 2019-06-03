---
layout: post
title: '삼성 마시멜로에서 사라진 충전시간 알림 살리기.'
author: '세나'
categories: Samsung-Custom
tags:
- Samsung
- Device
- Custom
-
---


<script> location.href='https://cafe.naver.com/develoid/696405' ; </script>

<p>SystemUI.apk</p><p><b></p><p>PowerUI.smali</p><p><b></p><p>SupportChargingRemainingTime 검색</p><p><b></p><p><b>&nbsp;&nbsp;&nbsp; iput-boolean v2, p0, Lcom/android/systemui/power/PowerUI;-&gt;mSupportChargingRemainingTime:Z</p><p><b></p><p>v2를 v4로 변경</p><p><b></p><p>PowerNotificationWarnings.smali</p><p><b></p><p>showChargingNotice(ZI)V 검색</p><p><b></p><p><b>&nbsp;&nbsp;&nbsp; const-string v3, "PowerUI.Notification"</p><p>&nbsp;&nbsp;&nbsp; const-string v4, "Charging remaining time is not supported and connected cable is not a fast/slow charger, so return!"</p><p><b></p><p>이게 나오는데 그 위에</p><p><b></p><p>if-eq if-nez if-eqz if-ne 등을 서로 반대되게 변경</p><p><b></p><p>eq&gt;&gt;&gt;ne</p><p>eqz&gt;&gt;nez</p><p>ne&gt;&gt;eq</p><p>nez&gt;&gt;eqz</p>
