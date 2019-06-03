---
layout: post
title: '"아마도 쉬운 안드로이드 어플만들기" 5-3 옵션 메뉴(1)'
author: 'Snails'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/288184' ; </script>


















						<div></div><p>&nbsp;</p><div><p><span></span></p></div><div><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p><p><i>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</i></p><p><i>저작자는 Snails(tjdtnsu)입니다.</i></p><p><span><strong><span>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</span></strong></span></p><p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p><p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페, App Development 카페, 프그머 카페</u></p><p>&nbsp;<u>﻿</u></p><p><strong><span>﻿난이도 : ★</span><span>★★★☆</span></strong></p><div>&nbsp;</div><div>&nbsp;</div><div>오늘은 옵션 메뉴입니다.</div><div>&nbsp;</div><div>일단 옵션 메뉴는 뭘까요?</div><div>아주 많이 보셨을 듯합니다.</div><div><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130803_112%2Ftjdtnsu_1375538073507AGr9x_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></div><div><strike>그림판으로 약간 수정</strike></div><div>&nbsp;</div><div>&nbsp;</div><div>오늘은 실습 코드를 가지고 연구를 해보겠습니다.</div><div>&nbsp;</div><div>&nbsp;&nbsp;&nbsp; <span>public boolean onCreateOptionsMenu(Menu menu){</span><b><span>&nbsp;&nbsp;&nbsp; &nbsp;super.onCreateOptionsMenu(menu);</span><b><span>&nbsp;&nbsp;&nbsp; &nbsp;MenuItem item=menu.add(0,1,0,"좋아요");</span><b><span>&nbsp;&nbsp;&nbsp; &nbsp;item.setIcon(R.drawable.ic_launcher);</span><b><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;menu.add(0,2,0,"싫어요").setIcon(R.drawable.ic_launcher);</span><b><span>&nbsp;&nbsp;&nbsp; &nbsp;SubMenu etc=menu.addSubMenu("알게뭐야");</span><b><span>&nbsp;&nbsp;&nbsp; &nbsp;etc.add(0,3,0,"1번이 꼴려요");</span><b><span>&nbsp;&nbsp;&nbsp; &nbsp;etc.add(0,4,0,"2번이 꼴려요");</span><b><span>&nbsp;&nbsp;&nbsp; &nbsp;</span><b><span>&nbsp;&nbsp;&nbsp; &nbsp;return true;</span></div><div><span><span>﻿</span>﻿<span>﻿</span></span></div><div><span><span>﻿</span>﻿<span>﻿</span></span></div><div><span><span>﻿</span>﻿<span>﻿</span></span></div><div><span><span>﻿</span>﻿<span>﻿java 파일이라는 건 아시겠죠?</span></span></div><div><span><span><span>﻿</span></span></span></div><div><span><span><span><span>﻿</span></span></span></span></div><div><span><span><span><span><span>﻿</span>﻿<span>﻿</span></span></span></span></span></div><div><span><span><span><span><span>﻿</span>﻿<span>﻿</span></span></span></span></span></div><div><span><span><span><span><span>﻿</span>﻿<span>﻿</span></span></span></span></span></div><div><span><span><span><span><span>﻿</span>﻿<span>﻿</span></span>﻿<span>﻿</span></span></span></span></div><div><span><span><span><span>﻿</span>﻿<span>﻿</span><span>public boolean onCreateOptionsMenu(Menu menu){</span></span></span></span></div><div><span><span><span><span><span>﻿</span>﻿<span>﻿</span><span>﻿처음 생성될 때 메뉴를 추가합니다.</span></span></span></span></span></div><div><span><span><span><span><span><span>﻿</span>﻿<span>﻿</span></span></span></span></span></span></div><div><span><span><span><span><span><span>﻿</span>﻿<span>﻿</span>super.onCreateOptionsMenu(menu);</span></span></span></span></span></div><div><span><span><span><span><span><span>﻿메뉴를 생성합니다.</span></span></span></span></span></span></div><div><span><span><span><span><span><span><span>﻿</span>﻿<span>﻿</span></span></span></span></span></span></span></div><div><span><span><span><span><span><span><span>﻿</span></span></span></span></span></span></span></div><div><span><span><span><span><span><span><span><span>﻿</span>﻿<span>﻿</span>MenuItem item=menu.add(0,1,0,"좋아요");</span></span></span></span></span></span></span></div><div><span><span><span><span><span><span><span><span>메뉴 아이템을 만들고 1번칸에 "좋아요"를 넣습니다.</span></span></span></span></span></span></span></span></div><div><span><span><span><span><span><span><span><span><span>﻿</span>﻿<span>﻿</span></span></span></span></span></span></span></span></span></div><div><span>item.setIcon(R.drawable.ic_launcher);</span><span><span><span><span><span><span><span><span><span>﻿</span>﻿<span>﻿</span></span></span></span></span></span></span></span></span></div><div><span><span><span>앞 아이콘 섹션에 ic_launcher라는 아이콘을 넣습니다.</span></span></span></div><div><span><span><span><span>﻿</span>﻿<span>﻿</span></span></span></span></div><div><span><span><span><span>﻿</span>﻿<span>﻿</span>menu.add(0,2,0,"싫어요").setIcon(R.drawable.ic_launcher);</span></span></span></div><div><span><span><span><span>﻿</span>﻿<span>﻿</span>2번칸에 "싫어요"를 넣고 ic_launcher라는 아이콘을 넣습니다.</span></span></span></div><div><span><span><span><span>﻿</span>﻿<span>﻿</span></span></span></span></div><div><span><span><span><span>SubMenu etc=menu.addSubMenu("알게뭐야");</span></span></span></span></div><div><span><span><span><span><span>﻿</span>﻿<span>﻿etc</span>라는 서브메뉴를 "알게뭐야"라는 이름으로 만듭니다.</span></span></span></span></div><div><span><span><span><span><span>﻿</span>﻿<span>﻿</span></span></span></span></span></div><div><span><span><span><span><span>﻿</span>﻿<span>﻿</span>etc.add(0,3,0,"1번이 꼴려요");</span></span></span></span></div><span><span><span><span></span></span></span></span><p></p><p>&nbsp;</p></div><div><span><span><span><span><div>3번칸에 "1번이 꼴려요"를 넣는다.</div><div><b><span>etc.add(0,4,0,"2번이 꼴려요");</span></div></span><div>4번칸에 "2번이 꼴려요"를 넣는다.</div></span><div></div></span><div></div></span><div>참 쉽죠?</div><div>다음은 xml 가지고도 구현해보겠습니다.</div><div><span><span><span><span><span>﻿</span></span></span></span></span></div><div><span><span><span><span><span>﻿</span>&nbsp;<span>﻿</span><span>﻿</span></span>﻿<span>﻿</span></span></span></span></div>
 </div>
