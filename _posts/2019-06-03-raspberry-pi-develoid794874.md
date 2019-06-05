---
layout: post
title: 'Raspberry Pi - Android Things install image build'
author: '시류아'
categories: Raspberry-Pi
tags:
- IoT-Board
- Raspberry-Pi
- Android-Things
-
---


<script> location.href='https://cafe.naver.com/develoid/794874' ; </script>

<p>
 <p>우리가 많이 사용하고 있는 IoT 보드인 Raspberry Pi에 작년(2017년) 구글에서 공개한 IoT용 안드로이드 플랫폼인 Android Things의 설치 이미지파일을 한 번 만드는 과정을 한 번 정리해보았습니다.* Android Things 가 무엇인지는 다음 글 중 하나로 준비중이니 참고부탁드립니다 :)</p>

</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>
  <p>
   Android Things
   Install Image Build
  </p>

 </p>

</p>

<p>
 <a href="https://developer.android.com/things/index.html">   <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fdthumb.phinf.naver.net%2F%3Fsrc%3D%2522https%253A%252F%252Fdeveloper.android.com%252Fthings%252Fimages%252Fgraphic_bugdroid.png%2522%26amp%3Btype%3Dff120%22&amp;type=cafe_wa740">   Android Things | Android Things Android Things Build connected devices for a wide variety of consumer, retail, and industrial applications Get Started Watch the Intro Video The ease and power of Android If you can build an app, you can build a device The Android ecosystem Leverage existing Android development tools, APIs developer.android.com    자세히보기 </a>
</p>

