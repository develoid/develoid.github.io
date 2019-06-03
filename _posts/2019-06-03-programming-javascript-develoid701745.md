---
layout: post
title: '[04] 데이터 타입과 변수 - 2.Infinity와 NaN'
author: 'ㅎ엘로이ㅎ'
categories: Programming-JavaScript
tags:
- Programming
- Language
- JavaScript
-
---


<script> location.href='https://cafe.naver.com/develoid/701745' ; </script>


















						<div><b><span>Overview</span></b></div><div><div><b><b></b></div><div><span><b>자바스크립트는 양의 무한대와 숫자가 아닌 값을 표현하기 위해 &nbsp;Infinity와 NaN이라는 전역변수가 정의되어 있다.</b></span></div><div><b><b></b></div><div><b><span>1. Infinity</span></b></div></div><div><b><b></b></div><div><span><b>자바스크립트는 산술연산시 발생하는 오버플로, 언더플로, 0으로 나누는 것에 대해서 에러를 발생시키지 않는다.</b></span></div><div><span><b>표현가능한 가장 큰수나 가장 작은수의 범위를 벋어나는 오버플로 값에 대해서는 Infinity 나 -Infinity로 표현한다.</b></span></div><div><b><b></b></div><div><span><b>표현가능한 가장 0에 가까운 값보다 더 0에 가까운 &nbsp;언더플로 값에 대해서는 0으로 표현한다.</b></span></div><div><b><b></b></div><div><b><span>0으로 나누는 연산에 대해서도 에러가 아닌&nbsp;</span><span>&nbsp;</span><span>Infinity 나 -Infinity가 반환된다.</span></b></div><div><span><b><b></b></span></div><div><b><b></b></div><div><b><span>2. NaN</span></b></div><div><b><b></b></div><div><span><b>자바스크립트는 숫자 산술연산에서 나오는 숫자가 아닌 값에 대해서는 NaN이라는 전역변수를 사용한다.</b></span></div><div><span><b>0을 0으로 나누게 되면 NaN이 반환된다.</b></span></div><div><span><b>NaN 전역변수는 다른 값(변수)과 비교할 수 없다. "x==NaN"같은 표현을 사용할 수 없다. 대신 자바스크립트에서는 NaN값을 비교하기 위해서 isNaN()같은 전역 함수를 제공한다. isNaN()함수는 들어오는 매개변수값이 숫자가 아니면(NaN, 문자열, 객체....) 참값을 반환한다. 이와 유사한 isFinite()라는 전역함수도 있다. 전역함수의 사용방법에 대해서는 다른장에서 자세히 다룬다.&nbsp;</b></span></div><div><span><b><b></b></span></div><div><b><b></b></div><div><b><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcafeptthumb-phinf.pstatic.net%2F20140620_181%2Fzeroday7_1403224776650DhSkc_PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2014-06-20_%25BF%25C0%25C0%25FC_9.39.04.png%3Ftype%3Dw740%22&amp;type=cafe_wa740"></b><div><div><b></div><div><b>정리하는것도 일이네요...ㄷㄷ</b></div><div><b><b></b></div><div><b></div></div></div>
