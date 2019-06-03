---
layout: post
title: '"아마도 쉬운 안드로이드 어플만들기" [34] Google Play Store에 앱 올리기'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/340414' ; </script>


















						<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"><div><div><div><div><p><i>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</i></p><p><i>저작자는 Snails(tjdtnsu)입니다.</i></p><p><span><strong><span>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</span></strong></span></p><p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p><p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페</u></p><div><span><u><strong>업로드 시간 : 매주 일요일 오후 11시</strong></u><div></div><p>&nbsp;<strong><span>난이도 : ★</span><span>★☆</span></strong><span>﻿<span>﻿</span></span></p><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><div><span><span>﻿</span></span></div><span><div></div><div>&nbsp;</div><p><span><span><span>﻿앱을&nbsp;컴파일&nbsp;했으면 어디론가 올려서 다운받도록 해야겠죠</span></span></span>&nbsp;</p><p><span><span><span>마켓으로는 플레이 스토어, 티스토어, 올레 마켓 등등이 있습니다.﻿</span></span></span>&nbsp;</p><p><span><span><span>﻿</span></span></span>&nbsp;</p><p><span><span><span>오늘은 누구나 알고 아주 대중적인<b>플레이 스토어에 직접 올려보도록 하겠습니다.</span></span></span>&nbsp;</p><p><span><span><span>﻿</span></span></span>&nbsp;</p><p><span><span><span>﻿</span></span></span>&nbsp;</p><p><span><span><span>준비물 : ﻿</span></span></span>&nbsp;컴파일된 어플, 25달러(최초라면)</p><p>&nbsp;</p><p>&nbsp;</p><p>1. <a href="https://play.google.com/apps/publish/?browserbypass=1&amp;dev_acc=17611502415246374223#AppListPlace">https://play.google.com/apps/publish/</a>&nbsp;에 접속해서 개발자 등록을 합니다.</p><p>&nbsp;&nbsp;&nbsp;(개발자 등록 과정은 생략한다&lt;&lt;퍽)</p><p>&nbsp;</p><p>&nbsp;</p><p>2. 그러면 이런 화면이 나올 텐데 '+새 애플리케이션 추가'를 누릅니다.</p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131124_194%2Ftjdtnsu_1385298797181dGozF_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></p><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>3. 제목을 입력하고 apk 업로드를 누릅니다.</div><div><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131124_153%2Ftjdtnsu_1385298879690FilKN_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></div><div>&nbsp;</div><div>&nbsp;</div><div>4. 딴것 필요없이 프로덕션 어플리케이션을 올립니다.</div><div>&nbsp;&nbsp;&nbsp; '프로덕션으로 첫번째 apk를 업로드'를 누른 뒤 위치를 지정합니다.</div><div>&nbsp;</div><div>&nbsp;</div><div><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131124_269%2Ftjdtnsu_1385299262890qOmtC_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>5. 위치를 지정하면 업로드 후 이런게 나옵니다. 스토어 목록에 들어가 빈칸을 채웁시다. 그리고 저장은 필수</div><div><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131124_279%2Ftjdtnsu_1385299361141rMHDu_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"></div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>6. 왼쪽 세가지 영역에 초록색 체크 표시가 되면 앱을 출시합니다.</div><div><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2F20131124_147%2Ftjdtnsu_1385299731001DIKHd_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%22&amp;type=cafe_wa740"><b></div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>누르셨다면 축하드립니다. 앱을 출시하였습니다.</div><div>몇 시간 후 마켓에 패키지명을 검색하면 나올 겁니다.</div><div>&nbsp;</div></span><p></p><p></p></span></div><p></p><p></p></div></div></div></div>
