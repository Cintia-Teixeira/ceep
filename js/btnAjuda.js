; (function () {

    const btn = document.querySelector('#btnAjuda');

    btn.addEventListener('click', function () {
        const ajudas = [{ conteudo: "Bem Vindo ao Ceep", cor: "#DEB887" },
                        { conteudo: "Clique no btn Linhas para mudar o layout", cor: "#D2B48C" }];

        ajudas.forEach(function (ajuda) {
            adicionaCartaoNoMural(ajuda)
        })
    })

    

    btn.classList.remove('no-js');

})();