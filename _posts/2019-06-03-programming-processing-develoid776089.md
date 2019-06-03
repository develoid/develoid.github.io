---
layout: post
title: '프로세싱 응용 - 아두이노 제어 라이브러리 설치'
author: '시류아'
categories: Programming-Processing
tags:
- Programming
- Language
- Graphic
- Arduino
---


<script> location.href='https://cafe.naver.com/develoid/776089' ; </script>

<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMDFfMTc2%2FMDAxNDg1OTIwMTIzODQ5.Q1ax1I1DcOMjaOPlbjLLyv0YWtPocLl_iMotHByIjl4g.0gcNi91QJGCF3u3PfZWeVlnCNLbmewmBPSLYW-dVTk4g.PNG.searphiel9%2Fprocessing_logo.png%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <div>
   프로세싱 응용
   <b>아두이노 제어 라이브러리 설치
  </div>
 </div>
</div>
<div>
 <p>프로세싱으로 아두이노를 제어해보자, 프로세싱과 아두이노는 상당히 깊게 이어져 있다. 아두이노 프로그래밍의 가징 기본이 되는 아두이노 IDE는 프로세싱 IDE를 기반으로 만들어진 것이다. 라이브러리 설치하고 프로세싱으로 제어 파일을 업로드 하는 것으로 아두이노와 프로세싱은 손 쉽게 연결되어, 프로세싱으로 아두이노를 제어 할 수 있게 된다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   라이브러리 설치
  </div>
 </div>
</div>
<div>
 <p>프로세싱에서 아두이노를 제어하기 위해서는 라이브러리 추가해야된다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMDFfMTgy%2FMDAxNDg1OTIwMjUyNTQ1.x4kZpyc9snPIm-USmjns6uoufK_JLqjkbag0Jmo-A-Mg.ylgB3sFBNvafWq4tBLml98z3KJLRMDZBdEIrHmzQp_0g.PNG.searphiel9%2F1.png%22&amp;type=cafe_wa740">
  <span>라이브러리 매니저 열기</span>
 </div>
</div>
<div>
 <p>도구 메뉴에서 추가도구 생성 을 들어간다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMDFfNDMg%2FMDAxNDg1OTIwMjUyNTQ4.1sdH13MtEoYfqIL3fBNokJ2QOlHn7baajbt_nFP-RPUg.5LS9ot4GQf6Lc38bf9FLlfH-bjtvXuvfSWO_pyxqFpkg.PNG.searphiel9%2F2.png%22&amp;type=cafe_wa740">
  <span>라이브러리 매니저에서 라이브러리 검색</span>
 </div>
</div>
<div>
 <p>Contribution Manager 창 을 띄웠으면 라이브러리 탭에서 Arduino 를 검색하여 Arduino(Firmata)를 클릭하고 우축 하단의 Install 을 클리갛여 설치한다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMDFfOTQg%2FMDAxNDg1OTIwMjUyNTM5.tBJTigwmtowXSs0JeHL8GyQCLQylr8mebOuNyMPNoW4g.DM0NCL8VDvBOiQ4W4bw5sCw11lV9jhKSpqBcwADFkksg.PNG.searphiel9%2F3.png%22&amp;type=cafe_wa740">
  <span>라이브러리 목록</span>
 </div>
</div>
<div>
 <p>설치 완료 후 예제 창을 열어보면 Contributed Libraries 에 Arduino(Firmata)란 이름으로 예제 5개가 생성되어 있는 것을 확인 할 수 있다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMDFfMTQ2%2FMDAxNDg1OTIwMjUyNTcx.GIenN97hXjLDx7-shYki6R_zJBvp2Dyod6bwDaZ7PSYg.NdnNpQhk1fWVo8cWUdNWGtd8aA16oJrG8ozYlbGql2Yg.PNG.searphiel9%2F4.png%22&amp;type=cafe_wa740">
  <span>아두이노에 프로세싱 연동 라이브러리 업로드</span>
 </div>
</div>
<div>
 <p>마지막으로 아두이노 IDE 에서 프로세싱과 연동 할 수 있는 라이브러리를 아두이노에 업로드하면 끝난다. 예제&gt;Firmata&gt;StandardFirmata 를 연 후 아두이노에 컴파일하여 업로드하면 끝난다. 아두이노에서 Firmata 예제 별 프로세싱과 연동 할 수 있는 범위가 달라지니 목적에 맞추어서 사용하면 된다.<b></p>
</div>
