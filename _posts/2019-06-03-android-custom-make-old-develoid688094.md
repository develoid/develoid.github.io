---
layout: post
title: '[커뮤니티] distcc를 이용한 안드로이드 분산빌드'
author: 'Strontium닌디'
categories: Android-Custom-Make(Old)
tags:
- Android
- Custom
- Make
-
---


<script> location.href='https://cafe.naver.com/develoid/688094' ; </script>

<p>안드로이드 빌드 속도를 증가시키는 방법은 2가지가 있습니다.</p>
<p>하나는 ccache를 이용하는 방법, 다른 하나는 distcc를 이용한 방법입니다.</p>
<p>이중 distcc를 구성하고 사용하는 방법을 설명하려 합니다.</p>
<p>설명에 사용된 시스템은 2대 입니다.</p>
<p>A :​ Debian 9, i7 4700HQ, 16GB ram.</p>
<p>B : Debian 9, i5 6600, 16GB ram. </p>
<p>호스트(소스코드를 제공할 PC)는 A이고, 클라이언트(소스코드를 컴파일할&nbsp; PC)는 B입니다.</p>
<p>lineageos를 기준으로 설명하며, 다른 aosp소스에서도 대부분 사용 가능합니다.</p>
<p>#로 시작하는 명령은 root이며, $는 사용자 계정입니다.</p>
<p>1. 클라이언트에 소스를 다운로드 합니다.</p>
<p>&nbsp;&nbsp;&nbsp; <code>호스트와 절대경로가 같도록 하시기 바랍니다. 여기서는 /opt/cm-14.1에 소스가 있다고 가정합니다.</code></p>
<p>1-1. 클라이언트에 컴파일러만 다운로드 할 경우.(LineageOS 에서 작동하며 그 외에는 작동을 보장하지 않습니다.)</p>
<p >$ mkdir -p /opt/cm-14.1</p>
<p >$ cd /opt/cm-14.1</p>
<p ><code>$ repo init -u git://github.com/whdgmawkd/distcc_client_android.git -b cm-14.1</code></p>
<p ><code>$ repo sync -j4</code></p>
<p ><code>1-2. 클라이언트에 호스트와 같은 소스를 전체 다운로드 할 경우.</code></p>
<p ><code>호스트에 있는 소스를 복사하거나, repo를 사용하여 똑같이 받아옵니다.</code></p>
<p ><code>2. 호스트에서 소스코드를 수정합니다.</code></p>
<p ><code>2-1. /안드로이드/소스/위치/build/core/combo</code></p>
<p ><code>HOST_linux-x86_64.mk</code></p>
<p ><code>20번째줄 부근의 HOST_TOOLCHAIN_PREFIX := prebuilts/gcc/~~~ 부분을 찾고</code></p>
<p ><code>prebuilts앞부분에 안드로이드 소스 위치를 처음부터 적어줍니다.</code></p>
<p ><code>ex) HOST_TOOLCHAIN_PREFIX := /opt/cm-14.1/prebults/gcc/~~~~</code></p>
<p ><code></code></p>
<p ><code>HOST_CC와 HOST_CXX의 := 뒷부분에 distcc를 적어줍니다.</code></p>
<p ><code>ex) HOST_CC := distcc $(HOST_TOOLCHAIN_PREFIX)gcc</code></p>
<p ><code></code></p>
<p ><code>35번재줄 부근의 HOST_TOOLCHAIN_FOR_CLANG := 부분을 찾고</code></p>
<p ><code>위와 마찬가지로 prebuilts앞부분에 안드로이드 소스 위치를 적어줍니다.</code></p>
<p ><code>ex) HOST_TOOLCHAIN_FOR_CLANG := /opt/cm-14.1/prebuilts/gcc/~~~~</code></p>
<p ><code></code></p>
<p ><code>TARGET_linux-arm.mk</code></p>
<p ><code>55번째줄 부근의 $(combo_2nd_arch_prefix)TARGET_TOOLCHAIN_ROOT := prebuilts~~ 부분을 찾고</code></p>
<p ><code>위와 마찬가지로 안드로이드 소스 위치를 적어줍니다.</code></p>
<p ><code>ex) $(combo_2nd_arch_prefix)TARGET_TOOLCHAIN_ROOT := /opt/cm-14.1/prebuilts/gcc/~~~~</code></p>
<p ><code></code></p>
<p ><code>$(combo_2nd_arch_prefix)TARGET_CC와 $(combo_2nd_arch_prefix)TARGET_CXX의 := 뒷부분에 distcc를 적어줍니다.</code></p>
<p ><code>ex) $(combo_2nd_arch_prefix)TARGET_CC := distcc $($(combo_2nd_arch_prefix)TARGET_TOOLS_PREFIX)gcc</code></p>
<p ><code></code></p>
<p ><code>TARGET_linux-arm64.mk</code></p>
<p ><code>55번째줄 부근의 TARGET_TOOLCHAIN_ROOT := prebuilts~~부분은 찾고</code></p>
<p ><code>위와 마찬가지로 안드로이드 소스 위치를 적어줍니다.</code></p>
<p ><code>ex) TARGET_TOOLCHAIN_ROOT := /opt/cm-14.1/prebuilts/gcc/$(HOST_PREBUILT_TAG)/aarch64/~~~~~~~</code></p>
<p ><code></code></p>
<p ><code>TARGET_CC와 TARGET_CXX의 := 뒷부분에 distcc를 적어줍니다.</code></p>
<p ><code>ex) TARGET_CC := distcc $(TARGET_TOOLS_PREFIX)gcc</code></p>
<p ><code></code></p>
<p ><code>2-2. /안드로이드/소스/위치/build/core/clang/</code></p>
<p ><code>config.mk&nbsp;</code></p>
<p ><code>3번째줄의 LLVM_PREBUILTS_PATH 부분을 찾고</code></p>
<p ><code>$(LLVM_PREBUILTS_BASE)앞부분에 안드로이드 소스 위치를 적어줍니다.</code></p>
<p ><code>ex) LLVM_PREBUILTS_PATH := /opt/cm-14.1/$(LLVM_PREBUILTS_BASE)/$(BUILD_OS)-x86/$(LLVM_PREBUILTS_VERSION)/bin</code></p>
<p ><code></code></p>
<p ><code>CLANG과 CLANG_CXX의 := 뒷부분에 distcc를 적어줍니다.</code></p>
<p ><code>ex) CLANG := distcc $(LLVM_PREBUILTS_PATH)/clang$(BUILD_EXECUTABLE_SUFFIX)</code></p>
<p ><code></code></p>
<p ><code>2-3. /안드로이드/소스/위치/device/제조사/기기명/</code></p>
<p ><code>BoardConfig.mk</code></p>
<p ><code>​TARGET_KERNEL_CROSS_COMPILE_PREFIX를 찾고 </code></p>
<p ><code>:= 뒤에 distcc를 붙여줍니다.</code></p>
<p ><code>ex) TARGET_KERNEL_CROSS_COMPILE_PREFIX := distcc aarch64-linux-android-</code></p>
<p ><code></code></p>
<p ><code>3. 호스트와 클라이언트에 distcc 설치</code></p>
<p ><code>3-1. 호스트에 distcc 설치</code></p>
<p ><code># apt update &amp;&amp; apt upgrade</code></p>
<p ><code># apt install distcc distccmon-gnome</code></p>
<p ><code>3-2. 호스트 distcc&nbsp; 설정</code></p>
<p ><code># gedit /etc/default/distcc</code></p>
<p ><code>gedit창이 열리면 </code></p>
<p ><code></code></p>
<p ><code>STARTDISTCC를 true로 변경</code></p>
<p ><code></code></p>
<p ><code>ALLOWEDNETS에 클라이언트의 IP를 넣거나, CIDR을 사용하여 특정 대역을 사용합니다.</code></p>
<p ><code>ex) 공유기가 192.168.10.??? IP를 할당할 경우 ALLOWEDNETS="192.168.10.0/24"</code></p>
<p ><code>ex) 특정 IP만 사용할 경우 ALLOWEDNETS="123.123.123.234 234.234.234.123"</code></p>
<p ><code></code></p>
<p ><code>LISTENER를 ""로 변경합니다.&nbsp;​-&gt; LISTENER=""​&nbsp;</code></p>
<p ><code></code></p>
<p ><code>NICE를 0으로 변경합니다. -&gt; NICE="0"</code></p>
<p ><code></code></p>
<p ><code>JOBS를 CPU코어수*2~4사이로 지정합니다. </code></p>
<p ><code>ex) JOBS="16"</code></p>
<p ><code></code></p>
<p ><code>ZEROCONF를 true로 변경합니다. -&gt; ZEROCONF="true"</code></p>
<p ><code></code></p>
<p ><code># gedit /etc/distcc/hosts</code></p>
<p ><code>gedit 창이 열리면</code></p>
<p ><code></code></p>
<p ><code>+zeroconf앞에 #을 붙혀줍니다. &gt; #+zeroconf</code></p>
<p ><code></code></p>
<p ><code>그 아래줄부터 클라이언트들의 IP주소/동시에_컴파일할_파일_갯수 를 입력합니다.</code></p>
<p ><code>위에서부터 아래 순서대로 컴파일작업을 분산처리합니다.</code></p>
<p ><code>ex) 192.168.10.111/16 -&gt; 192.168.10.111 PC에 동시에 16개의 컴파일을 진행합니다.</code></p>
<p ><code></code></p>
<p ><code>맨 마지막줄에 localhost/4 또는 localhost/8을 적어줍니다.</code></p>
<p ><code></code></p>
<p ><code>#service distcc restart로 변경사항을 적용합니다.</code></p>
<p ><code></code></p>
<p ><code>3-3. 클라이언트에 distcc 설치</code></p>
<p ><code># apt update &amp;&amp; apt upgrade</code></p>
<p ><code># apt install distcc </code></p>
<p ><code>3-4. 클라이언트 distcc 설정</code></p>
<p ><code># gedit /etc/default/distcc</code></p>
<p ><code>gedit창이 열리면 호스트와 똑같은 내용으로 변경합니다.</code></p>
<p ><code></code></p>
<p ><code>4. distcc 작동 확인.</code></p>
<p ><code>안드로이드 빌드를 시작합니다. </code></p>
<p ><code>$ source build/envsetup.sh</code></p>
<p ><code>$ lunch 콤보_기기명-userdebug</code></p>
<p ><code>$ make bacon -j호스트cpu*2+클라이언트cpu*2</code></p>
<p ><code></code></p>
<p ><code>새로운 터미널을 열어 distccmon-gnome을 입력하면 창이 뜨고 </code></p>
<p ><code>여기에 localhost가 아닌 다른 ip들이 컴파일을 진행하면 성공입니다.</code></p>
<p ><code></code></p>
<p ><code></code></p>
