// evento de digitar , imput de dados 
var campoFiltro = document.querySelector('#filtrar-tabela');


	campoFiltro.addEventListener("input",function(){
		//console.log(this.value);
		var pacientes = document.querySelectorAll(".paciente");
		if (this.value.length > 0) {
			
			for( var i =0; i<pacientes.length; i++){
			var paciente = pacientes[i];
			var tdNome = paciente.querySelector(".info-nome"); 
			// dentro do td nome busca um info nome 
			var nome = tdNome.textContent; // pega o conteudo 
			
			var expressão = new RegExp(this.value,"i") ; // S sensitive ou i Isensitive 
			if(!expressão.test(nome)){//(nome != this.value){ 		// compara o conteudo do texto com as palavras digitadas
				paciente.classList.add("invisivel");
			}else{
				paciente.classList.remove("invisivel");
				}
			}
		
		} else {
			for(var i = 0 ; i < pacientes.length; i++) {
				var paciente = pacientes[i];
				paciente.classList.remove("invisivel");
			}
		}
		//console.log("numero mais tentativa");
	});



	// expressão regular