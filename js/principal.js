var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

var title = document.querySelector("title");
title.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); //tr

pacientes.forEach(paciente => {
    var tdPeso = paciente.querySelector(".info-peso");//td da tr
    var peso = tdPeso.textContent; //valor td

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var imc = calculaImc(peso, altura);

    var tdImc = paciente.querySelector(".info-imc");

    tdImc.textContent = imc;
});

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (Math.pow(altura, 2));

    return imc.toFixed(2);
}