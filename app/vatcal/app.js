$("#i10").on("propertychange change keyup paste input", function() {
	let source = $(this).val();
	let price = (source/1.1).toFixed();
	let vat = source-price;
	
    document.getElementById("o11").value = numberWithCommas(price);
    document.getElementById("o12").value = numberWithCommas(vat);
});

$("#i20").on("propertychange change keyup paste input", function() {
	let source = $(this).val();
	let vat = (source*0.1).toFixed();
	let price = parseInt(source)+parseInt(vat);
	
    document.getElementById("o21").value = numberWithCommas(price);
    document.getElementById("o22").value = numberWithCommas(vat);
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}