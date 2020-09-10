---
layout: post
title: '[커뮤니티] [05] 데이터 타입과 변수 - 3.문자열'
author: 'ㅎ엘로이ㅎ'
categories: Programming-JavaScript
tags:
- Programming
- Language
- JavaScript
-
---


<script> location.href='https://cafe.naver.com/develoid/701822' ; </script>

<p>Overview</p>
<p>자바스크립트에서는 하나의 문자만을 나타내는 타입은 없다. 하나의 문자도 문자열로 표현한다.</p>
<p>자바스크립트의 문자열은 연속된 16비트 길이의 값으로 수정할 수 없는 유니코드를 사용한다. &nbsp;문자열 연산자나 메서드를 사용하면 원래 문자열이 변경되는 것이 아니고 변경된 새로운 문자열을 반환한다.</p>
<p>1. 문자열 상수</p>
<p>자바스크립트에서 문자열은 작은따옴표나 큰따옴표로 둘러싸서 표현한다. 작은따옴표가 큰따옴표 안에서 사용되면 그냥 단순 문자로 인식된다. 큰따옴표 역시 작은 따옴표 안에서 사용되면 단순 문자로 인식된다.</p>
<p>'abc'; //abc라는 문자열</p>
<p>"abc";</p>
<p>'pw=abc';</p>
<p>"pw=abc";</p>
<p>'pw="abc"';</p>
<p>"pw='abc'";</p>
<p>"I'am a person";</p>
<p>2. 이스케이프 문자(역슬래시와 같이 사용되는 문자)</p>
<p>이스케이프 문자은 특별한 목적을 위해 사용한다. 예를 들어 키보드에는 엔트키(줄바꿈)를 표현하기 위해 \n을 사용한다.</p>
<p>다음은 자바스크립트의 이스케이프 문자들중 일부를 표로 나타낸 것이다.</p>
<p><table  height="40" bgcolor="#b7bbb5"   ><tbody><tr bgcolor="#ffffff"><td  >&nbsp;이스케이프 문자</td><td  >&nbsp;표현하는 문자</td></tr><tr bgcolor="#ffffff"><td >&nbsp;\0</td><td >&nbsp;널문자</td></tr><tr bgcolor="#ffffff"><td >&nbsp;\ b</td><td >&nbsp;역스페이스</td></tr><tr bgcolor="#ffffff"><td >&nbsp;\t</td><td >&nbsp;수평탭</td></tr><tr bgcolor="#ffffff"><td >&nbsp;\n</td><td >&nbsp;줄바꿈</td></tr><tr bgcolor="#ffffff"><td >&nbsp;\"</td><td >&nbsp;큰따옴표</td></tr><tr bgcolor="#ffffff"><td >&nbsp;\'</td><td >&nbsp;작은따옴표</td></tr><tr bgcolor="#ffffff"><td >&nbsp;\\</td><td >&nbsp;역슬래시</td></tr><tr bgcolor="#ffffff"><td >&nbsp;\x</td><td >&nbsp;16진수</td></tr><tr bgcolor="#ffffff"><td >&nbsp;\u</td><td >&nbsp;유니코드문자</td></tr></tbody></table></p>
<p>3. 문자열 관련 연산자와 프로퍼티, 메서드</p>
<p>① + 연산자</p>
<p>숫자에 +연산자를 적용하면 숫자값들이 더해진다. 문자열에 사용시에는 문자값들이 이어진다.</p>
<p>ex)</p>
<p>var msg = "Hello"+"zeroDay";</p>
<p>② length 프로퍼티</p>
<p>문자열의 길이를 알고 싶다면 length 프로퍼티를 사용하면 된다.</p>
<p>ex)</p>
<p>'hi'.length; // 2</p>
<p>var str = 'hello';</p>
<p>str.length; // 5</p>
<p>③ 문자열 method</p>
<p>자바스크립트에는 문자열을 다루는 다양한 메서드가 있다.</p>
<p>각 메서드에 대한 설명은&nbsp;<a href="http://www.w3schools.com/jsref/jsref_obj_string.asp">http://www.w3schools.com/jsref/jsref_obj_string.asp</a>를 참조&nbsp;</p>
<p>charAt();</p>
<p>charCodeAt();&nbsp;</p>
<p>concat();</p>
<p>fromCharCode();</p>
<p>indexOf();</p>
<p>lastIndexOf();</p>
<p>localeCompare();</p>
<p>match();</p>
<p>replace();</p>
<p>search();</p>
<p>slice();</p>
<p>split();</p>
<p>substr();</p>
<p>substring();</p>
<p>toLowerCase();</p>
<p>toUpperCase();</p>
<p>toString();</p>
<p>trim();</p>
<p>valueOf();</p>
