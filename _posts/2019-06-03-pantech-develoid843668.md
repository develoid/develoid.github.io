---
layout: post
title: '[커뮤니티] 아임백 루팅, 부트로더 언락 없이 통신사펌 바꾸기.'
author: 'DrTouch'
categories: Pantech
tags:
- Pantech
- Sky
- Device
- Custom
---


<script> location.href='https://cafe.naver.com/develoid/843668' ; </script>

새벽의 뻘짓 끝에 결국 성공한 아임백 통신사펌 바꾸기.<p>성공한 사진&nbsp;↓</p>
<p><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMTNfMjI5/MDAxNTQ3MzUxMTczMzk1.nTyhHmW4iI7FGtJS46SSFiHdFfC0gRNlNOUuoFKHonQg.DQicbZVHVP-D2ZROvEj7mmg5eFFFKH_O6lz5OJLVga4g.JPEG.sychang353/P10200701.JPG?type=w740"></p>
<p><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMTNfMjUy/MDAxNTQ3MzUwMjM3MDEy.6mykSryU_fHVzTqSAxcc59nuyOqaSS7RPvK3-zSV9CMg._SyRynYxgP_MwUhOt_y19PdrjU6FigCNfizQ4ek1NxQg.PNG.sychang353/Screenshot_20190113-1227411.png?type=w740"><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMTNfMjMx/MDAxNTQ3MzUwMjM3Mzg0.q1sTiSO5T-OU9ir5Ctc3rtzJVM_FoSU_GFyZKdeziKUg.4H4GVfA9o9qKslDYGByKF_7c41WCuw5lDafxTQHk_Jsg.PNG.sychang353/%EC%BA%A1%EC%B2%98.PNG?type=w740"><p>&gt;&gt;&gt; 왜 이짓을 했나?</p>
<p>&nbsp;skt&nbsp;→ kt m모바일(알뜰폰)으로 번호이동을 했는데 아뿔싸. 내폰은 SKT 기기이다.</p>
<p>그러다보니 맨윗줄에 통신사 로고도 안뜨고 뭔가 마음에도 걸리고 티머니가 안되서(!!) 결국 자료를 찾던 중 성공했다.</p>
<p>&gt;&gt;&gt; 이 작업은 모든 데이터가 초기화됩니다. 꼭 백업해 두세요. &lt;&lt;&lt;</p>
</p>
<p>&gt;&gt;&gt; 아마도 모든 팬택 제품에 적용되지 않나 싶습니다.&nbsp; 아임백 말고 다른 팬택 기기로 성공하신 분들은 댓글 남겨주세요. &lt;&lt;&lt;</p>
<p>1. 다음 사이트에 들어가서 팬택 USB 드라이버, 팬택 PDL 인스톨러, 바꾸고 싶은 통신사펌을 다운로드 받는다.</p>
<p>&nbsp;<a href="https://cafe.naver.com/skyplanet/397/">https://cafe.naver.com/skyplanet/397</a></p>
<p>&nbsp;<a href="https://pantech.iroot.kr/firmware/">https://pantech.iroot.kr/firmware/</a></p>
<p>&nbsp;<a href="http://www.skyservice.co.kr/down/software/main.sky#resultArea">http://www.skyservice.co.kr/down/software/main.sky#resultArea</a> (IM-100S 기준 사이트.)</p>
<p>&nbsp;&gt; 첫번째 사이트에서 팬택 PDL 인스톨러를, 두번째에서 전기종 통신사펌을, 세번째 스카이 서비스센터 사이트에서 팬택 USB 드라이버를 다운받아줍니다.</p>
<p>&nbsp;PDL 인스톨러와 통신사펌의 위치는 어디든 상관없습니다.</p>
<p>2. 아임백을 PDL 다운로드 모드로 설정해 둔다.</p>
<p>&nbsp;&gt; 이건 영상 참고.</p>
<p><iframe frame scrolling="no" name="mplayer" title="플레이어"  height="405" src="https://serviceapi.nmv.naver.com/view/ugcPlayer.nhn?vid=3CC9F477E465AE1A60CF4AAAC45AA20D9C99&amp;inKey=V121207db178b33a9fdb96ac265f0176e6ecc58d5d3cec484632bf947b6610a93619f6ac265f0176e6ecc&amp;wmode=opaque&amp;hasLink=1&amp;autoPlay=false&amp;beginTime=0" allowfullscreen="allowfullscreen"></iframe>&nbsp;영상과 같이 휴대폰을 끈후 휠키+전원키를 이용해 팬택 멀티 메뉴로 들어가서 휠키를 이용해 PDL DOWNLOAD 로 들어간 다음 컴퓨터와 케이블로 연결해 줍니다.</p>
<p>3. PDL 실행</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMTNfMjgw/MDAxNTQ3MzUyODY3NDc5.fsOpDLDn0GHieR5IeTGL7p1g_T207JAIV6RvLV_K4e4g.GuJ_589MqjShGuhTvf8ICeGIpV7-zOg9s1jxw9k_Yysg.PNG.sychang353/%EC%BA%A1%EC%B2%98.PNG?type=w740"></p>
<p>지금까지 잘 따라오셨으면 이렇게 창이 뜰텐데요. 윗부분에 Auto Run Test는 체크해주시는 것이 좋습니다. 여기서 파일열기로 자신이 변경하고 싶은 통신사펌 열어주고 꼭!!!!! 다운로드 + 파일시스템 삭제를 눌러주셔야 합니다!</p>
<p>안그러면 소프트브릭 걸려요.</p>
<p>그리고 시간이 저같은 경우에는 5분 남짓 걸렸는데요. 그동안 쉬시면서 기다리다 보면..</p>
<p>통신사펌이 바뀌어 있는걸 확인하실 수 있을겁니다.</p>
<p>이제 편한 마음으로 맞춰진 통신사펌으로 핸드폰을 이용하시면 됩니다.</p>
<p>긴 글 읽어주셔서 감사합니다!! 혹시나 잘못된 점이나 추가해 주실 점은 댓글로 남겨주세요!!</p>
<p>수정&gt;&gt;&gt; kt 펌웨어는 밝기 버그가 있다고 하네요. 아임백 kt 통신사펌 변경하실 때 주의하세요.</p>
