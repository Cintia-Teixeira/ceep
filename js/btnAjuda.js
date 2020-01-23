; (function () {

    const btn = document.querySelector('#btnAjuda');

    btn.addEventListener('click', function () {
        const ajudas = ["Bem Vindo ao Ceep", "Clique no btn Linhas para mudar o layout"];

        ajudas.forEach(function (ajuda) {
            alert(ajuda)
        })
    })

    btn.classList.remove('no-js');

})();