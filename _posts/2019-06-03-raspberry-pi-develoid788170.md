---
layout: post
title: 'Raspberry Pi 의 GPIO 사용해보기'
author: '시류아'
categories: Raspberry-Pi
tags:
- IoT-Board
- Raspberry-Pi
- GPIO
-
---


<script> location.href='https://cafe.naver.com/develoid/788170' ; </script>


















						<div>
 <div>
  <div>
   Raspberry Pi 의 GPIO 사용해보기
  </div>
 </div>
</div>
<div>
 <p>라즈베리파이에는 버전에 따라서 다르지만 아두이노처럼 GPIO 가 헤더핀포트로 제공되고있습니다. 이를 어떻게 사용할 수 있는지에 대해서 한 번 알아보도록 하겠습니다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   GPIO란?
  </div>
 </div>
</div>
<div>
 <p><span>GPIO는 General Purpose Input / Output 으로, 말 그대로 범용 입출력 인터페이스입니다. PCB, ICT보드 등 다양한 전자기판에서 내부 회로 이외 외부적으로 물리적으로 소통할 수 있는 장치로, 이를 이용해서 LED, Servo Motor 등 다양한 물리적 외부 장치들에 대해서 배선하고 연결하여 제어 할 수 있습니다.</span><span></span><span></span></p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   Raspberry Pi의 GPIO
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMTlfMjkz%2FMDAxNTIxNDE5NzE5MjQ4.PUNskS7Y-Y9cUmT9CLLB7pRZwxBr9ELAMtHhX4uuAeog.rpIisuz_DlIz5l19VFvTLVdqi8ba6jBUIaXXfEEes8kg.JPEG.searphiel9%2Fgpiohighlight.jpg%22&amp;type=cafe_wa740">
  <span>이미지 출처 : SparkFun</span>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMTlfMjcw%2FMDAxNTIxNDE5NTY0NTY4.F2d5p3_Vk1Ggzu_0VG3GcA3J2X-Dk6fHeDYcts08SuQg.ZArc2ojS2urRMo1abit2CidX6RXsCJ0x5y4H_0QSTSIg.PNG.searphiel9%2Fraspgpio.png%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p><span>라즈베리파이의 GPIO는 2버전을 기준으로 IO 개수가 달라지게됩니다. 초기 버전에는 26개의 IO를 지원하였으나 지금은 40개의 IO를 지원하게 되었습니다.<b></span><span><b></span><span>IO MAP을 보면, 라즈베리파이는 단순 디지털 입출력 뿐만 아니라, 직렬 시리얼통신(UART), I2C(Inter-Integrated Circuit), SPI(Serial Peripheral Interface), PWM(Pulse&nbsp;Width&nbsp;Modulation) 등 다양한 입출력을 제공합니다.</span></p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   GPIO 결선 준비
  </div>
 </div>
</div>
<div>
 <p><span>라즈베리파이에서 GPIO를 연결하여 한 번 간단한 디지털 입출력 제어를 해보도록 하겠습니다. 준비물은 다음과 같습니다.<b></span><span></span></p>
