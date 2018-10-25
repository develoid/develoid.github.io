---
layout: post
title:  "윈도우 랩탑(노트북) Wi-Fi 공유기로 만들기"
author: SiRyuA
categories:
- Microsoft
tags:
- Microsoft
- Windows
- Command
- Hotspot
---

### CMD 또는 Powershell 에서 사용되는 명령어를 이용합니다.

# 지원 여부 확인
~~~
netsh wlan show drive
~~~
* "호스트된 네트워크 지원" 항목의 값이 "예" 일 경우 가능


# SSID 및 Password 설정하기
~~~
netsh wlan set hostednetwork mode=allow ssid="Wi-Fi Name" key="Wi-Fi Password"
~~~

# 네트워크 설정
1. "네트워크 및 공유센터" 에서 "어뎁터 설정 변경" 으로 진입
2. "이더넷" 을 클릭하고 마우스 우클릭, "속성" 진입
3. "공유" 탭에서 "홈 네트워크 연결" 카테고리에서 "로컬영역연결*숫자" 항목을 선택 후 확인

# 실행 명령어
~~~
netsh wlan start hostednetwork
~~~
* 실행파일로 만들려면 텍스트 에디터에 작성 후 "Hotspot_On.bat" 파일로 만들어 저장

# 종료 명령어
~~~
netsh wlan stop hostednetwork
~~~
* 실행파일로 만들려면 텍스트 에디터에 작성 후 "Hotspot_On.bat" 파일로 만들어 저장
