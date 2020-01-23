'use strict';

;(function () {

    var btnAjuda = document.querySelector('#btnAjuda');

    btnAjuda.addEventListener('click', function () {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://ceep.herokuapp.com/cartoes/instrucoes');
        xhr.responseType = 'json';
        xhr.send();
        xhr.addEventListener('load', function () {
            var ajudas = xhr.response.instrucoes;

            ajudas.forEach(function (ajuda) {
                adicionaCartaoNoMural(ajuda);
            });
        });
    });

    btnAjuda.classList.remove('no-js');
})();