---
layout: post
title: '[커뮤니티] #28 WebView로 인터넷을 해보자'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/377890' ; </script>

<p><center >#28 WebView로 인터넷을 해보자</center><center >이번 강좌는 소스코드의 가독성 향상을 위해 사진으로 제공합니다</center><center >소스코드를 복사하기를 원하는 분께서는</center><center ><a href="http://whdghks913.tistory.com/468">http://whdghks913.tistory.com/468</a> 으로 방문해 주세요~</center></p>
<p>안녕하세요</p>
<p>강좌가 등록되는 시간 주기가 초반에는 하루였는대 요즘은 보름~한달 되는거 같아요</p>
<p>천천히 강좌를 써서 여러분이 빨리 따라올수있도록 배려하는거랍니다~(?)</p>
<p>그리고 이번강좌 부터는 모바일에서의 가독성 향상을 위해 소스코드를 사진으로 캡쳐해서 올리겠습니다</p>
<p>복사할수있는 소스코드는 "코드보기"버튼을 누르면 볼수 있으며, 티스토리에서만 볼수있습니다 (네이버는 지원을 안하므로..)</p>
<p>28. WebView로 인터넷을 해보자</p>
<p>28-1 인터넷을 하기 위해서는 권한이 필요해요</p>
<p>웹뷰 예제를 따라하다 마지막에 "잘못한게 없는거 같은대 강제종료 되요"라는 덧글이 올라올까봐 처음부터 언급하겠습니다</p>
<p>인터넷을 하기 위해서는 AndroidManifest.xml에 인터넷 권한을 추가해 주어야만 합니다</p>
<p>그래야 이 어플을 설치하기 전에 아 인터넷에 접속할수 있구나 라는걸 사용자에게 알릴수가 있답니다</p>
<p>&lt;uses-permission android:name="android.permission.INTERNET" /&gt;</p>
<p>28-2 레이아웃을 만들어 보자</p>
<p>오랜만에 레이아웃을 만드는거 같습니다(?)</p>
<p>이번시간에 만들 레이아웃은 아래와 같습니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140213_149/whdghks913_1392273569038KT19s_PNG/1.PNG?type=w740"></p>
<p>평소 사용하던&nbsp;RelativeLayout을 사용하면 힘들수 있으므로 이번에는 리니어 레이아웃을 사용해 보겠습니다</p>
<p>잠깐&nbsp;LinearLayout에 대해 설명하자면..</p>
<p>이 레이아웃은 추가된 하위뷰들(EditText)을 순서대로 위에서 아래로, 또는 왼쪽에서 오른쪽으로 배열합니다</p>
<p>저 사진에서 ProgressBar는 0으로 설정해야 하고요</p>
<p></p>
<p>레이아웃 xml은 아래와 같습니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140213_222/whdghks913_1392273596061e0wbl_PNG/0.PNG?type=w740"></p>
<p>두번째 리니어 레이아웃을 보면</p>
<p>focusable과 focusableInTouchMode이 있는대요</p>
<p>처음에 액티비티에 EditText가 있을경우 포커스가 EditText로 먼저 가므로 이를 방지하기 위해 넣어줬습니다</p>
<p>이 두개가 없을경우 앱을 실행하면 키보드가 나타나요</p>
<p></p>
<p>더 자세한 설명보다 직접 보는게 이해가 빠르므로 설명은 생략하겠습니다</p>
<p>(앱 예제안 주석에 달아두겠습니다)</p>
<p>28-3 MainActivity.java</p>
<p>이번 강좌에서는 선언해야 할것이 조금 많습니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140213_243/whdghks913_13922735962088ymdH_PNG/1.PNG?type=w740"></p>
<p>가독성 향상을 위해 사진을 사용했습니다</p>
<p>코드를 보기 위해서는 "코드보기"버튼을 눌러주세요~~</p>
<p>이제 onCreate()로 와주세요</p>
<p>id값과 InputMethodManager의 경우는 시스탬 서비스를 호출해야 합니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140213_163/whdghks913_1392273596326Kak9t_PNG/2.PNG?type=w740"></p>
<p>첫번째 줄을 보시면 InputMethodManager가 처음 나왔는대요 이것을 사용하는 이유는 이동할 주소를 입력한뒤 이동 버튼을 누르면</p>
<p>키보드가 숨겨져야 하죠? 그래서&nbsp;InputMethodManager를 사용합니다</p>
<p>이제&nbsp;WebSettings에 대해 설명할 차례가 왔습니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140213_298/whdghks913_1392273596431FuFOF_PNG/3.PNG?type=w740"></p>
<p>첫번째 줄이 WebView의 설정을 불러오는 부분입니다</p>
<p>3번째 라인은 Form데이터를 저장할지 여부이며,</p>
<p>4번째는 java스크립트 사용여부</p>
<p>5~6번째는 멀티터치로 화면을 늘릴지 여부를 설정하고,</p>
<p>7번줄은 캐쉬 사용 모드를 나타내고 있습니다</p>
<p>CacheMode에는 아래중 하나가 들어갈수 있습니다</p>
<ul ><li >WebSettings.LOAD_DEFAULT</li><li >WebSettings.LOAD_NORMAL</li><li >WebSettings.LOAD_CACHE_ELSE_NETWORK</li><li >WebSettings.LOAD_NO_CACHE</li><li >WebSettings.LOAD_CACHE_ONLY</li></ul><p>여기서&nbsp;LOAD_CACHE_ELSE_NETWORK에 대해 부가 설명을 하면</p>
<p>캐쉬를 사용할수 있는경우 기간이 만료되도 사용합니다, 사용할수 없으면 네트워크를 사용합니다</p>
<p>(API 원문 :&nbsp;Use cached resources when they are available, even if they have expired. Otherwise load resources from the network.)</p>
<p>이제 아래 문구를 또 넣어주세요</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140213_215/whdghks913_1392273596519gE0yl_PNG/4.PNG?type=w740">그러면 new ~()부분에 빨간 밑줄이 나타날겁니다<img src="https://cafeptthumb-phinf.pstatic.net/20140213_279/whdghks913_1392273596628wCReu_PNG/4-1.PNG?type=w740"></p>
<p>당황하지 마시고 아래의 클래스를 추가해 주면 되는대요</p>
<p>onCreate()아래에 추가해 주시면 됩니다</p>
<p>설명까지 한번에 이어서 하겠습니다</p>
<p>먼저 webChromeClient입니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140213_272/whdghks913_1392273596744DOnuU_PNG/5.PNG?type=w740"><img src="https://cafeptthumb-phinf.pstatic.net/20140213_64/whdghks913_1392275711792cv0D3_PNG/11.PNG?type=w740"><img src="https://cafeptthumb-phinf.pstatic.net/20140213_245/whdghks913_1392275711966wjKRH_PNG/12.PNG?type=w740"></p>
<p>이 onProgressChanged()메소드는 페이지를 로딩할때, 프로그래스가 달라질때마다 호출됩니다</p>
<p>그러므로 ProgressBar를 설정하는 부분을 이곳에 넣어주면 됩니다~</p>
<p></p>
<p>onReceivedIcon()는 웹페이지의 아이콘이 변경될때마다 호출되는대요</p>
<p></p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140213_278/whdghks913_13922757120601AozS_PNG/%C4%B8%C3%B3.PNG?type=w740"></p>
<p>이게 아이콘 입니다</p>
<p>onReceivedTitle()는 웹페이지의 제목이 변경될때마다,</p>
<p>onJsAlert()와&nbsp;onJsConfirm()는 자바스크립트 알림/경고를 표시할지 여부를 설정해줍니</p>
<p>아래는 webViewClient입니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140213_33/whdghks913_13922735968478QPB9_PNG/6.PNG?type=w740"></p>
<p>위에 있는 4번째 줄의 onPageFinished()는 페이지 로딩이 끝났을때 호출됩니다</p>
<p>아래 shouldOverriedUrlLoading()메소드는 한 페이지에서 다른 페이지로 넘어갈때 호출되므로</p>
<p>13줄의 loadUrl()을 통해 페이지를 이동합니다</p>
<p>여기까지 하셨다면 아까 빨간줄은 없어졌을겁니다</p>
<p>이제 마지막으로 onCreate()의 맨 마지막에 아래 문구만 추가해 주면 끝입니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140213_292/whdghks913_1392273596936XKjLs_PNG/7.PNG?type=w740"></p>
<p>이제 Layout에서 버튼을 누르면 할 작업을 만들어 줘야 되요~</p>
<p>onClick에서 GoButton으로 했기 때문에 GoButton이라는 메소드를 만들어 줍시다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140213_291/whdghks913_13922735970742R5g6_PNG/8.PNG?type=w740"></p>
<p>2번째 줄에서버튼을 누르면 일단 키보드를 숨겨줍니다</p>
<p>그다음에&nbsp;httpaddressCheck()라는 메소드를 호출하는대요</p>
<p>이 메소드는 "http://"라는 글자가 주소에 없을경우 추가해주는 메소드입니다</p>
<p>8번 라인에서 입력한 주소로 이동하는 모습을 볼수 있어요</p>
<p>마지막으로 뒤로가기 키를 누르면 이전 페이지로 가는 코드를 넣어줍시다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140213_176/whdghks913_1392273597160j01Xv_PNG/9.PNG?type=w740"></p>
<p>4번줄의 canGoBack()은 이전 페이지가 있으면 true, 없으면 false를 반환합니다</p>
<p>뒤로 갈수 있는 페이지가 있으면 goBack()을 통해 이전페이지로 이동하고,</p>
<p>없으면 어플을 종료합니다</p>
<p>어플 스크린샷은 아래와 같습니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140213_105/whdghks913_1392273801716RqNls_PNG/device-2014-02-13-144443.png?type=w740"></p>
<p>이렇게 해서 기본적인 웹뷰 사용법을 알아봤습니다</p>
<p>더 많은 API는 기회가 되면 알아보도록 하겠습니다</p>
<p></p>
<p><p>이 강좌의 예제소스는 29번 강좌가&nbsp;나오는 즉시 업로드 됩니다</p>
<p>카페에서는 원본글에서만 다운로드가 가능합니다</p>
<p>예제소스 다운로드 : 아직 29번 강좌가 업로드 되지 않았습니다</p>
</p>
</p>
