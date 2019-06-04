---
layout: post
title: '[13] 연산자 - 5.논리 연산자'
author: 'ㅎ엘로이ㅎ'
categories: Programming-JavaScript
tags:
- Programming
- Language
- JavaScript
-
---


<script> location.href='https://cafe.naver.com/develoid/701981' ; </script>

<p><strong>1. 논리곱 &amp;&amp; (AND 논리연산자)</strong></p><table  height="40" bgcolor="#b7bbb5"    ><tbody><tr bgcolor="#ffffff"><td  ><p>좌변</p></td><td  ><p>우변&nbsp;</p></td><td  ><p>결과&nbsp;</p></td></tr><tr bgcolor="#ffffff"><td ><p>true</p></td><td ><p>true</p></td><td ><p>true</p></td></tr><tr bgcolor="#ffffff"><td ><p>true</p></td><td ><p>false</p></td><td ><p>false&nbsp;</p></td></tr><tr bgcolor="#ffffff"><td ><p>false</p></td><td ><p>true</p></td><td ><p>false</p></td></tr><tr bgcolor="#ffffff"><td ><p>false</p></td><td ><p>false</p></td><td ><p>false</p></td></tr></tbody></table><p>&amp;&amp; 연산자는 좌변의 값이 false값이면,우변의 값을 비교하지 않고 false값을 반환한다.</p><p>이와 같은 &amp;&amp;연산자의 특성을 이용하여 코드에서 if문을 대신하여 사용되기도 한다. 아래의&nbsp;두&nbsp;예제는 동일하게 실행된다.</p><p>ex)</p><p>var x = 10;</p><p>var y = 20;</p><p>if(x==y) {</p><p>&nbsp;&nbsp;&nbsp; myFun();&nbsp;// x==y가 true일때만 함수가 실행된다</p><p>}</p><p>var x = 10;</p><p>var y = 20;</p><p>(x==y) &amp;&amp; myFun();&nbsp;// x==y가 true일때만 함수가 실행된다</p><p><strong>2. 논리합 || (OR 논리연산자)</strong></p><table  height="40" bgcolor="#b7bbb5"    ><tbody><tr bgcolor="#ffffff"><td  ><p>좌변</p></td><td  ><p>우변&nbsp;</p></td><td  ><p>결과&nbsp;</p></td></tr><tr bgcolor="#ffffff"><td ><p>true</p></td><td ><p>true</p></td><td ><p>true</p></td></tr><tr bgcolor="#ffffff"><td ><p>true</p></td><td ><p>false</p></td><td ><p>true</p></td></tr><tr bgcolor="#ffffff"><td ><p>false</p></td><td ><p>true</p></td><td ><p>true</p></td></tr><tr bgcolor="#ffffff"><td ><p>false</p></td><td ><p>false</p></td><td ><p>false</p></td></tr></tbody></table><p>피연산자 값중 하나라도 true이면 true를 반환한다. 둘다 false이면 false를 반환한다.</p><p>|| 연산자는 좌변의 값이 true이면 우변의 값을 비교하지 않고 true값을 반환한다.</p><p><strong>3. ! (NOT 연산자)</strong></p><p>!는 단항 연산자로 피연산자 앞에 놓여 피연산자 불리언 값을 반전시킨다.</p><p>ex)</p><p>!true;&nbsp;// false</p><p>!false;&nbsp;// true</p><p></p>
