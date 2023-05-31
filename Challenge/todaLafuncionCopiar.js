function copiarTexto() {
	var copyText =document.getElementById("mensaje");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");
	alert("Copied: " + copyText.value);
}