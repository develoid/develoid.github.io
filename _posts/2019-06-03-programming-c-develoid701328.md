---
layout: post
title: 'C언어 기초정리 - 함수'
author: '시류아'
categories: Programming-C
tags:
- Programming
- Language
- C
-
---


<script> location.href='https://cafe.naver.com/develoid/701328' ; </script>

<div>  <p></p> </div> <div><div><div>본 글의 내용은 제가 이전에 교육 낙후 지역 학생들을 위해서 오프라인에서 진행한 재능기부 강좌 중에서 블로그로 공개한 부분입니다.</div><div><span>블로그 포스팅을 그대로 가져오다보니, 경어체가 아닙니다. 양해부탁드립니다.</span></div><div><span><b></span></div></div></div><div>  <div>   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMjUg%2FMDAxNDg0Njk4MTU5NjEz.hpf78f6QLYrlM-8jBjCqwBYCcdz_ukeEtPa2KUNcg-Mg.4DwV_WNpcNv4kPxoZLhR4UPai6Ij469m9HgS8lwn_Hgg.PNG.searphiel9%2Fc.png%22&amp;type=cafe_wa740">  </div> </div> <div>  <div>   <div>   C 언어 기초정리   <b>함수  </div>  </div> </div> <div>  <p>특정 기능 동작시키거나 필요한 값을 받기 위해 호출하는 구성 요소를 함수라고 한다. 함수를 굳이 사용하지 않고 해도 상관 없지만, 수 많은 코드를 한 곳에 작성하다보면 보기에도 불편하고 수정하기에도 힘들어지기 때문에 사용한다. 함수화를 하면 동일 기능을 명령문으로 묶어서 손 쉽게 사용 가능하며, 한기 능을 바꾸고 싶으면 그 기능을 담당하면 함수 정의를 찾아서 수정하면 된다.</p> </div> <div>  <div>   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfNTgg%2FMDAxNDg0Njk4MjQzODQ0.gKxVxVGu2oltc2_gVIWTPeLspszyjAWqZS4ZC29Xi2Qg.r1yUurUJNviQpUYEccUNxS7BvUXxO5rC4rHB0J2ARnwg.PNG.searphiel9%2F1.png%22&amp;type=cafe_wa740">  </div> </div> <div>  <div>   <div>   int&nbsp;main(int&nbsp;a,&nbsp;int&nbsp;b&nbsp;...)&nbsp;{   <b>&nbsp;&nbsp;...   <b>}  </div>  </div> </div> <div>  <p>함수의 구조는 데이터형, 함수명, 매개변수로 이루어져 있다. 데이터형은 함수의 크기, 함수명은 함수의 이름, 매개 변수는 함수 안에서 사용 할 수 있는 변수이다. 데이터형과 변수에 대해서는 차후에 설명하니 따로 설명하지 않고 넘어가겠다. 함수며은 이 함수를 구분 짓기 위한 것으로 동일한 이름을 사용 할 수 없으며 띄어쓰기 역시 불가능하다.(단 _는 가능하다) 함수는 다른 곳에서 함수명(매개변수)로 호출, 중괄호 안에 있는 변수, 조건문, 반복문 등을 활용하여 다양한 역활을 수행한다. 다른 함수에서 불러와서 사용되기도 하며, 다른 함수와 같이 사용되거나 독립적으로 사용되기도 한다.</p> </div>
