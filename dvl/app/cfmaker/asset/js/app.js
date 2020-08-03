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
  "https://cafe.naver.com/develoid/menu/1",
  "https://cafe.naver.com/develoid/menu/1200",
  "https://develoid.github.io/op/",
  "https://cafe.naver.com/develoid/menu/1436",
  "https://cafe.naver.com/develoid/menu/604",
  "https://goo.gl/forms/Lrxz08x3oB3XLuJ62"
);

let resourceMenu = new Array(
  "https://cafefiles.pstatic.net/MjAyMDA4MDNfMTcw/MDAxNTk2NDQ4MjE0NDI0.vhK4pUfPkhZNE7sy6Hzm3pXrsyTu86rzria1NOQmD4kg.tYd-Zu46iHWtuLl_Eept-hE6v4vdiJeIJ8ELU5SE35wg.PNG/front_menu0.png",
  "https://cafefiles.pstatic.net/MjAyMDA4MDNfMTA1/MDAxNTk2NDQ4MjE0NzA5.dGbQT_TJvqkTfycjaJ4LHVQQSPpQ1tuaqeTPTSzS3aEg.2k7tPWN1fSCkyUGgpbu-P5nmxLuhCZxwRc76h3qAtRsg.PNG/front_menu1.png",
  "https://cafefiles.pstatic.net/MjAyMDA4MDNfMjYg/MDAxNTk2NDQ4MjE0OTQ2.Gcmj8M2k6O2i88prZCojKkV9Q79J4R_2P-z6BhQSP6kg.R1L30IUbGIKyLtSLzpFRo03Orn3yKrp6Y6k6PEOhJM8g.PNG/front_menu2.png",
  "https://cafefiles.pstatic.net/MjAyMDA4MDNfMTU0/MDAxNTk2NDQ4MjE1MjM4.fo_ljUyzpZe2CeeRv2RzcKA9VUjJAkzeoSvCYXPH9Ewg.s6dTB0MH8eAXlgZWXonsghVvIO7cSR9Rvm6kvqSwiagg.PNG/front_menu3.png",
  "https://cafefiles.pstatic.net/MjAyMDA4MDNfMjIx/MDAxNTk2NDQ4MjE1NTA2.PTUxkzBKqSUt5RmBxT6TmeE15mWq3AKD9akZ5fKMnlIg.E_tRt_-18aKhu-kzTgrdolQwkoN991HMKFsD1O4eRj0g.PNG/front_menu4.png",
  "https://cafefiles.pstatic.net/MjAyMDA4MDNfMjA1/MDAxNTk2NDQ4MjE1ODMy.__7OIojpORdQKLe62PHK0nqDuY_VEAo583yPgfvNcugg.OmXdoqNYFIFWJ27mRQtNsZ6gzm7BSr3Rq37EC8Nv-38g.PNG/front_menu5.png",
  "https://cafefiles.pstatic.net/MjAyMDA4MDNfMTk1/MDAxNTk2NDQ4MjE2MTMy.kXRjnSyNk1TCTDXsTThbWkXnQG0o-w610otl8U4CSSIg.Ct_cbOU_fzYLanXGHXtOLxbzaruzOwyY61coLmwWOA0g.PNG/front_menu6.png",
  "https://cafefiles.pstatic.net/MjAyMDA4MDNfODcg/MDAxNTk2NDQ4MjE2MzMw.juZLnLZY028jSAs_HuMU5QxCftTo1Glax-up6vgBxAgg.MQDq1UGD7MmVR30_213dklCqRZkiBJVcBnFgSW6HtI4g.PNG/front_menu7.png",
  "https://cafefiles.pstatic.net/MjAyMDA4MDNfMTA3/MDAxNTk2NDQ4MjE2NjQx.vvmqIOMWGfC_KBtsG-a571hyS_u7ToaxrYHamE87v7Ig.f_nhYFnCycj47UbLkVX3K_1fa5P9tg-vkke5IFDgeA8g.PNG/front_menu8.png"
);

