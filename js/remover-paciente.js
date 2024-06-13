var pacientes = document.querySelectorAll("#tabela-pacientes");

pacientes.forEach(paciente => {
    paciente.addEventListener("dblclick", function(event){
        //this.remove();

        //de forma explicativa ficaria assim:
        // var alvoEvento = event.target;
        // var paiDoAlvo = alvoEvento.parentNode;
        //paiDoAlvo.remove();
        event.target.parentNode.classList.add("fadeOut");
        
        setTimeout(() =>{
            event.target.parentNode.remove();
        }, 1000);
    })
});