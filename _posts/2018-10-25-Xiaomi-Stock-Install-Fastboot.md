---
layout: post
title:  "Xiaomi 스마트폰을 순정으로 복구해보자! - Fastboot 편"
author: "키큰기린"
categories:
- Xiaomi
tags:
- Android
- Xiaomi
- Stock
- ROM
---

# 샤오미 스마트폰을 순정으로 복구하자!

샤오미 스마트폰을 순정으로 복구하는 방법으로, 부트로더가 언락되어 있음이 전제로 깔려 있습니다.

샤오미 스마트폰은 복구가 다른 안드로이드 폰보다 쉬운 편으로, 아래 강좌만 잘 따라오시면 순정으로 복구할 수 있습니다.



## 1. 파일 준비 단계

샤오미 순정 펌웨어의 종류는 2가지로 나뉘어져 있습니다.

- Fastboot 방법(XiaoMiFlash 이용, **부트로더 언락 필수**)
- Recovery  방법(순정 및 TWRP)



전자는 PC가 필요하고, 모든 파티션을 새로 씌워 폰의 안정성을 향상시킬 수 있습니다.

후자는 PC가 필요없고, 필요한 파티션만 씌워 시간이 단축됩니다.

본 가이드는 Fastboot 방법을 설명합니다.



## 2. XiaoMiFlash 준비하기

XiaoMiFlash는 샤오미에서 공식 제공하는 Fastboot 툴입니다.

