---
layout: post
title: '[커뮤니티] C언어 기초정리 - 조건문'
author: '시류아'
categories: Programming-C
tags:
- Programming
- Language
- C
-
---


<script> location.href='https://cafe.naver.com/develoid/701331' ; </script>

<p>  <p></p>
 </p>
 <p><p>본 글의 내용은 제가 이전에 교육 낙후 지역 학생들을 위해서 오프라인에서 진행한 재능기부 강좌 중에서 블로그로 공개한 부분입니다.</p>
<p>블로그 포스팅을 그대로 가져오다보니, 경어체가 아닙니다. 양해부탁드립니다.</p>
</p>
<p>  <p>   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfNzQg%2FMDAxNDg0Njk5NzEzNTUx.lpIW2UJelO03-MshcD76xXwpJbUz_WDrHq3YOkFHMRog.FSyIPgtmGWhGNZFPxuNf4L2wzptfkmv09VH3308M53Yg.PNG.searphiel9%2Fc.png%22&amp;type=cafe_wa740">  </p>
 </p>
 <p>  <p>   <p>   C언어 기초정리   조건문  </p>
  </p>
 </p>
 <p>  <p>조건문은 일정 조건이 되면 작동되게 하는 문장이다. if문, else문 else if문, switch문 총 4개의 조건문이 있으며 하나하나 살펴보도록 하자</p>
 </p>
 <p>  <p>   <p></p>
  </p>
 </p>
 <p>  <p>   <p>   if문  </p>
  </p>
 </p>
 <p>  <p>만약 ~한다면 뜻 그대로 특정 조건이라면 실해되는 조건문이다.</p>
 </p>
 <p>  <p>   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMjMg%2FMDAxNDg0Njk5OTEwODUy.uCN_MxecbnCrSu856n-xzDDw8OnbGa84ayYh6yHdN24g.lmOSMNMmDfsrMg-HhWLWBgDQ7uxLsCakoBAEI9xt438g.PNG.searphiel9%2F4.png%22&amp;type=cafe_wa740">  </p>
 </p>
 <p>  <p>위와 같은 구조를 지니고 있으며, 소괄호 안의 실행조건이 만족 할 경우 중괄호 안의 내용을 실행한다. 예를 들어 if의 조건이 a&gt;b 가 젹혀 있다면 a값이 b보다 클 경우 중괄호 안에 있는 내용을 실행하고, 반대로 작을 경우에는 실행하지 않고 지나간다.</p>
 </p>
 <p>  <p>   <p>   if(a&gt;b){   &nbsp;&nbsp;...   }  </p>
  </p>
 </p>
 <p>  <p>   <p></p>
  </p>
 </p>
 <p>  <p>   <p>   else 문  </p>
  </p>
 </p>
 <p>  <p>else문은 if문의 조건이 아닐 경우 실행하는 조건문이다.</p>
 </p>
 <p>  <p>   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMjk2%2FMDAxNDg0Njk5OTg5MTUw.1ng_rtvR0_bAlrcb_WS0gI7i0GDrNnZRqjZthoeAhxYg.rgVG05lFVtktquv399cSQoxOuFFSttvMYebXRWXjI24g.PNG.searphiel9%2F5.png%22&amp;type=cafe_wa740">  </p>
 </p>
 <p>  <p>위와 같이 if문 뒤에 오는 구조를 가지고 있으며, if문의 실행조건이랑 일치하지 않을 경우 else 이후의 중괄호 안에 내용을 실행한다. 예를 들어 if의 조건이 a&gt;b가 적혀있다면 a가 b보다 클 경우 if의 중괄호 안의 내용을 실행하고, 반대일 경우 else의 중괄호 안의 내용을 실행한다.</p>
 </p>
 <p>  <p>   <p>   if(a&gt;b){   &nbsp;&nbsp;...   }   else&nbsp;{   &nbsp;&nbsp;...   }  </p>
  </p>
 </p>
 <p>  <p>   <p></p>
  </p>
 </p>
 <p>  <p>   <p>   else if문  </p>
  </p>
 </p>
 <p>  <p>else if문은 else 문과 if문을 합쳐놓은 형태이다.</p>
 </p>
 <p>  <p>   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMjkx%2FMDAxNDg0NzAwMDg5MjMz.TU011LubjrWHU5wLcd1DShj9gOXmoqft32PN_cwBraYg.0Ov2rSIKaDWlgiKPxjYl1RaiAh-uwBRZA6wK8TYDc-Yg.PNG.searphiel9%2F6.png%22&amp;type=cafe_wa740">  </p>
 </p>
 <p>  <p>if문의 실행 조건이 일치하는지 여부를 확인하고 또 다른 조건을 기준으로 비교를해서 실행하도록 하는 조건문이다. 먼저 if문의 실행 조건이 일치 여부 확인하고 일치하지 않으면 else if문의 실행조건을 비교, 맞을 경우 실행, 틀릴경우 실행하지 않는다.예를들어 if문의 조건은 a&gt;b 라는 조건이고, 반대로 else if문의 조건은 a&lt;b 란 조건이 있다면 a의 값이 b보다 클 경우에는 if문의 중괄호 안의 내용을 실행하며, 반대일 경우 else if문의 조건이 충족되기 때문에 else if문의 중괄호 안의 내용을 실행한다.</p>
 </p>
 <p>  <p>   <p>   if(a&gt;b){   &nbsp;...   }   else&nbsp;if(a&lt;b)&nbsp;{   &nbsp;&nbsp;...   }  </p>
  </p>
 </p>
 <p>  <p>   <p></p>
  </p>
 </p>
 <p>  <p>   <p>   if문, else문, else if문 사용규칙  </p>
  </p>
 </p>
 <p>  <p>if문, else문, else if문은 다 같이 복합적으로 사용할 수 있으며(if ~ else if ~ else), 항상 순서는 if문, else if문, else문 순으로 사용되어야 한다.</p>
 </p>
 <p>  <p>   <p>   if(&nbsp;a&nbsp;&gt;&nbsp;b&nbsp;)&nbsp;{      }&nbsp;else&nbsp;if&nbsp;(&nbsp;a&nbsp;&gt;&nbsp;c&nbsp;)&nbsp;{      }&nbsp;else&nbsp;{      }  </p>
  </p>
 </p>
 <p>  <p>   <p></p>
  </p>
 </p>
 <p>  <p>   <p>   Switch문  </p>
  </p>
 </p>
 <p>  <p>switch문 같은 경우 if ~ else if ~ else 문과 기능은 동일하나 조건을 정수형 상수만 지정 할 수 있기 때문에 if ~ else if ~ else 문에 비해서 기능이 제한적이다. 즉 조건이 a&gt;b 형식의 논리 연산자를 사용할 수 없다. 그렇기 때문에 검사 조건 수가 많고 범위가 아닌 명확한 값으로 조건 검사시 자주 사용한다.(if 문보다 오히려 switch 문이 더 깔끔하게 보이기 때문에 switch 를 사용하는 경우도 많다.)</p>
 </p>
 <p>  <p>   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMjgw%2FMDAxNDg0NzAwNDE1ODMw.H3cEKlp0ruaDLWe_jIZUE0Oqzt84iU-ti4x_jduOmaMg.3MajN9F14Znvj0bbcXRyOaVTlkHP23jlIfUAV1MP5f4g.PNG.searphiel9%2F7.png%22&amp;type=cafe_wa740">  </p>
 </p>
 <p>  <p>switch 문은 소괄호 부분에 조건을 넣고, 중괄화에 있는 case 를 통해서 조건에 딱 맞추어 실행한다. 위의 예시를 기준으로 보면 val의 값이 1일 경우 case 1에 있는 명령을 실행하고 그 다음으로 case로 넘어가는 식으로 순차적으로 진행한다. 그리고 case 안에 break 가 있는 경우 그 다음 case 로 넘어가지 않고 switch 문을 종료한다. 그리고 만일 val 의 값이 case 에 일치하는 값이 없는 경우 default에 있는 내용을 실행한다.</p>
 </p>
 <p>  <p>   <p>   switch(val)&nbsp;{   &nbsp;&nbsp;case&nbsp;1:   &nbsp;&nbsp;&nbsp;&nbsp;...   &nbsp;&nbsp;case&nbsp;2:   &nbsp;&nbsp;&nbsp;&nbsp;...   &nbsp;&nbsp;&nbsp;&nbsp;break;   &nbsp;&nbsp;default:   &nbsp;&nbsp;&nbsp;&nbsp;...   }  </p>
  </p>
 </p>
