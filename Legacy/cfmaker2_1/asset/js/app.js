let cntBp = 1;
let cntAd = 2;
let cntBt = 5;
let cntSp = 5;

let arrayBp = new Array();
let arrayAd = new Array();
let arrayBt = new Array();
let arraySp = new Array();

let page;

let urlMenu = new Array(
  "https://cafe.naver.com/develoid/936527",
  "https://cafe.naver.com/develoid/827731",
  "https://cafe.naver.com/develoid/901013",
  "https://cafe.naver.com/develoid/menu/1",
  "https://goo.gl/forms/Lrxz08x3oB3XLuJ62"
);

let resourceMenu = new Array(
  "https://cafefiles.pstatic.net/MjAyMDA4MjRfMjQ1/MDAxNTk4MjEzNzU2MDA1.7vRwglMW36IPseCB3dqv1ApFprrgt3cuFSrQc2vfdtwg.nbv0uYqgcwOGBIyhh1_rK9MK51Q_YLMJjcVDwTddbMkg.PNG/notice1.png",
  "https://cafefiles.pstatic.net/MjAyMDA4MjRfMTA1/MDAxNTk4MjAzNjUxMzUx.NMB7e3B0wvUAmP2N_f_VVj9_61luh3zmAL84qgMvhWYg.bUrxgBPs1t2-qNqOoocl9CfqxGF0YiA-7x_b5dn5iGkg.PNG/notice3.png",
  "https://cafefiles.pstatic.net/MjAyMDA4MjRfMzkg/MDAxNTk4MjAzNjUxNjEx.pfI05sjRTUTe0RfkO2mMXrr4RXPHlnF9F5l1jl-Q3f8g.oJWwKhes13cZZn5D0yh_r6ugb6jCW8EHMN8mQeRjiCYg.PNG/notice2.png",
  "https://cafefiles.pstatic.net/MjAyMDA4MjRfMTEw/MDAxNTk4MjAzNjUxOTA5.g_ke5EyEJDlkNlmc5pwlH0wwAUaY6RBQ4yni3yrHigAg.iz0Tdjaje_IrI3ocIoqaoD9unfCJhNZg4ooT04jGNNwg.PNG/more.png",
  "https://cafefiles.pstatic.net/MjAyMDA4MjRfMjM4/MDAxNTk4MjAzNjUyMTY1.8U91jktx74yaIUW-2tSTGf0XQIk70o-knWC9j0kgKvog.xFEzTKmPrWqbbjJO6tP2j2j9_Z9yYq1dIn5UAtmH88Yg.PNG/contact.png"
);

let resourceBest = "https://cafefiles.pstatic.net/MjAyMDA4MjRfMTY4/MDAxNTk4MjQzMTYyMDcy.Pd4hw3IGFxKNJYY5ExFCVIkjgxo-TFoFfZJHqYvxXEAg.0qwbCiTRdLVx9crBw469y_Nu3mp1YAiv4H5To14BQSQg.PNG/best.png";
let resourceContent = "https://cafefiles.pstatic.net/MjAyMDA4MjRfMTUy/MDAxNTk4MjQzMTYyNTQ3.v3Uja6ILyYeAb5DEzAn3IPtHv6zmNKZMtxBE8t8jX7Eg.FUiaiZ2oo1vK8GChziA0kXbtmhuoNFZ-xncJ8C9-Wxwg.PNG/content.png";
let resourceSponsor = "https://cafefiles.pstatic.net/MjAyMDA4MjRfMjg4/MDAxNTk4MjQ0MzI5MTAw.rq0yxeaqll6n2nExeoD8WelonDK9hYZdZr5H1XF4v7Ug.pBytCcgA-4XhCxEDp-PZ3CqE8zMtiKo5TkdIgCfrku4g.PNG/sponsor.png";
let resourceCopyright = "https://cafefiles.pstatic.net/MjAyMDA4MjRfMTgz/MDAxNTk4MjQzMTYzMTQx.5UGciiCbhYN9jZFjt9hsQTkYFPsHgD5eUdQpTf1ShHYg.ljJ10dESf4g6RQbFGXW39ZvdpFTUBXDXbgX6Edf3bfIg.PNG/copyright.png";
let resourceBlank = "https://cafefiles.pstatic.net/MjAyMDA2MTVfMjk0/MDAxNTkyMjMxMDEwNzE5.0geDSpRciQhBcP9UHLDMnMLNyUP56IFYjyGFo50Lr18g.3tQdIO2P1RPfbjcjwXlHu_erEhS92QtqgmRUMF_C_hQg.PNG/blank.png";

