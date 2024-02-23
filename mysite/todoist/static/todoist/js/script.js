const buttonAddList = document.getElementById('button');

buttonAddList.onclick = function(){
        // Impede o comportamento padrão de submissão do formulário no caso recarregar a página
        event.preventDefault();

        // Seleciona o elemento q for ser duplicado
        var elementoOriginal = document.querySelector(".formulario");

        // Clona o elemento
        var cloneElemento = elementoOriginal.cloneNode(true);
    
        // Insere o clone após o elemento original
        elementoOriginal.parentNode.insertBefore(cloneElemento, elementoOriginal.nextSibling);
};
