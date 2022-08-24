// 베스트포토 및 공지사항 bp
// 이벤트 1단 evs
// 이벤트 2단 evd
// 디벨베스트 ebseven
// 디벨콘텐츠 edc
// 디벨서포터즈 dsu
// 디벨스폰서 ds
// 지난달: 접두사 b
// 베이스 인터페이스 ui

// bp 0 / evs 1 / evd 2 / ebseven 3 / ebfive 4 / edc 5 / dsu 6 / ds 7 / bebseven 8 / bebfive 9 / bdc 10 / bdsu 11 / ui 12
let arrayCNT = new Array(6,0,0,7,0,0,0,0,7,0,0,0,8);
let arraySET = new Array(1,1,2,1,5,5,5,5,1,5,5,5,1);
let arrayCMD = new Array("bp", "evs", "evd", "ebseven", "ebfive", "edc", "dsu", "ds", "bebseven", "bebfive", "bdc", "bdsu", "ui");
let arrayITEM = new Array();

// Resource
let resourceBlank = "https://cafefiles.pstatic.net/MjAyMDA2MTVfMjk0/MDAxNTkyMjMxMDEwNzE5.0geDSpRciQhBcP9UHLDMnMLNyUP56IFYjyGFo50Lr18g.3tQdIO2P1RPfbjcjwXlHu_erEhS92QtqgmRUMF_C_hQg.PNG/blank.png";

// URL 드랍 이벤트
function dropURL(event, id) {
   event.stopPropagation();
   event.preventDefault();
   let url = event.dataTransfer.getData('URL');
   document.getElementById(id).value = url;
   //alert(imageUrl);
}

// 이미지 드랍 이벤트
function dropIMG(event, id) {
   event.stopPropagation();
   event.preventDefault();
   var imageUrl = event.dataTransfer.getData('text/html');
   var rex = /src="?([^"\s]+)"?\s*/;
   var url, res;
   url = rex.exec(imageUrl);
   document.getElementById(id).value = url[1];
}

// 배열 위치 가져오기
function getTarget(target) {
  //console.log(target);

  var out = 0;
  if(target == "bp") out = 0;
  else if(target == "evs") out = 1;
  else if(target == "evd") out = 2;
  else if(target == "ebseven") out = 3;
  else if(target == "ebfive") out = 4;
  else if(target == "edc") out = 5;
  else if(target == "dsu") out = 6;
  else if(target == "ds") out = 7;
  else if(target == "bebseven") out = 8;
  else if(target == "bebfive") out = 9;
  else if(target == "bdc") out = 10;
  else if(target == "bdsu") out = 11;
  else if(target == "ui") out = 12;

  return out;
}

/* 화면 제어 */
// 목록 추가 제거
function ItemControl(type, target) {
  // 대상 배열 주소 가져오기
  var num = getTarget(target);

  if(type == "add") { // 목록 추가 할 경우
    for(let i = 0; i < arraySET[num]; i++) { // arraySET 값 만큼 반복
      arrayCNT[num]++; // 추가

      let targetId = "#" + arrayCMD[num];

      $(targetId).append(
        '<tr id="'+arrayCMD[num]+'_'+arrayCNT[num]+'"><td class="number"><table_number>'+arrayCNT[num]+'</table_number></td><td><input class="imageid" type="url" id="'+arrayCMD[num]+'_i'+arrayCNT[num]+'" ondrop="dropIMG(event, this.id)"></td><td colspan="3"><input class="linkid" type="url" id="'+arrayCMD[num]+'_u'+arrayCNT[num]+'" ondrop="dropURL(event, this.id)"></td></tr>');

    }
  } else if(type == "remove") { // 목록 제거 할 경우
    if(arrayCNT[num] > 0) { // 마이너스 되는 경우 방지
      for(let i=0; i < arraySET[num]; i++) {
        let targetId = "#" + arrayCMD[num] + "_" + arrayCNT[num]; // 목표 지정
        $(targetId).remove(); // 삭제
        arrayCNT[num]--; // 카운트 감소
      }
    } else {
      alert('한번 더 누르시면 IQ 추적을 해버리겠습니다.');
    }
  }

  //console.log(arrayCMD[num], arrayCNT[num]); // 현재 카운트 출력
}

