---
layout: post
title: '[커뮤니티] #2 이클립스 때려서 어플 만들자'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/286056' ; </script>

<p>두번째 시간입니다~</p>
<p>이 강좌를 위해 많이 준비했으니 읽으신 다음 따뜻한 덧글 한마디 부탁드려요~</p>
<p>이번 강좌는 좀 스샷이 많습니다 29개나 되는군요 ㄷㄷ</p>
<p>그래도 최대한 자세하게 설명하기 위해 노력하였습니다!</p>
<p>&nbsp;</p>
<p>오타, 잘못된 부분 지적 부탁드립니다!</p>
<p>&nbsp;</p>
<p>2. 이클립스 때려서 어플 만들자</p>
<p>2-1 이클립스 실행하자</p>
<p>저번 강좌에서 다운받은 ADT를 압축풀면 이클립스와 SDK, SDK Manager이 나오는대요 이클립스 폴더에 진입하신다음</p>
<p>eclipse.exe를 실행해 주세요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F2421AD3B51F86B571B0BEF%22&amp;type=cafe_wa740"></p>
<p><strike>(용량이 작네요 ㅎㅎㅎ)</strike></p>
<p>실행해 주시면 아래와 같이 화면이 나타납니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile30.uf.tistory.com%2Fimage%2F26021E3B51F86B581EF513%22&amp;type=cafe_wa740"></p>
<p>로딩되기를 기다려 주세요 ㅎㅎ</p>
<p>&nbsp;</p>
<p>[미르의 팁]</p>
<p>-저는 저 로고가 안나와요!</p>
<p>ADT 번들을 받으셨다면 저런 로고가 나오지만 따로 이클립스를 받으셨거나 하셨다면 다른 로고가 나타납니다</p>
<p>하지만 작동에는 상관 없으니 그냥 넘어가셔도 됩니다 ㅎㅎ</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile28.uf.tistory.com%2Fimage%2F2629E33B51F86B581ABE30%22&amp;type=cafe_wa740"></p>
<p>Workspace를 지정하라는 창이 나타납니다</p>
<p>웤스 스페이스(?)란 어플을 만들때 작업 폴더입니다</p>
<p>만들게된 어플의 소스가 저장되는 가장 기본적인 경로 입니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F277F0B3B51F86B58251638%22&amp;type=cafe_wa740"></p>
<p>이제 이클립스 창이 나타났어요!</p>
<p>Android IDE옆에 있는 X를 눌러 Welcome창을 닫아줍시다</p>
<p>&nbsp;</p>
<p>[미르의 팁]</p>
<p>-저는 저 창이 안나오는대요?</p>
<p>1. 이클립스를 전에 실행한 적이 있다면 나타나지 않습니다</p>
<p>2. 이클립스를 따로 받았을 경우 저 창이 아니라 Welcome이라는 창이 나타납니다</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F210BF33B51F86B5922FD8A%22&amp;type=cafe_wa740"></p>
<p>구글에게 정보를 제공할거냐? 라는건대요 저는 딱히 필요 없으니 No를 눌렀습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F2422FC3B51F86B591BE479%22&amp;type=cafe_wa740"></p>
<p>자, 이제 이클립스의 진정한 모습이 나타났습니다</p>
<p>저 화면에 익숙해 지셔야 하는대요 ㅎㅎ</p>
<p>간단하게 사진에 설명을 써두었으니 외우시면 됩니다(?)</p>
<p>[미르의 팁]</p>
<p>-이클립스를 한글로 쓰고 싶어요!</p>
<p>필자도 이클립스를 한글로 쓰고 싶어 언어팩을 다운받아 적용하였으나</p>
<p>더 어려워 졌습니다</p>
<p>모든 강좌가 이클립스 영어를 기준으로 작성되어 있어 편하게 설정하거나 오류를 해결하기 위해서는 영어 그대로 가시는것이 좋습니다</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>[미르의 팁]</p>
<p>-이클립스의 단축키를 알아봅시다</p>
<p>Ctrl + F11 : Run As를 실행한것과 같은 단축키 입니다Ctrl + D : 커서가 위치한 줄 자체를 지워버립니다Ctrl + / : 주석처리를 위한 단축키 입니다 드래그를 한다음 이 단축키를 누르면 드레그된 줄이 주석(//)처리 됩니다Ctrl&nbsp; + Shift + / : 주석처리를 위한 단축키 이며 이는 /* */으로 주석처리 됩니다Ctrl + Shift + O : 자동으로 import하며 가장 많이 하는 단축키가 될것입니다 (꼭 암기하세요!)Ctrl + N : 새로운 프로젝트를 생성합니다Alt + ↓ , Alt + ↑ : 줄바꾸기 입니다 현재 커서가 위치한 줄을 위쪽(또는 아래쪽)으로 이동시켜 줍니다</p>
<p>&nbsp;</p>
<p>hello world를 표시하는 어플을 만들어 보겠습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile22.uf.tistory.com%2Fimage%2F2464FA3B51F86B5A0E6F3B%22&amp;type=cafe_wa740"></p>
<p>Package Explorer에서 마우스 오른쪽 - New - Android Application Project를 선택해 주세요</p>
<p>이는 이클립스 상단 탭에 있는 File탭을 눌러도 같은 창이 나타납니다</p>
<p>&nbsp;</p>
<p>[미르의 팁]</p>
<p>-저는 Android Application Project이 안떠요;;</p>
<p>만약 Android Application Project이 뜨지 않을경우 아래에 있는 Other을&nbsp;클릭한다음 선택해 주시면 됩니다</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile9.uf.tistory.com%2Fimage%2F2322113B51F86B5A1DFDF4%22&amp;type=cafe_wa740"></p>
<p>새로운 어플을 만들기 위한 첫 창이 나타났습니다</p>
<p>Application Name은 어플의 이름을 결정하는 곳 입니다</p>
<p>Project Name은 이클립스에 나타날 프로젝트의 이름을 결정합니다</p>
<p>Package Name은 AndroidManifest.xml에 기록되는 팩키지의 이름입니다 이는 마켓에 올리기 위한 어플의 고유 이름으로 중복되서는 안됩니다</p>
<p>&nbsp;</p>
<p>아래는 영어를 해석해 보시면 바로 뜻을 알수 있으므로 간단하게 짚고 넘어가겠습니다</p>
<p>1. 최소 실행 SDK버전 (이보다 아래에 있는 안드로이드 버전은 설치가 불가능합니다)</p>
<p>2. Target SDK (타겟이 되는 안드로이드 버전)</p>
<p>3. Compile With (어떤 SDK버전으로 어플을 만들거냐, 2번과 같게 해주시면 될겁니다)</p>
<p>4. 테마 (ICS부터 있는 holo, dark중 어떤것을 사용할거냐)</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile9.uf.tistory.com%2Fimage%2F263F0A3551F86B5A1E4290%22&amp;type=cafe_wa740"></p>
<p>이부분은 그닥 상관하지 않으셔도 됩니다</p>
<p>다음 &gt;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile24.uf.tistory.com%2Fimage%2F255E863551F86B5B17C13A%22&amp;type=cafe_wa740"></p>
<p>어플의 아이콘을 결정하는건대요</p>
<p>아이콘이 있다면 Image File의 경로를 바꿔주시면 됩니다</p>
<p>다음 &gt;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F2202493551F86B5B27B1AF%22&amp;type=cafe_wa740"></p>
<p>액티비티의 타입을 결정합니다</p>
<p>우리는 Blank Activity가 필요하며, 당분간은 바뀌지 않을겁니다</p>
<p>다음 &gt;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F232B5C3551F86B5B20917E%22&amp;type=cafe_wa740"></p>
<p>메인 액티비티의 이름과 액티비티에서 사용할 xml의 이름을 지정해주며</p>
<p>Navigation Type는 스와이프탭, 스크롤탭, 드롭바등을 선택할때 쓰는건대요</p>
<p>아직은 배우지 않았으므로 마침(Finish)을 눌러 어플을 생성합시다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2104893551F86B5C263D71%22&amp;type=cafe_wa740"></p>
<p>이제 좀 이클립스 다워졌습니다 ㅎㅎ</p>
<p>가운데 있는 Graphical Layout버튼은 화면에 어떻게 표시될것인지를 표시하며</p>
<p>activity_main.xml(이름은 연 파일과 같아집니다)는 소스코드를 보고 수정할수 있습니다</p>
<p>&nbsp;</p>
<p>한번 만져보시면서 놀아보세요 ㅎㅎ</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile30.uf.tistory.com%2Fimage%2F2607BA3551F86B5C2496E5%22&amp;type=cafe_wa740"></p>
<p>어플을 새로 생성하면 아무것도 안해도 Hello World!가 나타납니다 ㅎㅎ</p>
<p>그런대 어떻게 해서 이것이 나타나는지는 모릅니다</p>
<p>처음에 어플이 실행될때 MainActivity.java를 실행하는대요 이 java파일에서 activity_main.xml을 호출하고,</p>
<p>activity_main.xml에서 res/values/string.xml에 있는&nbsp;hello world를 표시하는 겁니다</p>
<p>&nbsp;</p>
<p>이제 어플을 시험해 봐야 합니다</p>
<p>이경우에는 2가지 방법이 있는대요</p>
<p>에뮬레이터를 이용한 방법과 실제 안드로이드 스마트폰에 올려 구동하는 방법이 있습니다</p>
<p>&nbsp;</p>
<p>모두 해보겠습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile28.uf.tistory.com%2Fimage%2F2476763551F86B5C2BA78A%22&amp;type=cafe_wa740"></p>
<p>프로젝트를 마우스 오른쪽 클릭해 Run As에 갖다댄다음 Run Configurations를 클릭해 주세요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F217B9C3551F86B5D2802DB%22&amp;type=cafe_wa740"></p>
<p>왼쪽 Android Application을 더블클릭한다음 Target의 Launch an all compatible devices/AVD's를 선택해 주세요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile22.uf.tistory.com%2Fimage%2F2237923851F86B5D05FF43%22&amp;type=cafe_wa740"></p>
<p>이를 Active devices로 바꿔주면 항상 연결되어 있는 기기를 통해 연결하겠다는 뜻입니다</p>
<p>이때 기기는 USB 디버깅이 활성화 되어 있어야만 합니다</p>
<p>&nbsp;</p>
<p>[미르의 팁]</p>
<p>-안드로이드 기기에 연결해 어플을 시험하면 뭐가 좋나요?</p>
<p>어플을 테스트 할수 있는 속도가 넘사벽 입니다</p>
<p>에뮬레이터로 작동하게 되면 일단 에뮬레이터를 킨다음 또 들어가야 하지만</p>
<p>기기에 직접 연결하여 작동시키면 바로 기기에서 작동하는 모습을 볼수 있으므로 편리합니다</p>
<p>필자도 이렇게 설정하여 사용중입니다</p>
<p><strike>(에뮬레이터를 오늘 강좌를 위해 처음 켜봤습니다 ㅎㅎ;;)</strike></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>만약 에뮬레이터를 통해 실행하려면 상단 이클립스 탭에 있는 아래 체크된 아이콘을 눌러주세요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F21214F3851F86B5D0AB79E%22&amp;type=cafe_wa740"></p>
<p>네모친 아이콘을 눌러주시면 됩니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile22.uf.tistory.com%2Fimage%2F2451433851F86B5E3427C9%22&amp;type=cafe_wa740"></p>
<p>Android Virtual Device Manager이 나타났는대요</p>
<p>New를 눌러줍시다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F271BA93851F86B5E3A2B0A%22&amp;type=cafe_wa740"></p>
<p>Android Virtual Device(줄여서 AVD)를 설정해 줍니다</p>
<p>위 사진은 예제일 뿐 입맛에 맞게 사용해 주시면 됩니다</p>
<p>그런대 RAM부분은 너무 클경우 렉이 심하게 발생할수 있으니 적당하게 잡아주세요</p>
<p>&nbsp;</p>
<p>이제 Start버튼을 누르면 에뮬레이터가 실행됩니다</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F2656033451F87247163F0B%22&amp;type=cafe_wa740"></p>
<p>자, 알아서 결정해 주신다음 Launch를 눌러줍시다</p>
<p>&nbsp;</p>
<p>[미르의 팁]</p>
<p>-에뮬레이터 화면이 모니터 밖으로 나갔어요.....</p>
<p>Launch Option에서 Scale displat to real size를 체크하시면 됩니다</p>
<p>Screen Size는 단말의 액정크기를 말하며 4.0은 4인치를 뜻합니다</p>
<p>Moniter dpi는 PC의 모니터가 가지는 dpi값을 지정하는데 여기서는 160을&nbsp;입력하여 원래의 크기의 0.51비율로 보이도록 하신다음 실행해 보세요</p>
<p>&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F2623E73851F86B5E0A4593%22&amp;type=cafe_wa740"></p>
<p>실행중입니다 ㅎㅎ</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F2326AD3851F86B5E09CCA9%22&amp;type=cafe_wa740"></p>
<p>실행중입니다 ㅎㅎ</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile8.uf.tistory.com%2Fimage%2F2627CF3551F86B5F20120D%22&amp;type=cafe_wa740"></p>
<p>실행되었습니다 ㅎㅎ</p>
<p>마우스로 OK눌러주시면 됩니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile8.uf.tistory.com%2Fimage%2F245B0B3551F86B5F18DA04%22&amp;type=cafe_wa740"></p>
<p>한번 구경하신다음 전 그냥 닫았습니다</p>
<p>에뮬레이터로 어플을 실행하면 이 화면에 어플 화면이 나타납니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F231D113551F86B60230AA2%22&amp;type=cafe_wa740"></p>
<p>닫기를 눌러 닫아봅시다</p>
<p>&nbsp;</p>
<p>이제는 어플을 실행해 봅시다</p>
<p>아까 했던 Run as - Android Application을 클릭해 주세요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F22456E3551F86B601B6998%22&amp;type=cafe_wa740"></p>
<p>어플이 만들어 지고 있습니다...</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile8.uf.tistory.com%2Fimage%2F2352BE3551F86B6019873B%22&amp;type=cafe_wa740"></p>
<p>만약 이런 화면이 뜬다면 실행할 AVD또는 구동할 기기를 선택한다음 OK를 누르면 됩니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F216FED3551F86B602B99F3%22&amp;type=cafe_wa740"></p>
<p>어플이 실행되면 아래화면에 Logcat이 나타나며 실행되는 로그를 확인할수 있습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F2166003851F873ED2266F9%22&amp;type=cafe_wa740"></p>
<p>정상적으로 실행되었습니다!</p>
<p>이렇게 어플에서 바로 확인할수 있으므로 편리합니다 ㅎㅎ</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>자, 이렇게 해서 이클립스를 때려서 hello world를 띄워 봤습니다</p>
<p>사실 어플을 생성하기만해도 hello world를 띄울수 있는대요</p>
<p>띄우는게 중요한 것이 아니라 어떻게 해서 띄울수 있는지가 중요합니다</p>
<p>&nbsp;</p>
<p>포스팅 시간(약 1시간 30분 걸렸내요 ㅠㅠ)과 강좌의 길이도 너무 길어져서 여기서는 자세히 언급을 못했습니다</p>
<p>다음에는 어떻게 작동되는지 한번 자세하게 알아보겠습니다~</p>
