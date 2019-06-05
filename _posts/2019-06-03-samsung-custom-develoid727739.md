---
layout: post
title: '물리키 비활성화 및 빅스비 버튼으로 바꾸기 (루팅 필요)'
author: 'yopd'
categories: Samsung-Custom
tags:
- Samsung
- Device
- Custom
-
---


<script> location.href='https://cafe.naver.com/develoid/727739' ; </script>

<p>이 게시글에는 Root Explorer외엔 어떠한 어플도 필요하지 않습니다.이 방법은 갤럭시 노트 5에서 테스트 되었습니다. 그러나 메뉴키가 멀티테스킹 키로 바뀐 이후의 폰들은 다 정상적으로 작동할 것이라고 생각합니다.작동 확인된 기기 : S6, 노트 5, S7강좌를 써본 경험이 별로 없는지라 바로 방법 설명에 들어가겠습니다.- 물리키 비활성화 -1. Root Explorer를 통해 system/usr/keylayout에 있는 Gerneric.kl 파일을 내부 저장소 또는 SD카드에 복사합니다. (복사하지 않아도 상관없으나 안전한 작업을 위해 복사합니다)2. 복사한 파일을 꾹 눌러 '텍스트 편집기로 열기'를 눌러주세요.</p>
<img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA3MTZfOTgg/MDAxNTAwMjExNjQ1NzAx.StzN5_jHH33wXvHrXUmrjN91Qq6qmRgrP_cH4P3p2Wwg.Tal-AaMe4lK3yFkeeGcx_sdMOW3RYSmoVTR1NHaPpHAg.JPEG.schenker7/externalFile.jpg?type=w740"><p>3. 정상적으로 열렸다면 이런 화면이 뜹니다(기기마다 약간씩 다를 수도 있습니다)</p>
<img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzA3MTZfMTcy/MDAxNTAwMjExMzI4Njc0.hnK3QIeaVK7xUzCq0B64FMnKpWqsxJ2-l2hnxzktjX0g.rNXPJT5aJYOqBZHqjm2BaqZOc_CUb_Piasu8mk8PSVsg.JPEG.schenker7/externalFile.jpg?type=w740"><p>쭉 내리면서key 139 MENUkey 158 BACKkey 172 HOMEkey 254 APP_SWITCH앞에 #을 붙여 #key 139 MENU#key 158 BACK#key 172 HOME#key 254 APP_SWITCH이런 형태로 만들어줍니다. (한칸 띄우지 않아도 문제없습니다)4. 저장을 한 뒤 다시 system/usr/keylayout에 투척하고 권한을 644 주고 재부팅 합니다재부팅이 끝났다면 하단의 물리키는 비활성화가 되었습니다.- 홈버튼을 빅스비 버튼으로 만들기 -3의 단계에서 key 172 HOME을key 172 WINK로 바꿔 저장합니다. (# 붙이지 마세요)그 뒤 4의 단계를 진행하시면 됩니다.------------------------------------------------------혼란을 드릴 수 있어 말씀드립니다. -key 139 MENU 는 메뉴키가 멀티테스팅으로 바뀌기 전의 키 이며 확실함을 위해 비활성화 목록에 끼워 넣었습니다.홈버튼을 비활성화 하여도 지문인식은 잘 됩니다.오타 및 설명이 부족한 부분, 적용이 되는 기기는 댓글로 남겨주시기 바랍니다. 감사합니다</p>

