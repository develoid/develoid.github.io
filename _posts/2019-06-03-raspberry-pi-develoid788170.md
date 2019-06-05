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

<p>
 <p>
  <p>
   Raspberry Pi 의 GPIO 사용해보기
  </p>

 </p>

</p>

<p>
 <p>라즈베리파이에는 버전에 따라서 다르지만 아두이노처럼 GPIO 가 헤더핀포트로 제공되고있습니다. 이를 어떻게 사용할 수 있는지에 대해서 한 번 알아보도록 하겠습니다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   GPIO란?
  </p>

 </p>

</p>

<p>
 <p>GPIO는 General Purpose Input / Output 으로, 말 그대로 범용 입출력 인터페이스입니다. PCB, ICT보드 등 다양한 전자기판에서 내부 회로 이외 외부적으로 물리적으로 소통할 수 있는 장치로, 이를 이용해서 LED, Servo Motor 등 다양한 물리적 외부 장치들에 대해서 배선하고 연결하여 제어 할 수 있습니다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   Raspberry Pi의 GPIO
  </p>

 </p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMTlfMjkz%2FMDAxNTIxNDE5NzE5MjQ4.PUNskS7Y-Y9cUmT9CLLB7pRZwxBr9ELAMtHhX4uuAeog.rpIisuz_DlIz5l19VFvTLVdqi8ba6jBUIaXXfEEes8kg.JPEG.searphiel9%2Fgpiohighlight.jpg%22&amp;type=cafe_wa740">
  이미지 출처 : SparkFun
 </p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMTlfMjcw%2FMDAxNTIxNDE5NTY0NTY4.F2d5p3_Vk1Ggzu_0VG3GcA3J2X-Dk6fHeDYcts08SuQg.ZArc2ojS2urRMo1abit2CidX6RXsCJ0x5y4H_0QSTSIg.PNG.searphiel9%2Fraspgpio.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>라즈베리파이의 GPIO는 2버전을 기준으로 IO 개수가 달라지게됩니다. 초기 버전에는 26개의 IO를 지원하였으나 지금은 40개의 IO를 지원하게 되었습니다.IO MAP을 보면, 라즈베리파이는 단순 디지털 입출력 뿐만 아니라, 직렬 시리얼통신(UART), I2C(Inter-Integrated Circuit), SPI(Serial Peripheral Interface), PWM(Pulse&nbsp;Width&nbsp;Modulation) 등 다양한 입출력을 제공합니다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   GPIO 결선 준비
  </p>

 </p>

</p>

<p>
 <p>라즈베리파이에서 GPIO를 연결하여 한 번 간단한 디지털 입출력 제어를 해보도록 하겠습니다. 준비물은 다음과 같습니다.</p>

</p>

<p>
 <p>
  <p>
   -&nbsp;라즈베리파이&nbsp;본체(2/3/Zero&nbsp;등)
   -&nbsp;LED&nbsp;2EA
   -&nbsp;BUTTON&nbsp;1EA
   -&nbsp;1kΩ&nbsp;이하의&nbsp;저항&nbsp;(본&nbsp;게시글에서는&nbsp;220Ω&nbsp;사용)
  </p>

 </p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMTlfODkg%2FMDAxNTIxNDIyMjE4MDA1.mI0DPRvTLmXxMnPkBdwCeT_pcnUsatOTe3WqTNEHAMMg.E2b0fK-_h0usSNrypWrR11PwuiLQ94XJv5TEvmlscnog.PNG.searphiel9%2Ftestpi_breadboard.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>배선되는 PIN PORT는 모든 라즈베리파이가 동일합니다. 위의 이미지가 잘 보이지 않는다면 아래의 표를 참고해서 결선해주세요.</p>

</p>

