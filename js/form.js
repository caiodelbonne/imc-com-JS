var botaoAdicionar = document.querySelector("#adicionar-paciente"); 
botaoAdicionar.addEventListener("click",function (event) {
	event.preventDefault();
	var form = document.querySelector("#form-adiciona");
	//Extraindo informacoes do paciente do form
	var paciente = InfPacienteFormulario(form);
	// criando as tr
	var erros = validaPaciente(paciente);
	if (erros.length > 0) {
		exibeMensagensDeErro(erros);
		return;
	}
	adicionaPacienteNaTabela(paciente);
	form.reset();
	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML="";
});
   	//

		function adicionaPacienteNaTabela(paciente) {
		var pacienteTr=montaTr(paciente);
		// adiciona filhos na tabela pai 
		var tabela = document.querySelector("#tabela-pacientes");
		tabela.appendChild(pacienteTr);
	}

	function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML ="";

    erros.forEach(function(erro){  //  nome da funçao pode ser qualquer outra coisa 
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
	function InfPacienteFormulario (form){ // OBJETO JS 
		var paciente = {
			nome: form.nome.value,
			peso: form.peso.value,
			altura: form.altura.value,
			gordura: form.gordura.value,
			imc: calculaImc(form.peso.value, form.altura.value)
		}
		return paciente;
	}

	function montaTr(paciente) {
		var pacienteTr = document.createElement("tr"); // cria as 5 tds 
		pacienteTr.classList.add("paciente");

		/*var nomeTd = document.createElement("td");
		nomeTd.classList.add("info-nome");
		nomeTd.textContent = paciente.nome;
		*/
		 // adiciona filhos na tr
		pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
		return pacienteTr;
	}



	function montaTd(dado,classe) {
		var td = document.createElement("td");
		td.textContent = dado;
		td.classList.add(classe);
		return td; //////// retorno  DE FUNÇÃO USSSSSSA RETORNO CAIO 
	}

	function validaPaciente (paciente){
		var erros =[];

		if ( paciente.nome.length ==0) { 
			erros.push("O nome esta em branco");
		}
		if (!validaPeso(paciente.peso)) erros.push("Peso é invalido"); // adc algo 
		
		if (!validaAltura(paciente.altura)) erros.push("altura é invalida"); 

		if (paciente.gordura.length ==0 ) erros.push("% Gordura não inserida");
		if (paciente.peso.length ==0) erros.push("Peso vazio");
		if (paciente.altura.length ==0) erros.push("altura vazia");
		
		return erros;
	}		

