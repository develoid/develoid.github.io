---
layout: post
title:  "샤오미 부트로더 언락(Bootloader Unlock)"
date:   2018-09-19 00:00:00 +0900
author: Ellen
categories: Xiaomi
tags:
- Android
- Xiaomi
- Bootloader
- Unlock
---

### **부트로더 언락(Bootloader Unlock)** 후 발생하는 일에 대한 모든 책임은 본인에게 있습니다.


## 주의사항
1. Xiaomi는 현재 부트로더를 언락할 경우 **보안이 취약해질 수 있음** 을 경고하고 있습니다.
2. 부트로더 **언락과정에서 기기가 초기화** 되며, 진행전 주의사항을 숙지하시길 바랍니다.
3. 이를 진행하는것은 100% 유저의 몫이며, 이로 인하여 발생하는 어떠한 결과에도 책임지지 않습니다.



## 언락에 요구되는 사항
1. PC (Windows)
2. 언락할 Xiaomi 기기
3. Xiaomi 계정



## 1단계: 스마트폰 설정

![스마트폰 설정](https://tqpvmq.by.files.1drv.com/y4mNHQOKnsIoYaB8Mdlr_R6JQiNCJKHxge8gnXOQEMfOqaRnIWinemQgh62m2bZDcETxwobMZ4qgJ0aQ0RtM5J5UkicP3rqxgESkUjTkdBZy2gIhBo5LQHKNzM7VvfsqEOT3CTBgAhxHVQUfZKhOYx4LdNRSuj4okyua-b3CDOMPl0RiAEdV4JCyiw-yYF4jzR9Dzyg7neoRztqddbsGaS9ig?width=436&height=776&cropmode)

시작에 앞써, 스마트폰에서 다음과 같은 절차를 진행해야 진행이 가능합니다.

1. 만약 Xiaomi 기기 부트로더 언락이 처음이라면, **설정 -> 추가설정 -> 개발자옵션** 을 들어가서 **OEM unlocking** 을 활성화해주세요.
2. Mi Unlock status에서 계정과 기기를 등록하시길 바랍니다.

> Mi Unlock status는 개발자옵션이 위치하고 있습니다. OEM unlocking을 먼저 활성화한 이후 찾아보시길 바랍니다.



## 2단계: PC에서 언락신청하기

[en.miui.com/unlock](http://en.miui.com/unlock/)에 접속하여 **Unlock NOW** 버튼을 클릭하여 로그인창으로 이동하신후, 로그인을 진행하시길 바랍니다.

![언락 신청하기](https://tqppmq.by.files.1drv.com/y4m96rtiBQN6VyX4LfVqK7s5TxZnC2noLOBxnGa-uZvvOL3cwg3xcKzL0oSIkIIQ7hFXmt3g0Aasix2amwEdvATGaslMgBkFlooDLrExbNvOffep8EhdW-8_eNWdsZRDy7VTuK-vYF2e6oZV5saWhTcU1PMVGC0ZBlKCV0ENrHb1N1VJQj8kkroCZqVmX952QYjI8Y3tvmdiEwI6yz3Emasdg?width=900&height=582&cropmode=none)

만약 언락이 처음이라면, 다음과 같은 창이 뜰 수 있습니다. 이름과 지역, 전화번호를 입력하고 언락하는 사유를 간단하게 작성하신후 동의 체크박스를 클릭후 **Apply immediately** 를 누르시길 바랍니다.

이 과정에서 전화번호로 본인확인을 위한 SMS 인증이 요구되니, 이점 참고하시길 바랍니다.

> SMS 인증은 최대 10일까지 소요될 수 있으며, 이후에도 연락이 오지 않는다면 포럼에 문의하거나 계정을 새로 생성하는것이 가장 효율적입니다.



## 3단계: 언락툴 사용방법

1. **Download Mi Unlock** 을 클릭하여 툴을 다운로드하시길 바랍니다. (Zip 파일)
![언락툴 사용방법](https://tqprmq.by.files.1drv.com/y4mXePQueNep1xNzaHxXiC8E1eSRRXcBvJow_sHTnSu6NxRms9I2SVYhsOFhcLoObXid9_4FtQX9sB4IzkWc3UoZEeMI3KJ4qNjfRL1ZCRr2ufiJYwhYiNuBTamY4Pzc5Yr8m34BggeGqKQ2IT09BXIJbJ6NbhjtYf_-6npW9c6DO3Htg3GfV7UTPgwFbyS-DsLE1OIeQO8xf9Tb5kOD8ke-A?width=1259&height=843&cropmode=none)
2. 언락툴을 압축 해제해주세요
3. 파일에서 **MiFlashUnlock** 을 실행해주세요
4. 언락툴에서 승인받은 계정으로 로그인 (기기에도 같은 계정으로 로그인 되어있어야함)
5. 스마트폰(Xiaomi 기기)를 종료해주세요
6. **볼륨 하 + 전원버튼을 눌러 Fastboot Mode를 접근해주세요.**
7. USB 케이블을 통하여 (처음에 휴대폰과 증정한 케이블) PC와 연결해주세요.
8. 휴대폰과 연결되었다는 메세지가 뜨면, 안내를 따라 진행해주세요.
9. 운에 따라 **72시간, 360시간 혹은 2달의 대기시간이 있을 수 있습니다**. 언락하는 과정에서 위와 같은 메세지가 뜬다면 이후에 다시 시도하시길 바랍니다.
![언락](https://tqpamq.by.files.1drv.com/y4m1EASK5LWq7cvnpjWTRCNLF5_NzsM3FFopVhdfEGbC14COSovMHaAe_gqsxz7P3dOTXWhzcT-0w6AnN9bzEXxXDgWENFYy2ONgWYYSY7Qd98n3-7i302VmK03NNbOxkQADb0ALroupecXqb1TR2JppkqqC9HMFDRTwehAD273Nv9nWSavOC4pNeFsM0hEYjY54V6pJ05vtXVlwQoRnLuKUg?width=783&height=433&cropmode=none)
10. 언락이 성공적으로 완료된다면 휴대폰이 자동으로 재시작되며, 부트로고 하단에 자물쇠와 함꼐 Unlocked라는 메세지가 나타납니다.
