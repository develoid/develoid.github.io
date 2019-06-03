---
layout: post
title: 'Raspberry Pi 에 OS 설치하기'
author: '시류아'
categories: Raspberry-Pi
tags:
- IoT-Board
- Raspberry-Pi
- OS
-
---


<script> location.href='https://cafe.naver.com/develoid/784288' ; </script>


















						<div>
 <div>
  <div>
   Raspberry Pi 에 OS 설치하기
  </div>
 </div>
</div>
<div>
 <p>IoT 등 여러가지 목적으로 많이 활용되고 있는 Raspberry Pi 를 사용하기 위해서 가장 기본적으로 진행해야되는 OS 설치하기에 대해서 간단하게 알아보도록 하겠습니다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   준비물
  </div>
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAyMjhfMjQ5%2FMDAxNTE5Nzc5OTUwNDIy.xD-f_bTZ1i05DguFxsySni4tkqOlqx4LAwHt1IvgexIg.gxPXf3e3BHrwSm3G5ullM6hiNJACDl13_pUDiZ9iHBcg.JPEG.searphiel9%2Frasp1.jpg%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAyMjhfMTU4%2FMDAxNTE5Nzc5OTUwNDEy.i_qLkTYAbGqOc8D44HU191Vl8p1FdtYeEUUBPjxRJ3Yg.2Uzmb3S4pEEg1bM9kVBVjfgJPhTYWp0MrvpaAIJ-Ppgg.JPEG.searphiel9%2Fmicrosd.jpg%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p><span>1. Raspberry Pi<b></span><span>2. Micro SD(16GB 이상 추천)</span></p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   OS 다운로드
  </div>
 </div>
</div>
<div>
 <a href="https://www.raspberrypi.org/downloads/"> <span> <span> <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fdthumb.phinf.naver.net%2F%3Fsrc%3D%2522https%253A%252F%252Fwww.raspberrypi.org%252Fapp%252Fuploads%252F2013%252F12%252Fnoobs-500x281.png%2522%26amp%3Btype%3Dff500_300%22&amp;type=cafe_wa740"> </span> <span> <span>Raspberry Pi Downloads - Software for the Raspberry Pi</span> <span>Download free software for the Raspberry Pi, including NOOBS, Raspbian, and third party operating system images. Beginners should start with NOOBS.</span> <span>www.raspberrypi.org</span> </span> <span></span> </span> <span>자세히보기</span> </a>
</div>
<div>
 <p><span>위의 링크를 클릭, 원하는 라즈베리파이의 OS 이미지를 다운로드 받습니다.<b></span></p>
</div>
<div>
 <p><span>라즈베리파이를 처음 사용하는 유저 같은 경우 NOOBS 나 RASPBIAN 을 추천드리며, 어느정도 리눅스 계열 사용에 익숙하신 분들이라면 UBUNTU MATE를 추천드립니다.<b></span><span><b></span><span>* 참고<b></span><span>1. RASPBIAN 같은 경우 DESKTOP 과 LITE 로 나뉘는데, GUI 및 기본 내장 파일 설치로 나뉘게 됩니다. 터미널 실행만 있으면 된다면 LITE를, 전체가 필요하거나 초심자라면 DESKTOP을 다운로드하는 것을 추천드립니다.<b></span><span><b></span><span>2. UBUNTU MATE 와 SNAPPY UBUNTU CORE 차이는 많이 있지만, 가장 큰 차이는 GUI 유무입니다. GUI 가 필요하신 경우라면 UBUNTU MATE 설치를 하시길 바랍니다.</span></p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   SD Card Fomatter 를 이용 SD카드 포맷
  </div>
 </div>
</div>
<div>
 <a href="https://www.sdcard.org/downloads/formatter_4/"> <span> <span> <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fdthumb.phinf.naver.net%2F%3Fsrc%3D%2522https%253A%252F%252Fwww.sdcard.org%252Fcmn%252Fimg%252Fogp.png%2522%26amp%3Btype%3Dff500_300%22&amp;type=cafe_wa740"> </span> <span> <span>SD Memory Card Formatter 5.0 for SD/SDHC/SDXC</span> <span>The SD Memory Card Formatter formats SD Memory Card, SDHC Memory Card and SDXC Memory Card (respectively SD/SDHC/SDXC Cards) complying with the SD File System Specification created by the SD Association (SDA).</span> <span>www.sdcard.org</span> </span> <span></span> </span> <span>자세히보기</span> </a>
</div>
<div>
 <p>위의 링크를 클릭, SD Card Formatter 를 다운로드 받고 설치를 진행합니다.</p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAyMjhfMjk2%2FMDAxNTE5NzgwNzI4OTE0.3pQE0914PzVaiS2FgGYYnIqCIOEGcRXaY-5YRyKRq8Ug.UenH03-PNZJvYHfZy0xy_cqQZdc58vfAyisyhPRSX54g.PNG.searphiel9%2F0003.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p><span>1. 라즈베리파이에 사용할 Micro SD카드를 PC에 연결합니다.<b></span><span>2. Select Card 의 타겟을 Micro SD카드로 설정합니다. 만약 올라오지 않는다면 Refresh 를 눌러서 갱신해주세요.<b></span><span>3. Quick Format 을 선택 한 후 Format 을 클릭합니다.<b></span><span>4. 완료 문구가 나오면, SD Card Formatter 를 종료하셔도 됩니다.</span></p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   OS 이미지를 SD카드에 쓰기 - Etcher 이용
  </div>
 </div>
