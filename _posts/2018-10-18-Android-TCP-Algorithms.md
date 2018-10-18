---
layout: post
title:  "안드로이드 TCP 알고리즘(Algorithms)"
author: SiRyuA
categories:
- Android
tags:
- Android
- I/O
- Schedulers
---

## TCP 알고리즘이란?
네트워크 데이터 전송 프로토콜인 TCP 통신에 대한 알고리즘으로, 네트워크 정체를 방지하고 빠르고 효율적인 네트워크 통신을 목표로 하고 있습니다.


## TCP 알고리즘에서 주의해야될 사항
1. 다운로드 / 업로드 속도 - 숫자가 높을 수록 좋음
2. 대기시간 - 숫자가 낮을수록 좋음


## TCP 알고리즘의 종류
1. Tahoe
  * 알수없는 패킷 수신을 제한
2. Reno
  * 동일한 패킷 3개가 수신되면 반으로 나눔
3. Vegas
  * 패킷 통신 제한 시간을 지연시켜 더 많이 수신할 수 있도록하여 더 빠른 속도로 통신
4. Hybla
5. Cubic
6. Westwood/Westwood+
  * 매개 변수 제어를 효율적으로 하여 스트리밍 및 인터넷 검색 품질을 향상
7. Low Priority (LP)
  * 혼잡한 통신을 회피하여 단방향 패킷 지연 사용
8. Binary Increase Congestion control (BIC)
  * 대기시간이 긴 장거리 네트워크 통신에 최적화 되어있음
9. Scalable
  * 패킷 손실이 중단될때까지 처리량을 줄임
10. Hamilton TCP (HTCP)
  * 고속 장거리 네트워크 통신을 위해 설계
11. Veno
  * 무선 네트워크를 통해 TCP 성능 향상
12. Illinois
  * 고속 장거리 네트워크 통신을 위해 설계
  * 표준 TCP 알고리즘에 대해 송신부 변경으로 높은 처리량을 제공
13. High speed (HSTCP)
  * 새로운 혼잡 제어 알고리즘 프로토콜
14. Yeah-TCP
  * 혼잡 손실/지연 접근법을 사용하는 고속 TCP 혼잡 제어 알고리즘
15. CDG
  * 패킷 손실과 대기열 지연에 모두 반응하는 하이브리드 혼잡 제어 알고리즘


#### [보다 자세한 TCP 알고리즘 별 설명 보러가기](https://forum.xda-developers.com/showpost.php?p=67085276&postcount=7)


## 참조
[XDA-Developers](https://forum.xda-developers.com/showpost.php?p=67085276&postcount=7)
