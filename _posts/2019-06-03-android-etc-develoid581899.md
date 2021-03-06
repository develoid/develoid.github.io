---
layout: post
title: '[커뮤니티] 롤리팝 노답 메모리의 오해를 잡아보자'
author: 'arter97'
categories: Android-Etc
tags:
- Android
- Etc
-
-
---


<script> location.href='https://cafe.naver.com/develoid/581899' ; </script>

<p></p>
<table height="70"    bgcolor="#b7bbb5" ><tbody><tr bgcolor="#ffffff"><td ><p>&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcafeptthumb4.phinf.naver.net%2F20130921_95%2Fjun04144_1379769663254iJ73y_PNG%2Fdeveloid.png%3Ftype%3Dw740%22&amp;type=cafe_wa740"></p>
</td><td ><p>&nbsp;※ 질문 / 요청은 요청게시판에 작성해주세요 ※</p>
<p>한두줄글, 의미없는글, 단순인증글은 삭제처리됩니다. </p>
<p>자세한삭제기준은 공지사항참고.</p>
</td></tr></tbody></table><p></p>
<p>&nbsp;</p>
<p>작년 안드로이드 롤리팝의 출시 이후부터 국내는 물론 해외 언론, Reddit, XDA에서도 "메모리 누수"에 관한 얘기가 아주 꾸준히 나왔습니다.</p>
<p>5.1와서 나아졌다곤 하지만 "누수는 아직도 존재"한다고도 하구요.</p>
<p>저도 편의상 "메모리 누수"라고 불렀었습니다.</p>
<p>근데 이렇게 계속 부르니까 "누수 따위도 못 고치는 구글/제조사"라는 인식이 유저들 사이에서 뻗어나가더라구요.</p>
<p>왜 이게 누수가 아닌지, 왜 안드로이드가 특히 롤리팝부터 와서 이렇게 뚱뚱해졌는지 하나하나 알아가보겠습니다.</p>
<p></p>
<p>1. 메모리 누수란 무엇일까</p>
<p>아주 간단하게 요약하면, 메모리 누수란 메모리가 한 번 할당되고나서 용도가 끝났을 때 다시 사용 가능한 메모리의 형태로 반환되지 않는다는걸 의미합니다.</p>
<p>비유하자면 밥을 겁나게 먹었는데 며칠동안 뒤로 나오질 않아서 몸 안에서 계속 쌓이다가 결국 탈나는 셈이죠.</p>
<p>메모리 누수는 앱에도 존재하고, 앱을 구동시키는 운영체제에서도 존재하고, 운영체제를 구동시키는 커널에서도 존재하고, 심지어 모든 소프트웨어를 구동시키는 하드웨어에서도 발생합니다.</p>
<p>(하드웨어쪽은 대량생산 전에 대부분 수정됩니다)</p>
<p>히이익 그러면 메모리 누수랑 공존하는 셈이네요?</p>
<p>네 맞습니다. 근데 심각한 메모리 누수가 아니라면, 그렇게 크게 또 걱정할 필요도 없습니다.</p>
<p>업데이트가 꾸준한 소프트웨어를 쓰면 심각한 메모리 누수는 알아서 잡힙니다. (그니까 여러분 윈도우 업데이트 제발 켜고 사세요)</p>
<p>대부분의 메모리 누수는 크기 자체가 작습니다. C언어에서 흔하게 발생하는 구조체 메모리 누수도 무한루프 돌리는거 아니면 심각한 편 아니구요.</p>
<p>심각한 메모리 누수는 대부분 그래픽과 관련이 있습니다. 텍스트, 구조체와는 달리 그래픽 리소스들은 자원을 어마어마하게 먹으니까요.</p>
<p>웬만한 규모의 오픈소스 프로젝트(안드로이드, 리눅스 커널, 페이스북 라이브러리, 메모리 알로케이터 등)들 따라가보시면 메모리 누수 고치는게 아주 수시로 올라옵니다. 그럼에도 불구하고 이런 메모리 누수가 이전 릴리즈에 포팅되지 않는 경우(예: 안드로이드 5.1의 메모리 누수 픽스가 5.0으로 포팅되지 않음)가 다반삽니다. 한 마디로 심각하진 않단 말이죠.</p>
<p>여러분이 아셔야할건,</p>
<p>메모리를 그냥 많이 먹는거랑 메모리 누수가 발생하는거는 전혀 다르단 것입니다.</p>
<p>2. 그럼 안드로이드 네놈은 어디가 문제냐</p>
<p>안드로이드 롤리팝 5.0 출시 후 메모리 누수 논란으로 구글이 아주 크게 욕먹었습니다. 이 글 읽고계신 분들도 구글 분명히 욕하신적 있을겁니다.</p>
<p>5.0이 나온 후 4달 정도 뒤에 API 넘버가 올라간 5.1 메이저 업데이트가 나왔습니다.</p>
<p>구글이 진짜로 안드로이드 5.0에서 누수가 심각한걸 인지했다면 5.1에서 꽤나 많은 누수 수정 사항들이 있었어야합니다.</p>
<p>없다면 구글은 진짜 능력이 안되는거구요.</p>
<p>구글이 메모리 누수따위 고칠 능력이 안된다는게 왜 말이 안되는지부터 설명해보겠습니다.</p>
<p><a href="http://developer.android.com/intl/ko/tools/debugging/debugging-memory.html">http://developer.android.com/intl/ko/tools/debugging/debugging-memory.html</a></p>
<p>애초에 앱 개발자들을 위한, <u>구글이 만든</u> 메모리 디버깅 도구가 있어요..</p>
<p>저런거 그냥 시스템에다가 묶어버리고 돌려버리면 누수따위 한번에 나옵니다..</p>
<p>제조사도 마찬가지에요. 실험실 스마트폰에다가 앱 몇 백개 깔고 한 한달 냅둔다음에 누수 디버깅 도구 돌리면 누수같은건 잡기 쉽습니다.</p>
<p>5.0 -&gt; 5.1 가는 동안 발견되고 수정된, 그나마 메이저한 누수는 ColorFade가 전부입니다.</p>
<p><a href="https://github.com/android/platform_frameworks_base/commit/2ed0513f20dea3ba97d09b528879301c86f31884">https://github.com/android/platform_frameworks_base/commit/2ed0513f20dea3ba97d09b528879301c86f31884</a></p>
<p>(artware에 기본으로 들어가는 놈입니다.)</p>
<p>저건 뭐하는 놈이냐구요?</p>
<p>롤리팝부터 화면이 꺼질 때 살짝 축소되면서 흑백이 되는 효과를 적용하기 위해 추가된 겁니다.</p>
<p>따라서 5.0때는 화면이 꺼질때마다 살짝씩 누수가 발생하는거죠, 5.1때 수정되었구요.</p>
<p>그래도 5.1 유저들은 메모리가 불만이랍니다. 무슨일일까요?</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20151118_272/arter97_14478146531385YC2d_PNG/Screenshot_2015-11-18-10-49-47.png?type=w740"></p>
<p>"아이고 의사 양반, 그래도 앱들 다 껐는데 메모리 90%나 먹는건 아니잖아요.."</p>
<p>뒤에서 설명하겠습니다.</p>
<p>3. 왜 뚱뚱해졌느냐</p>
<p>그럼 누수도 아니고, 왜 메모리를 이렇게 많이 먹습니까?</p>
<p>3.1. 다다익램</p>
<p>먼저 리눅스에서의 "다다익램"에 관해서 몇 가지 말씀드릴게 있습니다.</p>
<p>컴퓨터 사양에 조금 관심 있으신 분이라면 "다다익램" 논란이 뭔지 아실겁니다.</p>
<p>컴퓨터에 램을 무식하게 많이 넣는게 어쨌든 좋다는 입장과 자신의 사용량에 따라 알맞게 구성하는게 더 좋다라는 입장이 존재하는데,</p>
<p>대부분의 사람들은 램 더 넣으면 아무런 이득이 없다고 생각합니다.</p>
<p>이게 윈도우에선 사실일지라도, 리눅스에선 아주 제대로 틀린 말입니다.</p>
<p>리눅스 커널에서는 메모리가 남아돌때 쓰는 트릭이 아주 다양하게 존재합니다.</p>
<p>대표적으로는 파일시스템의 dentries &amp; inodes 캐시인데, 이거 덕분에 일단 한번 읽힌 파일은 메모리에 올라가 다음번 읽을 때의 속도를 기하급수적으로 개선시는게 가능합니다.</p>
<p>특히 랜덤 읽기가 딸리는 하드디스크같은 구성에 아주 좋으며, 프로그램 재실행이나 안드로이드 소스 재싱크, Git 저장소 관리같은것의 속도를 많이 개선시켜줍니다.</p>
<p>리눅스 커널 사용하는 안드로이드도 마찬가지입니다.</p>
<p>부팅때 읽어들이는 파일은 일단 메모리에 캐시하고, 자주 사용되는 프레임워크 같은 파일은 우선순위를 두어 캐싱합니다.</p>
<p>이거 말고도 메모리를 활용할 수 있는 방법은 아주아주,아아주우 많습니다.</p>
<p>이건 제조사별로, 커널별로, 버전별로 트윅을 다르게 할 수 있기 때문에 차이가 발생하는건 당연합니다.</p>
<p>메모리 부족해지면 어떡하냐구요?</p>
<p>앞서 쌓은 캐시를 줄일지, 별로사용되지 않는 앱을 죽일지 커널이 결정해서 메모리를 확보합니다.</p>
<p>(여기서 삼성이 갤6/노트5에다가 반응성을 너무 우선시해서 앱들을 필요 이상으로 자주 죽인다고 욕을 먹기도 하죠.)</p>
<p>따라서 앞으로 메모리를 많이 먹는걸 보면(멀티태스킹이 불만스럽지만 않다면) "아, 내 메모리가 낭비되지 않고 잘 사용되고 있구나"라고 생각하세요.</p>
<p>전 솔직히 이런걸 모르는 유저들 때문에서라도 메모리 표기 기능을 지우는 제조사 입장이 이해갑니다.</p>
<p>3.2. 64-bit</p>
<p>일단 64-bit가 32-bit보다 *대개* 메모리를 많이 먹는 점부터 알고가셔야합니다.</p>
<p>이런 이유는 단순히 변수 타입마다 메모리를 2배로 잡아서 그러는게 아니라.. 좀 많이 복잡합니다.</p>
<p>궁금하신 분들은 인텔 문서 참고해보세요.</p>
<p><a href="https://software.intel.com/en-us/blogs/2010/07/01/the-reasons-why-64-bit-programs-require-more-stack-memory">https://software.intel.com/en-us/blogs/2010/07/01/the-reasons-why-64-bit-programs-require-more-stack-memory</a></p>
<p>애플보다 약 1년 늦게 구글도 안드로이드 롤리팝 5.0서부터 64-bit 지원을 추가시켰습니다.</p>
<p>이게 애플처럼 그냥 64-bit지원하는 라이브러리 넣고 앱 개발자들이 그냥 64-bit로 재컴파일하면 끝나는것처럼 말이 쉬웠으면 좋겠는데,</p>
<p>아쉽게도 안드로이드는 자바 때문에 64-bit 구현이 조금 독특합니다.</p>
<p>안드로이드에서는 성능 개선과 프로세스 관리를 위한 Zygote라는 놈이 존재합니다.</p>
<p>(따라서 Zygote를 죽이면 탈옥한 아이폰에서의 리스프링과 비슷한 효과가 나게되죠)</p>
<p>ART랑 앱들이랑 직접적으로 연결되는데, 이게 32-bit와 64-bit랑 별도로 존재합니다.</p>
<p>그럼 64-bit왔으니 64-bit Zygote만 쓰면 안되냐, 그러면 32-bit 라이브러리 쓰는 앱들 모두 고장납니다.</p>
<p>따라서 현 안드로이드 64-bit 구현은 Zygote를 두개나 띄우는 구조입니다.</p>
<p>거기다 +ɑ로 일단 64-bit가 32-bit보다 메모리 많이 먹는거도 고려하셔야하구요.</p>
<p>(애플보다 유리한게 있다면, JNI를 사용하지 않는 앱의 경우 해당 개발자가 마켓에 다시 올릴 필요 없이 바로 64-bit로 구동된다는 점)</p>
<p>(추가적으로 말씀드리자면, 바로 위에서 다룬 이유 때문에 노트4는 64-bit 먹을 가능성 아주 희박합니다.)</p>
<p>3.3. Memory Allocator ***CRITICAL***</p>
<p>메모리 알로케이터는 프로그램에서 메모리 할당 요청이 들어올 때 그걸 어떻게 처리할지 결정하는 놈입니다.</p>
<p>안드로이드는 4.4 킷캣까지 dlmalloc이란 굉장히 표준적인 메모리 알로케이터를 사용했습니다.</p>
<p>이게 5.0와서 jemalloc으로 확 바뀌어버렸습니다.</p>
<p>jemalloc은 무엇이냐.</p>
<p>구글이 쓰기 전까지 페이스북이 서버관리에 사용하기 위해서 전폭적으로 지원했던 메모리 알로케이터입니다.</p>
<p>당연히 현재는 거의 모든 안드로이드 5.0+에 사용되니 구글이 전폭적으로 지원하고 있고요.</p>
<p>기존 dlmalloc :</p>
<p>&nbsp;- 내부 구현 방식이 비교적 간단</p>
<p>&nbsp;- 메모리 사용량 낮음</p>
<p>&nbsp;- 단일쓰레드에선 jemalloc보다 빠름</p>
<p>새롭게 추가된 jemalloc :</p>
<p>&nbsp;- 내부 구현 방식이 아주 복잡함</p>
<p>&nbsp;- 메모리 사용량 높음</p>
<p>&nbsp;- 성능을 극대화하기 위해 온갖 수단과 방법 동원</p>
<p>&nbsp;- 멀티쓰레드로 실행되면 dlmalloc를 어마어마한 차이로 압승함</p>
<p>&nbsp;- 단일쓰레드에선 dlmalloc과 비슷하지만 조금 느림</p>
<p>jemalloc은 여러면에서 안드로이드에 딱 맞는 궁합입니다.</p>
<p>일단, 앱 개발자는 아무 생각할 필요도 없습니다. 제조사가 jemalloc을 다른거로 바꾸지 않는한 표준 메모리 할당은 다 jemalloc으로 돌아가니까요.</p>
<p>또, 멀티쓰레드가 빠른만큼 최근 안드로이드 시스템에서의 코어 수 증가에도 아주 적합합니다.</p>
<p>단, 램 1기가 달린 갤3 3G같은 경우엔 메모리가 너무 부족해져서 오히려 성능이 대폭 하락하게되죠.</p>
<p>같은 이유로 램 2기가 밖에 달리지 않고, 해상도는 괴물이여서 무겁고, 게다가 64-bit인 넥서스 9에서도 jemalloc이 사용되지 않고 있습니다.</p>
<p>(메모리 부족한 기기에서 5.0+ 커롬 개발하시는 분들도 jemalloc 끄는거 고려해보세요.)</p>
<p>기존 4.4 사용자 분들께서 5.0 올리시고나서 보신 메모리 점유율 증가의 주원인은 여기 있습니다.</p>
<p>제가 만져본 모든 삼성 기기는 jemalloc이 사용되고 있습니다.</p>
<p>메모리는 둘째고 성능을 일단 업시켜보겠다는거죠.</p>
<p>3.4. ART Runtime</p>
<p>모두 아시다시피 5.0부터 또 크게 바뀐게 있습니다.</p>
<p>Dalvik을 완전히 버리고 ART로 넘어가게됬죠.</p>
<p>Dalvik의 GC, 프레임드랍 문제를 해결하기위해 아예 처음부터 코딩된 ART도 다양한 메모리 트릭이 있습니다.</p>
<p>(자세한건&nbsp;<a href="https://www.youtube.com/watch?v=EBlTzQsUoOw">https://www.youtube.com/watch?v=EBlTzQsUoOw</a> 참고해주세요)</p>
<p>일단 대표적으로, ART 런타임도 메모리 알로케이터가 바뀌었습니다.</p>
<p>jemalloc도 싫었는지, 아예 구글이 처음부터 ART에 딱 맞는 메모리 알로케이터, rosalloc도 직접 코딩했습니다.(갓구글)</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20151118_103/arter97_1447819218738QDIAa_PNG/Screenshot_from_2015-11-18_12-59-13.png?type=w740"></p>
<p>파랑색이 기존 Dalvik</p>
<p>빨간색이 킷캣 4.4의 ART</p>
<p>초록색이 롤리팝 5.0의 ART</p>
<p>rosalloc역시 메모리 사용량이 조금 더 높습니다만 성능이 저렇게 개선됬는데 저라면 성능개선을 선택하겠습니다.</p>
<p>4. 제조사</p>
<p>제가 7월달에 쓴 갤6 후기 글에서 메모리 관리 때문에 삼성을 엄청 비판했습니다.</p>
<p><a href="http://cafe.naver.com/develoid/549732">http://cafe.naver.com/develoid/549732</a></p>
<p>아직도 제 의견엔 변함이 없을까요?</p>
<p>지금은 커스텀롬에 커스텀커널 직접 만들어 쓰니 메모리 관리엔 전혀 불만 없습니다만 순정갔더니 옛날과 똑같으면 그때 가서도 비판할것입니다.</p>
<p>인제 구글이 오픈소스로 안드로이드를 공개하면 제조사는 맞춰서 트윅을 할텐데, ART같은거 건들여가면서 몇 KB, MB씩 절약하는것보다</p>
<p>그냥 상주해있는 서비스와 앱 갯수를 줄이면 그냥 장땡입니다. 반대로 말하면, 그런 것들이 많을 수록 메모리 사용량이 높아지는거죠.</p>
<p>그렇기 때문에 AOSP 계열들의 메모리 사용량이 거의 항상 제조사 롬보다 좋은겁니다.</p>
<p>삼성같은 경우 루팅해서 Knox포함한 내장앱들 학살만해도 숨통이 트이죠.</p>
<p>5. 결론</p>
<p>롤리팝은 외형 뿐만 아니라 대대적으로 내부적인 개선이 이루어졌습니다.</p>
<p>메모리를 많이 사용하는건 사실이지만 그 사용한 만큼 유저들한테 고스란히 성능 개선으로 돌아갑니다.</p>
<p>메모리 누수 아니에요. 삼성 펌웨어도 메모리 누수 아니에요.</p>
<p>그냥 메모리 많이 먹는거에요.</p>
<p>진짜 메모리 누수가 심했다면 폰 한 달 이상 동안 켜두고 안 끄시는 저희 부모님같은 분들은 진작에 막 렉걸리고 알림 안오는 등의 오작동이 발생했었어야합니다.</p>
<p>그냥 메모리 사용량은 잊고 사세요. 커널 개발하는 저도 메모리 사용량은 안보고 삽니다.</p>
<p>리눅스 커널은 사용 가능한 메모리 10MB 남겨놓고도 빠릿빠릿한 반응성을 제공하는 대단한 놈입니다.</p>
<p>(제 데스크탑도 램 16기가 중 캐시로 12기가 쓰면서 사용 가능한 메모리 100MB 남아도 빠릿빠릿합니다.)</p>
<p>그냥 멀티태스킹하시면서 앱이 너무 많이 죽는듯 하다, 웹 브라우저 탭이 몇개 안 열려있는다 싶으면 문제를 제기하세요. 폰 재부팅하자마자 앱 다 죽였는데도 메모리 80~90% 차있다고 문제삼으실 필요 전혀 없습니다.</p>
<p>아마 안드로이드가 iOS처럼 메모리 사용량 보기 힘들게 해놨다면 이렇게 이슈되진 않았을텐데 아쉽네요.</p>
<p></p>
<p>결국은 어떤 제조사가 성능이랑 멀티태스킹 균형을 제일 잘 맞췄느냐의 싸움입니다.</p>
<p>(삼성은 너무 극단적으로 성능과 반응성을 위해 앱을 자주 죽인다고 많은 유저들이 짜증내고 있죠.)</p>
<p>글 쓰느라 두 시간 걸렸네요.</p>
<p>지적과 질문 환영합니다.</p>
<p>전체공개이니 퍼가는건 링크로만 가져가주세요.</p>
