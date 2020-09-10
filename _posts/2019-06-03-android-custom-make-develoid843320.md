---
layout: post
title: '[커뮤니티] Apk Manager 21번 에러 팁'
author: '글작성자'
categories: Android-Custom-Make
tags:
- Android
- Custom
- Make
-
---


<script> location.href='https://cafe.naver.com/develoid/843320' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcafeptthumb-phinf.pstatic.net%2FMjAxNzEyMzFfMTg3%2FMDAxNTE0NzI0Mzk3NDM2.EjYQ-bdiG3LKFHRn75mQ7eBBKhVM5uj38GOVJgD1fykg.k0_RT99TaGnkWmNJGXAcRQJSpMijrzTByQNphac_hqEg.PNG.searphiel9%2F%25EA%25B2%258C%25EC%258B%259C%25EA%25B8%2580_%25EC%259E%2591%25EC%2584%25B1_%25EC%25A0%2584_%25EA%25BC%25AD_%25EC%259D%25BD%25EC%2596%25B4%25EC%25A3%25BC%25EC%2584%25B8%25EC%259A%2594_%2528IT_%25EC%2586%258C%25ED%2586%25B5_%25EA%25B2%258C%25EC%258B%259C%25ED%258C%2590.png%3Ftype%3Dw740%22&amp;type=cafe_wa740"><p>예전부터 이 에러 때문에 고생했는데 팁이라면,</p>
<p>APK매니저의 디컴파일은 apk tool을 기반으로 하는데 apk tool이 업데이트가 빠르고, 많고, 무엇보다 에러의 로그를 조금 더 자세히 보여주기 때문에 apk tool을 그대로 다운로드 받아서 사용하는 것이 좋습니다.</p>
<p>2019년 1월 11일 기준 APK매니저는 apk tool 2.2.2이고, 현재 apk tool의 최신 버전은 2.3.4입니다.</p>
<p><a href="https://ibotpeaches.github.io/Apktool/">https://ibotpeaches.github.io/Apktool/</a></p>
<p>여기서 Apk tool을 다운로드 받으시면 되고</p>
<p><a href="http://securitynote.tistory.com/7">http://securitynote.tistory.com/7</a></p>
<p>Apk tool의 사용법은 여기 참고하시면 되겠습니다.</p>
<p>만약 Error: Unable to access jarfile apktool 에러가 뜨시면 명령어 치실 때</p>
<p>java -jar apktool b [디컴파일한 소스 폴더] -o [저장할 apk 명]&nbsp;여기서</p>
<p>java -jar <u>apktool.jar</u> b [디컴파일한 소스 폴더] -o [저장할 apk 명]&nbsp;출처:&nbsp;<a href="http://securitynote.tistory.com/7">http://securitynote.tistory.com/7</a>&nbsp;[Part of my life]</p>
<p>이렇게 치시면 되겠고, 여기서 에러가 뜨면</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMTFfOTIg/MDAxNTQ3MTg3MzYzNjg1.AOQ3tsW49-OPB4QWPU_9bl6RW2gHHiJkfnJIdEjlIq4g.T3qvxIWV9QLa4kwMGdnkl5LSUlcTFkldgSfK0HBtlMUg.PNG.hsm8hsm8/%EC%BA%A1%EC%B2%982.PNG?type=w740"></p>
<p>저 error 옆의 문장을 검색하시면</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMTFfMjIw/MDAxNTQ3MTg3Njk5ODg3.O_RZd9izX4UohG0lUp_5hxnXyvRJea3I-AfTak_JhXYg.RdD2GQze83GQ6cJLIEiwnzY8fRvqShwS-ls8WfR0XKAg.PNG.hsm8hsm8/3.PNG?type=w740"><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMTFfMjMx/MDAxNTQ3MTg3NzQwNjMw.qOf7yYomgdYu9c6SZ5yKBjO0qINZxqcjpW5VX30o7Egg.VCizrAzIPj9zNVTkSNWZSPZag8bRlraKkrUnqOVroJcg.PNG.hsm8hsm8/4.PNG?type=w740"></p>
<p>이런 식으로 검색하셔서, 고쳐주시면은!</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMTFfMzYg/MDAxNTQ3MTg3Nzk4MTYx.pHR35g6Ua5Oeir6Jjg5iySWYV4ZyuPqyWufbNmf_Xcwg.6mM3NYHNR8EEpgjhnURWuWY5tATfH06cdr4uiiJ1ZHkg.PNG.hsm8hsm8/%EC%BA%A1%EC%B2%98.PNG?type=w740"></p>
<p>그렇게 보고 싶던 'Built apk..."를 볼 수 있습니다!</p>
<p>이후에 sign 단계는 APK 매니저에서 진행하셔도 무방할 듯합니다.</p>
<p>오래간만에 에러가 떠서 필요한 사람이 있을까 봐 적어봤는데, 가독성이 괜찮을지 모르겠군요.</p>
<p>+추가</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMTFfMzkg/MDAxNTQ3MTg4NDMxODM3.b6bmd9e8odSLz2NW-MoKUwAyE3FTBwReAJLZtE6Jz5wg.Rq62hCtpw2mHAs2zABb1voYm_QBt4AKe6x0yv6oEcpMg.PNG.hsm8hsm8/%EC%BA%A1%EC%B2%98.PNG?type=w740"></p>
<p>귀찮지만 Sign 작업하실때, 이름.apk와 unsigned이름.apk를 함께 넣어주셔야 합니다. (물론 둘 다 같은 파일로)</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMTFfMTA2/MDAxNTQ3MTg4NTQ0Mzcx.w6tphlSuitUV3L8t_BS1iRWIfb4NfRGSCtqQnt3zjx8g.k3A22lDja1g6XAR8krLQh2MozLtKp1N95LUD8zyYNB8g.PNG.hsm8hsm8/%EC%BA%A1%EC%B2%98.PNG?type=w740"></p>
<p>이렇게 해주시면 저 에러 안 뜹니다.</p>
