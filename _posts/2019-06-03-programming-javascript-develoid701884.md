---
layout: post
title: '[11] 연산자 - 3.비트연산자'
author: 'ㅎ엘로이ㅎ'
categories: Programming-JavaScript
tags:
- Programming
- Language
- JavaScript
-
---


<script> location.href='https://cafe.naver.com/develoid/701884' ; </script>

<p><strong><span>Overview</span></strong></p><p><b></p><p><span>2진수를 조작하는 사용되는 연산자들로 최종적으로는&nbsp;결과값으로 숫자 값을 반환한다. 자바스크립트에서는 잘 사용되지 않는다.</span></p><p><span>2진수 값을 불리언값(1:true, 0:false)으로&nbsp;&nbsp;취급하여 연산하는 AND(&amp;), OR(|), XOR(^), NOT(~)와 32비트 정수의 비트를 이동시키는데&nbsp;사용되는 쉬프트 연산자(&lt;&lt;, &gt;&gt;, &gt;&gt;&gt;)가 있다. 쉬프트 연산자의 왼쪽 피연산자는 32비트 정수가&nbsp;위치하고 연산자의 오른쪽 피연산자는&nbsp;0~31값이어야 한다.(32비트 정수를 이동시키는 수가 위치해야 하므로)&nbsp;</span></p><p><b></p><p><b></p><p><strong><span>1. AND(&amp;) 연산자</span></strong></p><p><b></p><p><span>두 2진수(정수)의 개별 비트값을&nbsp;불리언값(1:true, 0:false)으로&nbsp;&nbsp;취급하여 AND연산을 수행</span><b></p><p><b></p><p><b></p><p><strong><span>2. OR(|) 연산자</span></strong></p><p><b></p><p><span>두 2진수의 개별 비트값을&nbsp;불리언값(1:true, 0:false)으로&nbsp;&nbsp;취급하여 OR연산을 수행</span><b></p><p><b></p><p><b></p><p><strong><span>3. XOR(^) 연산자</span></strong></p><p><b></p><p><span>두 2진수의 개별 비트값을&nbsp;불리언값(1:true, 0:false)으로&nbsp;&nbsp;취급하여 XOR연산(배타적 불리언)을 수행</span></p><p><b></p><p><b></p><p><strong><span>4. NOT(~) 연산자</span></strong></p><p><b></p><p><span>단항 연산자로 피연자인 2진수의 비트를 반전 시킨다. 부호비트도 반전 되므로 부호도 바뀐다.</span></p><p><b></p><p><b></p><p><strong><span>5. 비트를 왼쪽 이동(&lt;&lt;)</span></strong></p><p><b></p><p><span>모든 비트를 왼쪽으로 오른쪽 피연산자 수만큼 이동시킨다. 이동시키면서 새로 채워지는 비트는 0으로 채워쥐고 32비트를 넘치는 비트는 잘려지게 된다. 2진수 값을 1만큼(한자리를) 왼쪽으로 이동시키는 것은 2를 곱하는 것과 같다.</span></p><p><b></p><p><span>ex)</span></p><p><span>3&lt;&lt;1 // 6</span></p><p><span>3&lt;&lt;2 // 12</span></p><p><span>3&lt;&lt;3 // 24</span></p><p><b></p><p><b></p><p><strong><span>6. 비트를&nbsp;오른쪽 이동(&gt;&gt;)</span></strong></p><p><b></p><p><span>오른쪽 피연산자 수만큼 비트를 오른쪽으로 이동시킨다. 새로 채워지는 비트는 왼쪽피연자가 양수이면 0, 음수이면 1로 채워진다. 2진수 값을 1만큼(한자리를) 오른쪽으로 이동시키는 것은 2를 나눈는 것과 같다.</span></p><p><b></p><p><b></p><p><strong><span>7. 맨앞 부호비트를 0으로 채우면서 나머지 비트를 오른쪽으로 이동(&gt;&gt;&gt;)</span></strong></p><p><b></p><p><span>&gt;&gt;연산자와 동일하나 맨앞 부호비트를 0으로 채우고 오른쪽 피연산자 수만큼 비트를 이동시킨다.</span></p><div><p><b></p></div><p></p>
