var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    //Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    var erro = validaPaciente(paciente);

    if (erro.length > 0) {
        exibeMensagemDeErro(erro);

        return;
    }
    
    adicionaPacienteNaTabela(paciente);
    form.reset();
    
    var msgErro = document.querySelector("#msg-erro")
    msgErro.innerHTML = "";
    
})

function obtemPacienteDoFormulario(form) {
    var paciente ={
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
    }
    return paciente;
}


//cria a tr e a td da lista
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");

    var nomeTd = montaTd(paciente.nome, "info-");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(calculaImc(paciente.peso, paciente.altura), "info-imc");


    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    //  ------------------------------------------------------------------------------------------------------------------------------------------------------
        //                                          FORMATO BUTTON 

    // Criando o botão de exclusão
    // var botaoExcluirTd = pacienteTr.insertCell();
    // var botaoExcluir = document.createElement("button");
    // botaoExcluir.setAttribute("type", "button"); // Alterado de "submit" para "button"
    // botaoExcluir.setAttribute("class", "excluir-paciente");
    // var iconeLixeira = document.createElement("i");
    // iconeLixeira.setAttribute("class", "far fa-trash-alt");
    // botaoExcluir.appendChild(iconeLixeira);
    // botaoExcluirTd.appendChild(botaoExcluir);

    // Adicionando evento de clique para excluir o paciente
    // botaoExcluir.addEventListener("click", function() {
    //     pacienteTr.remove(); // Remove a linha do paciente quando o botão é clicado
    // });

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------


    //                                              FORMATO ANCORA 


    // Criando os elementos de âncora para exclusão e edição
    var anchorExcluir = document.createElement("a");
    anchorExcluir.setAttribute("href", "#");
    anchorExcluir.setAttribute("class", "excluir-paciente");
    var iconeLixeira = document.createElement("i");
    iconeLixeira.setAttribute("class", "far fa-trash-alt");
    anchorExcluir.appendChild(iconeLixeira);

    var anchorEditar = document.createElement("a");
    anchorEditar.setAttribute("href", "#");
    var iconeEditar = document.createElement("i");
    iconeEditar.setAttribute("class", "fas fa-marker");
    anchorEditar.appendChild(iconeEditar);

    // Adicionando âncoras de exclusão e edição à TD de ação
    var acaoTd = document.createElement("td");
    acaoTd.appendChild(anchorExcluir);
    acaoTd.appendChild(anchorEditar);
    pacienteTr.appendChild(acaoTd);

    // Adicionando evento de clique para exclusão do paciente
    anchorExcluir.addEventListener("click", function(event) {
        event.preventDefault();
        pacienteTr.remove();
    });

    return pacienteTr;
}



function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}


function validaPaciente(paciente) {
    var erro = [];

    if (paciente.nome == "" || paciente.nome == null) {
        erro.push("Nome não pode ser vazio!");
    }
    if (paciente.peso == "" || paciente.peso == null){
        erro.push("Peso não pode ser vazio!");
    }
    if (paciente.altura == "" || paciente.altura == null){
        erro.push ("Altura não pode ser vazio!");
    }
    if (paciente.gordura == "" || paciente.gordura == null){
        erro.push("Gordura não pode ser vazio!");
    }

    return erro;
}

function validaPeso(peso) {
    if (peso > 0 && peso <=600) {
        return true;
    }
    return false;
}

function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    }
    return false;
}

function exibeMensagemDeErro(erro) {
    var msgErro = document.querySelector("#msg-erro")
    msgErro.innerHTML = "";
    erro.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        msgErro.appendChild(li);

    });

    return;
}

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}