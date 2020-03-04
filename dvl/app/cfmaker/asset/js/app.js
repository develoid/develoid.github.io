let bp_cnt = 1;
let ad_cnt = 2;
let yt_cnt = 2;
let bt_cnt = 4;
let sp_cnt = 4;
let pt_cnt = 4;

let menu_url = new Array(
  "https://cafe.naver.com/develoid",
  "https://cafe.naver.com/develoid/901013",
  "https://cafe.naver.com/develoid/827731",
  "https://develoid.github.io/",
  "https://develoid.github.io/op",
  "https://www.youtube.com/channel/UC0ktIJkyetokw2dnvjpyA9w",
  "https://twitter.com/develoid",
  "https://www.facebook.com/DeveloidOfficial/",
  "https://goo.gl/forms/Lrxz08x3oB3XLuJ62"
);

let menu_resource = new Array(
  "https://cafefiles.pstatic.net/MjAyMDAyMDlfMTk1/MDAxNTgxMjQ2NzQ2OTU4.ojUM3wv8neJhpYtgAVBfPGUSTwY1SGxCTfDAbfpca2og.Q3LTgaXEQLhqhTPp8xEwJFxakCZ175HqFOw6D8K6EREg.PNG/f_menu1.png",
  "https://cafefiles.pstatic.net/MjAyMDAxMzFfODIg/MDAxNTgwNDUxNzU5NDM2.ZVqh3Jt9oVIDbCbxpnO5LPCiLCcLSAom62K8yvisEZEg.BkXFwTV8cN2H3pLcE0xEhTN5fID5ZGPuJKfeYuPS1YIg.PNG/f_menu2.png",
  "https://cafefiles.pstatic.net/MjAyMDAxMzFfNjgg/MDAxNTgwNDUwNTk1NDIx.3DaYcmeF_mBpjRTmzMWgnA8pb8Qbn085iUTf-XxXsV4g.l78vTAU-69WQFIyKJjQRHMUIBGOKCyIvblGxhIvNkVQg.PNG/f_menu3.png",
  "https://cafefiles.pstatic.net/MjAyMDAxMzFfNzcg/MDAxNTgwNDUwNTk1NzY3.hRcZTfqxDM_3toOCYh5AuQ207M61jxIE7aaLlLRhhtUg.5-bCK3OJVz9en5O2JngYe74oqB7VZLMD9-o4xbevu_sg.PNG/f_menu4.png",
  "https://cafefiles.pstatic.net/MjAyMDAxMzFfMjY0/MDAxNTgwNDUwNTk2MDE0.J999faYX5hmE2UAWPrP9uIQE40P_58mWAkpNB3ON6aMg.Qh5uJpCxHLNs-wdJa0X2H7VQ4WFEDsBkR0zfCM-LWGog.PNG/f_menu5.png",
  "https://cafefiles.pstatic.net/MjAyMDAxMzFfNDUg/MDAxNTgwNDUwNTk2NDI0.p7ucwm2bCAbrVuL7JRrtBGg02EB1uOOuvM7uyGSePEUg.hnAS3ji0TRxc4Fne4Yk82Tp0XsoDXp_S_hr2SSSOVA4g.PNG/f_menu6.png",
  "https://cafefiles.pstatic.net/MjAyMDAxMzFfMTAg/MDAxNTgwNDUwNTk2NzIy.E-k2yZShzfsqLLEkawFEdtVn8p5GG11duVg6rZGm-pkg.jJFLMs-bkrYcvcQYv7lbPe9twhy64ph9W3Z3HpUMuOgg.PNG/f_menu7.png",
  "https://cafefiles.pstatic.net/MjAyMDAxMzFfNDUg/MDAxNTgwNDUwNTk2OTg0.ChN-aCm1SxOQbrdGatNOhoLtF0nu5Npwkk8XUxDg-SUg.bWNr6eL3W4XOP9C_V_VCLO25MaPpwvO1DPK8PL2uElAg.PNG/f_menu8.png",
  "https://cafefiles.pstatic.net/MjAyMDAxMzFfNTEg/MDAxNTgwNDUwNTk3MzI2.hPlJvLkzFw8lKcP3fuvuiSBBGMG5pttnzKQq9x3mYzMg.u3IrOxt0POeLgo0Sc_fSvF8cAiJ9yr7H1ifl-XDN0DUg.PNG/f_menu9.png"
);

