---
layout: post
title: '[05] 데이터 타입과 변수 - 3.문자열'
author: 'ㅎ엘로이ㅎ'
categories: Programming-JavaScript
tags:
- Programming
- Language
- JavaScript
-
---


<script> location.href='https://cafe.naver.com/develoid/701822' ; </script>


















						<div><b><span>Overview</span></b></div><div><b></div><div><span>자바스크립트에서는 하나의 문자만을 나타내는 타입은 없다. 하나의 문자도 문자열로 표현한다.</span></div><div><span>자바스크립트의 문자열은 연속된 16비트 길이의 값으로 수정할 수 없는 유니코드를 사용한다. &nbsp;</span><span>문자열 연산자나 메서드를 사용하면 원래 문자열이 변경되는 것이 아니고 변경된 새로운 문자열을 반환한다.</span></div><div><b></div><div><b></div><div><b><span>1. 문자열 상수</span></b></div><div><b></div><div><span>자바스크립트에서 문자열은 작은따옴표나 큰따옴표로 둘러싸서 표현한다. 작은따옴표가 큰따옴표 안에서 사용되면 그냥 단순 문자로 인식된다. 큰따옴표 역시 작은 따옴표 안에서 사용되면 단순 문자로 인식된다.</span></div><div><b></div><div><span>'abc'; //abc라는 문자열</span></div><div><span>"abc";</span></div><div><span>'pw=abc';</span></div><div><span>"pw=abc";</span></div><div><span>'pw="abc"';</span></div><div><span>"pw='abc'";</span></div><div><span>"I'am a person";</span></div><div><b></div><div><b></div><div><b><span>2. 이스케이프 문자(역슬래시와 같이 사용되는 문자)</span></b></div><div><b></div><div><span>이스케이프 문자은 특별한 목적을 위해 사용한다. 예를 들어 키보드에는 엔트키(줄바꿈)를 표현하기 위해 \n을 사용한다.</span></div><div><span>다음은 자바스크립트의 이스케이프 문자들중 일부를 표로 나타낸 것이다.</span></div><div><b></div><div><table width="673" height="40" bgcolor="#b7bbb5" border="0" cellspacing="1" cellpadding="1"><tbody><tr bgcolor="#ffffff"><td width="336" style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;이스케이프 문자</span></td><td width="336" style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;표현하는 문자</span></td></tr><tr bgcolor="#ffffff"><td style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;\0</span></td><td style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;널문자</span></td></tr><tr bgcolor="#ffffff"><td style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;\ b</span></td><td style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;역스페이스</span></td></tr><tr bgcolor="#ffffff"><td style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;\t</span></td><td style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;수평탭</span></td></tr><tr bgcolor="#ffffff"><td style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;\n</span></td><td style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;줄바꿈</span></td></tr><tr bgcolor="#ffffff"><td style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;\"</span></td><td style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;큰따옴표</span></td></tr><tr bgcolor="#ffffff"><td style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;\'</span></td><td style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;작은따옴표</span></td></tr><tr bgcolor="#ffffff"><td style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;\\</span></td><td style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;역슬래시</span></td></tr><tr bgcolor="#ffffff"><td style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;\x</span></td><td style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;16진수</span></td></tr><tr bgcolor="#ffffff"><td style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;\u</span></td><td style="font-family: 돋움, dotum, Helvetica, sans-serif; font-size: 10pt; color: rgb(32, 32, 32);"><span>&nbsp;유니코드문자</span></td></tr></tbody></table><b></div><div><b></div><div><b><span>3. 문자열 관련 연산자와 프로퍼티, 메서드</span></b></div><div><b></div><div><b><span>① + 연산자</span></b><b></div><div><b></div><div><span>숫자에 +연산자를 적용하면 숫자값들이 더해진다. 문자열에 사용시에는 문자값들이 이어진다.</span></div><div><span>ex)</span></div><div><span>var msg = "Hello"+"zeroDay";</span></div><div><b></div><div><b><span>② length 프로퍼티</span></b><b></div><div><b></div><div><span>문자열의 길이를 알고 싶다면 length 프로퍼티를 사용하면 된다.</span></div><div><span>ex)</span></div><div><span>'hi'.length; // 2</span></div><div><span>var str = 'hello';</span></div><div><span>str.length; // 5</span></div><div><b></div><div><b><span>③ 문자열 method</span></b><b></div><div><b></div><div><span>자바스크립트에는 문자열을 다루는 다양한 메서드가 있다.</span></div><div><span>각 메서드에 대한 설명은&nbsp;</span><a href="http://www.w3schools.com/jsref/jsref_obj_string.asp"><span>http://www.w3schools.com/jsref/jsref_obj_string.asp</span></a><span>를 참조&nbsp;</span></div><div><b></div><div><div><span>charAt();</span></div><div><span>charCodeAt();&nbsp;</span></div><div><span>concat();</span></div><div><span>fromCharCode();</span></div><div><span>indexOf();</span></div><div><span>lastIndexOf();</span></div><div><span>localeCompare();</span></div><div><span>match();</span></div><div><span>replace();</span></div><div><span>search();</span></div><div><span>slice();</span></div><div><span>split();</span></div><div><span>substr();</span></div><div><span>substring();</span></div><div><span>toLowerCase();</span></div><div><span>toUpperCase();</span></div><div><span>toString();</span></div><div><span>trim();</span></div><div><span>valueOf();<div><p><b></p></div></span></div></div>
