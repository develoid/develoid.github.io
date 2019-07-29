$("#i10").on("propertychange change keyup paste input", function() {
	let source = $(this).val();
	let price = parseInt(source/1.1);
	let vat = source-price;
	
    document.getElementById("o11").value = price;
    document.getElementById("o12").value = vat;
});

$("#i20").on("propertychange change keyup paste input", function() {
	let source = $(this).val();
	let vat = (source*0.1).toFixed();
	let price = parseInt(source)+parseInt(vat);
	
    document.getElementById("o21").value = price;
    document.getElementById("o22").value = vat;
});
