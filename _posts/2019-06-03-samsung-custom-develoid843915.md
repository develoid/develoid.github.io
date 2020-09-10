---
layout: post
title: '[커뮤니티] 잠깐의 틈을 통해 적는 삼성기기 통합 루팅/커롬설치 가이드'
author: '시류아'
categories: Samsung-Custom
tags:
- Samsung
- Device
- Custom
-
---


<script> location.href='https://cafe.naver.com/develoid/843915' ; </script>

<p>최근 이 질문 자주 올라오던데..</p>
<p>잠깐의 틈을 이용해서 간단하게 텍스트로만 가벼운 가이드 적습니다.</p>
<p>조금 더 상세한 가이드는 카페 에디터 개선되고나면</p>
<p>그때부터 몇 가지 프로젝트와 함께 조금 더 정리해서 적을 예정이니 참고바랍니다.</p>
<p>1. 본인 사용 기기의 빌드명 찾기</p>
<p>모든 안드로이드 스마트폰은 코드네임 또는 개발명칭을 기반으로하고 있는 별도의 빌드명을 가집니다.</p>
<p>본인의 기기의 빌드명을 정확히 찾아주세요.</p>
<p>예시</p>
<p>- Galaxy S5 (G900S/K/L) =&gt; kltekor</p>
<p>- Galaxy S5 LTE-A =&gt; lentislte</p>
<p>- Galaxy S6 =&gt; zerofltexx</p>
<p>- Galaxy S9 =&gt; starlte</p>
<p>2. 오딘 다운로드</p>
<p><a href="https://odindownload.com/">https://odindownload.com/</a></p>
<p>오딘 다운로드 사이트를 통해서 오딘을 다운로드 받아주세요.</p>
<p>상세설명은&nbsp;<a href="https://develoid.github.io/samsung/samsung-odin.html">https://develoid.github.io/samsung/samsung-odin.html</a></p>
<p>3. TWRP 리커버리 다운로드</p>
<p><a href="https://twrp.me/Devices/Samsung/">https://twrp.me/Devices/Samsung/</a></p>
<p>TWRP 리커버리 다운로드 사이트에서 본인의 기기에 맞는 TWRP 커스텀 리커버리를 다운로드 받아주세요</p>
<p>상세설명은&nbsp;<a href="https://develoid.github.io/android-custom/android-twrp.html">https://develoid.github.io/android-custom/android-twrp.html</a></p>
<p>4. 매지스크 다운로드</p>
<p><a href="https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445">https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445</a></p>
<p>위의 스레드에서 최신 버전의 매지스크를 다운로드 받습니다.</p>
<p>상세설명은&nbsp;<a href="https://develoid.github.io/android-custom/Android-How-to-install-Magisk.html">https://develoid.github.io/android-custom/Android-How-to-install-Magisk.html</a></p>
<p>다운로드 이후 기기의 외장메모리에 저장해놓습니다.</p>
<p></p>
<p>5. OEM 잠금해제 활성화</p>
<p>설정 &gt; 휴대전화 정보 &gt; 빌드번호 7회 이상 클릭해서 "개발자 옵션" 활성화</p>
<p>→&nbsp;개발자 옵션으로 진입해서 ADB 디버깅 활성화</p>
<p>→&nbsp;OEM 잠금해제 활성화</p>
<p>6. TWRP 리커버리 설치</p>
<p>오딘을 실행시킵니다.</p>
<p>→ Auto Reboot 을 체크해제합니다.</p>
<p>→&nbsp;AP 를 선택하고 다운로드 받은 TWRP 리커버리 이미지를 선택합니다.</p>
<p>→&nbsp;폰의 전원을 끄고 다운로드 모드로 진입합니다.</p>
<p>(홈 버튼 있을 경우 홈+볼륨 하+전원, 빅스비 버튼이 있을 경우 빅스비+볼륨 하+전원)</p>
<p>→&nbsp;PC와 폰을 케이블로 연결합니다.</p>
<p>→&nbsp;Start를 눌러서 플래싱합니다.</p>
<p>7. TWRP 리커버리로 부팅</p>
<p>→&nbsp;PC와 폰 케이블을 분리합니다.</p>
<p>→&nbsp;폰이 재부팅되는 타이밍에 맞추어서 리커버리 모드로 진입합니다.</p>
<p>(홈 버튼 있을 경우 홈+볼륨 상+전원, 빅스비 버튼이 있을 경우 빅스비+볼륨 상+전원)</p>
<p>8.&nbsp;(루팅)&nbsp;TWRP를 통해서 매지스크를 설치합니다.&nbsp;</p>
<p>Install 메뉴 선택</p>
<p>→&nbsp;매지스크 설치용 zip 파일 선택</p>
<p>→&nbsp;슬라이드를 스와이프하여 매지스크 설치</p>
<p>→&nbsp;시스템 재부팅</p>
<p>→&nbsp;매지스크 매니저 를 다운로드 받아서 기기에 APK 설치</p>
<p>→&nbsp;매지스크 매니저를 실행시켜서 녹색 체크 표시가 되어있는지 확인하여 정상적으로 설치되었는지 확인</p>
<p>→&nbsp;메뉴에서 “SafetyNet Check” 를 클릭하여 정상적으로 Google SafetyNet 통과가 되는지 확인</p>
<p>→&nbsp;루팅 및 매지스크 설치 끝</p>
<p>9. 커스텀롬 설치</p>
<p>커스텀 롬 종류는 다양하니 본인이 원하는 커스텀롬은 XDA나 카페 내에서 찾아주시길 바랍니다. 설명은 리니지OS를 기준으로 합니다.</p>
<p><a href="https://download.lineageos.org/">https://download.lineageos.org/</a></p>
<p>위의 링크에서 본인의 기기에 맞는 리니지OS 롬파일.zip 을 다운로드 받습니다.</p>
<p>→&nbsp;기기의&nbsp;외장메모리에&nbsp;파일을 저장합니다.</p>
<p>→&nbsp;기기를 재부팅하여 TWRP 리커버리 모드로 진입합니다.</p>
<p>→&nbsp;Wipe 메뉴를 누릅니다.</p>
<p>→&nbsp;Advanced Wipe를 눌러서 Dalvik/ART Cache, System, Data, Chache 를 선택하고 Swipe to Wipe를 슬라이드 하여 초기화 합니다.</p>
<p>→&nbsp;메인으로 돌아온 후 Install 메뉴로 진입합니다.</p>
<p>→&nbsp;다운로드 받은 ROM 파일을 선택 후 Swipe to Install 를 슬라이드하여 설치합니다.</p>
<p>→&nbsp;재부팅합니다.</p>
<p>→&nbsp;커스텀롬 설치 끝</p>
<p>*. 추가사항 1.&nbsp;만약 Install 메뉴 들어가서 아무것도 안 보일 경우</p>
<p>TWRP 리커버리로 부팅</p>
<p>→&nbsp;Wipe 메뉴 진입</p>
<p>→&nbsp;Format Data 실행</p>
<p>→&nbsp;메인으로 복귀 후 Reboot&nbsp; 메뉴 진입</p>
<p>→&nbsp;Reboot Recovery 를 통해서 리커버리모드로 재부팅</p>
<p>(Power Off 를 한 경우 다시 전원을 키고 버튼을 눌러서 리커버리 모드로 진입)</p>
<p>→&nbsp;파일 다시 복사</p>
<p>→&nbsp;설치 진행</p>
<p>* P.S.</p>
<p>빠진 내용은 댓글로 조금 상세하게 적어놓으시면 정리해서 본문에 추가하겠습니다.</p>
<p>* P.S. (2)</p>
<p>만약 삼성기기 루팅이나 커스텀롬 관련 질문 있으면 이 게시글 링크 달아주시길 바랍니다.</p>
