function DataCheck(item) {
  if( item == "" || item == null || item == undefined || ( item != null && typeof item == "object" && !Object.keys(item).length ) ){
    return "";
  } else {
    return item;
  }
}

function DataCheckBool(item) {
  if( item == "" || item == null || item == undefined || ( item != null && typeof item == "object" && !Object.keys(item).length ) ){
    return false;
  } else {
    return true;
  }
}

function lz(n, digits) {
  let zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}

function copyCode() {
  var copyText = document.getElementById("out");
  copyText.select();
  document.execCommand("copy");
}

function saveToFile_Chrome(fileName) {
    let content = document.getElementById("out").value;

    let blob = new Blob([content], { type: 'text/plain' });

    objURL = window.URL.createObjectURL(blob);

    if (window.__Xr_objURL_forCreatingFile__) {
        window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
    }
    window.__Xr_objURL_forCreatingFile__ = objURL;

    let a = document.createElement('a');

    a.download = fileName;
    a.href = objURL;
    a.click();
}

function MakeFront() {
  let ada_max = 4;
  let dba_max = 12;
  let dpa_max = 8;
  let doa_max = 4;

  let bp_img = DataCheck(document.getElementById("bp_img").value);
  let bp_month = DataCheck(document.getElementById("bp_month").value);
  let bp_title = DataCheck(document.getElementById("bp_title").value);
  let bp_type1 = DataCheck(document.getElementById("bp_type1").value);
  let bp_type2 = DataCheck(document.getElementById("bp_type2").value);
  let bp_type3 = DataCheck(document.getElementById("bp_type3").value);
  let bp_type4 = DataCheck(document.getElementById("bp_type4").value);
  let bp_link = DataCheck(document.getElementById("bp_link").value);

  let ada = new Array();
  let dba = new Array();
  let dpa = new Array();
  let doa = new Array();

  for(let i=0; i<ada_max; i++) {
    let temp = new Array();
    let num = i+1;
    console.log(num);
    let temp0 = "ad_imgs_" + lz(num, 2),
        temp1 = "ad_link_" + lz(num, 2);

    temp[0] = DataCheck(document.getElementById(temp0).value);
    temp[1] = DataCheck(document.getElementById(temp1).value);
    ada.push(temp);
  }

  for(let i=0; i<dba_max; i++) {
    let temp = new Array();
    let num = i+1;
    let temp0 = "db_imgs_" + lz(num, 2),
        temp1 = "db_link_" + lz(num, 2),
        temp2 = "db_date_" + lz(num, 2),
        temp3 = "db_menu_" + lz(num, 2);
    console.log(num);

    temp[0] = DataCheck(document.getElementById(temp0).value);
    temp[1] = DataCheck(document.getElementById(temp1).value);
    temp[2] = DataCheck(document.getElementById(temp2).value);
    temp[3] = DataCheck(document.getElementById(temp3).value);

    dba.push(temp);
  }

  for(let i=0; i<dpa_max; i++) {
    let temp = new Array();
    let num = i+1;
    let temp0 = "dp_imgs_" + lz(num, 2),
        temp1 = "dp_link_" + lz(num, 2),
        temp2 = "dp_date_" + lz(num, 2),
        temp3 = "dp_menu_" + lz(num, 2);

    console.log(num);

    temp[0] = DataCheck(document.getElementById(temp0).value);
    temp[1] = DataCheck(document.getElementById(temp1).value);
    temp[2] = DataCheck(document.getElementById(temp2).value);
    temp[3] = DataCheck(document.getElementById(temp3).value);

    dpa.push(temp);
  }

  for(let i=0; i<doa_max; i++) {
    let temp = new Array();
    let num = i+1;
    let temp0 = "do_imgs_" + lz(num, 2),
        temp1 = "do_link_" + lz(num, 2),
        temp2 = "do_date_" + lz(num, 2),
        temp3 = "do_menu_" + lz(num, 2);

    console.log(num);

    temp[0] = DataCheck(document.getElementById(temp0).value);
    temp[1] = DataCheck(document.getElementById(temp1).value);
    temp[2] = DataCheck(document.getElementById(temp2).value);
    temp[3] = DataCheck(document.getElementById(temp3).value);

    doa.push(temp);
  }

  //console.log(dba);
  //console.log(dpa);
  //console.log(doa);

  let imglink_twitter = "https://cafeskthumb-phinf.pstatic.net/MjAxOTA1MDRfMTU4/MDAxNTU2OTM4NTc2NTkz.ZKKlyP2VXQOgTf_SkcOfOAV8ppdCdpBLoQlew6Rv4EEg.r4SGuFOYSp2i68MgrT95dSbqU-Xz3X_JO61Togl_rLAg.PNG.kkw2821/%ED%8A%B8%EC%9C%84%ED%84%B0.png?type=w1080";

  let imglink_facebook = "https://cafeskthumb-phinf.pstatic.net/MjAxOTA1MDRfOTIg/MDAxNTU2OTM4NTc2ODg4.Rnu-TVAF9MBNE4_VdzThzfiETQXNZyZHXTbfCSnj0_Ig.0RhRT4yq08v3baUx0vxE6kArdDc0NqKhjwuZj4BjCaYg.PNG.kkw2821/%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%B6%81.png?type=w1080"

  let imglink_plus = "https://cafeskthumb-phinf.pstatic.net/MjAxOTA1MDRfNTcg/MDAxNTU2OTM4NTc2MDE4.D_kJvsCwGwl9ICMQxLZsai1UDlA8gUTJ2oBPsYul8vog.PPkh0v59w3VrbTlvcediOqgr2I09H7_gchb-1jtNIMwg.PNG.kkw2821/%EB%94%94%EB%B2%A8%ED%94%8C%EC%B9%9C.png?type=w1080"

  let imglink_guide = "https://cafeskthumb-phinf.pstatic.net/MjAxOTA1MDRfMjYw/MDAxNTU2OTM4NTc1NzIz.40fMKJFkNVJmaDrLYieudnZ98XIP6iBY5Am4DboupdAg.rPc9aQUz1yA807_0jsxigBHDKFxNwnboMN0Wq7a8pskg.PNG.kkw2821/%EB%94%94%EB%B2%A8%EA%B0%80%EC%9D%B4%EB%93%9C.png?type=w1080"

  let imglink_dvlpost = "https://cafeskthumb-phinf.pstatic.net/MjAxOTA0MTVfOTAg/MDAxNTU1MjYyMzAxMTgw.RngjcnRsMKzNdGEjnNmlIpQsCG5GW9Y_sdzRVPTugzkg.FKLRzvVQTmDYBu06D_wDmq2zvmUe9SANoHWx2rYAamwg.PNG.kkw2821/%EC%9E%90%EC%82%B0_3.png?type=w1080"

  let imglink_dvlbest = "https://cafeskthumb-phinf.pstatic.net/MjAxOTA0MTVfNCAg/MDAxNTU1MjYyMzAxNTIw.h6uvxZo8dWDd-H69F6w6X8YJEMs21yzT7eTZ9v2Tcfwg.uBQHSu7ShGDej-8AaR5LgyhHsZ-2uI7lGCvHwMSf-T4g.PNG.kkw2821/%EC%9E%90%EC%82%B0_4.png?type=w1080"

  let imglink_dvlpold = "https://cafeskthumb-phinf.pstatic.net/MjAxOTA0MTVfNDQg/MDAxNTU1MjYyMzAxODQ1.HiKhK9wMIE79BRAFuhYH4g5ixedZAsa-E4mH-uaw868g.e2CWf7hQfh-vJzW2M_bQIcgheWKhA_SZ8jpg59i6SWEg.PNG.kkw2821/%EC%9E%90%EC%82%B0_5.png?type=w1080"

  let page = '<center>'
        +  '<table width="828" cellspacing="0" cellpadding="0">'
        +  '<colgroup>'
        +  '<col width="207">'
        +  '<col width="207">'
        +  '<col width="207">'
        +  '<col width="207">'
        +  '</colgroup>'
        +  '<tr>'
        +  '<td colspan="4" style="border-bottom: 1px solid #ddd;"><a href="'+bp_link+'"><img id="'+bp_img+'" src="'+bp_img+'" width="828" ></a></td>'
        +  '</tr>'
   ;

   if(DataCheckBool(bp_month)) {
     page += '<tr style="background: #fafafa;">'
          +  '<td colspan="3" style="padding: 10px; border-bottom: 1px solid #ddd;">'
          +  '<span style="font-size:24px;">'+bp_month+'월 베스트포토 <b>'+bp_title+'</b></span><br>'
          +  '<span style="font-size:12px;">'
          +  '<b>촬영&nbsp;</b>'+bp_type1+'&nbsp;&nbsp;&nbsp;&nbsp;'
          +  '<b>장소&nbsp;</b>'+bp_type2+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
          +  '<b>일자&nbsp;</b>'+bp_type3+'&nbsp;&nbsp;&nbsp;&nbsp;'
          +  '<b>기기&nbsp;</b>'+bp_type4+'&nbsp;&nbsp;&nbsp;&nbsp;'
          +  '</span>'
          +  '</td>'
          +  '<td colspan="1" style="padding-right: 10px; border-bottom: 1px solid #ddd; font-size:12px; text-align:right;"><b>디벨로이드 베스트포토</b>에<br>도전해 보세요!</td>'
          +  '</tr>'
      ;
    }


    page += '<tr>'
        +  '<td><a href="https://twitter.com/develoid"><img id="'+imglink_twitter+'" src="'+imglink_twitter+'" width="207"></a></td>'
        +  '<td><a href="https://facebook.com/develoidofficial"><img id="'+imglink_facebook+'" src="'+imglink_facebook+'" width="207"></a></td>'
        +  '<td><a href="https://develoid.github.io/op/"><img id="'+imglink_plus+'" src="'+imglink_plus+'" width="207"></a></td>'
        +  '<td><a href="https://develoid.github.io/"><img id="'+imglink_guide+'" src="'+imglink_guide+'" width="207"></a></td>'
        +  '</tr>'
    ;

  for(i=0; i<ada_max; i++) {
    if(DataCheckBool(ada[i][0])) {
      page += '<tr>'
          + '<td colspan="4"><a href="'+ada[i][1]+'"><img id="'+ada[i][0]+'" src="'+ada[i][0]+'" width="828"></a></td>'
          + '</tr>'
      ;
    }
  }

  if(DataCheckBool(dba[0][0])) {
    page += '<tr>'
        + '<td colspan="4" style="border-top: 1px solid #ddd;"><a href="https://cafe.naver.com/develoid/867255"><img id="'+imglink_dvlbest+'" src="'+imglink_dvlbest+'" width="828"></a></td>'
        + '</tr>'
    ;
  }

  for(i=0; i<dba_max; i=i+4) {
    if(DataCheckBool(dba[i][0])) {
      page += '<tr>'
          + '<td><a href="'+dba[i][1]+'"><img id="'+dba[i][0]+'" src="'+dba[i][0]+'" width="207"></a></td>'
          + '<td><a href="'+dba[i+1][1]+'"><img id="'+dba[i+1][0]+'" src="'+dba[i+1][0]+'" width="207"></a></td>'
          + '<td><a href="'+dba[i+2][1]+'"><img id="'+dba[i+2][0]+'" src="'+dba[i+2][0]+'" width="207"></a></td>'
          + '<td><a href="'+dba[i+3][1]+'"><img id="'+dba[i+3][0]+'" src="'+dba[i+3][0]+'" width="207"></a></td>'
          + '</tr>'
          + '<tr>'
          + '<td style="padding: 10px; font-style: oblique; font-family: 나눔고딕, NanumGothic, 돋움; font-size: 14px; color: #666">'+dba[i][2]+'<br>'+dba[i][3]+'</td>'
          + '<td style="padding: 10px; font-style: oblique; font-family: 나눔고딕, NanumGothic, 돋움; font-size: 14px; color: #666">'+dba[i+1][2]+'<br>'+dba[i+1][3]+'</td>'
          + '<td style="padding: 10px; font-style: oblique; font-family: 나눔고딕, NanumGothic, 돋움; font-size: 14px; color: #666">'+dba[i+2][2]+'<br>'+dba[i+2][3]+'</td>'
          + '<td style="padding: 10px; font-style: oblique; font-family: 나눔고딕, NanumGothic, 돋움; font-size: 14px; color: #666">'+dba[i+3][2]+'<br>'+dba[i+3][3]+'</td>'
          + '</tr>'
      ;
    }
  }

  if(DataCheckBool(dpa[0][0])) {
    page += '<tr>'
        + '<td colspan="4" style="border-top: 1px solid #ddd;"><a href="https://cafe.naver.com/develoid/menu/1312"><img id="'+imglink_dvlpost+'" src="'+imglink_dvlpost+'" width="828"></a></td>'
        + '</tr>'
    ;
  }

  for(i=0; i<dpa_max; i=i+4) {
    if(DataCheckBool(dpa[i][0])) {
        page += '<tr>'
            + '<td><a href="'+dpa[i][1]+'"><img id="'+dpa[i][0]+'" src="'+dpa[i][0]+'" width="207"></a></td>'
            + '<td><a href="'+dpa[i+1][1]+'"><img id="'+dpa[i+1][0]+'" src="'+dpa[i+1][0]+'" width="207"></a></td>'
            + '<td><a href="'+dpa[i+2][1]+'"><img id="'+dpa[i+2][0]+'" src="'+dpa[i+2][0]+'" width="207"></a></td>'
            + '<td><a href="'+dpa[i+3][1]+'"><img id="'+dpa[i+3][0]+'" src="'+dpa[i+3][0]+'" width="207"></a></td>'
            + '</tr>'
            + '<tr>'
            + '<td style="padding: 10px; font-style: oblique; font-family: 나눔고딕, NanumGothic, 돋움; font-size: 14px; color: #666">'+dpa[i][2]+'<br>'+dpa[i][3]+'</td>'
            + '<td style="padding: 10px; font-style: oblique; font-family: 나눔고딕, NanumGothic, 돋움; font-size: 14px; color: #666">'+dpa[i+1][2]+'<br>'+dpa[i+1][3]+'</td>'
            + '<td style="padding: 10px; font-style: oblique; font-family: 나눔고딕, NanumGothic, 돋움; font-size: 14px; color: #666">'+dpa[i+2][2]+'<br>'+dpa[i+2][3]+'</td>'
            + '<td style="padding: 10px; font-style: oblique; font-family: 나눔고딕, NanumGothic, 돋움; font-size: 14px; color: #666">'+dpa[i+3][2]+'<br>'+dpa[i+3][3]+'</td>'
            + '</tr>'
        ;
    }
  }

  if(DataCheckBool(dpa[0][0])) {
    page += '<tr>'
        + '<td colspan="4" style="border-top: 1px solid #ddd;"><a href="https://cafe.naver.com/develoid/menu/1312"><img id="'+imglink_dvlpold+'" src="'+imglink_dvlpold+'" width="828"></a></td>'
        + '</tr>'
    ;
  }

  for(i=0; i<doa_max; i=i+4) {
    if(DataCheckBool(dpa[i][0])) {
      page += '<tr>'
          + '<td><a href="'+doa[i][1]+'"><img id="'+doa[i][0]+'" src="'+doa[i][0]+'" width="207"></a></td>'
          + '<td><a href="'+doa[i+1][1]+'"><img id="'+doa[i+1][0]+'" src="'+doa[i+1][0]+'" width="207"></a></td>'
          + '<td><a href="'+doa[i+2][1]+'"><img id="'+doa[i+2][0]+'" src="'+doa[i+2][0]+'" width="207"></a></td>'
          + '<td><a href="'+doa[i+3][1]+'"><img id="'+doa[i+3][0]+'" src="'+doa[i+3][0]+'" width="207"></a></td>'
          + '</tr>'
          + '<tr>'
          + '<td style="padding: 10px; font-style: oblique; font-family: 나눔고딕, NanumGothic, 돋움; font-size: 14px; color: #666">'+doa[i][2]+'<br>'+doa[i][3]+'</td>'
          + '<td style="padding: 10px; font-style: oblique; font-family: 나눔고딕, NanumGothic, 돋움; font-size: 14px; color: #666">'+doa[i+1][2]+'<br>'+doa[i+1][3]+'</td>'
          + '<td style="padding: 10px; font-style: oblique; font-family: 나눔고딕, NanumGothic, 돋움; font-size: 14px; color: #666">'+doa[i+2][2]+'<br>'+doa[i+2][3]+'</td>'
          + '<td style="padding: 10px; font-style: oblique; font-family: 나눔고딕, NanumGothic, 돋움; font-size: 14px; color: #666">'+doa[i+3][2]+'<br>'+doa[i+3][3]+'</td>'
          + '</tr>'
      ;
    }
  }

  page += '<tr>'
      + '<td colspan="4" style="padding: 14px; font-family: 나눔고딕, NanumGothic, 돋움; font-size: 14px; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd;">'
      + '<a style="color: #666; text-decoration:none;" href="http://cafe.naver.com/develoid/menu/1" target="_blank">공지사항</a>&nbsp;·&nbsp;'
      + '<a style="color: #666; text-decoration:none;" href="https://cafe.naver.com/develoid/841727" target="_blank">디벨규칙</a>&nbsp;·&nbsp;'
      + '<a style="color: #666; text-decoration:none;" href="https://cafe.naver.com/develoid/827731" target="_blank">신입필독</a>&nbsp;·&nbsp;'
      + '<a style="color: #666; text-decoration:none;" href="https://develoid.github.io/op/" target="_blank">디벨플친</a>&nbsp;·&nbsp;'
      + '<a style="color: #666; text-decoration:none;" href="https://www.facebook.com/DeveloidOfficial" target="_blank">디벨페북</a>&nbsp;·&nbsp;'
      + '<a style="color: #666; text-decoration:none;" href="https://twitter.com/develoid" target="_blank">디벨트위터</a>&nbsp;·&nbsp;'
      + '<a style="color: #666; text-decoration:none;" href="https://goo.gl/forms/Lrxz08x3oB3XLuJ62" target="_blank">제휴문의</a>&nbsp;·&nbsp;'
      + '<a style="color: #666; text-decoration:none;" href="https://develoid.github.io/" target="_blank">디벨가이드</a>&nbsp;·&nbsp;'
      + '<a style="color: #666; text-decoration:none;" href="https://cafe.naver.com/develoid?iframe_url=/AttendanceView.nhn%3Fsearch.clubid=23370764%26search.menuid=10" target="_blank">출석체크</a>'
      + '</td>'
      + '</tr>'
      + '<tr>'
      + '<td colspan="4" style="padding: 10px; font-size: 10px; color: #666">'
      + '디벨로이드는 상품판매와 직접적인 관련이 없으며, 모든 상거래의 책임은 구매자와 판매자에게 있습니다.<br>'
      + '이에 대해 디벨로이드는 일체의 책임을 지지 않습니다. <br>'
      + '<b>디벨로이드 콘텐츠팀</b>에서 콘텐츠 배열·운영을 담당합니다.<br>'
      + '<br>'
      + 'ⓒ 2019. Develoid All rights reserved.'
      + '</td>'
      + '</tr>'
      + '</table>'
      + '</center>'
  ;


  document.getElementById("view").innerHTML = page;
  document.getElementById("out").value = page;

}
