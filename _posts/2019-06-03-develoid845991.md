---
layout: post
title: '[취향주의]AOSP계열 롬에서 루팅 감지 기능이 있는 게임을 해봅시다.'
author: '디벨교육과정평가원'
categories: Android-Custom
tags:
- Android
- Custom
-
-
---


<script> location.href='https://cafe.naver.com/develoid/845991' ; </script>


















						<p><span><span>다<span>음은 AOSP 계열(또는 Lineage OS 계열)의 커스텀 롬에서 루팅 감지 기능이 있고, Magisk 등의 슈퍼유저 어플리케이션의 루팅 숨김 기능을 이용하거나 루팅을 하지 않아도 루팅된 기기로 인식되는 게임을 실행할 수 있도록 하는 과정을 나타낸 것입니다. (단, 이 글에서 게임을 실행할 때의 조건은 루팅을 해제하였지만 부트로더가 언락되어있고, TWRP 등의 리커버리 모드가 설치되어있음을 가정합니다. 또, 이 글의 내용은 안드로이드 운영체제의 커널(여기서는 boot.img) 램디스크를 얻을 수 있다는 가정 하에서 진행됩니다.)</span></span></span></p><p><span><b></span></p><p><span>[진행 조건]</span></p><p><b></p><p><span>사용된 기기 : 부트로더가 언락된 LG V30 KT 통신사 버전(128GB용량)</span></p><p><span>사용된 운영체제(롬) : Lineage OS 16.0 (안드로이드 버전 : 9.0)</span></p><p><span>사용된 리커버리 모드 : TWRP</span></p><p><span>예시로 실행한 게임 </span><span>어플리케이션 : </span><span><span>きららファンタジア</span></span></p><p><span><span><span><b></span></span></span></p><p><span><span>[진행 과정]</span></span></p><p><span><span><b></span></span></p><p><span><span>(가) 게임을 플레이하려는 롬의 boot.img 파일을 롬에서 추출합니다. (단, Anykernel이 아닌 커스텀 커널의 boot.img는 이 과정을 생략한 후 과정 (나)를 거칩니다.)</span></span></p><p><span><span>(나) 그림과 같이&nbsp;(가)의 boot.img를 분해(Unpack)하여 얻은 램디스크 부분의 default.prop 파일을 엽니다.</span></span></p><p><span><span><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMjNfNzAg/MDAxNTQ4MjA0MzExOTY1.qUkpyq_tSfR0EhrupFT6J6USftmYHMokukoGhn7hxJEg.pGi33o2q5i1kCDPsSkV5WML_S0cCbe6LP-leXKo114gg.JPEG.exca456/%28%EB%82%98%29.jpg?type=w740"></span></span></p><p><span><span><span></span></span></span></p><p><span><span><span>(다) (나)의 default.prop&nbsp;파일 중&nbsp;ro.debuggable=1 부분을 ro.debuggable=0으로 수정하고, ro.secure=0과 같은 부분이 있는 경우 ro.secure=1로 바꿉니다.</span></span></span></p><p><span><span><span>(라) (다)와 같이 수정한 (나)의 boot.img와 관련된 파일을 재결합(repack)합니다.</span></span></span></p><p><span><span><span>(마) 커스텀 롬의 build.prop 파일에서 ro.build.type= userdebug(또는 eng) 부분을 ro.build.type=user로 수정합니다.<b></span></span></span></p><p><span><span><span>(바)&nbsp;(라)에서 얻은 boot.img 파일을&nbsp;리커버리 모드의 img 플래싱 기능을 이용하여 boot 파티션에 플래싱 한 후&nbsp;(마)에서 얻은 build.prop을 system 폴더에 644(rw-r-r) 퍼미션으로 붙여넣은 다음&nbsp;원하는 게임 어플리케이션을 실행합니다.</span></span></span></p><p><span><span><span><b></span></span></span></p><p><span><span><span>[결과]</span></span></span></p><p><span><span><span>그림은 이 과정을 거친 커스텀 롬에서, 원래는 AOSP 계열 커스텀 롬을 설치한 기기를 루팅된 기기로 간주하는 게임을 실행하는 모습을 나타낸 것입니다.</span></span></span></p><p><span><span><span></span></span></span></p><p><span><span><span><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMjNfMTg3/MDAxNTQ4MjA0MzMyNzA3.HafqhRtMC5_LENGxzfgBr3WNQSgdiFxZOGiddnYfqE0g.TC-KPaxBvZhhnlfhunz8dkD02lQQxC3jc0Y4avRUF04g.PNG.exca456/Screenshot_20190123-093728_.png?type=w740"><b></span></span></span></p><p>-------------------------------------------------------------------------------------------------------------------</p><p>이 글에 적용된 방법의 출처 : </p><div>
        <div>
                          <div>
                        <img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fwww.redditstatic.com%2Fnew-icon.png%22&amp;amp;amp;amp;amp;amp;type=f220">
                        <span></span>
                </div><div>
                        <div>Guide to play FGO on unrooted LineageOS</div><div>This is based on the memu mod. What you need is to edit is default.prop and build.prop EDIT (30/8/18) TREBLE:..</div><div>www.reddit.com</div></div>
                <a href="https://www.reddit.com/r/grandorder/comments/6kcuih/guide_to_play_fgo_on_unrooted_lineageos/"></a>
        </div></div><b><p></p><span><p><b></p><span><p>발문 방식 : 한국교육과정평가원에서 출제하는 시험(대학수학능력시험, 대학수학능력시험 모의평가/예비평가, '임용고사') 발문의 경어체 판(과학탐구&nbsp;영역&nbsp;과목의 발문을 주로 이용하였습니다.)</p><p><b></p><p>p.s. ro.secure=0과 같은 부분이 있는 경우 ro.secure=1로 바꾸어주시기 바랍니다. lineage os의 경우에는 ro.secure=1로 되어 있지만 다른 커스텀롬(ex. Havoc OS) 같은 경우에는 ro.secure=0과 같은 부분이 있어, ro.debuggable=1 부분을 ro.debuggable=0으로 수정해도 예시로 든 것과 같은 게임 실행이 되지 않습니다.</p><span><p><b></p><p><b></p></span></span></span>
