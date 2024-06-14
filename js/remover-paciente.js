// Selecione todos os botões de exclusão
var botoesExcluir = document.querySelectorAll('.excluir-paciente');

// Adicione um evento de clique a cada botão de exclusão
botoesExcluir.forEach(function(botao) {
    botao.addEventListener('click', function(event) {
        // Previna o comportamento padrão do botão
        event.preventDefault();
        
        // Remova o paciente pai do botão de exclusão clicado
        var paciente = botao.parentNode.parentNode;
        paciente.remove();
    });
});
