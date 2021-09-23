var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener("dblclick",function(event){
	event.target.parentNode.classList.add("fadeOut");
	// Somente executará nosso código caso o elemento em que clicamos seja um <td>
	setTimeout(function(){ // segura a ação em um tempo x MILISEGUNDOS 
		if (event.target.tagName == 'TD') { // só remove os filhos da tabela e nao o TR 
			event.target.parentNode.remove(); // o alvo que foi clicado TR TR = paciente 
		}
		
	},501); 
});



	/* 
		ou 
		var alvoEvento = event.target;
		var paiDoAlvo = alvoEvento.parentNode;
		paidoAlvo.remove();
	*/
	/*pacientes.forEach(function(paciente) { // função de nome paciente poderia ser qq coisa 
	paciente.addEventListener("dblclick",function(){ // duplo click 
		this.remove();
	}); 
});

*/