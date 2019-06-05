---
layout: post
title: '#18 소리를 재생해 보자 - MusicPlayer'
author: '미르'
categories: Android-App-Develop(Eclipse1)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/326936' ; </script>

<p>안녕하세요~</p>
<p>빨리 20번대 순서가 와야 본격적으로 쓰래드, 핸들러, 서비스, 설정값 저장 등등 실제 어플재작에 필요한걸 만들탠대 말이죠~...</p>
<p>아무튼 빨리 시작해 봅니다</p>
<p>이번에는 음악을 재생하는 MusicPlayer에 대해 배워보도록 하겠습니다</p>
<p>18. 소리를 재생해 보자 - MusicPlayer</p>
<p>18-1 필요한 파일이 있어요</p>
<p>안드로이드에서 음악을 재생할수 있는것은 SoundPool이라는것과 MusicPlayer 2가지가 있습니다</p>
<p>SoundPool은 이 강좌에서 다루지 않을 예정입니다</p>
<p>비프음같은 간단한 소리를 재생할때는 자주 쓰이지만 배경화면과 같이 긴 음악에는 적합하지 않아요</p>
<p>그래서 이번 강좌는 MusicPlayer만 사용하도록 하겠습니다</p>
<p>일단 필요한 파일이 하나 있습니다</p>
<p>바로 우리가 재생할 음악파일 입니다</p>
<p>저는 코난의 BGM을 선택했습니다</p>
<p>http://blog.naver.com/hyunjune01/130161271676</p>
<p>이 블로그의 두번째 첨부파일 입니다</p>
<p>음악이 준비되었다면 꼭 이름을 소문자 영어로 시작해 주시고, 대문자가 절대 들어가서는 안됩니다</p>
<p>저는 konan으로 하겠습니다 ㅎㅎ</p>
<p>이제 이 파일을 우리의 이클립스 프로젝트 안에 추가해 주어야 합니다</p>
<p>프로젝트를 만든다음 res/raw폴더를 만들후, 그안에 넣어주세요</p>
<p>[미르의 팁]</p>
<p>Q. 왜 하필이면 폴더 이름이 raw입니까?</p>
<p>A. 암묵적인 약속이랄까... 그런겁니다(?)</p>
<p>원래 아무폴더에 넣어도 되나</p>
<p>안드로이드 시스탬에서 미디어 파일은 raw폴더에 넣자 라는 암묵적인 약속이 있기에 그렇게 하는겁니다</p>
<p>ㅁ..물론 강제는 아닙니다</p>
<p>18-2&nbsp;레이아웃 패스</p>
<p>점점 강좌가 나갈수록 레이아웃은 간단해 집니다</p>
<p>&lt;Button</p>
<p>&nbsp; &nbsp; android:</p>
<p>&nbsp; &nbsp; android:layout_</p>
<p>&nbsp; &nbsp; android:layout_height="wrap_content"</p>
<p>&nbsp; &nbsp; android:layout_alignParentTop="true"</p>
<p>&nbsp; &nbsp; android:layout_centerHorizontal="true"</p>
<p>&nbsp; &nbsp; android:layout_marginTop="50dp"</p>
<p>&nbsp; &nbsp;&nbsp;android:onClick="button"</p>
<p>&nbsp; &nbsp; android:text="@string/start" /&gt;</p>
<p>&lt;SeekBar</p>
<p>&nbsp; &nbsp; android:</p>
<p>&nbsp; &nbsp; android:layout_</p>
<p>&nbsp; &nbsp; android:layout_height="wrap_content"</p>
<p>&nbsp; &nbsp; android:layout_alignParentLeft="true"</p>
<p>&nbsp; &nbsp; android:layout_below="@+id/button1"</p>
<p>&nbsp; &nbsp; android:layout_marginTop="30dp" /&gt;</p>
<p>모두 한번 배운 내용이므로 언급없이 진행하겠습니다</p>
<p>만약 이 코드가 이해가 안가신다면 이 글의 정독을 멈추고 저번 강좌를 정독해 주세요</p>
<p>중요한거라곤... onClick말고는 없습니다 ㅎ</p>
<p>18-3 자바 소스 구현</p>
<p>밤이 늦었습니다 빨리 구현해 보겠습니다</p>
<p>먼저 우리가 필요한것들 정의해야 겠죠 맨날 하던거 처럼?</p>
<p>Button button;</p>
<p>SeekBar seekbar;</p>
<p>MediaPlayer music;</p>
<p>그다음 onCreate메소드 안 내용물들 입니다</p>
<p>music = MediaPlayer.create(this, R.raw.konan);</p>
<p>music.setLooping(true);</p>
<p>맨 처음에는 MusicPlayer부터 정의해 봅시다</p>
<p>첫번째 줄은 뮤직 플레이어를 만드는 부분입니다</p>
<p>저기 this옆에 있는 R.raw.konan은 아까 집어넣은 음악파일의 이름이 되겠습니다</p>
<p>그 다음 아래에 있는 코드는 무한 반복설정입니다</p>
<p>true는 무한반복, false는 무한반복 안함의 뜻으로 저는 true로 설정했습니다</p>
<p>button = (Button) findViewById(R.id.button1);</p>
<p>seekbar = (SeekBar) findViewById(R.id.seekBar1);</p>
<p>이건 지겹게 봐서 아실거고...ㅋㅋㅋ</p>
<p>아래가 중요합니다</p>
<p>이 예제에서는 SeekBar를 움직이면 재생 위치가 변하게 만들 예정입니다</p>
<p>seekbar.setMax(music.getDuration());</p>
<p>seekbar.setOnSeekBarChangeListener(new OnSeekBarChangeListener() {</p>
<p> @Override</p>
<p> public void onStopTrackingTouch(SeekBar seekBar) {</p>
<p>  // TODO Auto-generated method stub</p>
<p> }</p>
<p> </p>
<p> @Override</p>
<p> public void onStartTrackingTouch(SeekBar seekBar) {</p>
<p>  // TODO Auto-generated method stub</p>
<p> }</p>
<p> </p>
<p> @Override</p>
<p> public void onProgressChanged(SeekBar seekBar, int progress,</p>
<p>   boolean fromUser) {</p>
<p>  // TODO Auto-generated method stub</p>
<p>  if(fromUser)</p>
<p>   music.seekTo(progress);</p>
<p> }</p>
<p>});</p>
<p>먼저&nbsp;seekbar.setMax(music.getDuration()); 이부분을 봅시다</p>
<p>setMax는 배운 것이므로 아시고&nbsp;music.getDuration()는 뭘까요?</p>
<p>이건 음악의 총 길이를 가져오는 코드 입니다</p>
<p>즉 SeekBar의 총 길이를 음악의 총길이로 설정하는 것이지요!</p>
<p>그아래에는 Listener가 있내요</p>
<p>onProgressChanged()를 봅시다</p>
<p>여기서 볼수 있는 코드는 두줄, 그전&nbsp;fromUser에 대해 배워봅시다</p>
<p>onProgressChanged()메소드가 실행될때 세번째로 값이 넘어오는&nbsp;fromUser</p>
<p>이것은 사용자가 움직여서 값이 변한거면 true, 소스 또는 setProgress등으로 변한것이면 false가 됩니다</p>
<p>아래 코드를 봅시다</p>
<p>if(fromUser)</p>
<p> music.seekTo(progress);</p>
<p>이것을 보면 사용자가 SeekBar를 움직였을때만 if가 실행되게 되었습니다</p>
<p>그럼 또 seekTo는 뭐냐...</p>
<p>간단합니다 재생 위치를 바꿔주는 것입니다</p>
<p>즉 SeekBar를 사용자가&nbsp;움직일때마다 재생 위치가 변하는 거죠</p>
<p>이제 위에서 버튼에 주었던 android:onClick과 맞는 메소드를 만들어야 겠죠??</p>
<p>public void button(View v){</p>
<p>if(music.isPlaying()){</p>
<p>// 재생중이면 실행될 작업 (정지)</p>
<p> music.stop();</p>
<p> try {</p>
<p>  music.prepare();</p>
<p> } catch (IllegalStateException e) {</p>
<p>  e.printStackTrace();</p>
<p> } catch (IOException e) {</p>
<p>  e.printStackTrace();</p>
<p> }</p>
<p> music.seekTo(0);</p>
<p> button.setText(R.string.start);</p>
<p> seekbar.setProgress(0);</p>
<p> }else{</p>
<p>// 재생중이 아니면 실행될 작업 (재생)</p>
<p> music.start();</p>
<p> button.setText(R.string.stop);</p>
<p> </p>
<p> Thread();</p>
<p>}</p>
<p>}</p>
<p>자, 먼저&nbsp;music.isPlaying()를 봅시다</p>
<p>이름에서 알다싶이 이건 재생중이면 true, 아니면 false를 반환합니다</p>
<p>재생중이면 정지, 재생중이 아니면 재생</p>
<p>뭐 이런것이죠 ㅎ</p>
<p>그다음에 설명해야 할건&nbsp;seekTo입니다</p>
<p>이것은 어디를 재생할것인지 설정하는것으로 위에서 언급한 내용 그대로 입니다</p>
<p>다만 여기서는 0으로 설정해 처음으로 돌아가는 것이죠 ㅎㅎ</p>
<p>마지막&nbsp;Thread();는 Thread라는 이름을 가진 메소드를 실행하는 것입니다</p>
<p>아직 정의하지 않았으므로 만들어 봅시다</p>
<p>public void Thread(){</p>
<p> Runnable task = new Runnable(){</p>
<p>  public void run(){</p>
<p>   /**</p>
<p>   &nbsp;* while문을 돌려서 음악이 실행중일때 게속 돌아가게 합니다</p>
<p>   &nbsp;*/</p>
<p>   while(music.isPlaying()){</p>
<p>    try {</p>
<p>     Thread.sleep(1000);</p>
<p>    } catch (InterruptedException e) {</p>
<p>     // TODO Auto-generated catch block</p>
<p>     e.printStackTrace();</p>
<p>    }</p>
<p>    /**</p>
<p>    &nbsp;* music.getCurrentPosition()은 현재 음악 재생 위치를 가져오는 구문 입니다</p>
<p>    &nbsp;*/</p>
<p>    seekbar.setProgress(music.getCurrentPosition());</p>
<p>   }</p>
<p>  }</p>
<p> };</p>
<p> Thread thread = new Thread(task);</p>
<p> thread.start();</p>
<p>}</p>
<p>대부분 위에서 언급된것인대...</p>
<p>Runnable이라던지 Thread는 20번대 강좌에서 자세하게 배울 예정이므로 지금은 패스해 줍시다</p>
<p>지금 배울것은&nbsp;seekbar.setProgress(music.getCurrentPosition()); 부분 입니다</p>
<p>music.getCurrentPosition()은 뭘까요?</p>
<p>눈치 빠르신 분들은 아시겠지만 이건 현재 재생되고 있는 위치를 가져오는 겁니다</p>
<p>Thread.sleep(1000);으로 인해&nbsp;1초씩 건너서 쉬므로</p>
<p>1초마다 SeekBar가 움직이게 됩니다</p>
<p>이렇게 해서 노래를 재생하는 방법에 대해 알아봤습니다</p>
<p>구동영상은 동영상으로 확인해 보겠습니다</p>
<p><iframe frame scrolling="no" name="mplayer" title="플레이어"  height="405" src="https://serviceapi.nmv.naver.com/view/ugcPlayer.nhn?vid=4ED38C615268B1C1637FA1F9C4B3F1CB3996&amp;inKey=V125cb2340dad1cb2a17cd0b492e3fe1def8498d157672dda7b8d1d592adca3d299c5d0b492e3fe1def84&amp;wmode=opaque&amp;hasLink=0&amp;autoPlay=false&amp;beginTime=0" allowfullscreen="allowfullscreen"></iframe></p>
<p></p>
<p>모든 기능이 잘 작동하는것으로 확인되었습니다 ㅎㅎ</p>
<p>조금 어려웠나요?</p>
<p>당장 이해가 안되더라도 쭉 가다보면 언젠간 이해가 될겁니다 ㅎㅎ</p>
<p>이 강좌의 예제소스는 19번 강좌가&nbsp;나오는 즉시 업로드 됩니다</p>
<p>카페에서는 원본글에서만 다운로드가 가능합니다</p>
<p>예제소스 다운로드 : 아직 19번 강좌가 업로드 되지 않았습니다</p>
<p>다음 강좌는 진동에 대해 살펴볼 생각입니다</p>
<p>대부분의 강좌에서 진동은 그냥 위잉~ 이렇게만 언급하는대 제 강좌에서는 진동에 패턴까지 넣어서 위잉~...~윙~... 이런거 까지 해보도록 하겠습니다 ㅎㅎ</p>
<p></p>
<p>이글은 [<a href="http://whdghks913.tistory.com/364">http://whdghks913.tistory.com/364</a>] 에서 다시 보실수 있으며 원본 글의 저작권은 미르에게 있습니다</p>
<p></p>
<p>참조 :&nbsp;<a href="http://nephilim.tistory.com/56">http://nephilim.tistory.com/56</a></p>
<p><a href="http://naiacinn.tistory.com/109">http://naiacinn.tistory.com/109</a></p>
<p><a href="http://indy9052.blog.me/120142002766">http://indy9052.blog.me/120142002766</a></p>

