; (function () {

    const mural = document.querySelector('.mural');


    mural.addEventListener('click', function (event) {
        if (event.target.classList.contains('opcoesDoCartao-radioTipo')) {
            const cartao = event.target.closest('.cartao');
            cartao.style.backgroundColor = event.target.value;
        }
    })

    mural.addEventListener('keydown', function (event) {
        if (event.target.classList.contains('opcoesDoCartao-opcao') && (event.key === 'Enter')) {
            event.target.click();
        }

    })

    mural.addEventListener('click', function (event) {
        if (event.target.classList.contains('opcoesDoCartao-remove')) {
            const cartao = event.target.closest('.cartao');

            cartao.classList.add('cartao--some');

            cartao.addEventListener('transitionend', function () {
                cartao.remove();
            })
        }
    })

    mural.addEventListener('focusin', function (event) {
        const cartao = event.target.closest('.cartao');
        cartao.classList.add('cartao--focado');
    })

    mural.addEventListener('focusout', function (event) {
        const cartao = event.target.closest('.cartao');
        cartao.classList.remove('cartao--focado');
    })

})();