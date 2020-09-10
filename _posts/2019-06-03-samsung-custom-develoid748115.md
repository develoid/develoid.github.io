---
layout: post
title: '[커뮤니티] 노트2 리니지 OS 설치 완벽 가이드'
author: 'EdgeDEV'
categories: Samsung-Custom
tags:
- Samsung
- Device
- Custom
-
---


<script> location.href='https://cafe.naver.com/develoid/748115' ; </script>

<p>[커스텀롬을&nbsp;처음&nbsp;올려&nbsp;본&nbsp;초보입니다.&nbsp;미숙하더라도&nbsp;이해해주시고&nbsp;이해가&nbsp;안되는&nbsp;부분이&nbsp;있으시다면&nbsp;질문해주세요.]</p>
<p>0 - 주의사항</p>
<p>일단 강좌는 SKT 용 SHV-E250S 를 기준으로 하고 있습니다. 만약 KT 모델이시라면&nbsp;아마&nbsp;그대로&nbsp;따라하셔도&nbsp;큰&nbsp;문제는&nbsp;없을&nbsp;것이지만 LG U+&nbsp;모델이라면&nbsp;통신이&nbsp;불가할&nbsp;가능성이&nbsp;높습니다.&nbsp;그리고&nbsp;시작은 4.4 순정롬 (핸드폰 사고 아무것도 안건드림 or 사고 킷캣까지만 올림)&nbsp;상태라고&nbsp;가정합니다.</p>
<p>꼭 1번 이상 꼼꼼히 모두 읽은 후 시도해주세요.&nbsp;</p>
<p>I -&nbsp;준비물&nbsp;준비</p>
<p>아무 폴더나 상관은 없지만, 한 폴더에 준비물들을 모아 놓는것이 편리하실겁니다.</p>
<p>첫번째로 첨부파일을 받아주세요.</p>
<p>그리고 Lineage OS 14.1 ROM이&nbsp;필요합니다.&nbsp;이것이&nbsp;우리가&nbsp;바로&nbsp;교체할 OS이죠.&nbsp;<a href="https://download.lineageos.org/t0ltekor">https://download.lineageos.org/t0ltekor</a>&nbsp;로&nbsp;이동하시면, <img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzEwMDRfMjA4/MDAxNTA3MTA5MDEwNTc5.gTT9hzhqJAeBeW1S_EpiccQOKyJsKBlJoVxwP2vwKakg.Rys8ZNGmfmZxLt9AAtvSW389VtU3Xmzq6QtUJG8cblkg.PNG.eric1344/1.png?type=w740"></p>
<p>이런&nbsp;화면이&nbsp;나옵니다.&nbsp;가장&nbsp;위에&nbsp;있는&nbsp;파일(저 사진상으로는 10월 1일)&nbsp;을&nbsp;눌러&nbsp;다운로드합니다.</p>
<p>그&nbsp;다음, KGOON님의&nbsp;글(<a href="http://cafe.naver.com/develoid/719737">http://cafe.naver.com/develoid/719737</a>)&nbsp;에&nbsp;들어가시면&nbsp;구글&nbsp;드라이브&nbsp;링크가&nbsp;있습니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzEwMDRfMzAg/MDAxNTA3MTA5MzM1NzE5.o7uQRg0TNl4032Cbvpq8_IwcHWhoGivUqbHYDNjiRHcg.W5onSwHKq6AKMgKO23HFEim7jwbZ7R_kn_WhR4RSe-cg.PNG.eric1344/2.png?type=w740">저&nbsp;링크에서,&nbsp;우리가&nbsp;받을&nbsp;것은 Odin3, twrp, WIDzard WiFi Fix&nbsp;입니다. (KGOON님 정말 감사합니다.)</p>
<p>마지막으로, opengapps를 받아야 합니다.(쉽게 말해 플레이스토어 설치하려는겁니다)<a href="http://opengapps.org/">http://opengapps.org/</a>에 접속하시고 ARM-7.1-Mini 순으로 선택하시고 다운로드해주세요.</p>
<p>II - 리커버리 올리기</p>
<p>모두&nbsp;받으셨다면,&nbsp;노트 2를 [볼륨 하+홈버튼+전원버튼]을&nbsp;눌러&nbsp;다운로드&nbsp;모드로&nbsp;진입합시다. 경고문이 뜨고 볼륨 상 키를 눌러주신다면 귀여운&nbsp;안드로이드와&nbsp;함께 [다운로드 모드]&nbsp;라고&nbsp;떠있을겁니다.&nbsp;그&nbsp;상태에서 PC와 USB&nbsp;케이블로&nbsp;연결해주세요.</p>
<p>PC에서&nbsp;아까&nbsp;받은 Odin을&nbsp;켜주세요.&nbsp;이&nbsp;부분은 <a href="http://pastimelife.com/993">http://pastimelife.com/993</a>(이거 읽어주세요) 으로&nbsp;설명을&nbsp;대체하지만,&nbsp;주의할점은&nbsp;블로그에&nbsp;나와있는&nbsp;파일 2개가&nbsp;나와있습니다.&nbsp;그러나&nbsp;둘&nbsp;다&nbsp;다운받지&nbsp;마시고,</p>
<p>기기와 연결이 되었다면 </p>
<ol ><li>Options를 클릭.</li><li>Auto Reboot 체크 해제.</li><li>AP란을 눌러 &nbsp;<strike>philz_touch_6.48.4-t0lte_external_sd_fixed_unofficial.tar</strike>대신 아까 받은 twrp 파일 불러오기.</li><li>Start 클릭.</li></ol><p>이 순서대로 진행 하시면 됩니다. 로 중간 내용이 조금 다릅니다.&nbsp;</p>
<p>순조롭게 파일이 플래슁 되었다면 위 화면처럼 'PASS!'가 뜹니다.</p>
<p>&nbsp;</p>
<p>이제 갤럭시노트2를 리커버리모드로 진입하시면 되는데 잘 따라 하세요.</p>
<p>&nbsp;</p>
<p>볼륨 상 버튼 + 홈 버튼 + 전원 버튼을 동시에 눌러 주시면 삼성로고가 뜹니다. 이때 전원 버튼만 손을 떼 주세요. 만약 통신사 로고가 보인다면 전원을 껏다가 다시 해 주세요.&nbsp;까지&nbsp;진행하셨다면&nbsp;성공입니다.</p>
<p>III - adb 준비하기</p>
<p>먼저 폰을 초기화해야합니다. 백업부터 진행해놓으시는 것을 권장합니다만, 이 글과는 벗어나므로 설명하지 않습니다(twrp 백업 이라고 검색해보세요.). 리커버리 화면의 메뉴 8개 중 Wipe로 진입하시고 버튼 2개 중 Advanced Wipe 에 들어가주세요. 파티션 여러개가 나오지만 Dalvik Cache, Cache, System, Data 4개만 체크해주세요(나머지 체크하시면 데이터 다 날아갑니다.주의하세요.). 그 다음 화살표를 오른쪽으로 쭉 당겨주시고 done 이 뜨면 wipe 완료입니다.</p>
<p>벌써&nbsp;절반&nbsp;넘게&nbsp;왔습니다.&nbsp;이제&nbsp;리커버리에서&nbsp;진짜로&nbsp;커스텀롬을&nbsp;설치해보겠습니다.&nbsp;리커버리로&nbsp;플래싱하는&nbsp;방법으로는&nbsp;보통&nbsp;내장&nbsp;메모리에서&nbsp;직접&nbsp;불러오면&nbsp;됩니다.&nbsp;그러나&nbsp;노트 2&nbsp;문제인지&nbsp;계속해서 Creating fstab&nbsp;오류가&nbsp;발생하여서 [ADB SIdeload]로 진행하겠습니다.&nbsp;아까&nbsp;첨부파일로&nbsp;받은 adb.zip을&nbsp;압축&nbsp;해제해주세요.&nbsp;압축을&nbsp;풀은&nbsp;폴더에&nbsp;아까&nbsp;다운로드했던 Lineage OS, opengapps, wifi fix&nbsp;파일을&nbsp;넣어주시고&nbsp;각각&nbsp;파일명을 [lineage.zip], [opengapps.zip], [wifi.zip]으로&nbsp;바꿔주세요.</p>
<p>IV - Sideload&nbsp;하기</p>
<p>가장&nbsp;까다로운&nbsp;파트입니다.&nbsp;먼저 adb&nbsp;폴더의&nbsp;빈&nbsp;부분에&nbsp;커서를&nbsp;대고 [Shift+마우스 우클릭]&nbsp;하면&nbsp;나오는&nbsp;드롭다운&nbsp;메뉴에서 [여기에서 powershell&nbsp;창&nbsp;열기(윈도우 10)] or [여기에서 cmd창 열기(정확히는 모르겠습니다.)]&nbsp;를&nbsp;클릭해주세요.</p>
<p>이제&nbsp;노트 2&nbsp;차례입니다.&nbsp;리커버리로&nbsp;부팅되어&nbsp;있는&nbsp;화면이라면&nbsp;메뉴가 8개&nbsp;뜰겁니다.&nbsp;거기에서 Advanced-ADB Sideload&nbsp;로&nbsp;들어가&nbsp;화살표를&nbsp;오른쪽까지&nbsp;쭉&nbsp;밀어주세요.&nbsp;그런&nbsp;다음&nbsp;컴퓨터에 USB&nbsp;케이블로&nbsp;연결해주세요.</p>
<p>다시&nbsp;컴퓨터로&nbsp;돌아가서&nbsp;명령어&nbsp;몇개만&nbsp;쳐주면&nbsp;진짜&nbsp;끝입니다.&nbsp;하지만&nbsp;여기서&nbsp;운영체제&nbsp;별로&nbsp;명령어가&nbsp;갈리는데,</p>
<p>Windows 7 or 8&nbsp;이신경우 -&gt;&nbsp;제가&nbsp;써놓은&nbsp;명령어&nbsp;그대로&nbsp;치시면&nbsp;됩니다.</p>
<p>Windows 10&nbsp;이신경우 -&gt;&nbsp;제가&nbsp;써놓은&nbsp;명령어&nbsp;앞에 .\&nbsp;를&nbsp;붙이시면&nbsp;됩니다.(예를들어 글에 adb sideload 라고 나와있다면 .\adb sideload 라고 입력해주세요.)</p>
<p>cmd&nbsp;또는 powershell&nbsp;창에서 [adb devices](당연히 괄호는 무시해주세요)&nbsp;라고&nbsp;입력하시면<img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzEwMDRfMTQw/MDAxNTA3MTExMTI4MDA3.Pa-z-ZcpS5U2JOH4mUN04bxn6211vdl_Kwrva-a0HWYg.ftNXUxjnNmWIv0hgxnCbN8Xp38g4P4pdf9X3LXkF3WEg.PNG.eric1344/3.PNG?type=w740"></p>
<p>이렇게&nbsp;부착된&nbsp;기기가&nbsp;뜹니다.&nbsp;만약&nbsp;뜨지&nbsp;않으시다면&nbsp;다시&nbsp;시도해주세요.</p>
<p>이제&nbsp;첫번째&nbsp;명령어 [adb sideload lineage.zip]&nbsp;입력해주세요.&nbsp;입력하는&nbsp;순간&nbsp;폰에서&nbsp;명령어들이&nbsp;쭈욱&nbsp;내려갈겁니다.&nbsp;조금&nbsp;기다리시고 done!&nbsp;이&nbsp;뜬다면&nbsp;완료된겁니다.&nbsp;뒤로가기&nbsp;키로&nbsp;메인메뉴까지&nbsp;나갔다가&nbsp;다시 Advanced Wipe-ADB Sideload&nbsp;화살표&nbsp;밀어주시고 [adb sideload wifi.zip] pc에&nbsp;입력해주세요.&nbsp;마찬가지로&nbsp;다시&nbsp;나갔다가 Advanced Wipe-AdB Sideload&nbsp;화살표&nbsp;밀어주시고 [adb sideload opengapps.zip] pc에&nbsp;입력해주세요.&nbsp;드디어&nbsp;설치가&nbsp;끝났습니다.</p>
<p>메인메뉴의 Reboot-System&nbsp;클릭하여&nbsp;재부팅해주세요.</p>
<p>V - 완료되었나?</p>
<p>부팅화면이&nbsp;뜨고,&nbsp;원이&nbsp;좌우로&nbsp;움직이다가&nbsp;익숙한&nbsp;안드로이드&nbsp;초기&nbsp;설정이&nbsp;뜨신다면,&nbsp;축하합니다!&nbsp;일단&nbsp;부팅은&nbsp;성공입니다.&nbsp;이제&nbsp;몇가지&nbsp;점검해야 하는데요,&nbsp;</p>
<p>1.WiFi&nbsp;연결</p>
<p>2.&nbsp;전화&nbsp;및&nbsp;메시지&nbsp;수발신</p>
<p>3.&nbsp;데이터(LTE or 3G)&nbsp;가능여부 -&gt;&nbsp;혹시라도&nbsp;안되신다면 APN&nbsp;설정을&nbsp;확인해주세요.</p>
<p>4.&nbsp;블루투스</p>
<p>5. NFC</p>
<p>6.&nbsp;기타&nbsp;등등&nbsp;여러가지</p>
<p>모두&nbsp;정상작동하신다면,&nbsp;정말&nbsp;축하합니다!&nbsp;저와&nbsp;마찬가지로&nbsp;모든&nbsp;기능이&nbsp;정상&nbsp;작동하시는겁니다.(중간중간 MPT? 어떤 앱이 중지된다고 뜨는데 롬 자체의 문제입니다. 해결 불가)&nbsp;이제&nbsp;편리하고&nbsp;아름다운 Android Nougat을&nbsp;즐기시면&nbsp;됩니다.&nbsp;수고하셨습니다!</p>
<p>(혹시라도 중간의 오류, 질문이 있으시다면 댓글로 남겨주세요. 제가 아는 선에서는 답변해드리겠습니다. 마지막으로 Lineage OS개발팀, KGOON님, WIDzard님께 정말 감사하다는 말씀 드립니다.)<img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzEwMDRfMjgz/MDAxNTA3MTEyMDU0NDQ0.qeMABcxnZWedf83JtPffGuPse9cTTk4jZ8w5hWSRFQgg.BbjeFoxBXscc2sqRjvaDtGPEPh5wLd7kT5JJ09NpbUkg.PNG.eric1344/Screenshot_20171004-180948.png?type=w740"><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzEwMDRfMjE2/MDAxNTA3MTEyMDU0Njg4.9zahARmyBZ9_9tmTlhBiVobLhfjeiIGTZLsMwR0QYTsg.NaTXqkUE0sQJ_GUXlZj6bioiC1AbJ8LgfepMl4IKSnAg.PNG.eric1344/Screenshot_20171004-180911.png?type=w740">(여담으로&nbsp;중간&nbsp;스크린샷에 Windows 정품&nbsp;인증&nbsp;뜨는것은&nbsp;어제&nbsp;컴퓨터를&nbsp;포맷해서&nbsp;그렇습니다.)</p>
