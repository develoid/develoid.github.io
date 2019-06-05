---
layout: post
title: 'S8 N8, A8 2018 통신사 변경법 (Combination 바이너리 없이 순정펌으로 가능)'
author: '시우연우파파'
categories: Samsung-Custom
tags:
- Samsung
- Device
- Custom
-
---


<script> location.href='https://cafe.naver.com/develoid/802742' ; </script>

<p>이번에 와이프차로 올뉴K3구매하고 이것저것 꾸미고다니느라 강좌하나 쓸 시간이 없네요ㅎㅎ간단히 짬내서&nbsp;통신사 변경 강좌를 남겨봅니다.</p>
<p>앞서 해외에서 Combination Factory 바이너리를 이용해서 통신사를 변경하는&nbsp;방법이 공개되었습니다. 하지만 특정 사이트에서 배포되는 Combination 바이너리의 경우 Official 파일이 아닌 커스텀 파일이라 이것을&nbsp;사용시 펌웨어 Fail 이 발생되거나 심한 경우 녹스 워런티가 손상되는 경우가 있었습니다.&nbsp;때문에 기기 손상에 대한&nbsp;불안감을 가져&nbsp;통신사 변경을 원함에도 시도 조차 할 수 없는 분들이 계실껍니다. 또한 A8 2018의 경우 Combination&nbsp;바이너리가 없어 하고 싶어도 못하는 분들도 게시구요.&nbsp;</p>
<p>저 역시 처음엔&nbsp;Combination 바이너리를 이용해서 통신사 변경을 하였습니다. 하지만 통신사가 변경되는 원리를 살펴보니 펌웨어의 특정 파일이 통신사 변경에 중요한 역할 을 하는것을 확인하였고, 이를 실제로 적용할&nbsp;방법을 생각하다 오늘 강좌의&nbsp;방법을 찾게 되었습니다.&nbsp;</p>
<p>원리는 통신사를 결정짓는 펌웨어의 파일은&nbsp;CSC속에 있는 sales_code.dat 입니다. 앞서 해외판 CSC 변경강좌에 국내판 CSC 변경은 싱글 CSC 기기가 출시되어야 가능할 듯 하다고 말씀드린적이 있는데 그게 이 이유입니다.(<a href="http://siwooyeonwoopapa.tistory.com/entry/%EA%B0%A4%EB%9F%AD%EC%8B%9C-%ED%95%B4%EC%99%B8%ED%8C%90-CSC-%EB%B3%80%EA%B2%BD%EB%B2%95-%EB%B0%8F-%EC%82%BC%EC%84%B1%ED%8E%98%EC%9D%B4-%EA%B3%A0%EC%B0%B0">갤럭시 해외판 CSC 변경법(VoLTE실행, 국내판키보드) 및 삼성페이 실행법</a>)</p>
<p>이&nbsp;sales_code.dat&nbsp;파일을 메모장으로 열어보면 SKC, KOO, KTC 같은 사업자 코드가 적혀 있습니다.&nbsp;</p>
<p>즉 이 파일이 초기화 후 첫 부팅시 통신사를 결정짓는 역할을 하는 것이죠.</p>
<p>그럼 제일 편한 통신사 변경 방법은 싱글 CSC를 적용시키는 것인데 아쉽게도 S8이후 하이엔드 기기에는 싱글CSC가 없습니다.(노트8 올림픽게임즈 에디션 제외) 구형기기 CSC와 S8이후 기기는 CSC 구조가 다름니다. 그래서 신형에 구형 CSC를 설치하면 제대로된 사업자 세팅이 안된 혼종기기가 되는 문제가 발생합니다. 하지만 구형 CSC를 설치하여 Sales_code.dat만 먼저 인식시켜 통신사 길라잡이 역할을 맡기고&nbsp;여기에 원래 기기의 CSC를 추가로 설치한다면???</p>
<p>제 예상대로 좋은 결과가 나왔고 그 결과를 간단히 강좌로 남김니다.</p>
<p>1.준비물</p>
<p>먼저 사전에 준비할 자료는 다음과 같습니다.</p>
<p>1) 원하는 통신사의 구기종 sec_csc.zip (구형 CSC는 노트FE용 추천)2) 원하는&nbsp;통신사의 현재 기기의 초기화 펌웨어2.방법1) 이전에&nbsp;<a href="http://siwooyeonwoopapa.tistory.com/entry/%EA%B0%A4%EB%9F%AD%EC%8B%9C-%ED%95%B4%EC%99%B8%ED%8C%90-CSC-%EB%B3%80%EA%B2%BD%EB%B2%95-%EB%B0%8F-%EC%82%BC%EC%84%B1%ED%8E%98%EC%9D%B4-%EA%B3%A0%EC%B0%B0">해외판 csc변경 강좌</a>를 참조하시고 동일하게 외장메모리에 구기종의 sec_csc.zip을 넣어두시고 초기화펌을 받아 오딘에 AP CP BL과 csc에서 추출한 pit를 로드시킨 후 플래싱합니다.</p>
<p>2) 플래싱 후 첫번째 부팅에서 즉시 리커버리로 진입합니다.</p>
<p>3) 4번째 메뉴인 Apply update from Sd card를 선택하시고 미리 넣어둔 구기종 csc를 설치합니다.</p>
<p>4) 부팅하면 부트애니가 Samsung 으로 바뀐상태가 되고 부팅완료&nbsp;후 기본 계정&nbsp;설정을 진행하여 홈화면까지 가신 후 전원off 합니다. (여기서 설정에 가보면 SK, LG 세팅이 혼합되어있는 혼종상태입니다)</p>
<p>5) 볼륨키 하+빅스비+전원키로 기기를 on하여 다운로드모드로가서 기기 오딘에 CSC에&nbsp;초기화펌의 Home_csc를 Userdata에&nbsp;userdata를 로드하시고 플래싱하시면 됨니다.</p>
<p>6) 부팅하면 이전과 다르게 부트애니가 원하는 통신사 부트애니로&nbsp;변경되고 상단바에 통신사 추노표시, HD보이스표시와 통화설정 및 설정의 통신사 전용 메뉴가 활성화되고&nbsp;휴대전화정보의 sw정보에 통신사정보가 변경되어 있는것을 알 수 있습니다.</p>
<p>이렇게 변경한 이후에 OTA 서버에 접속을 해보면&nbsp;기기가&nbsp;정상등록되는데&nbsp;이는 향후 OTA&nbsp;업데이트도 문제없을듯 싶네요.</p>
<p>당연히 녹스도 멀쩡하고 통신사 변경 후 삼성페이, 삼성페이교통카드 등 모든게 완벽하게 사용가능합니다.통신사변경은 하고 싶은데 녹스&nbsp;걱정에 못하시는분들 이걸로 고민해결하세요.&nbsp;</p>
<p>물론 완벽히 바꾸는건 콤비바이너리를 이용하는것입니다만 안전하게 바꿀수있는 방법이 있어서 함께 공유합니다.</p>

