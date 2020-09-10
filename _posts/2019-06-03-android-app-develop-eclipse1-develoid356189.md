---
layout: post
title: '[커뮤니티] #24 Broadcast Receiver로 문자(SMS) 수신해보자'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/356189' ; </script>

<p><center>#24 Broadcast Receiver로 문자(SMS) 수신해보자</center><center>원본글은&nbsp;<a href="http://whdghks913.tistory.com/424">http://whdghks913.tistory.com/424</a>&nbsp;입니다</center><center>네이버와 티스토리 글양식 차이로 보기 불편할경우 원본글에서 감상 부탁드려요~</center></p>
<p>안녕하세요 ㅎ</p>
<p>원래는 2014년 처음에 올리려고 했는대 요즘 심한 감기에 걸려서 쿨럭</p>
<p>이번강좌부터는 조금씩 어려워 지고 있습니다</p>
<p>잘 따라와 주시고 이해가 안되는 부분은 아 그런가 보다~ 라고 생각하시는게 나을때가 많을겁니다 ㅎㅎ...</p>
<p>24.&nbsp;Broadcast Receiver로 문자(SMS) 수신해보자</p>
<p>24-1&nbsp;Broadcast Receiver란?</p>
<p>브로드 캐스트(브로드캐스트리시버,&nbsp;BroadcastReceiver)란 과연 무엇일까요?</p>
<p>broadcast : 방송하다</p>
<p>receiver : 수신기(수신하다)</p>
<p>각각&nbsp;이러한 뜻을 가지고 있는대요</p>
<p>합쳐보면 "방송을 수신한다" 라는 뜻이 됩니다</p>
<p>안드로이드에서는 어떠한 이벤트(활동)를 스피커에 대고 방송을 합니다</p>
<p>"핸드폰 화면이 꺼졌어요~"</p>
<p>그럼 브로드캐스트리시버가 이 방송을 듣습니다</p>
<p>"아 화면이 꺼졌내, 이러한 코드를 실행해야지"</p>
<p>이러한 원리로 작동이 되는겁니다</p>
<p>즉, 안드로이드에서 보내주는 이벤트를 수신해서 처리하는 곳이 바로 브로드캐스트리시버 입니다</p>
<p>그리고 브로드캐스트리시버는 우선순위에 따라 순차적으로 메세지가 전달됩니다</p>
<p>가장 우선순위가 높은 리시버에게 이벤트를 보내고, 그아래, 그아래.....으로 전달됩니다</p>
<p>이&nbsp;BroadcastReceiver는 정적 리시버와 동적 리시버로 나눌수 있는대요</p>
<p>정적 리시버는 AndroidManifest.xml에 등록하며, 동적 리시버는 매니페스트에 등록하지 않습니다</p>
<p>24-2&nbsp;Broadcast Receiver에서 받을수 있는 이벤트는 무엇이 있나요?</p>
<p>브로드캐스트에서 받을수 있는 액션이 무엇이 있는지 조금만 살펴보겠습니다</p>
<p>ACTION_BOOT_COMPLETED</p>
<p>부팅이 끝났을 때 (RECEIVE_BOOT_COMPLETED 권한등록 필요)</p>
<p>ACTION_CAMERA_BUTTON</p>
<p>카메라 버튼이 눌렸을 때</p>
<p>ACTION_DATE_CHANGED</p>
<p>ACTION_TIME_CHANGED</p>
<p>폰의 날짜, 시간이 수동으로 변했을때 (설정에서 수정했을때)</p>
<p>ACTION_SCREEN_OFF</p>
<p>ACTION_SCREEN_ON</p>
<p>화면 on, off</p>
<p>ACTION_AIRPLANE_MODE_CHANGED</p>
<p>비행기 모드</p>
<p>ACTION_BATTERY_CHANGED</p>
<p>ACTION_BATTERY_LOW</p>
<p>ACTION_BATTERY_OKAY</p>
<p>배터리 상태변화</p>
<p>ACTION_PACKAGE_ADDED</p>
<p>ACTION_PACKAGE_CHANGED</p>
<p>ACTION_PACKAGE_DATA_CLEARED</p>
<p>ACTION_PACKAGE_INSTALL</p>
<p>ACTION_PACKAGE_REMOVED</p>
<p>ACTION_PACKAGE_REPLACED</p>
<p>ACTION_PACKAGE_RESTARTED</p>
<p>어플 설치/제거</p>
<p>ACTION_POWER_CONNECTED</p>
<p>ACTION_POWER_DISCONNECTED</p>
<p>충전 관련</p>
<p>ACTION_REBOOT</p>
<p>ACTION_SHUTDOWN</p>
<p>재부팅/종료</p>
<p>ACTION_TIME_TICK</p>
<p>매분마다 수신</p>
<p>android.provider.Telephony.SMS_RECEIVED</p>
<p>sms 수신 (RECEIVE_SMS 권한 필요)</p>
<p>(전체중 극히 일부)</p>
<p>이중에서 굵은 표시가 되어 있는 부팅완료, 화면 on,off, 문자 수신을 가지고 예제를 만들어 보도록 하겠습니다</p>
<p>24-3 java파일 만들기</p>
<p>먼저 java파일을 만들어 줍시다</p>
<p>이 파일이 우리가 수신한 액션을 처리하는 브로드캐스트리시버 파일이 될것입니다</p>
<p>이름은 Broadcast.java입니다</p>
<p>import android.content.BroadcastReceiver;</p>
<p>import android.content.Context;</p>
<p>import android.content.Intent;</p>
<p>public class Broadcast extends&nbsp;BroadcastReceiver&nbsp;{</p>
<p>&nbsp; &nbsp; @Override</p>
<p>&nbsp; &nbsp; public void&nbsp;onReceive(Context context, Intent intent) {</p>
<p> &nbsp; &nbsp; // 수신한 액션을 이&nbsp;onReceive메소드에서 처리하게 됩니다</p>
<p>&nbsp; &nbsp; }</p>
<p>}</p>
<p>달랑 메소드 하나만 있습니다</p>
<p>저 onReceive메소드에서 액션을 수신하여 처리할 코드를 입력해 주면 되는대요</p>
<p>액션이 하나라면 문제가 없지만 2개이상일때는 각각 구분해야 할 필요가 있습니다</p>
<p>intent.getAction()</p>
<p>으로 어떤 액션인지 알수 있습니다</p>
<p>예를들어 화면 on, off, 부팅 완료, sms수신의 경우</p>
<p>if (Intent.ACTION_BOOT_COMPLETED.equals(intent.getAction())){</p>
<p>&nbsp; &nbsp; // 부팅완료</p>
<p>}</p>
<p>if (Intent.ACTION_SCREEN_ON&nbsp;== intent.getAction()) {</p>
<p>&nbsp; &nbsp; // 화면 켜짐</p>
<p>}</p>
<p>if (Intent.ACTION_SCREEN_OFF&nbsp;== intent.getAction()) {</p>
<p>&nbsp; &nbsp; // 화면 꺼짐</p>
<p>}</p>
<p>if ("android.provider.Telephony.SMS_RECEIVED".equals(intent.getAction())) {</p>
<p>&nbsp; &nbsp; // sms 수신</p>
<p>}</p>
<p>이렇게 if문을 통해 구현해 주시면 됩니다 (이때 ==이나 equals나 상관이 없다고합니다만 잘 모르겠내요)</p>
<p>참고로 Intent.ACTION_BOOT_COMPLETED이나 "android.intent.action.BOOT_COMPLETED"이나 같다고 합니다만 전자는 java에서, 후자는 xml에서 자주 보이는군요</p>
<p>이제 각각의 액션을 구분할수 있게 되었습니다</p>
<p>로그를 찍어서 한번 잘 작동하는지 보겠습니다</p>
<p>Log.d("onReceive()","부팅완료");</p>
<p>Log.d("onReceive()","스크린 ON");</p>
<p>Log.d("onReceive()","스크린 OFF");</p>
<p>Log.d("onReceive()","문자가 수신되었습니다");</p>
<p>각각 if문안에 넣어주세요</p>
<p>그다음 문자 수신의 경우는 누가 보냈는지와, 어떤 내용인지, 언제 수신했는지등의 정보를 알아야 합니다</p>
<p>이것은 일단 맨 아래에서 설명해 봅시다</p>
<p>참고로 우선순위가 낮은 브로드캐스트리시버가 수신을 못하게 하는 방법은</p>
<p>abortBroadcast();</p>
<p>를 사용하시면 됩니다</p>
<p>이제 매니페스트 파일에 등록해 봅시다</p>
<p>24-4 AndroidManifest.xml에 등록하자 (정적 등록)</p>
<p>정적 등록이라는건 한번 등록하면 수정이 안됩니다 (무조건 수신)</p>
<p>그러나 java에서 등록하면 xml보다 유동적으로 등록/해제가 가능합니다</p>
<p>사실 브로드캐스트는 등록할 필요가 그닥 없으며, xml에&nbsp;등록을 해도 받지 못하는 액션도 있습니다</p>
<p>그런 액션은 동적으로 등록해야 합니다 (24-5 참조)</p>
<p>한번 등록해 봅시다</p>
<p>&lt;receiver android:name ="whdghks913.tistory.examplebroadcastreceiver.Broadcast"&gt;</p>
<p>&nbsp; &nbsp; &lt;intent-filter&nbsp;android:priority="9999"&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;action android:name="android.intent.action.BOOT_COMPLETED"/&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;action android:name="android.provider.Telephony.SMS_RECEIVED" /&gt;&nbsp;</p>
<p>&nbsp; &nbsp; &lt;/intent-filter&gt;</p>
<p>&lt;/receiver&gt;</p>
<p>receiver를 등록하였습니다</p>
<p>저기서&nbsp;android:priority는 우선순위로, 숫자가 높을수록 우선순위가 높습니다</p>
<p>우선순위가 높은 리시버 부터 순차적으로 메세지가 전달됩니다</p>
<p>그런대 화면 on, off는 없내요?</p>
<p>그것은 위에서 말했드시 일부 액션은&nbsp;xml에 등록해도 액션을 받을수 없습니다</p>
<p>그러므로 아래에서 살펴볼&nbsp;registerReceiver()메소드를 이용해 등록해야만 합니다</p>
<p>마지막으로 부팅완료와 sms수신은&nbsp;권한이 필요합니다</p>
<p>&lt;uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" /&gt;</p>
<p>&lt;uses-permission android:name="android.permission.RECEIVE_SMS" /&gt;</p>
<p>24-5&nbsp;registerReceiver()로 등록하자 (동적 등록)</p>
<p>24-4에서 등록하지 못한 Screen on과 off는 동적으로 java파일에서만 등록이 가능한 액션의 대표적인 예입니다</p>
<p>이번에는 동적으로 등록해 보겠습니다</p>
<p>MainActivity.java를 열어주세요</p>
<p>BroadcastReceiver myReceiver = new&nbsp;Broadcast();</p>
<p>Button이나 TextView처럼 추가해 주시면 됩니다</p>
<p>굵게 표시한 Broadcast()는 java파일의 이름입니다</p>
<p>그다음 onCreate()에는</p>
<p>IntentFilter intentFilter&nbsp;= new IntentFilter(Intent.ACTION_SCREEN_ON);</p>
<p>intentFilter.addAction(Intent.ACTION_SCREEN_OFF);</p>
<p>intentFilter.addAction(Intent.ACTION_BOOT_COMPLETED);</p>
<p>intentFilter.addAction("android.provider.Telephony.SMS_RECEIVED");</p>
<p>registerReceiver(myReceiver, intentFilter);</p>
<p>Log.d("onCreate()","브로드캐스트리시버 등록됨");</p>
<p>를 입력해 봅시다</p>
<p>IntentFilter를 통해 액션을 등록한다음,&nbsp;registerReceiver()로 리시버를 등록하고 있습니다</p>
<p>마지막으로 어플을 종료할때 호출되는 onDestroy()메소드를 만들어 액티비티가 종료되면 등록을 해제합시다</p>
<p>@Override</p>
<p>protected void onDestroy() {</p>
<p>&nbsp; &nbsp; super.onDestroy();</p>
<p>&nbsp; &nbsp;&nbsp;unregisterReceiver(myReceiver);</p>
<p>&nbsp; &nbsp; Log.d("onDestory()","브로드캐스트리시버 해제됨");</p>
<p>}</p>
<p>unregisterReceiver()로 등록을 해제할수 있습니다</p>
<p>이렇게 등록된&nbsp;리시버는&nbsp;등록한 액티비티가 사라지거나 하면 등록이 해제되는 단점이 있어 죽지 않는 서비스에서 등록합니다</p>
<p>24-6 문자 내용 수신 코드</p>
<p>아래는 문자 내용을 수신하는 코드입니다</p>
<p>// SMS 메시지를 파싱합니다.</p>
<p>Bundle bundle = intent.getExtras();</p>
<p>Object messages[] = (Object[])bundle.get("pdus");</p>
<p>SmsMessage smsMessage[] = new SmsMessage[messages.length];</p>
<p>for(int i = 0; i &lt; messages.length; i++) {</p>
<p>&nbsp; &nbsp; // PDU 포맷으로 되어 있는 메시지를 복원합니다.</p>
<p>&nbsp; &nbsp; smsMessage[i] = SmsMessage.createFromPdu((byte[])messages[i]);</p>
<p>}</p>
<p>// SMS 수신 시간 확인</p>
<p>Date curDate = new Date(smsMessage[0].getTimestampMillis());</p>
<p>Log.d("문자 수신 시간", curDate.toString());</p>
<p>// SMS 발신 번호 확인</p>
<p>String origNumber = smsMessage[0].getOriginatingAddress();</p>
<p>// SMS 메시지 확인</p>
<p>String message = smsMessage[0].getMessageBody().toString();</p>
<p>Log.d("문자 내용", "발신자 : "+origNumber+", 내용 : " + message);</p>
<p>그러나 아직 어려우므로 이해하지 말고 그렇구나 하고 넘어갑시다 ㅎ</p>
<p>출처 :&nbsp;<a href="http://android-town.org/">http://android-town.org/</a></p>
<p>24-7 완성!!</p>
<p>자, 이제 모든것이 완성되었습니다</p>
<p>그럼 작동을 확인해 보겠습니다</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/20140102_127/whdghks913_1388634260049CPi20_PNG/%C4%B8%C3%B3.PNG?type=w740"></p>
<p>로그를 찍어보면 정상 작동하고 있다는 것이 나타납니다 ㅎㅎ</p>
<p>이번 강좌는 뭔가 횡설수설한 느낌이 강하네요;</p>
<p>오타가 많을거 같습니다</p>
<p>발견하시면 알려주세요 ㅎ</p>
<p></p>
<p><p>이 강좌의 예제소스는 25번 강좌가&nbsp;나오는 즉시 업로드 됩니다</p>
<p>카페에서는 원본글에서만 다운로드가 가능합니다</p>
<p>예제소스 다운로드 : 아직 25번 강좌가 업로드 되지 않았습니다</p>
</p>
<p></p>
