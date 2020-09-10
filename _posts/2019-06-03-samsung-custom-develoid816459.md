---
layout: post
title: '[커뮤니티] 갤럭시 S6 (계열) CSC 변경하기 (절반의 성공)'
author: '하늘목장'
categories: Samsung-Custom
tags:
- Samsung
- Device
- Custom
-
---


<script> location.href='https://cafe.naver.com/develoid/816459' ; </script>

<p><p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcafeptthumb-phinf.pstatic.net%2FMjAxNzEyMzFfMTg3%2FMDAxNTE0NzI0Mzk3NDM2.EjYQ-bdiG3LKFHRn75mQ7eBBKhVM5uj38GOVJgD1fykg.k0_RT99TaGnkWmNJGXAcRQJSpMijrzTByQNphac_hqEg.PNG.searphiel9%2F%25EA%25B2%258C%25EC%258B%259C%25EA%25B8%2580_%25EC%259E%2591%25EC%2584%25B1_%25EC%25A0%2584_%25EA%25BC%25AD_%25EC%259D%25BD%25EC%2596%25B4%25EC%25A3%25BC%25EC%2584%25B8%25EC%259A%2594_%2528IT_%25EC%2586%258C%25ED%2586%25B5_%25EA%25B2%258C%25EC%258B%259C%25ED%258C%2590.png%3Ftype%3Dw740%22&amp;type=cafe_wa740"><p>시우연우파파 / HDVoice 님께서 알아낸</p>
<p>S8 / N8 CSC 덮어쓰기 변경과정을 성공적으로 노트8에서 적용했었습니다.</p>
<p>(노트8 실사중인폰 오레오에서 포멧없이 CSC만 바꿔도 부팅애니, 기본앱 등이 다바뀌더군요)</p>
<p>CSC변경법이 이론상 S6기기에도 가능할 듯 해서 시도해보았고 반쯤은 성공한거 같아서 간략하게 후기남깁니다.</p>
<p>이 방법은 S6기기에서 녹스 깨지 않고 CSC변경시 지원되는 기능입니다.</p>
<p>절반의 성공이기에 간략하게 텍스트로만 남깁니다.</p>
<p>우선 사진부터 보시죠</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA4MTJfMTE5/MDAxNTM0MDYwNDQ1MDE3.dpXll0l_IgX-KSgCxpy_PxWwwgT3qe9GCgpYoYv0V3Ag.p8mdwTEjineAQqxbkr5cRFwiO8kYWsB84oNizFUzA2Ag.JPEG.gch1310/KakaoTalk_20180805_125851671.jpg?type=w740"><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODA4MTJfMzAg/MDAxNTM0MDYwNDQ1MzMw.xSgd8-FXvk-Zvy7KrkOjDgS0YUh1hKaPUVaO14WeFssg.LiuEm1D4QnR1CYINFIHXw6dYdzKFZih7pJ6n6WVQcoog.JPEG.gch1310/KakaoTalk_20180805_125844734.jpg?type=w740"></p>
<p>보시다 시피 기기는 G928L U+기기입니다.</p>
<p>그러나 설정에서 보면 SK의 설정인 T로밍 이 보이는 것을 알 수 있고 (SKT CSC 업로드)</p>
<p>사진엔 없으나 전화앱의 설정이 SK 설정</p>
<p>그리고 원래 기본앱에서 삭제할 수 없었던 , U+고객센터 / u+box 의 사용안함 처리가 가능해집니다.</p>
<p>또한 T전화 설치시 삭제불가해지는게 SK 펌웨어 비슷하게 변하긴 합니다.</p>
<p>다만!</p>
<p>갤럭시 S6은 s8과는 다르게 통합펌웨어가 아닌관계로</p>
<p>부팅로고가 바뀌지 않으며, 삭제가능한 U+앱이 펌웨어에 남아있고 SK앱은 없습니다.</p>
<p>그래도 삼성 기본앱 이 SK 설정대로 바뀌고 HD voice 설정이 생기며 SKT 추노로고가 생기는듯 반은 SK 펌웨어 화가 됩니다.</p>
<p>방법은 다음과 같습니다.</p>
<p><a href="http://siwooyeonwoopapa.tistory.com/entry/%EA%B0%A4%EB%9F%AD%EC%8B%9C-%ED%95%B4%EC%99%B8%ED%8C%90-CSC-%EB%B3%80%EA%B2%BD%EB%B2%95-%EB%B0%8F-%EC%82%BC%EC%84%B1%ED%8E%98%EC%9D%B4-%EA%B3%A0%EC%B0%B0">http://siwooyeonwoopapa.tistory.com/entry/%EA%B0%A4%EB%9F%AD%EC%8B%9C-%ED%95%B4%EC%99%B8%ED%8C%90-CSC-%EB%B3%80%EA%B2%BD%EB%B2%95-%EB%B0%8F-%EC%82%BC%EC%84%B1%ED%8E%98%EC%9D%B4-%EA%B3%A0%EC%B0%B0</a></p>
<p>참고하시고 따라해보세요.</p>
<p>따라하실정도면 어느정도의 준비와 지식은 있으실 거라고 생각합니다.</p>
<p>0. 준비물</p>
<p>G928L 최신펌웨어(원기기),&nbsp;</p>
<p>- AP, CP, BL, Pit 준비</p>
<p>G928S 최신펌웨어(바꾸려는 통신사)</p>
<p>- CSC 추출</p>
<p>1. G928L 의 LG u+ 최신펌웨어 AP CP BL과 csc에서 추출한 pit 을 준비</p>
<p>2. 플래싱이 완료되면 ""첫부팅에서 바로"" 순정리커버리로 진입</p>
<p>3. s6 계열은 외장메모리가 없으므로 Apply update from ADB를 선택</p>
<p>4. 추출한 SKT CSC를 ADB side load를 통해 전송</p>
<p>- Note FE꺼를 해도되는지는 모르겠습니다.</p>
<p>- 저는 직접 S6 Edge + SKT / G928S&nbsp; 모델에서 추출한 G928S_sec_csc.zip을 사용했습니다.(파일첨부)</p>
<p>- 32% 에러가 뜹니다. 뜨는데 무시하고 기다리고 부팅되면 적용되어있습니다.</p>
<p>5. 부팅완료</p>
<p>6. 공초 (설정들어가서 공장초기화했었고)</p>
<p>- 이과정에서 CSC적용이 되지 않는경우, 즉 설정에 T로밍이 뜨지 않는경우에 7.재공초를 합니다.</p>
<p>7. 재공초 (저는 리커버리 들어가서 Wipe data/factory reset 을 했습니다.)</p>
<p>한경우 SK CSC가 적용이됩니다.</p>
<p>사실 처음에 CSC 적용했을때</p>
<p>여전히 부트로고가 U+길래 s6 계열은 안되나 보다 생각하고 있었는데</p>
<p>판매하기위해 다시한번 공초했다가 설정-T로밍 보고 성공한 걸 알았습니다.</p>
<p>Galaxy S6 edge + (SM-G928L) LG U+ 모델 누가 최신펌웨어에서 시도 및 성공하고 후기남깁니다.</p>
<p>G928S의 AP를 올리면 부트로고도 바뀔 거 같긴 한데...</p>
<p>녹스깨진다는 말이 있어서 그냥 안올렸습니다.</p>
<p>현재 녹스 안깨지고 G928L + SK CSC 상태입니다.</p>
</p>
