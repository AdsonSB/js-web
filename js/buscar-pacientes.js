var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function () {


    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/aaaaapacientes.json")


    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");

        //status Ok
        if (xhr.status == 200) {
            var resposta = xhr.responseText; //RESULT

            var pacientes = JSON.parse(resposta);

            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        }else {
            alert("Erro ao encontrar paciente");
            erroAjax.classList.remove("invisivel");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }

    }); 

    xhr.send();
});



// GET = BUSCAR
// POST = SALVAR
// PUT = ALTERAR

// couchetes = away