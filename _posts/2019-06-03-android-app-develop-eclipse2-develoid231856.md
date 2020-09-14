---
layout: post
title: '[커뮤니티] 아마도 쉬운 안드로이드 어플만들기 [4] 기초 구조 파악'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/231856' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_246%2Ftjdtnsu_1366797317084BcQT5_JPEG%2Fand.jpg%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>-들어가기 전에-</p>
<p>여기서부터는 큰 2단원입니다.</p>
<p>2단원은 안드로이드의 약간 기본적인 프로그래밍을 배우게 될 것입니다.</p>
<p>&nbsp;</p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p><u>참고 : 이 강좌가 쓰여진 컴퓨터 사양은 엄청 안좋습니다.(Celeron D 2.66GHz, 768MB) 그러므로 다른 컴퓨터도 거의 다 될겁니다.</u>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>1. New Android Project 설정하기</p>
<p>&nbsp;</p>
<table><tbody><tr><td ><p>&nbsp;Application Name&nbsp;</p>
</td><td ><p>&nbsp;Welcome</p>
</td></tr><tr><td ><p>&nbsp;Project Name&nbsp;</p>
</td><td ><p>&nbsp;Welcome</p>
</td></tr><tr><td ><p>&nbsp;Package Name&nbsp;</p>
</td><td ><p>&nbsp;kr.silim.welcome</p>
</td></tr><tr><td ><p>&nbsp;Buid SDK&nbsp;</p>
</td><td ><p>&nbsp;Android 2.3.3&nbsp;</p>
</td></tr><tr><td ><p>&nbsp;Minimum Required SDK</p>
</td><td ><p>&nbsp;10</p>
</td></tr><tr><td ><p>&nbsp;Activity Name&nbsp;</p>
</td><td ><p>&nbsp;Welcome</p>
</td></tr><tr><td ><p>&nbsp;Title</p>
</td><td ><p>&nbsp;Welcome to Android&nbsp;</p>
</td></tr></tbody></table><p>&nbsp;</p>
<p>- Package Name : 마켓에 올라가는 이름이니 모든 이용자가 사용한 이름과 구별되어야 한다. 앞에 보통 이메일 주소나 URL 등을 붙여 구별한다.</p>
<p>&nbsp; ㄴ 도메인, 이메일 주소를 뒤에서부터 기입하고 project name을 붙인다.</p>
<p>&nbsp;</p>
<p>- Min SDK Version : 낮을수록 이용 대상 기기가 넓어진다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>2. 다음으로 새로운 프로젝트를 작성하는 절차</p>
<p>&nbsp;</p>
<p>- File-New-Android Application Project 클릭</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_191%2Ftjdtnsu_1366797922894dMsow_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>이와 같이 적은 후 Next 클릭&nbsp;</p>
<p>&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_135%2Ftjdtnsu_1366798032119e1NX5_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>그냥 Next를 누른다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_63%2Ftjdtnsu_1366798079849rnv4H_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>재주껏 아이콘을 만들어서 링크를 건다.</p>
<p>그 외 재주껏 설정한 뒤 Next를 누른다.</p>
<p>&nbsp; ㄴ이것은 직접 해보시오! 이건 간단한 거니까&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_126%2Ftjdtnsu_1366798302088a3ehX_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>액티비티를 생성할 것인가와 어떤 종류를 선택하는 단계입니다. 저는 Fullscreen을 선택했습니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_243%2Ftjdtnsu_1366798389125mr0ag_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>Finish를 누릅니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_130%2Ftjdtnsu_1366798432619Yw6YW_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>기다리기........&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_104%2Ftjdtnsu_1366798604675xrDge_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740">&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>3. 이걸로 프로젝트를 생성했는데 이것을 실행해 보자</p>
<p>&nbsp;</p>
<p>이거슨 막 생성된 뜨끈뜨끈한 것</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_186%2Ftjdtnsu_1366798726489teRaC_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>Projecct이름 오른쪽마우스 클릭 - Run as - Android Application 클릭</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_266%2Ftjdtnsu_13667988554262aBn4_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740">&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>컴파일 후 에러가 없으면 실행된다.</p>
<p>컴파일해서 실행되기까지는 시간이 오래 걸린다.&nbsp;</p>
<p>&nbsp;</p>
<p>컴파일이 끝나 코드가 로드된 후 실행되면 다음 화면이 나온다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>인내심이 필요할지도 모른다.......&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_254%2Ftjdtnsu_13667990372819kFLX_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>저는 여길로 넘어가는데 5분 걸렸음(셀러론이니깐ㅋㅋ)</p>
<p>그래서 좀만 더 인내합니다....&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_164%2Ftjdtnsu_1366799394789fSV60_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>드디어 나왔다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130424_216%2Ftjdtnsu_1366799830530poNWO_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.JPG%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>참고 : 부팅 후 다시 컴파일 해주세요. 그래야지 결과창이 뜹니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>-----------------------------------------------------------------------------</p>
<p>읽어보기</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>첫번째 읽을거리&nbsp;</p>
<p>&nbsp;</p>
<p>안드로이드 버전 2.x는 스마트폰용 어플리케이션을 개발되는데 사용되었고</p>
<p>버젼 3.x는 태블릿용으로 나누어져있다가</p>
<p>버젼 4.0 아이스크림 샌드위치에서는 이를 통합하려했다.</p>
<table><tbody><tr><td ><p>&nbsp;2.x : 스마트폰용&nbsp;</p>
</td><td  rowspan="2"><p>&nbsp;4.0 통합버젼&nbsp;</p>
</td><td  rowspan="2"><p>&nbsp;4.1 개선된 통합 버젼&nbsp;</p>
</td></tr><tr><td ><p>&nbsp;3.x : 태블릿용&nbsp;</p>
</td></tr></tbody></table><p>스마트폰용과 태블릿용은 서로 기본사상이 달랐으나 4.0에는 이를 잘 반영하지 않았다고 본다.</p>
<p>새롭게 4.1에서는 새로운 프로젝트를 생성하면서 이러한 부분을 미리 설정하도록 한 후 프로젝트를 생서아는 방식으로 개선하였다.&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>두번째 읽을거리&nbsp;</p>
<p>&nbsp;</p>
<p>프로젝트를 컴파일해서 실행되기까지는 시간이 걸린다.</p>
<p>안드로이드 실행은 avd를 이용하는 방법과 직접 스마트폰을 이용하는 방법이 있다.</p>
<p>에뮬레이터는 하나의 컴퓨터 구실을 하는데 운영체제가 올라가고 나중에 어플리케이션이 올라가 실행된다.</p>
<p>그래서 처음에 시간이 많이 걸린다.</p>
<p>반복적으로 에뮬레이터를 이용한다면 에뮬레이터를 종료하지 마라.</p>
<p>가장 좋은 방법은 직접 기기를 연결해 실행하면 된다. 컴파일후 실행시간이 짧아져 프로그램 개발에 효율적 방식이다.</p>
<p>기기와 컴퓨터는 usb를 통해 연결되고 필요한 드라이브는 기기 제공사에서 제공한다.</p>
<p>-----------------------------------------------------------------------------&nbsp;</p>
<p>&nbsp;</p>
