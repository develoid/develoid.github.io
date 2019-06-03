---
layout: post
title: '[10] 연산자 - 2.산술 연산자'
author: 'ㅎ엘로이ㅎ'
categories: Programming-JavaScript
tags:
- Programming
- Language
- JavaScript
-
---


<script> location.href='https://cafe.naver.com/develoid/701833' ; </script>


















						<b><span>Overview</span></b><div><b></div><div><span>기본 산술 연산자는 *(곱셉), /(나눗셈), %(나머지), +(덧셈), -(뺄셈)이 있다. 자바스크립트에서 /(나눗셈) 연사의 경우 "정수/정수" 의 경우에도 부동수수점으로 취급되어 결과값이 정수가 아닌 부동소수점 값이 되고, 모든 값을 0으로 나눗값은 양or음의 무한대 값이 되며, 0/0의 결과값은 NaN이 된다.&nbsp;</span></div><div><span>%(나머지) 연산는&nbsp;</span><span>&nbsp;</span><span>피연산자로&nbsp;</span><span>정수와 부동소수점 값이 올수 있지만, 일반적으로 정수가 많이 온다.</span></div><div><span><b></span></div><div><span><b></span></div><div><span><b><span>1. +(덧셈) 연산자</span></b></span></div><div><span><b></span></div><div><span>두개의 피연산자가 숫자인 경우 더하기를, 두개의 피연산자가 문자열인 경우는 이어 붙이기를 한다. 만일 하나의 피연산자만이 문자열이거나 문자열로 바꿀수 있는 객체라면 다른 피연산자를 문자열로 변환하여 이어 붙인다.</span></div><div><b></div><div><span>1+2;&nbsp;</span><span>// 3</span></div><div><span>"a"+"b";&nbsp;</span><span>// ab</span></div><div><span>1+"a";&nbsp;</span><span>// 1a</span></div><div><span>"1"+2;&nbsp;</span><span>// 12</span></div><div><b></div><div><b></div><div><b><span>2. 단항 연산자</span></b></div><div><b></div><div><span>① + : 양수</span><b></div><div><span>② - : 음수</span><b></div><div><span>③ ++ : 피연산자의 값을 1증가</span><b></div><div><span>④ -- : 피연산자의 값을 1감소</span><b></div><div><b></div><div><span>++와 --는 연산자가 피연산자의 앞에서 사용되는 경우와 뒤에서 사용되는 경우에 따라 연산방식이 다르다.&nbsp;</span><span>앞에서 사용되는 경우를 전치, 뒤에서 사용되는 경우를 후치라 하는데, 전치의 경우 먼저 1증가(감소)되고 표현식을 결과값을 내놓고 후치의 경우는 표현식의 결과값을 낸 뒤에 1증가(감소) 한다.&nbsp;</span></div><div><b></div><div><span>ex)</span></div><div><span>// 실행결과는 x=2, y=2 가 된다.</span></div><div><span>var x=1;</span></div><div><span>var y = ++x;</span></div><div><b></div><div><span>// 실행 결과는 x=2, y=1 이 된다.</span></div><div><div><span>var x=1;</span></div><div><span>var y = x++;</span></div></div><div><div><p><b></p><div><b></div></div></div>
