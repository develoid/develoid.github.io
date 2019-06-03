---
layout: post
title: '#4 어떻게 화면이 표시될까?'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/286273' ; </script>


















						<p>저번 강좌 3개를 모두 정독하셨다면, 여러분의 컴퓨터에는 이클립스와 SDK가 모두 설치되어 있을것이며</p><p>또한 어플의 기본 구조도 대충은 아실겁니다</p><p>이제부터는 본격적으로 어플을 만들기 시작하며, 예제소스가 첨부되어 있는 강좌가 많을것 입니다 ㅎㅎ</p><p>하나하나 차근차근 해봅시다!!</p><p><b></p><p><span><b>4.&nbsp;</b></span><span><b>어떻게 화면이 표시될까?</b></span></p><p><span>4-1 어플 생성</span></p><p>저번 강좌가 필요한 부분이 있으니 꼭 정독해 주신다음 읽어 주시기 바랍니다</p><p><b></p><p>File - New - Android Application Project를 눌러 새로운 어플을 만들어 봅시다</p><p><b></p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile8.uf.tistory.com%2Fimage%2F2735944251F8D03D2C07DA%22&amp;type=cafe_wa740"></p><p>이렇게 생성해 주시면 되고 ㅎㅎ.. 나머지는 모두 기본 설정 그대로 두시면 됩니다</p><p><b></p><p><b></p><p><span>4-2 그것이&nbsp;<strike>안</strike>&nbsp;궁금하다, 어떻게 화면에 표시되는가?</span></p><p>프로젝트가 생성되고 아래와 같은 화면이 뜨게 됩니다</p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile22.uf.tistory.com%2Fimage%2F267AFF4351F8D06334D701%22&amp;type=cafe_wa740"></p><p>Package Explorer의 src/(패키지 네임)/MainActivity.java를 더블클릭하여 열어주세요</p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F2302A44351F8D06334CC26%22&amp;type=cafe_wa740"></p><p>열렸습니다!</p><p>코드를 한번 확인해 볼까요?</p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile9.uf.tistory.com%2Fimage%2F23239E4351F8D0641722EB%22&amp;type=cafe_wa740"></p><p>위 사진에서 public class MainActivity부분을 클래스라고 합니다</p><p>그 아래에 있는 @Override는 아직 잘 몰라도 됩니다 ㅎㅎ..</p><p>protected void onCreate부분을 보십시오</p><p></p><p>여기서 onCreate를 메소드의 이름이라 칭하는대요</p><p>onCreate메소드는 기기 화면에 표시되는 것을 정의하는 메소드 입니다</p><p><b></p><div><p>[미르의 팁]</p><p>-메소드가 무엇인가요?<b></p><p>다른 언어에서는 "함수"라고도 합니다</p><p>자바에서는 이 함수를 "메소드"라고 칭하며, 이에대한 자세한 내용은 자바를 배워야 합니다</p><p><b></p><p><a href="http://whdghks913.tistory.com/148">2013/02/20 - [미르의 개발 이야기/Java 배움터] - 첫번째 java프로그램을 만들어 보자</a></p><p><b></p><p>이글부터 읽어보시면 자세한 내용이 담겨 있습니다<b></p></div><p><b></p><p>그런대 onCreate메소드의 코드가 무척 단조롭죠?</p><p>2줄입니다<b></p><p>그런대 이 두줄로 기기의 화면에 HelloWorld가 표시되게 합니다 ㅎㅎ...</p><p><b></p><div><p>super.onCreate(savedInstanceState);</p><p>setContentView(R.layout.activity_main);<b></p></div><p>이 코드중 위에 있는 코드는 super이라는 키워드를 사용하고 있는데 상속받은 부모 클래스가 가지는 동일한 이름의 onCreate 함수를 호출하는 코드로 화면에 표시해주는 코드와는 의미가 멃니다<b></p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F26731B4551F8D2A114974F%22&amp;type=cafe_wa740"></p><p><b></p><p>그렇다는건 setContentView(<span>R.layout.activity_main</span><span>);이 화면에 표시하는 코드라는 건대요!</span></p><p>R.layout.activity_main을 봅시다 ㅎㅎ</p><p>저번 시간에 R.java에 대해 언급한 적이 있었습니다</p><p>R.java파일은 이런형식으로 조회가 가능한대요</p><p><b></p><p>이경우</p><div><p>R(R.java파일을 참조한다).layout(layout에 있는 파일을 참조한다, res/layout)</p><p>.activity_main(activity_main이라는 파일을 참조한다)</p></div><p>라는 의미입니다</p><p><b></p><p>그럼 res/layout/activity_main을 확인해 볼까요?</p><p><b></p><p><b></p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F2415A44B51F8D38512BEB2%22&amp;type=cafe_wa740"></p><p>자! 여기에는 TextView라는것이 있어요! 이게 화면에 표시해 주는건가봐요 ㅋㅋㅋㅎㅎ<b></p><p>그런대 여기에도 hello World! 라는건 없습니다...</p><p>다만&nbsp;android:text="@string/hello_world"라는것만 있군요</p><p><b></p><p>@string은 res/values/string.xml에서 값을 참조한다는 뜻입니다</p><p>그럼 확인해 봐야겠지요??</p><p><b></p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F240FC44751F8D43705F717%22&amp;type=cafe_wa740"></p><p>찾았습니다!</p><p>Hello world!라는 문구가 있군요!</p><p><span>아하, 아까본 android:text="@string/hello_world"는 values/string.xml에서 hello_world라는 이름을 가진 스트링을 찾아 표시한다는 뜻이었습니다</span></p><p><span><b></span></p><p><span>그럼 한번 정리를 해볼까요?</span></p><p><b></p><p></p><p>1. 안드로이드는 AndroidManifest.xml에 나와있는 Activity를 실행합니다<b></p><p>2. MainActivity.java파일은&nbsp;setContentView(R.layout.activity_main);코드로 res/layout/<span>activity_main.xml을 호출합니다 (1번 위, 3번)</span></p><p><span>3. activity_main.xml파일에서는 android:text="@string/hello_world"구문으로 res/values/string.xml의 값을 참조&nbsp;합니다 (1번 아래, 4번)</span></p><p>4. hello_world로 설정된 값을 activity_main에 준다음, 완성된 화면을 MainActivity.java에 보내줍니다 (2번)</p><p>5. 마지막으로 기기에 화면을 띄웁니다</p><p><b></p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F241D364051F8D68319ED1E%22&amp;type=cafe_wa740"></p><p>이런 형태로 움직인다는 것을 이해하시면 오늘 강좌의 목표를 체우신 겁니다 ㅎㅎ<b></p><p><b></p><div><p>[안나오면 섭섭한 미르의 팁]</p><p>-이클립스에서 소스의 줄번호를 나타내는 방법이 뭔가요?<b></p><p>Window - Preferences를 들어가 주세요</p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile26.uf.tistory.com%2Fimage%2F2675463751F8D9AE1BE8F6%22&amp;type=cafe_wa740"></p><p>General - Editors - Test Editors에 들어간다음</p><p>Show line numbers를 체크해 주세요</p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F222CD73651F8D9120BD22C%22&amp;type=cafe_wa740"></p><p>OK 누르면 완료됩니다</p></div><p><b></p><p><b></p><p>그럼 이제 어플에 추가하고 바꿔볼까요?</p><p><b></p><div><p>-&lt;string name="hello_world"&gt;Hello world!&lt;/string&gt;</p><p>+&lt;string name="hello_world"&gt;미르의 안드로이드 정복기!&lt;/string&gt;<b></p></div><p><b></p><p>-는 제거, +는 추가란 뜻으로 git써보신적 있으시다면 바로 아실겁니다 ㅎㅎ</p><p><b></p><p>원래는 values-ko폴더를 만들어서 넣지만 지금은 그냥 넣어보겠습니다</p><p>참고로 values폴더는 en(영어), 모든 언어의 기준 string을 기록하며</p><p>values-(나라 코드)는 만약 시스탬이 (나라코드)일경우 이 언어를 사용하라~ 라는 뜻입니다</p><p><b></p><p>이제 activity_main.xml으로 돌아와서 아래에 있는 Graphical Layout(그래픽 레이아웃)을 눌러주세요</p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile26.uf.tistory.com%2Fimage%2F240ABF3551F8DAA8303A6E%22&amp;type=cafe_wa740"></p><p>정상적으로 변경되었내요 ㅎㅎ</p><p><b></p><p>이로써 values/string.xml을 수정하면 표시되는 글자를 변경할 수 있다라는 사실을 배웠습니다</p><p><b></p><p><b></p><p>이렇게 해서 4번째 강좌가 끝났습니다ㅎ..</p><p>설명을 쉽게 한다 해도 어려운 부분이 꼭 있습니다</p><p>만약 어렵게 느껴지신다면 더 해보세요</p><p>Do it!</p><p>하다보면 익숙해 져서 눈감고 해도 편할겁니다 ㅎㅎ</p>