<p>
 <p>먼저 위의 링크를 통해서 Android Things 소개 페이지로 접속, 우측 상단의 "CONSOLE" 버튼을 눌러서 콘솔페이지로 이동합니다.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfMjk4%2FMDAxNTI0NjIyNDE4MDAx.FnxaassNMfrdQxSCVAq9mWP7_Mc9zsa8TXro06xFQocg.YrjIRILkEcR2x3HiWs_YbvLdPS7HDdYxO7gnzA_H3FAg.PNG.searphiel9%2F0001.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>콘솔창으로 들어가면 "CREATE A PRODUCT"가 우리를 반겨줍니다. 클릭해주세요 :)</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfMTEx%2FMDAxNTI0NjIyNDE4MDAw.3KTq71bw2CvDrFYrIbRNyonaH4LbjfUBWnfZ90c8fMEg.MdAku1AEEb2PEtQyn1qNIOfRGRHtoZwXOjcngFyeIswg.PNG.searphiel9%2F0002.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>새로운 Product를 생성하는 창이 나타납니다. name에는 본인이 원하는 이름을, SOM Type에는 "Raspberry Pi 3"를(호환되는 다른 기기일 경우 다른 기기 선택하시면 됩니다), Description에는 대략적인 설명을 적어주세요.본 가이드에서는&nbsp;My Raspberry Pi 3, Raspberry Pi 3, My Raspberry Pi's Android Things 로 작성하고 생성하였습니다.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfMzkg%2FMDAxNTI0NjIyNDE3OTc5.9_08d0jjQLUIwE_JHeXKkI8lKDekvIGhspk2bMlxZ5og.jrf-nh_HJCQ4HA0g8UiLAbN82Yw3RwGNRn9WGU5J95Eg.PNG.searphiel9%2F0003.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>그럼 Product 의 콘솔 페이지로 넘어옵니다. 이 페이지에서는 어떤 인원들과 공유 할 것인지, Product Name이랑 Description에 대해서 수정 할 수 있습니다.위쪽 Models 에 있는 "dvoh8h"(Product 별로 이름이 다릅니다. 저 위치쯤 있는 항목이라 생각해주세요)를 클릭합니다.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfMzUg%2FMDAxNTI0NjIyNDE3OTY5.b4tBFd6oA9qvb8f18T-mE8zS1P1LHJFksD3AXROS0G4g.yk19MqJe9UEB3-hgPMnDfFeigpBu4plEqpZhFIQuLd8g.PNG.searphiel9%2F0004.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>그럼, Image 빌드 페이지로 넘어오게 됩니다. 빌드한 이미지는 이 페이지에서 확인 가능하고 다운로드 받을 수 있습니다.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfMTA1%2FMDAxNTI0NjIyNDE3OTc5.mvuhgr5dg7XZc0yxk_vn6CzYmUAgS8JtHw5JAFDBFnEg.AeEYfHjnZfZt1oDIIuUCkED710tzl7CFZ7HSNzHwxOUg.PNG.searphiel9%2F0005.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>우측 "NEW"를 클릭하시고 "Create from existing build"를 클릭해주세요.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfMTgg%2FMDAxNTI0NjIyNDE3OTgw.LIVXF5gxPxjOrOvz68y1qv185QOxrC9NjLmwe6Vwgt8g.7VrL1lzmA8JZ0RcpLPkCpBfngEPiasOV1j17pj4zfx8g.PNG.searphiel9%2F0006.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>그럼 "Choose a build" 창으로 넘어오고 이미지 목록을 띄워줍니다. 우리는 처음 생성했으니 당연히 빌드해놓은 이미지가 없겠지요? "Create a build configuration"을 클릭합니다.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfMTIy%2FMDAxNTI0NjIyNDE4MDQx.BHulQxoQoE38KouJ-aBvJMZZlMkQaLsfI-2RKu0yryYg.htv7eHY0djVOdO23mviQT_2gnPBzvyLMHz_8ngpNr08g.PNG.searphiel9%2F0007.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>그럼 이미지를 생성하는 페이지로 넘어왔습니다. 먼저 Name을 기입해주세요.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfMzgg%2FMDAxNTI0NjIyNDE4MDkw.DrjpoXdY6M0Z9D1MvQKGq9icpte3V57xttudW0YqDRgg.ita9HinJ-vb_xG1vkcoFwBpmeEK-oFxcrLhyPMs7Hckg.PNG.searphiel9%2F0008.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>그리고 사용하실 Android Things의 버전을 선택해주세요.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfOTMg%2FMDAxNTI0NjIyNDE4MTEx.9QBUjmtn4DODwCHUf2Gdgt6cUu4r6vs_WJFFgAyHT4kg.6wN-6gnUsuhUzl9wwLEHIzPy68W3XqxVNInSjSAwe4gg.PNG.searphiel9%2F0009.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>어떤 App 또는 Service를 포함시켜놓을지 선택하는 부분입니다. 우측의 "SELECT APPS"를 선택해서 선택하시면 됩니다.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfOTUg%2FMDAxNTI0NjIyNDE4MTE4.Bz3pFvtG-iLTcNVHtbWLaiIIa6g14CGC_qff0HrUDGYg.2AqlKBOhUGljk_1xp3BNDYI0oZQGlq9q0RRteLuzriMg.PNG.searphiel9%2F0010.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfMTY0%2FMDAxNTI0NjIyNDE4MTQ5.IXJWoY2Sftkh9THPW1dJzJuaQTZiP-5Vf8SvovIFHLYg.tKPtCqjIGaW2d24ndSxnpCoWWCqV9Ng-8oSu-nopjDcg.PNG.searphiel9%2F0011.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>그 다음은 어떤 미디어를 추가할지 선택하는 페이지입니다.기본적으로 폰트 추가 가능하며, 클릭하면 첨부 창이 나타나면서 추가 가능합니다. 본인이 원하는 부트애니메이션 등을 집어넣어서 커스텀 할 수 있습니다.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfMTMz%2FMDAxNTI0NjIyNDE4MTg2.9H-qlj8lfln0KViOIU8pASoTQlELvsj8bJUAO13C7ocg.JQAKV0mOyZYSA92tb1yL5bZP-6j8VZCn18iuZ7Q3JDQg.PNG.searphiel9%2F0012.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>마지막으로 크기를 설정하는 페이지입니다. 어느정도의 용량을 사용 할 것인지 잘 보고 하시길바랍니다. SD카드의 용량보다 크게 될 경우 이미지 자체가 작성이 안되므로 잘 선택해야되는 부분입니다. 안그럼 아래와 같은 상황을 보실 수 있습니다.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfMTMw%2FMDAxNTI0NjIyNDE4Mjk0.CJeXx4AfmGIdEVuJkpV3Wt05IBtN0B_m_cIZ9n3tOp4g.xvGr6MlT37riTvm2A3hXfsNlPDZHDzWx2AxEKYJocscg.PNG.searphiel9%2F0022.PNG%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>선택 다하셨으면 "CREATE BUILD" 버튼을 클릭해주세요.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfMjQ3%2FMDAxNTI0NjIyNDE4MTgw.f0tgaGR7vznFklqwD6VkD3QgzW3O6MM-zFicgvw4ynEg.cLFkQkAML2Sm8Ajv6_XPQxU7g8D7eH-VWQfcN-PgjQcg.PNG.searphiel9%2F0013.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>그럼, 이미지가 만들어지기 시작합니다.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfMTY5%2FMDAxNTI0NjIyNDE4MjAy.lItPSRIfm4ijiYbWWcm7Zl_895bQ2R8PURVQRVrhN2Yg.2eYL_2eZNUKlprcorFDuejV52mt4Xj-FFdqNWGZ1wecg.PNG.searphiel9%2F0015.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>이미지 리스트에서 세부사항을 보고싶은 이미지를 클릭하면 위와 같이 어떠한 이미지라고 정리된 페이지로 넘어갑니다.</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfMjA3%2FMDAxNTI0NjIyNDE4MjI2.Xyn1IDRxGOQC6HjcyVe8fvVvV6IrBhI2_aa2NFj25WUg.tvmmRT2b5dVV0cRLCAyfwJEnia0G63quGXHBe8ZFAYYg.PNG.searphiel9%2F0017.png%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>다운로드를 클릭하면 "Production"과 "Development"가 나옵니다."Production"은 user-build 를 다운로드하는 것이며, "Development"는 user-debug-build를 다운로드 받는 것입니다. 둘 중 하나를 선택해주세요 :)(개인적으론 디버깅 옵션때문에 개발 단계에서는 "Development"를 받으시는 것을 추천합니다.)</p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfOTgg%2FMDAxNTI0NjIyNDE4Mjgx.ST_C-wyvVNcNSuazryf5Rz0O5wPCIu2bqKgbJNuHQI0g.MXfmQrKTvjjKo7sQsYw_QRhG0gZG3paXZp2tuO9jZ0Mg.PNG.searphiel9%2F0019.PNG%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfMTAy%2FMDAxNTI0NjIyNDE4Mjgx.FpGPwnkxp7BbcaWm-bsa8jElwLjNJjwFjwlJi9Oqxa0g.814FKYkYHsNKWgsgrHLo8D8ESTocV0IFNObVe1HsIcMg.PNG.searphiel9%2F0020.PNG%22&amp;type=cafe_wa740">
 </p>

</p>

<p>
 <p>이후 zip 파일을 다운로드 받고 열어보면 Raspberry Pi 에 사용할 .img 파일이 나옵니다. 이 파일을 SD Card에 작성하여 Raspberry Pi 에 넣어주시면 됩니다.* Raspberry Pi 에 작성하는 방법</p>

</p>

<p>
 <a href="http://siryua.net/221218472409">   Raspberry Pi 에 OS 설치하기 Raspberry Pi 에 OS 설치하기IoT 등 여러가지 목적으로 많이 활용되고 있는 Raspberry Pi 를 사용... siryua.net    자세히보기 </a>
</p>

<p>
 <p>
  <p></p>

 </p>

</p>

<p>
 <p>간단하게 Raspberry Pi 3에 사용할 Android Things 의 이미지를 만드는 법을 알아보았습니다. 차후에는 Android Things를 이용해서 Raspberry Pi 3에 LED를 이용한 I/O 제어를 한 번 알아볼 수 있도록 준비해보겠습니다.감사합니다.</p>

</p>

