---
layout: post
title: 'Cocos2d studio에 쓰였던 CSB파일을 읽어보자.'
author: '글작성자'
categories: Etc-Ohter
tags:
- Cocos2d
- CSB
-
-
---


<script> location.href='https://cafe.naver.com/develoid/845056' ; </script>


















						<p><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fcafethumb.pstatic.net%2FMjAxOTAxMTlfMTIz%2FMDAxNTQ3ODIzODc5MDQ4.BwAuFZbhE55QzzdpLs_OrR7Iva-DU_KqYJq-_7FtzuEg.y-TDtE94hEi-dwe5YRM1uZZZlJyrkHJm9geSP4bk7QUg.PNG.hsm8hsm8%2FHelloWorld.png%3Ftype%3Df1%22&amp;type=cafe_wa740"></p><p><span><b></span></p><p><span>나도 이 포맷을 솔직히 말하자면 잘 모른다.</span></p><div><b></div><div>아는 것 정도라면 코스코스 스튜디오에서는 열리고, 코스코스 크레이터에서는 못 연다는 것이다.</div><div><b></div><div>아마 에셋을 지정, 위치나 이펙트를 저장하는 파일인 듯 하다.</div><div><b></div><div><b></div><div>아시다시피, 코스코스 스튜디오는 더 이상 업데이트를 하지 않는다.</div><div><b></div><div>또한 CSB 파일은 메모장이나 Notepad++따위로도 안 열린다.</div><div><b></div><div><b></div><div>그래서 혹시 CSB를 CSD파일로 바꾸거나, 열고 싶은 사람을 위해서 이 문서를 쓴다.</div><div><b></div><div>---</div><div><b></div><div><div>
        <div>
                          <div>
                        <img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F5645137%3Fs%3D400%26v%3D4%22&amp;type=f220">
                        <span></span>
                </div>
                <div>
                        <div>lyzz0612/csb2csd</div>
                        <div>cocostudio csb反编成csd. Contribute to lyzz0612/csb2csd development by creating an account on GitHub.</div>
                        <div>github.com</div>
                </div>
                <a href="https://github.com/lyzz0612/csb2csd"></a>
        </div>
</div><b><b></div><div>일단 이 파일을 다운로드 받는다;</div><div><b></div><div><b></div><div>그리고 파이썬을 내려받아야 한다. 물론 이미 설치했으리라 믿는다.</div><div><b></div><div>이제 모두 준비가 되었다. 시작해 보자.</div><div><b></div><div>일단 내려받은 zip파일의 압축을 풀고, 그 폴더에서 CMD를 연다. CD명령을 사용해도 무방하다.</div><div><b></div><div>여기서 이렇게 명령어를 친다.</div><div><b></div><div><b><table cellspacing="0" cellpadding="0" width="100%"><tbody><tr><td style="background:url('https://cafe.pstatic.net/editor/bg_quote03.png') transparent;_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='https://cafe.pstatic.net/editor/bg_quote03.png',sizingMethod='scale');_background:none" width="1" height="1"></td><td style="background:url('https://cafe.pstatic.net/editor/bg_quote03.png') transparent;_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='https://cafe.pstatic.net/editor/bg_quote03.png',sizingMethod='scale');_background:none" height="1"></td><td style="background:url('https://cafe.pstatic.net/editor/bg_quote03.png') transparent;_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='https://cafe.pstatic.net/editor/bg_quote03.png',sizingMethod='scale');_background:none" width="1" height="1"></td></tr><tr><td style="background:url('https://cafe.pstatic.net/editor/bg_quote03.png') transparent;_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='https://cafe.pstatic.net/editor/bg_quote03.png',sizingMethod='scale');_background:none" width="1"></td><td style="padding:11px 10px 10px 9px;color:#444444; line-height:1.4;"><!--quote_txt-->python convert.py csb파일.csb<!--/quote_txt--></td><td style="background:url('https://cafe.pstatic.net/editor/bg_quote03.png') transparent;_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='https://cafe.pstatic.net/editor/bg_quote03.png',sizingMethod='scale');_background:none" width="1"></td></tr><tr><td style="background:url('https://cafe.pstatic.net/editor/bg_quote03.png') transparent;_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='https://cafe.pstatic.net/editor/bg_quote03.png',sizingMethod='scale');_background:none" width="1" height="1"></td><td style="background:url('https://cafe.pstatic.net/editor/bg_quote03.png') transparent;_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='https://cafe.pstatic.net/editor/bg_quote03.png',sizingMethod='scale');_background:none" height="1"></td><td style="background:url('https://cafe.pstatic.net/editor/bg_quote03.png') transparent;_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='https://cafe.pstatic.net/editor/bg_quote03.png',sizingMethod='scale');_background:none" width="1" height="1"></td></tr></tbody></table></blockquote>혹자의 경우 CSB파일이 다른 폴더에 있으므로 그냥 끌어왔다.</div><div><b></div><div><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMTlfMTk4/MDAxNTQ3ODI1NTU0OTE2.79aFKID0KjUfZZrnl2bxC6rZKhtj5Ml4Ow4030TfIdYg.3SsCmVrbCesr5jxie4Nd4hD88sa84pxaAIKWR3qyNswg.PNG.hsm8hsm8/1.PNG?type=w740"><b></div><div><b></div><div>이렇게 치고 Enter을 누르고, 글자들이 다 내려가면 변환이 끝난 것이다.</div><div><b></div><div>이렇게 저장된 파일들은 csb2csd 폴더의 csd 폴더에 있다.</div><div><b></div><div><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMTlfMTk2/MDAxNTQ3ODI1Njc3NTAy.67qg2JLjQY1tJCn7lo1M1GL6wtIl-GF3ZRIIpzF-amcg.6-4I9w5bbpil0n4WMeecRJo6FobaYEacPNXhSJ1B3ekg.PNG.hsm8hsm8/7%EC%9D%BC%EC%B0%A8.PNG?type=w740"><b></div><div><b></div><div>이제 이런 식으로 읽거나 수정따위를 할 수 있다.</div><div><b></div><div>+ 에러</div><div><b></div><div><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMTlfNyAg/MDAxNTQ3ODI1ODE3NDM2.ZDnFdu6kvOOqTT3B2YAFtyWnlEWJH4dDJulBQxjY6hAg.7ixF6Lk881YGPD_sfwH8p9-5IVjq58oW2qO1RLmCqbAg.PNG.hsm8hsm8/2.PNG?type=w740"><b></div><div><b></div><div>종종 파일 크기가 작은 파일 중에 저렇게 에러가 뜨는 것을 볼 수 있을 텐데, 그리 심각한 에러는 아니다.</div><div><b></div><div><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMTlfMjM5/MDAxNTQ3ODI1OTEzMzkz.QH_l7GmgazMNqrQccGAneyxRngUDc9hLz5WSxNQs8icg.eck7aXCXFloLTTHbR2bHaYVgAgCtb2e1RqnAXz61rB0g.PNG.hsm8hsm8/3.PNG?type=w740"><b></div><div><b></div><div>그냥 저렇게 명령어?따위는 모두 건재하고 그것들은 닫는 것이 저장되지 않은 것이니, 그냥 저기서 수작업으로 처리하면 되겠다.</div><div><b></div><div><b></div><div>혹시 CSB파일의 정확한 용도를 알면 댓글에 달아주길 바란다.</div>
