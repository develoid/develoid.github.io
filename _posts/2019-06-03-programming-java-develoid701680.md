---
layout: post
title: '[커뮤니티] #5.[1-7.JAVA_기초사항]JAVA 프로그램 개발 단계'
author: 'ㅎ엘로이ㅎ'
categories: Programming-Java
tags:
- Programming
- Language
- Java
-
---


<script> location.href='https://cafe.naver.com/develoid/701680' ; </script>

<p></p>
<p>#5.[1-7.JAVA_기초사항]JAVA 프로그램 개발 단계</p>
<p>안녕하세요 엘로이입니다 5강이네요 계속 이렇게만 썼으면 좋겠네요 ㅎㅎ&nbsp;[1-7 자바 프로그램의 단계]</p>
<p>자바 프로그램의 개발 단계는 다음과 같습니다.</p>
<p>&nbsp;1.소스 파일의 생성먼저 에디터를 사용하여서 소스 코드를 입력한 후에 파일에 저장합니다. 파일은 .java 확장자를 가져야합니다.&nbsp;</p>
<p></p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzAzMzBfMiAg/MDAxNDkwODU5Njc5MTQ0.n_KRzsmn8GVZ9NvyTCCxuZOstNRLclhubA_UjHRc7QIg.RZqOp5tMP2mCyu2nzvymhc8tZL6b5gjqDYZYOWhXMQcg.PNG.cksdid0404/5.png?type=w740"></p>
<p></p>
<p>메모장과 NotePad++ 와 같은 간단한 에디터를 사용할 수도 있고, 이클립스와 같은 통합 개발 환경을 사용할 수도 있습니다. 통합 개발 환경은 에디터, 디버거와 같이 소프트웨어 개발 프로세스를 지원하는 많은 도구들을 묶어서 사용합니다. 통합 개발 환경의 대표적인 것들로</p>
<p></p>
<p>이클립스(<a href="http://www.eclipse.org"><u>www.eclipse.org</u></a>)</p>
<p></p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzAzMzBfMjQw/MDAxNDkwODU5NjE2ODUz.FBy15ck8fcLmhxNGy43amibPm18Jl895GZr26tm1ClQg.faCgN_PWZ6Tt48SO-l0XnoVEdoG2aVaauT1WfLVoj80g.PNG.cksdid0404/1.png?type=w740"></p>
<p>넷빈(<a href="http://www.netbeans.org"><u>www.netbeans.org</u></a>)</p>
<p></p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzAzMzBfMjkx/MDAxNDkwODU5NjMxMzMz.oFAXm07bqGWb2qVVxu7iEdCQGg4LAmC4sARGA74voj8g.y6we4ChiaS7Fvak9wy0PVXYji9A4O9xL3Kq4qpG8sRUg.PNG.cksdid0404/2.png?type=w740"></p>
<p></p>
<p>IntelliJIDEA(<a href="http://www.jetbrains.com/idea"><u>www.jetbrains.com/idea</u></a>)</p>
<p></p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzAzMzBfMjUz/MDAxNDkwODU5NjQ0OTQz.JqIqjf9U44FhR3ePmXPJlAqBJumeEJh16jUDns2D9Ucg.JytC7wHFtWbKTEgQWIBp6AW49r0M6m4gI9amjmY2188g.PNG.cksdid0404/3.png?type=w740"></p>
<p>등을 들수 있습니다.&nbsp;2. 컴파일소스파일이 완성 되면 자바 컴파일러로 컴파일 합니다. 자바 컴파일러는 자바 소스 코드를 바이트 코드로 변환합니다.&nbsp;</p>
<p></p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzAzMzBfNzYg/MDAxNDkwODU5NjkwNjQy.wc2ACByQ0LPGfq608B82JArgu9F5ZIqauryBW7mpxL8g.z4HlFZhVaK3vinaMmFvnVXz60xfbNmbDzArptTlpoREg.PNG.cksdid0404/4.png?type=w740"></p>
<p></p>
<p>바이트 코드는 확장자가 .class로 끝나는 파일에 저장되는데 이를 클래스 파일이라고 합니다.</p>
<p>&nbsp;3.클래스 적재와 바이트 코드 검증클래스 적재기(class loader)는 프로그램의 바이트 코드가 들어 있는 클래스 파일을 메모리로 적재합니다. 또한 실행에 필요한 다른 클래스 파일도 함께 적재합니다. 클래스 파일은 로컬 컴퓨터의 디스크에서 적재될 수도 있지만 네트워크를 통하여 적재될 수도 있습니다.&nbsp;바이트코드 검증기는 바이트 코드들이 이상이 없으며 자바의 보안 규칙을 위배하지 않는지를 검사합니다. 자바는 상당히 엄격한 보안 규칙을 가지고 있는데 이것은 네트워크를 통하여 전송된 자바 프로그램이 컴퓨터를 훼손시키는 것을 방지하기 위해서입니다.&nbsp;4.실행자바 가상 기계(JVM)가 바이트 코드를 실행합니다. 초기 버전의 자바에서는 JVM이 단순한 인터프리터이었습니다. 초기에 JVM은 단순히 한 번에 하나의 바이트 코드를 해석하여서 실행하였기 때문에 상당히 실행 속도가 느렸습니다.&nbsp;</p>
<p></p>
<p>최근의 JVM은 바이트 코드를 해석하면서 동시에 어떤 부분이 가장 빈번하게 실행되는지를 분석해버립니다. 이러한 부분이 발견되면 Java HotSpot이라고 알려진 JIT(Just-In-Time) 컴파일러가 바이트 코드를 실제 컴퓨터의 기계어로 직접 변환하기 때문에 자바 프로그램이 빠르게 실행됩니다.&nbsp;다음강좌는 JDK 사용하는 방법을 강좌하도록 하겠습니다!</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
