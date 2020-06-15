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
  "https://cafefiles.pstatic.net/MjAyMDA2MTVfMjg4/MDAxNTkyMjMxMzI4NDM4.Z8pOg5mi3rgEkuvgooJlQNqJI-0JKyErAmgp6uQfezcg.u4tEtT5rBRopxogo34sMBFAZ6c-ZBTAya2bzFE1tiAwg.PNG/menu_1.png",
  "https://cafefiles.pstatic.net/MjAyMDA2MTVfMTIy/MDAxNTkyMjMxMzI5MzI2.E5HegjKPasfckQ2azlKnXM2P51clbE-AtSNP-wOSQ7gg.YYYBzuvjcP0iw_zJrIkKPeCp-Eu42jayrlVY3jdsw1Ag.PNG/menu_2.png",
  "https://cafefiles.pstatic.net/MjAyMDA2MTVfMjk1/MDAxNTkyMjMxMzI5OTAx.kZ6YLGFpUgh09M9Z1BeJKd8WMrrF7y7zLs0fU_ql72Ug.otAmTdxZFpyGvoV5zKCibxuPBRbRIJdVXzTZ6r67g34g.PNG/menu_3.png",
  "https://cafefiles.pstatic.net/MjAyMDA2MTVfMTg2/MDAxNTkyMjMxMzMwNTY0.PkGuz_0Nhr8QoHnNJD0d5WWcvKRDUx1WLqqrUCRgG-og.MkL-4AepENU6xuFzcVp-93xlGpxvFyo2MRcd3QcSaTQg.PNG/menu_4.png",
  "https://cafefiles.pstatic.net/MjAyMDA2MTVfMjQw/MDAxNTkyMjMxMzMxMTI1.2vT_w5RtkiEafeqfUw0AsNt0fNhwgQxaSfXfBX5fb8wg.fn33kxfjjN1tbw9xV_h2L0bNbELFLnJ455s08t0sp-8g.PNG/menu_5.png",
  "https://cafefiles.pstatic.net/MjAyMDA2MTVfOTEg/MDAxNTkyMjMxMzMxNTMy.no3-sxBpbVvjavoI2DLU_Pckbfi4Oqdd8ev2uysTA2sg.I_U9TJKdifct1raUw7Y0_haAMQnXewf33mjXrblL9_4g.PNG/menu_6.png",
  "https://cafefiles.pstatic.net/MjAyMDA2MTVfNDAg/MDAxNTkyMjMxMzMyMDQ1.PYCBwHbP47IvXC-4y0D8mWCj8d14xBPwMn0jljx8Ftgg.XZNnZU9G7ktezkzJO9xrQMPLtZBv6mQDjhO4kBFXaQwg.PNG/menu_7.png",
  "https://cafefiles.pstatic.net/MjAyMDA2MTVfMjk5/MDAxNTkyMjMxMzMyNDY5.2OU0bZfDrAbLGlXmpIcI5IWOFGH0T-1M_qdOGifwgTkg.uNe5oqRxAqdvptbDBfjfiI9Xry6OB7xDgadWqb4qaYsg.PNG/menu_8.png",
  "https://cafefiles.pstatic.net/MjAyMDA2MTVfMTc0/MDAxNTkyMjMxMzMzMDEy.ewH58BfSsnmqwQ3vvd46dPpVIiSMeDR8Xd3CiiB7AcUg.Oi_87uoIGABfg-xqQMscj49y8iW-5HePfDq4jptZT9Yg.PNG/menu_9.png"
);

