---
layout: post
title: '[커뮤니티] C언어 기초정리 - 데이터형과 변수'
author: '시류아'
categories: Programming-C
tags:
- Programming
- Language
- C
-
---


<script> location.href='https://cafe.naver.com/develoid/701329' ; </script>

<p><p>본 글의 내용은 제가 이전에 교육 낙후 지역 학생들을 위해서 오프라인에서 진행한 재능기부 강좌 중에서 블로그로 공개한 부분입니다.</p>
<p>블로그 포스팅을 그대로 가져오다보니, 경어체가 아닙니다. 양해부탁드립니다.</p>
</p>
<p>  <p>   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfOTMg%2FMDAxNDg0Njk4NTIxMjc4.GU38RASWW95bbcut6pm-45toE7QryNOHLTTs5v_4G2kg.r6TOycjoP5c7wEGvKlyarIyw6BesLFg2bQymoFqPizMg.PNG.searphiel9%2Fc.png%22&amp;type=cafe_wa740">  </p>
 </p>
 <p>  <p>   <p>   C언어 기초정리   데이터형과 변수  </p>
  </p>
 </p>
 <p>  <p>변수란 말 그대로 변하는 수이다. 특정한 값을 가지고 사용에 따라서 변하는 수이다. 변수를 사용하기 위해서는 이러한 변수가 있다고 정의를 해주어야되며, 이때 변수 앞에 오는 것은 데이터형이다. 데이터형은 이 변수의 크기를 나타낸다.</p>
 </p>
 <p>  <p>   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMTg2%2FMDAxNDg0Njk4NjE1OTg2.CBsUQIAIwWZmV3hMIHOUsDCEh-F8cQNeK0co3JNmaK4g.WNyiRhynwJRnxKIq7bBvf4f83WQP6ouwvnrs-qhaLGAg.PNG.searphiel9%2F2.png%22&amp;type=cafe_wa740">  </p>
 </p>
 <p>  <p>   <p>   int&nbsp;Value&nbsp;=&nbsp;0;  </p>
  </p>
 </p>
 <p>  <p>변수의 종류에는 전역변수(Global Value), 지역변수(Local Value)가 있다. 전역변수는 함수 밖에 정의 되어있어, 함수에 관계 없이 어디든 사용 할 수 있는 함수이며, 지역변수는 함수 내부에 정의되어있어 정의 되어있는 함수 내에서만 사용 가능하며 그 이외엔 사용 할 수 없는 변수이다.</p>
 </p>
 <p>  <p>   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMTE5%2FMDAxNDg0Njk4NjcwNjE2.WWB48pTJ80GZyFy_5iB0d18G1bA2w4BTkXIwtK7IApMg.w10zpBzN8opUnoBV9KgY7hWk1AdyDOR7bBj20c9txd8g.PNG.searphiel9%2F3.png%22&amp;type=cafe_wa740">  </p>
 </p>
 <p>  <p>   <p>   int&nbsp;global&nbsp;=&nbsp;0;&nbsp;//&nbsp;전역변수   int&nbsp;main()&nbsp;{   &nbsp;&nbsp;int&nbsp;local&nbsp;=&nbsp;0;&nbsp;//&nbsp;지역변수   &nbsp;&nbsp;...   }  </p>
  </p>
 </p>
 <p>  <p>데이터형에는 int, char 등 다양하게 존재하며 정수형과 실수형으로 나뉘어있다.&nbsp;</p>
 </p>
 <p>  <p>   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfOTIg%2FMDAxNDg0Njk5MDc0NDQ5.e3Q-gAt5SAkH8xVnnYQb9wlsB_HiQ5l8s0NWokOO67wg.t2OTKwo8oT1nsc0q5dj6SKXDy7mfV-4xXldVtaaAng4g.PNG.searphiel9%2F%25ED%2591%259C1.PNG%22&amp;type=cafe_wa740">  </p>
 </p>
 <p>  <p>데이터형은 크기에 따라서 표현가능한 범위가 달라진다. 즉 크기가 작을수록 표현 가능한 값이 작아지고, 크기가 커지면 커질 수록 표현 가능한 값이 커진다. 이를 기억해서 항상 변수를 정의할때 필요한 크기에 맞추어서 정의하는 것이 중요하다. 만일 큰 값을 필요로한데 작은 크기의 데이터형을 사용하게 될 경우 오버플로우(메모리가 다 차서 다시 0부터 시작되는 현상)이 발생 할 수 있으며, 또 작은 값을 사용하는데 큰 크기의 데이터형을 사용할 경우 그 만큼 메모리의 낭비가 발생한다.</p>
 </p>
 <p>  <p>   <p>   char&nbsp;value&nbsp;=&nbsp;-128&nbsp;~&nbsp;+127;   short&nbsp;value&nbsp;=&nbsp;-32768&nbsp;~&nbsp;+32767;   int&nbsp;value&nbsp;=&nbsp;-2147483648&nbsp;~&nbsp;+2147483647;   long&nbsp;value&nbsp;=&nbsp;-2147483648&nbsp;~&nbsp;2147483647;   long&nbsp;long&nbsp;value&nbsp;=&nbsp;-9223372036854775808&nbsp;~&nbsp;+9223372036854775807;   float&nbsp;value&nbsp;=&nbsp;-3.4x10(-37)&nbsp;~&nbsp;+3.4x10(+38);   double&nbsp;value&nbsp;=&nbsp;1.7x10(-307)&nbsp;~&nbsp;+1.7x10(+308);   long&nbsp;double&nbsp;value&nbsp;=&nbsp;double&nbsp;이상의&nbsp;표현범위;  </p>
  </p>
 </p>
 <p>  <p>데이터형 앞에는 signed, unsigned 가 붙을 수 있다. 이의 차이는 signed는 일반적인 데이텨형을 말하는 것으로 위의 값에서 동일하지만, unsigned 가 붙을 경우 - 영역이 전부 + 로 넘어가서 그 크기 만큼 더 큰 양수의 값을 사용 할 수 있게 된다.</p>
 </p>
 <p>  <p>   <p>   signed&nbsp;char&nbsp;value&nbsp;=&nbsp;-128&nbsp;~&nbsp;+127;   unsigned&nbsp;char&nbsp;value&nbsp;=&nbsp;+255;      signed&nbsp;short&nbsp;value&nbsp;=&nbsp;-32768&nbsp;~&nbsp;+32767;   unsigned&nbsp;short&nbsp;value&nbsp;=&nbsp;+65535;      signed&nbsp;int&nbsp;value&nbsp;=&nbsp;-2147483648&nbsp;~&nbsp;+2147483647;   unsigned&nbsp;int&nbsp;value&nbsp;=&nbsp;4294967295;  </p>
  </p>
 </p>
