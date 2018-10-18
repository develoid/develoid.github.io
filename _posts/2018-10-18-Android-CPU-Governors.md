---
layout: post
title:  "안드로이드 CPU 가버너(Governors)"
author: SiRyuA
categories:
- Android
tags:
- Android
- CPU
- Governors
---

## CPU 가버너란?
안드로이드 CPU 가버너는 사용자가 장치에 요구하는 조건에 따라서 CPU의 동작 빈도를 높이거나 낮추는 방법을 제어합니다. 특히 가버너는 기기의 성능과 배터리 수명에 큰 영향을 주기 때문에 스마트폰과 태블릿에서 매우 중요합니다.

* 가버너는 커스텀 롬의 기본 기능 또는 앱을 통해서 변경 할 수 있으며, 루팅 및 가버너를 변경 할 수 있도록 되어있는 커널이어야 가능합니다.


## 가버너의 종류
1. OnDemand
  > * Linux 커널의 최초이가 가장 오래된 가버너입니다.
  > * CPU 사용량에 따라서 필요한 만큼 CPU 클럭 주파수를 상승시시킵니다.
  > * 반응성 문제가 있어 순간 클럭이 올라가더라도 버벅이는 경우가 있습니다.
  > * 제조사에서는 테스트 및 신뢰성이 높아서 과거에 많이 사용했지만, 지금은 Google의 Interactive 가버너로 대체되고 있습니다.
2. OnDemandX
3. Performance
  > * 성능 중점으로 CPU 동작 빈도를 최대로 고정시킵니다.
4. Powersave
  > * Performance 와 반대로 CPU 동작 빈도를 최저로 조절시켜 배터리 수명을 향상시킵니다.
5. Conservative
  > * 낮은 클럭 주파수에서 높은 클럭 주파수로 단계적으로 상승시킵니다.
  > * 사용자가 지정한 최소 클럭 주파수에 따라서 좋지 않은 성능을 제공 할 수 있습니다.
  > * 배터리 수명은 좋을 수도 있습니다.
6. Userspace
  > * 사용자가 애플리케이션 별로 CPU 동작 빈도를 조절 할 수 있습니다. 주로 서버 또는 PC 에서 많이 사용됩니다.
7. Min Max
8. Interactive
  > * 개발자 또는 사용자가 설정한 타이머에 따라서 클럭 주파수를 조절합니다.
  > * CPU 를 사용하게되면 바로 최고 클럭 주파수으로 올라가고, 이후 타이머에 따라서 단계적으로 클럭 주파수를 낮춥니다.
9. InteractiveX
10. Smartass
  > * 필요한 만큼 클럭 주파수를 올립니다.
  > * 대체적으로 낮은 클럭을 유지합니다.
11. SmartassV2
  > * Smartass 를 개량한 버전입니다.
  > * Smartass 보다 반응성 및 성능이 뛰어납니다.
12. Scary
13. Lagfree
14. Smoothass
15. Brazilianwax
16. SavageZen
17. Lazy
18. Lionheart
19. LionheartX
20. Intellidemand
  > * Faux 님이 개발한 가버너입니다.
  > * GPU 사용에 따라서 다르게 동작합니다.
  > * GPU 가 바쁜 경우 Ondemand 처럼 동작합니다.
  > * GPU 가 유휴상태 또는 보통상태 일 경우 배터리 절약을 위해서 기기/커널이 지원하는 주파수 대역에 따라서 조절합니다.
  > * 즉 GPU 의 상태에 따라서 조절됩니다.
  > * Faux 님은 현재 더 나은 최적화 성능을 위해서 intelliactive 를 추천합니다.
21. Hotplug
  > * Core 의 On/Off 기능이 탑제된 가버너입니다.
22. Badass
23. Wheatley
24. Lulzactive
  > * SmartassV2 와 비슷하지만, 더 많은 단계로 클럭을 조절합니다.
25. PegasusQ/PegasusD
26. HotplugX
27. Abyssplug
28. MSM DCVS
29. Intelliactive
  > * Google Interactive 를 기반으로 합니다.
  > * 입력 드라이버의 자체 부스트 기능 제공 (PowerHAL 지원 필요 X)
  > * 2단계 주파수 관리 (직접적으로 최대 주파수로 점프)
  > * 오프라인 CPUS를 점검하고 불필요한 검사를 단락, 코드 실행 경로 향상 => CPU 핫 플러깅을 피할 수 있습니다.
30. Adaptive
31. Nightmare
32. ZZmove
33. Sleepy
34. Hyper
35. SmartassH3
36. SLP
37. NeoX
38. ZZmanX
39. OndemandPlus
40. Dynamic Interactive (DynInteractive)
41. Smartmax
42. Ktoonservative/KtoonservativeQ
43. Performance may cry (PMC)
44. Dance Dance
45. AbyssPlugv2
46. IntelliMM
47. InteractivePro
48. Slim
49. Ondemand EPS
50. Smartmax EPS
51. Uberdemand
52. Yankactive
53. Impulse
54. Bacon
55. Optimax
56. Preservative
57. Touchdemand
58. ElementalX
59. Bioshock
60. Blu_active
61. Umbrella_core
62. ConservativeX
63. Hyrdxq
64. DevilQ
65. Yankasusq
66. Darkness
67. Alucard
68. Hellsactive
69. Ragingmolasses
70. Virtuous
71. Sakuractive
72. InteractiveX v2
73. Alessa
74. GallimaufryX
75. AggressiveX
76. Tripndroid
77. Wrexy
78. Xperience
79. Stockdemand
80. Zeneractive
81. InteractiveB
82. Aggressive
83. IntellidemandV2
84. Boostactive
85. Wave
86. Barry-Allen
87. Arteractive
88. Precognition (PrecoGOV)
89. Mythx_plug
90. PegasusQPlus
91. Yankdemand
92. HyperX
93. Despair
94. Electroactive
95. Electrodemand
96. Lionfish
97. Interextrem
98. Cafactive
99. Lightning
100. ThunderX
101. sched-DVFS
102. Intel
103. Frankenstein
104. Cyan
105. TheSSJactive
106. Chill
107. sprdemand
108. Kraken
109. Ironactive
110. Nebula
111. Relaxed
112. Crazyactive
113. thenewbeginning
114. Cultivation
115. Schedutil

#### [보다 자세한 가버너 별 설명 보러가기](https://forum.xda-developers.com/general/general/ref-to-date-guide-cpu-governors-o-t3048957)


## 참조
[XDA-Developers](https://forum.xda-developers.com/general/general/ref-to-date-guide-cpu-governors-o-t3048957)
