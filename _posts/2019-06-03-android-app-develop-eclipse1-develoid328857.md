---
layout: post
title: '#20 쓰레드(Thread)와 핸들러(Handler)'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/328857' ; </script>

<p>20번대 강좌입니다 ㅎㅎ</p>
<p>이번강좌부터는 대부분 소스위주로 볼 예정입니다</p>
<p>UI구성, 즉 xml은 언급없이 지나갈수 있습니다</p>
<p>꼭 PC버전, 그리고 원본글(티스토리)에서 봐주세요 ㅠㅠ</p>
<p>20. 쓰레드(Thread)와 핸들러(Handler)</p>
<p>20-1 쓰레드와 핸들러란?</p>
<p>네이버 지식백과에서는 아래와 같이 정의하고 있습니다</p>
<p>컴퓨터 프로그램 수행 시 프로세스 내부에 존재하는 수행 경로, 즉 일련의 실행 코드. 프로세스는 단순한 껍데기일 뿐, 실제 작업은 스레드가 담당한다. 프로세스 생성 시 하나의 주 스레드가 생성되어 대부분의 작업을 처리하고 주 스레드가 종료되면 프로세스도 종료된다. 하나의 운영 체계에서 여러 개의 프로세스가 동시에 실행되는 환경이 멀티태스킹이고, 하나의 프로세스 내에서 다수의 스레드가 동시에 수행되는 것이 멀티스레딩이다.</p>
<p>위 말을 풀어서 제 나름대로 해석하면 아래와 같습니다</p>
<p>프로그램을 실행할때, 프로그램안에 존재하는 실행 코드들이다</p>
<p>그런대 우리는 쓰레드를 처음 접하는것이 아닙니다</p>
<p>전에 프로그래스바 예제등을 통해 한두번 접해보았습니다</p>
<p>그리고 우리는 쓰레드를 처음 사용하는것도 아닙니다</p>
<p>왜냐? 어플을 실행하면 처음에 메인 쓰레드라는것이 생기기 때문입니다</p>
<p>이&nbsp;<u>메인 쓰레드</u>는 안드로이드에서 우리가&nbsp;<u>함부로 접근이 불가능</u>&nbsp;하게 막아뒀습니다</p>
<p>또한 메인 쓰레드에서만 UI를 변경할수 있습니다</p>
<p>안정성을 위함이라 하는대... 아무튼 쓰레드에 대한 기본 지식은 여기까지 알아두셔도 됩니다</p>
<p>쓰레드는 반복작업같은 것을 주로 하는대요</p>
<p>위에서 메인 쓰레드만 UI변경이 가능하다고 했습니다</p>
<p>우리가 만든 쓰레드에서는 UI변경이 불가능, 즉&nbsp;화면을 바꾸는 어떠한 일도 할수 없습니다</p>
<p>그래서 등장한것이 핸들러 입니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F2462ED3A52722CEF03CDAD%22&amp;type=cafe_wa740"></p>
<p>이런 관계를 가진다고나 할까요?</p>
<p>이번 예제에서는 이 쓰레드와 핸들러 사용법에 관해 아주 기초적인 지식만 알고 넘어가도록 하겠습니다</p>
<p>(더 자세한 지식은 저도 더 배워야 하고 좀 지난뒤에 심화로 나가면 되죠 ㅎ)</p>
<p>20-2 이번에 만들 예제는 어떤 예제 인가요?</p>
<p>저는 이 강좌를 구상할때 카운트 다운을 한번 해볼까 했습니다</p>
<p>그래서 이번에는 숫자를 입력하고, 버튼을 누르면 위에있는 TextView에 카운트 다운이 되도록 해볼까 합니다</p>
<p>이 강좌를 잘 보면 당신도 멀쩡한 카운트 다운 어플을 만들어 배포할수 있을겁니다 ^^</p>
<p>20-3 레이아웃은 어떻게 구성할까요?</p>
<p>저만 그런진 몰라도 저는 일단 어떻게 어플을 만들까 라는 아이디어가 생각나면 직관적으로 레이아웃이 떠오르더라고요 +_+</p>
<p>레이아웃은 아무렇게나 짜도 되는대 꼭 EditText, Button, TextView로 짜주시고, TextView의 글자를 없애주세요</p>
<p>(사실 매번 강좌쓸때마다 예제를 어떻게 만들까를 강좌 쓰면서 생각하지요 -_-)</p>
<p>&lt;EditText</p>
<p>&nbsp; &nbsp; android:</p>
<p>&nbsp; &nbsp; android:layout_</p>
<p>&nbsp; &nbsp; android:layout_height="wrap_content"</p>
<p>&nbsp; &nbsp; android:layout_alignParentTop="true"</p>
<p>&nbsp; &nbsp; android:layout_centerHorizontal="true"</p>
<p>&nbsp; &nbsp;&nbsp;android:inputType="number" &gt;</p>
<p>&nbsp; &nbsp; &lt;requestFocus /&gt;</p>
<p>&lt;/EditText&gt;</p>
<p>&lt;Button</p>
<p>&nbsp; &nbsp; android:</p>
<p>&nbsp; &nbsp; android:layout_</p>
<p>&nbsp; &nbsp; android:layout_height="wrap_content"</p>
<p>&nbsp; &nbsp; android:layout_below="@+id/EditText"</p>
<p>&nbsp; &nbsp; android:layout_centerHorizontal="true"</p>
<p>&nbsp; &nbsp; android:onClick="Button_Click"</p>
<p>&nbsp; &nbsp; android:text="입력하시고 터치하세요" /&gt;</p>
<p>&lt;TextView</p>
<p>&nbsp; &nbsp; android:</p>
<p>&nbsp; &nbsp; android:layout_</p>
<p>&nbsp; &nbsp; android:layout_height="wrap_content"</p>
<p>&nbsp; &nbsp; android:layout_below="@+id/Button"</p>
<p>&nbsp; &nbsp; android:layout_centerHorizontal="true"</p>
<p>&nbsp; &nbsp; android:layout_marginTop="30dp"</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; android:textSize="50dp" /&gt;</p>
<p>저는 이렇게 짰습니다 ㅎㅎ</p>
<p>20-4 자바소스로 넘어와 주세요</p>
<p>먼저 맨날 하던거 해봅시다</p>
<p>EditText EditText;</p>
<p>TextView Count_TextView;</p>
<p>Button Button;</p>
<p>int inputNumber;</p>
<p>마지막 int inputNumber은 입력한 숫자를 저장할 변수를 설정하는 것입니다</p>
<p>프로그래머는 변수를 최소한으로 사용해서 메모리 공간을 절약해야 할것입니다</p>
<p>예를 들면 String같은건 엄청나게 많은 메모리를 잡아먹습니다 ㅎ...</p>
<p>프로그래밍 하면서 가장 중요한것은</p>
<p>가장 적게 메모리를 먹고, 가장 빠르게 작동하고, 불필요한 소스가 없는 상태로 만드는것임을 꼭 기억해 주세요!!!</p>
<p>자 이제 id값을 연결해 봅시다</p>
<p>EditText = (EditText) findViewById(R.id.EditText);</p>
<p>Count_TextView = (TextView) findViewById(R.id.Count_TextView);</p>
<p>Button = (Button) findViewById(R.id.Button);</p>
<p>마지막으로 버튼을 눌렀을때 어떤 작업을 할지 메소드를 만들어 줘야합니다</p>
<p>(사실 이부분까지 쓰고 혼자서 예제를 만들어 봤는대요 꽤 길더라고요 ㅎㅎ;;)</p>
<p>자잘한 부분으로 쪼개서 봅시다</p>
<p>Part 1</p>
<p>String input = EditText.getText().toString();</p>
<p>Count_TextView.setText(input);</p>
<p>메소드의 처음은 EditText에 입력한 값을 가져오고 TextView에 적용하는 코드를 구현했습니다</p>
<p>이해다들 되시죠???</p>
<p>Part 2</p>
<p>if(input.equals("")){</p>
<p> Toast.makeText(this, "공백입니다", Toast.LENGTH_SHORT).show();</p>
<p>}else{</p>
<p>}</p>
<p>equals를 이용해 만약, 입력한것이 공백("")일경우 토스트 알림을 띄우도록 했습니다</p>
<p>Part 3부터는 저부분의 else{}안에 들어가는 코드들 입니다</p>
<p>Part 3</p>
<p>inputNumber = Integer.parseInt(input);</p>
<p>if(inputNumber==0){</p>
<p> Toast.makeText(this, "0은 입력할수 없습니다", Toast.LENGTH_SHORT).show();</p>
<p> return;</p>
<p>}</p>
<p>Button.setEnabled(false);</p>
<p>공백이 아닐경우(뭐라도 입력한경우) String값을 int로 변환합니다</p>
<p>즉 숫자로 처리할수 있게 합니다</p>
<p>0을 입력할경우에는 진행할수 없도록 return;을 이용해 메소드를 끝냅니다</p>
<p>그아래는 공백도 아니고, 0도 아닐때 버튼을 비활성화 하도록 처리했습니다</p>
<p>★★Part 4 매우매우 중요 (핵심 내용)★★</p>
<p>이부분은 매우 중요하지만 일일히 설명하기 어려우므로 상자 안에서 설명하겠습니다</p>
<p>아래에서 위로 훓터봐 주세요</p>
<p>final Handler handler = new Handler(){</p>
<p> @Override</p>
<p> public void handleMessage(Message msg){</p>
<p>  if(msg.what==1){</p>
<p>   Log.d("What Number : ", "What is 1");</p>
<p>  }else if(msg.what==2){</p>
<p>   Log.d("What Number : ", "What is 2");</p>
<p>  }</p>
<p>  Count_TextView.setText(""+inputNumber);</p>
<p>  if(inputNumber==0){</p>
<p>   Toast.makeText(MainActivity.this, "카운트가 완료되었습니다", Toast.LENGTH_SHORT).show();</p>
<p>   Button.setEnabled(true);</p>
<p>  }</p>
<p> }</p>
<p>};</p>
<p>이부분은 핸들러를 만드는 부분입니다</p>
<p>아래에 있는&nbsp;sendEmptyMessage과&nbsp;sendMessage로 이 핸들러에 메세지를 보낼수 있는대요</p>
<p>저기 보이는 what이라는것은 메세지를 구분할때 쓰입니다</p>
<p>sendEmptyMessage의 경우에는&nbsp;sendEmptyMessage(int what)으로, ()안에 what의 값을 넣어 핸들러에게 보내고요</p>
<p>sendMessage같은것은 message를 보냅니다</p>
<p>전달된 message객체에는 what값외&nbsp;arg1, arg2, obj등을 보낼수 있습니다</p>
<p>what의 값에 따라 어떤 행동을 할것인지 정해주면 됩니다</p>
<p>지금은 예제이므로 로그를 띄워 확인해 보는 작업을 해보았습니다</p>
<p>Runnable task = new Runnable(){</p>
<p>public void run(){</p>
<p>while(inputNumber &gt; 0){</p>
<p>  try {</p>
<p>   Thread.sleep(1000);</p>
<p>  } catch (InterruptedException e) {}</p>
<p>  --inputNumber;</p>
<p> handler.sendEmptyMessage(1);</p>
<p></p>
<p> Message message= Message.obtain();</p>
<p> message.what = 2;</p>
<p> handler.sendMessage(message);</p>
<p> }</p>
<p> }</p>
<p>};</p>
<p>이 부분은 Runnable을 정의하는 부분입니다</p>
<p>Runnable에 관해서는&nbsp;나중에 더 자세히 다룰예정입니다</p>
<p>일단 Thread가 시작되면 저 run()메소드가 실행되게 됩니다</p>
<p>이때 while문으로 입력한 숫자가 0보다 크면 실행되게 만듭니다(0이거나 0보다 작으면 실행이 안됩니다)</p>
<p>Thread.sleep(1000);부분은 try-catch로 묶여 있습니다</p>
<p>예외처리인대요 이것도 나중에 더 배워보도록 합시다</p>
<p>그아래 handler가 중요합니다</p>
<p>위에서 설명한것처럼&nbsp;sendEmptyMessage()는 int형 숫자를 전달합니다</p>
<p>이는 핸들러에서 msg.what으로 참조가 가능합니다 (위 참조)</p>
<p>sendEmptyMessage()아래에는 Message객체를 이용한 핸들러 메세지 전달법도 설명하고 있습니다</p>
<p>Thread thread = new Thread(task);</p>
<p>thread.start();</p>
<p>쓰레드를 실행하고 핸들러에게 메세지를 보내는 과정을 나타내면 다음과 같습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F275C384F52724663217B7B%22&amp;type=cafe_wa740"></p>
<p>(이야 제가봐도 잘만든거 같아요 ㅎㅎ(?))</p>
<p>자, 이렇게 모든 코드를 살펴보았고, 직접 짜봤습니다</p>
<p>결론을 말하자면, 값을 입력하고 버튼을 누르면</p>
<p>쓰레드가 실행되는대</p>
<p>이때 UI변경작업(setText)을 할수 없으므로 핸들러에게 "야 니가해"라는 메세지를 보냅니다</p>
<p>그 메세지를 받은 핸들러가 setText작업을 정상적으로 하여, 완성되는 것이지요 ㅎㅎ</p>
<p>끝났습니다~~</p>
<p>항상 하는 완성작을 확인해 보겠습니다</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F2712B2355272475D02D499%22&amp;type=cafe_wa740">&nbsp; &nbsp;&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fcfile30.uf.tistory.com%2Fimage%2F271334355272475D2CEEB5%22&amp;type=cafe_wa740"></p>
<p>이렇게 입력한 값이 정상적으로 카운트 다운 되는것을 확인할수 있습니다 ㅎㅎ</p>
<p>우아 이 강좌 쓰는대만&nbsp;구상하는대 2틀, 쓰는대 3시간이 걸린거 같내요 ;;</p>
<p>이번 강좌는 너무 힘들게 작성했습니다 ㅠㅠ</p>
<p>꼭 보신분들 덧글 하나라도 달아주시면 감사드리겠습니다 ㅠㅠ</p>
<p>다음 강좌에 대해서 말씀드리자면..</p>
<p>20번대 강좌에서는 알림(진행중같은거)띄우기, 서비스 사용하기, 부팅시 자동실행, 설정값 저장같은</p>
<p>정말 어플개발에 꼭 필요한 지식을 배울려고 합니다 ㅎㅎ</p>
<p>그리고 문자입력창 옆에 있는 길이 확인란 있죠? 50/140 뭐 이런거..</p>
<p>넘어가면 MMS이고...&nbsp;이거 한번 구현해 볼까 합니다 ㅎㅎ</p>
<p></p>
<p>이글은 [http://whdghks913.tistory.com/366] 에서 다시 보실수 있으며 원본 글의 저작권은 미르에게 있습니다</p>
<p></p>
<p>이 강좌의 예제소스는 21번 강좌가&nbsp;나오는 즉시 업로드 됩니다</p>
<p>카페에서는 원본글에서만 다운로드가 가능합니다</p>
<p>예제소스 다운로드 : 아직 21번 강좌가 업로드 되지 않았습니다</p>

