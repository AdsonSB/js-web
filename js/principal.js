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

    var imc = peso / (Math.pow(altura, 2));

    var tdImc = paciente.querySelector(".info-imc");

    tdImc.textContent = imc.toFixed(2);
});