<p>
 <p>
  <p>
   <p>























    <table ><tbody><tr><td colspan="1" rowspan="1" >
        <p>
         Component
        </p>
 </td><td colspan="1" rowspan="1" >
        <p>
         Raspberry Pi GPIO
        </p>
 </td></tr><tr><td colspan="1" rowspan="1" >
        <p>
         LED 1
        </p>
 </td><td colspan="1" rowspan="1" >
        <p>
         GPIO 18
        </p>
 </td></tr><tr><td colspan="1" rowspan="1" >
        <p>
         LED 2
        </p>
 </td><td colspan="1" rowspan="1" >
        <p>
         GPIO 23
        </p>
 </td></tr><tr><td colspan="1" rowspan="1" >
        <p>
         BUTTON
        </p>
 </td><td colspan="1" rowspan="1" >
        <p>
         GPIO 17
        </p>
 </td></tr><tr><td colspan="1" rowspan="1" >
        <p>
         GND
        </p>
 </td><td colspan="1" rowspan="1" >
        <p>
         GND
        </p>
 </td></tr></tbody></table>
   </p>

  </p>

 </p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   Wiring Pi 설치 및 결선 테스트
  </p>

 </p>

</p>

<p>
 <p>C를 이용하여 라즈베리파이의 GPIO를 제어할때도 필요로 하지만, 간단하게 배선 테스트도 진행 할 수 있는 좋은 라이브러리인 Wiring Pi를 터미널을 실행(단축키 Ctrl+Alt+T)시켜서&nbsp;설치해보도록 하겠습니다.</p>

</p>

<p>
 <p>
  <p>
   $&nbsp;sudo&nbsp;apt-get&nbsp;install&nbsp;git-core
   $&nbsp;sudo&nbsp;apt-get&nbsp;update
   $&nbsp;sudo&nbsp;apt-get&nbsp;upgrade
   $&nbsp;git&nbsp;clone&nbsp;git://git.drogon.net/wiringPi
   $&nbsp;cd&nbsp;wiringPi
   $&nbsp;git&nbsp;pull&nbsp;origin
   $&nbsp;./build
  </p>

 </p>

</p>

<p>
 <p>Wiring Pi 설치가 완료되었나요? 한 번 지금 결선해놓은 것들에 대해서 테스트를 진행해보도록 하겠습니다.</p>

</p>

<p>
 <p>
  <p>
   //&nbsp;LED&nbsp;1&nbsp;테스트
   $&nbsp;gpio&nbsp;-g&nbsp;mode&nbsp;18&nbsp;output
   $&nbsp;gpio&nbsp;-g&nbsp;write&nbsp;18&nbsp;1
   $&nbsp;gpio&nbsp;-g&nbsp;write&nbsp;18&nbsp;0
   
   //&nbsp;LED&nbsp;2&nbsp;테스트
   $&nbsp;gpio&nbsp;-g&nbsp;mode&nbsp;23&nbsp;output
   $&nbsp;gpio&nbsp;-g&nbsp;write&nbsp;23&nbsp;1
   $&nbsp;gpio&nbsp;-g&nbsp;write&nbsp;23&nbsp;0
   
   //&nbsp;BUTTON&nbsp;테스트
   $&nbsp;gpio&nbsp;-g&nbsp;mode&nbsp;17&nbsp;up
   $&nbsp;gpio&nbsp;-g&nbsp;read&nbsp;17
  </p>

 </p>

</p>

<p>
 <p>정상적으로 결선이 되었다면 LED 가 동작 할 것이며, 버튼 역시 누를 경우 터미널에 결과가 나타납니다. 만일 결과가 나타나지 않는다면 한 번 배선 상태를 점검해보시길 바랍니다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   Python 또는 GCC 준비
  </p>

 </p>

</p>

<p>
 <p>기본적으로 라즈비안 등 대다수 라즈베리파이의 OS에는 Python 과 GCC 등이 있습니다. 만약 없을 경우 터미널을 실행(단축키 Ctrl+Alt+T)시켜서&nbsp;아래와 같이 입력하고 설치를 진행해주세요.</p>

