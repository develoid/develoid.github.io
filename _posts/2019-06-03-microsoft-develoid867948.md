---
layout: post
title: '[커뮤니티] CMD를 통해 안정적으로 파일 다운로드(VBS사용)'
author: '글작성자'
categories: Microsoft
tags:
- Windows
- OS
-
-
---


<script> location.href='https://cafe.naver.com/develoid/867948' ; </script>

bitsadmin는 권한때문에 다운로드가 안되고<p>Powershell은 어떨때는 되다가 어떨때는 강제중지가 되고</p>
<p>그래도 최소한 wget for windows는 배치파일 내에서 다운로드를 하기 위해서 몇일동안 찾아본 결과 에러가 잘 나지 않게 스크립트를 찾아서 짜 보았다.</p>
<p>원문은 이쪽이다.&nbsp;<a href="http://blog.netnerds.net/2007/01/vbscript-download-and-save-a-binary-file/">http://blog.netnerds.net/2007/01/vbscript-download-and-save-a-binary-file/</a></p>
<p>필자의 경우 배치파일에서 이렇게 사용하였다.</p>
<p>#</p>
<p>ECHO&nbsp; &nbsp;- "7-Zip Precompiled Binaries"를 다운로드하는 중...</p>
<p>&gt;"%temp%\download_7za.vbs" echo ' Set your settings</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo&nbsp; &nbsp; &nbsp;strFileURL = "<a href="https://github.com/develar/7zip-bin/raw/master/win/%ARCHITECTURE_7za%/7za.exe">https://github.com/develar/7zip-bin/raw/master/win/%ARCHITECTURE_7za%/7za.exe</a>"</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo&nbsp; &nbsp; &nbsp;strHDLocation = "%cd%\tools\7za.exe"</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo.</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo ' Fetch the file</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo&nbsp; &nbsp; &nbsp;Set objXMLHTTP = CreateObject^("MSXML2.XMLHTTP"^)</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo.</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo&nbsp; &nbsp; &nbsp;objXMLHTTP.open "GET", strFileURL, false</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo&nbsp; &nbsp; &nbsp;objXMLHTTP.send^(^)</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo.</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo If objXMLHTTP.Status = 200 Then</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo Set objADOStream = CreateObject^("ADODB.Stream"^)</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo objADOStream.Open</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo objADOStream.Type = 1 'adTypeBinary</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo.</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo objADOStream.Write objXMLHTTP.ResponseBody</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo objADOStream.Position = 0&nbsp; &nbsp; 'Set the stream position to the start</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo.</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo Set objFSO = Createobject^("Scripting.FileSystemObject"^)</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo If objFSO.Fileexists^(strHDLocation^) Then objFSO.DeleteFile strHDLocation</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo Set objFSO = Nothing</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo.</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo objADOStream.SaveToFile strHDLocation</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo objADOStream.Close</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo Set objADOStream = Nothing</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo End if</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo.</p>
<p>&gt;&gt;"%temp%\download_7za.vbs" echo Set objXMLHTTP = Nothing</p>
<p>cscript /nologo "%temp%\download_7za.vbs"</p>
<p>del "%temp%\download_7za.vbs"</p>
<p>#</p>
<p>대략적인 구조를 설명하자면</p>
<p>VBS파일을 임시파일에 저장시킨후, 파일이 다운로드 되면 VBS파일을 삭제하는 방식이다.</p>
<p>여기서 세번째줄인</p>
<p>strFileURL = "<a href="https://github.com/develar/7zip-bin/raw/master/win/%ARCHITECTURE_7za%/7za.exe">https://github.com/develar/7zip-bin/raw/master/win/%ARCHITECTURE_7za%/7za.exe</a>"</p>
<p>에서 <a href="https://git...를">https://git...</a>에&nbsp;다운로드할 주소를,</p>
<p>네번째 줄인</p>
<p>strHDLocation = "%cd%\tools\7za.exe"</p>
<p>에서&nbsp;%....를 저장할 위치를 넣으면 된다.</p>
<p>"를 끝부분에 다는것을 까먹지 말자.</p>
<p>필자는 두 파일을 다운로드를 하기 위해서 이 스크립트를 두번 만들고 두번 삭제하는데</p>
<p>vbs에 옵션을 넣는(download.vbs "파일주소" "저장주소") VBS를 만드는 방식이였으면 더 편하지 않았을까 싶다.</p>
<p>그렇게 만들고는 싶다만 어떻게 만들어야 할지는 모르겠다.</p>
