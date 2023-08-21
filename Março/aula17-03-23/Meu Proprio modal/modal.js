const AbrirModal = document.getElementById('conteudoModal');
const FecharModal = document.getElementById('close')

function btnModal() {
    AbrirModal.style.display = "block"
}

function btnFechar () {
    AbrirModal.style.display = "none"
}

FecharModal.addEventListener("click", btnFechar) //evento escutando a function


//evento para clicar fora e fechar o modal
window.addEventListener("click" , (event) => {
    if(event.target === AbrirModal ) {
        btnFechar()
    }
})