</p>

<p>
 <p>
  <p>
   $&nbsp;sudo&nbsp;apt-get&nbsp;update
   
   //&nbsp;Python&nbsp;설치
   $&nbsp;sudo&nbsp;apt-get&nbsp;install&nbsp;-y&nbsp;python-dev&nbsp;python-setuptools
   
   //&nbsp;GCC&nbsp;설치
   $&nbsp;sudo&nbsp;apt-get&nbsp;install&nbsp;gcc&nbsp;g++
  </p>

 </p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   gedit 설치
  </p>

 </p>

</p>

<p>
 <p>다른 에디터 등 코드를 작성 할 수 있는 많은 에디터들이 있지만, 본 게시글에서는 gedit으로 통일하여 진행하도록 하겠습니다. gedit 이 없을 경우 터미널을 실행(단축키 Ctrl+Alt+T)시켜서&nbsp;아래와 같이 입력해서 설치를 진행해주세요.</p>

</p>

<p>
 <p>
  <p>
   $&nbsp;sudo&nbsp;apt-get&nbsp;update
   $&nbsp;sudo&nbsp;apt-get&nbsp;install&nbsp;gedit
  </p>

 </p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   Python 으로 GPIO 실습해보기
  </p>

 </p>

</p>

<p>
 <p>Python을 이용해서 GPIO 제어를 실습해보도록 하겠습니다. 먼저&nbsp;터미널을 실행(단축키 Ctrl+Alt+T)시켜서 아래와 같이 입력하여 python_code 폴더 생성 및 .py 파일을 생성, 작성준비까지 해보겠습니다.</p>

</p>

<p>
 <p>
  <p>
   $&nbsp;mkdir&nbsp;python_code
   $&nbsp;cd&nbsp;python_code
   $&nbsp;touch&nbsp;led_btn.py
   $&nbsp;gedit&nbsp;led_btn.py
  </p>

 </p>

</p>

<p>
 <p>우리가 작성하려고 하는 GPIO 제어는 다음과 같습니다. 버튼을 누르면 LED2가 점멸하고, 버튼을 누르지 않은 상태에서는 LED1이 켜져있는 제어입니다. 아래의 코드를 참고해서 한 번 작성해보시길 바랍니다.</p>

</p>

