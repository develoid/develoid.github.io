---
layout: post
title: '[커뮤니티] 갤럭시 해외판 CSC 변경법 및 삼성페이 고찰'
author: '시우연우파파'
categories: Samsung-Custom
tags:
- Samsung
- Device
- Custom
-
---


<script> location.href='https://cafe.naver.com/develoid/795358' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcafeptthumb-phinf.pstatic.net%2FMjAxNzEyMzFfMTg3%2FMDAxNTE0NzI0Mzk3NDM2.EjYQ-bdiG3LKFHRn75mQ7eBBKhVM5uj38GOVJgD1fykg.k0_RT99TaGnkWmNJGXAcRQJSpMijrzTByQNphac_hqEg.PNG.searphiel9%2F%25EA%25B2%258C%25EC%258B%259C%25EA%25B8%2580_%25EC%259E%2591%25EC%2584%25B1_%25EC%25A0%2584_%25EA%25BC%25AD_%25EC%259D%25BD%25EC%2596%25B4%25EC%25A3%25BC%25EC%2584%25B8%25EC%259A%2594_%2528IT_%25EC%2586%258C%25ED%2586%25B5_%25EA%25B2%258C%25EC%258B%259C%25ED%258C%2590.png%3Ftype%3Dw740%22&amp;type=cafe_wa740"><p>녹스깨짐없이 해외판 듀얼심에서 삼성페이를 사용하자!!</p>
<p>또한 S8, Note8 국내판 기기의 통신사 펌웨어 변경을 성공해보자!!</p>
<p>이 두가지 모토로 4월 한달간 해외판 노트8부터 C9 Pro까지 CSC 변경을 시도해봤습니다.&nbsp;</p>
<p>그래서 어제까지 Note8 Duos와 C9 Pro Duos로 테스트한 결과와 이전 갤럭시노트8의 결과를 종합해서 종합 결과와 강좌를 남김니다.</p>
<p>(똥컴이라 버버버벅이는 상태에서 작성하는거라 최대한 간단히 남기며 푸핫님도 성공하셨으니 더 좋은 강좌와 염원의 삼성페이를 성공해주시리라 믿습니다.)</p>
<p>1. CSC 변경법</p>
<p></p>
<p>기본적으로 갤럭시 펌웨어의 CSC는 Cache.img (S9부턴 odm으로 바뀌었습니다) 속에 들어 있습니다.</p>
<p>이것을 언팩하시면 나오는게 다음과 같습니다.</p>
<p></p>
<p>S7이하 구기기 :&nbsp; sec_csc.zip</p>
<p>S8,A8,Note8 : sec_omc.zip</p>
<p>저 압축 파일속에 csc가 담겨져 있는것이죠.&nbsp;</p>
<p>이 압축 파일은 sign이 적용되어있으므로 내용이 수정이되거나 변경되면 순정리커버리에서 플래시이 안되고 오로지 최초 언팩된 저 상태일 때 순정리커버리에서 적용할 수 있는 update.zip 입니다.</p>
<p>우선 csc 변경을 원하시는 통신사 파일을 준비해서 외장메모리에 복사해 둡니다.</p>
<p>csc 변경법은 간단합니다.</p>
<p>S8이후 기기는 파티션을 초기화 해야하므로 공초가 필수입니다. (데이터 백업 필수)</p>
<p>S7이하기기는 2)부터 따라하시면되고 공초는 안해도 되는거 같습니다. (C9프로로 확인, 타기기는 확인못함)</p>
<p>1) S8, Note8, A8 기기 (해외판)</p>
<p>먼저 기기에 원래 설치된 순정 초기화 펌웨어를 준비합니다.</p>
<p>CSC를 압축프로그램으로 열어 안에있는 ****.pit 를 꺼내놓습니다.</p>
<p>그 다음 오딘을 실행시켜 사진처럼&nbsp;Pit를 로드시킴니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA0MjhfMTUg/MDAxNTI0ODQ1NTIyMTQ4.TsCQA63IK6sV2V0uGtiTn022ZN5xBvXZCUOJHHg5SW4g.w5lwxYwwaM9_9LWHy0PHvwl4g25F9xUxoOkQjxDJHzMg.PNG.fantasyrock/odin_02.png?type=w740">CSC를 제외한 나머지 BL, AP, CP를 로드시키고, Auto Reboot를 체크해제하고 펌웨어 플래싱합니다.<img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA0MjhfMTY2/MDAxNTI0ODQ1NTIyMjc1.1Cy-rjSQ0a0yR5Zl-903UAFXK3rTmgrGw4zfaeSxDhsg.WOipD2vWrYIeC8CpKd9x-rFqCqPNuL-LBQ10qMhhIPIg.PNG.fantasyrock/odin_03.png?type=w740"></p>
<p>플래싱이 완료되면 Auto Reboot를 체크해제했으니 오딘모드 그대로 있습니다. 수동으로 재부팅(볼륨하+전원 7초)하고 즉시 순정리커버리로 진입하신 후&nbsp;순정 cache.img에서 추출해둔 저 파일을 순정리커버리에서 플래싱하면 됨니다.</p>
<p>반드시 첫번째 부팅에서 순정리커버리로 진입해야합니다. 부팅애니가 나오기 전 즉시 순정리커버리로 진입해야 기존 오리지널 CSC가 활성화 되지 않게되면서 다른 CSC로 변경을 할 수 있습니다.&nbsp;</p>
<p>2) S8이후기기 + S7이전 기기들</p>
<p>앞서 펌웨어에서 추출된 sec_csc, sec_omc 파일을 외장메모리에 복사해둠니다. (주의! 해당 기기에 맞는 csc, omc를 사용하셔야 합니다. S7이하 기기에 S8꺼를 플래싱하면 무한부팅됨니다.)</p>
<p>첫번째 부팅 시 바로 재부팅 후 순정리커버리로 진입합니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA0MjdfMTgw/MDAxNTI0ODM3MjgzMDI4.J-r2z1AHjbbuv1_R2q9vpi1cFaZpa-02zo-iOuCbqQsg.grQEbLKPyxO543iHjDeiY-ei1XrcZEatexQpnsyYv54g.JPEG.fantasyrock/20180427_223643.jpg?type=w740"></p>
<p>Apply update from SD card 를 선택합니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA0MjdfNyAg/MDAxNTI0ODM3MzE1OTkx.p2zdce27wCtlZO3qUKn56IVjdMCtxWfx1hio__bI_fcg.3PlSj3Ij3kAqN5Z2G0LzKsghqgBM7Jy2DNQAWLyjLocg.JPEG.fantasyrock/20180427_223758.jpg?type=w740"></p>
<p>미리 집어넣은 csc.zip 파일을 선택하여 플래싱합니다. (S7이하기기에는 sec_csc.zip, S8이후는 sec_omc.zip입니다.)</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA0MjdfNzgg/MDAxNTI0ODM3MzQ3MDEy.BgF69nPh309Xlk4JhXho23FhVQdWbiHmIF3Myao7AeQg.P8-uOpi1cWwv2Cut65LLL6sTIqxbHtnxz68aspSpg0sg.JPEG.fantasyrock/20180427_223824.jpg?type=w740"></p>
<p>끝!!</p>
<p>간단하죠? 물론 공초를 하신 후 적용해야 한국 csc에서 불러오는 국경일 표시, 키보드레이아웃(나랏글,베가), 다이얼 초성검색등등이 정상적으로 표시됨니다.&nbsp;플래싱이 완료된 후는 자동으로 재부팅되며 시스템을 시작하고 설정하신 후 다이얼에 진입해보시면 다이얼 초성표시를 보시면 제대로 적용되었는지 알 수 있습니다.</p>
<p>해외판 기기는 CSC를 국내판으로 변경하시면 IMS세팅에서 활성화해야 가능했던 VoLTE가 별다른 조작을 하지 않아도 오레오에서도 자동으로 작동가능하며(사전 OMD등록은 필수), 국내판 부팅애니, HD보이스표시, 통신사 추노표시, LTE 표시, 캐리어5칸-&gt;4칸으로 변경, 키보드, 국경일표시 되는 등 사용자 UX가 국내판처럼 바뀜니다.</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA0MjdfOTAg/MDAxNTI0ODQwNTg2NzE5.nIR8EkR3_2xgEiIN8iz9CqPz9BFzpT4VuT8b4R9DWoIg.2W3aWBPOsrJgDNZB_eyP7M9pc1WDF6vjpPnmrR8JH54g.JPEG.fantasyrock/20180427_234626.jpg?type=w740"></p>
<p>C9 Pro에 CSC는 SKC가 적용된 것을 알 수 있구요. 상단의 추노마크도 생성됨니다.<img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA0MjdfMjAg/MDAxNTI0ODQwNTg2OTAy.PUmdhRu2MZx4xMoU2lNB_J4JUy-xIeg0E4TWDxwkKLIg.ge3ysfDE9Wz6mAZ_GJvoQqX8JrUWG4TQEyPYS2J3Xrsg.JPEG.fantasyrock/20180427_234655.jpg?type=w740"></p>
<p>SKT VOLTE 정보까지 자동로드가되어 OMD 등록만하면 별다른 설정없이 VOLTE를 사용할 수 있습니다.<img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA0MjdfNTYg/MDAxNTI0ODQwNTg3MDEw.iKxZZ2fn5e7ZuF9Xxmea7J0BMQFQieHDNdK4Fpi-Xpog.UyvezO_Y6TQWDiRXcmX-3joPqqf0v5e4s3flg8PH3cAg.JPEG.fantasyrock/20180427_233920.jpg?type=w740"></p>
<p>다이얼의 초성이 국내판과 동일하게 활성화 되었습니다.</p>
<p>3) 보너스&nbsp;</p>
<p>해외판 노트8, 국내판 노트8, S8을 올림픽에디션으로 만들어보자!!</p>
<p>-올림픽에디션 펌웨어에서 sec_omc.zip을 추출, 일반 국내판 노트8,S8,A8에서 sec_omc.zip을 추출하여 외장메모리에 복사합니다.</p>
<p>-위 방법대로 순정리커버리 진입하신 후 공장초기화 후 원하는 omc를 먼저 플래싱하고, 다시 재부팅 후 리커버리로 가서 올림픽 펌웨어 추출한 omc를 플래싱하고, 또다시 재부팅해서 다시 리커버리로 와서 처음 플래싱했던 일반&nbsp; omc를 다시 플래싱합니다. (올림픽omc에서 다시 국내판 omc를 올리는 이유는 올림픽 csc는 국내 국경일표시가 되지 않습니다. 또한 듀얼심 해외판은 KT omc를 올리시면 무한부팅되는데 이 올림픽 omc가 바로 KT omc입니다.)&nbsp;</p>
<p>-재부팅이되면 올림픽테마가 디폴트테마로 설치가되면서 올림픽테마를 쓸 수 있게 됨니다.</p>
<p>2. 펌웨어 변경은??</p>
<p>그럼 csc를 변경하는 방법이 있음에도 S8이후 기기의 통신사펌웨어 변경이 안되는 이유는 무엇인가?</p>
<p>제가 내린 결론은 S8이후기기부터 통합 Mlulti-CSC를 사용하며 이 CSC에는 통신 3사 CSC가 모두 들어있습니다. 또한 CSC는코드(한국 OKR, 아시아 OXM)가 있는데 이 코드가 변경될 경우에만 위 방법으로 CSC를 바꿀 수 있고&nbsp;동일한 코드인 한국 OKR 코드에 속하는 Muliti-csc인 SKC, KTC, LUC 사이는 바꿀 수 없다는 겁니다. 그 이유로 국내판끼리 펌웨어 교체가 불가능했던 부분으로 생각됨니다. 반면에 S8이전 기기의 경우 국내판은 Single-CSC로서 통신사에 맞게 CSC가 별도로 존재하므로 해당 CSC만 올리면 CSC변경이 가능한 겁니다.</p>
<p>추가적으로 동일&nbsp;CSC&nbsp;코드라해도 Muliti-CSC 와 Single-CSC끼리는&nbsp;CSC&nbsp;변경이 가능합니다. 이것은&nbsp;Single-CSC&nbsp;인 평창올림픽 에디션(KTC)을 이용하면 SKT 기기를 올림픽 펌웨어(KT CSC)로 바뀌는 것을 확인 할 수 있었습니다.</p>
<p>또한 해외판도 마찮가지로 OXM 펌웨어에 포함된 다른&nbsp;CSC 끼리는&nbsp;변경되지 않았음을 확인하였습니다. 그럼 국내판에&nbsp;타 통신사 펌을 올렸을 경우 여러 통신사앱이 중복설치되는 이유는 무었을까요?&nbsp;</p>
<p>국내 통신사펌은 통신사별로 나누어져긴하지만 실제로 펌웨어를 살펴보면 동일한 펌웨어임을 알 수 있습니다. 유일하게 차이나는 부분은 펌웨어내의 Cache.img와 userdata.img 입니다. Cache.img는 sec_omc.zip이 들어있으며, 이것은 아시다시피 메인 omc가 어디인지만 다를 뿐 3사 omc가 모두 들어있는것은 동일합니다. 실제로 차이나는 것은 통신사 전용 프리로드앱이 별개로 들어있는게 userdata.img이며 이게 중복 설치되면서 혼종펌웨어가 되는 것입니다. 타 통신사 펌웨어를 올릴 때 이것을 빼놓으면 수많은 통신사앱이 중복설치되진 않습니다.</p>
<p>S7이하 기기는 CSC코드가 없이 그냥 CSC의 sales-code로 구분하므로 쉽게 csc가 변경되는 것으로 보임니다. 이 부분은 확실히구형이 좋은거 같네요. 특히 S9의 경우 더이상 csc를 바꿀 수 없는 구조로 변경되어 해외판을 국내판처럼 만드는 것 자체가 불가능해졌습니다.</p>
<p>3. 삼성페이는??</p>
<p>삼성페이의 기본적인 작동 구조는 삼성페이앱 + 프레임워크입니다.</p>
<p>프레임워크는 시스템에 100kb 정도의 작은 용량의 link 파일이 설치되어있어서 타지역 프레임워크가 설치될 경우 삼페구동을 차단하거나, 삼성페이 미니가 중복설치 되는 것을 방지하는 역할을 합니다. 삼성페이앱은 구글 마켓, 삼성앱스에서 설치가 가능하며 추출된 apk로도 설치가 가능하구요.&nbsp;&nbsp;</p>
<p>프레임워크는 기기에서 최초로 삼성페이를 실행시 삼성페이 업데이트 버전이 설치되는데 그때 결제모듈이란 이름으로 추가 설치가 됨니다. 이것은 apk 형식의 파일이 아니라 백업이나 추출이 불가능하므로 따로 설치할 방법이 없다고 할 수 있습니다. 사실상 이게 해결이 안되면 해외판 기기의 국내 삼성페이는 사실상 영원히 불가능한 숙제라고 생각되네요.</p>
<p>해외판의 기본적인 삼성페이 실행법은 csc가 변경된 상태에서는 미지원 국가로 표시되며, 추가로 추출된 삼성페이 apk앱을 설치해야되며 이 경우 결제모듈이 설치가 안된 상태이므로 오프라인결제를 제외한 모든 기능은 사용할 수 있습니다.</p>
<p>(삼성페이 설치내용 관련글은 다음의 링크에서 확인하십시요 :&nbsp;<a href="http://cafe.naver.com/develoid/792263">http://cafe.naver.com/develoid/792263</a>)</p>
<p>이로서 간단한 csc 변경법과 삼성페이에 관한 고찰을 적어봤습니다. 저는 여기서 포기하지만 푸핫님께서 성공시켜주시길 빌겠습니다. 두서없는 글 읽어주셔서 감사합니다.</p>
