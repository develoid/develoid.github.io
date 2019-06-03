---
layout: post
title: '루팅 초보자를 위한 루트익스플로러 권한 부여 팁'
author: 'Hellmobile'
categories: Android-Custom
tags:
- Android
- Custom
-
-
---


<script> location.href='https://cafe.naver.com/develoid/765086' ; </script>


















						<p>루트익스플로러로 시스템폴더에다가 파일을 넣으면 반드시 해야하는게 권한부여입니다.<b>(안하면 안됨! 특히 중요한 시스템 파일은 더더욱!)<b><b>대부분의 시스템 파일/폴더에 권한부여할때<b>폴더는 755<b>●●●<b>●○●<b>●○●<b>파일(APK, TXT 등...)은 644<b>●●○<b>●○○<b>●○○<b>입니다만....<b>넣는 파일이 많을수록(특히 제 게시글중 인피니티 노트8 CSC픽스자료)권한 부여도 노가다급으로 올라가는데...루익에 권한노가다방지 기능이 있습니다.<b><b>※저는 설명을 하기위해 테스트파일을 만들었습니다.<b><b>1. 우선 붙여넣어야할 폴더/파일을 폴더위치에 맞게 붙여넣어주세요.</p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzEyMTFfMTUw/MDAxNTEyOTE5NjgxMzAz.tg2fj47gCVUx2Kr-bwFBswu1ix8pqoVBtIMssR-WGy0g.b3XQCg064kiwOFHQcE1usSQV1YicfHAeM0SGKbfbsU8g.JPEG.yssj22/externalFile.jpg?type=w740"><b><p><b>2. 붙여넣은 폴더/파일를 선택하시고나서 상단의 점 세개를 누르시고나서 권한을 눌러주세요.</p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzEyMTFfMTA0/MDAxNTEyOTE5NjgxNjM4.PSdVDal1ctywoO3msG9liwyIxvlIy8KrCyCuyvWvjJwg.5IrlOlcQiDTopDXYE2aLhrOSYpEGDFEOBXsX22u9sIUg.JPEG.yssj22/externalFile.jpg?type=w740"><b><p><b>3. 그다음 권한을 755로 선택하세요.</p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzEyMTFfMTMx/MDAxNTEyOTE5NjgyMTM3.c2r0outRn4780PdI7uMWDU7hzdzT0JETQotSx_cvYpog.lMZJt_SQTIsl1RfWT4wVUZggVXqJsSOltVpsxWCNOEUg.JPEG.yssj22/externalFile.jpg?type=w740"><b><p><b>4. 권한 밑에있는 모든 하위폴더와 파일들에 대해서도 설정을 설정하세요.</p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzEyMTFfMTM3/MDAxNTEyOTE5NjgyNjMx.wksQWK8BpXEuzmU5CatXg9EhgDj6bZ_Oyc_Clf7dXU4g.2Knb4fBNIiq50B06_eJLNky7Mc0Bs1Dcg1x5-TjyLe8g.JPEG.yssj22/externalFile.jpg?type=w740"><b><p>5. 그다음 확인을 누르시면 권한부여가 됩니다.</p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzEyMTFfMTk1/MDAxNTEyOTE5NjgzMDcx.nGKLCj3bxD4r9rOIC6tGEy6SJ6vhabb0WiYkJ0-095Ag.9P3g5E3vNPuXigS3AohuERZRR6GUjqBU4Ro6xqDFZEgg.JPEG.yssj22/externalFile.jpg?type=w740"><b><p><b>이렇게 하시면...</p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzEyMTFfMjA0/MDAxNTEyOTE5NjgzNDA1.jh2trnihHo6DbcCehkhSYcvYnw4H2KKqwjf16wIYM_8g.ZYKOl106EWZHt_sNmcBngNrKmSGzMfAVe1FNEbsvOe4g.JPEG.yssj22/externalFile.jpg?type=w740"><b><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzEyMTFfMjc5/MDAxNTEyOTE5NjgzNjgx.8Xapyv5fITP7XmC7WXEjJ9oUYfq5F6cqhiILRwZu-24g.Wq97-frSgUUxdV9bbj4YUNraLWpzDiPFvHp-YG7bZT0g.JPEG.yssj22/externalFile.jpg?type=w740"><b><p>선택한 폴더/파일 뿐만아니라 선택한 폴더내 파일/폴더도 알맞은 권한(755/644)이 부여되어 있습니다.<b><b><b>참고용 동영상</p><iframe frameborder="0" scrolling="no" name="mplayer" title="플레이어" width="720" height="405" src="https://serviceapi.nmv.naver.com/view/ugcPlayer.nhn?vid=64583256949532188A9AE24B87A056DBF8E4&amp;inKey=V12810b34ae00f30c13ebc10964006b52b35c898a0f8bfa08100c43525dee38df74c7c10964006b52b35c&amp;wmode=opaque&amp;hasLink=0&amp;autoPlay=false&amp;beginTime=0" allowfullscreen="allowfullscreen"></iframe><b><p><b><b>이렇게 하시면 권한노가다를 할 필요가 없습니다.<b><b><b><b>여담(?)<b>사실 이 글 제 CSC픽스 설치하시는 초보자분들이 진짜 권한노가다할까봐 쓴글입니다.(음...있을것 같아서...)</p><img src="https://storep-phinf.pstatic.net/linebiz21_01/original_24.png?type=p100_100"><b><p><b>여담2(?)<b>전 권한노가다를 한적이 있습니다...<b>(인피니티 노트8 CSC픽스 파일 연구할때...저 방법도 연구하다가 알아냈죠...)</p><img src="https://storep-phinf.pstatic.net/moon_and_james/original_32.png?type=p100_100"><b>
