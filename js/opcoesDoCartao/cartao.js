(function () {

    const cartoes = document.querySelectorAll('.cartao');


    for (let i = 0; i < cartoes.length; i++) {
        const cartao = cartoes[i];

        cartao.addEventListener('focusin', function () {
            cartao.classList.add('cartao--focado');
        })
        cartao.addEventListener('focusout', function () {
            cartao.classList.remove('cartao--focado')
        })

        cartao.addEventListener('change', function (event) {
            if (event.target.classList.contains('opcoesDoCartao-radioTipo')) {
                cartao.style.backgroundColor = event.target.value;
            }
        })

        cartao.addEventListener('keydown', function (event) {
            if (event.target.classList.contains('opcoesDoCartao-opcao') && (event.key === 'Enter')) {
                event.target.click();
            }
        })

        cartao.addEventListener('click', function (event) {
            if (event.target.classList.contains('opcoesDoCartao-remove')) {
                cartao.classList.add('cartao--some');

                cartao.addEventListener('transitionend', function () {
                    cartao.remove();
                })
            }
        })
    }


})();