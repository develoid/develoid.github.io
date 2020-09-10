---
layout: post
title: '[커뮤니티] "아마도 쉬운 안드로이드 어플만들기" 5-3 옵션 메뉴(1)'
author: 'Snails'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/288184' ; </script>

<p></p>
<p>&nbsp;</p>
<p></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페, App Development 카페, 프그머 카페</u></p>
<p>&nbsp;<u>﻿</u></p>
<p>﻿난이도 : ★★★★☆</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>오늘은 옵션 메뉴입니다.</p>
<p>&nbsp;</p>
<p>일단 옵션 메뉴는 뭘까요?</p>
<p>아주 많이 보셨을 듯합니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130803_112%2Ftjdtnsu_1375538073507AGr9x_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p><strike>그림판으로 약간 수정</strike></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>오늘은 실습 코드를 가지고 연구를 해보겠습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp; public boolean onCreateOptionsMenu(Menu menu){&nbsp;&nbsp;&nbsp; &nbsp;super.onCreateOptionsMenu(menu);&nbsp;&nbsp;&nbsp; &nbsp;MenuItem item=menu.add(0,1,0,"좋아요");&nbsp;&nbsp;&nbsp; &nbsp;item.setIcon(R.drawable.ic_launcher);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;menu.add(0,2,0,"싫어요").setIcon(R.drawable.ic_launcher);&nbsp;&nbsp;&nbsp; &nbsp;SubMenu etc=menu.addSubMenu("알게뭐야");&nbsp;&nbsp;&nbsp; &nbsp;etc.add(0,3,0,"1번이 꼴려요");&nbsp;&nbsp;&nbsp; &nbsp;etc.add(0,4,0,"2번이 꼴려요");&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;return true;</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿java 파일이라는 건 아시겠죠?</p>
<p>﻿</p>
<p>﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿﻿﻿</p>
<p>﻿﻿﻿public boolean onCreateOptionsMenu(Menu menu){</p>
<p>﻿﻿﻿﻿처음 생성될 때 메뉴를 추가합니다.</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿super.onCreateOptionsMenu(menu);</p>
<p>﻿메뉴를 생성합니다.</p>
<p>﻿﻿﻿</p>
<p>﻿</p>
<p>﻿﻿﻿MenuItem item=menu.add(0,1,0,"좋아요");</p>
<p>메뉴 아이템을 만들고 1번칸에 "좋아요"를 넣습니다.</p>
<p>﻿﻿﻿</p>
<p>item.setIcon(R.drawable.ic_launcher);﻿﻿﻿</p>
<p>앞 아이콘 섹션에 ic_launcher라는 아이콘을 넣습니다.</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿menu.add(0,2,0,"싫어요").setIcon(R.drawable.ic_launcher);</p>
<p>﻿﻿﻿2번칸에 "싫어요"를 넣고 ic_launcher라는 아이콘을 넣습니다.</p>
<p>﻿﻿﻿</p>
<p>SubMenu etc=menu.addSubMenu("알게뭐야");</p>
<p>﻿﻿﻿etc라는 서브메뉴를 "알게뭐야"라는 이름으로 만듭니다.</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿etc.add(0,3,0,"1번이 꼴려요");</p>
<p></p>
<p>&nbsp;</p>
<p>3번칸에 "1번이 꼴려요"를 넣는다.</p>
<p>etc.add(0,4,0,"2번이 꼴려요");</p>
<p>4번칸에 "2번이 꼴려요"를 넣는다.</p>
<p></p>
<p></p>
<p>참 쉽죠?</p>
<p>다음은 xml 가지고도 구현해보겠습니다.</p>
<p>﻿</p>
<p>﻿&nbsp;﻿﻿﻿﻿</p>

 </p>
