'use strict';

;(function () {
    var btnSync = document.querySelector('#btnSync');

    btnSync.addEventListener('click', function () {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://ceep.herokuapp.com/cartoes/salvar');
        xhr.setRequestHeader('content-type', 'application/json');

        var cartoes = $('.cartao').toArray();
        cartoes = cartoes.map(function (cartao) {
            return {
                conteudo: cartao.querySelector('.cartao-conteudo').textContent,
                cor: getComputedStyle(cartao).getPropertyValue('background-color')
            };
        });

        var infosDoMural = {
            usuario: "email@email.com.br",
            cartoes: cartoes
        };

        xhr.send(JSON.stringify(infosDoMural));

        xhr.addEventListener('load', function () {
            var response = JSON.parse(xhr.response);
            console.log(response.quantidade + ' cartoes salvos em ' + response.usuario);

            btnSync.classList.remove("botaoSync--esperando");
            btnSync.classList.add("botaoSync--sincronizando");
        });

        xhr.addEventListener("error", function () {
            btnSync.classList.remove("botaoSync--esperando");
            btnSync.classList.add("botaoSync--deuRuim");
        });
    });

    btnSync.classList.remove('no-js');
})();