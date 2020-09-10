---
layout: post
title: '[커뮤니티] #32 최상위에 떠있는 뷰 만들기 (WindowManager)'
author: 'Mir'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/485538' ; </script>

<p>원본글은&nbsp;<a href="http://itmir.tistory.com/548">http://itmir.tistory.com/548</a> 입니다</p>
<p>카페보다 더 깔끔하게 보실수 있고, 소스코드 보기와 예제 다운로드도 가능합니다</p>
<p>방문해주셔서 따뜻한 덧글 한마디<strike>와 광고클릭</strike> 부탁드립니다~</p>
<p>안녕하세요</p>
<p>몇달만이지 모르겠습니다만.. 이번에는 최상위에 떠 있는 뷰를 만들어 보겠습니다</p>
<p>최상위에 떠있는 뷰란.. Q슬라이드나 뭐 이런거 처럼 화면에 떠 있는 뷰를 뜻합니다</p>
<p>프로젝트 생성 및 레이아웃은?</p>
<p>최상위에 떠있는 뷰는 액티비티를 종료해도 화면 위에 남아야 합니다</p>
<p>그러므로 꼭 서비스를 이용해서 만들어야 합니다</p>
<p>메인 레이아웃은 서비스 시작/종료 버튼만 만들어 줍시다</p>
<p>(원래 시작/종료를 2개 만들어서 터치O서비스, 터치X서비스 이렇게 만들어야 하지만 코드의 간결성을 위해 하나만 했습니다, 아래에 언급할겁니다)</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20141217_268/whdghks913_1418807813648Qv9iL_PNG/1.PNG?type=w740"></p>
<p><a href="http://itmir.tistory.com/548">코드 보기</a></p>
<p>그리고.. 최상위에 떠다니는 "뷰" 이므로 화면위에 있을 "뷰"를 만들어 줘야 하는데요</p>
<p>두가지로 나눌수 있습니다</p>
<p>하나는 터치가 되는 뷰, 나머지는 터치가 안되는 뷰</p>
<p>전자는 터치이벤트를 받을수 있어서 팝업 동영상등에, 뒤는 터치를 못받으므로 스크린필터? 이런 용도로 씁니다</p>
<p>물론 둘다 만들어 볼겁니다 ㅎㅎ</p>
<p>터치이벤트를 못받는 뷰와 관련된 레이아웃 파일 입니다</p>
<p>이름 : always_on_top_view_not_touch.xml</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20141217_200/whdghks913_1418807822404mPTsb_PNG/2.PNG?type=w740"></p>
<p><a href="http://itmir.tistory.com/548">코드 보기</a></p>
<p>간결하게 TextView 하나만 있습니다</p>
<p>이 TextView는 나중에 중앙에 항상 뜨도록 만들겠습니다</p>
<p>또하나는 터치를 받을수 있는 뷰인데요</p>
<p>간단하게 이미지뷰 하나만 뒀습니다</p>
<p>이름 : always_on_top_view_touch.xml</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20141217_225/whdghks913_1418807830401XkKdK_PNG/3.PNG?type=w740"></p>
<p>터치 이벤트를 받아서 뭐할건가.. 생각해봤는데요</p>
<p>그냥 움직여보겠습니다</p>
<p>최상단 액티비티를 띄우려면 권한이 필요해요</p>
<p>화면에 뷰를 추가하기 위한 권한을 추가해 줍시다</p>
<p>&lt;uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" /&gt;</p>
<p>서비스 생성하기</p>
<p>최상단 뷰를 만들기 위해 서비스를 사용해야 합니다</p>
<p>이 강좌에서는 터치가 되는것, 안되는것 두가지를 만들 예정이므로 서비스를 2개 생성해야 합니다</p>
<p>구체적인 생성법은 아래 링크를 참고해 주세요</p>
<p>[Development/App] - #23 Service (서비스)에 대해 알아보자</p>
<p>[java] : 파일 생성</p>
<p>AlwaysTopServiceTouch.java - 서비스 생성 (링크 참조해서 생성하세요)</p>
<p>AlwaysTopServiceNotTouch.java - 서비스 생성 (링크 참조해서 생성하세요)</p>
<p>[AndroidManifest.xml] : 코드 추가</p>
<p>&lt;service android:name="itmir.tistory.examplewindowview.AlwaysTopServiceNotTouch" /&gt;</p>
<p>&lt;service android:name="itmir.tistory.examplewindowview.AlwaysTopServiceTouch" /&gt;</p>
<p>[MainActivity.java] : 메소드 추가</p>
<p>public void mStart(View v) {</p>
<p>&nbsp; &nbsp; startService(new Intent(this, AlwaysTopServiceNotTouch.class));</p>
<p>}</p>
<p>public void mStop(View v) {</p>
<p>&nbsp; &nbsp; stopService(new Intent(this, AlwaysTopServiceNotTouch.class));</p>
<p>}</p>
<p>AlwaysTopServiceNotTouch 서비스를 봐주세요</p>
<p>자....... 서비스까지 잘 생성하셨으리라 믿고 넘어가겠습니다</p>
<p>본격적으로 자바소스를 알아보기 전에 그림으로 알아볼까 합니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20141217_207/whdghks913_1418807843334GboBa_PNG/4.PNG?type=w740"></p>
<p>모식도(?)입니다</p>
<p>private View mView;</p>
<p>private WindowManager mManager;</p>
<p>화면에 최상단 뷰를 추가하기 위해서 WindowMananger를 사용할겁니다</p>
<p>서비스의 onCreate()메소드 입니다</p>
<p>@Override</p>
<p>public void onCreate() {</p>
<p>&nbsp; &nbsp; super.onCreate();</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; LayoutInflater mInflater = (LayoutInflater) getSystemService(Context.LAYOUT_INFLATER_SERVICE);</p>
<p>&nbsp; &nbsp; mView = mInflater.inflate(R.layout.always_on_top_view_not_touch, null);</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; WindowManager.LayoutParams mParams = new WindowManager.LayoutParams(</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; WindowManager.LayoutParams.WRAP_CONTENT,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; WindowManager.LayoutParams.WRAP_CONTENT,</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; WindowManager.LayoutParams.TYPE_SYSTEM_OVERLAY,</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; WindowManager.LayoutParams.FLAG_WATCH_OUTSIDE_TOUCH,</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; PixelFormat.TRANSLUCENT);</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; mManager = (WindowManager) getSystemService(WINDOW_SERVICE);</p>
<p>&nbsp; &nbsp; mManager.addView(mView, mParams);</p>
<p>}</p>
<p>하나씩 확인해 보겠습니다</p>
<p>5~6번은 전에 본적이 있으실겁니다</p>
<p>커스텀 알림때 배운 레이아웃 인플레이터입니다</p>
<p><a href="http://itmir.tistory.com/358">[Development/App] - #17 커스텀 알림(Alert) 띄우기</a></p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20141217_253/whdghks913_1418807858259bb1b1_JPEG/%B7%B9%C0%CC%BE%C6%BF%F4_%C0%CE%C7%C3%B7%B9%C0%CC%C5%CD.jpg?type=w740"></p>
<p>(이제야 우려먹네요;)</p>
<p>19~20부분에서 뷰를 추가하는데요</p>
<p>그림이 뭐낙 잘만들어서(?) 이해하시는데 큰 어려움은 없을거라 믿고.....</p>
<p>8~17이 문제네요</p>
<p>API를 봅시다</p>
<p>WindowManager.LayoutParams mParams = new WindowManager.LayoutParams(w, h, _type, _flags, _format)</p>
<p>저 순서대로 집어넣어 주는건대요</p>
<p>WindowManager.LayoutParams.WRAP_CONTENT</p>
<p>이건 WRAP_CONTENT가 눈에 잘 들어오실탠대 생각하시는 그거 맞습니다</p>
<p>WindowManager.LayoutParams.TYPE_SYSTEM_OVERLAY</p>
<p>이건 항상 최상위에 있도록 해주는 타입입니다</p>
<p>반대로 아래에서 사용하게될 WindowManager.LayoutParams.TYPE_PHONE은 터치 이벤트도 받을수 있습니다</p>
<p>WindowManager.LayoutParams.FLAG_WATCH_OUTSIDE_TOUCH</p>
<p>이건 뷰를 제외한 나머지 부분의 터치를 가능하게 해준다...라고 알고있습니다</p>
<p>PixelFormat.TRANSLUCENT</p>
<p>이건 API를 보면 _format이라 되어있는데 dev.android.com찾아봐도 뭔지 모르겠내요</p>
<p>(아시는분 계시다면 덧글로 꼭 알려주세요!)</p>
<p>그럼.. 이제 터치 못받는건 마무리 해볼께요</p>
<p>아래는 스크린샷 입니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20141217_242/whdghks913_1418807869091gJ7tS_PNG/6.png?type=w740"><img src="https://cafeptthumb-phinf.pstatic.net/20141217_201/whdghks913_1418807869218KfpYR_PNG/7.png?type=w740"></p>
<p>&nbsp; &nbsp;</p>
<p>AlwaysTopServiceTouch 서비스를 봐주세요</p>
<p>중요한건 위에서 다 언급했기 때문에 바뀐 점만 언급하고 마치려 합니다</p>
<p>mView.setOnTouchListener(mViewTouchListener);</p>
<p>&nbsp;</p>
<p>mParams = new WindowManager.LayoutParams(</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; WindowManager.LayoutParams.WRAP_CONTENT,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; WindowManager.LayoutParams.WRAP_CONTENT,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; WindowManager.LayoutParams.TYPE_PHONE,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE,</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; PixelFormat.TRANSLUCENT);</p>
<p>&nbsp;</p>
<p>mParams.gravity = Gravity.TOP | Gravity.LEFT;</p>
<p>TYPE_PHONE과 FLAG가 변경되었네요</p>
<p>WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE</p>
<p>포커스를 가지지 않게 합니다</p>
<p>그리고 mView.setOnTouchListener(mViewTouchListener); 이부분에서 mViewTouchListener를 언급하지 않았네요</p>
<p>private float mTouchX, mTouchY;</p>
<p>private int mViewX, mViewY;</p>
<p>&nbsp;</p>
<p>private OnTouchListener mViewTouchListener = new OnTouchListener() {</p>
<p>&nbsp; &nbsp; @Override</p>
<p>&nbsp; &nbsp; public boolean onTouch(View v, MotionEvent event) {</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; switch (event.getAction()) {</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; case MotionEvent.ACTION_DOWN:</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; mTouchX = event.getRawX();</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; mTouchY = event.getRawY();</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; mViewX = mParams.x;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; mViewY = mParams.y;</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break;</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; case MotionEvent.ACTION_UP:</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break;</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; case MotionEvent.ACTION_MOVE:</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; int x = (int) (event.getRawX() - mTouchX);</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; int y = (int) (event.getRawY() - mTouchY);</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; mParams.x = mViewX + x;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; mParams.y = mViewY + y;</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; mManager.updateViewLayout(mView, mParams);</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; }</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; return true;</p>
<p>&nbsp; &nbsp; }</p>
<p>};</p>
<p>뭐.. 이런구조인데요</p>
<p>중요한건 터치이벤트 리스너를 받을수 있고, 그 이벤트를 받아서 mParams을 수정하고, updateViewLayout()로 위치를 수정한다 라는 원리입니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20141217_222/whdghks913_14188078853000qL9y_PNG/8.png?type=w740"><img src="https://cafeptthumb-phinf.pstatic.net/20141217_85/whdghks913_1418807885488cKcnz_PNG/9.png?type=w740"></p>
<p>&nbsp; &nbsp;</p>
<p>예제 다운로드</p>
<p><a href="http://itmir.tistory.com/548">http://itmir.tistory.com/548</a>에서 다운로드 가능합니다</p>
<p>마치며</p>
<p>강좌 완성도를 점차 올리고 싶은데 시간도 없고.. 내용도 어렵고 해서 강좌를 자주 올리지 못하네요..</p>
<p>그리고 제 필력이 약해서 정확하게 이해하실수 있으실지도 모르겠습니다</p>
<p>예제소스도 함께 첨부했으니 이해가 안되신다면 소스 확인해보세요~</p>
<p>글 한번 쓰는거 너무 오래걸리고 힘드네요...</p>
<p>특히 그림 만드는거..</p>
<p>이 글이 유용하시다면 덧글과 제 블로그에 있는 수입원(?) 한번씩 터치해주시면 감사드리겠습니다..</p>
<p>미밴드 사고싶어서 빨리 모였으면 하네요 ㅎㅎ..</p>