let resource_youtube = "https://cafefiles.pstatic.net/MjAyMDAyMDlfMjQ4/MDAxNTgxMjQ2NzQ4MTEw.NjCjUguLXoZqDD55Pxd7OwUqcF8_Q4cmadD49pd3G38g.SOsaV8rpF1wOxEcpVeqAL2u_pz-IKXJWszR4O8zx5J8g.PNG/f_youtube.png";
let resource_best = "https://cafefiles.pstatic.net/MjAyMDAyMDlfMjUy/MDAxNTgxMjQ2NzQ3MjY4.cbZuwZdxM0f6Up9GlHx8A9fqRj-8LCFxGrFPdpWNPBUg.YAAQR3nrmTCBOLwemMJONN4GsWHqrxgZeetQw0TTmhAg.PNG/f_best.png";
let resource_sponsor = "https://cafefiles.pstatic.net/MjAyMDAyMDlfMjQ0/MDAxNTgxMjQ2NzQ3NjA3.mdioIo4BGQP_2_eWw9Qe_RVDa2pwg0_eAQ4XAf02T9Yg.Q_k8BjPwyBvcJ-BPMtM4D4y5ofV8BzOyLD4rDSHS9B8g.PNG/f_sponsor.png";
let resource_post = "https://cafefiles.pstatic.net/MjAyMDAyMDlfMTA1/MDAxNTgxMjQ2NzQ4NTE1.wcFiMearvf0P0TdGM2jAO-r4kjU7d54jQCs7xVCKpnQg.yD7JVYVwV3el9DALBM7X8xgtG3_xmMcmZPOm7Ygez6Mg.PNG/f_post.png";
let resource_copyright = "https://cafefiles.pstatic.net/MjAyMDAyMDlfMTYy/MDAxNTgxMjQ2NzQ4ODE3.aGGeryhEH0V_Rc2ITEtzRQDCfbA5_vDutc8qZXTGxdog.76EfLwIIdk_854QkXrzaz1-yMqMjJOoQ69gFsZ3e2Vsg.PNG/f_copyright.png";

let btn_url_best = "https://cafe.naver.com/develoid/menu/1363";
let btn_url_sponsor = "https://cafe.naver.com/develoid/menu/604";
let btn_url_post = "https://cafe.naver.com/develoid/menu/1312";

// Best Photo
function ControlBp(type) {
  if(type == "add") {
    bp_cnt++;
    $('#bp').append('<tr id="bp_'+bp_cnt+'"><td>'+bp_cnt+'</td><td><input type="text" id="bp_i'+bp_cnt+'"></td><td><input type="number" id="bp_u'+bp_cnt+'"></td></tr>');
  } else if(type == "rm") {
    if(bp_cnt > 0) {
      let target = "#bp_" + bp_cnt;
      $(target).remove();
      bp_cnt--;
    } else {
      alert('error - no target');
    }
  }
}


// AD Banner Control
function ControlAd(type) {
  if(type == "add") {
    ad_cnt++;
    $('#ad').append('<tr id="ad_'+ad_cnt+'"><td>'+ad_cnt+'</td><td><input type="text" id="ad_i'+ad_cnt+'"></td><td><input type="number" id="ad_u'+ad_cnt+'"></td></tr>');
  } else if(type == "rm") {
    if(ad_cnt > 0) {
      let target = "#ad_" + ad_cnt;
      $(target).remove();
      ad_cnt--;
    } else {
      alert('error - no target');
    }
  }
}