</div>
<div>
 <div>
  <div>
   -&nbsp;라즈베리파이&nbsp;본체(2/3/Zero&nbsp;등)
   <b>-&nbsp;LED&nbsp;2EA
   <b>-&nbsp;BUTTON&nbsp;1EA
   <b>-&nbsp;1kΩ&nbsp;이하의&nbsp;저항&nbsp;(본&nbsp;게시글에서는&nbsp;220Ω&nbsp;사용)
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMTlfODkg%2FMDAxNTIxNDIyMjE4MDA1.mI0DPRvTLmXxMnPkBdwCeT_pcnUsatOTe3WqTNEHAMMg.E2b0fK-_h0usSNrypWrR11PwuiLQ94XJv5TEvmlscnog.PNG.searphiel9%2Ftestpi_breadboard.png%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p><span>배선되는 PIN PORT는 모든 라즈베리파이가 동일합니다. 위의 이미지가 잘 보이지 않는다면 아래의 표를 참고해서 결선해주세요.</span></p>
</div>
<div>
 <div>
  <div>
   <div>























    <table style="width:75%;padding:0;font-size:14px;margin:0 auto 0;border-collapse:collapse"><tbody><tr><td colspan="1" rowspan="1" style="background-color:#fff599;border:1px solid rgb(210, 210, 210);padding:10px;margin:0;width:49.78903%;font-family:&quot;나눔고딕&quot;, nanumgothic, AppleSDGothicNeo, sans-serif, simhei;box-sizing:border-box;height:43.0px;text-align:center">
        <div>
         <span><b>Component</b></span>
        </div> </td><td colspan="1" rowspan="1" style="background-color:#fff599;border:1px solid rgb(210, 210, 210);padding:10px;margin:0;width:50.21097%;font-family:&quot;나눔고딕&quot;, nanumgothic, AppleSDGothicNeo, sans-serif, simhei;box-sizing:border-box;height:43.0px;text-align:center">
        <div>
         <b>Raspberry Pi GPIO</b>
        </div> </td></tr><tr><td colspan="1" rowspan="1" style="border:1px solid rgb(210, 210, 210);background-color:rgb(255, 255, 255);padding:10px;margin:0;width:49.78903%;font-family:&quot;나눔고딕&quot;, nanumgothic, AppleSDGothicNeo, sans-serif, simhei;box-sizing:border-box;height:43.0px;text-align:center">
        <div>
         <span>LED 1</span>
        </div> </td><td colspan="1" rowspan="1" style="border:1px solid rgb(210, 210, 210);background-color:rgb(255, 255, 255);padding:10px;margin:0;width:50.21097%;font-family:&quot;나눔고딕&quot;, nanumgothic, AppleSDGothicNeo, sans-serif, simhei;box-sizing:border-box;height:43.0px;text-align:center">
        <div>
         <span>GPIO 18</span>
        </div> </td></tr><tr><td colspan="1" rowspan="1" style="border:1px solid rgb(210, 210, 210);background-color:rgb(255, 255, 255);padding:10px;margin:0;width:49.78903%;font-family:&quot;나눔고딕&quot;, nanumgothic, AppleSDGothicNeo, sans-serif, simhei;box-sizing:border-box;height:43.0px;text-align:center">
        <div>
         LED 2
        </div> </td><td colspan="1" rowspan="1" style="border:1px solid rgb(210, 210, 210);background-color:rgb(255, 255, 255);padding:10px;margin:0;width:50.21097%;font-family:&quot;나눔고딕&quot;, nanumgothic, AppleSDGothicNeo, sans-serif, simhei;box-sizing:border-box;height:43.0px;text-align:center">
        <div>
         GPIO 23
        </div> </td></tr><tr><td colspan="1" rowspan="1" style="border:1px solid rgb(210, 210, 210);background-color:rgb(255, 255, 255);padding:10px;margin:0;width:49.78903%;font-family:&quot;나눔고딕&quot;, nanumgothic, AppleSDGothicNeo, sans-serif, simhei;box-sizing:border-box;height:43.0px;text-align:center">
        <div>
         BUTTON
        </div> </td><td colspan="1" rowspan="1" style="border:1px solid rgb(210, 210, 210);background-color:rgb(255, 255, 255);padding:10px;margin:0;width:50.21097%;font-family:&quot;나눔고딕&quot;, nanumgothic, AppleSDGothicNeo, sans-serif, simhei;box-sizing:border-box;height:43.0px;text-align:center">
        <div>
         GPIO 17
        </div> </td></tr><tr><td colspan="1" rowspan="1" style="border:1px solid rgb(210, 210, 210);background-color:rgb(255, 255, 255);padding:10px;margin:0;width:49.78903%;font-family:&quot;나눔고딕&quot;, nanumgothic, AppleSDGothicNeo, sans-serif, simhei;box-sizing:border-box;height:43.0px;text-align:center">
        <div>
         GND
        </div> </td><td colspan="1" rowspan="1" style="border:1px solid rgb(210, 210, 210);background-color:rgb(255, 255, 255);padding:10px;margin:0;width:50.21097%;font-family:&quot;나눔고딕&quot;, nanumgothic, AppleSDGothicNeo, sans-serif, simhei;box-sizing:border-box;height:43.0px;text-align:center">
        <div>
         GND
        </div> </td></tr></tbody></table>
   </div>
  </div>
 </div>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   Wiring Pi 설치 및 결선 테스트
  </div>
 </div>
