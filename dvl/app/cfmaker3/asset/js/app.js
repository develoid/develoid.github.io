// Top Menu = TM
// Best Photo = BP
// Event Banner = EB
// Best & Content = BC
// Sponsor Banner = SB
// Footer = FT

// TM 0 / BP 1 / EB 2 / BC 3 / SB 4 / FT 5
let arrayCNT = new Array(9,1,1,5,5,1);
let arraySET = new Array(1,1,1,5,5,1);
let arrayCMD = new Array("tm", "bp", "eb", "bc", "sb", "ft");
let arrayITEM = new Array();

// Resource
let resourceBlank = "https://cafefiles.pstatic.net/MjAyMDA2MTVfMjk0/MDAxNTkyMjMxMDEwNzE5.0geDSpRciQhBcP9UHLDMnMLNyUP56IFYjyGFo50Lr18g.3tQdIO2P1RPfbjcjwXlHu_erEhS92QtqgmRUMF_C_hQg.PNG/blank.png";

// 대문
let page;

// 배열 위치 가져오기
function getTarget(target) {
  var out = 0;
  if(target == "tm") out = 0;
  else if(target == "bp") out = 1;
  else if(target == "eb") out = 2;
  else if(target == "bc") out = 3;
  else if(target == "sb") out = 4;
  else if(target == "ft") out = 5;

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

      if(num == 3 && i > 2) { // 베스트 & 콘텐츠 중 콘텐츠 영역 색상 구분
        $(targetId).append('<tr id="'+arrayCMD[num]+'_'+arrayCNT[num]+'"><td>'+arrayCNT[num]+'</td><td><input type="url" id="'+arrayCMD[num]+'_i'+arrayCNT[num]+'" class="dvlc"></td><td><input type="url" id="'+arrayCMD[num]+'_u'+arrayCNT[num]+'" class="dvlc"></td></tr>');
      } else { // 목록 추가
        $(targetId).append('<tr id="'+arrayCMD[num]+'_'+arrayCNT[num]+'"><td>'+arrayCNT[num]+'</td><td><input type="url" id="'+arrayCMD[num]+'_i'+arrayCNT[num]+'"></td><td><input type="url" id="'+arrayCMD[num]+'_u'+arrayCNT[num]+'"></td></tr>');
      }
    }
  } else if(type == "remove") { // 목록 제거 할 경우
    if(arrayCNT[num] > 0) { // 마이너스 되는 경우 방지
      for(let i=0; i < arraySET[num]; i++) {
        let targetId = "#" + arrayTARGET[num] + "_" + arrayCNT[num]; // 목표 지정
        $(targetId).remove(); // 삭제
        arrayCNT[num]--; // 카운트 감소
      }
    } else {
      alert('target not found');
    }
  }

  console.log(arrayCMD[num], arrayCNT[num]); // 현재 카운트 출력
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

  ItemObjectMake('tm');
  ItemObjectMake('bp');
  ItemObjectMake('eb');
  ItemObjectMake('bc');
  ItemObjectMake('sb');
  //ItemObjectMake('ft');

  console.log(arrayITEM);
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
  json.TM = arrayCNT[0];
  json.BP = arrayCNT[1];
  json.EB = arrayCNT[2];
  json.BC = arrayCNT[3];
  json.SB = arrayCNT[4];
  //json.FT = arrayCNT[5];
  json.dataTM = arrayITEM['tm'];
  json.dataBP = arrayITEM['bp'];
  json.dataEB = arrayITEM['eb'];
  json.dataBC = arrayITEM['bc'];
  json.dataSB = arrayITEM['sb'];
  //json.dataFT = arrayITEM['ft'];

  console.log(json);

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

    console.log(arrayCMD[num], i, data[i].img, data[i].url);

    document.getElementById(tempIMG).value = data[i].img;
    document.getElementById(tempURL).value = data[i].url;
  }
}

// 파일에서 읽은 데이터 처리
function FileDataRead(data) {
  let json = JSON.parse(data);
  console.log(json);

  FileDataInputMake('bp', json.BP - arrayCNT[1]);
  FileDataInputMake('eb', json.EB - arrayCNT[2]);
  FileDataInputMake('bc', json.BC - arrayCNT[3]);
  FileDataInputMake('sb', json.SB - arrayCNT[4]);

  FileDataInputWrite('tm', json.dataTM);
  FileDataInputWrite('bp', json.dataBP);
  FileDataInputWrite('eb', json.dataEB);
  FileDataInputWrite('bc', json.dataBC);
  FileDataInputWrite('sb', json.dataSB);
}


/* 코드 생성 및 복사*/
// 코드 복사
function CodeCopy() {
  var copyText = document.getElementById("codeHTTPS");
  copyText.select();
  document.execCommand("copy");
}
