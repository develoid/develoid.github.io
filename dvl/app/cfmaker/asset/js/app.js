let cntBp = 1;
let cntAd = 2;
let cntYt = 2;
let cntBt = 4;
let cntSp = 4;
let cntPt = 4;

let arrayBp = new Array();
let arrayAd = new Array();
let arrayYt = new Array();
let arrayBt = new Array();
let arraySp = new Array();
let arrayPt = new Array();

let page;

let urlMenu = new Array(
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

let resourceMenu = new Array(
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

let resourceYoutube = "https://cafefiles.pstatic.net/MjAyMDAyMDlfMjQ4/MDAxNTgxMjQ2NzQ4MTEw.NjCjUguLXoZqDD55Pxd7OwUqcF8_Q4cmadD49pd3G38g.SOsaV8rpF1wOxEcpVeqAL2u_pz-IKXJWszR4O8zx5J8g.PNG/f_youtube.png";
let resourceBest = "https://cafefiles.pstatic.net/MjAyMDAyMDlfMjUy/MDAxNTgxMjQ2NzQ3MjY4.cbZuwZdxM0f6Up9GlHx8A9fqRj-8LCFxGrFPdpWNPBUg.YAAQR3nrmTCBOLwemMJONN4GsWHqrxgZeetQw0TTmhAg.PNG/f_best.png";
let resourceSponsor = "https://cafefiles.pstatic.net/MjAyMDAyMDlfMjQ0/MDAxNTgxMjQ2NzQ3NjA3.mdioIo4BGQP_2_eWw9Qe_RVDa2pwg0_eAQ4XAf02T9Yg.Q_k8BjPwyBvcJ-BPMtM4D4y5ofV8BzOyLD4rDSHS9B8g.PNG/f_sponsor.png";
let resourcePost = "https://cafefiles.pstatic.net/MjAyMDAyMDlfMTA1/MDAxNTgxMjQ2NzQ4NTE1.wcFiMearvf0P0TdGM2jAO-r4kjU7d54jQCs7xVCKpnQg.yD7JVYVwV3el9DALBM7X8xgtG3_xmMcmZPOm7Ygez6Mg.PNG/f_post.png";
let resourceCopyright = "https://cafefiles.pstatic.net/MjAyMDAyMDlfMTYy/MDAxNTgxMjQ2NzQ4ODE3.aGGeryhEH0V_Rc2ITEtzRQDCfbA5_vDutc8qZXTGxdog.76EfLwIIdk_854QkXrzaz1-yMqMjJOoQ69gFsZ3e2Vsg.PNG/f_copyright.png";

let urlBest = "https://cafe.naver.com/develoid/menu/1363";
let urlSponsor = "https://cafe.naver.com/develoid/menu/604";
let urlPost = "https://cafe.naver.com/develoid/menu/1312";

// Best Photo
function ControlBp(type) {
  if(type == "add") {
    cntBp++;
    $('#bp').append('<tr id="bp_'+cntBp+'"><td>'+cntBp+'</td><td><input type="text" id="bp_i'+cntBp+'"></td><td><input type="number" id="bp_u'+cntBp+'"></td></tr>');
  } else if(type == "rm") {
    if(cntBp > 0) {
      let target = "#bp_" + cntBp;
      $(target).remove();
      cntBp--;
    } else {
      alert('no target');
    }
  }
}


// AD Banner Control
function ControlAd(type) {
  if(type == "add") {
    cntAd++;
    $('#ad').append('<tr id="ad_'+cntAd+'"><td>'+cntAd+'</td><td><input type="text" id="ad_i'+cntAd+'"></td><td><input type="text" id="ad_u'+cntAd+'"></td></tr>');
  } else if(type == "rm") {
    if(cntAd > 0) {
      let target = "#ad_" + cntAd;
      $(target).remove();
      cntAd--;
    } else {
      alert('no target');
    }
  }
}

// Youtube Control
function ControlYt(type) {
  if(type == "add") {
    for(let i=0; i<2; i++) {
      cntYt++;
      $('#yt').append('<tr id="yt_'+cntYt+'"><td>'+cntYt+'</td><td><input type="text" id="yt_u'+cntYt+'"></td></tr>');
    }
  } else if(type == "rm") {
    if(cntYt > 0) {
      for(let i=0; i<2; i++) {
        let target = "#yt_" + cntYt;
        $(target).remove();
        cntYt--;
      }
    } else {
      alert('no target');
    }
  }
}

// Best Control
function ControlBt(type) {
  if(type == "add") {
    for(let i=0; i<4; i++) {
      cntBt++;
      $('#bt').append('<tr id="bt_'+cntBt+'"><td>'+cntBt+'</td><td><input type="text" id="bt_i'+cntBt+'"></td><td><input type="number" id="bt_u'+cntBt+'"></td></tr>');
    }
  } else if(type == "rm") {
    if(cntBt > 0) {
      for(let i=0; i<4; i++) {
        let target = "#bt_" + cntBt;
        $(target).remove();
        cntBt--;
      }
    } else {
      alert('no target');
    }
  }
}

// Sponsor Control
function ControlSp(type) {
  if(type == "add") {
    for(let i=0; i<4; i++) {
      cntSp++;
      $('#sp').append('<tr id="sp_'+cntSp+'"><td>'+cntSp+'</td><td><input type="text" id="sp_i'+cntSp+'"></td><td><input type="text" id="sp_u'+cntSp+'"></td></tr>');
    }
  } else if(type == "rm") {
    if(cntSp > 0) {
      for(let i=0; i<4; i++) {
        let target = "#sp_" + cntSp;
        $(target).remove();
        cntSp--;
      }
    } else {
      alert('no target');
    }
  }
}

// Post Control
function ControlPt(type) {
  if(type == "add") {
    for(let i=0; i<4; i++) {
      cntPt++;
      $('#pt').append('<tr id="pt_'+cntPt+'"><td>'+cntPt+'</td><td><input type="text" id="pt_i'+cntPt+'"></td><td><input type="number" id="pt_u'+cntPt+'"></td></tr>');
    }
  } else if(type == "rm") {
    if(cntPt > 0) {
      for(let i=0; i<4; i++) {
        let target = "#pt_" + cntPt;
        $(target).remove();
        cntPt--;
      }
    } else {
      alert('no target');
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
  arrayBp = new Array();
  arrayAd = new Array();
  arrayYt = new Array();
  arrayBt = new Array();
  arraySp = new Array();
  arrayPt = new Array();

  page = "<!-- Develoid Front v2020.01 / Design by 밤푸딩 / Edit by SiRyuA -->"

  // Best Photo
  for(let i=0; i<cntBp; i++) {
    let temp = new Object();
    let num = i+1;
    console.log(num);
    let temp0 = "bp_i" + num,
        temp1 = "bp_u" + num;

    temp.img = DataCheck(document.getElementById(temp0).value);
    temp.url = DataCheck(document.getElementById(temp1).value);
    arrayBp.push(temp);
  }

  // AD Banner
  for(let i=0; i<cntAd; i++) {
    let temp = new Object();
    let num = i+1;
    console.log(num);
    let temp0 = "ad_i" + num,
        temp1 = "ad_u" + num;

    temp.img = DataCheck(document.getElementById(temp0).value);
    temp.url = DataCheck(document.getElementById(temp1).value);
    arrayAd.push(temp);
  }

  // Youtube
  for(let i=0; i<cntYt; i++) {
    let num = i+1;
    console.log(num);
    let temp_id = "yt_u" + num;
    let temp = DataCheck(document.getElementById(temp_id).value);

    if(temp != "") {
      temp = temp.replace("https://youtu.be/", "https://www.youtube.com/embed/");
      temp += "?wmode=opaque";
    }
    arrayYt.push(temp);
  }

  // Best
  for(let i=0; i<cntBt; i++) {
    let temp = new Object();
    let num = i+1;
    console.log(num);
    let temp0 = "bt_i" + num,
        temp1 = "bt_u" + num;

    temp.img = DataCheck(document.getElementById(temp0).value);
    temp.url = DataCheck(document.getElementById(temp1).value);
    arrayBt.push(temp);
  }

  // Sponsor
  for(let i=0; i<cntSp; i++) {
    let temp = new Object();
    let num = i+1;
    console.log(num);
    let temp0 = "sp_i" + num,
        temp1 = "sp_u" + num;

    temp.img = DataCheck(document.getElementById(temp0).value);
    temp.url = DataCheck(document.getElementById(temp1).value);
    arraySp.push(temp);
  }

  // Post
  for(let i=0; i<cntPt; i++) {
    let temp = new Object();
    let num = i+1;
    console.log(num);
    let temp0 = "pt_i" + num,
        temp1 = "pt_u" + num;

    temp.img = DataCheck(document.getElementById(temp0).value);
    temp.url = DataCheck(document.getElementById(temp1).value);
    arrayPt.push(temp);
  }

  page += "<center>";

  // Menu
  page += "<table width='836' height='45' cellspacing='0' cellpadding='0'><tbody><tr>"
       +  "<td><a href='"+urlMenu[0]+"' target='_blank'><img id='"+resourceMenu[0]+"' src='"+resourceMenu[0]+"' width='99' height='45' style='width: 99px; height: 45px;'></a></td>";

  for(let i=1; i<9; i++) {
    page += "<td><a href='"+urlMenu[i]+"' target='_blank'><img id='"+resourceMenu[i]+"' src='"+resourceMenu[i]+"' width='92' height='45' style='width: 92px; height: 45px;'></a></td>";
  }

  page += "</tr></tbody></table>"

  // Best Photo & AD Banner
  if(cntBp > 0 || cntAd > 0) {
    console.log(arrayBp);
    page += "<table width='836' cellspacing='0' cellpadding='0' style='margin-top:4px;'><tbody>";

    if(cntBp > 0) {
      page += "<tr><td><a href='https://cafe.naver.com/develoid/"+arrayBp[0].url+"' target='_blank'><img id='"+arrayBp[0].img+"' src='"+arrayBp[0].img+"' width='836' height='495' style='width: 836px; height: 495px;'></a></td></tr>"
    }

    console.log(arrayAd);
    if(cntAd > 0) {
      for(let i=0; i<arrayAd.length; i++) {
        page += "<tr><td><a href='"+arrayAd[i].url+"' target='_blank'><img id='"+arrayAd[i].img+"' src='"+arrayAd[i].img+"' width='836' height='100' style='width: 836px; height: 100px;'></a></td></tr>"
      }
    }

    page += "</tbody></table>"
  }

  // Youtube
  if(cntYt > 0) {
    console.log(arrayYt);
    page += "<div width='836' height='24' style='margin:12px 0 0 0;'><a href='"+urlMenu[5]+"' style='text-decoration:none;' target='_blank'><img id='"+resourceYoutube+"' src='"+resourceYoutube+"' width='836' height='24' style='width: 836px; height: 24px;'></a></div>";
    page += "<table width='836' height='225' cellspacing='12' cellpadding='0'><tbody>";

    for(let i=0; i<arrayYt.length; i+=2) {
      page += "<tr>";
      for(let j=0; j<2; j++) {
        page += "<td><iframe src='"+arrayYt[i+j]+"' width='400px' height='225px' frameborder='0' scrolling='no' allowfullscreen=''></iframe></td>";
      }
      page += "</tr>";
    }
    page += "</tbody></table>";
  }

  // Best
  if(cntBt > 0) {
    console.log(arrayBt);
    page += "<div width='836' height='24' style='margin:12px 0 0 0;'><a href='"+urlBest+"' style='text-decoration:none;' target='_blank'><img id='"+resourceBest+"' src='"+resourceBest+"' width='836' height='24' style='width: 836px; height: 24px;'></a></div>";
    page += "<table width='836' cellspacing='12' cellpadding='0'><tbody>";

    for(let i=0; i<arrayBt.length; i+=4) {
      page += "<tr>";
      for(let j=0; j<4; j++) {
        let inimg = arrayBt[i+j].img;
        let inurl = arrayBt[i+j].url

        if(inimg.length > 0) {
          page += "<td><a href='"+inurl+"' target='_blank'><img id='"+inimg+"' src='"+inimg+"' width='194' height='194' style='width: 194px; height: 194px;'></a></td>";
        } else {
          page += "<td></td>";
        }
      }
      page += "</tr>";
    }

    page += "</tbody></table>";
  }

  // Sponsor
  if(cntSp > 0) {
    console.log(arraySp);
    page += "<div width='836' height='24' style='margin:12px 0 0 0;'><a href='"+urlSponsor+"' style='text-decoration:none;' target='_blank'><img id='"+resourceSponsor+"' src='"+resourceSponsor+"' width='836' height='24' style='width: 836px; height: 24px;'></a></div>";
    page += "<table width='836' cellspacing='12' cellpadding='0'><tbody>";

    for(let i=0; i<arraySp.length; i+=4) {
      page += "<tr>";
      for(let j=0; j<4; j++) {
        let inimg = arraySp[i+j].img;
        let inurl = arraySp[i+j].url

        if(inimg.length > 0) {
          page += "<td><a href='"+inurl+"' target='_blank'><img id='"+inimg+"' src='"+inimg+"' width='194' height='194' style='width: 194px; height: 194px;'></a></td>";
        } else {
          page += "<td></td>";
        }
      }
      page += "</tr>";
    }

    page += "</tbody></table>";
  }

  // Post
  if(cntPt > 0) {
    console.log(arrayPt);
    page += "<div width='836' height='24' style='margin:12px 0 0 0;'><a href='"+urlPost+"' style='text-decoration:none;' target='_blank'><img id='"+resourcePost+"' src='"+resourcePost+"' width='836' height='24' style='width: 836px; height: 24px;'></a></div>";
    page += "<table width='836' cellspacing='12' cellpadding='0'><tbody>";

    for(let i=0; i<arrayPt.length; i+=4) {
      page += "<tr>";
      for(let j=0; j<4; j++) {
        let inimg = arrayPt[i+j].img;
        let inurl = arrayPt[i+j].url

        if(inimg.length > 0) {
          page += "<td><a href='https://cafe.naver.com/develoid/"+inurl+"' target='_blank'><img id='"+inimg+"' src='"+inimg+"' width='194' height='194' style='width: 194px; height: 194px;'></a></td>";
        } else {
          page += "<td></td>";
        }
      }
      page += "</tr>";
    }

    page += "</tbody></table>";
  }

  // Copyright
  page += "<div width='836' style='padding:20px 0 40px;'>"
       +  "<img src='"+resourceCopyright+"' width='836' height='35' style='width: 836px; height: 35px;'>"
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

  let fileName = "DVL-CFM-CODE-"+y+m+d+h+mm+s+".txt";

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

// JSON Save
function JSONSave() {
  let now = new Date();
  let y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();
  let h = now.getHours();
  let mm = now.getMinutes();
  let s = now.getSeconds();

  if(m < 10) m = "0" + m;
  if(d < 10) d = "0" + d;

  let fileName = "DVL-CFM-JSON-"+y+m+d+h+mm+s+".json";

  let json = {time: ""+y+m+d+h+mm+s, bp: cntBp, ad: cntAd, yt: cntYt, bt: cntBt, sp: cntSp, pt: cntPt, dataBp: arrayBp, dataAd: arrayAd, dataYt: arrayYt, dataBt: arrayBt, dataSp: arraySp, dataPt: arrayPt};
  console.log(json);

  let content = JSON.stringify(json);

  let blob = new Blob([content], { type: 'json' });

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

// JSON READ
function openFile() {
  var input = document.createElement("input");

  input.type = "file";
  input.accept = "json";

  input.onchange = function (event) {
      processFile(event.target.files[0]);
  };

  input.click();
}

function processFile(file) {
  var reader = new FileReader();

  reader.onload = function () {
    let getData = reader.result;
    //jsondata.value = getData;
    readData(getData);
  };

  reader.readAsText(file, "utf-8");
}

function readData(data) {
  let json = JSON.parse(data);
  console.log(json);

  let getBp = json.bp;
  let getAd = json.ad;
  let getYt = json.yt;
  let getBt = json.bt;
  let getSp = json.sp;
  let getPt = json.pt;

  let dataBp = json.dataBp;
  let dataAd = json.dataAd;
  let dataYt = json.dataYt;
  let dataBt = json.dataBt;
  let dataSp = json.dataSp;
  let dataPt = json.dataPt;

  let ti;
  let tu;

  console.log(getBp, getAd, getYt, getBt, getSp, getPt);
  console.log(dataBp, dataAd, dataYt, dataBt, dataSp, dataPt);
  console.log(dataBp.length, dataYt.length, dataAd.length, dataBt.length, dataSp.length, dataPt.length);

  if(cntBp != getBp) {
    let gapBp = getBp - cntBp;

    loopBp = Math.abs(gapBp/1);

    if(gapBp > 0) {
      for(let i=0; i<loopBp; i++) {
        ControlBp("add");
      }
    } else if(gapBp < 0) {
      for(let i=0; i<loopBp; i++) {
        ControlBp("rm");
      }
    }
  }

  for(let i=0; i<dataBp.length; i++) {
    ti = "bp_i" + (i+1);
    tu = "bp_u" + (i+1);

    console.log("bp", dataBp[i].img, dataBp[i].url);

    document.getElementById(ti).value = dataBp[i].img;
    document.getElementById(tu).value = dataBp[i].url;
  }

  if(cntAd != getAd) {
    let gapAd = getAd - cntAd;
    console.log("gapAd", gapAd);

    loopAd = Math.abs(gapAd/4);

    if(gapAd > 0) {
      for(let i=0; i<loopAd; i++) {
        ControlAd("add");
      }
    } else if(gapAd < 0) {
      for(let i=0; i<loopAd; i++) {
        ControlAd("rm");
      }
    }
  }

  for(let i=0; i<dataAd.length; i++) {
    ti = "ad_i" + (i+1);
    tu = "ad_u" + (i+1);

    console.log("yt", dataAd[i].img, dataAd[i].url);

    document.getElementById(ti).value = dataAd[i].img;
    document.getElementById(tu).value = dataAd[i].url;
  }

  if(cntYt != getYt) {
    let gapYt = getYt - cntYt;

    loopYt = Math.abs(gapYt/2);

    if(gapYt > 0) {
      for(let i=0; i<loopYt; i++) {
        ControlYt("add");
      }
    } else if(gapYt < 0) {
      for(let i=0; i<loopYt; i++) {
        ControlYt("rm");
      }
    }
  }

  for(let i=0; i<dataYt.length; i++) {
    tu = "yt_u" + (i+1);

    console.log("ad", dataYt[i]);

    document.getElementById(tu).value = dataYt[i];
  }

  if(cntBt != getBt) {
    let gapBt = getBt - cntBt;

    loopBt = Math.abs(gapBt/4);

    if(gapBt > 0) {
      for(let i=0; i<loopBt; i++) {
        ControlBt("add");
      }
    } else if(gapBt < 0) {
      for(let i=0; i<loopBt; i++) {
        ControlBt("rm");
      }
    }
  }

  for(let i=0; i<dataBt.length; i++) {
    ti = "bt_i" + (i+1);
    tu = "bt_u" + (i+1);

    console.log("bt", dataBt[i].img, dataBt[i].url);

    document.getElementById(ti).value = dataBt[i].img;
    document.getElementById(tu).value = dataBt[i].url;
  }

  if(cntSp != getSp) {
    let gapSp = getSp - cntSp;

    loopSp = Math.abs(gapSp/4);

    if(gapSp > 0) {
      for(let i=0; i<loopSp; i++) {
        ControlSp("add");
      }
    } else if(gapSp < 0) {
      for(let i=0; i<loopSp; i++) {
        ControlSp("rm");
      }
    }
  }

  for(let i=0; i<dataSp.length; i++) {
    ti = "sp_i" + (i+1);
    tu = "sp_u" + (i+1);

    console.log("sp", dataSp[i].img, dataSp[i].url);

    document.getElementById(ti).value = dataSp[i].img;
    document.getElementById(tu).value = dataSp[i].url;
  }

  if(cntPt != getPt) {
    let gapPt = getPt - cntPt;

    loopPt = Math.abs(gapPt/4);

    if(gapPt > 0) {
      for(let i=0; i<loopPt; i++) {
        ControlPt("add");
      }
    } else if(gapPt < 0) {
      for(let i=0; i<loopPt; i++) {
        ControlPt("rm");
      }
    }
  }

  for(let i=0; i<dataPt.length; i++) {
    ti = "pt_i" + (i+1);
    tu = "pt_u" + (i+1);

    console.log("pt", dataPt[i].img, dataPt[i].url);

    document.getElementById(ti).value = dataPt[i].img;
    document.getElementById(tu).value = dataPt[i].url;
  }
}
