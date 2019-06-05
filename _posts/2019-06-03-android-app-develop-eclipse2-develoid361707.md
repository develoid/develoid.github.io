---
layout: post
title: '"아마도 쉬운 안드로이드 어플만들기" [38] 데이터 조회하기(2)'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/361707' ; </script>

<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"> <p><p><p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페</u> </p>
<p><u>업로드 시간 :&nbsp;매달 2,4주 오후 11시</u> <p></p>
<p>&nbsp;난이도 : ★★★★★★★★﻿﻿ </p>
<p>﻿</p>
<p>&nbsp;</p>
<p>지난번 시간에 이어서 계속 하겠습니다</p>
<p>오늘은 원래 2구문 하려 했는데, 1구문만 하고 끝내겠습니다</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>private <code >void</code> <code >executeRawQueryParam2() { </code><p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >println(</code><code >"\nexecuteRawQueryParam2 called.\n"</code><code >); </code></p>
<p><code >&nbsp;</code>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >String[] columns = {</code><code >"name"</code><code >, </code><code >"age"</code><code >, </code><code >"phone"</code><code >}; </code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >String whereStr = </code><code >"where age &gt; ?"</code><code >; </code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >String[] whereParams = {</code><code >"30"</code><code >}; </code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >Cursor c1 = db.query(TABLE_NAME, columns, </code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >whereStr, whereParams, </code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >null</code><code >, </code><code >null</code><code >, </code><code >null</code><code >); </code></p>
<p><code >&nbsp;</code>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >int</code> <code >recordCount = c1.getCount(); </code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >println(</code><code >"cursor count : "</code> <code >+ recordCount + </code><code >"\n"</code><code >); </code></p>
<p><code >&nbsp;</code>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >for</code> <code >(</code><code >int</code> <code >i = </code><code >0</code><code >; i &lt; recordCount; i++) { </code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >c1.moveToNext(); </code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >String name = c1.getString(</code><code >0</code><code >); </code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >int</code> <code >age = c1.getInt(</code><code >1</code><code >); </code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >String phone = c1.getString(</code><code >2</code><code >); </code></p>
<p><code >&nbsp;</code>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >println(</code><code >"Record #"</code> <code >+ i + </code><code >" : "</code> <code >+ name + </code><code >", "</code> <code >+ age + </code><code >", "</code> <code >+ phone); </code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >} </code></p>
<p><code >&nbsp;</code>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >c1.close(); </code></p>
<p><code >&nbsp;</code>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code >} </code></p>
&nbsp;</p>
<p></p>
<p>&nbsp;</p>
<p>﻿5개 줄만 해석 하겠습니다</p>
<p>원래 많이 있었는데, 어디로 빠져나갔는지는 비밀</p>
<p>&nbsp;</p>
<p>일단 이구문이 하는 일은?</p>
<p>query() 메소드를 호출하는 기능을 합니다</p>
<p>&nbsp;</p>
<p>전 복잡한 걸 너무너무 싫어하므로 간단히 하겠습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>Cursor c1 = db.query(TABLE_NAME, columns, </p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >whereStr, whereParams, </code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >null</code><code >, </code><code >null</code><code >, </code><code >null</code><code >); </code></p>
<p></p>
<p></p>
<p>이 부분은 query() 메소드를 해석하는 부분입니다. query()이 적혀있는데, 그 부분이고</p>
<p>그 안에 뭔가 적혀있는 것은 입력을 주는 겁니다(C언어와 비슷)</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
int <code >recordCount = c1.getCount();&nbsp; </code><p>﻿여기는 커서의 getCount() 메소드를 이용해 레코드 개수를 확인하는 부분입니다</p>
<p>getCount()는 외워두시면 됩니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>c1.moveToNext(); </p>
<p>c1을 다음 레코드로 이동시키는 부분입니다. </p>
<p>물론 이게 없으면 큰일이 나겠지요</p>
<p>아, 그리고 이 부분이 없으면 계속 덮어쓰다가</p>
<p>하나의 레코드에 마지막값만 넣어놓고 끝납니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>String name = c1.getString(<code >0</code><code >); </code></p>
<p>name에 c1의 첫번째 문자열을 확인하는 부분입니다.</p>
<p>0이 첫번째 다시 말해서 a[0]같은 겁니다.</p>
<p>그 밑도 두번째 정수값, 세번째는 문자열을 불러드립니다.</p>
<p>&nbsp;</p>
<p>println(<code >"Record #"</code> <code >+ i + </code><code >" : "</code> <code >+ name + </code><code >", "</code> <code >+ age + </code><code >", "</code> <code >+ phone); </code></p>
<p>도 중요한데, 쉽습니다. 레코드를 입력했다고 출력을 해주는 겁니다.</p>
<p>출력값은 Run해 보시면 상태 부분에서 잘 나오므로 참고하시면 되겠습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;<code >c1.close(); </code></p>
<p>이 부분은 모든 레코드 출력이 끝나면 커서를 닫는 내용입니다</p>
<p>닫지 않으면 어떤 일이 생길지 몰라요(별 일이 없을수도 있습니다.)</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>이걸로 분석이 끝났습니다</p>
<p>이건 고급 과정이므로 이해가 되지 않는게 당연합니다</p>
<p>다시 한번 말하지만 JAVA를 하시고 여기 들어오시는게 쉽습니다.</p>
<p>&nbsp;</p>
<p>거기에 SQL 구문도 잘 이해해야만 하므로</p>
<p>끝내고 싶었지만....</p>
<p>&nbsp;</p>
<p>직접 예제를 만들어 보고 끝내겠습니다.(여기서 끝내면 절대 못 만듭니다.)</p>
<p>그 뒤에는 연습문제를 풀어보도록 하겠습니다(3개로 예상중입니다)</p>
﻿<p></p>
</p>
</p>

