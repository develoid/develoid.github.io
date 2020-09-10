---
layout: post
title: '[커뮤니티] 정말 쉬운 코딩 강의 14번째 시간입니다 (엄마는 게임을 숨겼다 #5)'
author: '나도코딩'
categories: Programming-Scratch
tags:
- Programming
- Language
- Scratch
-
---


<script> location.href='https://cafe.naver.com/develoid/857454' ; </script>

<p>안녕하세요 !</p>
<p>정말 쉬운 코딩, 스크래치 3.0 강의 열네 번째이자 다섯 번째 실전 프로젝트 시간입니다.</p>
<p>(인사말)</p>
<p>이 강의를 끝으로 저는 여러분들께 인사를 드리고, 기회가 되면 다음에 또 다른 강의로 연재를 하도록 하겠습니다.</p>
<p>그간 공감과 댓글로 응원해주신 분들, 따뜻한 멘트 주신 분들께 진심으로 감사드려요 ^^ 너무너무 큰 힘이 되었고 덕분에 여기까지 잘 올 수 있었습니다.&nbsp;</p>
<p>이후에는 정규 과정 뿐 아니라 코딩 관련 짤막하면서도 유용한 영상을 제 유튜브 채널에 계속 올릴 예정입니다. 관심 있으신 분께서는 아래 링크 방문하셔서&nbsp;"구독하기"를 해주시면 보다 편리하게 영상을 보실 수 있습니다.</p>
<p><a href="https://www.youtube.com/channel/UC7iAOLiALt2rtMVAWWl4pnw?view_as=subscriber">https://www.youtube.com/channel/UC7iAOLiALt2rtMVAWWl4pnw?view_as=subscriber</a></p>
<p>(본문)</p>
<p>이번에 만들어볼 게임은 '엄마는 게임을 숨겼다 3탄'입니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAzMTJfMjA3/MDAxNTUyMzQzOTA0NDg4.wvJzX7UOmsG134wPat3qamFaqlWqi_1q4pFwQGj0mXwg.ud8zEjbSmxZisxRvLt_jAVX2XrcRC8L_5mlPXTN4xYwg.PNG.nadocoding/%EC%97%84%EA%B2%8C%EC%88%A8_%EB%A1%9C%EA%B3%A0.png?type=w740"></p>
<p>캐주얼 게임 장르에서 독특한 게임 형식이자 가볍게 플레이 할 수 있는 덕분에 굉장한 인기를 얻었지요.&nbsp;스크래치 교육에서 이 게임을 선정한 이유는 스테이지별로 다른 화면을 효율적으로 관리하기 위함입니다.&nbsp;단순히 게임의 난이도만 높아지는 것이 아니라 Stage1 에서의 화면 배치가 다르고 Stage2 에서의 화면 배치가 다른데,&nbsp;이를 어떻게 하면 쉽게 잘 관리 가능한지를 리스트라는 형태를 통해서 교육합니다. ^^</p>
<p>게임은 대략 이렇습니다.</p>
<p>엄마가 어딘가 게임을 숨겨요 (이미 숨겨진 상태)</p>
<p>그럼 아들이 그 게임을 찾습니다. 옷장도 열어보고 창문도 열어보고 사다리도 이용하면서 말이죠.&nbsp;이 때 엄마에게 들키면 안됩니다. 그런데 엄마는 너무 뻔뻔하게 숨어 있어서 ㅎㅎ 뭐 저런 엄마가 다 있나.. 싶을 만큼 웃음이 나옵니다.</p>
<p>레벨이 올라갈 수록 점점 머리를 써야되기도 해요 ㅋ</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAzMTJfMTYx/MDAxNTUyMzQzOTQ2ODk3.GNnPqJXjEFzZTNyf8xL0HjbO-_O7mqxlKBLmju1CtJIg.N1q1kII20OzO1OV8DWKAVwn_5HaMkJ2cKorIGdsgTHkg.GIF.nadocoding/NEW_GIF_5.gif?type=w740"></p>
<p>이 게임에서 특히 눈여겨 볼 부분은 3가지 입니다.</p>
<p>(1) 좌우로 전환되는 배경 만들기</p>
<p>독특한 형식입니다. 집안에서 일어나는 일이며 화면은 좌우로 분리됩니다. 왼쪽 화면과 오른쪽 화면으로 나뉘어지는데, 오른쪽 화면에서 만약 벽장을 열었다면, 왼쪽 화면을 갔다가 다시 오른쪽 화면 왔을 때 벽장은 열려있는 채로 있어야겠지요. 이 부분을 배워봅니다. 아래 화면에서 왼쪽 화면은 가로로 길게 검은 선이 그려져 있고, 오른쪽 화면은 대각선으로 선이 그려져 있습니다. 아직은 가구 배치가 없고 방만 있는 상태입니다 ^^</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAzMTJfODUg/MDAxNTUyMzQzOTY3MDI4.NmeXQsSmdYnVq5Lh95A8ZtKo5_i9LsxI1jYF1jSsTnYg.ZkeUFfrA38CnchVYryEL-4LkGmwfMogzu7blb6rGRKgg.GIF.nadocoding/%EC%97%84%EA%B2%8C%EC%88%A81_%EC%A2%8C%EC%9A%B0%ED%99%94%EB%A9%B4%EC%A0%84%ED%99%98.gif?type=w740"></p>
<p>(2) 스테이지별 화면 구성하기</p>
<p>스테이지별로 화면 구성이 달라집니다. 엄마가 숨은 공간도 달라집니다. Stage1 에서는 엄마가 벽장 속에 숨어 있고, Stage2 에서는 쿠션 밑에 숨어 있습니다. 즉 스테이지별로 다르게 화면 배치를 해야 하는거죠. 단순히 if(stage1) { } else if (stage2) 이런 식으로 구성하지 않고 리스트를 통해 스테이지를 구성할 화면을 좌르르 가져다 놓고 각 스프라이트에서 리스트 값을 확인하여 이번 스테이지에 보여줄지 말지를 결정하는 방식으로 진행합니다. 우리 강의에서는 1, 2 스테이지만 다루지만 실제로 실습하실 때는 더 많은 스테이지도 쉽게 확장할 수가 있게 됩니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAzMTJfNzUg/MDAxNTUyMzQzOTgzNDMx.ehdAszUw55SOG0ugGTVPqWc7XURa9A2wxhr9E6o3uAIg.C6LVv4TnQKXL40PWZxStoni1vWgnEK-F2dYVujrlEYgg.GIF.nadocoding/%EC%97%84%EA%B2%8C%EC%88%A82_-_%EC%97%84%EB%A7%88%EB%93%A4%ED%82%B4.gif?type=w740"></p>
<p>(3) 게임 성공 / 실패 처리, 그리고 애니메이션 효과</p>
<p>엄마에게 들키면 게임 실패, 그렇지 않고 게임기를 잘 찾으면 게임 성공! 이렇게 게임 결과 판정을 합니다. 다른 게임들은 어디 장애물에 부딪치거나 시간 내에 퀴즈를 풀지 못하면 단순하게 게임 오버 처리를 할 수 있지만 이번 게임은 엄마에게 들켰을 때라는 특수한 상황 (스테이지별로 달라지는) 이 부여됩니다. 그리고 엄마에게 들켰을 때 바로 끝나는 것이 아니라 주인공이 벽장 문을 살며시 열다가 들킨다던지, 쿠션을 들었는데 숨어있던 엄마가 고개를 훽 든다던지 하는 귀여운 애니메이션 효과도 함께 들어갑니다. (실제 동작을 위한 스크립트는 크게 어렵지 않지만 이 동작을 통해 게임의 재미가 더해집니다.)</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAzMTJfNzkg/MDAxNTUyMzQzOTk4MTEx.tb261BLiWxM7Q9pZH8Zr38uk-1-uJmUOqWpPG6Smqjwg.QagVl2CG-sQ2MGWbZHvj-vW_YcoWjni0MXlIjAnrcCwg.GIF.nadocoding/%EC%97%84%EA%B2%8C%EC%88%A83_-_%EC%97%84%EB%A7%88%EB%93%A4%ED%82%B4.gif?type=w740"></p>
<p>3가지 이외에도 다양한 방법을 통해 게임을 완성해 나갑니다.&nbsp;</p>
<p>스프라이트도 굉장히 많고 영상 시간, 갯수도 꽤나 많습니다 ^^</p>
<p>'끝판대장' 이라 생각해주시고 공부해주세요 ㅋㅋ</p>
<p>이 강의 이후에 남은 건, 여러분들이 원하는 게임을 직접 만드시는 겁니다.&nbsp;</p>
<p>이제는 할 수 있어요 =)</p>
<p>14-1.창과 방패의 싸움! 엄마는 게임을 숨겼다 3탄 (실전 프로젝트 #5)&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/IJwT-LXBLuQ?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>14-2.시작 화면 만들기&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/EtMb4CpnNTQ?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>14-3.기본 배경 만들기&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/jETgVUWs9fQ?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>14-4.좌우로 무대 전환하기&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/bWlafGBU-_M?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>14-5.왼쪽화면 만들기 #1 - 옷장 넣기&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/Kt2UewaDKVk?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>14-6.왼쪽화면 만들기 #2 - 창문과 커튼 달기&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/DFGAwhKbBZk?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>14-7.오른쪽 화면 만들기 #1 - 벽장 넣기&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/BBwZ5pB8hbs?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>14-8.오른쪽 화면 만들기 #2 - 소파와 쿠션 넣기&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/tjN6j4OQRiU?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>14-9.주인공의 목표, 게임기 넣기&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/1XmBI6o8ASQ?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>14-10.사다리용 벽장 넣기&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/A2nZNkXAnsA?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>14-11.스테이지에 따른 화면 배치 #1. 리스트 만들기&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/6cqkfAUkvHI?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>14-12.스테이지에 따른 화면 배치 #2. 왼쪽화면 적용하기 (옷장, 커튼)&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/TDNs0ofW0Po?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>14-13.스테이지에 따른 화면 배치 #3. 오른쪽 화면 적용하기 (벽장 소파 쿠션)&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/tbEdjTfI61E?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>14-14.소파 밑에 엄마 숨기기&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/5drQ4BUuIfM?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>14-15.스테이지1 엄마에게 들킴 (실패처리)&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/sCZ_xMau0uQ?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>14-16.스테이지1 쿠션 확인하기 (성공처리)&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/CBsuoKwebwc?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>14-17.스테이지2 사다리 이용 (성공처리)&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/deQzk6GeP5A?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>14-18.스테이지2 엄마에게 들킴 (실패처리)&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/Zbl0WcRqQ1Y?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>14-19.(마지막 강의) 게임 오버 처리, 이 강의도 오버 처리&nbsp; &nbsp;&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/973ZOeyIIgU?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
<p>감사합니다. 코딩 강의 연재, 이만 마치겠습니다. (^^)(_._)(^^) 꾸벅</p>
<p>(덧)</p>
<p>참고로 스크래치는 코딩 교육 의무화에 따라 학교에서 가르치는 기본 툴은 아닙니다.</p>
<p>교육청에서는 '엔트리'라는 프로그램으로 교육을 하도록 가이드 한다고 들었습니다.</p>
<p>엔트리를 직접 다뤄보지는 않았지만 스크래치와 대동소이하며 확장성은 오히려 스크래치가 더 좋다고 합니다.</p>
<p>어차피 툴을 배우는 것이 아니라 툴을 통한 코딩 교육 - 사고력을 기르는 것이 목적이므로,&nbsp;</p>
<p>어느 툴을 쓰건 크게 교육의 질이 다를 거라고는 생각되지 않네요.</p>
<p>다만 학교 교과과정을 선행하기 위해서 도움이 되는 강좌는 아닐 수도 있다는 말씀 드립니다 ㅎㅎ</p>
<p>처음 보실 분들을 위해, 아래는 이 강의의 소개 영상입니다. ^^</p>
<p><iframe src="https://www.youtube.com/embed/xN8O_mhR-7Y?wmode=opaque"  height="407px" frame scrolling="no" allowfullscreen="allowfullscreen"></iframe></p>
