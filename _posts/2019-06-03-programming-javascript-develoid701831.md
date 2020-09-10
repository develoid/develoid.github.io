---
layout: post
title: '[커뮤니티] [09] 연산자 - 1.연산자의 우선순위'
author: 'ㅎ엘로이ㅎ'
categories: Programming-JavaScript
tags:
- Programming
- Language
- JavaScript
-
---


<script> location.href='https://cafe.naver.com/develoid/701831' ; </script>

Overview<p>연산자에는 수식 표현식, 비교 표현식, 논리 표현식, 할당 표현식 등이 있다. 대부분의 연산자는 +,=,&amp; 와 같이 부호로 표현되지만, typeof, instanceof와 같이 간략한 키워드로 표현하는것도 있다.</p>
<p>각각의 연산자에 대한 설명은 다음장에서 한다.</p>
<p>1. 연산자의 우선순위</p>
<p>연산자의 연산순위를 이해한다고 해도 코드를 만들때는&nbsp;괄호를 사용해 연산순서를 명시적으로 표현하는 것이 가독성에 좋다.</p>
<p>* 속성접근(.)이나 함수/메서드 호출식은 우선순위가 가장 높다.</p>
<p>ex)&nbsp;</p>
<p>++a.x; // a.x의 값을 증감</p>
<p>typeof a.myFunction(); // 메소드 호출결과의 타입을 반환</p>
<p><table  height="40" bgcolor="#b7bbb5"    ><tbody><tr bgcolor="#ffffff"><td  >우선<a  target="_blank"></a>순위</td><td  >연산자</td><td  >역활, 설명</td><td  >읽는방향</td><td  >피연산자 개수</td><td  >반환 타입</td></tr><tr bgcolor="#ffffff"><td >1</td><td ><p>++</p>
<p>--</p>
<p>-</p>
<p>+</p>
<p>~</p>
<p>!</p>
<p>delete</p>
<p>typeof</p>
<p>void</p>
</td><td >전치or후치증가전치or후치감소음수양수비트(NOT)연산논리(NOT)연산속성제거타입반환undefined반환&nbsp;</td><td >오른쪽부터&nbsp;</td><td >1</td><td >숫자숫자숫자숫자정수불리언불리언문자열undefined&nbsp;</td></tr><tr bgcolor="#ffffff"><td >2</td><td ><p>*</p>
<p>/</p>
<p>%</p>
</td><td >곱셈나눗셈나머지</td><td >왼쪽부터</td><td >2</td><td >숫자&nbsp;</td></tr><tr bgcolor="#ffffff"><td >3</td><td ><p>+</p>
<p>-</p>
<p>+</p>
</td><td >&nbsp;덧셈뺄셈문자열 연결</td><td >왼쪽부터</td><td >2</td><td >숫자숫자문자열&nbsp;</td></tr><tr bgcolor="#ffffff"><td >4</td><td ><p>&nbsp;&lt;&lt;&nbsp;</p>
<p>&gt;&gt;</p>
<p>&gt;&gt;&gt;</p>
</td><td >비트이동비트이동(부호비트제외)비트이동(부호비트포함)</td><td >왼쪽부터</td><td >2</td><td >숫자</td></tr><tr bgcolor="#ffffff"><td >5</td><td ><p>&lt;</p>
<p>&lt;</p>
<p>&lt;=</p>
<p>&lt;=</p>
<p>&gt;</p>
<p>&gt;</p>
<p>&gt;=</p>
<p>&gt;=</p>
<p>instanceof</p>
<p>in</p>
</td><td >숫자비교문자비교숫자비교문자비교숫자비교문자비교숫자비교문자비교객체타입확인속성확인&nbsp;</td><td >&nbsp;왼쪽부터</td><td >2</td><td >불리언</td></tr><tr bgcolor="#ffffff"><td >6</td><td ><p>==</p>
<p>!=</p>
<p>===</p>
<p>!==</p>
</td><td >같다같지않다타입까지비교타입까지비교</td><td >왼쪽부터</td><td >2</td><td >불리언&nbsp;</td></tr><tr bgcolor="#ffffff"><td >7</td><td >&amp;</td><td >비트AND</td><td >왼쪽부터&nbsp;</td><td >2</td><td >숫자&nbsp;</td></tr><tr bgcolor="#ffffff"><td >8</td><td >·</td><td >비트XOR</td><td >왼쪽부터</td><td >2</td><td >숫자</td></tr><tr bgcolor="#ffffff"><td >9</td><td >|</td><td >비트OR</td><td >왼쪽부터</td><td >2</td><td >숫자&nbsp;</td></tr><tr bgcolor="#ffffff"><td >10</td><td >&amp;&amp;</td><td >논리AND</td><td >왼쪽부터</td><td >2</td><td >타입무방</td></tr><tr bgcolor="#ffffff"><td >11</td><td >||</td><td >논리OR</td><td >왼쪽부터</td><td >2</td><td >타입무방</td></tr><tr bgcolor="#ffffff"><td >12</td><td >?:</td><td >3항조건식</td><td >오른쫀부터</td><td >3</td><td >타입무방</td></tr><tr bgcolor="#ffffff"><td >13</td><td ><p>=</p>
<p>*=</p>
<p>/=</p>
<p>%=</p>
<p>+=</p>
<p>-=</p>
<p>&amp;=</p>
<p>·=</p>
<p>|=</p>
<p>&lt;&lt;=</p>
<p>&gt;&gt;=</p>
<p>&gt;&gt;&gt;=</p>
</td><td >대입(할당)</td><td >&nbsp;오른쪽부터</td><td >2</td><td >타입무방</td></tr><tr bgcolor="#ffffff"><td >14</td><td >.</td><td >쉼표연산자&nbsp;</td><td >&nbsp;왼쪽부터</td><td >&nbsp;2</td><td >타입무방</td></tr></tbody></table></p>
