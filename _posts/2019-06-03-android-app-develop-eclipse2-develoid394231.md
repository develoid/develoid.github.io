---
layout: post
title: '"아마도 쉬운 안드로이드 어플만들기" [43] 캘린더(Calendar)'
author: '달팽이들'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/394231' ; </script>

<p>
<p></p>

<!-- Not Allowed Attribute Filtered ( cssquery_u) --><p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"> </p>

<p>
<p>
<p>
<p>
<p>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</p>

<p>저작자는 Snails(tjdtnsu)입니다.</p>

<p>덧글은 강의 제작자에게 큰 힘이 됩니다</p>

<p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p>

<p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페</u>
</p>
<p><u>업로드 시간 : 매달 2,4주 오후 11시</u>
<p></p>

<p>난이도 : ★★★★★★</p>

<p></p>
</p>

<p></p>
<p>&nbsp;</p>
</p>
</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>이번 시간에는 날짜값을 가져와서 출력하는 작업을 하겠습니다.</p>

<p>오늘은 간단하게 시간이 실시간으로 변하게 해보겠습니다.</p>

<p>&nbsp;</p>

<p>여기에는 지난 강좌의 내용도 포함되어 있습니다. 참고하세요</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>여기서 시간을 불러오는 코드가</p>

<p>final Calendar c = Calendar.getInstance();</p>

<p>입니다. 이 코드는</p>

<p>import java.util.Calendar;</p>

<p>를 일단 import 되어 있어야 합니다. 어차피 알아서 추가가 되겠지요</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>그러면 여기서 ㅁ를 불러올 때는 뭐라고 해야 할까요</p>

<p>c.get(Calendar.ㅁ);</p>

<p>입니다. 여기서 ㅁ에 들어갈 수 있는 것은</p>

<p>엄청 많아서 생략하지만</p>

<p>&nbsp;</p>

<p>코드에 두 종류가 있습니다.</p>

<p>&nbsp;</p>

<p>몇 시 몇분과 같이 숫자를 출력하는 것과</p>

<p>3월이면 1, 아니면 0과 같은 boolean형도 있습니다.</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>그러면 예제를 볼게요</p>

<p>&nbsp;</p>

<p>&nbsp;</p>




<table><tbody><tr><td >
<p>&nbsp;public class MainActivity extends Activity {&nbsp;&nbsp; private TextView mTimeDisplay;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; private int mHour;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; private int mMinute;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; private int mSecond;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; private Runnable r;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; private Handler mHandler;</p>

<p>&nbsp;@Override&nbsp;protected void onCreate(Bundle savedInstanceState) {&nbsp;&nbsp;super.onCreate(savedInstanceState);&nbsp;&nbsp;setContentView(R.layout.activity_main);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; mTimeDisplay = (TextView) findViewById(R.id.textView4);</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; final Calendar c = Calendar.getInstance();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; mHour = c.get(Calendar.HOUR_OF_DAY);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; mMinute = c.get(Calendar.MINUTE);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; mSecond = c.get(Calendar.SECOND);</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; mHandler = new Handler(); &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; r = new Runnable() { &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @Override&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public void run() { &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; updateDisplay();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; mHandler.postDelayed(r, 1000);</p>

<p>&nbsp;</p>

<p>&nbsp;}&nbsp;&nbsp;private void updateDisplay() {&nbsp;final Calendar c = Calendar.getInstance();&nbsp;&nbsp;&nbsp;&nbsp; mHour = c.get(Calendar.HOUR_OF_DAY);&nbsp;&nbsp;&nbsp;&nbsp; mMinute = c.get(Calendar.MINUTE);&nbsp;&nbsp;&nbsp;&nbsp; mSecond = c.get(Calendar.SECOND);</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; mTimeDisplay.setText("현재시간 : " + mHour + "시 " + mMinute + "분 " + mSecond + "초 ");</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp; mHandler.postDelayed(r, 1000); &nbsp;&nbsp;&nbsp; }&nbsp;</p>
</td></tr></tbody></table>
<p>&nbsp;</p>

<p>&nbsp;</p>

<p>이 예제는&nbsp;지금 현재 몇시&nbsp;몇분 몇초인지&nbsp;1초 주기로 업데이트하는&nbsp;코드입니다.</p>

<p>Delay를 이용해서 1초 주기로 업데이트 하게&nbsp;되어 있지요</p>

<p>좀 더&nbsp;정확하게 하시려면 1000을 좀 내려도 괜찮습니다.</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>그러면 실행 환경입니다</p>

<p><iframe frame scrolling="no" name="mplayer" title="플레이어"  height="405" src="https://serviceapi.nmv.naver.com/view/ugcPlayer.nhn?vid=5F535B92462872C3BE287116150D0438158B&amp;inKey=V1246a8c0551cde5570a9b21fa7062efa1c022a86df6b5bc2ca869982356bd5e388a1b21fa7062efa1c02&amp;wmode=opaque&amp;hasLink=1&amp;autoPlay=false&amp;beginTime=0" allowfullscreen="allowfullscreen"></iframe></p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>강좌를 마치겠습니다.</p>

<p>다음 시간에는 메세지 전송에 대해 알아보겠습니다.</p>

<p>&nbsp;</p>

