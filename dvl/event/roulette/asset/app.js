let Work;
let Stop;
let lucky = 5;

let list = new Array();

function ControlTable(type) {
  if(type == "add") {
    lucky++;
    $('#luckyTable').append('<tr id="luckyTr' + lucky + '"><td><input type="text" value="Winner '+lucky+'"></td><td><span id="lucky'+lucky+'">READY</span></td><td><button id="btn" onclick="luckybox('+lucky+');">GO!</button></td></tr>');
  } else if(type == "rm") {
    if(lucky > 0) {
      let target = "#luckyTr" + lucky;
      $(target).remove();
      lucky--;
    } else {
      alert('no target');
    }
  }
}

function luckybox(slot_num) {
  let slot = "lucky" + slot_num;
  let lucky = document.getElementById(slot);
  let max = list.length;

  Stop = setTimeout(function(){
    clearInterval(Work);
    clearTimeout(Stop);
  }, 3000);

  Work = setInterval(function(){
    let out = Math.floor(Math.random() * max);

    //console.log(isNaN(list[out]));

    if(isNaN(list[out])) {
      lucky.innerText = list[out];
    } else {
      lucky.innerHTML = "<a href='https://cafe.naver.com/develoid/"+list[out]+"' target='_blank'>"+ list[out] + "</a>";
    }

  }, 10);
}

function luckyboxAll() {
  let max = list.length;

  Stop = setTimeout(function(){
    clearInterval(Work);
    clearTimeout(Stop);
  }, 3000);

  Work = setInterval(function(){
    for(let i=1; i<lucky+1; i++) {
      let slot = "lucky" + i;
      let lucky = document.getElementById(slot);

      let out = Math.floor(Math.random() * max);

      //console.log(isNaN(list[out]));

      if(isNaN(list[out])) {
        lucky.innerText = list[out];
      } else {
        lucky.innerHTML = "<a href='https://cafe.naver.com/develoid/"+list[out]+"' target='_blank'>"+ list[out] + "</a>";
      }
    }
  }, 10);
}

function getList() {
  list = [];

  openListFile();
}

function openListFile() {
  let input = document.createElement("input");

  input.type = "file";
  input.accept = "text/plain, text/html";

  input.click();
  input.onchange = function(event) {
    let data = event.target.files[0];
    //console.log(data);
    processFile(data);
  }
}

function processFile(file) {
  let reader = new FileReader();
  reader.readAsText(file, "UTF-8");
  reader.onload = function() {
    let data = reader.result;
    //console.log(data);

    let dataSplit = data.split(',');
    for(let i in dataSplit) {
      //console.log(dataSplit[i]);
      list.push(dataSplit[i]);
    }
    console.log(list);
  }
}