let urlBest = "https://cafe.naver.com/develoid/menu/1363";
let urlContent = "https://cafe.naver.com/develoid/menu/1312";
let urlSponsor = "https://cafe.naver.com/develoid/menu/604";

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

// Thumbnail Control without sponsor
function ControlBt(type) {
  if(type == "add") {
    for(let i=0; i<5; i++) {
      cntBt++;
      $('#bt').append('<tr id="bt_'+cntBt+'"><td>'+cntBt+'</td><td><input type="text" id="bt_i'+cntBt+'"></td><td><input type="text" id="bt_u'+cntBt+'"></td></tr>');
    }
  } else if(type == "rm") {
    if(cntBt > 0) {
      for(let i=0; i<5; i++) {
        let target = "#bt_" + cntBt;
        $(target).remove();
        cntBt--;
      }
    } else {
      alert('no target');
    }
  }
}

// Sponsor Thumbnail Control
function ControlSp(type) {
  if(type == "add") {
    for(let i=0; i<5; i++) {
      cntSp++;
      $('#sp').append('<tr id="sp_'+cntSp+'"><td>'+cntSp+'</td><td><input type="text" id="sp_i'+cntSp+'"></td><td><input type="text" id="sp_u'+cntSp+'"></td></tr>');
    }
  } else if(type == "rm") {
    if(cntSp > 0) {
      for(let i=0; i<5; i++) {
        let target = "#sp_" + cntSp;
        $(target).remove();
        cntSp--;
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
    return "resourceBlank";
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

// Cafe Gate
function Make() {
  arrayBp = new Array();
  arrayAd = new Array();
  arrayBt = new Array();
  arraySp = new Array();

  page = "<!-- 디벨로이드 대문 v마개조v | 대문 개발 및 디자인 시류아, 딸기푸딩 -->"

  // Best Photo = BP
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

  // AD Banner = AD
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

  // Thumbnail without sponsor = BT
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

  // Sponsor Thumbnail = SP
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

  page += "<center>";

  // Menu
    for(let i=0; i<3; i++) { 
      page += "<a href='"+urlMenu[i]+"' target='_blank'><img id='"+DataCheckImg(resourceMenu[i])+"' src='"+DataCheckImg(resourceMenu[i])+"' width='236' height='58' style='width: 236px; height: 58px; margin: 2px 0 0 0; box-shadow: 0px 2px 4px rgb(220, 220, 220); border-radius: 2px;'></a>";
    }

    for(let j=3; j<5; j++) {
      page += "<a href='"+urlMenu[j]+"' target='_blank'><img id='"+DataCheckImg(resourceMenu[j])+"' src='"+DataCheckImg(resourceMenu[j])+"' width='58' height='58' style='width: 58px; height: 58px; margin: 2px 0 0 0; box-shadow: 0px 2px 4px rgb(220, 220, 220); border-radius: 2px;'></a>";
    }  

  page += "</tr></tbody></table>";

  // Best Photo & AD Banner
  if(cntBp > 0 || cntAd > 0) {
    console.log(arrayBp);
    page += "<table width='836' cellspacing='6' cellpadding='0'><tbody>";

    if(cntBp > 0) {
      page += "<tr><td><a href='https://cafe.naver.com/develoid/menu/1441' target='_blank'><img id='"+arrayBp[0].img+"' src='"+arrayBp[0].img+"' width='824' height='auto'; style='width: 824px; height: auto; box-shadow: 0px 2px 4px rgb(220, 220, 220); border-radius: 2px;'></a></td></tr>"
    }

    console.log(arrayAd);
    if(cntAd > 0) {
      for(let i=0; i<arrayAd.length; i++) {
        page += "<tr><td><a href='"+arrayAd[i].url+"' target='_blank'><img id='"+arrayAd[i].img+"' src='"+arrayAd[i].img+"' width='824' height='auto'; style='width: 824px; height: auto; box-shadow: 0px 2px 4px rgb(220, 220, 220); border-radius: 2px;'></a></td></tr>"
      }
    }

    page += "</tbody></table>";
  }

  // Thumbnail without sponsor
  if(cntBt > 0) {
    console.log(arrayBt);
    page += "<div width='836' height='auto''><a href='"+urlBest+"' target='_blank'><img id='"+DataCheckImg(resourceBest)+"' src='"+DataCheckImg(resourceBest)+"' width='492' height='auto' style='width: 492px; height: auto; box-shadow: 0px 2px 4px rgb(220, 220, 220); border-radius: 2px;'></a><a href='"+urlContent+"' style='text-decoration:none;' target='_blank'><img id='"+DataCheckImg(resourceContent)+"' src='"+DataCheckImg(resourceContent)+"' width='326' height='auto' style='width: 326px; height: auto; margin: 0 0 0 6px; box-shadow: 0px 2px 4px rgb(220, 220, 220); border-radius: 2px;'></a></div>";
    page += "<table width='836' cellspacing='6' cellpadding='0'>";

    for(let i=0; i<arrayBt.length; i+=5) {
      page += "<tr>";
      for(let j=0; j<5; j++) {
        let inimg = arrayBt[i+j].img;
        let inurl = arrayBt[i+j].url

        if(inimg.length > 0) {
          page += "<td><a href='"+inurl+"' target='_blank'><img id='"+inimg+"' src='"+inimg+"' width='160' height='160' style='width: 160px; height: 160px; box-shadow: 0px 2px 4px rgb(220, 220, 220); border-radius: 2px;'></a></td>";
        } else {
          page += "<td></td>";
        }
      }
      page += "</tr>";
    }

    page += "</tbody></table>";
  }

  // Sponsor Thumbnail
  if(cntSp > 0) {
    console.log(arraySp);
    page += "<div width='836' height='auto';'><a href='"+urlSponsor+"' target='_blank'><img id='"+DataCheckImg(resourceSponsor)+"' src='"+DataCheckImg(resourceSponsor)+"' width='824' height='auto' style='width: 824px; height: auto; box-shadow: 0px 2px 4px rgb(220, 220, 220); border-radius: 2px;'></a></div>";
    page += "<table width='836' cellspacing='6' cellpadding='0'><tbody>";

    for(let i=0; i<arraySp.length; i+=5) {
      page += "<tr>";
      for(let j=0; j<5; j++) {
        let inimg = arraySp[i+j].img;
        let inurl = arraySp[i+j].url

        if(inimg.length > 0) {
          page += "<td><a href='"+inurl+"' target='_blank'><img id='"+inimg+"' src='"+inimg+"' width='160' height='160' style='width: 160px; height: 160px; box-shadow: 0px 2px 4px rgb(220, 220, 220); border-radius: 2px;'></a></td>";
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
       +  "<img id='"+DataCheckImg(resourceCopyright)+"' src='"+DataCheckImg(resourceCopyright)+"' width='824' height='auto' style='width: 824px; height: auto; box-shadow: 0px 2px 4px rgb(220, 220, 220); border-radius: 2px;'>"
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

  let json = {time: ""+y+m+d+h+mm+s, bp: cntBp, ad: cntAd, bt: cntBt, dataBp: arrayBp, dataAd: arrayAd, dataBt: arrayBt, dataSp: arraySp};
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
  let getBt = json.bt;
  let getSp = json.sp;

  let dataBp = json.dataBp;
  let dataAd = json.dataAd;
  let dataBt = json.dataBt;
  let dataSp = json.dataSp;

  let ti;
  let tu;

  console.log("get", getBp, getAd, getBt, getSp);
  console.log("data", dataBp, dataAd, dataBt, dataSp);
  console.log("len", dataBp.length, dataAd.length, dataBt.length, dataSp.length);

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

  if(cntBt != getBt) {
    let gapBt = getBt - cntBt;

    loopBt = Math.abs(gapBt/5);

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

    loopSp = Math.abs(gapSp/5);

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
}