/* 데이터 관리 */
// URL 데이터 검사
function ItemDataCheckImg(item) {
  if(item == "" || item == null || item == undefined || ( item != null && typeof item == "object" && !Object.keys(item).length)){
    return resourceBlank;
  } else {
    return item;
  }
}

// IMG 데이터 검사
function ItemDataCheckUrl(item) {
  if( item == "" || item == null || item == undefined || ( item != null && typeof item == "object" && !Object.keys(item).length ) ){
    return "";
  } else {
    return item;
  }
}

// 아이템 오브젝트 제작
function ItemObjectMake(target) {
  let num = getTarget(target);
  let out = new Array();

  // 전체 목록 가져와서 오브젝트 생성
  for(let i = 0; i < arrayCNT[num]; i++) {
    let temp = new Object();
    let x = i+1;

    let tempIMG = arrayCMD[num] + "_i" + x;
    let tempURL = arrayCMD[num] + "_u" + x;

    //console.log(tempIMG, tempURL);

    // 데이터 가져오기
    temp.img = ItemDataCheckImg(document.getElementById(tempIMG).value);
    temp.url = ItemDataCheckUrl(document.getElementById(tempURL).value);

    out.push(temp);
  }

  // 아이템 오브젝트를 배열에 저장
  let id = arrayCMD[num];
  arrayITEM[id] = out;
}

// 전체 아이템 오브젝트 배열 생성
function ItemArrayMake() {
  arrayITEM = new Array();

  ItemObjectMake('bp');
  ItemObjectMake('evs');
  ItemObjectMake('evd');
  ItemObjectMake('ebseven');
  ItemObjectMake('ebfive');
  ItemObjectMake('edc');
  ItemObjectMake('dsu');
  ItemObjectMake('ds');
  ItemObjectMake('bebseven');
  ItemObjectMake('bebfive');
  ItemObjectMake('bdc');
  ItemObjectMake('bdsu');
  ItemObjectMake('ui');
  //ItemObjectMake('ft');

  //console.log(arrayITEM);
}

/* JSON 데이터 저장 */
// 데이터 저장
function ItemSave() {

  // 날짜 및 시간 가져오기
  let now = new Date();
  let y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();
  let h = now.getHours();
  let mm = now.getMinutes();

  y = y - '2000'; // YYYY -> YY
  h = h > 9 ? h : '0' + h; // h -> hh
  mm = mm > 9 ? mm : '0' + mm; // m -> mm

  if(m < 10) m = "0" + m;
  if(d < 10) d = "0" + d;

  // 파일 명 생성
  let fileName = "CF4_"+y+m+d+"_"+h+""+mm+".json";

  // 전체 아이템 오브젝트 배열 생성
  ItemArrayMake();

  // bp 0 / evs 1 / evd 2 / ebseven 3 / ebfive 4 / edc 5 / dsu 6 / ds 7 / bebseven 8 / bebfive 9 / bdc 10 / bdsu 11 / ui 12
  // 오브젝트 생성
  let json = new Object;
  json.time = ""+y+m+d+h+mm;
  //json.TM = arrayCNT[0];
  json.EVS = arrayCNT[1];
  json.EVD = arrayCNT[2];
  json.EBFIVE = arrayCNT[4];
  json.EDC = arrayCNT[5];
  json.DSU = arrayCNT[6];
  json.DS = arrayCNT[7];
  json.BEBFIVE = arrayCNT[9];
  json.BDC = arrayCNT[10];
  json.BDSU = arrayCNT[11];
  //json.FT = arrayCNT[6];
  json.dataBP = arrayITEM['bp'];
  json.dataEVS = arrayITEM['evs'];
  json.dataEVD = arrayITEM['evd'];
  json.dataEBSEVEN = arrayITEM['ebseven'];
  json.dataEBFIVE = arrayITEM['ebfive'];
  json.dataEDC = arrayITEM['edc'];
  json.dataDSU = arrayITEM['dsu'];
  json.dataDS = arrayITEM['ds'];
  json.dataBEBSEVEN = arrayITEM['bebseven'];
  json.dataBEBFIVE = arrayITEM['bebfive'];
  json.dataBDC = arrayITEM['bdc'];
  json.dataBDSU = arrayITEM['bdsu'];
  json.dataUI = arrayITEM['ui'];
  //json.dataFT = arrayITEM['ft'];

  //console.log(json);

  
  // JSON 생성
  let content = JSON.stringify(json);

  let blob = new Blob([content], { type: 'json' });

  objURL = window.URL.createObjectURL(blob);

  if (window.__Xr_objURL_forCreatingFile__) {
      window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
  }
  window.__Xr_objURL_forCreatingFile__ = objURL;

  let a = document.createElement('a');

  // 저장
  a.download = fileName;
  a.href = objURL;
  a.click();
}

