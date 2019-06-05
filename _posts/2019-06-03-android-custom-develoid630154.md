---
layout: post
title: '(루팅, 아마도 전기종) 지긋지긋한 통신사 와이파이 삭제하기'
author: '나는나비'
categories: Android-Custom
tags:
- Android
- Custom
-
-
---


<script> location.href='https://cafe.naver.com/develoid/630154' ; </script>

<p>네 저처럼 알뜰폰 쓰시는 분들은 통신사 와이파이 쓰지도 못하는데 자꾸 연결되서 짜증나시죠</p>
<p>그.래.서. 지우는 방법을 들고왔습니다!</p>
<p>&nbsp;</p>
<p>먼저 /system/bin/wpa_supplicate 를</p>
<p>(없는 분께는 죄송합니다...)</p>
<p>PC로 가져와서 헥스에디터로 열고</p>
<p>통신사 와이파이 이름을 찾아서 전부 첫글자를 바꿔줍니다(전 이미 바꾼 상태입니다)</p>
<p>(원본 백업 필수!!)&nbsp;</p>
<p>예) T wifi zone -&gt; X wifi zone</p>
<p>&nbsp;</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20160520_186/mdbs2_1463708204654AlHYB_JPEG/IMG_20160520_103008.jpg?type=w740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>수정한 파일을 755 퍼미션 주고 덮어 씌워줍니다</p>
<p>&nbsp;</p>
<img src="https://cafeptthumb-phinf.pstatic.net/20160520_275/mdbs2_1463708566215ICUpd_PNG/Screenshot_2016-05-20-10-23-57.png?type=w740"><p>&nbsp;</p>
<p>&nbsp;</p>
<p>(혹시나하는거지만 소유자가 root root로 돼있을 경우 system wifi로 바꿔주세요)</p>
<p>&nbsp;</p>
<img src="https://cafeptthumb-phinf.pstatic.net/20160520_183/mdbs2_1463708608891BGFde_PNG/Screenshot_2016-05-20-10-24-23.png?type=w740"><p>&nbsp;</p>
<p>&nbsp;</p>
<p>아직 재부팅 하지 마시고</p>
<p>/data/misc/wifi/wpa_supplicant.conf를 열고 통신사 와이파이 항목을 지워줍니다</p>
<p>(역시 이미 지운상태입니다)</p>
<p>&nbsp;</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20160520_89/mdbs2_1463708754184w8O1c_PNG/PicsArt_05-20-10.29.15.png?type=w740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>저장하시고 백업은 지우시고 재부팅해줍니다</p>
<p>그리고 와이파이 설정에서 검색 제외 항목에</p>
<p>통신사 와이파이를 추가합니다</p>
<p>&nbsp;</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20160520_24/mdbs2_1463709128077t50l7_PNG/Screenshot_2016-05-20-10-51-57.png?type=w740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>이제 완전히 삭제...는 아니지만 최소한 자동 연결은 안될겁니다ㅎㅎ</p>
<p>&nbsp;</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20160520_284/mdbs2_1463709062167Ku9DN_PNG/PicsArt_05-20-10.28.12.png?type=w740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>감사합니다~</p>
<p>&nbsp;</p>
<p>(☆이로인해 발생하는 모든 문제는 본인의 책임입니다☆)</p>
<p>&nbsp;</p>
<p>출처: <a href="http://www.chosik.com/314">http://www.chosik.com/314</a></p>

