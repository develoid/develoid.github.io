---
layout: post
title: '삼성노트 비밀번호 잃어버렸을때 잠금 해제법(루트전용)'
author: 'yoonun'
categories: Samsung-Custom
tags:
- Samsung
- Device
- Custom
-
---


<script> location.href='https://cafe.naver.com/develoid/827759' ; </script>

<p>안녕하세요! yoonun입니다! 이번에는 삼성노트의 잠금해제법을 들고왔습니다<b><b>먼저 SQLite Editor가 필요합니다 저는 SQLite master를 사용하였습니다<b><b>이 어플은 data에 접근할때 비지박스가 필요한것같아 매지스크 모듈에서 한개 구해왔습니다</p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODEwMTRfNjMg/MDAxNTM5NDU3OTAzMTYz.3eUuQGtS8c4XguYYO_jkafyvEN9NTQp4-sfNU70WydYg.tHorL5Pj5E8mit2hL2mQrwFY4FOsArBrxsshQTM4nKcg.JPEG.ytk102/externalFile.jpg?type=w740"><b><p>그럼 바로 시작하죠!!</p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODEwMTRfOTIg/MDAxNTM5NDU3OTA0MjMy.ftPaQrKAmjiERPV7MqgVjv0HAN2IOZrT6L8qy0lFyHwg.x4dnJ76gf_9-Xq-j_9k50Gxi9zk7tTqg2EiNOfvg6zcg.JPEG.ytk102/externalFile.jpg?type=w740"><b><p>먼저 이렇게 노트가 잠겨져있습니다 저는 이 잠금을 풀건데요 먼저 data/data/com.samsung.android.app.note/databases에 들어가줍니다 </p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODEwMTRfMiAg/MDAxNTM5NDU3OTA1MTc4.U9RfTvm-dGidh-lwp3SFSzKm5HZNN16nb5rx7z1KGaQg.EdHkOTe4uYQwa8Hc9_IsvwiOVC1hc2C7Q_S9beWTYJgg.JPEG.ytk102/externalFile.jpg?type=w740"><b><p>여기에 sdoc.db가 있을텐데요 열어줍니다 그후 sdoc을 열어주세요</p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODEwMTRfNzkg/MDAxNTM5NDU3OTA1OTQ1.O6ERtmo-sCMteZ3th3l4UPBol1UlUc0h9-3ks71HPzwg.QTrN1k9R32MnAbdWkScBck6Fy_YIPlpx29QbyrYxs0gg.JPEG.ytk102/externalFile.jpg?type=w740"><b><p>그러면 이렇게 뜰텐데요 여기서 수정해서</p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODEwMTRfMjE2/MDAxNTM5NDU3OTA2NzM3.slZEcMJEf8m6HkcF70MfZZHuT8KIpPrNKU3V5b4fzH8g.ywIyGbMZA6dPUZ4EH_N8L4UgH0Iz2eH-fKZMpVpJ5RMg.JPEG.ytk102/externalFile.jpg?type=w740"><b><p>islock를 1에서0 으로 바꿔줍니다(잠금=1 잠금×=0)<b>그후 저장을한후 삼성노트를 강종시키고 다시 들어가면</p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODEwMTRfMjkx/MDAxNTM5NDU3OTA3Mzk4.IJwLyxESYU0GJm5cIxUqMrJgLeOCQzxHmvZic6vBTwwg.CFJDj9lD1-9pkOoYxvg94xEPFZEGM5j1DFRanFQfmU8g.JPEG.ytk102/externalFile.jpg?type=w740"><b><p>이렇게 뜨는데요 별 이상없이 비밀번호를 치지않고 들어갈수 있더군요 <b><b>여기까지 삼성노트의 잠금을 해제하는 방법이었습니다!<b><b>(문제시 삭제하겠습니다)</p>
