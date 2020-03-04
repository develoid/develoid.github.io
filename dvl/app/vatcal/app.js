$("#i10").on("propertychange change keyup paste input", function() {
	let source = $(this).val();
	vatcalA(source);
	
});

$("#i20").on("propertychange change keyup paste input", function() {
	let source = $(this).val();
	vatcalB(source);
});

function comma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function vatcalA(x) {
	let price = (x/1.1).toFixed();
	let vat = x-price;
    document.getElementById("o11").value = comma(price);
    document.getElementById("o12").value = comma(vat);
}

function vatcalB(x) {
	let vat = (x*0.1).toFixed();
	let price = parseInt(x)+parseInt(vat);
    document.getElementById("o21").value = comma(price);
    document.getElementById("o22").value = comma(vat);
}