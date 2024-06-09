/*

Objetivo 1 - quando clicarmos na seta avançar, temos de mostrar o próximo cartão da lista de personagens:
    - passo 1 - pegar o elemento html da seta de avançar
    - passo 2 - identificar que o usuário clicou na seta
    - passo 3 - esconder o cartão atual
    - passo 3 - fazer aparecer o próximo cartão


Objetivo 2 - quando clicarmos na seta voltar temos de mostrar o cartão anterior da lista de personagens:
    - passo 1 - pegar o elemento html da seta de voltar
    - passo 2 - identificar que o usuário clicou na seta
    - passo 3 - esconder o cartão atual
    - passo 4 - fazer aparecer o cartão anterior

*/

const btnAvancar = document.getElementById("btn-avancar")
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function() {

    if(cartaoAtual === cartoes.length - 1) return 

    esconderCartaoSelecionado ()
    
    cartaoAtual++;
    
    cartoes[cartaoAtual].classList.add("selecionado")

    
})


const btnVoltar = document.getElementById("btn-voltar")

btnVoltar.addEventListener("click", function() {

    if(cartaoAtual === 0) return 

    esconderCartaoSelecionado ()
    
    cartaoAtual--;
    
    cartoes[cartaoAtual].classList.add("selecionado")

});

function esconderCartaoSelecionado () {
    const cartaoSelecionado = document.querySelector(".selecionado")
    cartaoSelecionado.classList.remove("selecionado")
}