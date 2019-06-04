---
layout: post
title: 'VPN으로 포워딩 하기'
author: '윈도우'
categories: Network
tags:
- Network
- VPN
- 
-
---


<script> location.href='https://cafe.naver.com/develoid/790478' ; </script>

<p>안녕하세요~</p><p>윈도우입니다. 오늘은</p><p>VPN을 통해 데이터환경에서 포트포워딩을 해보겠습니다.</p><p>&nbsp;</p><p>일단 VPN은</p><p>&nbsp;</p><p>가상의 인터넷 망입니다. 간단하죠?</p><p>한마디로 집밖에서 집안에있는 내부아이피를 쓰는거죠</p><p>그니까 데이터로 192.168.0.1 게이트웨이를</p><p>갈수있다는소리죠! 그러면 포워딩도 가능하고</p><p>DMZ도 가능하겠죠</p><p>&nbsp;</p><p>이제 시작하도록 하겠습니다.</p><p>&nbsp;</p><p>&nbsp;</p><p>준비물 :</p><p>VPN을 지원하는공유기 (저는 아이피타임 입니다)</p><p>VPN접속 가능한 기기</p><p>&nbsp;</p><p>&nbsp;</p><p>1.VPN을 설정해봅시다!</p><p>&nbsp;</p><p>아이피타임 기준&nbsp;</p><p><a href="http://192.168.0.1/">http://192.168.0.1/</a></p><p>이것이 게이트웨이 입니다.</p><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODAzMzFfMjU4/MDAxNTIyNDk0NTgzNjc1.eEI9ZtqmNPWSciWhMoN_YHfyxJ4S_VN3NwuAHPMOmuUg.nErkh0ikfhW8Gu2iLM_QBwKfq5fuVcLKNnB-aj7chycg.JPEG.windows6587/Screenshot_20180331-200928.jpg?type=w740"></p><p>&nbsp;</p><p><b></p><p><b></p><p><b></p><p><b></p><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODAzMzFfMTE1/MDAxNTIyNDk0NjMxMDI5.snLhVruqBqW4pWGa-KErVse_HX2CJEv5AUkatJPYfrog.6jdRhfoIUtXfqvwIEib3iPH3_IbBcZzIqrkBdrxyO-Ag.JPEG.windows6587/Screenshot_20180331-201017.jpg?type=w740"><p>&nbsp;</p><b></p><p><b></p><p>관리도구&gt;고급설정&gt;특수기능&gt;VPN 서버 설정</p><p><b></p><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODAzMzFfNTcg/MDAxNTIyNDk0NzA2NjQ2.7p6d249NEcrCNctcH0RfR4rgQC095wG179oXgrBNnmsg.p_kDw-N18j5q9OcIUljz4bEgXj9aG96u5tini-D-Euwg.JPEG.windows6587/Screenshot_20180331-201122.jpg?type=w740"><p>&nbsp;</p><p>동작모드 : 실행</p><p>암호화(MPPE) : 사용함</p></p><p>VPN접속계정 : 아이디입니다.(원하는거)</p><p>VPN접속 암호 : 비밀번호입니다.(원하는 거)</p><p>할당될 아이피주소 : VPN연결시 공유기가 지급하는 내부 아이피입니다.(충돌나지 않게 원하는거)</p><p><b></p><p>하시고 추가!</p><p><b></p><p><b></p><p>2.VPN 접속하기</p><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODAzMzFfMTc4/MDAxNTIyNDk1MDI1ODU2.QhljbNFxbuLEcNHzx0ojv3etNEnNQT4ClDSkOc864CQg.uzlUwyv9e6DZym6zvryUpOuc3tVxNwWnKZxDn9SaTtsg.JPEG.windows6587/Screenshot_20180331-201643.jpg?type=w740"><p>&nbsp;</p><p>연결&gt;기타연결설정&gt;VPN&gt;VPN추가</p><p>&nbsp;</p><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODAzMzFfMTQ4/MDAxNTIyNDk1MTIwNzUz.WqmUqw5CXWYly5-49Yxu59xKrFiazgTaC1LZo1WDDBwg.hff9laD6zIfuKo0hHL1rcuk9nYbtJGL2l1Asju8ElL4g.JPEG.windows6587/Screenshot_20180331-201828.jpg?type=w740"></p><p>&nbsp;</p><p>하시면 끝!</p><p>&nbsp;</p><p>연결하시면 밖에서도</p><p>192.168.0.1로 접속 가능합니다.</p><p>&nbsp;</p><p>3.포워딩 하기</p><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODAzMzFfMTY0/MDAxNTIyNDk1MjkzMzA1.W49_xQE4YraIWQJuQ3_J-h5EQGYonZzCwZepcnS_DJMg.zM67_Chv6GnwJVh-0pGIl9xCaITOUuiByvqjEQrgwVAg.JPEG.windows6587/Screenshot_20180331-202101.jpg?type=w740"></p><p>&nbsp;관리도구&gt;고급설정&gt;NAT/라우터관리&gt;포트포워드설정</p><b><p>&nbsp;</p><p>&nbsp;VPN연결하시고 현재 접속된 IP 주소를 하든가</p><p>VPN설정할때 할당된 아이피 주소를 적든가</p><p>둘중에 하나만 하시면 댐니다!</p><p>그럼 포워딩 끝!</p><p>이걸 응용해서 DMZ도 가능합니다.</p><p>&nbsp;</p><p>(밥먹으로 가서 수정못해요)</p><p>&nbsp;</p><p>&nbsp;</p></p><p><b></p><p><b></p><p><b></p><p><b></p><p><b></p><p><b></p><p><b></p><p><b></p><p><b></p><p><b></p><p><b></p><p><b></p><p>&nbsp;</p><p>&nbsp;</p>
