let ov;

$("#text").on("propertychange change keyup paste input", function() {
    let cv = $(this).val().replace(/[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9)]/gi, "");
    if(cv == ov) return;
    else ov = cv;
    document.getElementById("count").innerText = cv.length;
});