// Youtube Control
function ControlYt(type) {
  if(type == "add") {
    for(let i=0; i<2; i++) {
      yt_cnt++;
      $('#yt').append('<tr id="yt_'+yt_cnt+'"><td>'+yt_cnt+'</td><td><input type="text" id="yt_u'+yt_cnt+'"></td></tr>');
    }
  } else if(type == "rm") {
    if(yt_cnt > 0) {
      for(let i=0; i<2; i++) {
        let target = "#yt_" + yt_cnt;
        $(target).remove();
        yt_cnt--;
      }
    } else {
      alert('error - no target');
    }
  }
}

// Best Control
function ControlBt(type) {
  if(type == "add") {
    for(let i=0; i<4; i++) {
      bt_cnt++;
      $('#bt').append('<tr id="bt_'+bt_cnt+'"><td>'+bt_cnt+'</td><td><input type="text" id="bt_i'+bt_cnt+'"></td><td><input type="number" id="bt_u'+bt_cnt+'"></td></tr>');
    }
  } else if(type == "rm") {
    if(bt_cnt > 0) {
      for(let i=0; i<4; i++) {
        let target = "#bt_" + bt_cnt;
        $(target).remove();
        bt_cnt--;
      }
    } else {
      alert('error - no target');
    }
  }
}

// Sponsor Control
function ControlSp(type) {
  if(type == "add") {
    for(let i=0; i<4; i++) {
      sp_cnt++;
      $('#sp').append('<tr id="sp_'+sp_cnt+'"><td>'+sp_cnt+'</td><td><input type="text" id="sp_i'+sp_cnt+'"></td><td><input type="text" id="sp_u'+sp_cnt+'"></td></tr>');
    }
  } else if(type == "rm") {
    if(sp_cnt > 0) {
      for(let i=0; i<4; i++) {
        let target = "#sp_" + sp_cnt;
        $(target).remove();
        sp_cnt--;
      }
    } else {
      alert('error - no target');
    }
  }
}

// Post Control
function ControlPt(type) {
  if(type == "add") {
    for(let i=0; i<4; i++) {
      pt_cnt++;
      $('#pt').append('<tr id="pt_'+pt_cnt+'"><td>'+pt_cnt+'</td><td><input type="number" id="pt_i'+pt_cnt+'"></td><td><input type="text" id="pt_u'+pt_cnt+'"></td></tr>');
    }
  } else if(type == "rm") {
    if(pt_cnt > 0) {
      for(let i=0; i<4; i++) {
        let target = "#pt_" + pt_cnt;
        $(target).remove();
        pt_cnt--;
      }
    } else {
      alert('error - no target');
    }
  }
}

// Data Check 1
function DataCheck(item) {
  if( item == "" || item == null || item == undefined || ( item != null && typeof item == "object" && !Object.keys(item).length ) ){
    return "";
  } else {
    return item;
  }
}

// Data Check 2
function DataCheckBool(item) {
  if( item == "" || item == null || item == undefined || ( item != null && typeof item == "object" && !Object.keys(item).length ) ){
    return false;
  } else {
    return true;
  }
}

