
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
  page += "<div style='image-rendering: high-quality; display: grid; grid-template-columns: 332px repeat(3, 170px); grid-template-rows: repeat(2, 170px); gap: 5px;'>";
  num = getTarget('best_writing');
  for(i = 0; i<temp.length; i+=7) {
    //console.log(arrayCNT[num]/arraySET[num]);
      page += "<div style='image-rendering: high-quality; grid-row: auto / span 2; width: 332px; height: 332px;'><a href='"+temp[0].url+"' target='_blank'><img src='"+temp[0].img+"' width='332' height='332' style='image-rendering: high-quality; max-width: 332px; max-height: 332px; border-radius: 4px;'></a></div>";
    for(j = 1; j<7; j++) {
      //console.log(i, j, i+j);
        page += "<div style='image-rendering: high-quality; width: 170px; height: 170px;'><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' width='170' height='170' style='image-rendering: high-quality; max-width: 170px; max-height: 170px; border-radius: 4px;'></a></div>";
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
      page += "<div style='image-rendering: high-quality; display: flex; flex: 1; justify-content: center; gap: 5px; width: 836px;'>"
      for(j = 0; j<5; j++) {
          //console.log(i, j, i+j);
          page += "<div style='image-rendering: high-quality; width: 170px; height: 170px;'><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' width='170' height='170' style='image-rendering: high-quality; max-width: 170px; max-height: 170px; border-radius: 4px;'></a></div>";
      }
  }
  page += "</div>";

  // 지난달 디벨베스트 메뉴 생성
  temp = arrayITEM['interface'];
  page += "<div style='image-rendering: high-quality; display: flex; justify-content: center; align-items: center; width: 870px; height: 38px;'>";
  page += "<div style='image-rendering: high-quality; max-height: 100%;'>"
  page += "<div style='image-rendering: high-quality; display: block; font-size: 0;'><img src='"+temp[2].img+"' style='image-rendering: high-quality; max-width: auto; max-height: 16px;'></div>";
  page += "</div>";
  page += "</div>";

  // 지난달 디벨베스트 아이템 생성 (7)
  temp = arrayITEM['last_best_writing'];
  page += "<div style='image-rendering: high-quality; display: grid; grid-template-columns: 332px repeat(3, 170px); grid-template-rows: repeat(2, 170px); gap: 5px;'>";
  num = getTarget('last_best_writing');
  for(i = 0; i<temp.length; i+=7) {
      //console.log(arrayCNT[num]/arraySET[num]);
      page += "<div style='image-rendering: high-quality; grid-row: auto / span 2; width: 332px; height: 332px;'><a href='"+temp[0].url+"' target='_blank'><img src='"+temp[0].img+"' width='332' height='332' style='image-rendering: high-quality; max-width: 332px; max-height: 332px; border-radius: 4px;'></a></div>";

      for(j = 1; j<7; j++) {
          //console.log(i, j, i+j);
          page += "<div style='image-rendering: high-quality; width: 170px; height: 170px;'><a href='"+temp[i+j].url+"' target='_blank'><img src='"+temp[i+j].img+"' width='170' height='170' style='image-rendering: high-quality; max-width: 170px; max-height: 170px; border-radius: 4px;'></a></div>";
      }
  }
  page += "</div>";