---
layout: post
title: '[커뮤니티] #1.[1.JAVA_기초사항]JAVA 자바는 처음이시지요?'
author: 'ELROY'
categories: Programming-Java
tags:
- Programming
- Language
- Java
-
---


<script> location.href='https://cafe.naver.com/develoid/701273' ; </script>

안녕하세요 진주에서 IT공부하고있는 18세 엘로이 라고 합니다 반갑습니다 ㅎㅎ</blockquote><p>오늘 카페 게시글 보다가 C언어를 강좌올리기 시작하시는 분이 계셔서 저도 도전을 받았네요 ㅎㅎ</p>
</blockquote><p>서론은 짧게 하고 바로 자바 기초사항 Chapter로 넘어가도록 하겠습니다!</p>
<p>{Chapter 1-1.자바란 무엇인가?}</p>
</blockquote><p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzAzMjhfNjUg/MDAxNDkwNjk3MTUxNzk2.eegnIDplB_nPDijXYSMGKWEbhoqkV36Cw4oiMOVy20Eg.8cgkcDhDsUhZwE2sbZ6KlqT0C9vOJKXxyNwcLMtWHxQg.PNG.cksdid0404/1.png?type=w740"></p>
<p>[출처]&nbsp;<a href="https://www.tiobe.com/tiobe-index/">https://www.tiobe.com/tiobe-index/</a></blockquote></blockquote>현재 컴퓨터 업계에서 가장 많이 사용되는 프로그래밍언어가 무엇이냐고 물어본다면 자바라고 말할겁니다.</blockquote>&lt;br /&gt;</blockquote>자바 언어를 사용하면 C언어나 C++보다 더 적은 노력으로 프로그래밍 작성이 가능해집니다.쉬운 언어라는 소리지요 저 그래프만 본다고 하더라도 C언어보다 좀더 많이 쓰인다는걸 알수 있습니다.</blockquote>&lt;br /&gt;</blockquote>&lt;자바의 역사&gt;</blockquote><p>자바는 썬 마이크로시스템즈(Sun&nbsp;Microsystems)의 제임스 고슬링(James&nbsp;Gosling)이 개발한 객체지향 언어입니다.</p>
<p>자바는 C 언어를 토대로 오브젝트-C를 거쳐 기계의 운영체제와 무관하게 실행할 수 있도록 만들어졌습니다. 처음에 오크(oak)로 불렸으나 이름이 같은 언어가 이미 존재해서 나중에 자바로 바뀌었습니다. 자바는&nbsp;JVM(Java&nbsp;VirtualMachine: 자바 가상 머신)이라는 프로그램을 사용하기 때문에 컴파일된 코드가 각각의 플랫폼에 대해 독립적입니다.</p>
<p>그래서 자바로 개발된 프로그램은&nbsp;JVM을 설치할 수 있는 시스템이라면 어디서나 실행할 수 있어 폭발적인 인기를 끌게 되었었습니다. 2009년 4월 제작사인 썬 마이크로시스템즈가 오라클에 인수 합병됨에 따라 현재 자바에 대한 권리 및&nbsp;유지보수도 오라클(Oracle)로 넘어갔습니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzAzMjhfMjI3/MDAxNDkwNjk4NDA1NzU4.U_8NBT44CwHnPy2blC-22WQWSyCG6273Tlye7dYbEQwg.g3Hbblr4WxXAeLs3FoKZ2efjShC9ZOLtPWCrHrbxWIQg.PNG.cksdid0404/2.png?type=w740"></p>
</blockquote>&lt;br /&gt;</blockquote>[출처]<a href="http://terms.naver.com/entry.nhn?docId=3533009&amp;cid=58528&amp;categoryId=58528">http://terms.naver.com/entry.nhn?docId=3533009&amp;cid=58528&amp;categoryId=58528</a></blockquote></blockquote></blockquote>&lt;자바의 버전&gt;</blockquote>&lt;br /&gt;</blockquote>자바는 지속적으로 업그레이드 되고 있습니다. 이것은 세월이 흘러가도 별 다른 변경이</blockquote>없는 다른 언어들과는 많이 다른 점입니다. 자바의 내부 버전은 1.0~1.8 버전이지만SUN사는 1.2부터 "JAVA 2" 라는 이름을 사용했습니다 1.6버전부터 "JAVA 6" 버전으로&nbsp;현재 (2017년 3월 28일 기준) 자바 1.8버전은 "JAVA 8" 로 불리우고 있습니다.</blockquote></blockquote>++추가 JDK설명++</blockquote>자바 JDK&nbsp;(Java Development Kit)&nbsp;8버전은 2014년도에 출시되었습니다.</blockquote>&nbsp;JDK 8이 유독 관심을 받는 이유는 다음과 같습니다</blockquote></blockquote>*람다식</blockquote>*작은 가상기계</blockquote>*병렬 배열 정렬</blockquote>*컬렉션을 위한 대용량 데이터 처리</blockquote>*Base64 인코딩과 디코딩을 위한 표준 API</blockquote>*새로운 날짜, 시간 API(Date &amp; Time API)</blockquote>*강화된 패스워드 깁반 암호화 등이 있습니다</blockquote>여기서 프로그램밍을 전혀 몰랐다 하시는분들은 저게 머하자는 건가 생각하실수도 있는데</blockquote>다른것들은 넘어가기로 하고 "람다식"에 대해서 간략하게 설명하고 넘어가겠습니다</blockquote></blockquote>람다식 이란..</blockquote>람다식은 그동안 소외되었던 함수를 객체로 취급합니다. 람다식은 기본적으로 함수를 표현하는 방법인 수학의 LAMBDA CALCULUS에서 유래 되었습니다 예를 들어서 두개의 정수를</blockquote>받아서 그 합을 반환하는 함수를 (a,b)-&gt; a + b;로 표시하는 것입니다. 람다식은 자바&nbsp;</blockquote>언어에 새로운 연산자인 화살표 연산자, 메소드 참조 등을 추가하게 됩니다. 람다식으로 자바 코드는 보다 간결해지고 병렬 처리 기능과 안정성이 향상될 것으로 보입니다.</blockquote>&lt;br /&gt;</blockquote>********************************************************************************************</blockquote>&lt;br /&gt;</blockquote>어떠셨나요? 처음이라 오타도 많을수 있고 앞뒤 내용이 잘 안맞을수도 있는데 계속 자바 강좌 올릴거구요 언제나 피드백은 감사히 받겠습니다 지금까지 1-1 자바란 무엇인가 의 엘로이였습니다. 감사합니다.</blockquote>&lt;br /&gt;</blockquote></p>