/* JSON 데이터 읽기 */
// 파일 읽기
function FileOpen() {
  var input = document.createElement("input");

  input.type = "file";
  input.accept = "json";

  input.onchange = function (event) {
      FileProcess(event.target.files[0]);
  };

  input.click();
}

// 읽은 파일 처리
function FileProcess(file) {
  var reader = new FileReader();

  reader.onload = function () {
    let getData = reader.result;
    //jsondata.value = getData;
    FileDataRead(getData);
  };

  reader.readAsText(file, "utf-8");
}

// 파일에서 읽어들인 개수 차이 만큼 아이템 입력 창 생성/제거
function FileDataInputMake(target, gap) {
  var num = getTarget(target);

  if(gap != 0) {
    let loop = Math.abs(gap/arraySET[num]);

    if(gap > 0) {
      for(let i = 0; i < loop; i++) {
        ItemControl('add', arrayCMD[num]);
      }
    } else if(gap < 0) {
      for(let i = 0; i < loop; i++) {
        ItemControl('remove', arrayCMD[num]);
      }
    }
  }
}

// 아이템 입력 창 데이터 입력
function FileDataInputWrite(target, data) {
  var num = getTarget(target);

  for(let i = 0; i<data.length; i++) {
    var tempIMG = arrayCMD[num] + "_i" + (i+1);
    var tempURL = arrayCMD[num] + "_u" + (i+1);

    //console.log(arrayCMD[num], i, data[i].img, data[i].url);

    document.getElementById(tempIMG).value = data[i].img;
    document.getElementById(tempURL).value = data[i].url;
  }
}

