---
layout: post
title:  "리눅스 스왑 메모리(Swap Memory)"
author: SiRyuA
categories:
- Linux
tags:
- Linux
- Swap
- Command
---

### Terminal 사용되는 명령어 입니다.

# Swap 메모리란
메모리 사용량이 늘어남에 따라서 디스크의 일부를 마치 확장된 RAM 처럼 사용할 수 있게 해주는 기술입니다.

커널은 실제 메모리에 올라와 있는 메모리 블록들 중에서 당장 쓰이지 않는 것을 디스크에 저장하여, 사용 가능한 메모리 영역을 늘립니다.

# Swap 메모리 확인
~~~
swapon -s, free
~~~

# Swap 메모리 추가
~~~
sudo dd if=/dev/zero of=/home/swapfile bs 1024 count=200000
~~~

* count => 메모리 크기
* 1000000 = 1GB
* 2000000 = 2GB
* 4000000 = 4GB

# Swap 메모리를 Swap 파일로 포맷
~~~
$ cd ..
$ sudo mkswap swapfile
~~~

# Swap 메모리 활성화
~~~
sudo swapon swapfile
~~~

# Swap 메모리 비활성화
~~~
sudo swapoff swapfile
~~~

# Swap 메모리 삭제
~~~
sudo rm -r swapfile
~~~