</div>
<div>
 <p>C를 이용하여 라즈베리파이의 GPIO를 제어할때도 필요로 하지만, 간단하게 배선 테스트도 진행 할 수 있는 좋은 라이브러리인 Wiring Pi를 <span>터미널을 실행(단축키 <span>Ctrl+Alt+T</span></span><span>)<span>시켜서</span>&nbsp;</span>설치해보도록 하겠습니다.</p>
</div>
<div>
 <div>
  <div>
   $&nbsp;sudo&nbsp;apt-get&nbsp;install&nbsp;git-core
   <b>$&nbsp;sudo&nbsp;apt-get&nbsp;update
   <b>$&nbsp;sudo&nbsp;apt-get&nbsp;upgrade
   <b>$&nbsp;git&nbsp;clone&nbsp;git://git.drogon.net/wiringPi
   <b>$&nbsp;cd&nbsp;wiringPi
   <b>$&nbsp;git&nbsp;pull&nbsp;origin
   <b>$&nbsp;./build
  </div>
 </div>
</div>
<div>
 <p>Wiring Pi 설치가 완료되었나요? 한 번 지금 결선해놓은 것들에 대해서 테스트를 진행해보도록 하겠습니다.</p>
</div>
<div>
 <div>
  <div>
   //&nbsp;LED&nbsp;1&nbsp;테스트
   <b>$&nbsp;gpio&nbsp;-g&nbsp;mode&nbsp;18&nbsp;output
   <b>$&nbsp;gpio&nbsp;-g&nbsp;write&nbsp;18&nbsp;1
   <b>$&nbsp;gpio&nbsp;-g&nbsp;write&nbsp;18&nbsp;0
   <b>
   <b>//&nbsp;LED&nbsp;2&nbsp;테스트
   <b>$&nbsp;gpio&nbsp;-g&nbsp;mode&nbsp;23&nbsp;output
   <b>$&nbsp;gpio&nbsp;-g&nbsp;write&nbsp;23&nbsp;1
   <b>$&nbsp;gpio&nbsp;-g&nbsp;write&nbsp;23&nbsp;0
   <b>
   <b>//&nbsp;BUTTON&nbsp;테스트
   <b>$&nbsp;gpio&nbsp;-g&nbsp;mode&nbsp;17&nbsp;up
   <b>$&nbsp;gpio&nbsp;-g&nbsp;read&nbsp;17
  </div>
 </div>
</div>
<div>
 <p>정상적으로 결선이 되었다면 LED 가 동작 할 것이며, 버튼 역시 누를 경우 터미널에 결과가 나타납니다. 만일 결과가 나타나지 않는다면 한 번 배선 상태를 점검해보시길 바랍니다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   Python 또는 GCC 준비
  </div>
 </div>
</div>
<div>
 <p>기본적으로 라즈비안 등 대다수 라즈베리파이의 OS에는 Python 과 GCC 등이 있습니다. 만약 없을 경우 터미널을 실행(단축키 <span>Ctrl+Alt+T</span>)<span>시켜서</span><span>&nbsp;아래와 같이 입력하고 설치를 진행해주세요.</span></p>
