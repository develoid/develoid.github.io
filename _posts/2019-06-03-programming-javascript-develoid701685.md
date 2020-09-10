---
layout: post
title: '[커뮤니티] [01] 자바스크립트 소개'
author: 'ㅎ엘로이ㅎ'
categories: Programming-JavaScript
tags:
- Programming
- Language
- JavaScript
-
---


<script> location.href='https://cafe.naver.com/develoid/701685' ; </script>

<p>엘로이입니다. 약 1년 전쯤 정리한거라 말투가 투박하게 되어있네요 ㅎㅎ 자바스크립트도 이제 슬슬 올리겠습니다</p>
<p></p>
<p>Overview</p>
자바스크립트는 웹 사이트에서는 가장 많이 사용되고 있는 프로그래밍 언어다. PC나 테블릿, 스마트폰 등에 포함되어 있는 웹브라우저에는 자바스크립트 인터프리터가 내장 되어 있다.<p><p>※ 인터프리터 :&nbsp;인터프리터(interpreter, 문화어: 해석기)는 프로그래밍 언어의 소스 코드를 바로 실행하는 컴퓨터 프로그램 또는 환경을 말한다. 원시 코드를 기계어로 번역하는 컴파일러와 대비된다. 인터프리터는 다음의 과정 가운데 적어도 한 가지 기능을 가진 프로그램이다. [출처:위키백과]</p>
</blockquote><p>웹 개발자들은 웹 페이지를 작성할때 HTML을 이용하고 내용을 구성하고, CSS로 페이지 레이아웃을 꾸미고, 자바스크립트로 웹 페이지의 동작(기능)을 구현한다.</p>
<p>※ 레이아웃 : 컴퓨터 그래픽 디자인이나 소프트 디자인에서 각 구성요소를 제한된 공간안에 효과적으로 배열하는 일 [출처:위키백과]</p>
<p>※ 웹 페이지의 동작(기능) : 폼 입력값에 대한 검증, 이벤트 처리 등</p>
</blockquote><p>1. 자바스크립트의 특징</p>
<p><ul ><li >자바스크립트는 객체 지향 프로그래밍과 함수 지향적 프로그래밍 표현이 가능한 &nbsp;언어다.</li><li >자바스크립트는 동적이고 타입을 명시할 필요가 없는 인터프리터 언어다.(※&nbsp;동적 :&nbsp;동적 프로그래밍 언어(dynamic programming language, 동적 언어)는 다른 언어에서 컴파일 과정 중 수행하는 특정 일들을 실행 도중(런타임)에 수행하는 고급 언어 를 의미하는 용어다[출처:위키백과])</li></ul><p>자바스크립트는 객체지향언어인 자바에서 문법을 가져왔고, 함수기반언어인 스킴(Scheme)언어서 first-class function개념을, 그리고 셀프(Self)언어에서 프로토타입 기반의 상속 개념을 가지고 왔다.</p>
</p>
<p><p>※ first-class function : 함수의 인자나 함수의 반환 값으로 또 다른 함수를 사용 가능한 함수</p>
<p>※&nbsp;프로토타입 기반 프로그래밍 : 객체지향 프로그래밍의 한 형태와 갈래로 클래스가 없고, 클래스 기반 언어에서 상속을 사용하는 것과는 다르게, 객체를 원형(프로토타입)으로 하여 복제의 과정을 통하여 객체의 동작 방식을 다시 사용할 수 있다. 프로토타입기반 프로그래밍은 클래스리스(class-less), 프로토타입 지향(prototype-oriented) 혹은 인스턴스 기반(instance-based) 프로그래밍이라고도 한다.[출처:위키백과]&nbsp;</p>
</p>
</blockquote><p><p>대부분의 프로그래밍 언어들은 기본적인 데이터타입이나 배열, 날짜 등을 다루기 위한 최소한의 API를 포함하고 있다. 자바스크립트도 이러한 코어(내장)API를 가지고 있다. 하지만 입출력이나 네트웍 같은 복잡한 기능을 담당하는 API들은 자바스크립트의 실행환경인 브라우저에 내장(자바스크립트 엔진) 되어 있다.</p>
<p>자바스크립트의 공부는 언어가 가지고 있는 기본문법을 이해하고, 그 다음 코어 API와 브라우저 기반 API를 살펴보는 방식으로 하면 된다.</p>
</p>
<p><p>※ 브라우저 기반의 API는 브라우저마다 사용방법과 제공되는 범위도 다를 수 있다.</p>
</p>
</blockquote><p><p>2. 자바스크립트의 다른 이름</p>
<p>&nbsp;&nbsp;</p>
<p>자바스크립트 언어의 표준은 ECMAScript이지만, 브라우저를 만드는 회사들이 표준을 바탕으로 조금씩 변경하여 브라우저에 자바스크립트 엔진을 구현한다.&nbsp;</p>
<p>브라우저별 자바스크립트 이름</p>
<p><a  target="_blank"></a><table  height="40" bgcolor="#b7bbb5"   ><tbody><tr bgcolor="#ffffff"><td  >&nbsp;브라우저 이름</td><td  >&nbsp;자바스크립트 이름</td></tr><tr bgcolor="#ffffff"><td >&nbsp;Mozilla Firefox, Google Chrome, Apple Safari</td><td >&nbsp;javascript</td></tr><tr bgcolor="#ffffff"><td >&nbsp;Internet Explorer</td><td >&nbsp;jscript</td></tr><tr bgcolor="#ffffff"><td >&nbsp;Opera</td><td >&nbsp;ECMAScript</td></tr></tbody></table></p>
<p>3. 자바스크립트 실행 환경</p>
<p>자바스크립트 예제 코드를 만들고 실행을 하려면 자바스크립트 인터프리터가 필요하다. 모든 웹 브라우저에는 자바스크립트 인터프리터가 내장 되어있다.</p>
<p>자바스크립트 예제 코드를 실행하기 위해서 브라우저가 제공하는 개발 도구(ex:파이어폭스의 파이어버그, 크롬의 개발자도구,...)를 사용하여 실행시켜도 되고, 메모장이나 웹 에디터를 이용하여 &lt;script&gt;태그안에 자바스크립트 코드를 내장한 HTML파일을 만들고 브라우저에서 불러오기 하여도 실행된다.</p>
<p>다음은 콘솔과 HTML파일을 이용한 실행 화면이다.</p>
<p>①&nbsp;크롬 브라우저의 "개발자도구 - 콘솔"에서 간단한 자바스크립트 코드를 실행한 화면</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcafeptthumb-phinf.pstatic.net%2F20140509_164%2Fzeroday7_1399612741169K8tWD_PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2014-05-09_%25BF%25C0%25C8%25C4_2.17.49.png%3Ftype%3Dw740%22&amp;type=cafe_wa740"></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcafeptthumb-phinf.pstatic.net%2F20140509_211%2Fzeroday7_1399605598110eJwWH_PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2014-05-09_%25BF%25C0%25C8%25C4_12.18.38.png%3Ftype%3Dw740%22&amp;type=cafe_wa740">&nbsp;&nbsp;</p>
<p>② HTML페이지의 &lt;head&gt; 태그 사이에 &lt;script&gt;태그를 삽입하여 실행하는 화면</p>
<p><ol ><li ><p>&lt;!DOCTYPE html&gt;</p>
</li><li ><p>&lt;<a href="http://december.com/html/4/element/html.html">html</a>&gt;</p>
</li><li ><p>&lt;<a href="http://december.com/html/4/element/head.html">head</a>&gt;</p>
</li><li ><p>&nbsp; &nbsp;&nbsp;&lt;<a href="http://december.com/html/4/element/title.html">title</a>&gt;js ex01-1&lt;/<a href="http://december.com/html/4/element/title.html">title</a>&gt;</p>
</li><li ><p>&nbsp; &nbsp;&nbsp;&lt;<a href="http://december.com/html/4/element/script.html">script</a>&gt;</p>
</li><li ><p>&nbsp; &nbsp; &nbsp; &nbsp; alert('hello zeroDay!');</p>
</li><li ><p>&nbsp; &nbsp;&nbsp;&lt;/<a href="http://december.com/html/4/element/script.html">script</a>&gt;</p>
</li><li ><p>&lt;/<a href="http://december.com/html/4/element/head.html">head</a>&gt;</p>
</li><li ><p>&lt;<a href="http://december.com/html/4/element/body.html">body</a>&gt;</p>
</li><li ><p>&lt;/<a href="http://december.com/html/4/element/body.html">body</a>&gt;</p>
</li><li ><p>&lt;/<a href="http://december.com/html/4/element/html.html">html</a>&gt;</p>
</li></ol></p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcafeptthumb-phinf.pstatic.net%2F20140509_35%2Fzeroday7_1399613308751gKQno_PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2014-05-09_%25BF%25C0%25C8%25C4_2.27.46.png%3Ftype%3Dw740%22&amp;type=cafe_wa740"></p>
<p>4. 자바스크립트 디버깅(오류메세지 확인)</p>
<p>대부분의 브라우저들은 콘솔 API를 제공한다.&nbsp;코드 실행중에 오류가 발생하면 오류메세지를 콘솔창을 통해서 확인이 가능하고,&nbsp;console.log()함수를 이용하여 콘솔창에 직접 출력도 가능하다. 이 함수는 코드 디버깅할때 유용하다.&nbsp;</p>
<p>ex) Google Chrome 콘솔 창</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcafeptthumb-phinf.pstatic.net%2F20140509_54%2Fzeroday7_13996140200041IpN2_PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2014-05-09_%25BF%25C0%25C8%25C4_2.36.28.png%3Ftype%3Dw740%22&amp;type=cafe_wa740"></p>