다운로드는 [여기](https://mega.nz/#!ospEzaJJ!PCnKNwFQ-mLqT8JqoNtqrzVGqloIDgpGaj4Qv34pA9c)에서 가능합니다. 다운로드를 받은 후 임의의 폴더에 압축을 풀어주세요.

그럼 XiaoMiFlash의 준비는 끝났습니다.



## 3. 펌웨어 파일 준비하기

샤오미의 펌웨어 파일 중, Fastboot에 해당하는 파일들은 꽁꽁 숨겨져 있습니다. 우선 [여기](https://en.miui.com/download.html)를 눌러 샤오미 다운로드 페이지에 접속합니다. 그렇게 되면 아래와 같은 화면이 나옵니다.



![기종 선택](https://40zpba.bn.files.1drv.com/y4mxlCqsyq1WmrWjgDvhfG1GRbwWQQSSx27VDgHoxzw_0gquqlpGkuFQdpWrTzeCM8c4Rb_zJVVEfun4T-6R7KC4x8FUPi2NGgd4WEkOW-ENtutwe__oUUHCs5Sk0s-MfQkFxYFFWus0D79UhSZeGfhzoUjNXwkKzhGcMG2eX4P40M4bzjyj54l8ptFYQ-R1tX_oGA50HZLJLTMt6ZYS0J3CA?width=1226&height=801&cropmode=none)



사진에는 5가지 기종만이 나와 있지만, 아래로 스크롤하면 더 많은 기종이 나옵니다. POCO F1을 선택해 보겠습니다.



![POCO F1](https://40zqba.bn.files.1drv.com/y4mm663ZhWwbKz3jJP5NEPwT2VNkRZyW4mDJLtmqrgTjZNH6cn0Rq-IVMDqBLIeUgHCnZ-X8mYzLzdlCa_k5_hBgjP9AIQFdH5l2qfgT1-Nwc4bDPHXJ4yNiuZVuuIibELmH0BkGy4Pr5EVpOSdmp9rMfsPgthzXjJg1i_T1GXwC2Kx-OLqaneRPIHXfmAcXKqWC0-hh2nZ2jd9E7ohzcTMhQ?width=1226&height=1040&cropmode=none)



그럼 상기와 같이 롬 다운로드 페이지가 나오지만, 가이드에서는 저 두 롬을 사용하지 않을 것입니다.

'Download Full ROM' 우측의 'Flashing Guide' 버튼을 클릭해주세요.



![Flashing Guide](https://40wbbq.bn.files.1drv.com/y4myn2gZrQzovRTc5eJWSOtreHDVsXnIBzuv8hydGiPrxGMGeDPOY1cV4UvphCELRZvcn72Pw9DNJ5xo90q2FFOAXgqGPREVTQ6kvrPo0i0-DDqm7pgrvr-y4w-FxwCzyjT21CZ_9e1Wa9jKDnZXG4I_m_HPWFR6kHg4TZkMGId9wtsChjHmeyzzkLIG9JWTjn8nqO45b7BZ5NkP9PnPbg5-w?width=1076&height=805&cropmode=none)



사진에 강조된 Fastboot Update를 클릭해주세요.



![펌웨어 목록](https://40z6ba.bn.files.1drv.com/y4mkYbXN41dzQvZx8KAERXOdjOxeOC90g-WlYFYVu2o_pJEBg5UrNHV8OIcUbmzbDEZFpb994UsklCGQHoiQsC7JC4olvcbGmNnDITQZAQquyXhD4LUZUeUGx9SDnG4SkH8-0iF_3qebKst9y-c7of_ZHQSR2fVi1rBYRvUZSLNwf_Fuy5giaXeiCieZEpGUT_niLmB1E28NwyLr7KeclIUDQ?width=1226&height=1040&cropmode=none)



사진상의 'STEP 2'에서 Fastboot 롬을 다운받을 수 있습니다. 자신에게 맞는 기종을 선택해 다운로드해 주세요. 압축은 총 2번 되어 있으며, .tar.gz 안의 .tgz 파일도 함께 풀어야 합니다. 편의를 위해 C드라이브에 압축을 풀어두시면 되겠습니다.



# 4. 펌웨어를 플래싱하기

XiaoMiFlash와 Fastboot 펌웨어가 준비가 완료되었으면, XiaoMiFlash를 실행시킬 차례입니다.

압축을 푼 경로로 가셔서 XiaoMiFlash.exe 파일을 더블클릭하여 실행합니다. (반드시 해당 파일이 맞는지 다시 한 번 확인하세요.)



![MiFlash.exe](https://gwjl9q.bn.files.1drv.com/y4mDNTzj2ELmWJ7rOnq1bxJUPUN875F611-hUpBkVwlDVzZxyCyqORfo3BScgB2OKsA1ZiYVCr-rVBtTcf_ZS3GRy2eUz5cuU2GPzkaghNUPyUSJCJNwweUQ_EWr4n1BRAEvofKB5xvgAeviWlWg9Whi4XN0Ig_qfRPhdZuaVnTNsnSGKs_yYnGioXn-3EKTOqGc7N_9GGr5jmiJ536TZx8Zg?width=766&height=172&cropmode=none)



XiaoMiFlash를 켜면 다음과 같은 화면이 반겨줍니다. (경우에 따라 Install Driver창이 뜰 수 있는데, Install을 눌러주시면 잠시 후 사라집니다.)



![XiaoMiFlash Main](https://gwjj9q.bn.files.1drv.com/y4mw6sHQGRnOHMFmUfBtJgp1GuDnTbv7P5u3jGiRmwy2MkBzcwUB0i8GSPpR-SIPWnOpolmPpoDOs0KDT61VNB7TvfhJeGszR39F6rBFtAXg8XCMD_W-L-P3B7j_kwP3n53AiUiFLQLdVlhXGQzFxYhcN-byXXCMtEQtyinfYYAYBvo_QWnGU-VgrnHuTGckB6av2V5FPNIgLnSpSH_nU5xhA?width=1622&height=825&cropmode=none)



각 버튼이 수행하는 기능은 다음과 같습니다.

① 펌웨어 파일을 선택하는 단추입니다.

② 하단에 디바이스 목록을 다시 불러오는 버튼입니다.

③ 펌웨어 복구를 시작하는 버튼입니다.

④ 어떤 식으로 복구를 할 것인가 선택하는 곳입니다. clean all은 초기화, save user data는 업그레이드, clean all and lock은 초기화 후 부트로더를 잠급니다. (기본값은 clean all and lock입니다.)

중간의 빈 공간은 연결된 디바이스가 표시되는 공간입니다.



## 1. 디바이스 준비하기

XiaoMiFlash를 사용하기 위해서는 샤오미 스마트폰에서 특수한 작업이 필요합니다.

POCO F1 기준으로, 전원을 끈 후 **볼륨 하 + 전원 버튼**을 눌러 FASTBOOT 모드에 진입합니다.

정상적으로 되셨다면 화면에 큼직하게 FASTBOOT이라는 단어와 Xiaomi 토끼가 뜰 것입니다.



그렇다면, 이제 XiaoMiFlash에서 디바이스를 인식시킬 차례입니다. ② 버튼을 누르면,



![refresh](https://gwjs9q.bn.files.1drv.com/y4ml7RRbpBHeNrOpiGyfZxDKFF_XdF848Ze-EPFVhHK-eIpVjTWlghgrSl7l3FUCSnkXfjyp3VtOZHbTZmOnw2OSQIx3hSraxCVU_IeVWIePiRRxAfMDnLHmKSAzYlnr6qefz4SU2qFs-4vJ389OxONIjQj7fm_rWsDvkhQknQIGeif0JzY4SmIQ1-ZuWtyZn9AYuTIdy4jL1Y9v9cG-sKRqw?width=1622&height=825&cropmode=none)



하단에 디바이스가 추가된 것을 보실 수 있습니다. 

그렇다면, Select 버튼을 눌러봅시다.



![Select](https://hajk9q.bn.files.1drv.com/y4mr75jJuLpRvxGsCLQrw8or9meFqeKQQT8JvGZB1NlrXTzFD2omfE8SASXpRW-ThXUVS8WANgSa8O5IgAHVIE_ZTgZKTskm3wedR86RuId5DU74dpj8SGULT6pQm4c15wBGIL-znryAFGFP9FYIzWXlUrdjiNPEJEvTpGArsU7Py7uSr0dKSMB7O5z81etBY0sfrwx6rG0YjrLoeQ7LogSgA?width=838&height=641&cropmode=none)



다음과 같은 창이 뜨면서, 펌웨어가 저장된 폴더를 선택할 수 있습니다. 

아까 압축 푸셨던 경로(편의를 위해 C드라이브에 푸셨으면 그곳으로, 다른 경로에 푸셨다면 찾아가서 하시면 됩니다)로 가셔서 폴더를 선택 후, '확인' 버튼을 누릅니다.



![Select_after](https://hajl9q.bn.files.1drv.com/y4mF5-wcUar4a0UgO2ITjPGht6Lj6nyXfqGffj_oUCwpQWQ5A-8JZZ-tMky-udMwC1iPgVnp0Xhj0mLbA6MxzbAo4Vvs0b0OfXsOO5ZNv0zMPm-bZO2dmnKdEqFKBaZQhW40-DtskKixzsFPbs76tDcljLdHfVLQ_69N-9LPe4dyrLvYuEEmZKs7cfCH0cH7gWyA462aDOVbnphZtGhzlmIgg?width=1202&height=88&cropmode=none)



그러면 이렇게 경로가 설정되며, Flash가 가능해집니다. ④를 참고하셔서 초기화시킬 것인지, 그대로 둘 것인지, 초기화하고 부트로더를 잠글 것인지 선택한 후, Flash 버튼을 누릅니다.

Flash를 누르면 펌웨어 복구가 되면서, 약 6~7분 후 순정 MIUI로 부팅될 것입니다.

이상 Xiaomi 스마트폰을 순정으로 복구하는 방법이었습니다.