---
layout: post
title: '"아마도 쉬운 안드로이드 어플만들기" 5-1 이벤트 처리(1)'
author: 'Snails'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/284897' ; </script>


















						<p>&nbsp;</p><div><p><span></span></p></div><div><p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p><p><i>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</i></p><p><i>저작자는 Snails(tjdtnsu)입니다.</i></p><p><span><strong><span>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</span></strong></span></p><p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p><p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페, App Development 카페, 프그머 카페</u></p><p>&nbsp;</p><p><u>﻿</u></p><p><b><span>학습목표 :&nbsp;이벤트를 처리하는 방법에 대해 알 수 있다.</span></b></p><p><span><span><strong>난이도 : ★★★★★★</strong>&nbsp;</span></span> </p><div>&nbsp;</div><div>&nbsp;</div><div>대단원 5입니다.</div><div>벌써 이렇게 난이도가 높아져 가네요</div><div>7월 28일부터 8월 5일까지는 매일 적을 듯합니다.</div><div><div>6단원은 대화상자를 할 계획입니다.</div><div>이 강좌의 목표는 유틸도 만들지만 저는 게임 만들기입니다.</div><div>이번 해까지는 강좌 다 적지 못할 듯합니다.</div></div><div>&nbsp;</div><div>&nbsp;</div><div>오늘부터는 이벤트 핸들러 입니다.</div><div>이 단원은 이론을 집중적으로 하겠습니다.</div><div>&nbsp;</div><div>&nbsp;</div><div>모바일 장비도 역시 gui를 채택해 스크린을 최대한 활용합니다. gui는 사용하기에 편하지만 개발하기에는 좀 더 힘듭니다.</div><div>이벤트는 그냥 절차 동작이 아니라 이벤트 상황에 맞춰 각각 작성해야 하므로 어렵고</div><div>그런 기술이 필요합니다.</div><div>&nbsp;</div><div>이벤트를 처리하는 방법에는 6가지가 있는데<b>이 글을 읽기 전 자바가 되지 않는다면 문법책에 다가가 주세요.</div><div>순서대로 3개씩 2강으로 나눠 하겠습니다.</div><div>예제는 따로 적겠습니다.</div><div>&nbsp;</div><div>&nbsp;</div><div><strong>1. 콜백 메서드를 재정의한다</strong></div><div>&nbsp;</div><div>이벤트를 받는 가장 쉬운 방법은 해당 클래스를 상속받아 콜백 메서드를 재정의하는 겁니다.</div><div>이벤트 콜백은 주로 뷰가 제공합니다.</div><div>특정 이벤트가 발생한 시점을 정확하게 가르채고 상세한 정보까지 얻을 수 있다.</div><div>&nbsp;</div><div>boolean onTouchEvent (MotionEvent event) : 화면을 터치할 때</div><div>boolean onKeyDown (int keyCode,&nbsp;keyEvent event) : 키를 누를 때</div><div>boolean onKeyUp (int keyCode,&nbsp;keyEvent event) : 키를 땔 대</div><div>boolean onTrackballEvent (MotionEvent event) : 트랙볼을 굴릴 때</div><div>&nbsp;</div><div>Tip. 콜백 메서드 : 특정 이벤트가 발생했을 때 시스템에 의해 자동으로 호출되는 메서드로 이벤트 발생시 동작을 정의할 수 있다</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div><strong>2. 리스터 인터페이스 구현</strong></div><div>&nbsp;</div><div>이벤트 발생 여부에 귀를 기울이고 있는 객체이다.</div><div>View 클래스의 안의 인터페이스로 정의되어 있고 이벤트를 받는 하나의 메서드만 정의되고 있다.</div><div>&nbsp;</div><div>void setOnTouchListener (View.OnTouchListener 1)</div><div>void setOnKeyListener(View.OnKeyListener 1)</div><div>void setOnClickListener(View.OnClickListener 1)</div><div>void setOnFocusChangeListener(View.OnFocusChangeListener 1)</div><div>&nbsp;</div><div>Tip. 리스너 : 특정 이벤트를 처리하는 인터페이스</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div><strong>3. 액티비티가 리스너 구현</strong></div><div>&nbsp;</div><div>안드로이드 프로젝트에는 최소한 액티비티 하나는 존재해서 액티비티가 리스너 인터페이스를 구현하는 것도 가능하다.</div><div>액티비티는 Activity 클래스를 상속 받지만 더 상속받는 것도 가능하다.</div><div>액티비티가 리스너를 직접 구현한다.</div><div>&nbsp;</div><div>public class A extends Activity implements View.OnTouchListener{</div><div>&nbsp;public void onCreate(Budle savedInstanceState){</div><div>super.onCreate(savedInstanceState);</div><div><span>View vm=new View(this);</span></div><div><span>vw.setOnTouchListener(this);</span></div><div><span>setContentView(vw);</span></div><div>}</div><div>&nbsp;</div><div><span>public boolen onTouch(View v, MotionEvent event){</span></div><div><span>.....</span></div><div><span>&nbsp;</span><span>}</span></div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><p></p><p></p></div>
