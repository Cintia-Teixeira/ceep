(function(){
const btn = document.querySelector(".opcoesDoCartao-remove");


function remove() {
    const cartao = btn.closest('.cartao');
    
    cartao.classList.add('cartao--some');

    cartao.addEventListener('transitionend', function(){
        cartao.remove();
    });
}

btn.addEventListener('click', remove); 
    





})();