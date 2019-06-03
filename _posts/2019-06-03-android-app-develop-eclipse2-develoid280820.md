---
layout: post
title: '"아마도 쉬운 안드로이드 어플만들기" 4-2 소리'
author: 'Snails'
categories: Android-App-Develop(Eclipse2)
tags:
- Android
- App
- Develop
- Eclipse
---


<script> location.href='https://cafe.naver.com/develoid/280820' ; </script>

<p><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles3.naver.net%2F20130523_178%2Ftjdtnsu_1369283538974akCh1_JPEG%2Fand.jpg%3Ftype%3Dw2%22&amp;type=cafe_wa740"></p><p><i>퍼갈 때에는 반드시 저작자의 허락과 저작자의 이름(아이디)를 기록하어야 합니다.</i></p><p><i>저작자는 Snails(tjdtnsu)입니다.</i></p><p><span><strong><span>제발 덧글 좀 적어주세요. 강의 적는 시간은 1시간이지만 덧글은 1분도 걸리지 않습니다.</span></strong></span></p><p><u>참고 : 이 강좌는 초보자를 위한 Eclipse를 사용하였습니다.</u></p><p><u>올리는 곳 : 제 네이버 블로그, 디벨로이드 카페, App Development 카페, 프그머 카페</u></p><p>&nbsp;</p><p><u>﻿</u></p><p><b><span>학습목표 :&nbsp;소리 삽입의 종류와 삽입법을 알 수 있다.</span></b></p><p><span><span><strong>난이도 : ★★</strong><strong>★</strong><strong>★★</strong>&nbsp;</span></span> </p><div>&nbsp;</div><div>&nbsp;</div><div>네 오늘은 소리입니다.</div><div>이것도 간단합니다.</div><div>&nbsp;</div><div>역시 이것도 외우는 편이 좋습니다.</div><div>일단 사운드를 출력하는 방법에는 두가지가 있습니다.</div><div>&nbsp;</div><div>&nbsp;</div><div>SoundPool : 효과음, 짧은 음악에 유용</div><div>AudioManager : 배경음악, 긴 음악에 유용</div><div>&nbsp;</div><div>&nbsp;</div><div>일단 res-raw 폴더에 wav,mp3,ogg 파일을 넣습니다(폴더는 생성하세요)</div><div>&nbsp;참고로 ogg 파일을 넣으세요. wav는 용량이 아주 높고, mp3는 가끔씩 끊어집니다.</div><div>&nbsp;</div><div>&nbsp;</div><div>그리고 코드를 적습니다.</div><div>&nbsp;</div><div>&nbsp;</div><div><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fpostfiles6.naver.net%2F20130906_85%2Ftjdtnsu_13784759326851N61T_PNG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD.png%3Ftype%3Dw2%22&amp;type=cafe_wa740">둘을 섞었습니다.</div><div>한줄씩 대충 어떤 역할을 하는지 짚어보겠습니다.</div><div>&nbsp;</div><div>1. <strong>soundpool</strong></div><div>&nbsp;&nbsp;&nbsp; SoundPool beep; : 비프 사운드풀 생성<b>&nbsp;&nbsp;&nbsp; int bee; : 재생 변수 생성</div><div>&nbsp;&nbsp;&nbsp; beep=new SoundPool(1,AudioManager.STREAM_MUSIC,0);&nbsp;: 비프 설정<b>&nbsp;&nbsp;&nbsp;&nbsp;bee=beep.load(this,R.raw.dingdong,1); : 비프 설정에 따라 로딩</div><div>&nbsp;&nbsp;&nbsp; beep.play(bee,1,1,0,1,1); : 재생</div><div><b>&nbsp;</div><div>&nbsp;</div><div>2. <strong>audiomanager</strong></div><div>&nbsp;&nbsp;&nbsp; private static MediaPlayer back; : 미디어플레이어 백 생성</div><div>&nbsp;&nbsp;&nbsp;&nbsp;back=MediaPlayer.create(this, R.raw.arirang); : 재생 파일&nbsp;지정<b>&nbsp;&nbsp;&nbsp;&nbsp;back.setLooping(true); : 반복 유무<b>&nbsp;&nbsp;&nbsp;&nbsp;back.start(); : 재생</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>완성작품입니다.</div><div>(참고 : 어쩌다 보면 soundpool이 2번 재생되는 버그가 있습니다.)</div><div><iframe frameborder="0" scrolling="no" name="mplayer" title="플레이어" width="720" height="405" src="https://serviceapi.nmv.naver.com/view/ugcPlayer.nhn?vid=E4037E00D0E867DC133ED3F788DA6F990C57&amp;inKey=V1288c583fa80c40fc272dec80e98f3b48a9d3525a815d32930bda26cb9bfa96376c8dec80e98f3b48a9d&amp;wmode=opaque&amp;hasLink=0&amp;autoPlay=false&amp;beginTime=0" allowfullscreen="allowfullscreen"></iframe></div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>다음은 진동입니다.</div><div>&nbsp;</div><p></p><p></p>
