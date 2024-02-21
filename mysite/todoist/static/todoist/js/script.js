const buttonAddList = document.getElementById('button');

buttonAddList.onclick = function(){
        // Impede o comportamento padrão de submissão do formulário no caso recarregar a página
        event.preventDefault();
        // Seleciona o elemento a ser duplicado
        var elementoOriginal = document.querySelector(".block-list-1");

        // Clona o elemento
        var cloneElemento = elementoOriginal.cloneNode(true);
    
        // Insere o clone após o elemento original
        elementoOriginal.parentNode.insertBefore(cloneElemento, elementoOriginal.nextSibling);
};