// 파일에서 읽은 데이터 처리
function FileDataRead(data) {
  let json = JSON.parse(data);
  //console.log(json);

  // bp 0 / evs 1 / evd 2 / ebseven 3 / ebfive 4 / edc 5 / dsu 6 / ds 7 / bebseven 8 / bebfive 9 / bdc 10 / bdsu 11 / ui 12
  // 입력 창 생성
  if(json.EVS) FileDataInputMake('evs', json.EVS - arrayCNT[1]);
  if(json.EVD) FileDataInputMake('evd', json.EVD - arrayCNT[2]);
  if(json.EBFIVE) FileDataInputMake('ebfive', json.EBFIVE - arrayCNT[4]);
  if(json.EDC) FileDataInputMake('edc', json.EDC - arrayCNT[5]);
  if(json.DSU) FileDataInputMake('dsu', json.DSU - arrayCNT[6]);
  if(json.DS) FileDataInputMake('ds', json.DS - arrayCNT[7]);
  if(json.BEBFIVE) FileDataInputMake('bebfive', json.BEBFIVE - arrayCNT[9]);
  if(json.BDC) FileDataInputMake('bdc', json.BDC - arrayCNT[10]);
  if(json.BDSU) FileDataInputMake('bdsu', json.BDSU - arrayCNT[11]);

  // 카운트 값 수정
  if(json.EVS) arrayCNT[1] = json.EVS;
  if(json.EVD) arrayCNT[2] = json.EVD;
  if(json.EBFIVE) arrayCNT[4] = json.EBFIVE;
  if(json.EDC) arrayCNT[5] = json.EDC;
  if(json.DSU) arrayCNT[6] = json.DSU;
  if(json.DS) arrayCNT[7] = json.DS;
  if(json.BEBFIVE) arrayCNT[9] = json.BEBFIVE;
  if(json.BDC) arrayCNT[10] = json.BDC;
  if(json.BDSU) arrayCNT[11] = json.BDSU;

  // 입력 창에 데이터 입력
  if(json.dataBP) FileDataInputWrite('bp', json.dataBP);
  if(json.dataEVS) FileDataInputWrite('evs', json.dataEVS);
  if(json.dataEVD) FileDataInputWrite('evd', json.dataEVD);
  if(json.dataEBSEVEN) FileDataInputWrite('ebseven', json.dataEBSEVEN);
  if(json.dataEBFIVE) FileDataInputWrite('ebfive', json.dataEBFIVE);
  if(json.dataEDC) FileDataInputWrite('edc', json.dataEDC);
  if(json.dataDSU) FileDataInputWrite('dsu', json.dataDSU);
  if(json.dataDS) FileDataInputWrite('ds', json.dataDS);
  if(json.dataBEBSEVEN) FileDataInputWrite('bebseven', json.dataBEBSEVEN);
  if(json.dataBEBFIVE) FileDataInputWrite('bebfive', json.dataBEBFIVE);
  if(json.dataBDC) FileDataInputWrite('bdc', json.dataBDC);
  if(json.dataBDSU) FileDataInputWrite('bdsu', json.dataBDSU);
  if(json.dataUI) FileDataInputWrite('ui', json.dataUI);
}


/* 코드 관련 */
/* 코드 복사 */
function CodeCopy() {
  var copyText = document.getElementById("codeHTTPS");
  copyText.select();
  document.execCommand("copy");
}

