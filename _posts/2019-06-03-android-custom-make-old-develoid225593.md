---
layout: post
title: '#3 포팅한 롬을 기기에 최적화, 오류를 픽스해보자!!'
author: 'Ned'
categories: Android-Custom-Make(Old)
tags:
- Android
- Custom
- Make
-
---


<script> location.href='https://cafe.naver.com/develoid/225593' ; </script>

<p  >#1 과 #2를 통해 부팅이 되었을 겁니다. </p>
<p  >그러면 이제 오류를 픽스해서 더욱 완벽한 롬으로 만들어봅시다. </p>
<p  >자잘한 버그보다 큰 버그를 중심적으로 다룹니다. </p>
<p  >﻿ </p>
<p  >준비물: 디컴파일 할 수 있는 툴 (예: apktool), 알집, 백스말리 툴 (예: bsmanager) </p>
<p  >﻿ </p>
<p  >Ⅰ. 저장소 관련 오류 fix</p>
<p  >1. system/framework 에서 framework-res.apk 를 포팅한 롬에서 추출합니다.</p>
<p  ></p>
<p  >2.자신의 기기에 포팅된 저장소 오류가 없는 롬(순정롬도 됩니다) 의 system/framework안에 있는 framework-res.apk 를 추출합니다. </p>
<p  >﻿ </p>
<p  >3. 두 파일(framework-res.apk 2개)의 확장자를 .zip으로 바꿔줍니다. </p>
<p  ></p>
<p  >4. ﻿두 파일을 모두 압축을 풀어줍니다. </p>
<p  ></p>
<p  >5. 오류가 없는 framework-res 안에서 res/xml 안의 storage_list.xml를 오류가 있는 frmaeowork-res/res/xml 안의 storage_list.xml와 교체해줍니다. </p>
<p  >﻿ </p>
<p  >Ⅱ. 통신 관련 오류 fix </p>
<p  >1. framework.jar을 백스말리 해서 framework.jar/com/android/internal/telephony 폴더에 가서 RIL.smali, Ril~.smali, SkyQualcommRIL.smali, SkyQualcommRIL~.smali (회사명).smali (samsung 기기면 SamsungRIL.smali, kttech 기기면 kttech***Ril.smali) 을 옮겨줍니다. </p>
<p  ></p>
<p  >2. 스말리 합니다. </p>
<p  ></p>
<p  >3. 롬에 넣어줍니다.﻿ </p>
<p  >﻿ </p>
<p  >Ⅲ. 진동 관련 오류 fix </p>
<p  >1. services.jar을 백스말리 한다.</p>
<p  ></p>
<p  >2.﻿ com/android/server 에 가서 VibratorService.smali 를 기존 빌드롬의 것으로 교체해 줍니다.</p>
<p  ></p>
<p  >3. 스말리 합니다.﻿ </p>
<p  ></p>
<p  >4. 롬에 넣어줍니다.﻿ </p>
<p  >﻿ </p>
<p  >Ⅳ. 배터리 최적화 </p>
<p  >1. framework-res.apk 디컴파일해서 res/xml 폴더 가서 power_profile.xml 을 옮겨줍니다. </p>
<p  ></p>
<p  >2. 디컴파일 합니다.﻿﻿ </p>
<p  ></p>
<p  >3. 롬에 넣어줍니다.﻿ ﻿</p>
<p  >﻿ </p>
<p  >Ⅴ. 그래픽 부분 최적화</p>
<p  ></p>
<p  >1. framework.jar을 디컴파일 한다.</p>
<p  ></p>
<p  >2. 아래 파일을 기존 빌드롬에서 교체해 준다.</p>
<p  ></p>
<p  >3. smali\smali\android\os</p>
<p  ></p>
<p  >Environment</p>
<p  >SystemProperties</p>
<p  >smali\smali\android\view</p>
<p  >HardwareCanvas</p>
<p  >HardwareRenderer$Gl20Renderer</p>
<p  >HardwareRenderer$GlRenderer</p>
<p  >HardwareRenderer </p>
<p></p>
<p>4. 스말리 해준다.</p>
<p>5. 롬에 넣어준다. ﻿﻿</p>
<p></p>
<p>이상으로 롬 포팅에 관한 강좌가 끝났네요 ㅎㅎ</p>
<p>이 방법으로 픽스까지 하면 거의 완벽해질 겁니다.</p>
<p>감사합니다. <p></p>
</p>

