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
    }

})();