---
layout: post
title: '"아마도 쉬운 안드로이드 어플만들기" 6-1 기초 대화상자(1)'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/303020' ; </script>

<p></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페, App Development 카페, 프그머 카페</u></p>
<p><u>업로드 시간 : 매주 일요일 오후 11시</u><p></p>
<p>&nbsp;난이도 : ★★★★★&nbsp;</p>
<p></p>
<p>﻿﻿오늘부터는 대화상자 쪽으로 나가겠습니다</p>
<p>﻿뭐 딱히 할 말은 없고요,&nbsp;이 부분은 약간 쉬우므로 잘 따라올 것 같습니다.&nbsp;</p>
<p>﻿&nbsp;</p>
<p>﻿&nbsp;</p>
<p>﻿&nbsp;</p>
<p>1. 일단은 Dialog 클래스를 이용해 만들어 보게습니다.&nbsp;</p>
<p>﻿&nbsp;</p>
<p>﻿Activity_main.xml&nbsp;</p>
<p>﻿&nbsp;&nbsp;&nbsp;&nbsp; &lt;TextView&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_height="wrap_content"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_alignParentLeft="true"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_below="@+id/textView3"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_marginTop="105dp"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:text="Test : 옆 버튼을 누르면 대화상자가 생성됩니다." /&gt;</p>
<p>&nbsp;&nbsp;&nbsp; &lt;Button&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_height="wrap_content"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_alignBaseline="@+id/textView5"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_alignBottom="@+id/textView5"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:layout_alignParentRight="true"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:onClick="dia"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; android:text="생성" /&gt;&nbsp;</p>
<p>&nbsp;</p>
<p>﻿&nbsp;﻿MainActivity.java</p>
<p>&nbsp;&nbsp;&nbsp; public void dia(View v){&nbsp;&nbsp;&nbsp; &nbsp;Dialog gg=new Dialog(this);&nbsp;&nbsp;&nbsp; &nbsp;TextView text=new TextView(this);&nbsp;&nbsp;&nbsp; &nbsp;text.setText("안드로이드는 어려운 겁니다");&nbsp;&nbsp;&nbsp; &nbsp;gg.setContentView(text);&nbsp;&nbsp;&nbsp; &nbsp;gg.setTitle("단언컨데");&nbsp;&nbsp;&nbsp; &nbsp;gg.show();&nbsp;</p>
<p>&nbsp;</p>
<p>﻿&nbsp;&nbsp;</p>
<p>일단 무조건 쳐보시고 바로 실행해 봅니다.&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130901_35%2Ftjdtnsu_1378021266617nqsmf_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740">&nbsp;</p>
<p>﻿&nbsp;</p>
<p>짜잔! 그렇지만 종료버튼도 없고 별로 꾸며져 있지도 않네요그러면 이제 하나하나씩 집어 넣어보도록 하겠습니다.........는 뻥이고 이건 정말 사용하기 번거롭습니다.</p>
﻿</p>
﻿<p></p>
<p>&nbsp;</p>
<p>﻿그래서 Dialogue보다는 AlertDialog를 씁니다.&nbsp;역시 이번에도 무조건 적어봅니다&nbsp;</p>
<p>﻿&nbsp;</p>
<p>&nbsp;</p>
<p>﻿&nbsp;</p>
<p>2.﻿ ﻿&nbsp;AlertDialog를 이용해 대화상자를 출력하기</p>
<p>&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp; public void dia(View v){&nbsp;&nbsp;&nbsp; &nbsp;AlertDialog.Builder gg=new AlertDialog.Builder(this);&nbsp;&nbsp;&nbsp; &nbsp;gg.setTitle("단언컨데");&nbsp;&nbsp;&nbsp; &nbsp;gg.setMessage("안드로이드는 어려운 겁니다.");&nbsp;&nbsp;&nbsp; &nbsp;gg.setIcon(R.drawable.ic_launcher);&nbsp;&nbsp;&nbsp; &nbsp;gg.show();&nbsp;&nbsp;&nbsp; }</p>
<p>﻿&nbsp;</p>
<p>﻿이렇게 적어줍니다. 아, 위에 있는 예제는 이걸로 다시 채워주시면 됩니다.(java)&nbsp;</p>
<p>역시 실행해 봅니다.﻿&nbsp;</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130901_284%2Ftjdtnsu_13780225446510IJLA_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>&nbsp;</p>
<p>이렇게 나옵니다. 위에 것보다는 훨씬 낫죠?&nbsp;</p>
<p>뭐 그렇다는 겁니다.&nbsp;</p>
<p>AlertDialog를 이용해 이제 버튼 등등을 추가할 예정입니다.&nbsp;</p>
<p>﻿&nbsp;</p>
<p>﻿&nbsp;</p>
<p>다음 강좌는 위에 말한 대로 대화상자에 버튼을 생성해 보겠습니다.﻿﻿&nbsp;</p>

