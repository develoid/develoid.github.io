---
layout: post
title: 'S10 5G 매지스크 루팅 방법 및 버그'
author: 'HD Voice'
categories: Samsung-Custom
tags:
- Samsung
- Device
- Custom
-
---


<script> location.href='https://cafe.naver.com/develoid/869475' ; </script>

<p>
        <p>
                          <p>
                        <img src="https://dthumb-phinf.pstatic.net/?src=https://topjohnwu.github.io/Magisk/images/samsung_bootloader.jpg&amp;type=f560_336">
                        
                </p>

                <p>
                        <p>Samsung</p>

                        <p>A Magic Mask to Alter Android System Systemless-ly</p>

                        <p>topjohnwu.github.io</p>

                </p>

                <a href="https://topjohnwu.github.io/Magisk/samsung.html"></a>
        </p>

</p>
<p>안녕하세요 Android Pay (HD Voice) 입니다S10 5G 루팅 방법 및 버그를 정리해서 이렇게 올려보아요..(모든 파이가 탑재된 상태로 출고된 기종에 적용 가능)원 게시물은 맨 위에 링크 걸었구요대충 번역하자면-준비 작업-1. SamFirm에서 본인에게 맞는 기종의 펌웨어를 다운 받고 압축을 풀어서 AP 파일을 폰에 옮겨주세요2. 폰에서 위에 있는 원 게시물 링크 접속해서 Magisk Manager 앱을 다운 받아서 설치하고 실행하고 Magisk 설치를 클릭하고 파일 선택 및 패치를 들어가서 내부 저장소 표시를 해주고 폰에 옮긴 AP 파일을 선택해주세요그러면 알아서 패치를 하고 Download 폴더에 magisk-patched.tar 라는 이름으로 저장될거에요 그 파일을 컴퓨터에 옮기시면 되요-본격 작업-1. 개발자 옵션 들어가서 OEM 잠금해제를 합니다2. 전원을 끄고 볼륨 다운과 빅스비를 누른 상태에서 USB를 연결합니다3. 다운로드 모드에 진입할지 말지 경고문이 뜰텐데 여기서 볼륨 업을 길게 누릅니다4. 그러면 이번엔 부트로더를 언락할지 말지 경고문이 뜰텐데 여기서 볼륨 업을 누릅니다5. 알아서 초기화하고 재부팅할거에요 환영합니다 라고 뜨면 인터넷 연결하고 초기 셋팅은 대충 넘기세요6. 개발자 옵션 들어가서 OEM 잠금해제 버튼이 켜져있고 건드릴수 없게 회색으로 표시되는지(grayed out) 확인해주세요6-1. 회색이 아니고 건드릴수 있는 상태라면 OEM 잠금해제를 껐다 켜고 2번부터 다시 하세요(OEM 잠금해제가 회색 상태여야 OEM LOCK이 해제됩니다)7. 전원을 끄고 볼륨 다운과 빅스비를 누른 상태에서 USB를 연결합니다8. 다운로드 모드에 진입할지 말지 경고문이 뜰텐데 여기서 볼륨 업을 아주 짧게 딸깍 누릅니다9. 오딘에서 AP에 magisk-patched.tar 파일 넣고 Auto Reboot 끄고 기기 연결해서 플래싱해줍니다10. 패스가 뜨면 볼륨 다운과 전원을 7초 동안 누르고 화면이 꺼지는 즉시 볼륨 업과 빅스비 그리고 전원을 경고문이 떠도 리커버리 화면이 뜰때까지 누릅니다11. 리커버리 화면이 뜨면 Wipe data/factory reset 해주고 Reboot system now를 눌러서 부팅합니다11-1. 만약 리커버리 진입에 실패하고 부팅을 시도한다면 자동으로 부팅에 실패했다며 리커버리 모드에 진입할겁니다Factory data reset 해주면 자동으로 부팅합니다12. 환영합니다 라고 뜨면 인터넷 연결하고 초기 셋팅 해주고 전원을 끄세요13. 볼륨 업과 빅스비 그리고 전원을 누르고 부트스트랩 로더 경고문이 뜨면 모든 버튼을 놓아주세요14. 부팅 되면 Magisk Manager를 설치하고 실행하세요 실행하면 추가 설치를 요구할것이고 그대로 해주시면 알아서 재부팅되요15. 부팅 됐다면 7번부터 한번 더 다시 해주세요 그래야 발열과 전원 꺼짐 증상이 없어져요끝났다면 이제 즐기시면 됩니다 평소에 껐다 켤때도 13번 방식으로 해주셔야 되요그냥 우리가 평소에 하는 전원 버튼만 눌러서 켠다면 매지스크가 빠진 상태로 부팅이 된다고 하는데,아마도 금융앱 쓸땐 전원만 눌러서 부팅하시면 될거에요 (부팅이 안될수도 있어요)-버그-커널 에디터 또는 CPU 튜너 같은 오버클럭 앱은 사용하시면 안되요그걸 건드리면 자동으로 재부팅되고 폰이 이상해져요끝!! 긴 글 읽어주셔서 감사합니다</p>
