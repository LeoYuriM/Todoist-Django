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

    // Define a data e hora atual para o input de data e hora
    var currentDateTime = new Date();
    var currentHour = currentDateTime.getHours().toString().padStart(2, '0');
    var currentMinute = currentDateTime.getMinutes().toString().padStart(2, '0');
    var dateTimeInput = clone.querySelector('.datetime-local');
    dateTimeInput.value = `${currentDateTime.getFullYear()}-${(currentDateTime.getMonth() + 1).toString().padStart(2, '0')}-${currentDateTime.getDate().toString().padStart(2, '0')}T${currentHour}:${currentMinute}`;

    // Adiciona o formulário clonado ao final da lista de formulários
    originalForm.parentNode.appendChild(clone);
    
    // Adiciona uma classe para iniciar a transição de exibição suave do formulário clonado
    clone.classList.add('hide');

    // Pequeno intervalo antes de remover a classe "hide" para iniciar a transição
    setTimeout(function() {
        clone.classList.remove('hide');
    }, 50); // Tempo em milissegundos
}

// mudar foto de usuário
document.addEventListener("DOMContentLoaded", function() {
    var userPhoto = document.getElementById("userPhoto");
    var fileInput = document.getElementById("fileInput");

    // Adiciona um ouvinte de evento de clique à foto do usuário
    userPhoto.addEventListener("click", function() {
        // Simula um clique no input de arquivo quando a foto do usuário é clicada
        fileInput.click();
    });

    // Adiciona um ouvinte de evento de alteração ao input de arquivo
    fileInput.addEventListener("change", function() {
        // Verifica se um arquivo foi selecionado
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            
            // Quando o arquivo é carregado, atualiza a src da imagem com o arquivo selecionado
            reader.onload = function(e) {
                userPhoto.src = e.target.result;
            }
            
            // Lê o arquivo como uma URL de dados
            reader.readAsDataURL(fileInput.files[0]);
        }
    });
});

//sair da conta e mudar imagem
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos relevantes do DOM
    const userMenu = document.getElementById('userMenu'); // Div que contém a imagem do usuário e o menu
    const menu = userMenu.querySelector('.menu'); // Menu suspenso
    const changeImage = document.getElementById('changeImage'); // Link "Mudar Imagem" no menu
    const fileInput = document.getElementById('fileInput'); // Input de arquivo
    const userPhoto = document.getElementById('userPhoto'); // Imagem do usuário

    let timer; // Variável para armazenar o temporizador de ocultação do menu

    // Evento ao passar o mouse sobre a área do usuário para exibir o menu
    userMenu.addEventListener('mouseenter', function() {
        clearTimeout(timer); // Limpa o temporizador de ocultação do menu
        menu.style.display = 'block'; // Exibe o menu suspenso
    });

    // Evento ao retirar o mouse da área do usuário para ocultar o menu após um pequeno atraso
    userMenu.addEventListener('mouseleave', function() {
        // Define um temporizador para ocultar o menu após 200 milissegundos
        timer = setTimeout(function() {
            menu.style.display = 'none'; // Oculta o menu suspenso
        }, 200);
    });

    // Evento ao passar o mouse sobre o menu para evitar que seja ocultado
    menu.addEventListener('mouseenter', function() {
        clearTimeout(timer); // Limpa o temporizador de ocultação do menu
    });

    // Evento ao retirar o mouse do menu para ocultá-lo novamente
    menu.addEventListener('mouseleave', function() {
        menu.style.display = 'none'; // Oculta o menu suspenso
    });

    // Evento de clique no link "Mudar Imagem" para abrir o seletor de arquivo ao clicar
    changeImage.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        fileInput.click(); // Aciona o clique no input de arquivo oculto
    });

    // Evento ao selecionar um novo arquivo no input de arquivo para atualizar a imagem do usuário
    fileInput.addEventListener('change', function() {
        const file = this.files[0]; // Obtém o arquivo selecionado no input
        const reader = new FileReader(); // Cria um objeto FileReader para ler o arquivo

        // Manipulador de evento para quando a leitura do arquivo for concluída
        reader.onload = function(event) {
            userPhoto.src = event.target.result; // Atualiza a imagem do usuário com o conteúdo do arquivo
        };

        if (file) {
            reader.readAsDataURL(file); // Inicia a leitura do arquivo como uma URL de dados
        }
    });
});

