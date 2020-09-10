---
layout: post
title: '[커뮤니티] CM 빌드/ Apk 컴파일 등에서 나타나는 오류 해결법 [정리]'
author: '미르'
categories: Android-Custom-Make(Old)
tags:
- Android
- Custom
- Make
-
---


<script> location.href='https://cafe.naver.com/develoid/226798' ; </script>

<p align="left" >지금까지 제가 격은 문제와 그 해결법에 대해 정리하도록 하겠습니다</p>
<p align="left" >참고로 이 글은&nbsp;<a href="http://whdghks913.blog.me/20166024812">http://whdghks913.blog.me/20166024812</a>&nbsp;게시글을 옮긴 것이며</p>
<p align="left" >티스토리에는&nbsp;<a href="http://whdghks913.blog.me/20166024812">http://whdghks913.blog.me/20166024812</a>게시글을 따로 포스팅 하지 않았습니다</p>
<p align="left" ></p>
<p align="left" >앞으로의 내용추가는 이 게시글 에서 갱신하도록 하겠습니다</p>
<p align="left" >대부분의 해결은 능력자 분들의 말씀을 인용한것입니다 인용시 그 분:말씀 이렇게 작성하였습니다</p>
<p align="left" >&nbsp;</p>
<p align="left" >&nbsp;</p>
<p align="left" >&nbsp;</p>
<p align="left" >CM빌드 오류</p>
<p ></p>
<p align="left" >brunch, make clobber 오류</p>
<p align="left" >make clobber치면</p>
<p align="left" >build/core/product_config.mk:196: *** _nic.PRODUCTS.[[vendor/cyanogen/products/cyanogen_sunfire.mk]]: "device/motorola/sunfire/sunfire.mk" does not exist. 멈춤.</p>
<p align="left" >brunch a750k</p>
<p align="left" >No command 'brunch' found, did you mean:</p>
<p align="left" >Command 'branch' from package 'rheolef' (universe)</p>
<p align="left" >brunch: command not found</p>
<p align="left" >&nbsp;</p>
<p align="left" >도라도라 : . build/envsetup.sh 한뒤에 brunch a750k 를 실행하세요</p>
<p align="left" >&nbsp;</p>
<p align="left" >호호 : 파일 추가는 하셨는지</p>
<p align="left" >Vendor/cyanogen 에서 h를 수정해야하고</p>
<p align="left" >Vendor/cyanogem/product 에서 cyanogen_기기명.mk를 작성하시고 androidproduct.mk 도 수정해야합니다</p>
<p align="left" >Cyanogen_기기명.mk는 다른 파일들을 참고하시고 작성하시면 됩니다</p>
<p align="left" >vendorsetup.sh수정은 add_lunch_combo cyanogen_a750k - eng</p>
<p align="left" >Target device명을 device/회사명 안에 기기명과 같게해야할겁니다</p>
<p align="left" >&nbsp;</p>
<p align="left" >부가 설명: brunch a750k를 하기전 파일을 추가해야 한다</p>
<p align="left" >Vendor/cyanogen/vendorsetup.sh,</p>
<p align="left" >Vendor/cyanogem/product/cyanogen_기기명.mk</p>
<p align="left" >Vendor/cyanogem/product/androidproduct.mk</p>
<p align="left" >Target device는 cyanogen_기기명.mk의 디바이스 부분이다</p>
<p align="left" >&nbsp;</p>
<p align="left" >&nbsp;</p>
<p align="left" >libaudio을 만들규칙이 없습니다;;</p>
<p align="left" >target Strip: libeffects (out/target/product/a750k/obj/lib/libeffects.so)</p>
<p align="left" >make: *** `out/target/product/a750k/obj/SHARED_LIBRARIES/libaudioflinger_intermediates/LINKED/libaudioflinger.so'에서 필요로 하는 &nbsp;타겟 `out/target/product/a750k/obj/lib/libaudio.so'를 만들 규칙이 없습니다. &nbsp;멈춤.</p>
<p align="left" >&nbsp;</p>
<p align="left" >호호 : libaudio.so라는 파일을 해당경로에 가져다 놔도 되고</p>
<p align="left" >Boardconfig.mk에 BOARD_USES_GENERIC_AUDIO:= true 라는 구문을 추가해주세요</p>
<p align="left" >&nbsp;</p>
<p align="left" >나의 해결법 : out/target/product/a750k/obj/SHARED_LIBRARIES/libaudioflinger_intermediates</p>
<p align="left" >이경로폴더를 삭제했습니다&nbsp;libaudioflinger.so 생성 완료</p>
<p align="left" >&nbsp;</p>
<p align="left" >&nbsp;</p>
<p align="left" >libcamera.so을 만들규칙이 없습니다</p>
<p align="left" >make: *** `out/target/product/ef32k/obj/SHARED_LIBRARIES/libcameraservice_intermediates/LINKED/libcameraservice.so'에서 필요로 하는 &nbsp;타겟 `out/target/product/ef32k/obj/lib/libcamera.so'를 만들 규칙이 없습니다. &nbsp;멈춤.</p>
<p align="left" >&nbsp;</p>
<p align="left" >검색, 참고자료SDA:&nbsp;<a href="http://cafe.naver.com/skydevelopers/96508">http://cafe.naver.com/skydevelopers/96508</a></p>
<p align="left" >호호 :&nbsp;Boardconfig.mk에&nbsp;USE_CAMERA_STUB:= true을 추가해 주시면 됩니다</p>
<p align="left" >&nbsp;</p>
<p align="left" >&nbsp;</p>
<p align="left" >램디스크 부분 (init부분)</p>
<p align="left" >호호 : Init를 강제로 넣지 않는이상 자동으로 init가 빌드됩니다;;;;;</p>
<p align="left" >INit는 미르님이 넣지않는이상 자동으로 빌드되구요</p>
<p align="left" >Init.rc도 넣지않으면 알아서 던져주는데 그거 빼와서 원래 init.rc랑 섞어야합니다</p>
<p align="left" >복사 명령어</p>
<p align="left" >PRODUCT_COPY_FILES := \&nbsp;</p>
<p align="left" >device/pantech/a750k/init.rc:root/init.rc \</p>
<p align="left" >이정도겠네요</p>
<p align="left" >&nbsp;</p>
<p align="left" >부가 설명: 복사 명령어는</p>
<p ></p>
<p align="left" >PRODUCT_COPY_FILES := \&nbsp;</p>
<p align="left" >파일의 경로:복사될 경로 \</p>
<p align="left" >&nbsp;</p>
<p ></p>
<p align="left" >/home/계정명을 생략하고 소스가 담긴폴더를 기준으로 한다</p>
<p align="left" >또한 복사될 경로는 빌드시 생성되는 out/target/~을 기준으로 한다</p>
<p align="left" >&nbsp;</p>
<p align="left" >&nbsp;</p>
<p align="left" >롬 매니저 오류</p>
<p align="left" >잘가다가 오류;;</p>
<p align="left" >make: *** `out/target/product/a750k/system/app/RomManager.apk'에서 필요로 하는 타겟 `vendor/cyanogen/proprietary/RomManager.apk'를 만들 규칙이 없습니다. 멈춤.</p>
<p align="left" >는 뭘까요?</p>
<p align="left" >&nbsp;</p>
<p align="left" >호호 : 저 위오류는 vendor/cyanogen에 gotuprommanager(이름이....여튼rommanager라고 되있는 파일있을겁니다)그걸 실행시켜주시면 해결됩니다</p>
<p align="left" >&nbsp;</p>
<p align="left" >&nbsp;</p>
<p align="left" >벤더 수정후 오류</p>
<p align="left" >make clobber</p>
<p align="left" >&nbsp;</p>
<p align="left" >&nbsp;</p>
<p align="left" >부팅실패+리커버리로 강제 재부팅</p>
<p align="left" >리커버리로 강제로 재부팅됬다는건 init.rc문제로 알고있습니다 init.rc확인해보시길</p>
<p align="left" >일단 init.rc는 cm7에서 던져주는것을 쓰는게 좋습니다 그리고 나서 쓰는 기기의 init.rc와 적절하게 섞어주세요 그리고 추가오류가 뜨면 그에따른 수정을 해줘야합니다</p>
<p align="left" >&nbsp;</p>
<p align="left" >마운트가 안될경우 손봐야 할 부분</p>
<p align="left" >Init.rc에서 on fs on -emmc fs on -post fs부분이다</p>
<p align="left" >&nbsp;</p>
<p align="left" >init.rc는 cm7의 init.rc에 순정펌 init.rc를 섞고 (pantech에서 추가한 사항들을 넣어주세요) 파일 복사 매크로를 이용해서 root폴더에 넣어주셔야 합니다</p>
<p align="left" >그리고 추정건데 ueventd.rc또한 cm7에서 던져준것으로 추정되는데 ueventd.rc는 순정펌의 것을 root폴더에 매크로로 넣어주셔야합니다</p>
<p align="left" >그리고 아마 root폴더에 init.qcom.rc또한 없을거 같은데 이것도 순정에서 매크로로 넣어주셔야 합니다&nbsp;</p>
<p align="left" >&nbsp;</p>
<p align="left" >강제 리커버리 부분</p>
<p align="left" >Init.rc에서(혹은 init.qcom.rc) 서비스중에 critical 라는 문구가 들어간 서비스가 3분이내에 몇번이상 종료되면 강제로 리커버리로 재부팅 된다고 하더라구요 ueventd.rc servicemanager 서비스등으로 추측가능하겠네요</p>
<p align="left" >&nbsp;</p>
<p align="left" ><a href="http://m.cafe.naver.com/ArticleRead.nhn?clubid=24846429&amp;menuid=78&amp;articleid=880&amp;query=%EC%82%AC%EB%9E%8C">http://m.cafe.naver.com/ArticleRead.nhn?clubid=24846429&amp;menuid=78&amp;articleid=880&amp;query=%EC%82%AC%EB%9E%8C</a></p>
<p align="left" >링크가시면 사람님의 작업파일이있습니다</p>
<p align="left" >&nbsp;</p>
<p align="left" >같은 위치 다른 문구가 있으면?</p>
<p align="left" >Pantech것을 따라주셔야하는데 가장윗부분에 export BOOTCLASSPATH 부분은 CM것</p>
<p align="left" >그대로 내비두세요</p>
<p align="left" >&nbsp;</p>
<p align="left" >기본적으로 부팅을 위해선 해당기기의 라이브러리나 바이너리들을 써야합니다;; 저번에 올려드린 링크참고해주세요 보시면 순정펌에서 바이너리들과 라이브러리들을 뽑아서 넣어주는것을 볼수있을거에요;;</p>
<p align="left" >일단 다시 사람님 작업파일중 ef18.mk등을 참고해주세요</p>
<p align="left" >&nbsp;</p>
<p align="left" >어떻게 디바이스와 벤더를 구축하셨는지 모르겠네요;;</p>
<p align="left" >여튼 바이너리파일과 라이브러리 일부파일의 순정사용은 거의 필수 겠지요..</p>
<p align="left" ><a href="http://m.cafe.naver.com/ArticleRead.nhn?clubid=22277982&amp;menuid=179&amp;articleid=86106&amp;query=hpa">http://m.cafe.naver.com/ArticleRead.nhn?clubid=22277982&amp;menuid=179&amp;articleid=86106&amp;query=hpa</a>(hpa님의 이자르cm7)</p>
<p align="left" >&nbsp;</p>
<p align="left" >확실한건 servicemanager나 다른한파일이 문제를 일으키는걸로보이네요 아마 부팅에 필요한 바이너리파일이나 라이브러리파일들이 부족하기때문으로 감히 추측해봅니다</p>
<p align="left" >&nbsp;</p>
<p align="left" >큼칠 커널 init.rc부분의 framework경로를 일치시켜야 합니다 램디스크안의 init파일은 호호님이 언급하신것처럼 큼칠의 init를 써야하구요</p>
<p align="left" >&nbsp;</p>
<p align="left" >&nbsp;</p>
<p ></p>
<p align="left" >OpenVpn오류</p>
<p align="left" >make: *** [out/target/product/ef32k/obj/EXECUTABLES/openvpn_intermediates/LINKED/openvpn] 오류 1</p>
<p align="left" >&nbsp;</p>
<p align="left" >sudo apt-get install openvpn</p>
<p align="left" >를 하게 되면 해결됩니다</p>
<p ></p>
<p align="left" >&nbsp;</p>
<p align="left" >+ 2013-01-16 추가/수정</p>
<p align="left" >&nbsp;</p>
<p align="left" >Acp.o 생성 오류</p>
<p align="left" ></p>
<p align="left" >make: *** [out/host/linux-x86/obj/EXECUTABLES/acp_intermediates/acp.o] Error 1</p>
<p align="left" >Error: make: *** [out/host/linux-x86/obj/EXECUTABLES/acp_intermediates/acp] Error 1</p>
<p align="left" >&nbsp;</p>
<p align="left" >이 두개의 오류의 해결법은</p>
<p align="left" >sudo apt-get install libc6-dev-i386</p>
<p align="left" >sudo apt-get install g++-multilib</p>
<p align="left" >을 입력하여 설치하세요</p>
<p align="left" >&nbsp;</p>
<p align="left" >Cgi.o 생성 오류</p>
<p align="left" >make: *** [out/host/linux-x86/obj/SHARED_LIBRARIES/libneo_cgi_intermediates/cgi.o] Error 1</p>
<p align="left" >&nbsp;</p>
<p align="left" >sudo apt-get install zlib1g-dev</p>
<p align="left" >&nbsp;</p>
<p align="left" >Aapt.o 생성 오류</p>
<p align="left" >make: *** [out/host/linux-x86/obj/EXECUTABLES/aapt_intermediates/aapt] Error 1</p>
<p align="left" >&nbsp;</p>
<p align="left" >sudo apt-get install lib32z1-dev</p>
<p align="left" >&nbsp;</p>
<p align="left" >aidl_language_y.cpp 오류</p>
<p align="left" >make: *** [out/host/linux-x86/obj/EXECUTABLES/aidl_intermediates/aidl_language_y.cpp] Error 127</p>
<p align="left" >&nbsp;</p>
<p align="left" >sudo apt-get install bison</p>
<p align="left" >&nbsp;</p>
<p align="left" >aidl_language_l.cpp 오류</p>
<p align="left" >make: *** [out/host/linux-x86/obj/EXECUTABLES/aidl_intermediates/aidl_language_l.cpp] Error 127</p>
<p align="left" >&nbsp;</p>
<p align="left" >sudo apt-get install flex</p>
<p align="left" >&nbsp;</p>
<p align="left" >adb 오류</p>
<p align="left" >make: *** [out/host/linux-x86/obj/EXECUTABLES/adb_intermediates/adb] Error 1</p>
<p align="left" >&nbsp;</p>
<p align="left" >sudo apt-get install lib32ncurses5-dev</p>
<p align="left" >sudo apt-get install libncurses5-dev</p>
<p align="left" >&nbsp;</p>
<p align="left" >Main-common.o 생성 오류</p>
<p align="left" >make: *** [out/host/linux-x86/obj/EXECUTABLES/emulator_intermediates/Android/Main-common.o] Error 1</p>
<p align="left" >&nbsp;</p>
<p align="left" >sudo apt-get install libx11-dev</p>
<p align="left" >&nbsp;</p>
<p align="left" >CSSPropertyNames.h 혹은&nbsp;CSSPropertyNames.h 오류</p>
<p align="left" >make: *** [out/target/product/generic/obj/STATIC_LIBRARIES/libwebcore_intermediates/WebCore/css/CSSPropertyNames.h] Error 25</p>
<p align="left" >make: *** Deleting file `out/target/product/generic/obj/STATIC_LIBRARIES/libwebcore_intermediates/WebCore/css/CSSPropertyNames.h ‘</p>
<p align="left" >&nbsp;</p>
<p align="left" >sudo apt-get install gperf</p>
<p ></p>
<p align="left" >&nbsp;</p>
<p align="left" >참고 :&nbsp;<a href="http://cafe.naver.com/nexusdevelops/7381">http://cafe.naver.com/nexusdevelops/7381</a>&nbsp;<a href="http://cafeblog.search.naver.com/search.naver?where=article&amp;query=out%2Fhost%2Flinux-x86%2Fobj%2FEXECUTABLES%2Facp_intermedlates%2Facp.o&amp;cafe_url=nexusdevelops&amp;sm=tab_crs&amp;ie=utf8">( 검색 유입 )</a></p>
<p align="left" >&nbsp;</p>
<p align="left" >predefs.h 파일 에러</p>
<p align="left" ></p>
<p align="left" >/usr/include/features.h:324:26: fatal error: bits/predefs.h: No such file or directory</p>
<p align="left" >&nbsp;</p>
<p align="left" >sudo apt-get install gcc-multilib</p>
<p>센서 픽스방법</p>
<p>BOARD_NEEDS_CUTILS_LOG := true</p>
<p>구문 추가</p>
<p>출처:&nbsp;<a href="http://cafe.naver.com/skydevelopers/104865">http://cafe.naver.com/skydevelopers/104865</a>&nbsp;(hPa님)</p>
<p ></p>
<p align="left" >&nbsp;</p>
<p align="left" >&nbsp;</p>
<p align="left" >overlay 문제 해결</p>
<p align="left" >target Export Resources: framework-res (/home/whdghks913/cluster/system/out/target/common/obj/APPS/framework-res_intermediates/package-export.apk)</p>
<p align="left" >device/pantech/ef46l/overlay/frameworks/base/core/res/res/values/config.xml:30: error: Resource at config_networkLocationProviderPackageName appears in overlay but not in the base package; use&nbsp;&lt;add-resource&gt;&nbsp;to add.device/pantech/ef46l/overlay/frameworks/base/core/res/res/values/config.xml:33: error: Resource at config_geocodeProviderPackageName appears in overlay but not in the base package; use&nbsp;&lt;add-resource&gt;&nbsp;to add.device/pantech/ef46l/overlay/frameworks/base/core/res/res/values/config.xml:40: error: Resource at config_autoBrightnessButtonKeyboard appears in overlay but not in the base package; use&nbsp;&lt;add-resource&gt;&nbsp;to add.make: *** [/home/whdghks913/cluster/system/out/target/common/obj/APPS/framework-res_intermediates/package-export.apk] 오류 1make: *** 파일 `/home/whdghks913/cluster/system/out/target/common/obj/APPS/framework-res_intermediates/package-export.apk'을(를) 지웁니다</p>
<p align="left" >&nbsp;</p>
<p align="left" >cm10→cm10.1에서 체험한 문제입니다</p>
<p align="left" >표시된 내용을 보면 &lt;add-resource&gt;를 추가해 해결할 수 있습니다</p>
<p align="left" >String위에 아래 구문을 추가하세요</p>
<p align="left" >&lt;add-resource type="string" name="오류난 overlay의 구문 이름"&gt;&lt;/add-resource&gt;</p>
<p align="left" >&nbsp;</p>
<p align="left" >예를 들면</p>
<p align="left" >&lt;String name="testoverlay"&gt;가 문제가 있다면</p>
<p align="left" >&lt;add-resource type="string" name="testoverlay"&gt;&lt;/add-resource&gt;를 추가해 주시면 됩니다</p>
<p align="left" >출처:&nbsp;<a href="http://cafe.naver.com/develoid/165665">http://cafe.naver.com/develoid/165665</a></p>
<p align="left" >&nbsp;</p>
<p align="left" >&nbsp;</p>
<p   >error: undefined reference to 오류 해결법</p>
<p align="left" ></p>
<p align="left" ></p>
<p align="left" >&nbsp;</p>
<p >external/bluetooth/bluedroid/Android.mk:8: NO BOARD_BLUETOOTH_BDROID_BUILDCFG_INCLUDE_DIR, using only generic configuration</p>
<p >&nbsp;</p>
<p ></p>
<p >device/samsung/msm8660-common 또는 msm8660-common에 들어간 다음 bluetooth라는 폴더를 만들어 주세요</p>
<p >&nbsp;</p>
<p ><a href="http://whdghks913.tistory.com/attachment/cfile29.uf@25637540515FA3460E3AFA.h"><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fi1.daumcdn.net%2Fcfs.tistory%2Fv%2F110706133414%2Fblog%2Fimage%2Fextension%2Funknown.gif%22&amp;type=cafe_wa740">&nbsp;bdroid_buildcfg.h</a></p>
<p >&nbsp;</p>
<p ></p>
<p >이 파일을 아까 만든 bluetooth폴더안에 넣어주시면 됩니다</p>
<p >&nbsp;</p>
<p ></p>
<p >이제 BoardConfigComon.mk을 수정할 겁니다</p>
<p >이 파일은 device/samsung/msm8660-common또는 msm8660-commom에 들어 있습니다</p>
<p ></p>
<p>BOARD_BLUETOOTH_BDROID_BUILDCFG_INCLUDE_DIR := device/samsung/msm8660-common/bluetooth</p>
<p >이 구문을 추가해 주세요</p>
<p >&nbsp;</p>
<p >만약 이미 있다면 #을 풀어주시거나 없다면 추가해 주시면 됩니다</p>
<p ></p>
<p >이제 NO BOARD_BLUETOOTH_BDROID_BUILDCFG_INCLUDE_DIR, using only generic configuration오류는 나타나지 않을 것 입니다</p>
<p >&nbsp;</p>
<p ><a href="http://whdghks913.tistory.com/188">2013/04/06 - [강좌/팁/커널/빌드 강좌] - NO BOARD_BLUETOOTH_BDROID_BUILDCFG_INCLUDE_DIR, using only generic configuration</a></p>
<p ></p>
<p ></p>
<p ></p>
<p >출처 :&nbsp;<a href="http://forum.xda-developers.com/showthread.php?p=35522843">http://forum.xda-developers.com/showthread.php?p=35522843</a></p>
<p align="left" ></p>
<p align="left" ></p>
<p align="left" ></p>
<p align="left" ></p>
<p align="left" ></p>
<p align="left" >In file included from hardware/qcom/display/liboverlay/overlayImpl.h:34:0,</p>
<p align="left" >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;from hardware/qcom/display/liboverlay/overlay.cpp:31:</p>
<p align="left" >hardware/qcom/display/liboverlay/overlayRotator.h: In member function 'virtual int overlay::MdssRot::getDstMemId() const':</p>
<p align="left" >hardware/qcom/display/liboverlay/overlayRotator.h:444:21:&nbsp;error: 'const struct msmfb_overlay_data' has no member named 'dst_data'</p>
<p align="left" >hardware/qcom/display/liboverlay/overlayRotator.h: In member function 'virtual uint32_t overlay::MdssRot::getDstOffset() const':</p>
<p align="left" >hardware/qcom/display/liboverlay/overlayRotator.h:447:21:&nbsp;error: 'const struct msmfb_overlay_data' has no member named 'dst_data'</p>
<p align="left" >make: *** [/home/obi-wan-kenobi/mydev/android-source/cm10point1/out/target/product/e730/obj/SHARED_LIBRARIES/liboverlay_intermediates/overlay.o] Error 1</p>
<p align="left" ></p>
<p align="left" >이 오류는 뭔가 선언되지 않아 발생하는 오류라 생각(일뿐 자세하게는 모릅니다)합니다</p>
<p align="left" >오류를 해결하기 위해 include을 찾아야 하는대요</p>
<p align="left" >플레폼 소스폴더안에서&nbsp;msm_mdp.h을 찾으시던지 아니면 이 파일을 직접 include하고 있다던지 아무튼 파일을 열어주세요</p>
<p align="left" >include/linux/msm_mdp.h을 열어주셨으면 아래를 찾아주세요</p>
<p align="left" ></p>
<p align="left" >"struct msmfb_overlay_data"</p>
<p align="left" >이게 없다면 아래 문장을 추가해 주시고 있다면 보충해 주세요</p>
<p><p align="left">struct msmfb_overlay_data {</p>
<p align="left">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;uint32_t id;</p>
<p align="left">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;struct msmfb_data data;</p>
<p align="left">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;uint32_t version_key;</p>
<p align="left">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;struct msmfb_data plane1_data;</p>
<p align="left">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;struct msmfb_data plane2_data;</p>
<p align="left">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;struct msmfb_data dst_data;</p>
<p align="left">};</p>
<p ></p>
<p ></p>
<p align="left" ><a href="http://forum.cyanogenmod.org/topic/70073-building-cm-101-422/">http://forum.cyanogenmod.org/topic/70073-building-cm-101-422/</a></p>
<p align="left" ></p>
<p align="left" ></p>
<p align="left" ></p>
<p align="left" ></p>
<p align="left" >hardware/qcom/display/libgralloc/fb_priv.h:48:26: error: field 'fence' has incomplete type</p>
<p align="left" >hardware/qcom/display/libgralloc/fb_priv.h:49:31: error: field 'commit' has incomplete type</p>
<p align="left" >이 오류도 선언과 관련있는거라 생각됩니다</p>
<p align="left" ></p>
<p align="left" >오류가 뜨는 파일인&nbsp;fb_priv.h을 열어</p>
<p align="left" ></p>
<p align="left" >struct mdp_buf_fence fence;</p>
<p align="left" >struct mdp_display_commit commit;</p>
<p align="left" >이 두개를 추가해 주시고 필요로 하는 h파일을 include할수 있도록 아래도 추가해 주세요</p>
<p align="left" ></p>
<p align="left" >#include &lt;linux/fb.h&gt;</p>
<p align="left" >#include &lt;linux/msm_mdp.h&gt;</p>
<p align="left" >모두 추가했는대도 문제가 발생한다면 현재 include하고 있는 폴더를 잠시 주석처리해 둔다음 빌드하시면 정상적으로 됩니다</p>
<p ></p>
&nbsp;<p>출처:&nbsp;<a href="http://forum.cyanogenmod.org/topic/70073-building-cm-101-422/">http://forum.cyanogenmod.org/topic/70073-building-cm-101-422/</a></p>
<p>&nbsp;</p>
<p>out/target/product/(기기명)/obj/KERNEL_OBJ/usr'를 만들 규칙이 없습니다. 멈춤.[1]이 오류는 그냥 obj/KERNEL_OBJ/usr 폴더를 만들어 주면 됩니다<p>&nbsp;</p>
<p>DEVICE=기기명</p>
<p>mkdir -p ../../../out/target/product/$DEVICE/obj/KERNEL_OBJ/usr</p>
<p>이런식으로 스크립트를 짜주시면 되지요 ㅎㅎ</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><p></p>
<p align="left" >&nbsp;</p>
<p align="left" >기타 우분투 문제</p>
<p align="left" >/bin/sh: lzop: not found오류 해결법</p>
<p align="left" >커널 마이너 패치후 일어났습니다</p>
<p align="left" >참고 자료:&nbsp;<a href="http://cafe.naver.com/androiddevforum/1635,">http://cafe.naver.com/androiddevforum/1635,</a>&nbsp;<a href="http://ez.analog.com/thread/14516">http://ez.analog.com/thread/14516</a></p>
<p align="left" >sudo apt-get install lzop 하시면 해결됩니다</p>
<p align="left" >&nbsp;</p>
<p align="left" >&nbsp;</p>
<p ></p>
<p align="left" >&nbsp;</p>
<p ></p>
<p align="left" >APK (디)컴파일 문제</p>
<p ></p>
<p align="left" >error: Multiple substitutions specified in non-positional format; did you mean to add the formatted="false" attribute?</p>
<p align="left" >error: Found tag &lt;/item&gt; where &lt;/plurals&gt; is expected</p>
<p align="left" >&nbsp;</p>
<p align="left" >이 컴파일 오류는 $으로 해결이 가능합니다</p>
<p align="left" >오류가 난 xml(plurals.xml)을 연뒤 문제 발생 줄을 살펴보면</p>
<p align="left" >EX)%d/%d라 되어 있는대 이때 %뒤에 1$, 2$를 삽입해 주면 해결됩니다</p>
<p align="left" >→%1$d/%2$d</p>
<p></p>
Exception in thread "main" java.lang.OutOfMemoryError: Java heap space<p><p>이런 오류가 log.txt에 나타날경우 최대 메모리 사이즈 (Heap size)를 변경해 주신다음 컴파일 하시면 해결됩니다</p>
<p>apk manager기준으로 20번 최대 메모리 설정 (heap size)를 기본 60mb을 다른 값으로 변경해 주시면 됩니다</p>
<p>256mb, 512mb 등으로 말이죠 ㅋㅋ</p>
</p>
