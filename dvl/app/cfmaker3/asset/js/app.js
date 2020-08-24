// Top Menu = TM
// Best Photo = BP
// Event Banner = EB
// Best & Content = BC
// Sponsor Banner = SB
// Footer = FT

// TM 0 / BP 1 / EB 2 / BC 3 / SB 4 / FT 5
let arrayCNT = new Array(1,1,1,5,5,1);
let arraySET = new Array(1,1,1,5,5,1);
let arrayCMD = new Array("tm", "bp", "eb", "bc", "sb", "ft");
let arrayTARGET = new Array("#tm", "#bp", "#eb", "#bc", "#sb", "#ft");

// 목록 저장 배열
let arrayTM = new Array();
let arrayBP = new Array();
let arrayEB = new Array();
let arrayBC = new Array();
let arraySB = new Array();
let arrayFT = new Array();

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

// 목록 추가 제거
function ItemControl(type, target) {
  // 대상 배열 주소 가져오기
  var num = getTarget(target);

  if(type == "add") { // 목록 추가 할 경우
    for(let i = 0; i < arraySET[num]; i++) { // arraySET 값 만큼 반복
      arrayCNT[num]++; // 추가

      if(num == 3 && i > 2) { // 베스트 & 콘텐츠 중 콘텐츠 영역 색상 구분
        $(arrayTARGET[num]).append('<tr id="'+arrayCMD[num]+'_'+arrayCNT[num]+'"><td>'+arrayCNT[num]+'</td><td><input type="url" id="'+arrayCMD[num]+'_i'+arrayCNT[num]+'" class="dvlc"></td><td><input type="url" id="'+arrayCMD[num]+'_u'+arrayCNT[num]+'" class="dvlc"></td></tr>');
      } else { // 목록 추가
        $(arrayTARGET[num]).append('<tr id="'+arrayCMD[num]+'_'+arrayCNT[num]+'"><td>'+arrayCNT[num]+'</td><td><input type="url" id="'+arrayCMD[num]+'_i'+arrayCNT[num]+'"></td><td><input type="url" id="'+arrayCMD[num]+'_u'+arrayCNT[num]+'"></td></tr>');
      }
    }
  } else if(type == "remove") { // 목록 제거 할 경우
    if(arrayCNT[num] > 0) { // 마이너스 되는 경우 방지
      for(let i=0; i < arraySET[num]; i++) {
        let removeTarget = arrayTARGET[num] + "_" + arrayCNT[num]; // 목표 지정
        $(removeTarget).remove(); // 삭제
        arrayCNT[num]--; // 카운트 감소
      }
    } else {
      alert('target not found');
    }
  }

  console.log(arrayCMD[num], arrayCNT[num]); // 현재 카운트 출력
}