/* 레이아웃 생성 */
function Make() {
  // 아이템 리스트업
  ItemArrayMake();
  let num = 0;
  let i = 0;
  let j = 0;
  let temp;

  // 페이지 생성 시작
  let page = "<!-- develoid community gate | responsible: heart -->";
  // 상단 테이블 생성
  page += "<center>"
  page += "<table width=836 cellspacing=6 cellpadding=0>";
  page += "<tbody>" 

  // 베스트포토 및 공지사항 생성
  temp = arrayITEM['bp'];

  page += "<tr>";
  page += "<td width=492 rowspan=3><a href='"+temp[0].url+"' target='_blank'><img src='"+temp[0].img+"' style='width: 492px; height: auto;'></a></td>";
  page += "<td width=160><a href='"+temp[1].url+"' target='_blank'><img src='"+temp[1].img+"' style='width: 160px; height: auto;'></a></td>";
  page += "<td width=160><a href='"+temp[2].url+"' target='_blank'><img src='"+temp[2].img+"' style='width: 160px; height: auto;'></a></td>";
  page += "</tr><tr>";
  page += "<td width=160><a href='"+temp[3].url+"' target='_blank'><img src='"+temp[3].img+"' style='width: 160px; height: auto;'></a></td>";
  page += "<td width=160><a href='"+temp[4].url+"' target='_blank'><img src='"+temp[4].img+"' style='width: 160px; height: auto;'></a></td>";
  page += "</tr><tr>";
  page += "<td width=326 colspan=2><a href='"+temp[5].url+"' target='_blank'><img src='"+temp[5].img+"' style='width: 326px; height: auto;'></a></td>";
  page += "</tr>";

  page += "</tbody></table>";


  // 상단 테이블 생성
  page += "<table width=836 cellspacing=6 cellpadding=0>";
  page += "<tbody>" 

  // 이벤트 1단 생성
  temp = arrayITEM['evs'];

  num = getTarget('evs');
  for(i = 0; i<arrayCNT[num]; i++) {
    page += "<tr>";
    page += "<td colspan=5><a href='"+temp[i].url+"' target='_blank'><img src='"+temp[i].img+"' style='width: 824px; height: auto;'></a></td>";
    page += "</tr>";
  }

  page += "</tbody></table>";


  // 상단 테이블 생성
  page += "<table width=836 cellspacing=6 cellpadding=0>";
  page += "<tbody>" 

  // 이벤트 2단
  temp = arrayITEM['evd'];

  num = getTarget('evd');
  for(i = 0; i<temp.length; i+=2) {
    //console.log(arrayCNT[num]/arraySET[num]);
    page += "<tr>";

    for(j = 0; j<2; j++) {
      //console.log(i, j, i+j);

      page += "<td><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' style='width: 409px; height: 166px;'></a></td>";
    }

    page += "</tr>";
  }

  page += "</tbody></table>";


  // 상단 테이블 생성
  page += "<table width=836 cellspacing=6 cellpadding=0>";
  page += "<tbody>"

  // 디벨베스트 메뉴 생성
  temp = arrayITEM['ui'];

  page += "<tr>";
  page += "<td colspan=5><a href='"+temp[0].url+"' target='_blank'><img src='"+temp[0].img+"' style='width: 824px; height: auto;'></a></td>";
  page += "</tr>";

  page += "</tbody></table>";


  // 상단 테이블 생성
  page += "<table width=836 cellspacing=6 cellpadding=0>";
  page += "<tbody>" 

  // 디벨베스트 아이템 생성 (7)
  temp = arrayITEM['ebseven'];

  num = getTarget('ebseven');
  for(i = 0; i<temp.length; i+=7) {
    //console.log(arrayCNT[num]/arraySET[num]);
    page += "<tr>";
    page += "<td colspan=2 rowspan=2><a href='"+temp[0].url+"' target='_blank'><img src='"+temp[0].img+"' style='width: 326px; height: auto;'></a></td>";

    for(j = 1; j<4; j++) {
      //console.log(i, j, i+j);
      page += "<td><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' style='width: 160px; height: auto;'></a></td>";
    }
    page += "</tr>";
    page += "<tr>";
    for(j = 4; j<7; j++) {
      //console.log(i, j, i+j);
      page += "<td><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' style='width: 160px; height: auto;'></a></td>";
    }
    page += "</tr>";
  }  

  // 디벨베스트 아이템 생성 (5)
  temp = arrayITEM['ebfive'];

  num = getTarget('ebfive');
  for(i = 0; i<temp.length; i+=5) {
    //console.log(arrayCNT[num]/arraySET[num]);
    page += "<tr>";

    for(j = 0; j<5; j++) {
      //console.log(i, j, i+j);

      page += "<td><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' style='width: 160px; height: auto;'></a></td>";
    }

    page += "</tr>";
  }

  page += "</tbody></table>";


  // 상단 테이블 생성
  page += "<table width=836 cellspacing=6 cellpadding=0>";
  page += "<tbody>"

  // 디벨콘텐츠 메뉴 생성
  temp = arrayITEM['ui'];

  page += "<tr>";
  page += "<td colspan=5><a href='"+temp[1].url+"' target='_blank'><img src='"+temp[1].img+"' style='width: 824px; height: auto;'></a></td>";
  page += "</tr>";

  page += "</tbody></table>";


  // 상단 테이블 생성
  page += "<table width=836 cellspacing=6 cellpadding=0>";
  page += "<tbody>" 

  // 디벨콘텐츠 아이템 생성
  temp = arrayITEM['edc'];

  num = getTarget('edc');
  for(i = 0; i<temp.length; i+=5) {
    //console.log(arrayCNT[num]/arraySET[num]);
    page += "<tr>";

    for(j = 0; j<5; j++) {
      //console.log(i, j, i+j);

      page += "<td><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' style='width: 160px; height: auto;'></a></td>";
    }

    page += "</tr>";
  }

  page += "</tbody></table>";


/* 
  // 상단 테이블 생성
  page += "<table width=836 cellspacing=6 cellpadding=0>";
  page += "<tbody>"

  // 디벨서포터즈 메뉴 생성
  temp = arrayITEM['ui'];

  page += "<tr>";
  page += "<td colspan=5><a href='"+temp[2].url+"' target='_blank'><img src='"+temp[2].img+"' style='width: 824px; height: auto;'></a></td>";
  page += "</tr>";

  page += "</tbody></table>";


  // 상단 테이블 생성
  page += "<table width=836 cellspacing=6 cellpadding=0>";
  page += "<tbody>" 
  
  // 디벨서포터즈 아이템 생성
  temp = arrayITEM['dsu'];

  num = getTarget('dsu');
  for(i = 0; i<temp.length; i+=5) {
    page += "<tr>";

    for(j = 0; j<5; j++) {
      page += "<td><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' style='width: 160px; height: auto;'></a></td>";
    }

    page += "</tr>";
  }

  page += "</tbody></table>";

*/


  // 상단 테이블 생성
  page += "<table width=836 cellspacing=6 cellpadding=0>";
  page += "<tbody>"

  // 디벨스폰서 메뉴 생성
  temp = arrayITEM['ui'];

  page += "<tr>";
  page += "<td colspan=5><a href='"+temp[3].url+"' target='_blank'><img src='"+temp[3].img+"' style='width: 824px; height: auto;'></a></td>";
  page += "</tr>";

  page += "</tbody></table>";


  // 상단 테이블 생성
  page += "<table width=836 cellspacing=6 cellpadding=0>";
  page += "<tbody>" 

  // 디벨스폰서 아이템 생성
  temp = arrayITEM['ds'];

  num = getTarget('ds');
  for(i = 0; i<temp.length; i+=5) {
    page += "<tr>";

    for(j = 0; j<5; j++) {
      page += "<td><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' style='width: 160px; height: auto;'></a></td>";
    }

    page += "</tr>";
  }

  page += "</tbody></table>";


 // 상단 테이블 생성
 page += "<table width=836 cellspacing=6 cellpadding=0>";
 page += "<tbody>"

 // 지난달 디벨베스트 메뉴 생성
 temp = arrayITEM['ui'];

 page += "<tr>";
 page += "<td colspan=5><a href='"+temp[4].url+"' target='_blank'><img src='"+temp[4].img+"' style='width: 824px; height: auto;'></a></td>";
 page += "</tr>";

 page += "</tbody></table>";


 // 상단 테이블 생성
 page += "<table width=836 cellspacing=6 cellpadding=0>";
 page += "<tbody>" 

 // 지난달 디벨베스트 아이템 생성 (7)
 temp = arrayITEM['bebseven'];

 num = getTarget('bebseven');
 for(i = 0; i<temp.length; i+=7) {
   //console.log(arrayCNT[num]/arraySET[num]);
   page += "<tr>";
   page += "<td colspan=2 rowspan=2><a href='"+temp[0].url+"' target='_blank'><img src='"+temp[0].img+"' style='width: 326px; height: auto;'></a></td>";

   for(j = 1; j<4; j++) {
     //console.log(i, j, i+j);
     page += "<td><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' style='width: 160px; height: auto;'></a></td>";
   }
   page += "</tr>";
   page += "<tr>";
   for(j = 4; j<7; j++) {
     //console.log(i, j, i+j);
     page += "<td><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' style='width: 160px; height: auto;'></a></td>";
   }
   page += "</tr>";
 }  

 // 지난달 디벨베스트 아이템 생성 (5)
 temp = arrayITEM['bebfive'];

 num = getTarget('bebfive');
 for(i = 0; i<temp.length; i+=5) {
   //console.log(arrayCNT[num]/arraySET[num]);
   page += "<tr>";

   for(j = 0; j<5; j++) {
     //console.log(i, j, i+j);

     page += "<td><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' style='width: 160px; height: auto;'></a></td>";
   }

   page += "</tr>";
 }

/* 
  // 상단 테이블 생성
  page += "<table width=836 cellspacing=6 cellpadding=0>";
  page += "<tbody>"
  
  // 지난달 디벨콘텐츠 메뉴 생성
  temp = arrayITEM['ui'];

  page += "<tr>";
  page += "<td colspan=5><a href='"+temp[5].url+"' target='_blank'><img src='"+temp[5].img+"' style='width: 824px; height: auto;'></a></td>";
  page += "</tr>";

  page += "</tbody></table>";


  // 상단 테이블 생성
  page += "<table width=836 cellspacing=6 cellpadding=0>";
  page += "<tbody>" 

  // 지난달 디벨콘텐츠 아이템 생성
  temp = arrayITEM['bdc'];

  num = getTarget('bdc');
  for(i = 0; i<temp.length; i+=5) {
    page += "<tr>";

    for(j = 0; j<5; j++) {
      page += "<td><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' style='width: 160px; height: auto;'></a></td>";
    }

    page += "</tr>";
  }
  
  page += "</tbody></table>";

*/
  /*
  // 상단 테이블 생성
  page += "<table width=836 cellspacing=6 cellpadding=0>";
  page += "<tbody>"

  // 지난달 디벨서포터즈 메뉴 생성
  temp = arrayITEM['ui'];

  page += "<tr>";
  page += "<td colspan=5><a href='"+temp[6].url+"' target='_blank'><img src='"+temp[6].img+"' style='width: 824px; height: auto;'></a></td>";
  page += "</tr>";

  page += "</tbody></table>";


  // 상단 테이블 생성
  page += "<table width=836 cellspacing=6 cellpadding=0>";
  page += "<tbody>" 
  
  // 지난달 디벨서포터즈 아이템 생성
  temp = arrayITEM['bdsu'];

  num = getTarget('bdsu');
  for(i = 0; i<temp.length; i+=5) {
    page += "<tr>";

    for(j = 0; j<5; j++) {
      page += "<td><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' style='width: 160px; height: auto;'></a></td>";
    }

    page += "</tr>";
  }

  page += "</tbody></table>";

  */


  // 상단 테이블 생성
  page += "<table width=836 cellspacing=6 cellpadding=0>";
  page += "<tbody>"
  
  // 하단 생성
  temp = arrayITEM['ui'];

  page += "<tr>";
  page += "<td colspan=5><a href='"+temp[7].url+"' target='_blank'><img src='"+temp[7].img+"' style='width: 824px; height: auto;'></a></td>";
  page += "</tr>";

  // 콘텐츠 테이블 종료
  page += "</tbody>";
  page += "</table>";
  page += "</center>"

  // 페이지 생성 완료

  // HTTP 버전 페이지 생성 (20.7. 이후 기본값 HTTPS)
  var tempPage = page.replace(/https:\/\/cafefiles.pstatic.net/g, 'http://cafefiles.pstatic.net');
  tempPage = tempPage.replace(/https:\/\/postfiles.pstatic.net/g, 'http://postfiles.pstatic.net');

  // 페이지 출력
  document.getElementById("codeHTTPS").value = page;
  document.getElementById("codeHTTP").value = tempPage;
  CodeCopy();
}
