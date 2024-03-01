// Seleciona o botão de adicionar formulário pelo ID
const buttonAddList = document.getElementById('button');

// Define o número máximo de formulários permitidos
const maxForms = 5;

// Adiciona um ouvinte de evento de clique ao botão de adicionar formulário
buttonAddList.onclick = function(){ 
    // Verifica se já existem 5 formulários
    if (document.querySelectorAll('.formulario').length >= maxForms) {
        // Se já houver 5 formulários, exibe um alerta e sai da função
        alert("Você já atingiu o limite máximo de formulários!");
        return;
    }

    // Clona o formulário original
    var originalForm = document.querySelector('.formulario');
    var clone = originalForm.cloneNode(true);

    // Limpa os campos de texto e área de texto do formulário clonado
    var inputs = clone.querySelectorAll('input[type="text"], textarea');
    inputs.forEach(function(input) {
        input.value = '';
    });
    // limpa o link para exclusão
    var exclude_button = clone.querySelector("#exclude-form");
    exclude_button.href = "";

    // limpa o link de submissão do formulário
    clone.action = "/create";

    // Define a data e hora atual para o input de data e hora do formulário clonado
    var currentDateTime = new Date().toISOString().slice(0, 16); // Formato: YYYY-MM-DDTHH:mm
    var dateTimeInput = clone.querySelector('.datetime-local');
    dateTimeInput.value = currentDateTime.replace('T', ' ');

    // Adiciona o formulário clonado ao final da lista de formulários
    originalForm.parentNode.appendChild(clone);
    
    // Adiciona uma classe para iniciar a transição de exibição suave do formulário clonado
    clone.classList.add('hide');

    // Pequeno intervalo antes de remover a classe "hide" para iniciar a transição
    setTimeout(function() {
        clone.classList.remove('hide');
    }, 50); // Tempo em milissegundos
}