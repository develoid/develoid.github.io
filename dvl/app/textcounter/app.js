let ov;

$("#text").on("propertychange change keyup paste input", function() {
    let cv = $(this).val();
	cv = cv.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi, "")
		 .replace(/[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9一-龥ぁ-ゔァ-ヴー々〆〤)]/gi, "");
    if(cv == ov) return;
    else ov = cv;
    document.getElementById("count").innerText = cv.length;
});
