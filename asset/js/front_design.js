// 수정사항 changelog
// 메뉴 menu
// 공지사항 notice
// 베스트포토 bestphoto
// 이벤트 1단 event_single
// 이벤트 2단 event_dual
// 디벨베스트 best_writing
// 지난달 디벨베스트 last_best_writing
// 디벨콘텐츠 content
// 디벨스폰서 sponsor
// 인터페이스 interface

// changelog(0), menu(1), notice(2), bestphoto(3),
// event_single(4), event_dual(5), best_writing(6),
// last_best_writing(7), content(8), sponsor(9),
// interface(10)
let arrayCNT = new Array(1,0,0,1,0,0,7,7,5,0,6);
let arraySET = new Array(1,1,1,1,1,2,1,1,1,5,1);
let arrayCMD = new Array("changelog", "menu", "notice", "bestphoto", "event_single", "event_dual", "best_writing", "last_best_writing", "content", "sponsor", "interface");
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
  if(target == "changelog") out = 0;
  else if(target == "menu") out = 1;
  else if(target == "notice") out = 2;
  else if(target == "bestphoto") out = 3;
  else if(target == "event_single") out = 4;
  else if(target == "event_dual") out = 5;
  else if(target == "best_writing") out = 6;
  else if(target == "last_best_writing") out = 7;
  else if(target == "content") out = 8;
  else if(target == "sponsor") out = 9;
  else if(target == "interface") out = 10;

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
        '<tr id="'+arrayCMD[num]+'_'+arrayCNT[num]+'"><td class="number">'+arrayCNT[num]+'</td><td><input type="url" class="imageid" id="'+arrayCMD[num]+'_i'+arrayCNT[num]+'" ondrop="dropIMG(event, this.id)"></td><td colspan="3"><input type="url" class="linkid" id="'+arrayCMD[num]+'_u'+arrayCNT[num]+'" ondrop="dropURL(event, this.id)"></td></tr>');
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
                "마지막 경고입니다.",
                "실제 펜으로 필기를 하는 것처럼 자연스럽게 사용 가능한 Surface 슬림 펜 2는 키보드에 항상 안전하게 보관하면서 무선으로 충전을 할 수 있습니다.",
                "노트북의 강력한 성능과 유동적으로 활용 가능한 태블릿 모드를 겸비한 Surface Pro 9만 있으면 업무 처리, 콘텐츠 스트리밍, 여가 시간 활용 등 원하는 모든 작업을 수행할 수 있습니다.",
                "한 번 더 누르시면 IP 추적과 DDOS 공격을 주저하지 않겠습니다."
        );
      i = Math.floor(Math.random()*alert_description.length);
      alert(alert_description[i]);
    }
  }
}