</div>
<div>
 <div>
  <div>
   $&nbsp;sudo&nbsp;apt-get&nbsp;update
   <b>
   <b>//&nbsp;Python&nbsp;설치
   <b>$&nbsp;sudo&nbsp;apt-get&nbsp;install&nbsp;-y&nbsp;python-dev&nbsp;python-setuptools
   <b>
   <b>//&nbsp;GCC&nbsp;설치
   <b>$&nbsp;sudo&nbsp;apt-get&nbsp;install&nbsp;gcc&nbsp;g++
  </div>
 </div>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   gedit 설치
  </div>
 </div>
</div>
<div>
 <p>다른 에디터 등 코드를 작성 할 수 있는 많은 에디터들이 있지만, 본 게시글에서는 gedit으로 통일하여 진행하도록 하겠습니다. gedit 이 없을 경우 <span>터미널을 실행(단축키 <span>Ctrl+Alt+T</span>)<span>시켜서</span>&nbsp;</span>아래와 같이 입력해서 설치를 진행해주세요.</p>
</div>
<div>
 <div>
  <div>
   $&nbsp;sudo&nbsp;apt-get&nbsp;update
   <b>$&nbsp;sudo&nbsp;apt-get&nbsp;install&nbsp;gedit
  </div>
 </div>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   Python 으로 GPIO 실습해보기
  </div>
 </div>
</div>
<div>
 <p>Python을 이용해서 GPIO 제어를 실습해보도록 하겠습니다. 먼저&nbsp;<span>터미널을 실행(단축키 Ctrl+Alt+T)시켜서 아래와 같이 입력하여 python_code 폴더 생성 및 .py 파일을 생성, 작성준비까지 해보겠습니다.</span></p>
</div>
<div>
 <div>
  <div>
   $&nbsp;mkdir&nbsp;python_code
   <b>$&nbsp;cd&nbsp;python_code
   <b>$&nbsp;touch&nbsp;led_btn.py
   <b>$&nbsp;gedit&nbsp;led_btn.py
  </div>
 </div>
</div>
<div>
 <p>우리가 작성하려고 하는 GPIO 제어는 다음과 같습니다. 버튼을 누르면 LED2가 점멸하고, 버튼을 누르지 않은 상태에서는 LED1이 켜져있는 제어입니다. 아래의 코드를 참고해서 한 번 작성해보시길 바랍니다.</p>
</div>
<div>
 <div>
  <div>
   #&nbsp;GPIO&nbsp;라이브러리&nbsp;불러오기
   <b>import&nbsp;RPi.GPIO&nbsp;as&nbsp;GPIO
   <b>
   <b>#&nbsp;PIN&nbsp;설정
   <b>led1&nbsp;=&nbsp;18&nbsp;#&nbsp;P1&nbsp;pin&nbsp;12
   <b>led2&nbsp;=&nbsp;23&nbsp;#&nbsp;P1&nbsp;pin&nbsp;16
   <b>btn&nbsp;&nbsp;=&nbsp;17&nbsp;#&nbsp;P1&nbsp;pin&nbsp;11
   <b>
   <b>#&nbsp;GPIO&nbsp;설정
   <b>GPIO.setmode(GPIO.BCM)&nbsp;#&nbsp;브로드컴&nbsp;핀&nbsp;넘버링으로&nbsp;설정
   <b>GPIO.setup(led1,&nbsp;GPIO.OUT)&nbsp;#&nbsp;LED1에&nbsp;사용할&nbsp;18번&nbsp;핀&nbsp;OUTPUT으로&nbsp;설정
   <b>GPIO.setup(led2,&nbsp;GPIO.OUT)&nbsp;#&nbsp;LED2에&nbsp;사용할&nbsp;23번&nbsp;핀&nbsp;OUTPUT으로&nbsp;설정
   <b>GPIO.setup(btn,&nbsp;GPIO.IN,&nbsp;pull_up_down=GPIO.PUD_UP)&nbsp;#&nbsp;버튼에&nbsp;사용할&nbsp;17번&nbsp;핀&nbsp;pull-up&nbsp;타입&nbsp;input으로&nbsp;설정)
   <b>
   <b>#&nbsp;GPIO&nbsp;제어&nbsp;시작
   <b>print("Press&nbsp;CTRL+C&nbsp;to&nbsp;exit")
   <b>try:
   <b>&nbsp;&nbsp;while&nbsp;1:
   <b>&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;GPIO.input(btn):&nbsp;#&nbsp;버튼을&nbsp;누르지&nbsp;않았을때
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GPIO.output(led1,&nbsp;GPIO.HIGH)&nbsp;//&nbsp;LED1&nbsp;켜기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GPIO.output(led2,&nbsp;GPIO.LOW)&nbsp;//&nbsp;LED2&nbsp;끄기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;else:&nbsp;#&nbsp;버튼을&nbsp;눌렀을때
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GPIO.output(led0,&nbsp;GPIO.LOW)&nbsp;//&nbsp;LED1&nbsp;끄기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GPIO.output(led2,&nbsp;GPIO.HIGH)&nbsp;//&nbsp;LED2&nbsp;켜기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time.sleep(0.1)
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GPIO.output(led2,&nbsp;GPIO.LOW)&nbsp;//&nbsp;LED1&nbsp;끄기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time.sleep(0.1)
   <b>except&nbsp;KeyboardInterrupt:&nbsp;#&nbsp;Ctrl+C&nbsp;를&nbsp;눌러서&nbsp;종료&nbsp;할&nbsp;경우
   <b>&nbsp;&nbsp;GPIO.cleanup()&nbsp;#&nbsp;GPIO&nbsp;초기화
   <b>
   <b>
  </div>
 </div>
