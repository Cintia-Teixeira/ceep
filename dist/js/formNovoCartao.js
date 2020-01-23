'use strict';

var form = document.querySelector('.formNovoCartao');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var textarea = form.querySelector('.formNovoCartao-conteudo');
    if (textarea.value.trim().length === 0) {
        var msgErro = document.createElement("div");
        msgErro.classList.add('formNovoCartao-msg');
        msgErro.textContent = "Formulário inválido. Por favor, digite algo";

        var btnSubmit = form.closest('.formNovoCartao-salvar');
        form.addEventListener('animationend', function (event) {
            event.target.remove();
        });

        form.insertBefore(msgErro, btnSubmit);
    } else {

        adicionaCartaoNoMural({ conteudo: textarea.value });
    }

    textarea.value = "";
});

form.classList.remove('no-js');