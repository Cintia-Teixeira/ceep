const form = document.querySelector('.formNovoCartao');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const textarea = form.querySelector('.formNovoCartao-conteudo');
    if (textarea.value.trim().length === 0) {
        const msgErro = document.createElement("div")
        msgErro.classList.add('formNovoCartao-msg')
        msgErro.textContent = "Formulário inválido. Por favor, digite algo"

        const btnSubmit = form.closest('.formNovoCartao-salvar')
        form.addEventListener('animationend', function(event){
            event.target.remove()
        })

        form.insertBefore(msgErro, btnSubmit)
    } else {
      
        adicionaCartaoNoMural ({conteudo: textarea.value})
    }
    
    textarea.value = "";
    
})



form.classList.remove('no-js')