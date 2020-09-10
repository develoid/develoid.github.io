---
layout: post
title: '[커뮤니티] #29 커스텀 리스트뷰 (Custom ListView) - View Holder'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/380268' ; </script>

<p><center >#29 커스텀 리스트뷰 (Custom ListView)</center><center >깔끔한 원본글에서 보기 :&nbsp;<a href="http://whdghks913.tistory.com/477">http://whdghks913.tistory.com/477</a></center></p>
<p>안녕하세요</p>
<p>이강좌가 고등학교에 등교하기전 2월에 쓰는 마지막 강좌가 될것 같습니다</p>
<p>벌써 29번째 강좌입니다</p>
<p>이번에는 그동안 배우지 못했던 리스트뷰에 대해 알아보겠습니다</p>
<p>이 강좌에서 배우는 리스트뷰는 커스텀한 리스트뷰이며, 단지 Text만 표시하려면 이 복잡한 방법을 사용하지 않아도 됩니다</p>
<p>29. 커스텀 리스트뷰 (Custom ListView)</p>
<p>29-1 리스트뷰(ListView)의 중요성</p>
<p>강좌를 시작하기 전에 이번에 배우는 리스트뷰의 중요성에 대해 알아보겠습니다</p>
<p>리스트뷰는 매우매우 중요합니다..!</p>
<p>루트 익스플로러 같은 파일 탐색기 앱에, 메세지 목록을 표시해야 하는 SMS앱, 설치된 어플 목록을 표시할때 등</p>
<p>대부분의 앱에서 한번씩 사용되는 정말 유용하고, 중요한 뷰 입니다</p>
<p>그런대 왜 28번의 강좌동안 이 리스트뷰에 대해 배우지 않았고, 언급이 없었냐...</p>
<p>일단 리스트뷰가 매우 중요하지만 이걸 한번에 이해하시는 분은 없을겁니다</p>
<p>그리고 먼저 제가 이 리스트뷰를 이해하지 못하고 있었기 때문이라고도 변명할수 있겠습니다...;</p>
<p>아무튼 이번 강좌는 눈으로 대충 본다 라고 생각하시는것이 정신건강에 매우 도움이 될것입니다</p>
<p>29-2 리스트뷰란?</p>
<p>29-1에서는 리스트뷰가 이해하기 조금 어렵다고 설명하였습니다</p>
<p>왜 리스트뷰를 이해하기 어려울까요?</p>
<p>그건 리스트뷰는 일반 위젯(TextView등)이 아니라 선택 위젯이기 때문이며,</p>
<p>선택 위젯은 직접 데이터를 설정할수가 없습니다</p>
<p>Adapter(어댑터)라는 패턴을 사용해야 하고, 이 어댑터에서 만들어주는 뷰(getView())를 이용해 아이탬을 표시합니다</p>
<p>아래는 일반 위젯의 대표적인 TextView와 선택위젯의 ListView의 데이터 설정 방법을 비교한 그림입니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140218_207/whdghks913_13926927797456ppN7_PNG/TextView.PNG?type=w740"></p>
<p>(일반 위젯의 데이터 설정방법 - setText()등 데이터를 직접 설정할수 있다)</p>
<p></p>
<img src="https://cafeptthumb-phinf.pstatic.net/20140218_228/whdghks913_1392692779985teuTz_PNG/ListView_Adapter.PNG?type=w740"><p></p>
<p>(선택 위젯의 데이터 설정방법 - 직접 설정이 불가능 하고 데이터가 담긴 Adapter를 이용한다)</p>
<p>이해가 되셨나요?</p>
<p>ListView를 이해하려면 먼저 이 Adapter를 이해해야만 합니다</p>
<p>한마디로 리스트뷰는 어댑터를 사용하여 데이터를 표시하는 View입니다</p>
<p>29-3 레이아웃</p>
<p>29-1과 29-2에서 리스트뷰는 어뎁터를 이용하여 아이탬을 표시한다 라고 배웠습니다</p>
<p>따라서 리스트뷰는 다른 뷰와는 달리 "한 아이탬을 표시할 layout이 따로 필요합니다"</p>
<p>먼저 메인 레이아웃에는 ListView만 넣어주면 됩니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140218_161/whdghks913_13926928165012nfSd_PNG/1.PNG?type=w740"></p>
<p>이제 리스트뷰의 한 아이탬에 표시될 레이아웃을 정의해야 합니다</p>
<p>이 레이아웃 파일의 이름은&nbsp;listview_item.xml으로 합시다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140218_135/whdghks913_1392692780118Kfil6_PNG/item_xml.PNG?type=w740"></p>
<p>이렇게 리스트뷰의 한 아이탬에는 위 그림처럼 정보가 배열될것입니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140218_112/whdghks913_1392692816669EkvgN_PNG/2.PNG?type=w740"></p>
<p>29-4 MainActivity</p>
<p>먼저 처음에 아래를 추가해 주세요</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140218_99/whdghks913_1392692816756sdiT8_PNG/3.PNG?type=w740"></p>
<p>그럼&nbsp;ListViewAdapter에 빨간 줄이 생길겁니다</p>
<p>당황하지 마시고 아직 Adapter class를 작성하지 않아서 생긴 문제이므로 넘어가 주세요</p>
<p>그다음에 ViewHolder라는 class를 작성해 봅시다</p>
<p>onCreate()아래에 추가해 주세요</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140218_5/whdghks913_1392692817052hFnJN_PNG/4.PNG?type=w740"></p>
<p>설명은 아래에서 이어서 하겠습니다</p>
<p>이제는 어댑터를 작성해 봅시다</p>
<p>어댑터를 통해 리스트뷰의 한 아이탬에 표시될 정보를 설정할수 있습니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140218_38/whdghks913_1392692817133tkc67_PNG/5.PNG?type=w740"></p>
<p>위 코드가 어뎁터 class의 기본 뼈대 입니다</p>
<p>이제 이 뼈대를 가지고 살을 체워나가야 합니다</p>
<p>위 소스도 아래 부분에서 빨간줄이 있을겁니다</p>
<p>private ArrayList&lt;<u >ListData</u>&gt; mListData = new ArrayList&lt;<u >ListData</u>&gt;();</p>
<p>ListData에 빨간 줄이 그어 있을탠대요</p>
<p>이것도 class를 만들지 않아서 생긴 오류 입니다</p>
<p>먼저 Class를 하나 만들어 봅시다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140218_44/whdghks913_1392692780200qIowK_PNG/ListData.java.png?type=w740"></p>
<p>이렇게 ListData.java라는 파일을 만들어 주세요</p>
<p>이 파일의 내용은 아래와 같습니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140218_196/whdghks913_1392692817221JLhqk_PNG/6.PNG?type=w740"></p>
<p>한 아이탬의 정보를 담고 있을 java파일을 만들었습니다</p>
<p>아래에 있는&nbsp;ALPHA_COMPARATOR는 리스트뷰의 아이탬을 쇼트(알파벳 순서대로 정렬)하기 위한 메소드이며, AppInfo예제를 참조했습니다</p>
<p>다시 MainActivity.java로 돌아와 보면 빨간줄이 사라져 있을겁니다</p>
<p>이제 getView()를 손봐줍시다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140218_291/whdghks913_1392692817310CPsIq_PNG/7.PNG?type=w740"></p>
<p>4번째 줄의 if문을 봐주세요</p>
<p>getView는 한 아이탬에 들어갈 레이아웃을 지정해 주는 메소드라고 배웠습니다</p>
<p>넘어오는 값은 int position과 View&nbsp;convertView등이 있는대요</p>
<p>position은 리스트뷰의 순서입니다 (아이탬의 순서)</p>
<p>convertView는 한 아이탬의 화면 인대요</p>
<p>convertView가 어떻게 null이 될수 있을까요?</p>
<p>getView는 각각의 아이탬 화면을 반환합니다</p>
<p>만약 리스트가 100개 있다면 100번 반환하는대요</p>
<p>사용자가 스크롤을 하면 또 getView가 사용되고, 이때 잠시 버벅일수 있습니다</p>
<p>그래서&nbsp;convertView가 null이면 새로 레이아웃을 생성하고,&nbsp;null이 아니면 이미 만들어진 View를 재사용 하는거죠</p>
<p>아래 부분은 지금까지 제 강좌를 모두 마스터 하셨다면 이해하는대 문제가 없을거라 생각되어 생략합니다</p>
<p>마지막으로 Adapter에게 필수는 아니지만 사용하면서 필요한 메소드를 추가해 봅시다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140218_87/whdghks913_13926928175052apI6_PNG/8.PNG?type=w740"></p>
<p>각각 사용처는 아래와 같습니다</p>
<p>addItem() : 아이탬을 추가할때 사용합니다</p>
<p>remove() : 아이탬을 제거합니다</p>
<p>sort() : 아이탬을 바르게 배열 합니다</p>
<p>dataChange() : 데이터를 변경한후 호출해야 합니다</p>
<p>이 4개의 메소드는 다른 어플을 만들때 개발자가 편의상 만드는 기능들 입니다</p>
<p>마지막으로 onCreate()메소드 안 코드를 작성합니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140218_138/whdghks913_1392692817652kLU8Y_PNG/9.PNG?type=w740"></p>
<p>아까 Adapter에 추가한 addItem()메소드를 onCreate()안에서 사용하여 아이탬을 추가하였습니다</p>
<p>또한 리스트뷰를 터치하면 터치한 아이탬의 제목이 나타나도록 하였습니다</p>
<p>스크린샷을 보겠습니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140218_124/whdghks913_13926929562203EBfW_PNG/Screenshot_2014-02-18-11-51-02.png?type=w740"><img src="https://cafeptthumb-phinf.pstatic.net/20140218_287/whdghks913_1392692956496IImi9_PNG/Screenshot_2014-02-18-11-51-09.png?type=w740"></p>
<p>정상적으로 아이탬이 나타나며, 터치할경우 제목이 나타나는것을 확인할수 있습니다</p>
<p>이 강좌에서 소게한 리스트뷰의 기능은 극히 일부 입니다</p>
<p>아이탬을 터치하면 확장되는 리스트뷰</p>
<p>스와이프로 아이탬 삭제가능한 리스트뷰 -&nbsp;<a href="http://whdghks913.tistory.com/455">[Development/App] - ListView에서 Swipe To Dismiss(밀어서 삭제) 사용하기</a></p>
<p>삭제 취소가 가능한 리스트뷰</p>
<p>CheckBox가 있어 동시선택이 가능한 리스트뷰</p>
<p>등 정말 많이 응용이 가능합니다</p>
<p>여러분의 입맛에 맞게 다양하게 사용하셨으면 합니다~</p>
<p></p>
<p><p>이 강좌의 예제소스는 30번 강좌가&nbsp;나오는 즉시 업로드 됩니다</p>
<p>카페에서는 원본글에서만 다운로드가 가능합니다</p>
<p>예제소스 다운로드 : 아직 30번 강좌가 업로드 되지 않았습니다</p>
</p>
</p>
