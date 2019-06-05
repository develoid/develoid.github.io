---
layout: post
title: 'C언어 기초정리 - 반복문'
author: '시류아'
categories: Programming-C
tags:
- Programming
- Language
- C
-
---


<script> location.href='https://cafe.naver.com/develoid/701332' ; </script>

<p>  <p></p>
 </p>
 <p><p>본 글의 내용은 제가 이전에 교육 낙후 지역 학생들을 위해서 오프라인에서 진행한 재능기부 강좌 중에서 블로그로 공개한 부분입니다.</p>
<p>블로그 포스팅을 그대로 가져오다보니, 경어체가 아닙니다. 양해부탁드립니다.</p>
</p>
<p>  <p>   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMTAy%2FMDAxNDg0NzAxNDU4NjQ0.8FFwCCIeof2N-nfXO9Acw74MieMnLsxmuFlE7MBY4Psg.zqVRkxgz-OSzONWvuHIYCalROqOr043HbCL0xS-gM5kg.PNG.searphiel9%2Fc.png%22&amp;type=cafe_wa740">  </p>
 </p>
 <p>  <p>   <p>   C언어 기초정리   반복문  </p>
  </p>
 </p>
 <p>  <p>반복문은 특정 조건에 일치하면 계속해서 반복 실행하도록 하는 문장을 반복문이라 한다. 반복문의 종류는 총 3가지 있으며, while문, do~while문, for문이 있다.</p>
 </p>
 <p>  <p>   <p></p>
  </p>
 </p>
 <p>  <p>   <p>   while 문  </p>
  </p>
 </p>
 <p>  <p>   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMjM2%2FMDAxNDg0NzAxNTQwOTgy.cedvn8WbUlu_IvMOoNbI73COFZ_tLbbvuhrxkNOylVsg.edGD_CLGymZGvlK1gcMXKdBWPC7mD1RGQ85S0EftSjQg.PNG.searphiel9%2F8.png%22&amp;type=cafe_wa740">  </p>
 </p>
 <p>  <p>특정 조건에 맞으면 실행, 아니면 실행하지 않는 것이 while문이다. 실행하고나면 다시 처음으로 돌아가서 조건과 비교, 일치하면 다시 실행, 아닐 경우 실행하지 않고 종료된다.</p>
 </p>
 <p>  <p>   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMTEz%2FMDAxNDg0NzAxNTc2MTg5.Onjdl77kw29KVWswW55CVVh9NzmpOq1uzNYtbXvZpVIg.sB-Do3Hd_JnWfx88U8rn70BMWz55v6Xs3fM3pBaLBRsg.PNG.searphiel9%2F9.png%22&amp;type=cafe_wa740">  </p>
 </p>
 <p>  <p>먼저 처음 시작할 때 a의 값이 0이라면 while문의 조건은 a가 5보다 작을 경우이기 때문에 while문 내부의 내용을 실행한다. 이후 마지막 a의 값이 증감 연산자에 의해서 1이 증가하고, 이후 다시 처음으로 돌아가 조건을 비교, 충족 할 경우 다시 실행한다. 이렇게 a의 갑싱 5보다 커지게되면 조건이 불일치하기때문에 실행하지 않고 while문을 종료한다.</p>
 </p>
 <p>  <p>   <p>   while(a&lt;5)&nbsp;{   &nbsp;&nbsp;...   &nbsp;&nbsp;a++;   }  </p>
  </p>
 </p>
 <p>  <p>   <p></p>
  </p>
 </p>
 <p>  <p>   <p>   do ~ while문  </p>
  </p>
 </p>
 <p>  <p>   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfNjkg%2FMDAxNDg0NzAxNjc0ODgy.wCaTpk_qC8CVq2TlhJV4mRda0q9wvm4yCCD0NV9Lxvwg.Sq0iaWgpUBUwtkG2PI5kEpBTQIEQSBW6gojOv-6BI-0g.PNG.searphiel9%2F10.png%22&amp;type=cafe_wa740">  </p>
 </p>
 <p>  <p>while문은 처음에 실행조건을 비교하고 실행한다면, do ~ while문은 반대로 실행을 먼저 하고 조건을 비교해서 반복을 멈추는 구조이다. 먼저 안의 내용을 실행하고, 조건이 일치하면 다시 처음으로 돌아가서 다시 실행, 불일치 할 경우 반복을 종료하는 선 실행 후 비교 문장이다.</p>
 </p>
 <p>  <p>   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMjQw%2FMDAxNDg0NzAxNzQ2NjQx.3-VLdPxCOGK9yq1Tu1XXhIUSkAG2CDByCchPggzYqn8g.h4lPY_eVaL5csIOhlhqK23-GJrxGChH2z2wRoTgJV2og.PNG.searphiel9%2F11.png%22&amp;type=cafe_wa740">  </p>
 </p>
 <p>  <p>처음 시작 할 때 a의 값이 0이라고 한다면, 먼저 do 안의 내용을 실행하고, 마지막에 a의 값이 증감연산자에 의해 1이 증가한다. while에서 a가 5보다 작다라는 조건을 가지고 비교하여, a의 값이 5보다 작으면 다시 처음으로 돌아가 반복실행을, 조건 불일치 할 경우 실행하지 않고 do ~ while 문을 종료한다.</p>
 </p>
 <p>  <p>   <p>   do&nbsp;{   &nbsp;&nbsp;...   &nbsp;&nbsp;a++;   }&nbsp;while(a&lt;5)  </p>
  </p>
 </p>
 <p>  <p>   <p></p>
  </p>
 </p>
 <p>  <p>   <p>   for문  </p>
  </p>
 </p>
 <p>  <p>   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMjM3%2FMDAxNDg0NzAxODM3NTY1.BUGBY0HUKTzmD9ssBSwlMjrcTTdvf0OluV0codz-Xzwg.MwgNPHT4X8yfpSNUXvm3ORljhYtfwsff5YOWA2PHOJQg.PNG.searphiel9%2F12.png%22&amp;type=cafe_wa740">  </p>
 </p>
 <p>  <p>간단하게 생각하면 while문을 압축해놓은 반복문이다. while문을 실행하기 위해서는 예제에 표기하지 않앗지만, 조건에 사용할 변수를 초기화해주어야되며, 조건의 범위를 만들고 계속해서 반복하지 않도록 조건을 충족시킬수 있는 부분을 만들어주어야한다. 이 것들을 한 곳에 모아 묶어 둔 것이 for문이다.</p>
 </p>
 <p>  <p>   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMThfMjU4%2FMDAxNDg0NzAxOTA5NTgx.zF13FKVeM7pHjrZKL6bxOHwjcGmDnYBF15xsqQXS630g.wANAuXyTfGW1HqJ1EYMIU5t1pu2RjmuK3nKynoGc1Xcg.PNG.searphiel9%2F13.png%22&amp;type=cafe_wa740">  </p>
 </p>
 <p>  <p>먼저 for문은 소괄호 안에 변수초기화, 조건, 증감식을 다 집어넣어져 잇는 구조이다. 위의 예제를 기준으로 설명하면 먼저 a의 값을 0으로 초기화 하였으며, 조건으로는 a는 5보다 작다이다. 즉 a의 값이 5보다 작을 경우에 반복되어 실행한다는 것이다. 마지막으로 a는 한 번 반복이 실행될 때 마다 1씩 증가한다. 위의 조건을 가지고 a는 반복 실행되며 a의 값이 5보다 커지게되면 조건에서 벗어나 for문을 종료한다.</p>
 </p>
 <p>  <p>   <p></p>
  </p>
 </p>
 <p>  <p>   <p>   무한반복  </p>
  </p>
 </p>
 <p>  <p>프로그램을 작성하다보면 무한적으로 반복실행시켜야 되는 경우도 있으며, 이 경우 while문, do ~ while문, for문을 무한적으로 계속해서 반복하게 할 수 있다. 이는 간단하게 조건과 일치되지 않으면 계속해서 안의 내용을 반복하기 때문에, 조건부를 지우거나 조건을 불일치 하게 만들어주는 것으로 무한적으로 가능하게 하는 것이다. 간단하게 while(1), do ~ while(1), for(;;) 이러한 형식으로 조건을 주지 않게되면 무한반복하게 되며, 이 경우 무한반복을 종료하기 위해서는 if문 등을 통해 조건을 만들어 break문을 활용하여 반복을 종료하게 한다.</p>
 </p>
 <p>  <p>   <p>   while(1)&nbsp;{   &nbsp;&nbsp;...   &nbsp;&nbsp;if(a&nbsp;==&nbsp;out)&nbsp;break;   }      do&nbsp;{   &nbsp;&nbsp;...   &nbsp;&nbsp;if(a&nbsp;==&nbsp;out)&nbsp;break;   }&nbsp;while(1)      for(;;)&nbsp;{   &nbsp;&nbsp;...   &nbsp;&nbsp;if(a&nbsp;==&nbsp;out)&nbsp;break;   }  </p>
  </p>
 </p>

