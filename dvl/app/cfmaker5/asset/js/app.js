// 메뉴 menu
// 베스트포토 및 이벤트 1단 evs
// 이벤트 2단 evd
// 디벨베스트 ebseven
// 디벨콘텐츠 edc
// 디벨스폰서 ds
// 지난달: 접두사 b
// 베이스 인터페이스 ui

// menu 0 / evs 1 / evd 2 / ebseven 3 / ebfive 4 / edc 5 / ds 6 / bebseven 7 / bebfive 8 / ui 9
let arrayCNT = new Array(0,0,0,7,0,0,0,7,0,5);
let arraySET = new Array(1,1,2,1,5,5,5,1,5,1);
let arrayCMD = new Array("menu", "evs", "evd", "ebseven", "ebfive", "edc", "ds", "bebseven", "bebfive", "ui");
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
  if(target == "menu") out = 0;
  else if(target == "evs") out = 1;
  else if(target == "evd") out = 2;
  else if(target == "ebseven") out = 3;
  else if(target == "ebfive") out = 4;
  else if(target == "edc") out = 5;
  else if(target == "ds") out = 6;
  else if(target == "bebseven") out = 7;
  else if(target == "bebfive") out = 8;
  else if(target == "ui") out = 9;

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
        '<tr id="'+arrayCMD[num]+'_'+arrayCNT[num]+'"><td class="number"><table_number>'+arrayCNT[num]+'</table_number></td><td><input class="imageid" type="url" id="'+arrayCMD[num]+'_i'+arrayCNT[num]+'" ondrop="dropIMG(event, this.id)"></td><td width="50%" colspan="3"><input class="linkid" type="url" id="'+arrayCMD[num]+'_u'+arrayCNT[num]+'" ondrop="dropURL(event, this.id)"></td></tr>');

    }
  } else if(type == "remove") { // 목록 제거 할 경우
    if(arrayCNT[num] > 0) { // 마이너스 되는 경우 방지
      for(let i=0; i < arraySET[num]; i++) {
        let targetId = "#" + arrayCMD[num] + "_" + arrayCNT[num]; // 목표 지정
        $(targetId).remove(); // 삭제
        arrayCNT[num]--; // 카운트 감소
      }
    } else {
        var alert_description = new Array (
                "그만 누르십시오.",
                "한 번 더 누르시면 서피스 프로 9 (SQ3) 및 서피스 듀오 2 구매를 독촉하는 수가 있습니다.",
                "더 이상 누르지 마십시오.",
                "눌러서 좋을 게 없습니다.",
                "중국식 레몬 닭고기: 얇게 썬 닭고기 가슴살 450그램. 옥수수전분 1작은술. 간장 3큰술. 레몬 1쪽.",
                "마지막 경고입니다.",
                "실제 펜으로 필기를 하는 것처럼 자연스럽게 사용 가능한 Surface 슬림 펜 2는 키보드에 항상 안전하게 보관하면서 무선으로 충전을 할 수 있습니다.",
                "노트북의 강력한 성능과 유동적으로 활용 가능한 태블릿 모드를 겸비한 Surface Pro 9만 있으면 업무 처리, 콘텐츠 스트리밍, 여가 시간 활용 등 원하는 모든 작업을 수행할 수 있습니다.",
                "한 번 더 누르시면 IP 추적과 DDOS 공격을 주저하지 않겠습니다."
        );

      i = Math.floor(Math.random()*alert_description.length);
      alert(alert_description[i]);

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

  ItemObjectMake('menu');
  ItemObjectMake('evs');
  ItemObjectMake('evd');
  ItemObjectMake('ebseven');
  ItemObjectMake('ebfive');
  ItemObjectMake('edc');
  ItemObjectMake('ds');
  ItemObjectMake('bebseven');
  ItemObjectMake('bebfive');
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
  let fileName = "CF5_"+y+m+d+"_"+h+""+mm+".json";

  // 전체 아이템 오브젝트 배열 생성
  ItemArrayMake();

  // menu 0 / evs 1 / evd 2 / ebseven 3 / ebfive 4 / edc 5 / ds 6 / bebseven 7 / bebfive 8 / ui 9
  // 오브젝트 생성
  let json = new Object;
  json.time = ""+y+m+d+h+mm;
  //json.TM = arrayCNT[0];
  json.MENU = arrayCNT[0];
  json.EVS = arrayCNT[1];
  json.EVD = arrayCNT[2];
  json.EBFIVE = arrayCNT[4];
  json.EDC = arrayCNT[5];
  json.DS = arrayCNT[6];
  json.BEBFIVE = arrayCNT[8];
  //json.FT = arrayCNT[6];
  json.dataMENU = arrayITEM['menu'];
  json.dataEVS = arrayITEM['evs'];
  json.dataEVD = arrayITEM['evd'];
  json.dataEBSEVEN = arrayITEM['ebseven'];
  json.dataEBFIVE = arrayITEM['ebfive'];
  json.dataEDC = arrayITEM['edc'];
  json.dataDS = arrayITEM['ds'];
  json.dataBEBSEVEN = arrayITEM['bebseven'];
  json.dataBEBFIVE = arrayITEM['bebfive'];
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

  // menu 0 / evs 1 / evd 2 / ebseven 3 / ebfive 4 / edc 5 / ds 6 / bebseven 7 / bebfive 8 / ui 9
  // 입력 창 생성
  if(json.MENU) FileDataInputMake('menu', json.MENU - arrayCNT[0]);
  if(json.EVS) FileDataInputMake('evs', json.EVS - arrayCNT[1]);
  if(json.EVD) FileDataInputMake('evd', json.EVD - arrayCNT[2]);
  if(json.EBFIVE) FileDataInputMake('ebfive', json.EBFIVE - arrayCNT[4]);
  if(json.EDC) FileDataInputMake('edc', json.EDC - arrayCNT[5]);
  if(json.DS) FileDataInputMake('ds', json.DS - arrayCNT[6]);
  if(json.BEBFIVE) FileDataInputMake('bebfive', json.BEBFIVE - arrayCNT[8]);


  // 카운트 값 수정
  if(json.MENU) arrayCNT[0] = json.MENU;
  if(json.EVS) arrayCNT[1] = json.EVS;
  if(json.EVD) arrayCNT[2] = json.EVD;
  if(json.EBFIVE) arrayCNT[4] = json.EBFIVE;
  if(json.EDC) arrayCNT[5] = json.EDC;
  if(json.DS) arrayCNT[6] = json.DS;
  if(json.BEBFIVE) arrayCNT[8] = json.BEBFIVE;


  // 입력 창에 데이터 입력
  if(json.dataMENU) FileDataInputWrite('menu', json.dataMENU);
  if(json.dataEVS) FileDataInputWrite('evs', json.dataEVS);
  if(json.dataEVD) FileDataInputWrite('evd', json.dataEVD);
  if(json.dataEBSEVEN) FileDataInputWrite('ebseven', json.dataEBSEVEN);
  if(json.dataEBFIVE) FileDataInputWrite('ebfive', json.dataEBFIVE);
  if(json.dataEDC) FileDataInputWrite('edc', json.dataEDC);
  if(json.dataDS) FileDataInputWrite('ds', json.dataDS);
  if(json.dataBEBSEVEN) FileDataInputWrite('bebseven', json.dataBEBSEVEN);
  if(json.dataBEBFIVE) FileDataInputWrite('bebfive', json.dataBEBFIVE);
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
  page += "<center>";
  page += "<div style='display:flex; flex-direction: column; margin-top: -12px; padding: 6px; gap: 6px; width: 824px;'>";



  // 상단 메뉴
  temp = arrayITEM['menu'];

  page += "<div style='display: flex; justify-content: center; gap: 6px; max-width: 824px;'>";

  num = getTarget('menu');
  for(i = 0; i<arrayCNT[num]; i++) {
      page += "<a href='"+temp[i].url+"' target='_blank'><img src='"+temp[i].img+"' style='width: auto; max-height: 48px; border-radius: 4px;'></a>";
  }

  page += "</div>";


  // 베스트포토 및 이벤트 1단
  temp = arrayITEM['evs'];

  page += "<div style='display:flex; flex-direction: column; flex: 1; justify-content:center; gap:6px; max-width:824px;'>";

  num = getTarget('evs');
  for(i = 0; i<arrayCNT[num]; i++) {
      page += "<a href='"+temp[i].url+"' target='_blank'><img src='"+temp[i].img+"' style='width: 824px; height: auto; border-radius: 4px;'></a>";
  }

  page += "</div>";


  // 이벤트 2단
  temp = arrayITEM['evd'];
  num = getTarget('evd');
  for(i = 0; i<temp.length; i+=2) {
      //console.log(arrayCNT[num]/arraySET[num]);
      page += "<div style='display: flex; flex: 1; justify-content: center; gap: 6px; max-width: 824px;'>"
      for(j = 0; j<2; j++) {
          //console.log(i, j, i+j);

          page += "<div><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' style='width: 409px; height: auto; border-radius: 4px;'></a></div>";
      }
      page += "</div>";
  }


  // 디벨베스트 메뉴
  temp = arrayITEM['ui'];

  page += "<div style='display: flex; justify-content: space-between; align-items: center; width: 824px; height: 38px;'>";
  page += "<div style='width: 6px; height: 6px; padding: 12px;'></div>";
  page += "<div style='max-height: 100%;'>"
    page += "<a href='"+temp[0].url+"' target='_blank' style='display: block; font-size: 0;'><img src='"+temp[0].img+"' style='max-width: auto; max-height: 16px;'></a>";
  page += "</div>";
  page += "<div>"
  page += "<a href='https://cafe.naver.com/develoid/menu/1363' target='_blank'><img src='https://bard.develoid.net/arrow_external.png' style='max-width: auto; height: 6px; padding: 16px;'></a>";
  page += "</div>";
  page += "</div>";


  // 디벨베스트 아이템 생성 (7)
  temp = arrayITEM['ebseven'];

  page += "<div style='display: grid; grid-template-columns: 326px repeat(3, 160px); grid-template-rows: repeat(2, 160px); gap: 6px;'>";
  num = getTarget('ebseven');
  for(i = 0; i<temp.length; i+=7) {
    //console.log(arrayCNT[num]/arraySET[num]);
      page += "<div style='grid-row: auto / span 2; width: 326px; height: 326px;'><a href='"+temp[0].url+"' target='_blank'><img src='"+temp[0].img+"' width='326' height='326' style='max-width: 326px; max-height: 326px; border-radius: 4px;'></a></div>";

    for(j = 1; j<7; j++) {
      //console.log(i, j, i+j);
        page += "<div style='width: 160px; height: 160px;'><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' width='160' height='160' style='max-width: 160px; max-height: 160px; border-radius: 4px;'></a></div>";
    }
  }
  page += "</div>"

  // 디벨베스트 아이템 생성 (5)
  temp = arrayITEM['ebfive'];
  num = getTarget('ebfive');
  for(i = 0; i<temp.length; i+=5) {
      //console.log(arrayCNT[num]/arraySET[num]);
      page += "<div style='display: flex; flex: 1; justify-content: center; gap: 6px; width: 824px;'>"
      for(j = 0; j<5; j++) {
          //console.log(i, j, i+j);

          page += "<div style='width: 160px; height: 160px;'><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' width='160' height='160' style='max-width: 160px; max-height: 160px; border-radius: 4px;'></a></div>";
      }
      page += "</div>";
  }


  // 디벨콘텐츠 메뉴 생성
  temp = arrayITEM['ui'];

  page += "<div style='display: flex; justify-content: space-between; align-items: center; width: 824px;'>";
  page += "<div style='width: 6px; height: 6px; padding: 12px;'></div>";
  page += "<div style='max-height: 100%;'>"
    page += "<a href='"+temp[1].url+"' target='_blank' style='display: block; font-size: 0;'><img src='"+temp[1].img+"' style='max-width: auto; max-height: 16px;'></a>";
  page += "</div>";
  page += "<div>"
    page += "<a href='https://cafe.naver.com/develoid/menu/1312' target='_blank'><img src='https://bard.develoid.net/arrow_external.png' style='max-width: auto; height: 6px; padding: 16px;'></a>";
  page += "</div>";
  page += "</div>";


  // 디벨콘텐츠 아이템 생성 (5)
    temp = arrayITEM['edc'];
    num = getTarget('edc');
    for(i = 0; i<temp.length; i+=5) {
        //console.log(arrayCNT[num]/arraySET[num]);
        page += "<div style='display: flex; flex: 1; justify-content: center; gap: 6px; width: 824px;'>"
        for(j = 0; j<5; j++) {
            //console.log(i, j, i+j);

            page += "<div style='width: 160px; height: 160px;'><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' width='160' height='160' style='max-width: 160px; max-height: 160px; border-radius: 4px;'></a></div>";
        }
        page += "</div>";
    }

  // 디벨스폰서 메뉴 생성
  temp = arrayITEM['ui'];

    page += "<div style='display: flex; justify-content: center; align-items: center; width: 824px; height: 38px;'>";
    page += "<div style='max-height: 100%;'>"
    page += "<a href='"+temp[2].url+"' target='_blank' style='display: block; font-size: 0;'><img src='"+temp[2].img+"' style='max-width: auto; max-height: 16px;'></a>";
    page += "</div>";
    page += "</div>";


  // 디벨스폰서 생성
    temp = arrayITEM['ds'];
    num = getTarget('ds');
    for(i = 0; i<temp.length; i+=5) {
        //console.log(arrayCNT[num]/arraySET[num]);
        page += "<div style='display: flex; flex: 1; justify-content: center; gap: 6px; width: 824px;'>"
        for(j = 0; j<5; j++) {
            //console.log(i, j, i+j);

            page += "<div style='width: 160px; height: 160px;'><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' width='160' height='160' style='max-width: 160px; max-height: 160px; border-radius: 4px;'></a></div>";
        }
        page += "</div>";
    }


 // 지난달 디벨베스트 메뉴 생성
 temp = arrayITEM['ui'];

    page += "<div style='display: flex; justify-content: center; align-items: center; width: 824px; height: 38px;'>";
    page += "<div style='max-height: 100%;'>"
    page += "<a href='"+temp[3].url+"' target='_blank' style='display: block; font-size: 0;'><img src='"+temp[3].img+"' style='max-width: auto; max-height: 16px;'></a>";
    page += "</div>";
    page += "</div>";


 // 지난달 디벨베스트 아이템 생성 (7)
    temp = arrayITEM['bebseven'];

    page += "<div style='display: grid; grid-template-columns: 326px repeat(3, 160px); grid-template-rows: repeat(2, 160px); gap: 6px;'>";
    num = getTarget('bebseven');
    for(i = 0; i<temp.length; i+=7) {
        //console.log(arrayCNT[num]/arraySET[num]);
        page += "<div style='grid-row: auto / span 2; width: 326px; height: 326px;'><a href='"+temp[0].url+"' target='_blank'><img src='"+temp[0].img+"' width='326' height='326' style='max-width: 326px; max-height: 326px; border-radius: 4px;'></a></div>";

        for(j = 1; j<7; j++) {
            //console.log(i, j, i+j);
            page += "<div style='width: 160px; height: 160px;'><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' width='160' height='160' style='max-width: 160px; max-height: 160px; border-radius: 4px;'></a></div>";
        }
    }
    page += "</div>"

 // 지난달 디벨베스트 아이템 생성 (5)
 temp = arrayITEM['bebfive'];
    num = getTarget('bebfive');
 for(i = 0; i<temp.length; i+=5) {
     //console.log(arrayCNT[num]/arraySET[num]);
     page += "<div style='display: flex; flex: 1; justify-content: center; gap: 6px; width: 824px;'>"
     for(j = 0; j<5; j++) {
         //console.log(i, j, i+j);

         page += "<div style='width: 160px; height: 160px;'><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' width='160' height='160' style='max-width: 160px; max-height: 160px; border-radius: 4px;'></a></div>";
     }
     page += "</div>";
 }


  // 하단 생성
  temp = arrayITEM['ui'];

     page += "<div style='display: flex; justify-content: center; align-items: center; width: 824px; padding: 12px;'>";
     page += "<div style='max-height: 100%;'>"
        page += "<a href='"+temp[4].url+"' target='_blank'><img src='"+temp[4].img+"' style='max-width: auto; max-height: 30px;'></a>";
     page += "</div>";
     page += "</div>";

  // 콘텐츠 테이블 종료
  page += "</div>";
  page += "</center>";

  // 페이지 생성 완료

  // HTTP 버전 페이지 생성 (20.7. 이후 기본값 HTTPS)
  var tempPage = page.replace(/https:\/\/cafefiles.pstatic.net/g, 'http://cafefiles.pstatic.net');
  tempPage = tempPage.replace(/https:\/\/postfiles.pstatic.net/g, 'http://postfiles.pstatic.net');

  // 페이지 출력
  document.getElementById("codeHTTPS").value = page;
  document.getElementById("codeHTTP").value = tempPage;
  CodeCopy();
}
