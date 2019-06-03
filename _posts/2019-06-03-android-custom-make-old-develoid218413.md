---
layout: post
title: '#1 롬 포팅 (포팅하기)'
author: 'Ned'
categories: Android-Custom-Make(Old)
tags:
- Android
- Custom
- Make
-
---


<script> location.href='https://cafe.naver.com/develoid/218413' ; </script>


















						<p>&nbsp;</p><div><div><div><div><div><p> </p><p>롬 포팅 방법에는 일명 복붙 포팅과 소스 빌드가 있습니다.</p><p>이 강좌는 복붙 포팅에 관한 강좌입니다.</p><p>사람들은 복붙 보다 빌드롬을 선호하죠.. 왜냐하면 복붙롬은 빌드롬보다 버그가 많기 때문이죠 그러기에 버그 픽스만 하면 빌드롬 못지않은, 실사할 수 있는 롬을 만들 수 있습니다.</p><p> 이제 시작합니다.</p><p> </p><p>( 이 강좌는 안드로이드 강좌입니다. )</p><p> </p><p>준비물 : 알집, NotePad ++, 컴퓨터</p><p> </p><p>1. 먼저 포팅하고 싶은 롬의 안드로이드 버전이 무엇인지확인합니다. ( ex. 안드로이드 4.1.2 , 4.0.4)</p><p>2. 자신의 폰에 포팅된 같은 안드로이드 버전의 기반 롬이 있어야 합니다. ( ex. CM10, CM9, AOKP)</p><p>3. 이제 두개의 롬을 준비합니다. 1번의 롬은 다른 기종에서 포팅된 롬을 가져옵니다. (해상도가 같으면 좋겠지만 꼭 같지 않아도 상관없습니다. *cpu는 같아야 합니다.)</p><p>4. 1번의 포팅할 롬은 이제부터 'A' 라고 하겠습니다. 2번의 자신의 기종에 이미 있는 롬은 'B' 라고 하겠습니다.</p><p>5. A와 B를 압축을 풀어줍니다.</p><p>6. B에서 /system 폴더에 들어갑니다.</p><p>7. app, fonts, framework, media 폴더를 삭제 합니다.</p><p>8. A의 /system 에서 app, fonts, framework, media 폴더를 옮겨옵니다.</p><p>9. A의 /system/etc/permission 폴더에 가서 features.xml 과 handheld_core_hardware.xml, platform.xml 이 세 문서를 뺀 모든 문서를 B의 /system/etc/permission 에 옮겨옵니다. ( 복사 합니다.)</p><p>10. A의 /system/etc/init.d 폴더에 가서 00baner 이라는 것 빼고 다 B의 /system/etc/init.d 에 옮겨옵니다.</p><p>11. A의 /system/lib 폴더에 들어가서 libandroid_runtime.so와 libandroid_servers.so, libmedia_jni.so 를 B의 /system/lib 에 있는 libandroid_runtime.so와 libandroid_servers.so, libmedia_jni.so를 교체해줍니다.</p><p>12. A의 system/xbin 안의 su 파일을 B의 system/xbin 에 넣어주세요. 그래야 루트권한이 제대로 작동합니다.</p><p>13. A의 system/build.prop 을 NotPad ++ 로 열어주고 build.prop 안의 </p><p>         ro.config.ringtone=<b>         ro.config.notification_sound=<b>         ro.config.alarm_alert= </p><p>를 복사하여 B의 system/build.prop 안의 저 구문을 교체해 줍니다. </p><p>14. 알집으로 압축합니다.</p><p>15. 롬을 올려봅니다.</p><p>16. 부팅이 되면 환호 합니다. </p><p><span>17. 부팅에 실패하면 로그켓을 부르고 차근차근 픽스해갑니다.</span></p><p>&nbsp;</p><p>&nbsp;</p></div> </div></div> </div> </div><p>&nbsp;다음에는 fix강좌를 쓸 예정입니다.</p><p>&nbsp;디벨로이드에는 실력자가 많지만 그래도 복붙으로 롬을 포팅해 보고 싶은 분들을 위해 썼습니다.ㅎ</p>
