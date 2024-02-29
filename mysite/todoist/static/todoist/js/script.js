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

    // Atualiza os campos de posição de todos os formulários após adicionar um novo formulário
    updatePositionFields();

    // Adiciona um ouvinte de evento de mudança de posição para o novo formulário clonado
    clone.querySelector('.position-input').addEventListener('change', function(event) {
        // Obtém a posição selecionada pelo usuário
        var position = parseInt(event.target.value);
        // Encontra o formulário associado ao evento
        var form = event.target.closest('.formulario');
        // Obtém todos os formulários existentes na página
        var forms = document.querySelectorAll('.formulario');

        // Verifica se a posição selecionada é válida
        if (position >= 1 && position <= forms.length) {
            // Encontra o pai do formulário (ul)
            var parentUl = form.parentNode;
            // Encontra o formulário que está na posição selecionada pelo usuário
            var targetForm = parentUl.children[position - 1];
            // Move o formulário para a posição desejada na lista
            parentUl.insertBefore(form, targetForm.nextSibling);
        } else {
            // Se a posição não for válida, exibe um alerta e redefine o valor do campo de posição
            alert("Por favor, insira um número entre 1 e " + forms.length);
            event.target.value = getIndexInList(form) + 1;
        }

        // Após alterar a posição, atualiza os campos de posição de todos os formulários
        updatePositionFields();
    });
};

// Função para atualizar os campos de posição para refletir as posições atuais dos formulários
function updatePositionFields() {
    // Obtém todos os formulários existentes na página
    var forms = document.querySelectorAll('.formulario');
    // Atualiza os campos de posição para cada formulário
    forms.forEach(function(form, index) {
        form.querySelector('.position-input').value = index + 1;
    });
}

// Função para obter o índice do formulário na lista de formulários
function getIndexInList(form) {
    var forms = document.querySelectorAll('.formulario');
    return Array.from(forms).indexOf(form);
}