// Cafe Front Make
function Make() {
  let page = "<!-- Develoid Front v2020.01 / Design by 밤푸딩 / Edit by SiRyuA -->"

  let bp_array = new Array();
  let ad_array = new Array();
  let yt_array = new Array();
  let bt_array = new Array();
  let sp_array = new Array();
  let pt_array = new Array();

  // Best Photo
  for(let i=0; i<bp_cnt; i++) {
    let temp = new Array();
    let num = i+1;
    console.log(num);
    let temp0 = "bp_i" + num,
        temp1 = "bp_u" + num;

    temp[0] = DataCheck(document.getElementById(temp0).value);
    temp[1] = DataCheck(document.getElementById(temp1).value);
    bp_array.push(temp);
  }

  // AD Banner
  for(let i=0; i<ad_cnt; i++) {
    let temp = new Array();
    let num = i+1;
    console.log(num);
    let temp0 = "ad_i" + num,
        temp1 = "ad_u" + num;

    temp[0] = DataCheck(document.getElementById(temp0).value);
    temp[1] = DataCheck(document.getElementById(temp1).value);
    ad_array.push(temp);
  }

  // Youtube
  for(let i=0; i<yt_cnt; i++) {
    let num = i+1;
    console.log(num);
    let temp_id = "yt_u" + num;
    let temp = DataCheck(document.getElementById(temp_id).value);

    if(temp != null) {
      temp = temp.replace("https://youtu.be/", "https://www.youtube.com/embed/");
      temp += "?wmode=opaque";
    }
    yt_array.push(temp);
  }

  // Best
  for(let i=0; i<bt_cnt; i++) {
    let temp = new Array();
    let num = i+1;
    console.log(num);
    let temp0 = "bt_i" + num,
        temp1 = "bt_u" + num;

    temp[0] = DataCheck(document.getElementById(temp0).value);
    temp[1] = DataCheck(document.getElementById(temp1).value);
    bt_array.push(temp);
  }

  // Sponsor
  for(let i=0; i<sp_cnt; i++) {
    let temp = new Array();
    let num = i+1;
    console.log(num);
    let temp0 = "sp_i" + num,
        temp1 = "sp_u" + num;

    temp[0] = DataCheck(document.getElementById(temp0).value);
    temp[1] = DataCheck(document.getElementById(temp1).value);
    sp_array.push(temp);
  }

  // Post
  for(let i=0; i<pt_cnt; i++) {
    let temp = new Array();
    let num = i+1;
    console.log(num);
    let temp0 = "pt_i" + num,
        temp1 = "pt_u" + num;

    temp[0] = DataCheck(document.getElementById(temp0).value);
    temp[1] = DataCheck(document.getElementById(temp1).value);
    pt_array.push(temp);
  }

  page += "<center>";

  // Menu
  page += "<table width='836' height='45' cellspacing='0' cellpadding='0'><tbody><tr>"
       +  "<td><a href='"+menu_url[0]+"' target='_blank'><img id='"+menu_resource[0]+"' src='"+menu_resource[0]+"' width='99' height='45' style='width: 99px; height: 45px;'></a></td>";

  for(let i=1; i<9; i++) {
    page += "<td><a href='"+menu_url[i]+"' target='_blank'><img id='"+menu_resource[i]+"' src='"+menu_resource[i]+"' width='92' height='45' style='width: 92px; height: 45px;'></a></td>";
  }

  page += "</tr></tbody></table>"

  // Best Photo & AD Banner
  if(bp_cnt > 0 || ad_cnt > 0) {
    console.log(bp_array);
    page += "<table width='836' cellspacing='0' cellpadding='0' style='margin-top:4px;'><tbody>";

    if(bp_cnt > 0) {
      page += "<tr><td><a href='"+bp_array[0][1]+"' target='_blank'><img id='"+bp_array[0][0]+"' src='"+bp_array[0][0]+"' width='836' height='495' style='width: 836px; height: 495px;'></a></td></tr>"
    }

    console.log(ad_array);
    if(ad_cnt > 0) {
      for(let i=0; i<ad_array.length; i++) {
        page += "<tr><td><a href='"+ad_array[i][1]+"' target='_blank'><img id='"+ad_array[i][0]+"' src='"+ad_array[i][0]+"' width='836' height='100' style='width: 836px; height: 100px;'></a></td></tr>"
      }
    }

    page += "</tbody></table>"
  }

  // Youtube
  if(yt_cnt > 0) {
    console.log(yt_array);
    page += "<div width='836' height='24' style='margin:12px 0 0 0;'><a href='"+menu_url[5]+"' style='text-decoration:none;' target='_blank'><img id='"+resource_youtube+"' src='"+resource_youtube+"' width='836' height='24' style='width: 836px; height: 24px;'></a></div>";
    page += "<table width='836' height='225' cellspacing='12' cellpadding='0'><tbody>";

    for(let i=0; i<yt_array.length; i+=2) {
      page += "<tr>";
      for(let j=0; j<2; j++) {
        page += "<td><iframe src='"+yt_array[i+j]+"' width='400px' height='225px' frameborder='0' scrolling='no' allowfullscreen=''></iframe></td>";
      }
      page += "</tr>";
    }
    page += "</tbody></table>";
  }

  // Best
  if(bt_cnt > 0) {
    console.log(bt_array);
    page += "<div width='836' height='24' style='margin:12px 0 0 0;'><a href='"+btn_url_best+"' style='text-decoration:none;' target='_blank'><img id='"+resource_best+"' src='"+resource_best+"' width='836' height='24' style='width: 836px; height: 24px;'></a></div>";
    page += "<table width='836' cellspacing='12' cellpadding='0'><tbody>";

    for(let i=0; i<bt_array.length; i+=4) {
      page += "<tr>";
      for(let j=0; j<4; j++) {
        page += "<td><a href='"+bt_array[i+j][1]+"' target='_blank'><img id='"+bt_array[i+j][0]+"' src='"+bt_array[i+j][0]+"' width='194' height='194' style='width: 194px; height: 194px;'></a></td>";
      }
      page += "</tr>";
    }

    page += "</tbody></table>";
  }

  // Sponsor
  if(sp_cnt > 0) {
    console.log(sp_array);
    page += "<div width='836' height='24' style='margin:12px 0 0 0;'><a href='"+btn_url_sponsor+"' style='text-decoration:none;' target='_blank'><img id='"+resource_sponsor+"' src='"+resource_sponsor+"' width='836' height='24' style='width: 836px; height: 24px;'></a></div>";
    page += "<table width='836' cellspacing='12' cellpadding='0'><tbody>";

    for(let i=0; i<sp_array.length; i+=4) {
      page += "<tr>";
      for(let j=0; j<4; j++) {
        page += "<td><a href='"+sp_array[i+j][1]+"' target='_blank'><img id='"+sp_array[i+j][0]+"' src='"+sp_array[i+j][0]+"' width='194' height='194' style='width: 194px; height: 194px;'></a></td>";
      }
      page += "</tr>";
    }

    page += "</tbody></table>";
  }

  // Post
  if(pt_cnt > 0) {
    console.log(pt_array);
    page += "<div width='836' height='24' style='margin:12px 0 0 0;'><a href='"+btn_url_post+"' style='text-decoration:none;' target='_blank'><img id='"+resource_post+"' src='"+resource_post+"' width='836' height='24' style='width: 836px; height: 24px;'></a></div>";
    page += "<table width='836' cellspacing='12' cellpadding='0'><tbody>";

    for(let i=0; i<pt_array.length; i+=4) {
      page += "<tr>";
      for(let j=0; j<4; j++) {
        page += "<td><a href='"+pt_array[i+j][1]+"' target='_blank'><img id='"+pt_array[i+j][0]+"' src='"+pt_array[i+j][0]+"' width='194' height='194' style='width: 194px; height: 194px;'></a></td>";
      }
      page += "</tr>";
    }

    page += "</tbody></table>";
  }

  // Copyright
  page += "<div width='836' style='padding:20px 0 40px;'>"
       +  "<img src='"+resource_copyright+"' width='836' height='35' style='width: 836px; height: 35px;'>"
       +  "</div>";

  page += "</center>";

  document.getElementById("view").innerHTML = page;
  document.getElementById("code").value = page;
}

// Code Copy
function CodeCopy() {
  var copyText = document.getElementById("code");
  copyText.select();
  document.execCommand("copy");
}

// Code Save
function CodeSave() {
    let now = new Date();
    let y = now.getFullYear();
    let m = now.getMonth() + 1;
    let d = now.getDate();
    let h = now.getHours();
    let mm = now.getMinutes();
    let s = now.getSeconds();

    if(m < 10) m = "0" + m;
    if(d < 10) d = "0" + d;

    let fileName = "DVL-CFM-"+y+m+d+h+mm+s;

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
