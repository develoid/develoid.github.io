---
layout: post
title: '[커뮤니티] 아마도 쉬운 안드로이드 어플만들기 6-2 알림 메세지'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/309135' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>
<p>저작자는 Snails(tjdtnsu)입니다.</p>
<p>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</p>
<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>
<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페, App Development 카페, 프그머 카페</u></p>
<p><u>업로드 시간 : 매주 일요일 오후 11시</u><p></p>
<p>&nbsp;난이도 : ★★★★★&nbsp;</p>
<p>﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿﻿﻿</p>
<p>&nbsp;</p>
<p></p>
<p>﻿음 별 말 없습니다.&nbsp;</p>
<p>오늘은 대화상자의 활용 중&nbsp;</p>
<p>제일 간단한 알림 메세지입니다.&nbsp;</p>
<p>﻿&nbsp;</p>
<p>오늘은 작업을 수행하고 있을 때&nbsp;</p>
<p>갑자기 에러가 떠서 종료하라는&nbsp;</p>
<p>알림 메세지가 뜨게 해보겠습니다.&nbsp;</p>
<p>﻿&nbsp;</p>
<p>﻿&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20130915_33%2Ftjdtnsu_1379243125294QOHV7_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p>
<p>﻿&nbsp;</p>
<p>﻿&nbsp;</p>
<p>일단 이렇게 해놓고 코드를 짭니다.&nbsp;</p>
<p>﻿&nbsp;</p>
<p>&nbsp;</p>
<p>﻿&nbsp;public void dia(View v){&nbsp;&nbsp;&nbsp; &nbsp;try{&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Thread.sleep(5000);&nbsp;&nbsp;&nbsp; &nbsp;} catch(Exception e){;}&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;AlertDialog.Builder gg=new AlertDialog.Builder(this);&nbsp;&nbsp;&nbsp; &nbsp;gg.setTitle("Error");&nbsp;&nbsp;&nbsp; &nbsp;gg.setMessage("이런 이상하고 참혹한 이유로 에러가 걸렸으니 강제종료합니다");&nbsp;&nbsp;&nbsp; &nbsp;gg.setIcon(R.drawable.ic_launcher);&nbsp;&nbsp;gg.setPositiveButton("확인",new DialogInterface.OnClickListener() {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@Override&nbsp;&nbsp;&nbsp;public void onClick(DialogInterface dialog, int which) {&nbsp;&nbsp;&nbsp;&nbsp;finish();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;});&nbsp;&nbsp;&nbsp; &nbsp;gg.show();&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;}&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;</p>
<p>&nbsp;</p>
<p>﻿동영상에 해답이 나와 있습니다.</p>
<p>﻿﻿﻿<iframe frame scrolling="no" name="mplayer" title="플레이어"  height="405" src="https://serviceapi.nmv.naver.com/view/ugcPlayer.nhn?vid=9E7472B709D67794CDDF889EA95AB1235330&amp;inKey=V125fb41c099df01dca8a6e9361d03a9427158223a329dc9a222b47bcba32618b30726e9361d03a942715&amp;wmode=opaque&amp;hasLink=0&amp;autoPlay=false&amp;beginTime=0" allowfullscreen="allowfullscreen"></iframe></p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿지난번 강좌를 이용한 겁니다.</p>
<p>﻿﻿﻿오늘은 그냥 복습 겸 해보았습니다.</p>
<p>﻿﻿﻿</p>
<p>﻿﻿﻿다음은 명령 잇기와 그에 따른 계산을 해보겠습니다.</p>
<p></p>
