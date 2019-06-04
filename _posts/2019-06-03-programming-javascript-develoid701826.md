---
layout: post
title: '[07] 데이터 타입과 변수 - 5.객체타입과 변수'
author: 'ㅎ엘로이ㅎ'
categories: Programming-JavaScript
tags:
- Programming
- Language
- JavaScript
-
---


<script> location.href='https://cafe.naver.com/develoid/701826' ; </script>

<p><p></p><p><b>1. 객체 타입</b></p><p><b></p><p>자바스크립트의&nbsp;객체타입에는 객체, 배열, 함수가 있는데, 각각은 뒤에서 다시 설명한다. 여기서는 자바스크립트의 객체는 다른 데이터 타입의 복합적인 값(프로퍼티 값)을 가진다는 기본적인 것만 이해하자.</p><p>객체의 선언은 "{}"를 사용하고, 프로퍼티의 값은 &nbsp;"."연산자를 통해서 참조한다.</p><p><b></p><p>var obj;&nbsp;// 객체 선언</p><p>obj = {x:1,y:"test"};&nbsp;// &nbsp;객체 초기화</p><p>obj.x = "2";&nbsp;// 객체의 프로퍼티의 값을 변경</p><p>obj.y = "zeroDay";</p><p>console.log(obj.y);&nbsp;// 객체의 프로퍼티 값을 출력</p><p><b></p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcafeptthumb-phinf.pstatic.net%2F20140623_13%2Fzeroday7_1403487578809XWe1A_PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2014-06-23_%25BF%25C0%25C0%25FC_10.38.04.png%3Ftype%3Dw740%22&amp;type=cafe_wa740"><b></p><p><b></p><p><b></p><p><b>2. 변수</b></p><p><b></p><p>변수는 데이터 값을 저장할 공간의 이름을 의미한다. 자바스크립트에서는 변수를 사용하기 전에 변수 선언을 해야 한다. 변수는 다음과 같이 var 키워드를 이용하여 선언한다.</p><p><b></p><p>var x;</p><p>var y;</p><p><b></p><p>다음과 같이 여러개의 변수를 한번에 선언도 가능하다.</p><p><b></p><p>var x, y;</p><p><b></p><p>변수는 선언시 초기값을 설정하는것이 가능하다.</p><p><b></p><p>var x=1;</p><p><b></p><p>변수의 초기값이 설정되지 않으면 값이 설정될때까지 변수는 undefined타입이 되고 undefined값을 가진다.</p><p><b></p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcafeptthumb-phinf.pstatic.net%2F20140623_221%2Fzeroday7_1403486519591Hf7f0_PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2014-06-23_%25BF%25C0%25C0%25FC_10.21.30.png%3Ftype%3Dw740%22&amp;type=cafe_wa740"><b></p><p><b></p><p>* 자바스크립트에서는 var를 사용하여 변수를 선언하지 않고 사용이 가능하지만(선언되지 않고 사용될 수 있다), 이는 나쁜 습관이며 버그가 발생할 수도 있으니 항상 선언후 사용하자.</p><p><b></p><p><b></p><p><b>3. 변수의 유효범위</b></p><p><b></p><p>자바스크립트에는 전역적으로 사용가능한 전역변수와 함수 안에서 선언되고 함수 안에서만 사용가능한 지역변수가 있다. 함수의 매개변수도 그 함수안에서만 유효한 지역변수이다. 변수의 유효범위에 대한 자세한 설명과 예제는 함수를 설명하는 장에서 다시 설명한다.</p><p><b></p><p>* 많은 컴퓨터 언어들이 블록({})단위의 유효범위를 가지는데 자바스크립트는 함수단위의 유효범위를 가진다.</p><p><b></p><p>* 함수 유효 범위 안에서 변수 선언없이 사용하게 되면 자바스크립트의 엔진은 전역변수로 인식한다. 앞에서 말한 나쁜습관이며 버그의 원인이니 꼭 var를 이용하여 변수 선언후 사용하자. &nbsp;<p><p><b></p></p></p></p>