/* 데이터 관리 */
// URL 데이터 검사
function ItemDataCheckImg(item) {
  if(item == "" || item == null || item == undefined || ( item != null && typeof item == "object" && !Object.keys(item).length ) ){
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

  for (let i = 0; i < arrayCNT[num]; i++) {
    let temp = new Object();
    let x = i+1;
    let tempIMG = arrayCMD[num] + "_i" + x;
    let tempURL = arrayCMD[num] + "_u" + x;
  
    console.log(tempIMG, tempURL);
  
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
  ItemObjectMake('changelog');
  ItemObjectMake('menu');
  ItemObjectMake('notice');
  ItemObjectMake('bestphoto');
  ItemObjectMake('event_single');
  ItemObjectMake('event_dual');
  ItemObjectMake('best_writing');
  ItemObjectMake('last_best_writing');
  ItemObjectMake('content');
  ItemObjectMake('sponsor');
  ItemObjectMake('interface');
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
  let fileName = "FD-"+y+"."+m+"."+d+"-"+h+"."+mm+".json";

  // 전체 아이템 오브젝트 배열 생성
  ItemArrayMake();

  // 오브젝트 생성
  let json = new Object;
  json.time = ""+y+m+d+h+mm;
  json.MENU = arrayCNT[1];
  json.NOTICE = arrayCNT[2];
  json.EVENT_SINGLE = arrayCNT[4];
  json.EVENT_DUAL = arrayCNT[5];
  json.SPONSOR = arrayCNT[9];
  json.dataCHANGELOG = arrayITEM['changelog'];
  json.dataMENU = arrayITEM['menu'];
  json.dataNOTICE = arrayITEM['notice'];
  json.dataBESTPHOTO = arrayITEM['bestphoto'];
  json.dataEVENT_SINGLE = arrayITEM['event_single'];
  json.dataEVENT_DUAL = arrayITEM['event_dual'];
  json.dataBEST_WRITING = arrayITEM['best_writing'];
  json.dataLAST_BEST_WRITING = arrayITEM['last_best_writing'];
  json.dataCONTENT = arrayITEM['content'];
  json.dataSPONSOR = arrayITEM['sponsor'];
  json.dataINTERFACE = arrayITEM['interface'];

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
  var textarea = document.createElement("textarea");
  textarea.type = "file";
  textarea.accept = "json";
  textarea.onchange = function (event) {
      FileProcess(event.target.files[0]);
  };
  textarea.click();
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
    document.getElementById(tempIMG).value = data[i].img;
    document.getElementById(tempURL).value = data[i].url;
  }
}

// 파일에서 읽은 데이터 처리
function FileDataRead(data) {
  let json = JSON.parse(data);
  //console.log(json);

  // changelog(0), menu(1), notice(2), bestphoto(3),
  // event_single(4), event_dual(5), best_writing(6),
  // last_best_writing(7), content(8), sponsor(9),
  // interface(10)
  // 입력 창 생성
  if(json.MENU) FileDataInputMake('menu', json.MENU - arrayCNT[1]);
  if(json.NOTICE) FileDataInputMake('notice', json.NOTICE - arrayCNT[2]);
  if(json.EVENT_SINGLE) FileDataInputMake('event_single', json.EVENT_SINGLE - arrayCNT[4]);
  if(json.EVENT_DUAL) FileDataInputMake('event_dual', json.EVENT_DUAL - arrayCNT[5]);
  if(json.SPONSOR) FileDataInputMake('sponsor', json.SPONSOR - arrayCNT[9]);
  // 카운트 값 수정
  if(json.MENU) arrayCNT[1] = json.MENU;
  if(json.NOTICE) arrayCNT[2] = json.NOTICE;
  if(json.EVENT_SINGLE) arrayCNT[4] = json.EVENT_SINGLE;
  if(json.EVENT_DUAL) arrayCNT[5] = json.EVENT_DUAL;
  if(json.SPONSOR) arrayCNT[9] = json.SPONSOR;
  // 입력 창에 데이터 입력
  if(json.dataCHANGELOG) FileDataInputWrite('changelog', json.dataCHANGELOG);
  if(json.dataMENU) FileDataInputWrite('menu', json.dataMENU);
  if(json.dataNOTICE) FileDataInputWrite('notice', json.dataNOTICE);
  if(json.dataBESTPHOTO) FileDataInputWrite('bestphoto', json.dataBESTPHOTO);
  if(json.dataEVENT_SINGLE) FileDataInputWrite('event_single', json.dataEVENT_SINGLE);
  if(json.dataEVENT_DUAL) FileDataInputWrite('event_dual', json.dataEVENT_DUAL);
  if(json.dataBEST_WRITING) FileDataInputWrite('best_writing', json.dataBEST_WRITING);
  if(json.dataLAST_BEST_WRITING) FileDataInputWrite('last_best_writing', json.dataLAST_BEST_WRITING);
  if(json.dataCONTENT) FileDataInputWrite('content', json.dataCONTENT);
  if(json.dataSPONSOR) FileDataInputWrite('sponsor', json.dataSPONSOR);
  if(json.dataINTERFACE) FileDataInputWrite('interface', json.dataINTERFACE);
  $('.toast-make').fadeIn(200).delay(3000).fadeOut(200);
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
  page += "<center>";
  // 상단 테이블 생성
  page += "<div style='image-rendering: high-quality; display: flex; flex-direction: column; margin-top: -8px; gap: 4px; width: 836px;'>";

  // 상단 메뉴
  temp = arrayITEM['menu'];
  page += "<div style='image-rendering: high-quality; display: flex; justify-content: center; gap: 4px; max-width: 836px;'>";
  num = getTarget('menu');
  for(i = 0; i<arrayCNT[num]; i++) {
      page += "<a href='"+temp[i].url+"' target='_blank'><img src='"+temp[i].img+"' style='image-rendering: high-quality; width: auto; max-height: 48px; border-radius: 4px;'></a>";
  }
  page += "</div>";

  // 공지사항
  temp = arrayITEM['notice'];
  page += "<div style='image-rendering: high-quality; display:flex; flex-direction: column; flex: 1; justify-content: center; gap: 4px; max-width: 836px;'>";
  num = getTarget('notice');
  for(i = 0; i<arrayCNT[num]; i++) {
      page += "<a href='"+temp[i].url+"' target='_blank'><img src='"+temp[i].img+"' style='image-rendering: high-quality; max-width: 836px; max-height: auto; border-radius: 4px;'></a>";
  }
  page += "</div>";

  // 베스트포토
  temp = arrayITEM['bestphoto'];
  page += "<div style='image-rendering: high-quality; display:flex; flex-direction: column; flex: 1; justify-content: center; gap: 4px; max-width: 836px;'>";
  num = getTarget('bestphoto');
  for(i = 0; i<arrayCNT[num]; i++) {
      page += "<a href='https://go.develoid.net/gate/bestphoto/BESTPHOTO.html' target='_blank'><img src='"+temp[i].img+"' style='image-rendering: high-quality; max-width: 836px; max-height: auto; border-radius: 4px;'></a>";
  }
  page += "</div>";

  // 이벤트 1단
  temp = arrayITEM['event_single'];
  page += "<div style='image-rendering: high-quality; display:flex; flex-direction: column; flex: 1; justify-content: center; gap: 4px; max-width: 836px;'>";
  num = getTarget('event_single');
  for(i = 0; i<arrayCNT[num]; i++) {
      page += "<a href='"+temp[i].url+"' target='_blank'><img src='"+temp[i].img+"' style='image-rendering: high-quality; max-width: 836px; max-height: auto; border-radius: 4px;'></a>";
  }
  page += "</div>";


  // 이벤트 2단
  temp = arrayITEM['event_dual'];
  num = getTarget('event_dual');
  for(i = 0; i<temp.length; i+=2) {
      //console.log(arrayCNT[num]/arraySET[num]);
      page += "<div style='image-rendering: high-quality; display: flex; flex: 1; justify-content: center; gap: 4px; max-width: 836px;'>"
      for(j = 0; j<2; j++) {
          //console.log(i, j, i+j);
          page += "<div><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' style='image-rendering: high-quality; max-width: 416px; max-height: auto; border-radius: 4px;'></a></div>";
      }
      page += "</div>";
  }

  // 디벨베스트 메뉴
  temp = arrayITEM['interface'];
  page += "<div style='image-rendering: high-quality; display: flex; justify-content: space-between; align-items: center; width: 836px; height: 38px;'>";
  page += "<div style='image-rendering: high-quality; width: 6px; height: 6px; padding: 12px;'></div>";
  page += "<div style='image-rendering: high-quality; max-height: 100%;'>"
  page += "<a href='https://cafe.naver.com/develoid/menu/1363' target='_blank' style='image-rendering: high-quality; display: block; font-size: 0;'><img src='"+temp[1].img+"' style='image-rendering: high-quality; max-width: auto; max-height: 16px;'></a>";
  page += "</div>";
  page += "<div>"
  page += "<a href='https://cafe.naver.com/develoid/menu/1363' target='_blank'><img src='"+temp[0].img+"' style='image-rendering: high-quality; max-width: 6px; max-height: 6px; padding: 16px;'></a>";
  page += "</div>";
  page += "</div>";

  // 디벨베스트 아이템 생성 (7)
  temp = arrayITEM['best_writing'];
  page += "<div style='image-rendering: high-quality; display: grid; grid-template-columns: 332px repeat(3, 164px); grid-template-rows: repeat(2, 164px); gap: 4px;'>";
  num = getTarget('best_writing');
  for(i = 0; i<temp.length; i+=7) {
    //console.log(arrayCNT[num]/arraySET[num]);
      page += "<div style='image-rendering: high-quality; grid-row: auto / span 2; width: 332px; height: 332px;'><a href='"+temp[0].url+"' target='_blank'><img src='"+temp[0].img+"' width='332' height='332' style='image-rendering: high-quality; max-width: 332px; max-height: 332px; border-radius: 4px;'></a></div>";
    for(j = 1; j<7; j++) {
      //console.log(i, j, i+j);
        page += "<div style='image-rendering: high-quality; width: 164px; height: 164px;'><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' width='164' height='164' style='image-rendering: high-quality; max-width: 164px; max-height: 164px; border-radius: 4px;'></a></div>";
    }
  }
  page += "</div>"

  // 디벨콘텐츠 메뉴 생성
  temp = arrayITEM['interface'];
  page += "<div style='image-rendering: high-quality; display: flex; justify-content: space-between; align-items: center; width: 836px;'>";
  page += "<div style='image-rendering: high-quality; width: 6px; height: 6px; padding: 12px;'></div>";
  page += "<div style='image-rendering: high-quality; max-height: 100%;'>"
  page += "<a href='https://cafe.naver.com/develoid/menu/1312' target='_blank' style='image-rendering: high-quality; display: block; font-size: 0;'><img src='"+temp[3].img+"' style='image-rendering: high-quality; max-width: auto; max-height: 16px;'></a>";
  page += "</div>";
  page += "<div>"
  page += "<a href='https://cafe.naver.com/develoid/menu/1312' target='_blank'><img src='"+temp[0].img+"' style='image-rendering: high-quality; max-width: 6px; max-height: 6px; padding: 16px;'></a>";
  page += "</div>";
  page += "</div>";

  // 디벨콘텐츠 아이템 생성 (5)
  temp = arrayITEM['content'];
  num = getTarget('content');
  for(i = 0; i<temp.length; i+=5) {
      //console.log(arrayCNT[num]/arraySET[num]);
      page += "<div style='image-rendering: high-quality; display: flex; flex: 1; justify-content: center; gap: 4px; width: 836px;'>"
      for(j = 0; j<5; j++) {
          //console.log(i, j, i+j);
          page += "<div style='image-rendering: high-quality; width: 164px; height: 164px;'><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' width='164' height='164' style='image-rendering: high-quality; max-width: 164px; max-height: 164px; border-radius: 4px;'></a></div>";
      }
  }
  page += "</div>";

  // 디벨스폰서 메뉴 생성
  temp = arrayITEM['interface'];
  page += "<div style='image-rendering: high-quality; display: flex; justify-content: center; align-items: center; width: 836px; height: 38px;'>";
  page += "<div style='image-rendering: high-quality; max-height: 100%;'>"
  page += "<div style='image-rendering: high-quality; display: block; font-size: 0;'><img src='"+temp[4].img+"' style='image-rendering: high-quality; max-width: auto; max-height: 16px;'></div>";
  page += "</div>";
  page += "</div>";

  // 디벨스폰서 생성
  temp = arrayITEM['sponsor'];
  num = getTarget('sponsor');
  for(i = 0; i<temp.length; i+=5) {
      //console.log(arrayCNT[num]/arraySET[num]);
      page += "<div style='image-rendering: high-quality; display: flex; flex: 1; justify-content: center; gap: 4px; width: 836px;'>"
      for(j = 0; j<5; j++) {
          //console.log(i, j, i+j);
          page += "<div style='image-rendering: high-quality; width: 164px; height: 164px;'><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' width='164' height='164' style='image-rendering: high-quality; max-width: 164px; max-height: 164px; border-radius: 4px;'></a></div>";
      }
      page += "</div>";
  }

  // 지난달 디벨베스트 메뉴 생성
  temp = arrayITEM['interface'];
  page += "<div style='image-rendering: high-quality; display: flex; justify-content: center; align-items: center; width: 836px; height: 38px;'>";
  page += "<div style='image-rendering: high-quality; max-height: 100%;'>"
  page += "<div style='image-rendering: high-quality; display: block; font-size: 0;'><img src='"+temp[2].img+"' style='image-rendering: high-quality; max-width: auto; max-height: 16px;'></div>";
  page += "</div>";
  page += "</div>";

  // 지난달 디벨베스트 아이템 생성 (7)
  temp = arrayITEM['last_best_writing'];
  page += "<div style='image-rendering: high-quality; display: grid; grid-template-columns: 332px repeat(3, 164px); grid-template-rows: repeat(2, 164px); gap: 4px;'>";
  num = getTarget('last_best_writing');
  for(i = 0; i<temp.length; i+=7) {
      //console.log(arrayCNT[num]/arraySET[num]);
      page += "<div style='image-rendering: high-quality; grid-row: auto / span 2; width: 332px; height: 332px;'><a href='"+temp[0].url+"' target='_blank'><img src='"+temp[0].img+"' width='332' height='332' style='image-rendering: high-quality; max-width: 332px; max-height: 332px; border-radius: 4px;'></a></div>";

      for(j = 1; j<7; j++) {
          //console.log(i, j, i+j);
          page += "<div style='image-rendering: high-quality; width: 164px; height: 164px;'><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' width='164' height='164' style='image-rendering: high-quality; max-width: 164px; max-height: 164px; border-radius: 4px;'></a></div>";
      }
  }
  page += "</div>";

  // 하단 생성
  temp = arrayITEM['interface'];
  page += "<div style='image-rendering: high-quality; display: flex; justify-content: center; align-items: center; width: 836px; padding: 12px;'>";
  page += "<div style='image-rendering: high-quality; display: block; font-size: 0;'><img src='"+temp[5].img+"' style='image-rendering: high-quality; max-width: auto; max-height: 30px;'></div>";

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
  ItemSave();
  $('.toast-make').fadeIn(200).delay(3000).fadeOut(200); 

}

var CopyBest = document.querySelector('.bestcopy');
CopyBest.addEventListener("click", function() { //checkbox에 이벤트 리스너 등록
    var imageid1 = document.querySelector('.imageid1').value;
    document.querySelector('.limageid1').value = imageid1;
    var imageid2 = document.querySelector('.imageid2').value;
    document.querySelector('.limageid2').value = imageid2;
    var imageid3 = document.querySelector('.imageid3').value;
    document.querySelector('.limageid3').value = imageid3;
    var imageid4 = document.querySelector('.imageid4').value;
    document.querySelector('.limageid4').value = imageid4;
    var imageid5 = document.querySelector('.imageid5').value;
    document.querySelector('.limageid5').value = imageid5;
    var imageid6 = document.querySelector('.imageid6').value;
    document.querySelector('.limageid6').value = imageid6;
    var imageid7 = document.querySelector('.imageid7').value;
    document.querySelector('.limageid7').value = imageid7;
    var linkid1 = document.querySelector('.linkid1').value;
    document.querySelector('.llinkid1').value = linkid1;
    var linkid2 = document.querySelector('.linkid2').value;
    document.querySelector('.llinkid2').value = linkid2;
    var linkid3 = document.querySelector('.linkid3').value;
    document.querySelector('.llinkid3').value = linkid3;
    var linkid4 = document.querySelector('.linkid4').value;
    document.querySelector('.llinkid4').value = linkid4;
    var linkid5 = document.querySelector('.linkid5').value;
    document.querySelector('.llinkid5').value = linkid5;
    var linkid6 = document.querySelector('.linkid6').value;
    document.querySelector('.llinkid6').value = linkid6;
    var linkid7 = document.querySelector('.linkid7').value;
    document.querySelector('.llinkid7').value = linkid7;
});