let resourceYoutube = "https://cafefiles.pstatic.net/MjAyMDA4MDNfNTcg/MDAxNTk2NDUwMDU5ODA3.FLRw2-ugGvyq74d72wt4iXGkSyzCrmIWey8swAyE6ssg.FnjmTFsce8zpbFTvHnTpZtX4b_j9_XHTSJPxrNAipEwg.PNG/front_dyoutube.png";
let resourceBest = "https://cafefiles.pstatic.net/MjAyMDA4MDNfMTY5/MDAxNTk2NDUwMDU4NDkz.AdbyP13L-GBgmYhkX59wG_p_j-ZTxFO2C3Lm5z7XDLUg.KwNi4jSQWQ3996khMi4S3H7p770ficKj-MaAJoBHQ0sg.PNG/front_dbest.png";
let resourceSponsor = "https://cafefiles.pstatic.net/MjAyMDA4MDNfMjAw/MDAxNTk2NDUwMDU5NDQ3.5bPHiByJ30qu9_Q-lrGP-Oa734AlFrKkDJm0PuPi29cg.aQXW94RPQYlSv_4bSeR0fRtibdAFTeq5uGIodjgGWpYg.PNG/front_dsponsor.png";
let resourcePost = "https://cafefiles.pstatic.net/MjAyMDA4MDNfMjg1/MDAxNTk2NDUwMDU5MTM4.TckctUKWRuarMxaifhwcYZi81aCuiYSqyA3P6poM8p4g.VxraeD9AML_owNcopQn2YYOW6xBiWBC7R60ju2rqcdkg.PNG/front_dpost.png";
let resourceCopyright = "https://cafefiles.pstatic.net/MjAyMDA4MDNfMjIw/MDAxNTk2NDUwMDU4ODQ0.db_aPObjDbSqkcG9wSwyE0fXAvk_3wAKntWFGTUfSmog.r4S083j6s7N5AW7oGRhriYGTFFOTLBGnMQpMpg-MuOIg.PNG/front_dcopy.png";
let resourceBlank = "https://cafefiles.pstatic.net/MjAyMDA2MTVfMjk0/MDAxNTkyMjMxMDEwNzE5.0geDSpRciQhBcP9UHLDMnMLNyUP56IFYjyGFo50Lr18g.3tQdIO2P1RPfbjcjwXlHu_erEhS92QtqgmRUMF_C_hQg.PNG/blank.png";

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

