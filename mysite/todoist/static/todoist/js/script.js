const buttonAddList = document.getElementById('button');

//Clonar formulário
buttonAddList.onclick = function(){
        var originalForm = document.querySelector('.formulario');
        var clone = originalForm.cloneNode(true);

        // Limpar os campos de texto e área de texto
        var inputs = clone.querySelectorAll('input[type="text"], textarea');
        inputs.forEach(function(input) {
            input.value = '';
        });

        originalForm.parentNode.appendChild(clone);
};

document.addEventListener("DOMContentLoaded", function() {
    // Adiciona o evento de clique ao elemento pai com a classe "block-ul"
    document.querySelector('.block-ul').addEventListener('click', function(event) {
        // Verifica se o elemento clicado é um ícone
        if (event.target.classList.contains('fa-circle-xmark')) {
            // Encontra o paizão com a classe "formulario" mais próximo
            var formParent = event.target.closest('.formulario');
            // Verifica se há mais de um formulário antes de excluir
            var formCount = document.querySelectorAll('.formulario').length;
            if (formParent && formCount > 1) {
                // Se tiver mais de um bloco
                formParent.remove();
            }
            else{
                alert("Você não pode deixar a página sem blocos de nota!");
            }
        }
    });
});