let resourceYoutube = "https://cafefiles.pstatic.net/MjAyMDA2MTVfMjk0/MDAxNTkyMjMxMzI3NzYw.r_GNE2TgvDZrXqg-PjZn9JO1rQDkFI3boibj7XfRjxEg.IYTXZ0aguNEp5JKnUqSlLjOSDcDa7EKeA8BCTQZ3IIgg.PNG/dyoutube.png";
let resourceBest = "https://cafefiles.pstatic.net/MjAyMDA2MTVfMTM4/MDAxNTkyMjMxMzI1Mzg4.qn65ZUkff1Hj32K-hS_iU5ySivb_tis-4aKccIwa7uYg.ragn0rlMryUIFwknlO1qEi6c78p4k-5meW4ZbgXmWSkg.PNG/dbest.png";
let resourceSponsor = "https://cafefiles.pstatic.net/MjAyMDA2MTVfMTA3/MDAxNTkyMjMxMzI3MTM1.R8vjRWn7-3bNHAqGYgs55lh9YnX9iW0UGsdBsP6Z7Ccg.JH44TDKpWkmaAqJN6EjLvK7SqA-wzgWQm2X43tLmUEAg.PNG/dsponsor.png";
let resourcePost = "https://cafefiles.pstatic.net/MjAyMDA2MTVfMjA4/MDAxNTkyMjMxMzI2NTYy.RjIGOTPMb5bv4V2dkZ-Mx820rbYnNrRaR-IqGNVl-vAg.5uhcwW2Rl-JnKYxz8nJPobvKyFBehCl2p3DyBbU4FxMg.PNG/dpost.png";
let resourceCopyright = "https://cafefiles.pstatic.net/MjAyMDA2MTVfNzEg/MDAxNTkyMjMxMzI1OTQ4.Zupq6kdz8n_ygpiR58wHzFCbmKFoy5v50zr3-6S4hicg.i6pK_p0CQWO7qp-ignUgN2QifsSDUfXISAwkiuTYrTMg.PNG/dcopy.png";

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

  page = "<!-- Develoid Front v2020.07 / Produced by SiRyuA & 밤푸딩 -->"

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
      temp = temp.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/");
      temp = temp.replace("https://www.youtube.com/", "https://www.youtube.com/embed/");
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
       +  "<td><a href='"+urlMenu[0]+"' target='_blank'><img id='"+resourceMenu[0]+"' src='"+resourceMenu[0]+"' width='99' height='auto' style='width: 99px; height: auto;'></a></td>";

  for(let i=1; i<9; i++) {
    page += "<td><a href='"+urlMenu[i]+"' target='_blank'><img id='"+resourceMenu[i]+"' src='"+resourceMenu[i]+"' width='92' height='auto' style='width: 92px; height: auto;'></a></td>";
  }

  page += "</tr></tbody></table>"

  // Best Photo & AD Banner
  if(cntBp > 0 || cntAd > 0) {
    console.log(arrayBp);
    page += "<table width='836' cellspacing='0' cellpadding='0'><tbody>";

    if(cntBp > 0) {
      page += "<tr><td><a href='https://cafe.naver.com/ArticleList.nhn?search.clubid=23370764&search.menuid=1441&search.boardtype=I' target='_blank'><img id='"+arrayBp[0].img+"' src='"+arrayBp[0].img+"' width='836' height='auto' style='width: 836px; height: auto;'></a></td></tr>"
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
    page += "<div width='836' height='auto' style='margin:30px 0 0 0;'><a href='"+urlMenu[5]+"' style='text-decoration:none;' target='_blank'><img id='"+resourceYoutube+"' src='"+resourceYoutube+"' width='836' height='auto' style='width: 836px; height: auto;'></a></div>";
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
    page += "<div width='836' height='auto' style='margin:12px 0 0 0;'><a href='"+urlBest+"' style='text-decoration:none;' target='_blank'><img id='"+resourceBest+"' src='"+resourceBest+"' width='836' height='auto' style='width: 836px; height: auto;'></a></div>";
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
    page += "<div width='836' height='auto' style='margin:12px 0 0 0;'><a href='"+urlSponsor+"' style='text-decoration:none;' target='_blank'><img id='"+resourceSponsor+"' src='"+resourceSponsor+"' width='836' height='auto' style='width: 836px; height: auto;'></a></div>";
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
    page += "<div width='836' height='auto' style='margin:12px 0 0 0;'><a href='"+urlPost+"' style='text-decoration:none;' target='_blank'><img id='"+resourcePost+"' src='"+resourcePost+"' width='836' height='auto' style='width: 836px; height: auto;'></a></div>";
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
       +  "<img src='"+resourceCopyright+"' width='836' height='auto' style='width: 836px; height: auto;'>"
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
