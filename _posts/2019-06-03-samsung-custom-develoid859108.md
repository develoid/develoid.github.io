---
layout: post
title: '삼성기종 안드로이드 8.0 오레오 루팅 및 커스텀롬 설치방법'
author: 'yoonun'
categories: Samsung-Custom
tags:
- Samsung
- Device
- Custom
-
---


<script> location.href='https://cafe.naver.com/develoid/859108' ; </script>

<p>저는 S7E를 사용중이고 위 기기를 통해 커스텀롬 및 루팅을 해왔기에 다른기종의 경우 차이가 있을수 있습니다먼저 저희는 커스텀롬을 설치하기전에 개발자모드에서 OEM잠금해제를 켜주실 필요가 있습니다 OEM잠금해제를 하지 않으면 순정펌 이외에는 전부다 올라가지가 않습니다</p>
<img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAzMjFfMTE2/MDAxNTUzMTEwNzM4ODQ5.LpDDEuJL6xuNjJJOOm9vXIdbd2cljrF4Z-qfG5ejz8Qg.pU9NlDWt3pSMHpQsIN2zWDP42j7J1ykdVQ4iMcIEd-Qg.JPEG.ytk102/externalFile.jpg?type=w740"><p>설정에 디바이스정보 소프트웨어 정보에있는 빌드번호를 연타해서</p>
<img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAzMjFfMTYy/MDAxNTUzMTEwNzM5Mzkz.PAO7N-S_CbExyh6Lbnf6hIJyrSlgp6Mu4fk9HySyco0g.bw09hd_LRHp7L27kolEqjQbzO5OsoHDSnj1_jrh2qWwg.JPEG.ytk102/externalFile.jpg?type=w740"><p>개발자 모드를 켜줍니다</p>
<img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAzMjFfNjkg/MDAxNTUzMTEwNzQwMDg2.K0SFs16tmJ1rmAHtvFIz4JXaFBQuFKELAoN2m8-vQ1Ug.a__Re3jfEEXChf0JtT-al8zJkyW3rihFDhD_88NOJVAg.JPEG.ytk102/externalFile.jpg?type=w740"><p>그럼 설정에 개발자 모드가 생기는데 저기서 OEM잠금해제를 해주시면 됩니다그러면 이제 리커버리가 필요한 차례입니다 다운받는방법은 여러가지입니다 TWRP 공식사이트인 </p>
<a href="http://twrp.me">http://twrp.me</a><p>에서 다운받거나 </p>
<a href="http://twrp.me에">http://twrp.me에</a><p>없는기종은 xda에 올라와있기도 합니다S7 edge,S7 flat 은 twrp.me에 있습니다 twrp.me 검색을 할때는 기종명을 치거나 코드네임을 치면 뜹니다 S7 edge를 예로 들자면</p>
<img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAzMjFfMTk3/MDAxNTUzMTEwNzQwODk5.allMfgwjOCtttphqDGZ3YhZKl6N_yZDVRozLfzt9aWsg.QcFYJETbhAFVY5KQamRTU_-p4KwjHTAxNzbUTDX_6HIg.JPEG.ytk102/externalFile.jpg?type=w740"><p><a href="http://twrp.me">http://twrp.me</a> 에devices 에 들어갑니다S7 edge(엑시노스)의 경우 코드명이 hero2lte입니다 코드명은 빌드프롭에 적혀있습니다</p>
<img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAzMjFfMjA2/MDAxNTUzMTEwNzQxNjc5.Ay--qpHrU2QCBxSVNk0EG6BIe2OhwuYcA40ImrirYUog.Lof9Svm2XPCzz1nKsoSUvCqMYOahv7ZikHawi6rPJ6Eg.JPEG.ytk102/externalFile.jpg?type=w740"><p>hero2lte를 치면 저렇게 뜨고 들어가서 리커버리를 받으시면 됩니다저희는 리커버리를 올리기 전에 한가지 필요한것이 있습니다 그것은 바로 '백업'입니다 리커버리를 올리게되면 /Data 파티션이 암호화되 포맷을 해줘야하는데 이때 내장메모리와 앱,앱 내 데이터가 다 날라가게됩니다 그냥 초기화 한번 하시는거라고 보시면 됩니다백업을 완료하셨다면 이제 리커버리를 올리실 차례입니다(여기서부터는 이미지가 없습니다 추후 추가하도록 하겠습니다) 1. 먼저 컴퓨터에 odin을 실행시킵니다 odin은 카페에서 쉽게 구할수있는 프로그램중 하나입니다 순정으로 돌아가거나 리커버리 올릴때의 필수품이죠2. odin 의 AP에 twrp를 넣어줍니다 짜잔! twrp는 휴대전화가 아니라 컴퓨터에서 쓰는것이었습니다! 다운받았을때 .tar로 되있는게 정상입니다 만약 recovery.img 라면 .tar로 압축률0% 압축해주세요3. 휴대폰을 다운로드모드로 진입해주세요OEM잠금해제 상태로 전원을 끄고 전원+불륨하+홈(홈버튼 있는 기기 기준 홈버튼 없는기종은 홈 대신 빅스비버튼으로 알고있습니다)을 경고창이 나올때까지 꾸욱 눌러줍니다 경고창이 뜨면 불륨하키를눌러 계속해줍니다4. 휴대폰을 컴퓨터에 연결해줍니다이때 케이블은 컴퓨터와 휴대폰사이에 파일전송이 가능한 케이블이어야하고 컴퓨터에는 삼성USB 통합드라이버가 설치된 상태어야 합니다5. odin의 Setting에서 auto reboot를 꺼줍니다이 기능을 끄면 성공후 자동으로 재부팅을 시키지 않습니다6. Start를 눌러줍니다파랑색 및 초록색이 뜨면 성공입니다7. 휴대폰을 강종시킵니다전원+불륨하 를 전원이 꺼질때까지 꾸욱 눌러주세요 전원이 꺼지면 바로 손 때야합니다8.전원키+불륨상+홈키를눌러 리커버리모드에 진입합니다부트로고가 뜨고 TWRP라는 화면이 뜨면서 twrp에 진입하게됩니다여기까지가 TWRP의 설치방법이었습니다 다음은 암호화를 해제할 차례입니다리커버리를 들어갔으면 밑에 바를 밀면 twrp화면이 뜨는데 Install 들어가봤자 아무것도 안뜰겁니다 /Data가 암호화되서 그런데 Format data로 암호화를 풀 수 있습니다 암호화를 풀지않으면 휴대폰 부팅시 초기화하라 그러고 리커버리에서는 내장메모리 진입이 안됩니다 커스텀롬을 올릴거라도 /Data에 mount가 안되서 풀와잎과정에서 초기화가 안되 막히게되죠 그럼 바로 가보죠!1. Wipe에 들어가줍니다2. Format data에 들어가줍니다3. yes를 입력해주고 키보드의 체크표시를 눌러줍니다4. 초기화면으로 돌아와 reboot에 recovery를 해줍니다5. 암호화가 풀려있을겁니다저는 위 방법으로 보통 끝나더군요 추후 암호화를 막기 위해서는 no-verity-opt-encrypt를 추가로 적용하시면 됩니다 SD카드가 없다면 adb sideload로 적용하실수 있을겁니다Format Data는 말그대로 /Data 파티션 포맷이기에 막 OS나 날라가거나 하는 경우는 보통 없습니다 twrp는 USB otp를 지원하기때문에 컴퓨터에서 파일을 옮길수 있습니다 한번 부팅해서 커스텀롬,루팅파일을 다운받거나 아니면 컴퓨터에서 옮기느냐,미리SD카드에 넣어놓느냐셋중 하나입니다 그럼 다음과정으로 진입하도록하죠1. 풀와잎 한다(커스텀롬만)2. Install 메뉴에 들어간다2. 루팅 및 커스텀롬설치에 필요한 파일을 선택한다3. 밑에있는 바를 민다과정만보면 진짜 간단합니다 루팅은 너무 간단하죠 하지만 문제가생기는건 커스텀롬쪽이 꽤 있습니다 잘못하면 또 암호화에걸려 포맷하실수도 있습니다저같은경우는 Sac23 v8.3 에서 커널 바꾸다가 암호화에 걸린적도있고BL만 마멜버전걸 올렸을때는 Sac23 Pie롬 부팅마다 암호화되서 고생 꽤 했던 기억이 있네요커스텀롬은 롬에따라 설치하는 파일이 꽤 갈립니다 해외롬같은경우는 KOR CSC(SKC,KTC,LUC는 해외롬에는 거의 없습니다)가 없는경우에는 통신패치도 따로 준비하셔야됩니다 하지만 아로마인스톨러로 CSC선택에 KOR이 있으면 통신패치는 딱히 필요 없겠죠 그런거는 해당 롬 후기나 강좌같은데 보면 알려줄겁니다그럼 저는 여기서 강좌를 마치도록하겠습니다! 부족한점이나 틀린점 추가할점이 있으면 댓글로 남겨주세요!</p>

