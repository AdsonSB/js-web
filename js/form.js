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