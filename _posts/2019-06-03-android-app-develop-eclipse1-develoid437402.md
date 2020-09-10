---
layout: post
title: '[커뮤니티] #30 애니메이션에 대해 알아보자 (Tween Animation)'
author: 'Mir'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/437402' ; </script>

<p>정말 머리아픕니다 애니메이션...</p>
<p>글도 머리아프게 써있을수 있으므로(?) 원본글에서 관람 추천드립니다(?)</p>
<p><a href="http://itmir.tistory.com/515">http://itmir.tistory.com/515</a></p>
<p>정말 오랜만입니다</p>
<p>글쓰는거 참 어렵내요;</p>
<p>이번에는 아주 간단한 애니메이션에 대해 알아보겠습니다</p>
<p>30. 애니메이션에 대해 알아보자 (Tween Animation)</p>
<p>30-1 애니메이션?</p>
<p>이 강좌에서 알려드릴 애니메이션은 Tween Animation이라는 이름을 가진 애니메이션 입니다</p>
<p>트윈 애니메이션 이라고 하는대요</p>
<p>버튼이 움직이거나, 사라지거나, 위치가 바뀌거나, 커지거나</p>
<p>이런 효과를 띄울수 있습니다</p>
<p>사용되는 속성이 적지 않고 이해하기 어려운 부분이 많습니다</p>
<p>다음 강좌가 올라올때까지 예제소스를 숨겨두지 말고 바로 오픈하고 있으니 글 한번 보시고 바로 소스를 보시는걸 추천드립니다</p>
<p>참고로 이 트윈 애니메이션은 간단한 애니메이션입니다;</p>
<p>나중에는 그래프 애니메이션등등등... 머리아파요 ㅠㅠ</p>
<p>30-2 메인 레이아웃 투척</p>
<p>30대 강좌에서 레이아웃을 공부하는것은 무의미 하므로 투척합니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F2176044453D0C48F1001CA%22&amp;type=cafe_wa740"></p>
<p>메인 레이아웃에는 버튼 5개를 만들어 주시면 됩니다</p>
<p>이 강좌에서 배울 애니메이션은 4가지이고, Set이라는건 두가지 이상의 효과를 동시에 사용할때 사용합니다</p>
<p>30-3 res/anim</p>
<p>애니메이션을 정의한 xml파일은 res/anim폴더에 들어있습니다</p>
<p><a href="http://itmir.tistory.com/289">[Development/App] - #3 App의 구조와 동작 원리</a>&nbsp;강좌에서 res폴더 내부를 관찰할때 설명했던 부분입니다</p>
<p>혹시 까먹으신분 있으실까봐...</p>
<p>기본적으로 프로젝트를 만들면 이 폴더는 없습니다</p>
<p>따로 만들어 주시면 됩니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F234E1D4C53D0C58107B37A%22&amp;type=cafe_wa740"></p>
<p>res/anim에는 5가지의 xml 파일을 만들꺼예요</p>
<p>먼저 투명도를 조절하는 alpha부터 관찰해 봅시다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile8.uf.tistory.com%2Fimage%2F26217E3353D0C61E34F2CE%22&amp;type=cafe_wa740"></p>
<p>정말 간단합니다</p>
<p>저 &lt;alpha&gt; 태그에 정의된 대로 애니메이션이 표시될 겁니다</p>
<p>먼저, 어떤 속성들이 존재하는지 확인해 보겠습니다</p>
<ul ><li >android:duration : 지속시간 입니다, 1000이 1초이며, x초동안 애니메이션을 재생하라 라는 뜻입니다</li><li >android:fromAlpha : 처음 투명도 값입니다, 0.0부터 1.0까지의 범위이며, 0.0이 완전투명이고, 1.0이 불투명 입니다</li><li >android:toAlpha : 끝날때 투명도 값입니다</li></ul><p>종합해 보면, 10초동안 처음에 완전 투명에서 불투명으로 투명도를 바꿔라 라는 뜻입니다</p>
<p>&lt;alpha&gt;에서 3개의 속성만 사용할수 있을까요?</p>
<p>그건 아닙니다</p>
<p>아래에 공통적으로 쓰이는 몇가지 속성을 입력해 두겠습니다</p>
<ul ><li >android:startOffset : 애니메이션을 시작하기 전 대기시간 입니다</li><li >android:repeatCount : 반복 횟수 입니다 -1은 무한반복</li><li >android:repeatMode (restart,&nbsp;reverse) : 반복 모드입니다 restart는 애니메이션을 처음부터 반복, reverse는 애니메이션을 반시계방향으로 다시 실행</li><li >android:interpolator : 애니메이션 효과가 지속되는 동안 빠르게, 또는 느리게 효과가 진행되도록 만듭니다</li><li >android:fillAfter : 애니메이션 효과가 끝난뒤에 상태를 유지할지 결정합니다, 기본은 false</li></ul><p>이중 android:interpolator에 들어가는 속성에 대해 자세한 설명을 더보기 처리 해두었습니다</p>
<p>다음은 회전을 담당하는&nbsp;rotate입니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F272AB74E53D0C9D818D81C%22&amp;type=cafe_wa740"></p>
<p>여기서도 처음 보는 속성들이 몇개 보입니다</p>
<ul ><li >android:fromDegrees : 시작하는 회전각도</li><li >android:toDegrees : 끝의 회전각도</li><li >android:pivotX : 회전축의 X 좌표</li><li >android:pivotY : 회전축의 Y 좌표</li></ul><p>이부분이 좀 이해하기 어렵습니다...</p>
<p>android:fromDegrees와&nbsp;android:toDegrees는 직접 값을 변경해 보시면서 알아가시는게 확실히 와닿습니다</p>
<p>아래 두개의 설명을 더 자세하게 드리면</p>
<p>View가 회전할때 회전의 중심이 되는 중심 축을 설정합니다</p>
<p>이때 단위를 "정수", "%", "%p"를 사용할수 있는대요</p>
<p>정수의 경우는 절대 좌표이고, %는 애니메이션을 적용할 View를 기준으로 한 비율, %p는 View를 감싸는 부모 View를 기준으로 한 비율입니다</p>
<p>이해가 안됩니다...</p>
<p>제가 이해한것이 맞다면 이렇게 표현될것입니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile9.uf.tistory.com%2Fimage%2F2612874B53D0CCC8071B68%22&amp;type=cafe_wa740"></p>
<p>50%, 50%는 딱 중간이겠지요?</p>
<p>즉 중간을 기준으로 0도부터 360도 까지 회전한다 라는 뜻입니다</p>
<p>3번째로 크기를 담당하는 Scale입니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F241E124953D0CD57165991%22&amp;type=cafe_wa740"></p>
<p>으어어어어어어어어</p>
<p>머리아프네요</p>
<ul ><li >android:fromXScale="1.0" : 처음의 가로 크기입니다 1.0은 원래 크기이고요</li><li >android:fromYScale="1.0" : 처음의 세로 크기입니다</li><li >android:pivotX="50%" : 크기를 변경할때의 중심점 입니다 X좌표이고, 설명은 위와 같습니다</li><li >android:pivotY="50%" : Y좌표이고, 위와 같습니다</li><li >android:toXScale="2.0" : 끝의 가로 크기입니다 2.0은 1.0의 두배이므로 두배로 크기를 키우는 애니메이션을 볼수 있습니다</li><li >android:toYScale="2.0" : 끝의 세로 크기입니다, 위와 같습니다</li></ul><p>다음은 위치변경 입니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F211FC64953D0CE381869C8%22&amp;type=cafe_wa740"></p>
<ul ><li >android:fromXDelta="0%p" : 처음 애니메이션이 시작될때 View의 X&nbsp;위치입니다 0%p이므로 원래 위치</li><li >android:fromYDelta="0%p" :&nbsp;처음 애니메이션이 시작될때 View의 Y&nbsp;위치입니다 0%p이므로 원래 위치</li><li >android:toXDelta="20%p" : 끝날때 X위치입니다 가로이므로&nbsp;부모 View의 20%만큼&nbsp;오른쪽으로 이동합니다</li><li >android:toYDelta="20%p" :&nbsp;끝날때 Y위치입니다 세로이므로 부모 View의 20%만큼 아래로 이동합니다</li></ul><p>이제 마지막으로 애니메이션을 묶을수 있는 Set에 대해 알아봅시다</p>
<p>이건... 그냥 &lt;set&gt; &lt;/set&gt;으로 여러 애니메이션들을 묶어주시면 됩니다 ㅋㅋㅋ</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F2346CC4F53D0CFD9254BB2%22&amp;type=cafe_wa740"></p>
<p>작동 영상을 확인해 보겠습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F2428504953D0CF9A0F390F%22&amp;type=cafe_wa740"></p>
<p>간단하다고 했지만 설명하면 이게 뭔말인지 모르실겁니다</p>
<p>저도 아직 완벽하게 이해한부분이 아니므로 틀린부분이 있을수 있습니다</p>
<p>많은 지적 부탁드립니다</p>
<p>java로 애니메이션을 만드는 방법은 자세한 글이 있어 소게해 드립니다</p>
<p>http://blog.naver.com/jolangma/150115948509</p>
<p></p>
<p><p>이 강좌의 예제소스는 그냥 업로드 합니다</p>
<p>카페에서는 원본글에서만 다운로드가 가능합니다</p>
<p>예제소스 다운로드 :&nbsp;<a href="http://itmir.tistory.com/515">http://itmir.tistory.com/515</a></p>
<p></p>
<p></p>
<p>머리가 아파서 횡설수설한거같네요;</p>
<p>예제소스 뜯어보시며 값 하나씩 수정해 보시면 더 정확히 아실수 있을겁니다</p>
