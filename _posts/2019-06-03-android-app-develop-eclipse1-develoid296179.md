---
layout: post
title: '#10 String 변수 (문자열 변수 설정하기)'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/296179' ; </script>

<p>원래 이 글은 번외편 이었다가 진도에 맞춰 강좌에 포함된 글입니다</p><p>어플 개발 강좌에서 번외 강좌는 추후 본 강좌에 추가됩니다</p><p>(추가되며 내용이 변경될수 있습니다)</p><p>이번에는 String에서 글자 변수를 사용하는 방법을 배워보도록 하겠습니다</p><p><b></p><p><b><span>10. String&nbsp;변수 (문자열 변수 설정하기)</span></b></p><p><span>10-1 String.xml사용법</span></p><p>안드로이드에서 화면에 글자를 표시하는 방법은 두가지 정도가 있습니다</p><p>android:text="안녕하십니까?"</p><p>처럼 그냥 글자를 넣는 방법이 있습니다'</p><p><b></p><p>그리고 res/values/string.xml을 이용하여 국가마다 다른 언어를 보여줄수도 있고 여러번 필요한 글자를 저장할수도 있습니다</p><p>그런대 이 String.xml에서 값이 변할수 있는 여지가 있습니다</p><p><b></p><p>예를 들자면</p><p>"현재 남은 배터리가&nbsp;<u>12%</u>입니다"</p><p>"<u>미르</u>님 안녕하십니까?"</p><p>"오늘 일정은&nbsp;<u>강좌 정독</u>&nbsp;입니다"</p><p>처럼 말이죠</p><p><b></p><p>어떻게 해야 할까요?</p><p><b></p><p>필요한 string.xml에</p><p>%1$s</p><p>%2$s</p><p>이런 형식으로 string에 추가하시면 됩니다</p><p><b></p><p>마지막에 있는 알파벳 s에 관한 설명을 해드리자면</p><p>%1$<b>s</b>:문자(string)</p><p>%1$<b>d</b>:숫자(int)</p><p>이렇게 써주셔야 합니다</p><p><b></p><p><b></p><p><span>10-2 자바에서는?</span></p><p>그렇다면 자바에서 어떻게 처리해야 할까요?</p><p><span>String.format(getString(R.string.</span><span>hello</span><span>),&nbsp;</span><span>getString(R.string.ok)</span><span>)</span></p><p>이렇게 String.format을 이용하시면 됩니다</p><p><b></p><p>예를 들어 볼까요?</p><div><p>TextView Test;</p><p>Test = (TextView) findViewById(R.id.textview1);</p><p><span>test.setText(String.format(getString(R.string.</span><span><u>hello</u></span><span>),&nbsp;<span><u>"미르</u></span><u>"</u></span><span>));</span><b></p></div><p>뭐 이런 내용이 있다고 합시다</p><p><b></p><p>string.xml에는 &lt;string name="hello"&gt;<span>%1$s님 안녕하세요!</span><span>&lt;/string&gt;라고 되어 있습니다</span></p><p>그렇다면 이때 앞에 있는 getString(R.string.hello)는 "<span>%1$s님 안녕하세요!"이라는 글자인대 ,뒤에&nbsp;<span><u>"미르"</u></span>라는 글자가 있으므로</span></p><p>"미르님 안녕하세요!"</p><p>라고 나타나게 됩니다</p><p><b><span></span></p><p>저&nbsp;<span><u>"미르"</u></span>부분도 String처리가 가능합니다&nbsp;<span>getString(R.string.mir) 이렇게 저&nbsp;<span><u>"미르"</u></span>자리에 넣어주시면 국가에 맞게 다른 언어가 나타납니다</span></p><p><b></p><p>만약 2개이상 변수를 하려면 쉼표를 입력한다음 게속 이어나가시면 됩니다</p><p><span><b></span></p><p><span><b></span></p><p>이 부분은 String.xml에게 꼭 필요한 부분이니 꼭 숙지하시길 바랍니다!</p><p><b></p><p><b></p><p><span><b></span></p><p><span>참조 :&nbsp;</span><a href="http://jhrun.tistory.com/123">http://jhrun.tistory.com/123</a></p><p><b></p><p><b></p><p></p><div><p><b></p><p>이글은 [http://whdghks913.tistory.com/298] 에서 다시 보실수 있으며 원본 글의 저작권은 미르에게 있습니다</p></div>
