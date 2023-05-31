//e - enter
//o - ober
//i - imes
//a - ai
//u - ufat

const encriptar = document.getElementById("boton-encriptar");
const desencriptar = document.getElementById("boton-desencriptar");
const copiar = document.getElementById("boton-copiar");
const mensaje = document.getElementById("mensaje");
const respuesta = document.getElementById("mensaje-respuesta");
const muñeco = document.getElementById("muñeco");
const cajavacia = document.getElementById("caja-vacia");
const cajarespuesta = document.getElementById("caja-respuesta")
const cajacopiar = document.getElementById("cajacopiar")

const remplace = (newvalue) => {
	respuesta.innerHTML = newvalue;
	respuesta.classList.add("ajustar");
	cajarespuesta.classList.add("ajuste")
	mensaje.value = "";
	mensaje.style.height = "auto"
	mensaje.placeholder = "Ingresa aquí tu mensaje";
	muñeco.src = "imagenes/cripto-logo-corte.jpg";
	//cajavacia = "No se ha encontrado ningun mensaje";
	//copiar.classList.remove("boton-copiar");
}

const reset = () => {
	mensaje.value = "";
    mensaje.style.height = "auto";
	respuesta.innerHTML = "";
	cajarespuesta.classList.remove("ajuste")
	respuesta.classList.remove("ajustar");
    muñeco.src = "imagenes/Muñeco.png";
	muñeco.classList.add("muñeco");
	respuesta.placeholder = "Ningún mensaje fue encontrado";
	cajavacia.classList = ("caja-vacia");
	copiar.classList.add("cajacopiar");
	//mensaje.focus(); 
};

let reemplazar = [
    ["e", "enter"],
	["o", "ober"],
	["i", "imes"],
	["a", "ai"],
	["u", "ufat"]
];

encriptar.addEventListener('click', () => {

	const texto = mensaje.value.toLowerCase();

	if (texto != "") {
		function encript(newtext) {
			for (let n = 0; n < reemplazar.length; n++) {
				if (newtext.includes(reemplazar[n][0])) {
					newtext = newtext.replaceAll(reemplazar[n][0], reemplazar[n][1]);
				};
			};
            return newtext;
		};
		remplace(encript(texto));
	} else {
		alert("Ingrese texto para encriptar");
		reset();
	};
});

desencriptar.addEventListener('click', () => {

	const texto = mensaje.value.toLowerCase();

	if (texto != "") {
		function desencript(newtext) {
			for (let n = 0; n < reemplazar.length; n++) {
				if (newtext.includes(reemplazar[n][1])) {
					newtext = newtext.replaceAll(reemplazar[n][1], reemplazar[n][0]);
				};
			};
			return newtext;
		};
		remplace(desencript(texto));
	} else {
		alert("Ingrese texto a desencriptar");
		reset();
	};
});
function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
// function copyToClipboard() {
//     var text = document.getElementById("mensaje");
//     var aux = document.createElement("input");
//     aux.setAttribute("value", text.textContent);
//     document.body.appendChild(aux);
//     aux.select();
//     document.execCommand('copy');
//     document.body.removeChild(aux);

    
    
//     //var copyButton = document.getElementById("copyButton");
//     //copyButton.innerHTML = "¡Copiado!";
//     // setTimeout(function() {
//     //     copyButton.innerHTML = "Copiar";
//     //   }, 2000);
//     }

// document.getElementById("boton-copiar").addEventListener("click", copyText);
// function copyText() {
//     var textToCopy = document.getElementById("mensaje");
//     console.log(textToCopy);
//     textToCopy.select();
//     document.execCommand('copy');
//}

// copiar.addEventListener("click", () => {
// 	let final = respuesta;
// 	final.select();
// 	document.execCommand('copy');
//     return texto;
	//navigator.clipboard.writeText(texto.value);
	//clipboard función no compatible con móviles
	//alert("Texto Copiado");
	//reset();
//});
//auto ajuste de textarea
// mensaje.addEventListener("change", e => {
// 	mensaje.style.height = "auto";
// 	let scHeight = e.target.scrollHeight;
// 	mensaje.style.height = `${scHeight}px`;
// });
// mensaje.addEventListener("keyup", e => {
// 	mensaje.style.height = "auto";
// 	let scHeight = e.target.scrollHeight;
// 	mensaje.style.height = `${scHeight}px`;
// });