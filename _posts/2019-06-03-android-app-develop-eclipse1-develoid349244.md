---
layout: post
title: '#22 옵션 메뉴(Menu) 사용방법'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/349244' ; </script>

<p>원본글&nbsp;<a href="http://whdghks913.tistory.com/409">http://whdghks913.tistory.com/409</a>&nbsp;에서 봐주시면 더욱 쾌적한 감상이 될수있습니다 ^^</p>
<p>안녕하세요</p>
<p>이번에는 옵션 메뉴에 대해 알아보겠습니다</p>
<p>ps. 4.4로 SDK버전을 업데이트 했더니 예제도 4.4로 만들어 지는군요 ㅋㅋ</p>
<p>22.&nbsp;옵션 메뉴(Menu) 사용방법</p>
<p>22-1 메뉴란?</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20131216_115/whdghks913_13871717349311XvO3_JPEG/1.jpg?type=w740"></p>
기기의 메뉴버튼을 누르면 나타나는 화면이 있습니다<img src="https://cafeptthumb-phinf.pstatic.net/20131216_64/whdghks913_1387171735028ucgBo_JPEG/2.jpg?type=w740"><p>어쩔때는 이렇게 메뉴 부분 옆에 나타나기도 합니다</p>
<p>이렇게 기기의 설정과 같은 항목이나, 검색같은 기능을 따로 메뉴를 통해 만들어 두게 됩니다</p>
<p>이번에는 이 메뉴에 대해 알아보겠습니다</p>
<p>22-2&nbsp;메뉴는 프로젝트를 만들때 부터 있는대요?</p>
<p>맞습니다 메뉴는 어떤 작업을 하지 않아도 프로젝트를 만들때 부터 생기게 됩니다</p>
<p>우리가 자주 접하던&nbsp;onCreate()는 액티비티의 생명주기(원래 빨리 배웠어야 하는대 너무 미뤄졌내요)에 의해</p>
<p>액티비티가 처음에 만들어질때 호출되는 메소드인것을 감안하면</p>
<p>그 아래에 있는&nbsp;onCreateOptionsMenu()메소드가 메뉴와 관련된 메소드 라는것을 알수 있습니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20131216_22/whdghks913_1387171768033Ha5pO_PNG/3.PNG?type=w740"></p>
<p>이제부터 onCreateOptionsMenu와 관련된 코드를 배워 봅시다</p>
<p>22-3&nbsp;메뉴가 나타나는 방법?</p>
<p>아래 사진을 보면 바로 이해가 됩니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20131216_79/whdghks913_1387171781909MgJ1b_PNG/4.PNG?type=w740"></p>
<p>R.menu.main이라는 코드를 통해 res/menu/main.xml에 있는 코드를 읽어 와서 적용하는 방식입니다</p>
<p>그렇다면 저 xml파일에&nbsp;무엇이 들어갈수 있는지 알아볼까요?</p>
<p>22-4&nbsp;레이아웃은&nbsp;대부분 xml에서 작성해요</p>
<p>화면에 표시되는 메뉴는 자바에서도 add를 이용해 추가할수 있지만 대부분 xml을 통해 작성합니다</p>
<p>그 이유는 구글에서도 권장하고 있으며 코드의 간결성을 유지하기 위한 목적등이 있습니다</p>
<p>그럼 이제부터는 메뉴의 종류와 구현방법에 대해 알아보겠습니다</p>
<p>22-5&nbsp;메뉴는 아래와 같은 종류가 있어요</p>
<p>이제부터는 메뉴의 종류를 알아보고 구현 방법에 대해 알아보겠습니다</p>
<p>먼저 허니콤(3.0)에서 새로 추가된 "액션바"라는것이 있습니다</p>
<p>대부분의 ICS이상 어플들이 이 액션바를 이용하여 구현되고 있는대요</p>
<p>아래 사진처럼 액션바를 이용해서 메뉴를 구현하고 있습니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20131216_67/whdghks913_138717182315918Lki_JPEG/5.jpg?type=w740"></p>
일반적인 메뉴는 아래와 같습니다<img src="https://cafeptthumb-phinf.pstatic.net/20131216_149/whdghks913_1387171823279fB7c9_JPEG/6.jpg?type=w740"><p>모두 같은 메뉴지만 엄밀히 따진다면 메뉴의 종류는 4가지 정도라고 볼수 있습니다</p>
<p>일반 보통 메뉴, 선택할수 있는 메뉴, 아이콘이 들어간 메뉴, 서브 메뉴</p>
<p>그렇다고 해서 아이콘과 선택메뉴가 동시에 안되는것은 아닙니다</p>
<p>먼저 일반 메뉴의 xml 구현방식 입니다</p>
<p>&lt;menu xmlns:andro &gt;</p>
<p>&nbsp; &nbsp; &lt;item</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;android:orderInCategory="1"</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;android:showAsAction="never"</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:title="일반 메뉴"/&gt;</p>
<p>&lt;/menu&gt;</p>
<p>메뉴를 구성하는 xml은 맨 처음에 Menu라는 태그로 감싸게 됩니다</p>
<p>그 아래에 item이라는 태그가 위치하게 되는대요</p>
<p>저기 두개의 새로운 속성들이 있습니다</p>
<p>android:orderInCategory</p>
<p>이것은 우선순위 입니다</p>
<p>숫자가 낮을 수록 위에 위치하게 됩니다</p>
<p>android:showAsAction</p>
<p>이것은 ActionBar에 표시할것인지에 관한 속성입니다</p>
<p>들어갈수 있는 값은&nbsp;never,&nbsp;ifRoom,&nbsp;always,&nbsp;withText,&nbsp;collapseActionView가 있으며 각각의 뜻은 아래와 같습니다</p>
<p>never : 절대로 액션바에 표시하지 않습니다 (기본값)</p>
<p>ifRoom : 표시할수 있는 공간이 존재하면 표시합니다</p>
<p>withText : 메뉴의 아이콘과 텍스트를 함께 표시합니다</p>
<p>always : 항상 액션바에 표시합니다</p>
<p>두개 이상의 옵션을 "|"을 이용해 동시에 사용할수도 있습니다</p>
<p>|은 쉬프트 키를 누른상태에서 \을 누르면 됩니다</p>
<p>collapseActionView는 정보가 부족하여 아직은 저도 모르겠습니다</p>
<p>그 다음으로 선택 메뉴의 구현 방식입니다</p>
<p>&lt;item</p>
<p>&nbsp; &nbsp; android:</p>
<p>&nbsp; &nbsp; android:orderInCategory="2"</p>
<p>&nbsp; &nbsp; android:showAsAction="never"</p>
<p>&nbsp; &nbsp;&nbsp;android:checkable="true"</p>
<p>&nbsp; &nbsp; android:title="선택 메뉴"/&gt;</p>
<p>일반 메뉴와 달라진것이 있다면&nbsp;android:checkable입니다</p>
<p>그냥 저 코드만 붙혀주면 되며 기본값은 false입니다</p>
<p>또한 기본적으로 체크가 되어야 한다면&nbsp;android:checked="true" 옵션을 통해 기본값으로 선택이 되어있게 할수도 있습니다</p>
<p>물론 이것도 기본값은 false입니다</p>
<p>세번째는 아이콘이 들어간 메뉴인대요</p>
<p>아쉽게도 메뉴 버튼을 눌러 나오는 창에서는 API 11부터, 즉 허니콤(3.0)부터는 아이콘이 나타나지 않습니다<sup ><a href="http://whdghks913.tistory.com/409#footnote_409_1">1</a></sup></p>
<p>대신 액션바를 이용해 아이콘을 표시할수 있는대요</p>
<p>그 방법을 살펴보겠습니다</p>
<p>&lt;item</p>
<p>&nbsp; &nbsp;&nbsp;android:</p>
<p>&nbsp; &nbsp; android:orderInCategory="3"</p>
<p>&nbsp; &nbsp; android:showAsAction="ifRoom"</p>
<p>&nbsp; &nbsp;&nbsp;android:icon="@drawable/ic_launcher"</p>
<p>&nbsp; &nbsp; android:title="아이콘 메뉴"/&gt;</p>
<p>볼게 없습니다</p>
<p>그냥 icon옵션을 사용했다는것 외에는 별거 없내요 ㅋㅋ</p>
<p>마지막은 서브 메뉴 입니다</p>
<p>&lt;item</p>
<p>&nbsp; &nbsp; android:</p>
<p>&nbsp; &nbsp; android:orderInCategory="4"</p>
<p>&nbsp; &nbsp; android:showAsAction="never"</p>
<p>&nbsp; &nbsp; android:title="서브메뉴 1" &gt;</p>
<p>&nbsp; &nbsp; &lt;menu&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;item</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; android:</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; android:orderInCategory="5"</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; android:showAsAction="never"</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; android:title="서브 메뉴 2"/&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;item</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; android:</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; android:orderInCategory="6"</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; android:showAsAction="never"</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; android:title="서브 메뉴 3"/&gt;</p>
<p>&nbsp; &nbsp; &lt;/menu&gt;</p>
<p>&lt;/item&gt;</p>
<p>서브메뉴는 아이탬 태그안에 다시 menu태그를 넣어 만든것으로</p>
<p>메뉴를 터치하면 또다시 메뉴가 뜨는 구조입니다</p>
<p>서브메뉴 안에 또다시 서브메뉴를 넣는것은 불가능 하다고 알고있습니다</p>
<p>22-6&nbsp;자바코드에서 메뉴를 추가하는 방법</p>
<p>자, 지금까지&nbsp;xml을 통해서 메뉴를 추가하는 방법에 대해 배워봤는대요</p>
<p>유동적으로 자바코드를 이용해서 메뉴를 추가해야 하는 경우가 있습니다 이때는 add메소드를 사용합니다</p>
<p>Menu.add(groupId,&nbsp;itemId,&nbsp;order,&nbsp;title)</p>
<p>groupId&nbsp;: 그룹 ID를 지정하며, Menu에서 사용할수 있는 그룹 옵션을 사용할때 쓰입니다</p>
<p>itemId&nbsp;: Menu 각각의 item의 ID를 지정합니다</p>
<p>order&nbsp;: item의 순서이며,&nbsp;android:orderInCategory와 같습니다</p>
<p>title&nbsp;: item의 Title입니다</p>
<p>예)&nbsp;menu.add(0, 7777, 1, "Java Add Menu");</p>
<p>22-7&nbsp;메뉴를 눌렀을때 작업 처리</p>
<p>메뉴가 눌렸을때 무슨 작업을 할지 처리하는 메소드는&nbsp;onMenuItemSelected라는 메소드 입니다</p>
<p>아래에 기본 형태가 있습니다</p>
<p>@Override</p>
<p>public boolean onMenuItemSelected(int featureId, MenuItem item) {</p>
<p>&nbsp; &nbsp; return super.onMenuItemSelected(featureId, item);</p>
<p>}</p>
<p>저 메소드안에 처리할 명령어들을 담아야 하는대요</p>
<p>메뉴가 하나라면 몰라도 여러개가 있을땐 각각을 꼭 구분해야 합니다</p>
<p>자주 쓸수 있는 item의 옵션을 나열해 보겠습니다</p>
<p>item.getGroupId() : Groupid를 얻습니다</p>
<p>item.getIcon() : 아이탬의 Icon을 얻습니다</p>
<p>item.getIntent() : 연결된 Intent를 얻습니다</p>
<p>item.getItemId() : 아이탬의 ID를 얻습니다</p>
<p>item.getOrder() : 아이탬의 순서를 얻습니다</p>
<p>item.getTitle() : 타이틀을 얻습니다</p>
<p>item.isCheckable() : 현재 체크가 가능한지 여부를 반환합니다</p>
<p>item.isChecked() : 현재 체크가 되어 있는지 여부를 반환합니다</p>
<p>이중에서 아이탬을 구분할때 자주 쓸수 있는거라면&nbsp;item.getItemId()이겠죠?</p>
<p>저 문구와 if문을 이용해서 터치된 아이탬의 id값을 얻어 실행할 작업을 구분하면 됩니다</p>
<p>if(item.getItemId()==R.id.SimpleMenu){</p>
<p>&nbsp; &nbsp; Toast.makeText(this, "기본 메뉴가 터치되었습니다", Toast.LENGTH_SHORT).show();</p>
<p>}</p>
<p>if(item.getItemId()==R.id.clickAbleMenu){</p>
<p>&nbsp; &nbsp; if(item.isChecked()){</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;item.setChecked(false);</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; Toast.makeText(this, "체크가 해제되었습니다", Toast.LENGTH_SHORT).show();</p>
<p>&nbsp; &nbsp; }else{</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;item.setChecked(true);</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; Toast.makeText(this, "체크 되었습니다", Toast.LENGTH_SHORT).show();</p>
<p>&nbsp; &nbsp; }</p>
<p>}</p>
<p>if(item.getItemId()==R.id.IconMenu){</p>
<p>&nbsp; &nbsp; Toast.makeText(this, "아이콘 메뉴가 터치되었습니다", Toast.LENGTH_SHORT).show();</p>
<p>}</p>
<p>if(item.getItemId()==R.id.subMenu_2){</p>
<p>&nbsp; &nbsp; Toast.makeText(this, "서브메뉴 2가 터치되었습니다", Toast.LENGTH_SHORT).show();</p>
<p>}</p>
<p>if(item.getItemId()==R.id.subMenu_3){</p>
<p>&nbsp; &nbsp; Toast.makeText(this, "서브메뉴 3이 터치되었습니다", Toast.LENGTH_SHORT).show();</p>
<p>}</p>
<p>if(item.getItemId()==R.id.actionBarMenu){</p>
<p>&nbsp; &nbsp; Toast.makeText(this, "액션바 메뉴가 터치되었습니다", Toast.LENGTH_SHORT).show();</p>
<p>}</p>
<p>제 나름대로 소스를 구성하였습니다</p>
<p>저렇게 item의 id값을 얻어서 if문을 구성해 주시면 됩니다</p>
<p>(간결하게 하려고 else를 넣지 않았습니다)</p>
<p>여기서 하나 지정하지 않은것이 있습니다</p>
<p>바로&nbsp;subMenu_1인대요 이 메뉴는 어처피 눌러도 더보기와 같이 서브적인 메뉴를 띄워주는 역할만 하기 때문에</p>
<p>특별히 역할이 필요하지 않는 이상은 지정하지 않았습니다</p>
<p>이렇게 해서 메뉴의 사용법에 대해서도 알아봤습니다</p>
<p>저도 이글을 쓰면서 많이 배우는것 같네요 ㅎㅎ</p>
<p>스크린샷은 뭐 볼게 없어서 생략하겠습니다</p>
<p>메뉴 사용하기 쉽죠?~</p>
<p></p>
<p><p>이 강좌의 예제소스는 23번 강좌가&nbsp;나오는 즉시 업로드 됩니다</p>
<p>카페에서는 원본글에서만 다운로드가 가능합니다</p>
<p>예제소스 다운로드 : 카페에서는 다운로드가 불가능 하며 원본글&nbsp;<a href="http://whdghks913.tistory.com/409">http://whdghks913.tistory.com/409</a>&nbsp;에서만 다운로드가 가능합니다</p>
<p></p>

