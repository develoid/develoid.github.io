---
layout: post
title: '[커뮤니티] 갤럭시 기어 S3 프론티어 LTE 통신사 변경하기'
author: '하늘목장'
categories: Samsung-Custom
tags:
- Samsung
- Device
- Custom
-
---


<script> location.href='https://cafe.naver.com/develoid/837144' ; </script>

<p>짬나서 작성하는</p>
<p>갤럭시 기어 S3 프론티어 LTE 모델 통신사 변경하는 강좌입니다.</p>
<p>검색 키워드 : 갤럭시 기어 통신사 변경 기어 타통신사펌웨어 기어 sk펌웨어 kt 펌웨어 u+ 펌웨어 통신사 이동 번호이동</p>
<h1 >이 작업은 필히 갤럭시 기어의 초기화를 동반합니다. 자료들은 미리 백업해 두시길 권장합니다.</h1><h2 >Intro</h2><p>&nbsp;이번 강좌도 그냥 갑자기 손에 들린 삼성 갤럭시 기어 S3 프론티어 LTE (SM-R765K) 모델 때문에 시작하게 되었습니다.</p>
<p>아시는 분은 아시지만 갤럭시 기어류에는 USB로 직접 접근할 수 있는 숨겨진 포트가 있습니다. (하단부 스트랩부분에 있습니다.)</p>
<p>그리고 갤럭시 기어 또한 다운로드 모드가 존재하기에 원래의 계획은 기어 SK 펌웨어를 받아 KT 모델에 오딘으로 올리려 했었죠.</p>
<p>그런데 검색을 하다보니</p>
<p>&nbsp;한국에 출시한 갤럭시 기어 S3 프론티어 LTE 의 모델명은 SM-R765 이며 (오딘에서 SM-R765로 뜹니다)</p>
<p>펌웨어는 R765 공통으로 보이더군요. 타이젠 부팅후 모델명만 통신사에 따라 S/K/L이 접미되고 삼성 펌웨어 정보는 SM-R765 였습니다.</p>
<p>그렇다면.. 일단 SK 펌웨어만 구하면 오딘에서 기기명 다르다고 뱉어내지도 않고 바로 올라갈거라고 생각해서</p>
<p>펌웨어를 좀 살펴보니 한국 갤럭시 기어 S3 프론티어 LTE 모델 (이하 R765) 은 공통펌웨어에 CSC만 달리 들어가는 구조이며 CSC manager 가 존재합니다.</p>
<p>&nbsp;즉 S8 /Note8 과 같은 기기처럼 CSC변경만으로 기기의 통신사 펌웨어가 같이 바뀌는 구조였습니다.</p>
<p>이에 CSC 변경을 시도하였고 성공하여 기록을 남깁니다.</p>
<h2 >작업환경</h2><p>- Windows 64비트로 구동되는 컴퓨터</p>
<p>&nbsp; &nbsp; * 갤럭시 기어 S3 과 같은 네트워크 상에 있어야합니다. 고로 무선랜 들어가는 노트북으로 작업하면 편합니다.</p>
<p>&nbsp; &nbsp; * 다시말해 갤럭시 기어와 컴퓨터는 같은 Wifi를 잡아야 합니다.</p>
<p>- S3.zip (첨부)</p>
<p>- 갤럭시 기어 S3 (프론티어 LTE 모델은 적용가능, / 클래식 LTE 모델은 시도해봐야 알 듯 합니다.)</p>
<p>&nbsp;※ CSC 변경시 작업에 배터리를 약 10~15% 정도 소모합니다, 최소 50% 이상 충전해두고 작업하시길 권장드립니다.</p>
<h2 >통신사변경</h2><p>1. 우선 갤럭시 기어의 자료들을 백업합니다.</p>
<p>2. 파일 첨부된 S3.zip을 적당한 위치에 압축해제합니다.</p>
<p>&nbsp;여기서는 원할한 진행을위해 C:\에 압축해제하겠습니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcdn.clien.net%2Fweb%2Fapi%2Ffile%2FF01%2F7801360%2F166c6e993f9720.PNG%3Fw%3D780%26amp%3Bh%3D30000%26amp%3Bgif%3Dfalse%22&amp;type=cafe_wa740"></p>
<p>3. CMD 명령프롬프트를 "관리자"권한으로 실행합니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcdn.clien.net%2Fweb%2Fapi%2Ffile%2FF01%2F7801361%2F166c874cd1c5dd.PNG%3Fw%3D780%26amp%3Bh%3D30000%26amp%3Bgif%3Dfalse%22&amp;type=cafe_wa740"></p>
<p>&nbsp;Widnows키 + R 을 누르면 '실행' 창이 뜨고 여기에 CMD를 입력하면&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcdn.clien.net%2Fweb%2Fapi%2Ffile%2FF01%2F7801362%2F166ca8d48be75d.png%3Fw%3D780%26amp%3Bh%3D30000%26amp%3Bgif%3Dfalse%22&amp;type=cafe_wa740">위와 같은 창이 뜹니다.</p>
<p>그러나 이는 관리자 모드가 아닙니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcdn.clien.net%2Fweb%2Fapi%2Ffile%2FF01%2F7801370%2F166ce8d5407c4a.png%3Fw%3D780%26amp%3Bh%3D30000%26amp%3Bgif%3Dfalse%22&amp;type=cafe_wa740"></p>
<p>따라서 위 사진처럼</p>
<p>CMD 아이콘에서&nbsp;마우스 우클릭후</p>
<p>명령프롬프트에서&nbsp;마우스 우클릭&nbsp;하여</p>
<p>관리자 권한으로 실행합니다.</p>
<p>그후 뜬 창에&nbsp;관리자 : 명령 프롬프트가 되어있으면 성공입니다.</p>
<p>------------------------------------------------------------------------------------------------</p>
<p>이제부턴 기어에서 작업합니다.</p>
<p>4. 설정 - Gear 정보 - 디버깅 을 On 합니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcdn.clien.net%2Fweb%2Fapi%2Ffile%2FF01%2F7801436%2F166e043894bab3.jpg%3Fw%3D780%26amp%3Bh%3D30000%26amp%3Bgif%3Dfalse%22&amp;type=cafe_wa740"></p>
<p>경고창 뜨시면 예 눌러주시구요</p>
<p>5. 설정 - 연결 - WiFi - Wifi - 항상사용 으로 바꿔줍니다.&nbsp;</p>
<p>6. 현재작업하는 노트북(혹은 PC)과 같은 네트워크에 연결해줍니다.</p>
<p>7. 연결된 네트워크를 누르고 맨밑으로 내리면 기어의 IP 주소가 있습니다. 이를 잘 기억해두세요</p>
<p>&nbsp;여기서는 192.168.0.158 입니다만 기기마다 다릅니다. 메모해두세요.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcdn.clien.net%2Fweb%2Fapi%2Ffile%2FF01%2F7801438%2F166e1d96f94653.jpg%3Fw%3D780%26amp%3Bh%3D30000%26amp%3Bgif%3Dfalse%22&amp;type=cafe_wa740"></p>
<p>------------------------------------------------------------------------------------------------</p>
<p>이제부터 다시 PC에서 작업합니다.</p>
<p>8.아까 관리자:명령프롬프트에서 다음과 같은 명령어를 입력합니다.</p>
<p>cd C:\S3\SDB\data\tools</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcdn.clien.net%2Fweb%2Fapi%2Ffile%2FF01%2F7801448%2F166ee25967089e.png%3Fw%3D780%26amp%3Bh%3D30000%26amp%3Bgif%3Dfalse%22&amp;type=cafe_wa740"></p>
<p>(다른경로에 두셨으면 다른경로로 입력하세요)</p>
<p>그리고 엔터 치시면 위와 같은 창이 뜹니다.</p>
<p>9.&nbsp;명령어 sdb shell 을 입력합니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcdn.clien.net%2Fweb%2Fapi%2Ffile%2FF01%2F7801460%2F166efca5c6e90e.png%3Fw%3D780%26amp%3Bh%3D30000%26amp%3Bgif%3Dfalse%22&amp;type=cafe_wa740"></p>
<p>보안경고창이 뜨면&nbsp;액세스 허용&nbsp;눌러주시구요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcdn.clien.net%2Fweb%2Fapi%2Ffile%2FF01%2F7801636%2F16710cfa7150c8.png%3Fw%3D780%26amp%3Bh%3D30000%26amp%3Bgif%3Dfalse%22&amp;type=cafe_wa740"></p>
<p>여기까지 잘 따라오셨으면 위와 같은 창이 보일겁니다.</p>
<p>Starting it now on port&nbsp;26101&nbsp;도 보일겁니다. 포트를 잘 기억하세요</p>
<p>10.&nbsp;아까 7번에서 봐둔 기어가 연결된 IP 주소를 사용하여 명령어 sdb connect&nbsp;<em >192.168.0.158</em><em >:26101</em>을 입력합니다.</p>
<p>&nbsp; &nbsp; 192.168.0.158 은 제 기어의 IP주소이며 사용하시는 공유기에 따라 IP는 다릅니다. 즉 다시말해 위&nbsp;7번과정에서 메모한 IP:메모한 포트을 입력하세요</p>
<p>여기까지 잘 따라오셨다면</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcdn.clien.net%2Fweb%2Fapi%2Ffile%2FF01%2F7801579%2F1670a37d18eea7.jpg%3Fw%3D780%26amp%3Bh%3D30000%26amp%3Bgif%3Dfalse%22&amp;type=cafe_wa740"></p>
<p>현재 기어에 디버깅 스크린이 떠있을겁니다.</p>
<p>&nbsp;디버깅 허용(오른쪽 체크 버튼) 을 누릅니다.</p>
<p>&nbsp;여기 까지가 되어야 CSC 변경이 가능한데. 만일 이화면이 안뜬다면</p>
<p>CMD 창에서 다시한번더 명령어&nbsp;sdb connect 기어IP주소:포트&nbsp;를 입력합니다.</p>
<p>그래도 디버깅 창이 안뜨신다면 컴퓨터 재부팅하시고 다시 시도해보세요.</p>
<p>11. 명령어 sdb shell 을 입력합니다.</p>
<p>&nbsp;제대로 디버깅 설정 및 연결이 되었다면 sh-3.2$ 이 뜹니다. 이 문구가 뜨지 않는다면 연결이 되지 않은것이니 10번까지의 과정을 반복합니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcdn.clien.net%2Fweb%2Fapi%2Ffile%2FF01%2F7801634%2F1671979ab12f27.png%3Fw%3D780%26amp%3Bh%3D30000%26amp%3Bgif%3Dfalse%22&amp;type=cafe_wa740"></p>
<p>12. 명령어 launch_app csc-manager.csc-pre-configuration 을 입력합니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcdn.clien.net%2Fweb%2Fapi%2Ffile%2FF01%2F7801633%2F167193f722eb72.png%3Fw%3D780%26amp%3Bh%3D30000%26amp%3Bgif%3Dfalse%22&amp;type=cafe_wa740"></p>
<p>successfully lauched 가 뜬다면</p>
<p>기어 화면을 보면 CSC Pre-Config 가 떠있습니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcdn.clien.net%2Fweb%2Fapi%2Ffile%2FF01%2F7801616%2F167130950b1e55.jpg%3Fw%3D780%26amp%3Bh%3D30000%26amp%3Bgif%3Dfalse%22&amp;type=cafe_wa740"></p>
<p>13. 기어를 바꿀 원하는 통신사를 선택합니다.</p>
<p>변경할 통신사를 선택하세요</p>
<p>SKTelelcom : SKC</p>
<p>KT : KTC</p>
<p>LG U+ : LUC</p>
<p>를 선택하세요.</p>
<p>저는 LUC를 선택해 보겠습니다.</p>
<p>&nbsp;- LUC installing 이 뜨고</p>
<p>&nbsp;-&nbsp;초기화 중...&nbsp;에서 약 2분정도 공장초기화 후 &nbsp;</p>
<p>&nbsp;-&nbsp;기어 S3 프론티어 부팅 로고가 뜨고 검정화면이 약 2분정도 지속됩니다. 가만 두세요</p>
<p>&nbsp;- 그리고&nbsp;Gear 설정중...&nbsp;로고가 뜨고</p>
<p>&nbsp;-&nbsp;기어 S3 프론티어 부팅 로고가 뜨고 검정화면이 지속되고</p>
<p>&nbsp;-&nbsp;U+ 로고(아까 위에서 선택한 통신사 부트로고)가 뜹니다.</p>
<p>즉 CSC를 선택한순간 알아서 재부팅 및 초기화가 진행되며 약 4분정도 내로 재부팅 및 통신사 변경이 완료됩니다.</p>
<p>IMEI 날아가지 않고 모델명도 접미사가 붙었으며</p>
<p>이제 초기화가 완료되었습니다.</p>
<p>수고하셨습니다.</p>
<p>14. 다만 이는 CSC 변경(통신사 롬 변경)에 지나지않으며</p>
<p>&nbsp;- 이 통신사가 변경된 기어를 해당 통신사에서 개통해 줄지는 다른 문제입니다.</p>
<p>여러분들의 시도가 성공하길 기원합니다.</p>
<h2 >Outro</h2><p>&nbsp;CSC변경만으로 기어 S3의 통신사 변경이 가능하게 되었습니다.</p>
<p>허나 타 통신사로 개통을 한 번 했던기어라면 (ex KT에서 개통한 기어를), 바꾼통신사에서 (LUC, U+로 바꾼 통신사에서) 개통해 주는 것 은 다른 문제입니다. 아마도 타 통신사 제품이라며 거부할 가능성이 큽니다.</p>
<p>이 CSC 변경법은 타이젠 3.0 이 올라간 기기에는 모두 적용되는듯 보입니다.</p>
<p>즉 기어 S3 프론티어 LTE (SM-R765S/K/L) 에 적용되며</p>
<p>아직 시도해 보진 않았지만</p>
<p>갤럭시 워치 LTE (SM-R805N) 는 별 무리 없이 적용될듯 한데</p>
<p>SK 전용모델이 한국 전체 CSC를 포함하는지 여부를 모르기에</p>
<p>SK용으로만 출시된</p>
<p>기어 S2 LTE (SM-R730S) 와</p>
<p>기어 S3 클래식 LTE (SM-R775S)는</p>
<p>타이젠 3.0 업데이트 이후에 실 사용자분들이 직접 테스트 해보아야. 변경 여부를 알 수 있으며.</p>
<p>저는 셀룰러 모델을 블루투스로 이용하기때문에 (블투대비 더 들어있는 배터리 용량 + 에어플레인모드로 이용합니다.)</p>
<p>개통 계획은 없는지라. 실 사용자 분들이 개통시도 해보셔야 할 것 같습니다.</p>
<p>개통의 경우 우선 타사로 한번 개통이 이루어진 모델은 힘들지 않을까 싶은데</p>
<p>PCB(메인보드)교체후 개통이력이 없는 모델이나</p>
<p>개통없이 블루투스로만쓴 자가유통용 모델은 그냥 CSC 변경만 하면 무리없이 &nbsp;해당 변경된 통신사에서 개통이 가능 할 것으로 사료됩니다.</p>
<p>이상 KT 정발 갤럭시 기어 S3 LTE 에서 SK LG 타 통신사 펌웨어 올리기 강좌를 마칩니다. :)</p>
<p>여러분 모두 성공하시길 바랍니다.</p>
<p>불펌금지</p>