<p>
 <p>
  <p>
   #&nbsp;GPIO&nbsp;라이브러리&nbsp;불러오기
   import&nbsp;RPi.GPIO&nbsp;as&nbsp;GPIO
   
   #&nbsp;PIN&nbsp;설정
   led1&nbsp;=&nbsp;18&nbsp;#&nbsp;P1&nbsp;pin&nbsp;12
   led2&nbsp;=&nbsp;23&nbsp;#&nbsp;P1&nbsp;pin&nbsp;16
   btn&nbsp;&nbsp;=&nbsp;17&nbsp;#&nbsp;P1&nbsp;pin&nbsp;11
   
   #&nbsp;GPIO&nbsp;설정
   GPIO.setmode(GPIO.BCM)&nbsp;#&nbsp;브로드컴&nbsp;핀&nbsp;넘버링으로&nbsp;설정
   GPIO.setup(led1,&nbsp;GPIO.OUT)&nbsp;#&nbsp;LED1에&nbsp;사용할&nbsp;18번&nbsp;핀&nbsp;OUTPUT으로&nbsp;설정
   GPIO.setup(led2,&nbsp;GPIO.OUT)&nbsp;#&nbsp;LED2에&nbsp;사용할&nbsp;23번&nbsp;핀&nbsp;OUTPUT으로&nbsp;설정
   GPIO.setup(btn,&nbsp;GPIO.IN,&nbsp;pull_up_down=GPIO.PUD_UP)&nbsp;#&nbsp;버튼에&nbsp;사용할&nbsp;17번&nbsp;핀&nbsp;pull-up&nbsp;타입&nbsp;input으로&nbsp;설정)
   
   #&nbsp;GPIO&nbsp;제어&nbsp;시작
   print("Press&nbsp;CTRL+C&nbsp;to&nbsp;exit")
   try:
   &nbsp;&nbsp;while&nbsp;1:
   &nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;GPIO.input(btn):&nbsp;#&nbsp;버튼을&nbsp;누르지&nbsp;않았을때
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GPIO.output(led1,&nbsp;GPIO.HIGH)&nbsp;//&nbsp;LED1&nbsp;켜기
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GPIO.output(led2,&nbsp;GPIO.LOW)&nbsp;//&nbsp;LED2&nbsp;끄기
   &nbsp;&nbsp;&nbsp;&nbsp;else:&nbsp;#&nbsp;버튼을&nbsp;눌렀을때
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GPIO.output(led0,&nbsp;GPIO.LOW)&nbsp;//&nbsp;LED1&nbsp;끄기
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GPIO.output(led2,&nbsp;GPIO.HIGH)&nbsp;//&nbsp;LED2&nbsp;켜기
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time.sleep(0.1)
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GPIO.output(led2,&nbsp;GPIO.LOW)&nbsp;//&nbsp;LED1&nbsp;끄기
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time.sleep(0.1)
   except&nbsp;KeyboardInterrupt:&nbsp;#&nbsp;Ctrl+C&nbsp;를&nbsp;눌러서&nbsp;종료&nbsp;할&nbsp;경우
   &nbsp;&nbsp;GPIO.cleanup()&nbsp;#&nbsp;GPIO&nbsp;초기화
   
   
  </p>

 </p>

</p>

<p>
 <p>작성이 완료되셨나요? 그러면 저장(단축키 Ctrl+S)을 한 후 창을 닫고 터미널에서 아래와 같이 입력하여 실행시켜봅니다.</p>

</p>

<p>
 <p>
  <p>
   $&nbsp;sudo&nbsp;python&nbsp;led_btn.py
  </p>

 </p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   C와 Wiring Pi 로 GPIO 실습해보기
  </p>

 </p>

</p>

<p>
 <p>이번에는 C와 Wiring Pi를 이용해서 GPIO 제어를 실습해보도록 하겠습니다. 먼저&nbsp;터미널을 실행(단축키 Ctrl+Alt+T)시켜서 아래와 같이 입력하여 c_code 폴더 생성 및 .c 파일을 생성, 작성준비까지 해보겠습니다.</p>

</p>

<p>
 <p>
  <p>
   $&nbsp;mkdir&nbsp;c_code
   $&nbsp;cd&nbsp;c_code
   $&nbsp;touch&nbsp;led_btn.c
   $&nbsp;gedit&nbsp;led_btn.c
  </p>

 </p>

</p>

<p>
 <p>준비 다 되셨나요? C로 제어해보려는 것 역시 Python과 동일하게&nbsp;버튼을 누르면 LED2가 점멸하고, 버튼을 누르지 않은 상태에서는 LED1이 켜져있는 제어입니다. 아래의 코드를 참고해서 한 번 작성해보시길 바랍니다.</p>

</p>