</div>
<div>
 <p>작성이 완료되셨나요? 그러면 저장(단축키 Ctrl+S)을 한 후 창을 닫고 터미널에서 아래와 같이 입력하여 실행시켜봅니다.</p>
</div>
<div>
 <div>
  <div>
   $&nbsp;sudo&nbsp;python&nbsp;led_btn.py
  </div>
 </div>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   C와 Wiring Pi 로 GPIO 실습해보기
  </div>
 </div>
</div>
<div>
 <p><span>이번에는 C와 Wiring Pi를 이용해서 GPIO 제어를 실습해보도록 하겠습니다. 먼저&nbsp;</span><span>터미널을 실행(단축키 Ctrl+Alt+T)시켜서 아래와 같이 입력하여 c_code 폴더 생성 및 .c 파일을 생성, 작성준비까지 해보겠습니다.</span></p>
</div>
<div>
 <div>
  <div>
   $&nbsp;mkdir&nbsp;c_code
   <b>$&nbsp;cd&nbsp;c_code
   <b>$&nbsp;touch&nbsp;led_btn.c
   <b>$&nbsp;gedit&nbsp;led_btn.c
  </div>
 </div>
</div>
<div>
 <p>준비 다 되셨나요? C로 제어해보려는 것 역시 Python과 동일하게&nbsp;<span>버튼을 누르면 LED2가 점멸하고, 버튼을 누르지 않은 상태에서는 LED1이 켜져있는 제어입니다. 아래의 코드를 참고해서 한 번 작성해보시길 바랍니다.</span></p>
