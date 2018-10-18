---
layout: post
title:  "삼성 순정 펌웨어 다운로드(Stock Firmware)"
author: SiRyuA
categories: Samsung
tags:
- Android
- Samsung
- Stock
- Firmware
- Download
---

### 주의! 본인의 기기의 펌웨어가 아닌 다른 기기의 펌웨어를 올릴 경우 벽돌이 될 수 있습니다.

## 주의사항
1. 순정 펌웨어를 기기에 설치하기 위해서는 [오딘](/samsung/samsung-odin.html) 사용을 진행해야 됩니다.


## UPDATO 이용하기

![UPDATO]({{ site.baseurl }}/postImage/samsung-stock-firmware-01.png)

1. [UPDATO.com](https://updato.com/firmware-archive-select-model) 에 접속하여 모델명을 검색합니다.
2. 우측의 **REGION** 메뉴에서 본인 기기의 지역 및 통신사 필터를 지정한 후 **Update Results** 를 눌러서 갱신합니다.
3. 필요로 하는 펌웨어를 선택 후 **DOWNLOAD** 를 눌러서 펌웨어를 다운로드합니다.


## SamFirm

![SamFirm]({{ site.baseurl }}/postImage/samsung-stock-firmware-02.png)

1. [SamFirm XDA 쓰레드](https://forum.xda-developers.com/galaxy-tab-s/general/tool-samfirm-samsung-firmware-t2988647/post57842725#post57842725) 에서 SamFirm 을 다운로드 받습니다.
2. Model 에 기기의 모델명, Region 에 통신사를 입력합니다.
 * SKT는 **SKC**, KT는 **KTC**, U+는 **LUC**, 자급제는 **KOO** 입니다.
3. Auto 와 Manual 을 선택합니다.
 * Auto 는 자동으로 최신 펌웨어를 가져옵니다.
 * Manual 은 본인이 직접 PDA, CSC, Phone 을 입력하여 일치하는 펌웨어를 가져옵니다. (PDA, CSC 는 [SamMobile](https://www.sammobile.com/firmwares/) 에서 확인 가능합니다.)
4. 초기화 펌웨어를 만드려면 **Binary Nature** 를 선택하고, 업데이트 펌웨어를 원할 경우 체크를 진행하지 않습니다.
5. **Check Update** 를 눌러서 펌웨어를 불러옵니다.
6. 검색이 완료되면 **Download** 를 클릭하여 펌웨어를 다운로드 받습니다.
7. 다운로드가 완료되면 **Decrypt** 버튼을 눌러서 복호화 합니다.
 * 복호화 하지 않을 경우 enc4 라는 이름으로 암호화된 파일을 출력합니다.


##### 동작에 오류가 발생한다면 [MS VC++ 2008 패키지](http://www.microsoft.com/en-us/download/details.aspx?id=29) & [MS VC++ 2010 패키지](http://www.microsoft.com/en-us/download/details.aspx?id=5555) 를 설치하시길 바랍니다.
