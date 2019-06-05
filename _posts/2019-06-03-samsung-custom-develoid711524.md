---
layout: post
title: '갤럭시 S7 누가 루팅 방법 & 문제해결 총정리'
author: 'sayanogen'
categories: Samsung-Custom
tags:
- Samsung
- Device
- Custom
-
---


<script> location.href='https://cafe.naver.com/develoid/711524' ; </script>

<p>* 이 가이드는 초보자에게 권장되지 않습니다.* 모든 과정 이후 KNOX 와 삼성페이는 영구적으로 사용 불가능해집니다.&nbsp;&nbsp;&nbsp; (KNOX WARRANTY VOID 카운트 증가)&nbsp;S7 Nougat (Android 7.0) 펌웨어부터 루팅 시에는 무조건 공장초기화가 필요합니다.&lt;초기화 하지 않을 시, /data 파티션 암호화 해독 (decrypt) 에 실패하여 부팅이 불가합니다.부팅 시도 시, 진동 2회 울린 후 무한 부트애니메이션에 빠집니다.&gt;누가를 처음 접했을 때 루팅에 애를 먹었던 기억이 떠올라, 일련의 과정을 문서화하여 사용자분들께 도움을 드리고자 가이드를 작성하게 되었습니다.S7 Nougat 펌웨어부터는 keystore (MC) 단에서 시스템 변조가 감지될 경우, userdata 를 decrypt 할 수 있는 key를 주지 않습니다.이덕에 초기화를 하지 않고 루팅을 시도할 경우, 부트불능 상태에 빠지게 됩니다.이 점 숙지하시고, 꼭 백업을 한 뒤 진행하십시오.먼저 TWRP 리커버리를 구해 odin 을 통해 설치합니다.설치 직후 바로 recovery 모드에 진입하고 Wipe 메뉴에 진입하여 Wipe Data 를 yes 하여 진행합니다.&nbsp;* 이 단계는 사용자의 모든 데이터를 초기화시킵니다. 이 단계를 건너뛸 경우 휴대폰은 부팅되지 않습니다.그리곤, adb push 나 외장 SDCard 를 통해 Super SU SR3 버전을 집어 넣습니다.완료되면 Install Zip 메뉴로 집어 넣은 Super SU 를 설치합니다.모든 단계를 마쳤으면 Reboot 메뉴에서 재부팅을 진행합니다.별 문제 없이 진행이 되었다면, 부트애니메이션에서 1회 재부팅 되고 그 이후 정상 부팅이 되며초기 셋업 메뉴가 뜰겁니다.셋업 메뉴를 지나고 나면 반가운 Super SU 가 보일것입니다.* 루팅을 했는데, 중요 자료를 백업하지 않은 경우,&nbsp;&nbsp; 즉 기존 시스템으로 다시 부팅이 필요한 경우 문제 해결 방법입니다.* 물론 초기화를 하지 않았다는 전제를 합니다. 초기화를 하셨다면 되돌릴 수 없습니다.백업할 자료가 있다면, Nougat Firmware 를 odin 을 통해 (fac가 붙지 않은 업그레이드용) 설치하신다면 이전 상태 그대로 부팅이 가능할 것 입니다.만약, 별다른 백업할것이 없다면 Recovery 모드에 진입하여 단순히 wipe data 로 초기화 하시면 정상 부팅 가능하십니다.</p>

