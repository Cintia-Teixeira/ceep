'use strict';

;(function () {

    var mural = document.querySelector('.mural');

    mural.addEventListener('click', function (event) {
        if (event.target.classList.contains('opcoesDoCartao-radioTipo')) {
            var cartao = event.target.closest('.cartao');
            cartao.style.backgroundColor = event.target.value;
        }
    });

    mural.addEventListener('keydown', function (event) {
        if (event.target.classList.contains('opcoesDoCartao-opcao') && event.key === 'Enter') {
            event.target.click();
        }
    });

    mural.addEventListener('click', function (event) {
        if (event.target.classList.contains('opcoesDoCartao-remove')) {
            var cartao = event.target.closest('.cartao');

            cartao.classList.add('cartao--some');

            cartao.addEventListener('transitionend', function () {
                cartao.remove();
            });
        }
    });

    mural.addEventListener('focusin', function (event) {
        var cartao = event.target.closest('.cartao');
        cartao.classList.add('cartao--focado');
    });

    mural.addEventListener('focusout', function (event) {
        var cartao = event.target.closest('.cartao');
        cartao.classList.remove('cartao--focado');
    });
})();