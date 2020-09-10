---
layout: post
title: '[커뮤니티] [12] 연산자 - 4.관계 연산자'
author: 'ㅎ엘로이ㅎ'
categories: Programming-JavaScript
tags:
- Programming
- Language
- JavaScript
-
---


<script> location.href='https://cafe.naver.com/develoid/701886' ; </script>

<p>Overview</p>
<p>관계연산자는 두 피 연산자의 값의 관계(같은지, 큰지, 작은지 등)를 검사하여 불리언 값(true/flase)를 반환한다.</p>
<p>1. == 연산자와 === 연산자</p>
<p>== 연산자는 두 피연산자 값이 같으면 true를 반환하는 비교 연산자이고, === 연산자는 값뿐만 아니라 타입(자료형)까지 일치하여야만 true를 반환하는 일치 연산자이다.</p>
<p>ex)</p>
<p>123 == "123";&nbsp;// true</p>
<p>0 == false;&nbsp;// true</p>
<p>123 === "123";&nbsp;// false</p>
<p>0 === false;&nbsp;// false</p>
<p>2. != 연산자와 !== 연산자</p>
<p>!= 연산자는 두 피연산자 값이 일치하지 않으면 true를 반환하는 비교 연산자이고,&nbsp;!== 두값과 타입까지 일치하지 않으면 true를 리턴하는 일치 연산자이다.</p>
<p>3.&nbsp;&gt; 연산자</p>
<p>좌변의 피연산자 값이 우변의 값보다 크면 true를 반환, 그렇지 않으면 false를 반환한다.</p>
<p>4. &lt; 연산자</p>
<p>좌변의 피연산자 값이 우변의 값보다 작으면 true를 반환, 그렇지 않으면 false를 반환한다.</p>
<p>5. &gt;= 연산자</p>
<p>좌변의 피연산자 값이 우변의 값보다 크거나 같으면&nbsp;true를 반환, 그렇지 않으면 false를 반환한다.</p>
<p>6. &lt;= 연산자</p>
<p>좌변의 피연산자 값이 우변의 값보다&nbsp;작거나 같으면&nbsp;true를 반환, 그렇지 않으면 false를 반환한다.</p>
<p>5. 관계형 연산자</p>
<p>① in 연산자</p>
<p>좌변의 문자열 값이 우변의 객체의 속성이름에 존재하는 경우 true를 반환, 그렇지 않으면 false를 반환한다.</p>
<p>좌변의 인덱스(문자or숫자) 값이 우변의 배열에 존재하는 경우 true를 반환, 그렇지 않으면 false를 반환한다.</p>
<p>ex)</p>
<p>var obj={x:1,y:2};</p>
<p>"x" in obj;&nbsp;// true</p>
<p>"z" int obj;&nbsp;// fase</p>
<p>var arr={1,2}</p>
<p>0 in arr;&nbsp;// true</p>
<p>"1" in arr;&nbsp;// true</p>
<p>2&nbsp;in arr;&nbsp;// false 배열의 2요소(3번째)가 없기 때문에 false 반환</p>
<p>② intanceof 연산자</p>
<p>좌변의 객체값(인스턴스)가 우변의 객체(인스턴스)일 경우 true를 반환, 그렇지 않으면 false를 반환한다.</p>
<p>var d = new Date();</p>
<p>d instanceof Date;&nbsp;// true</p>
<p>d instanceof Object;&nbsp;// true</p>
<p>d instanceof Number;&nbsp;// false</p>
<p></p>
