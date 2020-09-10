---
layout: post
title: '[커뮤니티] 배터리 단위는 mAh가 아니다!'
author: '손익끄'
categories: Etc-Ohter
tags:
- Battery
-
-
-
---


<script> location.href='https://cafe.naver.com/develoid/810683' ; </script>

<p>흔히 스마트폰이건 보조 배터리건 배터리 단위를 mAh로 표기합니다.</p>
<p>잘못된 표기는 아니지만, 실제로 보조배터리로 충전시키면 몇번 충전 못하고 죽어버리는걸 볼 수 있습니다.</p>
<p>왜 이런 문제가 생기는지 처음부터 차근차근 알아봅시다.</p>
<p>이론적인 배경보단 결론이 알고 싶으시면 글 마지막만 보시면 됩니다.</p>
<p><img  ></p>
<p>&lt;갤럭시 S7의 스펙. 배터리 용량이 3000mAh로 표기되어있다. - 출처 나무위키&gt;</p>
<p>간단한 물리부터 시작한다면, 전기는 흔히 말하는 옴의 법칙에 의해 돌아갑니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F4023_000_1%2F20160218143208872_Z4DMTMCK5.jpg%2Fvm_sc3012_04_i01.jpg%3Ftype%3Dw690_fst_visang%26amp%3Bwm%3DY%22&amp;type=cafe_wa740"></p>
<p>&lt;옴의 법칙.&nbsp;이 법칙때문에 수많은 전자전기공학도가 울고 웃는다. - 출처 네이버 지식백과&gt;</p>
<p><strike>그만보고 싶다</strike></p>
<p>이 중에서&nbsp;실제로 우리가 사용할건 전압(V)와 전류(I)입니다.</p>
<p>이 전압과 전류를 곱하면, 소모전력이 나옵니다.</p>
&lt;nobr&gt;<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fssl.pstatic.net%2Fstatic%2Fncc%2Fmath%2FMathJax-2.5-latest%2FMathJax-2.5-latest%2Ffonts%2FHTML-CSS%2FTeX%2Fpng%2FMath%2FItalic%2F100%2F0050.png%3Frev%3D2.5.3%22&amp;type=cafe_wa740"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fssl.pstatic.net%2Fstatic%2Fncc%2Fmath%2FMathJax-2.5-latest%2FMathJax-2.5-latest%2Ffonts%2FHTML-CSS%2FTeX%2Fpng%2FMain%2FRegular%2F100%2F003D.png%3Frev%3D2.5.3%22&amp;type=cafe_wa740"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fssl.pstatic.net%2Fstatic%2Fncc%2Fmath%2FMathJax-2.5-latest%2FMathJax-2.5-latest%2Ffonts%2FHTML-CSS%2FTeX%2Fpng%2FMath%2FItalic%2F100%2F0049.png%3Frev%3D2.5.3%22&amp;type=cafe_wa740"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fssl.pstatic.net%2Fstatic%2Fncc%2Fmath%2FMathJax-2.5-latest%2FMathJax-2.5-latest%2Ffonts%2FHTML-CSS%2FTeX%2Fpng%2FMath%2FItalic%2F100%2F0056.png%3Frev%3D2.5.3%22&amp;type=cafe_wa740"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fssl.pstatic.net%2Fstatic%2Fncc%2Fmath%2FMathJax-2.5-latest%2FMathJax-2.5-latest%2Ffonts%2FHTML-CSS%2FTeX%2Fpng%2FMain%2FRegular%2F100%2F003D.png%3Frev%3D2.5.3%22&amp;type=cafe_wa740"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fssl.pstatic.net%2Fstatic%2Fncc%2Fmath%2FMathJax-2.5-latest%2FMathJax-2.5-latest%2Ffonts%2FHTML-CSS%2FTeX%2Fpng%2FMath%2FItalic%2F100%2F0049.png%3Frev%3D2.5.3%22&amp;type=cafe_wa740">&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fssl.pstatic.net%2Fstatic%2Fncc%2Fmath%2FMathJax-2.5-latest%2FMathJax-2.5-latest%2Ffonts%2FHTML-CSS%2FTeX%2Fpng%2FMain%2FRegular%2F071%2F0032.png%3Frev%3D2.5.3%22&amp;type=cafe_wa740">&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fssl.pstatic.net%2Fstatic%2Fncc%2Fmath%2FMathJax-2.5-latest%2FMathJax-2.5-latest%2Ffonts%2FHTML-CSS%2FTeX%2Fpng%2FMath%2FItalic%2F100%2F0052.png%3Frev%3D2.5.3%22&amp;type=cafe_wa740"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fssl.pstatic.net%2Fstatic%2Fncc%2Fmath%2FMathJax-2.5-latest%2FMathJax-2.5-latest%2Ffonts%2FHTML-CSS%2FTeX%2Fpng%2FMain%2FRegular%2F100%2F003D.png%3Frev%3D2.5.3%22&amp;type=cafe_wa740"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fssl.pstatic.net%2Fstatic%2Fncc%2Fmath%2FMathJax-2.5-latest%2FMathJax-2.5-latest%2Ffonts%2FHTML-CSS%2FTeX%2Fpng%2FMath%2FItalic%2F100%2F0056.png%3Frev%3D2.5.3%22&amp;type=cafe_wa740">&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fssl.pstatic.net%2Fstatic%2Fncc%2Fmath%2FMathJax-2.5-latest%2FMathJax-2.5-latest%2Ffonts%2FHTML-CSS%2FTeX%2Fpng%2FMain%2FRegular%2F071%2F0032.png%3Frev%3D2.5.3%22&amp;type=cafe_wa740">&nbsp;<img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fssl.pstatic.net%2Fstatic%2Fncc%2Fmath%2FMathJax-2.5-latest%2FMathJax-2.5-latest%2Ffonts%2FHTML-CSS%2FTeX%2Fpng%2FMath%2FItalic%2F100%2F0052.png%3Frev%3D2.5.3%22&amp;type=cafe_wa740">&nbsp;&nbsp;</p>
&lt;/nobr&gt;<p> &lt;전력=전압 x 전류&gt;</p>
<p>하지만 이 식에서는 '일정한 시간'에 대한 정보가 없습니다.</p>
<p>이미 전류가 '순간적인 시간'을 말하는 것이기 때문이죠.</p>
<p>그렇기 때문에 이&nbsp;전력값 만으로는, 앞으로 얼마나 사용 가능한지 알 수가 없죠.</p>
<p>그렇기 때문에 '와트시(Wh)'라는 단위가 새로 추가됩니다.</p>
<p>단순합니다. 소모전력에 시간을 곱해주면 됩니다.</p>
<p>그러면&nbsp;전력량을 구하는데 필요한 것은 전압, 전류, 시간으로 정리가 됩니다.</p>
<p>그렇다면, 이것을 우리가 흔히 아는 배터리에 적용해봅시다.</p>
<p>방금 보셨던 갤럭시S7의 배터리 정보는 Li-Ion 3000mAh입니다.</p>
<p>여기서 mA는 전류단위이고, h는 시간을 곱한 것입니다.</p>
<p>그럼 계산에 필요한건 전압만 남았네요.</p>
<p>그럼 배터리의 전압은 어떻게 알 수 있을까요?</p>
<p>배터리는 일반적인 전압원과는 다르게 '공칭 전압'이란 개념을 사용합니다.</p>
<p><a href="https://electronics.stackexchange.com/questions/75151/does-a-capacitor-store-charge"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fapwiki.wikidot.com%2Flocal--files%2Fap-physics-b%253Aformula-sheet%2Fcapacitor-charge-curve.png%22&amp;type=cafe_wa740"></a></p>
<p>&lt;축전기(=배터리)의 충전 곡선. 시간에 따라 전압이 일정하지 않다.&gt;</p>
<p>배터리는 그림에서 보시다시피, 일정한 전압을 제공해주지 않습니다.</p>
<p>그렇기 때문에 계산에선&nbsp;평균적인 값을 이용하게 되는데, 이 값을 공칭 전압이라고 하죠.</p>
<p>정확히는 평균은 아니지만, 일단 그렇게 받아들입시다.</p>
<p>갤럭시S7의 공칭 전압은 3.85V입니다.</p>
<p>그러면 모든 정보가 나왔으니, 전력량을 계산해봅시다.</p>
<p>전력량 = 공칭 전압 * 전류량 = 3.85V * 3000mAh = 11.55VAh = 11.55Wh</p>
<p>총 11.55Wh의 전력을 낼 수 있는 배터리군요.</p>
<p>만약 이 배터리가 1V로 출력을 유지한다면, mAh값은 11550mAh라고 표기할 수 있겠죠.</p>
<p>이렇듯, mAh란 값은 전압에 영향이 크기 때문에 같은 제품군의 기기끼리 비교가 아니라면 의미가 없습니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fdown.playwares.com%2Fxe%2Ffiles%2Fattach%2Fimages%2F105%2F684%2F027%2F8794ae049b91d0ed4cd146fb262da8f7.jpg%22&amp;type=cafe_wa740"></p>
<p>&lt;대표적인 대용량 배터리 노트북인 올데이 그램의 스펙. 60Wh, 7800mAh 배터리이다. - 출처 플레이웨어즈&gt;</p>
<p>올데이그램은 7800mAh로도 x86 프로세서를 오랫동안 유지할 수 있습니다.</p>
<p>왜냐하면 공칭 전압이 약 7.7V로 2배 이상 높기 때문이죠.</p>
<p>그럼 간단한 예제로 보조배터리로 노트북과 스마트폰을 충전하는 계산을 해봅시다.</p>
<p>샤오미 10000mAh를 예로 들어보겠습니다.</p>
<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcdn.namuwikiusercontent.com%2Fs%2F8ee522ff970d543f313ae715aaabcb72e49df6617cebc3eb514d1e191b2e2ff88b9237f8fe51ff08a0bd822d5a26c081e05adb7d93084d8fc9437f8c001479002f654bcbb239a04c6a7035ddd4dfccb8%3Fe%3D1535199103%26amp%3Bk%3DvCpZ8wHyXJCEvZ2eOuAH8Q%22&amp;type=cafe_wa740"></p>
<p>&lt;미 파워 뱅크 10000mAh. 공칭전압 3.7V, 10000mAh의 스펙&gt;</p>
<p>단순 mAh 계산이라면, 보조배터리 용량 / S7 용량 = 10000 / 3000 = 3.33회 충전이 가능해야합니다.</p>
<p>하지만 Wh로 계산을 해봅시다.</p>
<p>보조배터리의 전력량 = 3.7 x 10000 = 37000mWh = 37Wh</p>
<p>갤럭시 S7 배터리의 전력량은 11.55Wh였죠.</p>
<p>그럼 이 두개로 계산해보면</p>
<p>37 / 11.55 = 3.20</p>
<p>3.2회를 충전할 수 있다고 나옵니다.</p>
<p>그러면 올데이 그램을 충전하면?</p>
<p>mAh 계산으로는 1회 이상 충전이 가능하지만</p>
<p>Wh 계산으로는 37 / 60 = 0.62로, 단 1회도 충전할 수 없습니다.</p>
<p>물론 실제론 보조배터리 자체 손실때문에 90%정도로 계산해줘야 잘 맞습니다.</p>
<p>긴 글을 읽기 귀찮으실 분들을 위해 요약을 한다면</p>
<p></p>
<p>1. 배터리는 mAh가 아닌 Wh로 용량을 확인해야한다.</p>
<p>2. Wh는 배터리의 공칭 전압과 mAh값을 곱해주면 알 수 있다.</p>
<p>입니다.</p>
<p>긴 글 봐주셔서 감사합니다.</p>