<p>
 <p>
  <p>
   //&nbsp;라이브러리&nbsp;불러오기
   #include&nbsp;&lt;stdio.h&gt;&nbsp;//&nbsp;printf&nbsp;출력목적
   #include&nbsp;&lt;wiringPi.h&gt;&nbsp;//&nbsp;GPIO&nbsp;사용&nbsp;목적,&nbsp;Wiring&nbsp;Pi
   
   //&nbsp;PIN&nbsp;설정
   int&nbsp;led0&nbsp;=&nbsp;18;
   int&nbsp;led1&nbsp;=&nbsp;17;
   int&nbsp;btn&nbsp;&nbsp;=&nbsp;23;
   
   //&nbsp;메인
   int&nbsp;main(void)&nbsp;{
   &nbsp;&nbsp;wiringPiSetupGpio();&nbsp;//&nbsp;GPIO&nbsp;셋업
   &nbsp;&nbsp;pinMode(led0,&nbsp;OUTPUT);&nbsp;//&nbsp;LED1에&nbsp;사용할&nbsp;18번&nbsp;핀&nbsp;OUTPUT으로&nbsp;설정
   &nbsp;&nbsp;pinMode(led1,&nbsp;OUTPUT);&nbsp;//&nbsp;LED2에&nbsp;사용할&nbsp;23번&nbsp;핀&nbsp;OUTPUT으로&nbsp;설정
   &nbsp;&nbsp;pinMode(btn,&nbsp;INPUT);&nbsp;&nbsp;//&nbsp;BUTTON에&nbsp;사용할&nbsp;17번&nbsp;핀&nbsp;INPUT으로&nbsp;설정
   
   &nbsp;&nbsp;printf("Press&nbsp;CTRL+C&nbsp;to&nbsp;exit&nbsp;\n");
   
   &nbsp;&nbsp;while(1)&nbsp;{
   &nbsp;&nbsp;&nbsp;&nbsp;if(digitalRead(btn))&nbsp;{&nbsp;//&nbsp;버튼을&nbsp;누르지&nbsp;않았을&nbsp;때
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(led0,&nbsp;HIGH);&nbsp;//&nbsp;LED1&nbsp;켜기
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(led1,&nbsp;LOW);&nbsp;//&nbsp;LED2&nbsp;끄기
   &nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{&nbsp;//&nbsp;버튼을&nbsp;눌렀을때
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(led0,&nbsp;LOW);&nbsp;//&nbsp;LED1&nbsp;끄기
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(led1,&nbsp;HIGH);&nbsp;//&nbsp;LED2&nbsp;껴기
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;delay(100);&nbsp;//&nbsp;0.1초&nbsp;대기
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(led1,&nbsp;LOW);&nbsp;//&nbsp;LED2&nbsp;끄기
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;delay(100);&nbsp;//&nbsp;0.1초&nbsp;대기
   &nbsp;&nbsp;&nbsp;&nbsp;}
   &nbsp;&nbsp;}
   &nbsp;&nbsp;return&nbsp;0;
   }
   
  </p>

 </p>

</p>

<p>
 <p>작성이 완료되셨나요? 그러면 저장(단축키 Ctrl+S)을 한 후 창을 닫고 터미널에서 아래와 같이 입력하여 컴파일을 진행하고 실행시켜보도록 하겠습니다.</p>

</p>

<p>
 <p>
  <p>
   $&nbsp;gcc&nbsp;-o&nbsp;led_btn&nbsp;led_btn.c&nbsp;-l&nbsp;wiringPi
   $&nbsp;sudo&nbsp;./led_btn
  </p>

 </p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   마무리
  </p>

 </p>

</p>

<p>
 <p>이번에는 간단하게 GPIO에 대한 기본 개념과 이를 이용한 디지털 입출력 사용을 중점적으로 알아보았습니다. GPIO를 이용해서 PWM 출력을 이용한 서보제어, UART/I2C/SPI 등을 이용한 통신 등 다양하게 사용이 가능하니 한 번 하나하나 차근차근 사용해보시길 바랍니다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>소스코드에 정답은 없다. 다양한 생각이 있듯 다양한 방법이 있으며, 이는 그 중 하나다.</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   참고문서
  </p>

 </p>

</p>

<p>
 <p><a href="https://www.raspberrypi.org/documentation/">https://www.raspberrypi.org/documentation/</a><a href="https://www.raspberrypi.org/documentation/"></a><a href="https://learn.sparkfun.com/tutorials/raspberry-gpio">https://learn.sparkfun.com/tutorials/raspberry-gpio</a></p>

</p>

