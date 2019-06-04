---
layout: post
title: '공인 IP 하나로 여러대의 디바이스를 사용하는 방법'
author: '403 Forbidden'
categories: Network
tags:
- Network
- IP
- 
-
---


<script> location.href='https://cafe.naver.com/develoid/838128' ; </script>

<img src="https://cafeptthumb-phinf.pstatic.net/MjAxODEyMTNfNjgg/MDAxNTQ0NjgwMDE5ODY2.zcJvurDzzsDKyvthMS-lYhdyKFwELOBuTfVXiuj_y1Ug.L85AzKFic3Y1MjjBpinGFjU8SCC0EBbq45n_RU_jK6cg.JPEG.lby22net/1502791207474.jpg?type=w740"><p>이미지 출처: <a href="https://kin.naver.com/qna/detail.nhn?d1id=1&amp;dirId=1010406&amp;docId=282639030">https://kin.naver.com/qna/detail.nhn?d1id=1&amp;dirId=1010406&amp;docId=282639030</a></p>
<p>2003~2005년 이후에 지어진 아파트는 방마다 벽면 랜(RJ45)포트가 있을겁니다. 스마트폰이 보급되기 전 시절에는 유무선공유기도 보급되지 않았고 집집마다 컴퓨터 1대씩은 있고 2대 이상 있는 경우도 있었죠. 그리고 컴퓨터는 다이렉트로 WAN에 연결되었을 것입니다.</p>
<p>인터넷 회선 1개에 보통 공인IP가 1~2개(딜라이브는 4개 할당된다고 하네요.) 정도 할당됩니다. 문제는 PC가 2대 이상 넘어버리면 1대 이외에 나머지는 IP가 할당이 안되어서 인터넷에 연결이 안될 것입니다.</p>
<p>그러면 공인IP 하나로 여러대의 디바이스를 사용하려면 어떻게 해야할까?</p>
<p>사설 IP를 만들어야 되며 라우터, 게이트웨이, NAT 등등 필요하고 그것을 합친 물건이 공유기 입니다.</p>
<p>보통 집안에 유무선공유기가 거실이나 PC가 있는 방에 배치가 되어 있을것입니다. 그런데 각각 방마다 PC가 있다면 LAN선을 PC에서 공유기까지 끌어와야되는 수고가 필요합니다. PC를 바로 벽면포트에 연결하면 IP할당이 안됩니다.</p>
<p>그러면 벽면포트를 활용합시다.</p>
<p>1. 우선 집 어딘가에 있는 공유기를 철거합니다.</p>
<p>2. IDF단자함을 찾아서 뚜껑을 엽니다.(아파트는 보통 신발장이나 배전반 근처에 있습니다.)</p>
<p>3. 공유기를 IDF단자함에 집어넣습니다.</p>
<p>4. 원래 스위치허브에 연결된 RJ45 잭들을 모조리 분리합니다. 전화선은 그대로 두세요.</p>
<p>5. 색이 다른 하나는 공유기 WAN포트에, 나머지는 공유기 LAN 포트에 연결합니다.</p>
<p>6. 공유기에 전원을 공급하여 부팅을 시킵니다.</p>
<p>7. 벽면단자에 디바이스를 연결해서 정상 동작하는지 확인합니다.(주소창에 192.168.0.1 쳐서 접속하는 테스트도 요망.)</p>
<p>8. 잘 작동된다면 끝.</p>
<p>9. 집에 남아도는 유무선공유기가 있다면 거실에 설치해서 벽면단자와 공유기 <u>WAN포트가 아닌 LAN포트에</u> 연결합니다.(공유기를 허브모드로 동작시키기 위함입니다.)</p>
<p>내부 네트워크 맵은 대충 이렇게 될겁니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODEyMTNfMTA3/MDAxNTQ0NjgxMzU0MzQy.lkeSNFYZ-SiKQtZbwqvnCPzAUoZpfTgu3bJBj5Cv7dsg.FoDuAWAxdl3TvqQ6txQajwRENiR1cjDp37G3nR_uspcg.PNG.lby22net/yee.png?type=w740"></p>

