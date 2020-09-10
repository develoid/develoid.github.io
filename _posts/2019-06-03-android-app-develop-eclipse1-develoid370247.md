---
layout: post
title: '[커뮤니티] #26 젤리빈 4.1에서 추가된 다양한 Notification 띄우기'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/370247' ; </script>

<p><center>#26 젤리빈 4.1에서 추가된 다양한 Notification 띄우기</center><center>이 강좌는 무조건 원본 티스토리글에서 보시기를 적극 권장합니다</center><center><a href="http://whdghks913.tistory.com/457">http://whdghks913.tistory.com/457</a></center></p>
<p>안녕하세요</p>
<p>이번 강좌는 매우 깁니다만 매우 재밌는 내용이므로 꼭 정독해 주세요</p>
<p>그리고 PC버전과 또는 원본 티스토리 글에서 봐주시길 부탁드립니다</p>
<p>절대 모바일로 보지 말아주세요 왜냐면 가독성이 매우 떨어집니다</p>
<p>26. Notification 띄우기</p>
<p>26-1 구글 2012 IO를 아시나요?</p>
<p>2012 구글 IO 기억히시나요?</p>
<p>젤리빈에 대해 발표되면서 향상된 Nofification에 대한 언급이 있었습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile10.uf.tistory.com%2Fimage%2F234BC24452E85BFA2EE3C8%22&amp;type=cafe_wa740"></p>
<p>오늘 배울 내용은 이 구글 IO와 관련이 매우 깊습니다</p>
<p>추가된 API도 사용할것이기 때문입니다</p>
<p>그럼 지금부터 배워보도록 하겠습니다</p>
<p>26-2 Notification에 관한 설명</p>
<p>이 강좌를 어떻게 시작해야 할지 몇일동안 고민하다가 먼저 설명부터 시작하자고 생각했습니다</p>
<p>Notification의 아이콘은 잘 아시다 싶이 상단바 부분, Notification Area라는 영역에 표시됩니다</p>
<p>그리고 상세한 내용은 상단바를 쓱 쓸어내리면 나타나는거 다들 아시죠?</p>
<p>젤리빈 전에 쓰이던 알림 띄우기 방법과, 새로 추가된 API들을 다뤄보겠습니다</p>
<p>(이하 Notification을 알림으로 순화함)</p>
<p>기본적인 알림의 형식은 아래와 같아요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F244E793E52E86709356884%22&amp;type=cafe_wa740"></p>
<p>젤리빈(4.1)이상부터는 이 알림을 늘리고 줄일수가 있어요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F25699B3E52E86709012964%22&amp;type=cafe_wa740"></p>
<p>이렇게 더 많은 정보를체울수 있습니다~</p>
<p>스크린샷같은것은 그걸 알림에서 미리보기도 가능하고 바로 삭제 또는 공유가 가능하죠</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F26626B3E52E8670A04078B%22&amp;type=cafe_wa740"></p>
<p>또한 Action을 지정하면 알림에서 바로 작업을 할수 있습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F2264C73E52E8670A0399E7%22&amp;type=cafe_wa740"></p>
<p>더 많은 유형이 있지만 생략하고 빨리 코드를 배워봅시다</p>
<p>26-3 "구"버전 알림 띄우기</p>
<p>먼저 젤리빈에서 추가된 다양한 알림을 띄우면 머리가 터질수 있기에(?) 처음에는 기본적인 구 버전의 알림 띄우는 모습을 확인해 보겠습니다</p>
<p></p>
<p><table   ><tbody><tr><td  ><p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p>
<p>7</p>
<p>8</p>
</td><td ><p><code >NotificationManager nm = (NotificationManager)getSystemService(Context.NOTIFICATION_SERVICE);</code></p>
<p><code >Notification notification =&nbsp;</code><code  >new</code>&nbsp;<code >Notification(R.drawable.ic_launcher,&nbsp;</code><code  >"Nomal Notification"</code><code >, System.currentTimeMillis());</code></p>
<p><code >notification.flags = Notification.FLAG_AUTO_CANCEL;</code></p>
<p><code >notification.defaults = Notification.DEFAULT_SOUND | Notification.DEFAULT_VIBRATE ;</code></p>
<p><code >notification.number =&nbsp;</code><code  >13</code><code >;</code></p>
<p><code >PendingIntent pendingIntent = PendingIntent.getActivity(</code><code  >this</code><code >,&nbsp;</code><code  >0</code><code >,&nbsp;</code><code  >new</code>&nbsp;<code >Intent(</code><code  >this</code><code >, MainActivity.</code><code  >class</code><code >), PendingIntent.FLAG_UPDATE_CURRENT);</code></p>
<p><code >notification.setLatestEventInfo(</code><code  >this</code><code >,&nbsp;</code><code  >"Nomal Title"</code><code >,&nbsp;</code><code  >"Nomal Summary"</code><code >, pendingIntent);</code></p>
<p><code >nm.notify(</code><code  >1234</code><code >, notification);</code></p>
</td></tr></tbody></table></p>
<p></p>
<p>1번줄에 NotificationManager를 호출하고 있습니다</p>
<p>알림도 진동과 마찬가지로 시스탬 서비스이기 때문에 첫번째줄 처럼 호출해 주면 됩니다</p>
<p>라인 2번을 자세히 보시면</p>
<p>Notification notification = new Notification(icon, tickerText, when);</p>
<p>이런 형식으로 되어 있습니다</p>
<ul ><li>Icon :&nbsp;알림의 아이콘 입니다</li><li>tickerText : 잠시 표시될 글자입니다 예를 들자면 "새로운 메시지가 도착했습니다"</li><li>when :&nbsp;알림이 표시될 시간입니다 밀리 세컨드초 단위로,&nbsp;System.currentTimeMillis()를 입력하면 지금 당장이 됩니다</li></ul><p>그다음 flags를 봅시다</p>
<p>플래그는 아래가 있는대요 보통 일반 알림인지, 진행중 알림인지 선택할때 사용합니다</p>
<ul ><li>FLAG_AUTO_CANCEL : 알림을 터치하면 사라짐</li><li>FLAG_ONGOING_EVENT : 진행중 알림</li></ul><p>4번째줄의&nbsp;notification.defaults는 있어도 되고 없어도 됩니다</p>
<p>전 소리와 진동을 사용할것이기 때문에 저런 속성을 주었고요 진동만, 또는 소리만 하는 방법은 아래와 같아요</p>
<ul ><li>notification.defaults = Notification.DEFAULT_SOUND ;</li><li>notification.defaults = Notification.DEFAULT_VIBRATE ;</li></ul><p>그 아래의 number는 미확인 알림의 개수라고 생각하시면 됩니다</p>
<p>999이상은 999+라고 표시되는것 같습니다 참고하세요</p>
<p>6번째 줄의&nbsp;PendingIntent는 자세하게 설명은 힘드나 알림을 터치하면 실행할 액티비티(또는 서비스)를 지정해 주고 있어요</p>
<p>마지막의&nbsp;PendingIntent.FLAG_UPDATE_CURRENT에 대해 조금 보충해 드리자면</p>
<ul ><li></li><li>FLAG_CANCEL_CURRENT : 이전에 생성한 PendingIntent 는 취소하고 새롭게 만듭니다</li><li>FLAG_NO_CREATE : 생성된 PendingIntent를 반환하여 재사용 합니다</li><li>FLAG_ONE_SHOT : 이 flag 로 생성한 PendingIntent는 일회용 입니다</li><li>FLAG_UPDATE_CURRENT : 이미 생성된 PendingIntent가 존재하면 내용을 변경합니다</li></ul><p>그&nbsp;아래 7번째는 아래와 같습니다</p>
<p>notification.setLatestEventInfo(context, contentTitle, contentText, contentIntent);</p>
<ul ><li>context : context객체, this (Context에 대해 이해하려면 골치아파요)</li><li>contentTitle : 상단바 알림 제목</li><li>contentText : 상단바 알림 내용</li><li>contentIntent : 실행할 작업이 담긴&nbsp;PendingIntent</li></ul><p>마지막으로&nbsp;notify에 대해 설명드리겠습니다</p>
<p>nm.notify(id, notification)</p>
<ul ><li>id : 알림을 구분할 상수, 알림을 지울때 이 id가 필요합니다</li><li>notification : 위에서 만든&nbsp;notification 객체</li></ul><p>자, API설명이 모두 끝났습니다</p>
<p>스크린샷은 아래와 같아요</p>
<p>처음에 알림이 잠깐 표시될때 Text와 상단바에서 알림을 확인할때 Text가 다른것을 확인할수 있습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F214B993D52E861FF247C23%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile30.uf.tistory.com%2Fimage%2F244BC23D52E861FF242616%22&amp;type=cafe_wa740"></p>
<p>[미르의 팁]</p>
<p>Q. 이클립스에서 코드에 노란 줄이 그어 있고&nbsp;Notification is&nbsp;deprecated라고 뜹니다</p>
<p>A. 이클립스는 더이상 지원하지 않는(사용하지 않는) API를 저렇게 표시합니다</p>
<p>만 안드로이드 API에서 완전히 사라지지 않는 이상은 사용이 가능합니다</p>
<p>26-4 Builder를 이용한 알림방식</p>
<p>이번에는 Builder라는것을 이용해 알림을 띄워볼께요</p>
<p></p>
<p><p><table   ><tbody><tr><td  ><p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p>
<p>7</p>
<p>8</p>
<p>9</p>
<p>10</p>
<p>11</p>
<p>12</p>
<p>13</p>
<p>14</p>
<p>15</p>
<p>16</p>
<p>17</p>
</td><td ><p><code >NotificationManager nm = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);</code></p>
<p><code >PendingIntent pendingIntent = PendingIntent.getActivity(</code><code  >this</code><code >,&nbsp;</code><code  >0</code><code >,&nbsp;</code><code  >new</code>&nbsp;<code >Intent(</code><code  >this</code><code >, MainActivity.</code><code  >class</code><code >), PendingIntent.FLAG_UPDATE_CURRENT);</code></p>
<p>&nbsp;</p>
<p><code >Notification.Builder mBuilder =&nbsp;</code><code  >new</code>&nbsp;<code >Notification.Builder(</code><code  >this</code><code >);</code></p>
<p><code >mBuilder.setSmallIcon(R.drawable.ic_launcher);</code></p>
<p><code >mBuilder.setTicker(</code><code  >"Notification.Builder"</code><code >);</code></p>
<p><code >mBuilder.setWhen(System.currentTimeMillis());</code></p>
<p><code >mBuilder.setNumber(</code><code  >10</code><code >);</code></p>
<p><code >mBuilder.setContentTitle(</code><code  >"Notification.Builder Title"</code><code >);</code></p>
<p><code >mBuilder.setContentText(</code><code  >"Notification.Builder Massage"</code><code >);</code></p>
<p><code >mBuilder.setDefaults(Notification.DEFAULT_SOUND | Notification.DEFAULT_VIBRATE);</code></p>
<p><code >mBuilder.setContentIntent(pendingIntent);</code></p>
<p><code >mBuilder.setAutoCancel(</code><code  >true</code><code >);</code></p>
<p>&nbsp;</p>
<p><code >mBuilder.setPriority(NotificationCompat.PRIORITY_MAX);</code></p>
<p>&nbsp;</p>
<p><code >nm.notify(</code><code  >111</code><code >, mBuilder.build());</code></p>
</td></tr></tbody></table></p>
<p></p>
<p>첫번째 줄이랑 두번째 줄은 구버전이랑 다른건 없습니다</p>
<p>4번째 줄부터 새로운 API가 시작인대요</p>
<p>Notification.Builder를 이용해 보겠습니다</p>
<p>mBuilder의 옵션을 하나씩 살펴볼께요</p>
<ul ><li>setSmallIcon : 아이콘입니다 구 소스의 icon이랑 같습니다</li><li>setTicker&nbsp;: 알림이 뜰때 잠깐 표시되는 Text이며, 구 소스의&nbsp;tickerText이랑 같습니다</li><li>setWhen&nbsp;: 알림이 표시되는 시간이며, 구 소스의&nbsp;when이랑 같습니다</li><li>setNumber&nbsp;: 미확인 알림의 개수이며, 구 소스의&nbsp;notification.number랑 같습니다</li><li>setContentTitle&nbsp;: 상단바 알림 제목이며, 구 소스의&nbsp;contentTitle랑 같습니다</li><li>setContentText&nbsp;: 상단바 알림 내용이며, 구 소스의&nbsp;contentText랑 같습니다</li><li>setDefaults&nbsp;: 기본 설정이며, 구 소스의&nbsp;notification.defaults랑 같습니다</li><li>setContentIntent&nbsp;: 실행할 작업이 담긴&nbsp;PendingIntent이며, 구 소스의&nbsp;contentIntent랑 같습닏</li><li>setAutoCancel&nbsp;: 터치하면 자동으로 지워지도록 설정하는 것이며, 구 소스의&nbsp;FLAG_AUTO_CANCEL랑 같습니다</li><li>setPriority&nbsp;: 우선순위입니다, 구 소스의&nbsp;notification.priority랑 같습니다만 구글 개발자 API를 보면 API 16이상부터 사용이 가능하다고 합니다</li><li>setOngoing : 진행중알림 이며, 구 소스의&nbsp;FLAG_ONGOING_EVENT랑 같습니다</li><li>addAction : 알림에서 바로 어떤 활동을 할지 선택하는 것이며, 스샷찍은다음 삭제/공유 같은것이 이에 해당합니다</li></ul><p>Builder에서 사용되는 대표적인, 또는 대부분의 옵션을 살펴봤어요</p>
<p>위에서 살펴본거랑 약간 다를뿐 나머지는 모두 같다는것을 살펴볼수 있습니다</p>
<p>스크린샷은 아래와 같습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F2160923D52E861FF1E7345%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile9.uf.tistory.com%2Fimage%2F2450373D52E861FF240BAD%22&amp;type=cafe_wa740"></p>
<p>스크린샷이랑 코드설명이랑 함께 보시면 더 확실히 알수 있을것입니다</p>
<p>26-5&nbsp;CompatBuilder를 이용한 알림방식</p>
<p>Builder가 4.1부터만 되기 때문에 그 아래 버전은 사용이 불가능합니다</p>
<p>그래서 호환성을 위해&nbsp;NotificationCompat.Builder라는것이 존재한다고 합니다</p>
<p>만... Builder랑 차이가 없습니다</p>
<p>그래서 코드만 드리고 지나가도록 하겠습니다</p>
<p></p>
<p><table   ><tbody><tr><td  ><p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p>
<p>7</p>
<p>8</p>
<p>9</p>
<p>10</p>
<p>11</p>
<p>12</p>
<p>13</p>
<p>14</p>
<p>15</p>
</td><td ><p><code >NotificationManager nm = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);</code></p>
<p><code >PendingIntent pendingIntent = PendingIntent.getActivity(</code><code  >this</code><code >,&nbsp;</code><code  >0</code><code >,&nbsp;</code><code  >new</code>&nbsp;<code >Intent(</code><code  >this</code><code >, MainActivity.</code><code  >class</code><code >), PendingIntent.FLAG_UPDATE_CURRENT);</code></p>
<p>&nbsp;</p>
<p><code >NotificationCompat.Builder mCompatBuilder =&nbsp;</code><code  >new</code>&nbsp;<code >NotificationCompat.Builder(</code><code  >this</code><code >);</code></p>
<p><code >mCompatBuilder.setSmallIcon(R.drawable.ic_launcher);</code></p>
<p><code >mCompatBuilder.setTicker(</code><code  >"NotificationCompat.Builder"</code><code >);</code></p>
<p><code >mCompatBuilder.setWhen(System.currentTimeMillis());</code></p>
<p><code >mCompatBuilder.setNumber(</code><code  >10</code><code >);</code></p>
<p><code >mCompatBuilder.setContentTitle(</code><code  >"NotificationCompat.Builder Title"</code><code >);</code></p>
<p><code >mCompatBuilder.setContentText(</code><code  >"NotificationCompat.Builder Massage"</code><code >);</code></p>
<p><code >mCompatBuilder.setDefaults(Notification.DEFAULT_SOUND | Notification.DEFAULT_VIBRATE);</code></p>
<p><code >mCompatBuilder.setContentIntent(pendingIntent);</code></p>
<p><code >mCompatBuilder.setAutoCancel(</code><code  >true</code><code >);</code></p>
<p>&nbsp;</p>
<p><code >nm.notify(</code><code  >222</code><code >, mCompatBuilder.build());</code></p>
</td></tr></tbody></table></p>
<p></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F21274A3D52E862002FE871%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F2746C33D52E86200253ADA%22&amp;type=cafe_wa740"></p>
<p>26-6&nbsp;bigPicture 알림방식</p>
<p>와 무한스크롤 100%네요...</p>
<p>중요한 부분만 요약 정리하겠습니다</p>
<p></p>
<p><table   ><tbody><tr><td  ><p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p>
<p>7</p>
<p>8</p>
</td><td ><p><code >Bitmap bigPicture = BitmapFactory.decodeResource(getResources(), R.drawable.jellybean);</code></p>
<p>&nbsp;</p>
<p><code >Notification.BigPictureStyle bigStyle =&nbsp;</code><code  >new</code>&nbsp;<code >BigPictureStyle(mBuilder);</code></p>
<p><code >bigStyle.setBigContentTitle(</code><code  >"bigpicture Expanded Title"</code><code >);</code></p>
<p><code >bigStyle.setSummaryText(</code><code  >"bigpicture Expanded Massage"</code><code >);</code></p>
<p><code >bigStyle.bigPicture(bigPicture);</code></p>
<p>&nbsp;</p>
<p><code >mBuilder.setStyle(bigStyle);</code></p>
</td></tr></tbody></table></p>
<p>큰 사진을 표시할때 사용할수 있습니다</p>
<p>기본적인 뼈대는 Builder와 완벽하게 같으며 그 아래에 위 코드만 추가해 주시면 됩니다</p>
<p>일단 Builder와 속성이 모두 같기 때문에&nbsp;Notification.BigPictureStyle(3번줄)의 속성만 언급하겠습니다</p>
<ul ><li>setBigContentTitle : 알림을&nbsp;늘린후, 제목입니다</li><li>setSummaryText : 알림을 늘린후, 내용입니다</li><li>bigPicture : 표시할 사진을 입력해 주면 됩니다</li></ul></p>
<p></p>
<p>그다음 8번줄을 보시면&nbsp;setStyle이라고 나와 있습니다</p>
<p>... 아시겠죠 말안해도?ㅋㅋ</p>
<p>bigPicture은 스크린샷 찍은후 사용되는 방법입니다</p>
<p>아래는 스크린샷 입니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile10.uf.tistory.com%2Fimage%2F274A1E3D52E862002875E9%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F252EBE3D52E862002FFEC8%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile9.uf.tistory.com%2Fimage%2F233BB03D52E862012EB298%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F2402714252E8620323B6B9%22&amp;type=cafe_wa740"></p>
<p>맨 마지막 사진은 스샷 다 찍고나니 addAction을 찍은게 없어서 찍어봤어요</p>
<p>26-7&nbsp;bigTextStyle 알림방식</p>
<p>이건 문자왔을때 자주 사용되더라고요</p>
<p>빨리 코드 보겠습니다</p>
<p></p>
<p><p><table   ><tbody><tr><td  ><p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p>
<p>7</p>
</td><td ><p><code >Notification.BigTextStyle style =&nbsp;</code><code  >new</code>&nbsp;<code >Notification.BigTextStyle(mBuilder);</code></p>
<p><code >style.setSummaryText(</code><code  >"and More +"</code><code >);</code></p>
<p><code >style.setBigContentTitle(</code><code  >"BigText Expanded Title"</code><code >);</code></p>
<p><code >style.bigText(</code><code  >"Mir's IT Blog adress is \"whdghks913.tistory.com\","</code>&nbsp;<code >+</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >"Welcome to the Mir's Blog!! Nice to Meet you, this is Example JellyBean Notification"</code><code >);</code></p>
<p>&nbsp;</p>
<p><code >mBuilder.setStyle(style);</code></p>
</td></tr></tbody></table></p>
<p></p>
<p>bigPicture과 비슷하며, 이 코드는 아래 스크린샷과 비교하며 보는것이 더 이해가 잘되더라고요</p>
<p>그래서 스크린샷을 보시면서 확인해 주시면 감사드리겠습니다 ㅎ</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F236FDB3D52E8620119CA26%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F253CF83D52E862012AAF7E%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile22.uf.tistory.com%2Fimage%2F273E1F3D52E862012ADE16%22&amp;type=cafe_wa740"></p>
<p>26-8&nbsp;InboxStyle 알림 방식</p>
<p>이건 GMail에서 사용된것 같습니다</p>
<p>Text를 한줄씩 표시하는 알림 방식입니다</p>
<p></p>
<p><table   ><tbody><tr><td  ><p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p>
<p>7</p>
<p>8</p>
</td><td ><p><code >Notification.InboxStyle style =&nbsp;</code><code  >new</code>&nbsp;<code >InboxStyle(mBuilder);</code></p>
<p><code >style.addLine(</code><code  >"Google Nexus 5 is $0!!"</code><code >);</code></p>
<p><code >style.addLine(</code><code  >"Example Nofitication Inbox"</code><code >);</code></p>
<p><code >style.addLine(</code><code  >"Today is 2014-01-29"</code><code >);</code></p>
<p><code >style.addLine(</code><code  >"See you Next Time!"</code><code >);</code></p>
<p><code >style.setSummaryText(</code><code  >"+ 3 More"</code><code >);</code></p>
<p>&nbsp;</p>
<p><code >mBuilder.setStyle(style);</code></p>
</td></tr></tbody></table></p>
<p></p>
<p>이건 addLine말고는 설명할게 딱히 없습니다</p>
<p>그리고 addLine이라는거 딱 보면 뭔뜻인지 아실거 같아서 이것도 지나가겠습니다~</p>
<p>스크린샷과 비교하며 보시는게 정말 효과적입니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F253C283D52E8620228F9BC%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile24.uf.tistory.com%2Fimage%2F252A2D3D52E862022D1FF7%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile24.uf.tistory.com%2Fimage%2F24332D3D52E862022B8E00%22&amp;type=cafe_wa740"></p>
<p>26-9&nbsp;ProgressBar in&nbsp;ICS up</p>
<p>아..ㅡ 이 강좌 괜히 쓴거 같내요 지금 3시간이 넘어가는거 같은대..</p>
<p>다운로드 같은건 알림바에 프로그래스바가 있죠?</p>
<p>그걸 구현해 봅시다</p>
<p>참고로 이 ProgressBar API가 ICS에 추가되었기 때문에 GB는 안됩니다</p>
<p>GB에서 구현하는건 아래 26-10에서 봅시다</p>
<p>이건 쓰레드를 이용해야 ProgressBar가 움직입니다</p>
<p></p>
<p><table   ><tbody><tr><td  ><p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p>
<p>7</p>
<p>8</p>
<p>9</p>
<p>10</p>
<p>11</p>
<p>12</p>
<p>13</p>
<p>14</p>
<p>15</p>
<p>16</p>
<p>17</p>
<p>18</p>
<p>19</p>
<p>20</p>
<p>21</p>
<p>22</p>
<p>23</p>
<p>24</p>
</td><td ><p><code >mBuilder.setProgress(</code><code  >0</code><code >,&nbsp;</code><code  >0</code><code >,&nbsp;</code><code  >true</code><code >);</code></p>
<p><code >mBuilder.setOngoing(</code><code  >true</code><code >);</code></p>
<p>&nbsp;</p>
<p><code >nm.notify(</code><code  >666</code><code >, mBuilder.build());</code></p>
<p><code  >new</code>&nbsp;<code >Thread(</code><code  >new</code>&nbsp;<code >Runnable() {</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >@Override</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >public</code>&nbsp;<code  >void</code>&nbsp;<code >run() {</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >for</code><code >(</code><code  >int</code>&nbsp;<code >i=</code><code  >1</code>&nbsp;<code >;i&lt;=</code><code  >100</code>&nbsp;<code >;i++){</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >try</code>&nbsp;<code >{</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >Thread.sleep(</code><code  >100</code><code >);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}&nbsp;</code><code  >catch</code>&nbsp;<code >(InterruptedException e) {</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >e.printStackTrace();</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >mBuilder.setProgress(</code><code  >100</code><code >, i,&nbsp;</code><code  >false</code><code >);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >mBuilder.setContentText(</code><code  >"ProgressBar : "</code>&nbsp;<code >+ i);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >nm.notify(</code><code  >666</code><code >, mBuilder.build());</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >if</code><code >(i&gt;=</code><code  >100</code><code >){</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >nm.cancel(</code><code  >666</code><code >);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}</code></p>
<p><code >}).start();</code></p>
</td></tr></tbody></table></p>
<p></p>
<p>첫번째줄의&nbsp;setProgress는 ProgressBar에서 많이 본것 맞죠?ㅋㅋ</p>
<p>mBuilder.setProgress(max, progress, indeterminate)</p>
<ul ><li>max : ProgressBar의 최대 값입니다, android:max와 같습니다</li><li>progress : 현재 프로그래스 값입니다</li><li>indeterminate : 이건 그 마켓에서 다운받기 전에 - -- - -- 이거 움직이죠? 그거를 설정해주는겁니다 true는 대기중, false는 progress값 적용</li></ul><p>쓰래드를 돌리기 전에 먼저 알림을 띄워야 합니다</p>
<p>8번째 line을 보시면 for문으로 int i값을 증가시키면서 setProgress를 해주고 있습니다</p>
<p>17번 보시면 바뀐 값을 다시 띄워주는 역할을 합니다</p>
<p>그 아래 if문은 i값이 100일경우 알림을 지우는 역할을 하고 있습니다</p>
<p>스크린샷은 아래와 같습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F2641F03D52E8620227141B%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile22.uf.tistory.com%2Fimage%2F2334B24252E86202113EFD%22&amp;type=cafe_wa740"></p>
<p>26-10&nbsp;ProgressBar in&nbsp;GB</p>
<p>와 주제가 10번까지 오다니....대박이네요</p>
<p>GB는 알림을 띄울때 ProgressBar에 대한 API가 없습니다</p>
<p>그래서 우리가 직접 xml을 만들어야 합니다</p>
<p>먼저 res/layout/progressbar.xml입니다</p>
<p></p>
<p><table   ><tbody><tr><td  ><p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p>
<p>7</p>
<p>8</p>
<p>9</p>
<p>10</p>
<p>11</p>
<p>12</p>
<p>13</p>
<p>14</p>
<p>15</p>
<p>16</p>
<p>17</p>
<p>18</p>
<p>19</p>
<p>20</p>
<p>21</p>
<p>22</p>
<p>23</p>
<p>24</p>
<p>25</p>
<p>26</p>
<p>27</p>
<p>28</p>
<p>29</p>
<p>30</p>
</td><td ><p><code >&lt;</code><code  >RelativeLayout</code>&nbsp;<code  >xmlns:android</code><code >=</code><code  >"<a href="http://schemas.android.com/apk/res/android">http://schemas.android.com/apk/res/android</a>"</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:layout_width</code><code >=</code><code  >"wrap_content"</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:layout_height</code><code >=</code><code  >"wrap_content"</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:id</code><code >=</code><code  >"@+id/noti_layout"</code><code >&gt;</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code >&lt;</code><code  >TextView</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:id</code><code >=</code><code  >"@+id/noti_title"</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:layout_width</code><code >=</code><code  >"wrap_content"</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:layout_height</code><code >=</code><code  >"wrap_content"</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:layout_alignParentTop</code><code >=</code><code  >"true"</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:layout_centerHorizontal</code><code >=</code><code  >"true"</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:text</code><code >=</code><code  >"title"</code>&nbsp;<code >/&gt;</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code >&lt;</code><code  >ProgressBar</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:id</code><code >=</code><code  >"@+id/noti_progress"</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >style</code><code >=</code><code  >"?android:attr/progressBarStyleHorizontal"</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:layout_width</code><code >=</code><code  >"match_parent"</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:layout_height</code><code >=</code><code  >"wrap_content"</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:layout_alignParentLeft</code><code >=</code><code  >"true"</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:layout_below</code><code >=</code><code  >"@+id/noti_title"</code>&nbsp;<code >/&gt;</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code >&lt;</code><code  >TextView</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:id</code><code >=</code><code  >"@+id/noti_text"</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:layout_width</code><code >=</code><code  >"wrap_content"</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:layout_height</code><code >=</code><code  >"wrap_content"</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:layout_below</code><code >=</code><code  >"@+id/noti_progress"</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:layout_centerHorizontal</code><code >=</code><code  >"true"</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >android:text</code><code >=</code><code  >"message"</code>&nbsp;<code >/&gt;</code></p>
<p>&nbsp;</p>
<p><code >&lt;/</code><code  >RelativeLayout</code><code >&gt;</code></p>
</td></tr></tbody></table></p>
<p></p>
<p>위에 있는 TextView는 title, 아래에 있는 TextView는 ProgressBar 진행표시를 하려고 합니다</p>
<p>그다음 java로 넘어와주세요</p>
<p>java코드는 아래와 같습니다</p>
<p></p>
<p><table   ><tbody><tr><td  ><p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p>
<p>7</p>
<p>8</p>
<p>9</p>
<p>10</p>
<p>11</p>
<p>12</p>
<p>13</p>
<p>14</p>
<p>15</p>
<p>16</p>
<p>17</p>
<p>18</p>
<p>19</p>
<p>20</p>
<p>21</p>
<p>22</p>
<p>23</p>
<p>24</p>
<p>25</p>
<p>26</p>
<p>27</p>
<p>28</p>
<p>29</p>
<p>30</p>
<p>31</p>
<p>32</p>
<p>33</p>
<p>34</p>
</td><td ><p><code  >final</code>&nbsp;<code >NotificationManager nm = (NotificationManager)getSystemService(Context.NOTIFICATION_SERVICE);</code></p>
<p><code  >final</code>&nbsp;<code >PendingIntent pendingIntent = PendingIntent.getActivity(</code><code  >this</code><code >,&nbsp;</code><code  >0</code><code >,&nbsp;</code><code  >new</code>&nbsp;<code >Intent(</code><code  >this</code><code >, MainActivity.</code><code  >class</code><code >),&nbsp;</code><code  >0</code><code >);</code></p>
<p>&nbsp;</p>
<p><code  >new</code>&nbsp;<code >Thread(</code><code  >new</code>&nbsp;<code >Runnable() {</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >@Override</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >public</code>&nbsp;<code  >void</code>&nbsp;<code >run() {</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >RemoteViews mRemoteView =&nbsp;</code><code  >new</code>&nbsp;<code >RemoteViews(getPackageName(), R.layout.progressbar);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >mRemoteView.setTextViewText(R.id.noti_title,&nbsp;</code><code  >"GB ProgressBar"</code><code >);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >mRemoteView.setProgressBar(R.id.noti_progress,&nbsp;</code><code  >100</code><code >,&nbsp;</code><code  >0</code><code >,&nbsp;</code><code  >false</code><code >);</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >Notification notification =&nbsp;</code><code  >new</code>&nbsp;<code >Notification(R.drawable.ic_launcher,&nbsp;</code><code  >"ProgressBar GB"</code><code >, System.currentTimeMillis());</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >notification.flags |= Notification.FLAG_ONGOING_EVENT;</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >notification.contentIntent = pendingIntent;</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >notification.contentView = mRemoteView;</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >notification.contentView.setProgressBar(R.id.noti_progress,&nbsp;</code><code  >0</code><code >,&nbsp;</code><code  >0</code><code >,&nbsp;</code><code  >true</code><code >);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >nm.notify(</code><code  >777</code><code >, notification);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >for</code><code >(</code><code  >int</code>&nbsp;<code >i=</code><code  >0</code>&nbsp;<code >;i&lt;=</code><code  >100</code>&nbsp;<code >;i++){</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >try</code>&nbsp;<code >{</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >Thread.sleep(</code><code  >100</code><code >);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}&nbsp;</code><code  >catch</code>&nbsp;<code >(InterruptedException e) {</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >e.printStackTrace();</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >notification.contentView.setProgressBar(R.id.noti_progress,&nbsp;</code><code  >100</code><code >, i,&nbsp;</code><code  >false</code><code >);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >notification.contentView.setTextViewText(R.id.noti_text,&nbsp;</code><code  >"Progress : "</code><code >+i);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >nm.notify(</code><code  >777</code><code >, notification);</code></p>
<p>&nbsp;</p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code  >if</code><code >(i&gt;=</code><code  >100</code><code >){</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >nm.cancel(</code><code  >777</code><code >);</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}</code></p>
<p><code >&nbsp;&nbsp;&nbsp;&nbsp;</code><code >}</code></p>
<p><code >}).start();</code></p>
</td></tr></tbody></table></p>
<p></p>
<p>7번의&nbsp;RemoteViews에 대한 자세한 지식은&nbsp;<a href="http://huewu.blog.me/110089286698">http://huewu.blog.me/110089286698</a>를 참조해 주세요</p>
<p>14번에서&nbsp;contentView =&nbsp;mRemoteView이렇게 되어 있는대요</p>
<p>이제부터 setProgress는&nbsp;contentView를 이용해 진행됩니다</p>
<p>contentView에 대해서는 커스텀 알림 만들기 강좌에 나올것 같습니다</p>
<p>커스텀 알림이란 지금 배우는 모든 형식을 안쓰고 도돌폰같이 직접 디자인 하는겁니다 ㅎㅎ</p>
<p>아무튼 리모트뷰와&nbsp;contentView를 이용해서 프로그래스바를 조절합니다</p>
<p>25~26을 봐주세요</p>
<p>GB에서는 이런 방식으로 프로그래스바를 돌려야 합니다</p>
<p>그래서 모양도 ICS보다 안이뻐요</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F2179444252E8620327473C%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F2713F64252E862031DD228%22&amp;type=cafe_wa740"></p>
<p>자~!! 이렇게 해서 Notification을 띄우는 방법을 모두 알아봤습니다</p>
<p>26번 강좌의 길이가 이정돈대 와 30번대는 한달에 한번? 이렇게 해야될까봐요</p>
<p>지금 4시간째 쓰고 있내요 ㅠㅠ</p>
<p>이렇게 해서 알림을 띄우는 대표적인 코드와 방법에 대해 알아봤는대요</p>
<p>스크롤 압박에서 이겨내신분들 모두 축하드립니다 ㅠㅠ</p>
<p>그리고... 오늘은 제발 꼭 덧글 달아주세요</p>
<p>강좌 하나 쓰는거 너무 힘듭니다 ㅠㅠ</p>
<p>그럼 설 잘보내세요~~</p>
<p></p>
<p><p>이 강좌의 예제소스는 27번 강좌가&nbsp;나오는 즉시 업로드 됩니다</p>
<p>카페에서는 원본글에서만 다운로드가 가능합니다</p>
<p>예제소스 다운로드 : 아직 27번 강좌가 업로드 되지 않았습니다</p>
<p></p>
<p></p>
<p></p>
<p><p>이글은 [] 에서 다시 보실수 있으며 원본 글의 저작권은 미르에게 있습니다</p>
</p>
<p></p>
<p>참조 :&nbsp;http://androidhuman.com/507</p>
<p>http://stunstun.tistory.com/101</p>
<p>http://darksilber.tistory.com/114</p>
<p>http://aroundck.tistory.com/2134</p>
<p>http://developer.android.com/design/patterns/notifications.html</p>
