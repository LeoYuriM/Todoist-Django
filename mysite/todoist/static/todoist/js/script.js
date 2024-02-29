const buttonAddList = document.getElementById('button');
var maxForms = 5;


//Clonar formulário
buttonAddList.onclick = function(){ 
    // Verifica se já existem 5 formulários
    if (document.querySelectorAll('.formulario').length >= maxForms) {
        alert("Você já atingiu o limite máximo de formulários!");
        return; // Sai da função se já atingiu o limite
    }
    var originalForm = document.querySelector('.formulario');
    var clone = originalForm.cloneNode(true);

    // Limpar os campos de texto e área de texto
    var inputs = clone.querySelectorAll('input[type="text"], textarea');
    inputs.forEach(function(input) {
        input.value = '';
    });

        // Define a data e hora atual para o input de data e hora
        var currentDateTime = new Date();
        var currentHour = currentDateTime.getHours().toString().padStart(2, '0');
        var currentMinute = currentDateTime.getMinutes().toString().padStart(2, '0');
        var dateTimeInput = clone.querySelector('.datetime-local');
        dateTimeInput.value = `${currentDateTime.getFullYear()}-${(currentDateTime.getMonth() + 1).toString().padStart(2, '0')}-${currentDateTime.getDate().toString().padStart(2, '0')}T${currentHour}:${currentMinute}`;

    originalForm.parentNode.appendChild(clone);
        // Adiciona classe para iniciar a transição
        clone.classList.add('hide');

        // pequeno intervalo antes de remover a classe "hide" para iniciar a transição
        setTimeout(function() {
            clone.classList.remove('hide');
        }, 50); // Tempo em milissegundos
    };

// excluir formulário
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