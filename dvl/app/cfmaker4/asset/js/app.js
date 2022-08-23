// Top Menu = TM
// Best Photo = BP
// Event Banner = EB
// Best & Content = BC
// Sponsor Banner = SB
// Footer = FT

// 베스트포토 및 공지사항 bp
// 이벤트 1단 evs
// 이벤트 2단 evd
// 디벨베스트 eb
// 디벨콘텐츠 dc
// 디벨서포터즈 dsu
// 디벨스폰서 ds
// 지난달: 접두사 b
// 베이스 인터페이스 ui



// bp 0 / evs 1 / evd 2 / eb 3 / dc 4 / dsu 5 / ds 6 / beb 7 / bdc 8 / bdsu 9 / ui 10
let arrayCNT = new Array(11,1,1,5,5,5,1);
let arraySET = new Array(1,1,1,5,5,5,1);
let arrayCMD = new Array("bp", "evs", "evd", "eb", "dc", "dsu", "ds", "deb", "bdc", "bdsu", "ui");
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
  else if(target == "eb") out = 3;
  else if(target == "dc") out = 4;
  else if(target == "dsu") out = 5;
  else if(target == "ds") out = 6;
  else if(target == "beb") out = 7;
  else if(target == "bdc") out = 8;
  else if(target == "bdsu") out = 9;
  else if(target == "ui") out = 10;

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

      if((num == 3 && i > 2) || (num == 5 && i > 2)) { // 베스트 & 콘텐츠 중 콘텐츠 영역 색상 구분
        $(targetId).append('<tr id="'+arrayCMD[num]+'_'+arrayCNT[num]+'"><td>'+arrayCNT[num]+'</td><td><input type="url" id="'+arrayCMD[num]+'_i'+arrayCNT[num]+'" ondrop="dropIMG(event, this.id)" class="dvlc"></td><td><input type="url" id="'+arrayCMD[num]+'_u'+arrayCNT[num]+'" ondrop="dropURL(event, this.id)" class="dvlc"></td></tr>');
      } else { // 목록 추가
        $(targetId).append('<tr id="'+arrayCMD[num]+'_'+arrayCNT[num]+'"><td>'+arrayCNT[num]+'</td><td><input type="url" id="'+arrayCMD[num]+'_i'+arrayCNT[num]+'" ondrop="dropIMG(event, this.id)"></td><td><input type="url" id="'+arrayCMD[num]+'_u'+arrayCNT[num]+'" ondrop="dropURL(event, this.id)"></td></tr>');
      }
    }
  } else if(type == "remove") { // 목록 제거 할 경우
    if(arrayCNT[num] > 0) { // 마이너스 되는 경우 방지
      for(let i=0; i < arraySET[num]; i++) {
        let targetId = "#" + arrayCMD[num] + "_" + arrayCNT[num]; // 목표 지정
        $(targetId).remove(); // 삭제
        arrayCNT[num]--; // 카운트 감소
      }
    } else {
      alert('target not found');
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

// 전체 아이템 오브젝트 배열 생성 및 코드 복사
function ItemArrayMake() {
  arrayITEM = new Array();

  ItemObjectMake('bp');
  ItemObjectMake('evs');
  ItemObjectMake('evd');
  ItemObjectMake('eb');
  ItemObjectMake('dc');
  ItemObjectMake('dsu');
  ItemObjectMake('ds');
  ItemObjectMake('beb');
  ItemObjectMake('bdc');
  ItemObjectMake('bdsu');
  ItemObjectMake('ui');
  var copyText = document.getElementById("codeHTTPS");
  copyText.select();
  document.execCommand("copy");
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
  let s = now.getSeconds();

  if(m < 10) m = "0" + m;
  if(d < 10) d = "0" + d;

  // 파일 명 생성
  let fileName = "DVL-CFM3-JSON-"+y+m+d+h+mm+s+".json";

  // 전체 아이템 오브젝트 배열 생성
  ItemArrayMake();

  // 오브젝트 생성
  let json = new Object;
  json.time = ""+y+m+d+h+mm+s;
  //json.TM = arrayCNT[0];
  json.bp = arrayCNT[1];
  json.evs = arrayCNT[2];
  json.evd = arrayCNT[3];
  json.eb = arrayCNT[4];
  json.dc = arrayCNT[5];
  json.dsu = arrayCNT[6];
  json.ds = arrayCNT[7];
  json.beb = arrayCNT[8];
  json.bdc = arrayCNT[9];
  json.bdsu = arrayCNT[10];
  json.ui = arrayCNT[11];
  //json.FT = arrayCNT[6];
  json.databp = arrayITEM['bp'];
  json.dataevs = arrayITEM['evs'];
  json.dataevd = arrayITEM['evd'];
  json.dataeb = arrayITEM['eb'];
  json.datadc = arrayITEM['dc'];
  json.datadsu = arrayITEM['dsu'];
  json.datads = arrayITEM['ds'];
  json.databeb = arrayITEM['beb'];
  json.databdc = arrayITEM['bdc'];
  json.databdsu = arrayITEM['bdsu'];
  json.dataui = arrayITEM['ui'];
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

  // 입력 창 생성
  if(json.bp) FileDataInputMake('bp', json.bp - arrayCNT[1]);
  if(json.evs) FileDataInputMake('evs', json.evs - arrayCNT[2]);
  if(json.evd) FileDataInputMake('evd', json.evd - arrayCNT[3]);
  if(json.eb) FileDataInputMake('eb', json.eb - arrayCNT[4]);
  if(json.dc) FileDataInputMake('dc', json.dc - arrayCNT[5]);
  if(json.dsu) FileDataInputMake('dsu', json.dsu - arrayCNT[6]);
  if(json.ds) FileDataInputMake('ds', json.ds - arrayCNT[7]);
  if(json.beb) FileDataInputMake('beb', json.beb - arrayCNT[8]);
  if(json.bdc) FileDataInputMake('bdc', json.bdc - arrayCNT[9]);
  if(json.bdsu) FileDataInputMake('bdsu', json.bdsu - arrayCNT[10]);
  if(json.ui) FileDataInputMake('ui', json.ui - arrayCNT[11]);

  // 카운트 값 수정
  if(json.bp) arrayCNT[1] = json.bp;
  if(json.evs) arrayCNT[2] = json.evs;
  if(json.evd) arrayCNT[3] = json.evd;
  if(json.eb) arrayCNT[4] = json.eb;
  if(json.dc) arrayCNT[5] = json.dc;
  if(json.dsu) arrayCNT[6] = json.dsu;
  if(json.ds) arrayCNT[7] = json.ds;
  if(json.beb) arrayCNT[8] = json.beb;
  if(json.bdc) arrayCNT[9] = json.bdc;
  if(json.bdsu) arrayCNT[10] = json.bdsu;
  if(json.ui) arrayCNT[11] = json.ui;

  // 입력 창에 데이터 입력
  if(json.databp) FileDataInputWrite('bp', json.databp);
  if(json.dataevs) FileDataInputWrite('evs', json.dataevs);
  if(json.dataevd) FileDataInputWrite('evd', json.dataevd);
  if(json.dataeb) FileDataInputWrite('eb', json.dataeb);
  if(json.datadc) FileDataInputWrite('dc', json.datadc);
  if(json.datadsu) FileDataInputWrite('dsu', json.datadsu);
  if(json.datads) FileDataInputWrite('ds', json.datads);
  if(json.databeb) FileDataInputWrite('beb', json.databeb);
  if(json.databdc) FileDataInputWrite('bdc', json.databdc);
  if(json.databdsu) FileDataInputWrite('bdsu', json.databdsu);
  if(json.dataui) FileDataInputWrite('ui', json.dataui);
}


/* 코드 관련 */

/* 레이아웃 생성 */
function Make() {
  // 아이템 리스트업
  ItemArrayMake();
  let num = 0;
  let i = 0;
  let j = 0;
  let temp;

  // 페이지 생성 시작
  let page = "<!-- develoid community gate | produced by SIRYUA & heart -->";

  // 중앙 정렬
  page += "<center>";

  // 상단 테이블 생성
  page += "<table width=836 cellspacing=6 cellpadding=0>";
  page += "<tbody>"

  // 상단 메뉴 생성
  temp = arrayITEM['tm'];

  page += "<tr>";
  page += "<td width=48><a href='"+temp[0].url+"' target='_blank'><img src='"+temp[0].img+"' style='width: 48px; height: auto;'></a></td>";
  page += "<td width=288><a href='"+temp[1].url+"' target='_blank'><img src='"+temp[1].img+"' style='width: 288px; height: auto;'></a></td>";
  page += "<td width=288><a href='"+temp[2].url+"' target='_blank'><img src='"+temp[2].img+"' style='width: 288px; height: auto;'></a></td>";
  page += "<td width=88><a href='"+temp[3].url+"' target='_blank'><img src='"+temp[3].img+"' style='width: 88px; height: auto;'></a></td>";
  page += "<td width=88><a href='"+temp[4].url+"' target='_blank'><img src='"+temp[4].img+"' style='width: 88px; height: auto;'></a></td>";
  page += "</tr>";

  // 상단 테이블 종료=
  page += "</tbody>";
  page += "</table>";

  // 콘텐츠 테이블 생성
  page += "<table width=836 cellspacing=6 cellpadding=0>";
  page += "<tbody>"

  // 베스트 포토 생성
  temp = arrayITEM['bp'];

  page += "<tr>";
  page += "<td colspan=5><a href='"+temp[0].url+"' target='_blank'><img src='"+temp[0].img+"' style='width: 824px; height: auto;'></a></td>";
  page += "</tr>";

  // 이벤트 배너 생성
  temp = arrayITEM['eb'];

  num = getTarget('eb');
  for(i = 0; i<arrayCNT[num]; i++) {
    page += "<tr>";
    page += "<td colspan=5><a href='"+temp[i].url+"' target='_blank'><img src='"+temp[i].img+"' style='width: 824px; height: auto;'></a></td>";
    page += "</tr>";
  }

  // 베스트 및 콘텐츠 메뉴 생성
  temp = arrayITEM['tm'];

  page += "<tr>";
  page += "<td colspan=3><a href='"+temp[5].url+"' target='_blank'><img src='"+temp[5].img+"' style='width: 492px; height: auto;'></a></td>";
  page += "<td colspan=2><a href='"+temp[6].url+"' target='_blank'><img src='"+temp[6].img+"' style='width: 326px; height: auto;'></a></td>";
  page += "</tr>";

  // 베스트 및 콘텐츠 아이템 생성
  temp = arrayITEM['bc'];

  num = getTarget('bc');
  for(i = 0; i<temp.length; i+=5) {
    //console.log(arrayCNT[num]/arraySET[num]);
    page += "<tr>";

    for(j = 0; j<5; j++) {
      //console.log(i, j, i+j);

      page += "<td><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' style='width: 160px; height: auto;'></a></td>";
    }

    page += "</tr>";
  }

  // 스폰서 메뉴 생성
  temp = arrayITEM['tm'];

  page += "<tr>";
  page += "<td colspan=5><a href='"+temp[7].url+"' target='_blank'><img src='"+temp[7].img+"' style='width: 824px; height: auto;'></a></td>";
  page += "</tr>";

  // 스폰서 아이템 생성
  temp = arrayITEM['sb'];

  num = getTarget('sb');
  for(i = 0; i<temp.length; i+=5) {
    page += "<tr>";

    for(j = 0; j<5; j++) {
      page += "<td><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' style='width: 160px; height: auto;'></a></td>";
    }

    page += "</tr>";
  }

  // 지난 베스트 및 콘텐츠 아이템 생성
  temp = arrayITEM['ob'];

  if(typeof temp[0].img == "undefined" || temp[0].img == null || temp[0].img == "") {
    //console.log("check");
  } else if(temp[0].img != resourceBlank) {
    temp = arrayITEM['tm'];

    page += "<tr>";
    page += "<td colspan=3><a href='"+temp[9].url+"' target='_blank'><img src='"+temp[9].img+"' style='width: 492px; height: auto;'></a></td>";
    page += "<td colspan=2><a href='"+temp[10].url+"' target='_blank'><img src='"+temp[10].img+"' style='width: 326px; height: auto;'></a></td>";
    page += "</tr>";

    temp = arrayITEM['ob'];

    num = getTarget('ob');
    for(i = 0; i<temp.length; i+=5) {
      //console.log(arrayCNT[num]/arraySET[num]);
      page += "<tr>";

      for(j = 0; j<5; j++) {
        //console.log(i, j, i+j);

        page += "<td><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' style='width: 160px; height: auto;'></a></td>";
      }

      page += "</tr>";
    }
  }

  // 하단 생성
  temp = arrayITEM['tm'];

  page += "<tr>";
  page += "<td colspan=5><a href='"+temp[8].url+"' target='_blank'><img src='"+temp[8].img+"' style='width: 824px; height: auto;'></a></td>";
  page += "</tr>";

  // 콘텐츠 테이블 종료
  page += "</tbody>";
  page += "</table>";

  // 중앙 정렬 끝
  page += "</center>";

  // 페이지 생성 완료

  // HTTP 버전 페이지 생성 (20.7. 이후 기본값 HTTPS)
  var tempPage = page.replace(/https:\/\/cafefiles.pstatic.net/g, 'http://cafefiles.pstatic.net');
  tempPage = tempPage.replace(/https:\/\/postfiles.pstatic.net/g, 'http://postfiles.pstatic.net');

  // 페이지 출력
  document.getElementById("codeHTTPS").value = page;
  document.getElementById("codeHTTP").value = tempPage;
  document.getElementById("view").innerHTML = tempPage;
}