// Data Check 1
function DataCheckImg(item) {
  if( item == "" || item == null || item == undefined || ( item != null && typeof item == "object" && !Object.keys(item).length ) ){
    return resourceBlank;
  } else {
    //item = item.replace("https://cafefiles.pstatic.net/", "http://cafefiles.pstatic.net/");
    //item = item.replace("https://postfiles.pstatic.net/", "http://postfiles.pstatic.net/");
    //console.log(item);
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

  page = "<!-- Develoid Front v2020.07 / Produced by SiRyuA & 밤푸딩 -->"

  // Best Photo
  for(let i=0; i<cntBp; i++) {
    let temp = new Object();
    let num = i+1;
    console.log(num);
    let temp0 = "bp_i" + num,
        temp1 = "bp_u" + num;

    temp.img = DataCheckImg(document.getElementById(temp0).value);
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

    temp.img = DataCheckImg(document.getElementById(temp0).value);
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
      /*
      temp = temp.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/");
      temp = temp.replace("https://www.youtube.com/", "https://www.youtube.com/embed/");
      temp = temp.replace("https://youtu.be/", "https://www.youtube.com/embed/");
      temp += "?wmode=opaque";
      */
      temp = temp.replace("https://youtu.be/", "");
      temp = temp.replace("https://www.youtube.com/watch?v=", "");
      temp = temp.replace("https://www.youtube.com/embed/", "");
      temp = temp.replace("https://www.youtube.com/", "");
      temp = temp.replace("?wmode=opaque", "");

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

    temp.img = DataCheckImg(document.getElementById(temp0).value);
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

    temp.img = DataCheckImg(document.getElementById(temp0).value);
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

    temp.img = DataCheckImg(document.getElementById(temp0).value);
    temp.url = DataCheck(document.getElementById(temp1).value);
    arrayPt.push(temp);
  }

  page += "<center>";

  // Menu
  page += "<table width='836' height='45' cellspacing='0' cellpadding='0'><tbody><tr>"
       +  "<td><a href='"+urlMenu[0]+"' target='_blank'><img id='"+DataCheckImg(resourceMenu[0])+"' src='"+DataCheckImg(resourceMenu[0])+"' width='100' height='auto' style='width: 100px; height: auto; margin:-10px 0 0;'></a></td>";

  for(let i=1; i<9; i++) {
    page += "<td><a href='"+urlMenu[i]+"' target='_blank'><img id='"+DataCheckImg(resourceMenu[i])+"' src='"+DataCheckImg(resourceMenu[i])+"' width='92' height='auto' style='width: 92px; height: auto; margin:-10px 0 0;'></a></td>";
  }

  page += "</tr></tbody></table>"

  // Best Photo & AD Banner
  if(cntBp > 0 || cntAd > 0) {
    console.log(arrayBp);
    page += "<table width='836' cellspacing='0' cellpadding='0'><tbody>";

    if(cntBp > 0) {
      page += "<tr><td><a href='https://cafe.naver.com/develoid/menu/1441' target='_blank'><img id='"+arrayBp[0].img+"' src='"+arrayBp[0].img+"' width='836' height='auto' style='margin:0 0 4px; width: 836px; height: auto;'></a></td></tr>"
    }

    console.log(arrayAd);
    if(cntAd > 0) {
      for(let i=0; i<arrayAd.length; i++) {
        page += "<tr><td><a href='"+arrayAd[i].url+"' target='_blank'><img id='"+arrayAd[i].img+"' src='"+arrayAd[i].img+"' width='836' height='auto' style='width: 836px; height: auto;'></a></td></tr>"
      }
    }

    page += "</tbody></table>"
  }

  // Youtube
  if(cntYt > 0) {
    console.log(arrayYt);
    page += "<div width='836' height='auto' style='margin:16px 0 4px 0;'><a href='"+urlMenu[5]+"' style='text-decoration:none;' target='_blank'><img id='"+DataCheckImg(resourceYoutube)+"' src='"+DataCheckImg(resourceYoutube)+"' width='836' height='auto' style='width: 836px; height: auto;'></a></div>";
    page += "<table width='836' height='225' cellspacing='12' cellpadding='0'><tbody>";

    for(let i=0; i<arrayYt.length; i+=2) {
      page += "<tr>";
      for(let j=0; j<2; j++) {
        page += "<td><iframe src='https://www.youtube.com/embed/"+arrayYt[i+j]+"?wmode=opaque' width='400px' height='225px' frameborder='0' scrolling='no' allowfullscreen=''></iframe></td>";
      }
      page += "</tr>";
    }
    page += "</tbody></table>";
  }

  // Best
  if(cntBt > 0) {
    console.log(arrayBt);
    page += "<div width='836' height='auto' style='margin:0 0 4px;'><a href='"+urlBest+"' style='text-decoration:none;' target='_blank'><img id='"+DataCheckImg(resourceBest)+"' src='"+DataCheckImg(resourceBest)+"' width='836' height='auto' style='width: 836px; height: auto;'></a></div>";
    page += "<table width='836' cellspacing='12' cellpadding='0'><tbody>";

    for(let i=0; i<arrayBt.length; i+=4) {
      page += "<tr>";
      for(let j=0; j<4; j++) {
        let inimg = arrayBt[i+j].img;
        let inurl = arrayBt[i+j].url

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

  // Sponsor
  if(cntSp > 0) {
    console.log(arraySp);
    page += "<div width='836' height='auto' style='margin:4px 0 4px;'><a href='"+urlSponsor+"' style='text-decoration:none;' target='_blank'><img id='"+DataCheckImg(resourceSponsor)+"' src='"+DataCheckImg(resourceSponsor)+"' width='836' height='auto' style='width: 836px; height: auto;'></a></div>";
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
    page += "<div width='836' height='auto' style='margin:4px 0 4px;'><a href='"+urlPost+"' style='text-decoration:none;' target='_blank'><img id='"+DataCheckImg(resourcePost)+"' src='"+DataCheckImg(resourcePost)+"' width='836' height='auto' style='width: 836px; height: auto;'></a></div>";
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
  page += "<div width='836'>"
       +  "<img id='"+DataCheckImg(resourceCopyright)+"' src='"+DataCheckImg(resourceCopyright)+"' width='836' height='auto' style='margin:4px 0 0;' width: 836px; height: auto;'>"
       +  "</div>";

  page += "</center>";

  var tempPage = page.replace(/https:\/\/cafefiles.pstatic.net/g, 'http://cafefiles.pstatic.net');
  tempPage = tempPage.replace(/https:\/\/postfiles.pstatic.net/g, 'http://postfiles.pstatic.net');

  document.getElementById("codeHTTPS").value = page;
  document.getElementById("codeHTTP").value = tempPage;
  document.getElementById("view").innerHTML = tempPage;
}

// Code Copy
function CodeCopy() {
  var copyText = document.getElementById("codeHTTPS");
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

  let content = document.getElementById("codeHTTPS").value;

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

  console.log("get", getBp, getAd, getYt, getBt, getSp, getPt);
  console.log("data", dataBp, dataAd, dataYt, dataBt, dataSp, dataPt);
  console.log("len", dataBp.length, dataYt.length, dataAd.length, dataBt.length, dataSp.length, dataPt.length);

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

    loopAd = Math.abs(gapAd);

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

    console.log("ad", dataAd[i].img, dataAd[i].url);

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

    console.log("yt", dataYt[i]);

    ytTemp = dataYt[i]
    ytTemp = ytTemp.replace("https://www.youtube.com/embed/", "");
    ytTemp = ytTemp.replace("?wmode=opaque", "");
    ytTemp = ytTemp.replace("https://youtu.be/", "");
    ytTemp = ytTemp.replace("https://www.youtube.com/watch?v=", "");
    //ytTemp = "https://youtu.be/" + ytTemp;

    document.getElementById(tu).value = ytTemp;
    //document.getElementById(tu).value = dataYt[i];
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
