---
layout: post
title: '[03] 데이터 타입과 변수 - 1.숫자'
author: 'ㅎ엘로이ㅎ'
categories: Programming-JavaScript
tags:
- Programming
- Language
- JavaScript
-
---


<script> location.href='https://cafe.naver.com/develoid/701739' ; </script>

Overview<p>프로그래밍 언어에서 다룰 수 있는 값의 종류를&nbsp;데이터 타입이라고 한다. 프로그램에서 값을 재활용할 필요가 있을 때는&nbsp;변수에 값을 저장(할당)한다.&nbsp;변수는 값이 저장되는 공간의 이름으로 값을 참조하고자 할때 사용한다.</p>
<p>자바스크립에서 사용하는 데이터 타입에는 &nbsp;기본타입(숫자, 문자열, 불리언, undefined)과&nbsp;객체타입(객체, 배열, 함수)이 있다.</p>
<p>1. 숫자</p>
<p>자바스크립트는 다른 프로그래밍 언어들과는 다르게 정수 값과 실수 값을 구분하지 않는다. 자바스크립트에서는 모든 수를 64비트 실수(-2의53승 ~ +2의53승-1)로 표현한다.&nbsp;</p>
<p>① 정수에서 사용되는 값(상수)</p>
<p>자바스크립트에서는 10진수, 16진수 상수를 사용할 수 있다. (8진수 사용은 표준에서는 명시적으로 금지하고 있다)</p>
<p>16진수 상수의 경우는 &nbsp;'0x'나 '0X'로 시작하면 된다.(대소문자 구분없이 사용가능)</p>
<p>※&nbsp;16진수를 10진수로 변환</p>
<p>A:10, B:11, C:12, D:13, E:14, F:15</p>
<p>0XFF -&gt; 15*16(16의승) + 15*1 = 255</p>
<p>0XA7B -&gt; 10*256(16의2승) + 7*16 + 11*1 = &nbsp;2683</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcafeptthumb-phinf.pstatic.net%2F20140529_73%2Fzeroday7_14013231688328UHhi_PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2014-05-29_%25BF%25C0%25C0%25FC_9.25.46.png%3Ftype%3Dw740%22&amp;type=cafe_wa740"></p>
<p>※ 크롬 콘솔창 사용시 함수호출시 출력되는 undefined는 함수의 리턴값이 없다는 의미이다.</p>
<p>② 실수에서 사용되는 값(상수) - 부동소수점 방식</p>
<p>자바스크립트에서 실수는 정수 부분과 소수점, 소수점 이하 부분으로 나누어 표현하는 부동소수점 방식을 사용한다. 부동소수점 상수는 지수 표기법 표현도 가능하다.</p>
<p>지수표기법으로 실수 표현</p>
<p>100 -&gt; 1e2 or 1E2 -&gt; 1*10의2승 = 100</p>
<p>0.01 -&gt; 1e-2 or 1E-2 -&gt; 1*10의-2승 = 0.01</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcafeptthumb-phinf.pstatic.net%2F20140529_108%2Fzeroday7_1401326347469xT1oX_PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2014-05-29_%25BF%25C0%25C0%25FC_10.18.46.png%3Ftype%3Dw740%22&amp;type=cafe_wa740"></p>
<p></p>

