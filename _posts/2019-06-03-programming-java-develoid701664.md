---
layout: post
title: '[커뮤니티] #4.[1-6.JAVA_기초사항]JAVA JDK 8설치'
author: 'ㅎ엘로이ㅎ'
categories: Programming-Java
tags:
- Programming
- Language
- Java
-
---


<script> location.href='https://cafe.naver.com/develoid/701664' ; </script>

<p>안녕하세요 엘로이입니다 4강입니다!</p>
</blockquote><p>&nbsp;</p>
<p>[1-6 JDK의 설치]</p>
</blockquote><p>&nbsp;</p>
<p>가장 중요한 파트네요 드디어 이론 다 집어치우고 보실라면 4강부터 보신걸 축하드립니다 ㅎㅎ&nbsp;우리가 자바 프로그램을 개발하기 위해서는 자바 컴파일러가 있어야 합니다.&nbsp;</p>
</blockquote></blockquote><p>일반적으로 자바 컴파일러와 디버깅 도구, 각종 유틸리티 등의 프로그램 개발 도구들을  JDK( Java Development Kit )라고 부릅니다 JDK는 java.sun.com에서 무료로 다운로드 하실수 있습니다.</p>
</blockquote><p>&nbsp;</p>
<p>&lt;JDK와 JRE?&gt;</p>
</blockquote><p>자바를 다운로드 받는 홈페이지를 가보면 JDK와 JRE라는 용어가 자주 등장합니다 둘의 차이점을 간략히 보고 가겠습니다.</p>
</blockquote><p>&nbsp;</p>
<p>*JRE( Java Runtime Environment )</p>
</blockquote><p>JRE는 자바 프로그램을 실행하기 위한 라이브러리, 자바 가상기계, 기타 컴포넌트 들을 제공합니다. 자바프로그램을 실행만 하고 개발은 하지 ㅇ낳는 일반인들을 위한 환경입니다.</p>
</blockquote><p>&nbsp;</p>
<p>*JDK( Java Development Kit )</p>
</blockquote><p>JDK는 JRE에 자바 프로그램을 개발하는데 필요한 컴파일러, 디버거와 같은 도구들을 추가한 것입니다. JDK 안에 JRE가 포함되어 있음을 유의 하셔야겠습니당. 우리는 개발자이므로 JDK를 다운로드 받아야 하게습니다</p>
</blockquote><p>&nbsp;</p>
<p>&lt;JDK설치&gt;</p>
</blockquote><p>오라클이 자바를 인수하면서 사이트 주소가 복잡해졌지만 가장 간단한 방법은</p>
</blockquote><p>&nbsp;</p>
<p>java.sun.com</p>
</blockquote><p>&nbsp;</p>
<p>에 가서 JAVA SE다운로드 버튼을 클릭하는겁니다.</p>
</blockquote><p></p>
<p></p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzAzMzBfMTQg/MDAxNDkwODUzMzg3NDk0.qWoDxW-lvk2yyXU1Y3iEgdWr5DMJjLjq-Afkd1She-4g.vfqJvj_erKJQDDfkokyJcIwck-lcXg2iIHaXcM4w3lYg.PNG.cksdid0404/1.png?type=w740"></p>
</blockquote><p>다음 화면에서 JDK download 버튼을 클릭합니다</p>
</blockquote><p>&nbsp;</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzAzMzBfMjk2/MDAxNDkwODUzNDA4NDQ1.B2--jvY6MbYfxNEIHOQWPNXL1RuIrNtUuNhJ6KBoHB4g.5jqn46cjuy4i6lQtHvi647Py9GBEnCcD6iL6_c9pPV8g.PNG.cksdid0404/2.png?type=w740"></p>
</blockquote>&nbsp;<p></p>
<p>다음 화면에서 라이선스에 동의한 후에,자신이 사용하는 컴퓨터의 플랫폼에 맞추어 다운로드 받을 실행 파일을 선택 합니다.</p>
</blockquote><p>&nbsp;</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzAzMzBfNTgg/MDAxNDkwODUzNDE5NDY3.XK6UAofU0zDhnDj_Hc-QaK9g3AKKS5WWdZ5qavKot24g.Oynz8oleTYSR4sqEZlSJmDty2y3aiQYjNz3QZ92nPmAg.PNG.cksdid0404/3.png?type=w740"></p>
</blockquote>&nbsp;<p></p>
<p>실행 파일을 다운로드 받아서 실행합니다 윈도우 32비트는 x86, 64비트는 x64버전을 다운 받으시면 되겠습니다.</p>
</blockquote><p>&nbsp;</p>
<p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxNzAzMzBfMjEx/MDAxNDkwODUzNDMwMDk2.-iHEsJxELGVELNHKvl_oJdHzNQ-fLcJY_XYz0NG2qAog.XJQqbXiVo9ENCKi38eHRGiKBDAa0FzHK0EhsWuq5kzYg.PNG.cksdid0404/4.png?type=w740"></p>
</blockquote>&nbsp;<p></p>
<p>다음 화면에서 [Next]를 클릭하여서 실행을 시작합니다. 다음 화면에서도 기본 설정을 변경할 필요가 없으면 [Next]를 클릭합니다. 그냥 다음 다음 누르시면 됩니다.</p>
</blockquote><p>&nbsp;</p>
<p>혹시 설치 과정에서 선택해야할 사항이 나오면 주어진 값으로 선택하고 설치를 진행 하시면 됩니다. 설치가 완료되었다는 대화 상자가 나오면 [Close]버튼을 누르시면 됩니다.</p>
<p>1-6 JDK설치를 여기까지 하고 마치겠습니다 다음은&nbsp;</p>
<p>5강</p>
<p>1-7 자바 프로그램 개발 단계와</p>
<p>1-8 JDK사용하여서 작성 후 컴파일 강좌</p>
<p>하도록 하겠습니다!! 여기까지 엘로이였습니다.</p>
<p>댓글, 피드백, 좋아요는 센수!!!! 감사합니다~~&nbsp;</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