</div>
<div>
 <a href="https://etcher.io/"> <span> <span> <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fdthumb.phinf.naver.net%2F%3Fsrc%3D%2522https%253A%252F%252Fetcher.io%252Fstatic%252Fscreenshot.gif%2522%26amp%3Btype%3Dff500_300%22&amp;type=cafe_wa740"> </span> <span> <span>Etcher by resin.io</span> <span>Burn images to SD cards &amp; USB drives, safely and easily.</span> <span>etcher.io</span> </span> <span></span> </span> <span>자세히보기</span> </a>
</div>
<div>
 <p><span>위의 링크를 클릭, Etcher 를 다운로드 받습니다.</span></p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAyMjhfMTAy%2FMDAxNTE5NzgwMTYxODE4.0LhaEDmXKMvrgnF8Z93XrY_CxfMyxHk7kOvlkX5yHDgg.aJBgniU6y6dUpCDNvLObFRpna3PhcJOA3r0il65ypsEg.PNG.searphiel9%2F0008.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p><span>1. Etcher 실행파일을 클릭 실행시킵니다.</span><b>2. Select image 를 선택, 다운로드 받은 OS 이미지를 지정합니다.<b>3.<span>&nbsp;</span>Connect a drive 를 클릭, <span><span>&nbsp;</span></span><span>라즈베리파이에 이용할 Micro SD카드를</span><span> 지정합니다.<b></span><span><span>4. 플래시를 클릭, OS 이미지를 Micro SD카드에 씁니다.</span></span><b>5. <span>완료 문구를 확인하고, X 를 눌러서 종료,&nbsp;</span><span>PC 에서 Micro SD 를 제거합니다.</span><b></p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   OS 이미지를 SD카드에 쓰기 - Win32 Disk Imager 이용
  </div>
 </div>
</div>
<div>
 <a href="https://sourceforge.net/projects/win32diskimager/"> <span> <span> <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fdthumb.phinf.naver.net%2F%3Fsrc%3D%2522https%253A%252F%252Fa.fsdn.com%252Fallura%252Fp%252Fwin32diskimager%252Ficon%253F1495137073%2522%26amp%3Btype%3Dff120%22&amp;type=cafe_wa740"> </span> <span> <span>Win32 Disk Imager</span> <span>Download Win32 Disk Imager for free. A Windows tool for writing images to USB sticks or SD/CF cards . This program is designed to write a raw disk image to a removable device or backup a removable device to a raw image file. It is very useful for embedded development, namely Arm development projects</span> <span>sourceforge.net</span> </span> <span></span> </span> <span>자세히보기</span> </a>
</div>
<div>
 <p>위의 링크를 클릭, Win32 Disk Imager<span><span>&nbsp;</span>를 다운로드 받고 설치를 진행합니다.</span></p>
</div>
<div>
 <div>
  <img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAyMjhfMTIg%2FMDAxNTE5NzgwOTIzMTk0.Nu6NGbWnz6c9InFCBrnEuam_Q7LkdRWHcb9PANUR7i8g.deML5UJ_dqAF3KkWnEN0sjoi6K7-7RP6MTW-7yX899Eg.PNG.searphiel9%2F0004.PNG%22&amp;type=cafe_wa740">
 </div>
</div>
<div>
 <p>1. <span><span>&nbsp;Image File 의 폴더 모양 아이콘을</span>&nbsp;선택, 다운로드 받은 OS 이미지를 지정합니다.<b></span><span>2. Device 를&nbsp;<span>라즈베리파이에 이용할 Micro SD카드를</span><span><span>&nbsp;</span>지정합니다.<b></span><span>3. Write 를 클릭,<span><span>&nbsp;</span>OS 이미지를 Micro SD카드에 씁니다.<b></span><span>4. 완료 문구를 확인하고, Exit 를 눌러서 종료,&nbsp;<span>PC 에서 Micro SD 를 제거합니다.</span></span></span></span></p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   설치 마무리
  </div>
 </div>
</div>
<div>
 <p>OS 이미지 쓰기가 완료된 Micro SD카드를 라즈베리파이에 넣고, 전원 및 디스플레이 등을 연결하여 라즈베리파이를 킵니다. NOOBS 또는 라즈비안 같은 경우 기본적으로 설정 없이 바로 부팅되며, 기타 나머지 이미지들에 대해서는 설정과정이 진행 될 수 있습니다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   마무리
  </div>
 </div>
</div>
<div>
 <p>라즈베리파이 위에 OS를 설치하는 방법에 대해서 알아보았습니다. 라즈베리파이에서 돌아갈 수 있는 OS는 여러가지가 있기 때문에, 정말 본인이 어떠한 것을 사용하려고 하는지에 따라서 맞추어서 올리길 바랍니다.</p>
</div>
<div>
 <div>
  <div></div>
 </div>
</div>
<div>
 <div>
  <div>
   참고문서
  </div>
 </div>
</div>
<div>
 <p><a href="https://www.raspberrypi.org/documentation/installation/">https://www.raspberrypi.org/documentation/installation/</a></p>
</div>
