---
layout: post
title: 'RPi 1 & 2에서 USB 부팅하기(SD에는 파일 딱 하나만 있으면 OK)'
author: 'BLOKKY'
categories: Raspberry-Pi
tags:
- IoT-Board
- Raspberry-Pi
- Setting
-
---


<script> location.href='https://cafe.naver.com/develoid/778693' ; </script>


















						<p>라즈베리파이 3부터는, 부트 롬(아마 프로세서 내부에 있는거겠죠?)에 USB 부팅을 할 수 있는 기능이 내장되어 있습니다.<b>라즈베리파이 2, 1 애들은 없고요.물론, cmdline.txt같은걸 고쳐서 리눅스 Root FS를 USB로 잡고 부팅하는 사례는 많이 볼 수 있지만, 제가 오늘 소개하는건 다릅니다. cmdline.txt를 고쳐서 루트 파일시스템만 바꾸는건, 여전히 start.elf, kernel.img(혹은 kernel7.img), config.txt, cmdline.txt같은건 SD로부터 불러오지만, 제가 소개하는 방법으로는라즈베리파이가 SD로부터 1차(?) 부트로더(bootcode.bin)를 불러오고 나면, 그 다음부터는 100% USB로부터 불러오게 할 수 있습니다.<b>SD로부터 최소한의 코드를 불러들여야 한다는 점만 빼면 라즈베리파이 3에 내장된 USB 부팅 기능과 비슷합니다.(+ 라즈베리파이 3 USB 부팅에 어려움을 겪으실 때에도 이 방법을 시도해 보셔도 됩니다. 부트 롬에 버그가 있어서 내장 기능으로는 문제가 있을수도 있지만, 최신 bootcode.bin은 버그가 패치되어 있습니다) * 라즈베리파이 2에서만 테스트되었지만, 라즈베리파이 재단 문서에는 1, 2 모두 가능은 하다고 합니다.<b>* 이 방법은 config.txt에 program_usb_boot_mode=1이 필요하지 않습니다. 적어도 파이 2에서는요.<b>그럼, 방법을 이야기해 보겠습니다.<b><b>1. SD 카드 준비<b>SD 카드는, 우선 FAT32로 포맷되어 있어야 합니다. bootcode.bin만 있으면 되기에, 집에서 가장 용량이 적은 SD를 찾으시는게 좋을수도 있습니다.<b>전 집 어딘가에 8GB SD가 있을듯 한데, 못찾겠네요.그 다음, 아래 링크로 가서, Download를 눌러 최신 bootcode.bin을 받습니다.</p><a href="https://github.com/raspberrypi/firmware/blob/next/boot/bootcode.bin">https://github.com/raspberrypi/firmware/blob/next/boot/bootcode.bin</a><b><p><b>그 다음, SD에 bootcode.bin을 넣습니다.주의: start.elf와 같은 다른 부팅 파일들은 있으면 안됩니다. 그 파일들이 없어야 부트로더가 USB 부팅을 시도하게 됩니다.<b><b></p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODAyMDhfNjcg/MDAxNTE4MDU1NDA4NDA2.h5mbcDH3kp3ZIZVG2RP5gRVwBZzuX66XJ-cNeOZUG3Ig.QURacSFK2uzFA4_lDfSHtXdDj5b3OO0YKgsxmUcxOgMg.PNG.dhdlstjtr/bootcode.png?type=w740"><b><p>SD 준비는 이게 끝입니다.<b><b>2. USB 드라이브 준비<b>USB 드라이브 준비는 간단합니다. Win32DiskImager로 SD에 라즈베리파이 OS를 세팅해보셨다면, 알고 계시던 그 방법과 똑같습니다. USB가 타겟 드라이브인걸 빼면요.Win32diskimager 프로그램을 구하셔서 설치하시고 실행하신 다음Image File은 오른쪽 폴더 모양 눌러서 OS 이미지를, Device는 USB 드라이브를 선택하시고 </p><img src="https://cafeptthumb-phinf.pstatic.net/MjAxODAyMDhfMjI1/MDAxNTE4MDU1NTk3OTQ5.yIhhZy7lzDfkNTB_tnHHOPCKF0kmjMLknF8ihjHmMwcg.FwRaIxV3pmED2NtXRDnTYeKmQW0Cva3qWCF7ZyQoWt0g.PNG.dhdlstjtr/win32diskimager.png?type=w740"><b><p>Write 누르시면 됩니다.<b><b>3. 부팅<b>설명이 따로 필요 없죠. 그냥 SD 카드와 USB를 꽃고 전원을 넣으면 됩니다.<b>다만, 다시 말하지만 파이 2와 1은 부트 롬에 USB 부팅 기능이 없기 때문에 SD는 항상 필요합니다.<b><b><b>+ 파이 제로는 OTG로 부팅이 되는진 모르겠네요. 제 OTG 케이블은 망가져서... 해보신 분 계시나요?파이 제로를 PC와 연결시켜 SD 없이 부팅시킨 적은 있습니다(커널만요...).</p>
