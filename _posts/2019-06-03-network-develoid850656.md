---
layout: post
title: '이번 HTTPS 차단 우회방법입니다.'
author: 'rhkr8521'
categories: Network
tags:
- Network
- HTTPS
-
-
---


<script> location.href='https://cafe.naver.com/develoid/850656' ; </script>

<p>윈도우10 에서 테스트한 방법입니다.</p><p>우회 원리는 한번에 데이터를 보내야되는걸 여러개로 쪼개서 보내는것입니다.</p><p>이것은 컴퓨터 MTU를 수정하는걸로 가능합니다. MTU는 한번에 보낼 데이터의 크기를 뜻합니다.</p><p>한마디로 <a href="http://www.google.com">www.google.com</a> 이라는 데이터를 <a href="http://www.goo">www.goo</a>&nbsp;와 gle.com 이 두가지로 나눠서 보내는것입니다.</p><p>1. 윈도우키 + R 키를 눌러서 관리자 권한 CMD로 들어갑니다.</p><p>2. 현재 네트워크 어댑터의 MTU를 확인하기위해 netsh interface ipv4 show interfaces 를 입력해주세요</p><p>3. 기본적으로 1500 으로 설정되어있을겁니다. netsh interface ip set global minmtu=400 를 입력해주세요.</p><p>4. </p><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAyMTJfMTcw/MDAxNTQ5OTYyMTE0NjY1.TAMvlprxW5UMalkzq6_nQAWuy0DBDmw3Uqbct1TyW6wg.oPtnG2sTziDP9-n2XQyCwlGJLFyOq5xdaWIM09-fJjIg.PNG.jun88000/ssssss.png?type=w740"><b></p><p>그후 netsh interface ipv4 show interfaces를 다시 입력해보시면 아래와 같이 네트워크와 연결된 이더넷 OR WiFi의 '색인' 번호를</p><p>확인합니다. 저는 10이라고 뜨네요.&nbsp;netsh interface ipv4 set subinterface "색인번호" mtu=400 store=persistent 의 명령어를 입력하시고 MTU숫자가 변했는지 확인해주세요.</p><p>윈도우10, 크롬 브라우저를 통해 우회가 되는것을 확인했습니다. 여러가지로 쪼개서 데이터를 보내는것이라 속도저하는 발생합니다. 이방법은 HTTPS 뿐만 아니라 기존에있던 HTTP 차단방식도 우회됩니다.</p><p>+ 엣지나 익스플로러의 경우엔 MTU를 220으로 낮추어야 작동합니다.</p><p>1. netsh interface ip set global minmtu=400 -&gt; netsh interface ip set global minmtu=220</p><p>2. netsh interface ipv4 set subinterface "색인번호" mtu=400 store=persistent -&gt; netsh interface ipv4 set subinterface "색인번호" mtu=220 store=persistent<b></p>
