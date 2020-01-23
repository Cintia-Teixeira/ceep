'use strict';

(function () {
    var btns = document.querySelectorAll(".opcoesDoCartao-remove");

    var _loop = function _loop(i) {

        btns[i].addEventListener('click', function () {

            var cartao = btns[i].closest('.cartao');

            cartao.classList.add('cartao--some');

            cartao.addEventListener('transitionend', function () {
                cartao.remove();
            });
        });
    };

    for (var i = 0; i < btns.length; i++) {
        _loop(i);
    }
})();