var titulo = document.querySelector(".titulo");
titulo.textContent = "Dr Aparecida Nutricionista" ;

var pacientes = document.querySelectorAll(".paciente");

for( var i =0 ; i < pacientes.length ; i++){

var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso =tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
var pesoValido = validaPeso(peso);
var alturaValida =validaAltura (altura);

	if (!pesoValido){
		console.log("peso invalido");
		pesoValido = false;
		tdImc.textContent ="peso invalido";
		paciente.classList.add("paciente-invalido");
	}
	if (!alturaValida) {
		console.log("altura invalida");
		alturaValida= false;
		tdImc.textContent =" altura invalido";
		paciente.classList.add("paciente-invalido");
	}

	if (alturaValida && pesoValido) {
		var imc = calculaImc(peso,altura); 
		tdImc.textContent =imc ;
		}
}

function validaPeso(peso) {
	if (peso >= 0 && peso <= 1000) {
		return true;
	}else {
		return false;
	}
}

function validaAltura (altura) {
	if (altura >= 0 && altura <3.0) {
		return true;
	}else {
		return false;
	}
}
function calculaImc(peso,altura) {
	var imc = 0;  

	imc= peso / (altura * altura);
	return imc.toFixed(2);
}

/*
titulo.addEventListener("click",function () {
	 console.log("evento com função anonima") ;
});

*/



//function mostraMensagem () {
//	console.log("Ola Dr !")	
//}