</div>
<div>
 <div>
  <div>
   //&nbsp;라이브러리&nbsp;불러오기
   <b>#include&nbsp;&lt;stdio.h&gt;&nbsp;//&nbsp;printf&nbsp;출력목적
   <b>#include&nbsp;&lt;wiringPi.h&gt;&nbsp;//&nbsp;GPIO&nbsp;사용&nbsp;목적,&nbsp;Wiring&nbsp;Pi
   <b>
   <b>//&nbsp;PIN&nbsp;설정
   <b>int&nbsp;led0&nbsp;=&nbsp;18;
   <b>int&nbsp;led1&nbsp;=&nbsp;17;
   <b>int&nbsp;btn&nbsp;&nbsp;=&nbsp;23;
   <b>
   <b>//&nbsp;메인
   <b>int&nbsp;main(void)&nbsp;{
   <b>&nbsp;&nbsp;wiringPiSetupGpio();&nbsp;//&nbsp;GPIO&nbsp;셋업
   <b>&nbsp;&nbsp;pinMode(led0,&nbsp;OUTPUT);&nbsp;//&nbsp;LED1에&nbsp;사용할&nbsp;18번&nbsp;핀&nbsp;OUTPUT으로&nbsp;설정
   <b>&nbsp;&nbsp;pinMode(led1,&nbsp;OUTPUT);&nbsp;//&nbsp;LED2에&nbsp;사용할&nbsp;23번&nbsp;핀&nbsp;OUTPUT으로&nbsp;설정
   <b>&nbsp;&nbsp;pinMode(btn,&nbsp;INPUT);&nbsp;&nbsp;//&nbsp;BUTTON에&nbsp;사용할&nbsp;17번&nbsp;핀&nbsp;INPUT으로&nbsp;설정
   <b>
   <b>&nbsp;&nbsp;printf("Press&nbsp;CTRL+C&nbsp;to&nbsp;exit&nbsp;\n");
   <b>
   <b>&nbsp;&nbsp;while(1)&nbsp;{
   <b>&nbsp;&nbsp;&nbsp;&nbsp;if(digitalRead(btn))&nbsp;{&nbsp;//&nbsp;버튼을&nbsp;누르지&nbsp;않았을&nbsp;때
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(led0,&nbsp;HIGH);&nbsp;//&nbsp;LED1&nbsp;켜기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(led1,&nbsp;LOW);&nbsp;//&nbsp;LED2&nbsp;끄기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{&nbsp;//&nbsp;버튼을&nbsp;눌렀을때
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(led0,&nbsp;LOW);&nbsp;//&nbsp;LED1&nbsp;끄기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(led1,&nbsp;HIGH);&nbsp;//&nbsp;LED2&nbsp;껴기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;delay(100);&nbsp;//&nbsp;0.1초&nbsp;대기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(led1,&nbsp;LOW);&nbsp;//&nbsp;LED2&nbsp;끄기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;delay(100);&nbsp;//&nbsp;0.1초&nbsp;대기
   <b>&nbsp;&nbsp;&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;}
   <b>&nbsp;&nbsp;return&nbsp;0;
   <b>}
   <b>
  </div>
 </div>
</div>
<div>
 <p><span>작성이 완료되셨나요? 그러면 저장(단축키 Ctrl+S)을 한 후 창을 닫고 터미널에서 아래와 같이 입력하여 컴파일을 진행하고 실행시켜보도록 하겠습니다.</span></p>
</div>
<div>
 <div>
  <div>
   $&nbsp;gcc&nbsp;-o&nbsp;led_btn&nbsp;led_btn.c&nbsp;-l&nbsp;wiringPi
   <b>$&nbsp;sudo&nbsp;./led_btn
  </div>
 </div>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   마무리
  </div>
 </div>
</div>
<div>
 <p>이번에는 간단하게 GPIO에 대한 기본 개념과 이를 이용한 디지털 입출력 사용을 중점적으로 알아보았습니다. GPIO를 이용해서 PWM 출력을 이용한 서보제어, UART/I2C/SPI 등을 이용한 통신 등 다양하게 사용이 가능하니 한 번 하나하나 차근차근 사용해보시길 바랍니다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <p><span>소스코드에 정답은 없다. 다양한 생각이 있듯 다양한 방법이 있으며, 이는 그 중 하나다.</span></p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   참고문서
  </div>
 </div>
</div>
<div>
 <p><span><a href="https://www.raspberrypi.org/documentation/">https://www.raspberrypi.org/documentation/</a><b></span><span><a href="https://www.raspberrypi.org/documentation/"></a><a href="https://learn.sparkfun.com/tutorials/raspberry-gpio">https://learn.sparkfun.com/tutorials/raspberry-gpio</a></span><b></p>
</div>
