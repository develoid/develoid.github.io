---
layout: post
title: '[02] 자바스크립트 문장의 구성요소'
author: 'ㅎ엘로이ㅎ'
categories: Programming-JavaScript
tags:
- Programming
- Language
- JavaScript
-
---


<script> location.href='https://cafe.naver.com/develoid/701706' ; </script>

<p>Overview</p>
<p>프로그래밍 언어에서 사용되는 문장의 단어들(어휘)은 프로그램을 어떻게 코딩하여야 하는지를 알려주는 기본 규칙이다.</p>
<p>1. 대·소문자 구분</p>
<p>자바스크립트는 대소문자를 구분하는 언어이다. 키워드, 변수 이름, 함수 이름을 사용할때 대소문자를 구분하여 사용하여야 한다.&nbsp;</p>
<p>ex) for 대신에 FOR나 For를 사용할 수 없다.&nbsp;</p>
<p>2. 공백문자(스페이스)와 줄바꿈문자(엔터)</p>
<p>자바스크립트는 프로그램 코드내의 다수의 공백문자나 개행문자의 경우 하나의 토큰으로만 인식한다.</p>
<p><p>※ 토큰 : 프로그래밍 언어에서 더 이상 나눌수 없는 최소한의 단위, 키워드나 변수, 상수등을 말한다.</p>
</blockquote>이렇게 다수의 공백 문자나 줄바꿈 문자를 무시하기에 프로그램 코드내에서 탭키, 엔터키, 들여쓰기 등을 이용하여 가독성이 높은(읽기 쉽고 이해하기 쉬운 코드) 코드를 작성할 수 있다.</p>
<p>3. 주석</p>
<p>주석은 프로그램 로직에는 영향을 주지않는 코드내의 문장이다. 자바스크립트는 두가지 형태의 주석을 지원한다.</p>
<p>첫번째 형태는 한줄 주석으로 '//'로 시작하는 한줄의 문장은 모두 주석으로 취급되어 코드 실행시에는 무시된다.</p>
<p>두번째 형태는 여러줄의 주석으로 '/*'와 &nbsp;'*/' 사이의 모든 문장은 주석으로 취급되어 코드 실행시에는 무시된다.</p>
<p>※ 자바스크립트에서 여러줄 주석과 정규표현식 같이 사용할 경우 충돌이 발생하는 경우가 있다. 유의하자. 자세한 내용은 정규표현식을 설명하는 chapter에서 설명한다.</p>
</blockquote><p><ol ><li ><p>// 한줄 주석에 사용</p>
</li><li ><p>&nbsp;</p>
</li><li ><p>/* 여러 줄 주석에 사용하나 한줄 주석에도 사용 가능 */</p>
</li><li ><p>&nbsp;</p>
</li><li ><p>/* 여러줄 주석에</p>
</li><li ><p>사용된다. */</p>
</li><li ><p>&nbsp;</p>
</li><li ><p>/********************</p>
</li><li ><p>&nbsp;* 주석을 읽기 쉽게 표현 *</p>
</li><li ><p>&nbsp;* 주석을 읽기 쉽게 표현 *</p>
</li><li ><p>*********************/</p>
</li></ol></p>
<p>4. 상수(리터럴)</p>
<p>상수는 프로그램 코드내에서 숫자나 문자등으로 직접 사용되는 데이터 값이다.</p>
<p>※&nbsp;상수(literal) [출처 : 네이버 지식백과]</p>
<p>프로그램의 실행문에 쓰인 숫자나 문자가 그대로의 형으로 취급되는 것. 어셈블러나 컴파일러에서는 적당한 기억 위치에 모아 기억되어 다른 상수와 같게 색인됨에 따라 실행시에 이용된다.</p>
<p>(1) 숫자 상수, 문자 상수, 표의 상수의 총칭. 리터럴 상수(literal constant)를 줄여서 리터럴이라 한다. 문자열의 형태를 취하면서 직접 이것이 문자나 숫자를 표시하는 것이며, 변수와는 달리 이 문자열에 대한 값의 대입은 행할 수 없다. 예를 들어, 어셈블러 언어에서는 「리터럴」을 사용하여 메모리 상에의 특정 어드레스를 표현하거나 어떤 디바이스의 초기 설정(initialization)을 행할 때 필요한 수치 등으로 문자열을 적합하게 하기도 한다. 이것에 의하여 수치에 의미를 갖게 하고 프로그램 작성을 용이하게 하며, 또 프로그램의 이해를 쉽게 한다. 사용되는 리터럴은 리터럴 풀(literal pool)이라 불리는 특별한 장소에 모여 관리된다. 리터럴 풀은 리터럴과 수치를 일대일로 대응시킨 파일로 되어 있다.</p>
<p>(2) 원시 프로그램에서의 항목값의 명시적인 표현이며 그 값은 원시 프로그램의 번역 중에는 바뀌어서는 안 되는 것으로, 예를 들면 명령 "IF X＝0 print FAIL" 중의 단어 " FAIL".</p>
<p>(3) 직접 값을 표시하는 자구(字句) 단위. [예] 100은 백을 표시하고, "APRIL"은 문자열 APRIL을 표시한다. 또 3.0005E2는 숫자 300.05를 표시한다.</p>
</blockquote>자바스크립트는 다음과 같은 상수를 사용한다. 상수에 대한 자세한 설명은 다음 chapter들에서 설명한다.<p><ol ><li ><p>10&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;// 정수</p>
</li><li ><p>10.5&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;// 실수</p>
</li><li ><p>'jjdev'&nbsp;&nbsp; &nbsp;&nbsp;// 문자열</p>
</li><li ><p>"jjdev"&nbsp;&nbsp; &nbsp;&nbsp;// 문자열의 다른 표현</p>
</li><li ><p>true&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;// 불리언 값(true / false)</p>
</li><li ><p>null&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;// null값(존재하지 않는 객체의 값)</p>
</li><li ><p>[1,2,3]&nbsp;&nbsp; &nbsp;&nbsp;// 배열</p>
</li><li ><p>{x:1,&nbsp;y:2}&nbsp;&nbsp;// 객체</p>
</li><li ><p>/[a-z]/&nbsp;&nbsp; &nbsp;&nbsp;// 정규표현식</p>
</li></ol></p>
<p>5. 예약어</p>
<p>예약어는 컴퓨터 프로그래밍 언어에서 이미 문법적인 용도로 사용되고 있기 때문에 식별자로 사용할 수 없는 단어들이다. 자바스크립트는 다음의 문법적인 키워드들과 전역변수/전역함수의 이름은 식별자로 사용할 수 없다.</p>
<p>&nbsp;●&nbsp;자바스크립트 키워드</p>
<p></p>
<p>&nbsp;break delete function return typeof&nbsp;</p>
<p>&nbsp;Case do if swich var catch else&nbsp;</p>
<p>&nbsp;in this void continue false instanceof&nbsp;</p>
<p>&nbsp;throw while debugger finally new&nbsp;</p>
<p>&nbsp;true with default for null try</p>
<p>&nbsp; &nbsp;</p>
<p>●&nbsp;W3C에서 권고하는 추가 키워드</p>
<p>※ W3C(World Wide Web Consortium):&nbsp;월드와이드웹 컨소시엄으로 1994년 10월 월드와이드웹(WWW)의 창시자인 팀 버너스 리를 중심으로 설립된 컨소시엄</p>
</blockquote><p></p>
<p>&nbsp;abstract double goto native static&nbsp;</p>
<p>&nbsp;boolean enum implements package&nbsp;</p>
<p>&nbsp;super byte export import private&nbsp;</p>
<p>&nbsp;synchronized char extends int&nbsp;</p>
<p>&nbsp;protected throws class final&nbsp;</p>
<p>&nbsp;interface public transient const&nbsp;</p>
<p>&nbsp;float long short volatile&nbsp;</p>
<p>●&nbsp;전역변수와 전역함수</p>
<p></p>
<p>&nbsp;arguments encodeURI Infinity Object &nbsp;</p>
<p>&nbsp;String Array Error isFinite parseFloat &nbsp;</p>
<p>&nbsp;SyntaxError Boolean escape isNaN &nbsp;</p>
<p>&nbsp;parseInt TypeError Date eval Math &nbsp;</p>
<p>&nbsp;RangeError undefined decodeURI EvalError &nbsp;</p>
<p>&nbsp;NaN ReferenceError unescape decodeURIComponent &nbsp;</p>
<p>&nbsp;Function Number RegExp URIError</p>
<p>&nbsp;</p>
<p>각각의 예약어들에 대한 설명은 다음 chapter 들에서 설명한다.</p>
<p>6. 식별자</p>
<p>식별자는 이름을 만들때 사용하는 단어이다. 자바스크립트에서 식별자는 변수나 함수의 이름을 명명할때 사용된다. 자바스크립트에서 식별자를 만들때는 다음의 규칙을 지켜야 한다.</p>
<p><ul ><li >특수문자는 '_'과 '$'만 사용 가능하다.</li><li >숫자 상수와 구별하기 위해 첫글자는 숫자로 시작할 수 없다.</li><li >공백문자를 표함할 수 없다.</li><li >예약어를 사용할 수 없다.</li></ul></p>
<p>&nbsp;</p>
<ol ><li ><p>// 변수 이름(식별자) 선언</p>
</li><li ><p>var&nbsp;jjdev;</p>
</li><li ><p>var&nbsp;JJDEV;</p>
</li><li ><p>var&nbsp;_jjdev;</p>
</li><li ><p>var&nbsp;$jjdev;</p>
</li><li ><p>var&nbsp;jjdev1004;</p>
</li><li ><p>&nbsp;</p>
</li><li ><p>// 잘못된 변수 이름(식별자) 선언</p>
</li><li ><p>var&nbsp;#jjdev;</p>
</li><li ><p>var&nbsp;1004jjdev;</p>
</li><li ><p>var&nbsp;jj dev;</p>
</li><li ><p>var&nbsp;if;</p>
</li><li ><p>var&nbsp;for;</p>
</li><li ><p>var&nbsp;function;</p>
</li><li ><p>var&nbsp;null;</p>
</li><li ><p>var&nbsp;true;</p>
</li></ol><p>7. 세미콜론</p>
<p>다른 프로그래밍 언어와 마찬가지로 자바스크립트에서 구문을 구분하기 위해 세미콜론을 사용한다. 자바스크립트에서는 구문의 끝에 줄바꿈 문자(엔터키)가 들어오면 세미콜론을 생략할 수 있으나 대부분의 언어가 구문의 끝에는 세미콜론을 사용하고 세미콜론 생략시 의도하지 않은 결과를 초래하는 경우도 있으니 생략하지 말자.(강좌에서 중괄호('{}')로 끝나는 구문에는 세미콜론을 생략해서 사용 한다)</p>
<p><ol ><li ><p>var&nbsp;x&nbsp;=&nbsp;1+2;</p>
</li><li ><p>alert('test');</p>
</li><li ><p>function&nbsp;myFun(){console.log(1);}</p>
</li><li ><p>myFun();</p>
</li></ol></p>
<p>※ 자바스크립트는 구문의 다음줄(엔터키)에 오는 공백이 아닌 문자를 해석할 수 없을 경우에 세미콜론으로 줄바꿈을 처리한다.</p>
<p>다음과 같이&nbsp;</p>
<p>var x</p>
<p>x = 3</p>
<p>으로 표기하면 vax x x는 var x x=3는 해석할 수 없기 때문에 var x; x=3 으로 해석한다.</p>
<p></p>

