---
layout: post
title: '[08] 표현식'
author: 'ㅎ엘로이ㅎ'
categories: Programming-JavaScript
tags:
- Programming
- Language
- JavaScript
-
---


<script> location.href='https://cafe.naver.com/develoid/701829' ; </script>

<b>Overview</b><p>자바스크립트의 표현식은 인터프리터를 통해 값으로 평가되거나 값을 반환하는(연산자,함수호출) 자바스크립트의 구문이다. (인터프리터 : 원시언어로 쓰여진 문장 하나씩 읽어서 기계어로 변환하여 실행하는 방식)</p><p><b>1. 원시 표현식</b></p><p>상수나 변수 참조, 예약어(키워드) 같은 다른 표현식을 포함하지 않는 간단한 표현식을 말한다.</p><p><strong>① 상수(리터럴)</strong></p><p>10&nbsp;// 숫자상수</p><p>1.2&nbsp;// 숫자 상수</p><p>"zeroDay"&nbsp;// 문자열 상수</p><p>'jjdev'&nbsp;// 문자열 상수</p><p><strong>② 예약어(키워드)</strong></p><p>true</p><p>false</p><p>null</p><p>this&nbsp;// 현재 객체를 나타내는 예약어</p><p><strong>③ 변수</strong></p><p>x</p><p>undifined&nbsp;// 아무값도 아님을 나타내는 전역변수</p><p><b>2. 복합표현식</b></p><p>배열, 객체, 함수등 &nbsp;원시 표현식의 결합된 형태나 연산자를 사용하여 결합되는 표현을 말한다.&nbsp;</p><p><strong>① 배열 표현식</strong>&nbsp;: 대괄호안에 쉼표로 구분한다.</p><p>[]</p><p>[1,2,3]</p><p>["zeroday", "jjdev"]</p><p>[[1,2,3],[4,5,6]]</p><p>[1,,,3]&nbsp;// 두개의 값은 초기화 되진 않은 형태로 배열의 길이는(lenght) 4이다</p><p><strong>② 객체 표현식</strong>&nbsp;: 중괄호 안에 속성(프로퍼티) 이름과 콜론(:)을 사용하고 속성의 구분에는 쉼표를 사용한다.</p><p>{}</p><p>{x:1 , y:2}</p><p>{h{left:1,right:2}, v{top:1, bottom:2}}&nbsp;// 객체의 중첩</p><p><strong>③ 함수 표현식</strong>&nbsp;: function 키워드와 괄호(쉼표로 구분한 매개변수 목록), 중괄호(자바스크립트 코드)로 표현한다.</p><p>function(x,y) {return x+y;}&nbsp;// 입력받은 두개의 인자(매객변수 값)의 합을 리턴한다</p><p><strong>④ 함수 호출 표현식</strong>&nbsp;: 함수를 호출(실행시키는)하는 문법, 함수이름과 괄호(인자 목록)를 연결하여 표현, 함수가 리턴값을 반환하지 않는 경우는 표현값이 undefined가 된다.</p><p>f(0)</p><p>add(1,2)</p><p><strong>⑤ 객체의 속성(프로퍼티) 접근 표현식</strong>&nbsp;: 점(.)이나 대괄호([])를 사용하여 속성을 접근한다.</p><p>// 예제 객체 선언</p><p>&nbsp;var obj = {</p><b>age : 20,</blockquote><b>name : jjdev,</blockquote><b>hobby : ["여행","독서"],</blockquote><b>move : function(){alert("move...")}</blockquote><p>}</p><p>// 속성 접근 표현식</p><p>obj.age&nbsp;// 20</p><p>obj["age"]&nbsp;// 20</p><p>obj.name&nbsp;// jjdev</p><p>obj.hobby[0]&nbsp;// 여행</p><p>obj.move()</p><p><strong>⑥ 객체 생성 표현식</strong>&nbsp;: new키워드와 생성자 함수를 사용하여 객체를 생성하고 속성을 초기화 한다.</p><p>new Object()</p><p>new Person("jjdev",20)</p><p>⑦ 연산자 표현식 : 복합 표현식을 만드는 가장 쉬원 방법은 연산자를 사용하는 것이다. 한개 이상의 피연산자들의 값들을 결합하여 새로운 값을 반환한다. 연산자들에 대한 자세한 설명은 다음장에 다룬다.</p><p>1+2</p><p>x*y&nbsp;// *는 곱하기 연산자다</p>
