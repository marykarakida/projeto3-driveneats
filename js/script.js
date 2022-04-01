function escolherPrato (pratoClicado) {
    const pratoSelecionado = document.querySelector(".clicado--prato"); 
    const iconeSelecionado = document.querySelector(".clicado--prato ion-icon"); 
    if (pratoSelecionado !== null) {
        iconeSelecionado.classList.remove("checkmark--prato");
        pratoSelecionado.classList.remove("clicado--prato");
    } 
    pratoClicado.classList.add("clicado--prato");
    const iconeClicado = document.querySelector(".clicado--prato ion-icon"); 
    iconeClicado.classList.add("checkmark--prato");

    HabilitarConfirmacao ()
}

function escolherBebida (bebidaClicado) {
    const bebidaSelecionado = document.querySelector(".clicado--bebida"); 
    const iconeSelecionado = document.querySelector(".clicado--bebida ion-icon"); 
    if (bebidaSelecionado !== null) {
        iconeSelecionado.classList.remove("checkmark--bebida");
        bebidaSelecionado.classList.remove("clicado--bebida");
    } 
    bebidaClicado.classList.add("clicado--bebida");
    const iconeClicado = document.querySelector(".clicado--bebida ion-icon"); 
    iconeClicado.classList.add("checkmark--bebida");

    HabilitarConfirmacao ()
}

function escolherSobremesa (sobremesaClicado) {
    const sobremesaSelecionado = document.querySelector(".clicado--sobremesa"); 
    const iconeSelecionado = document.querySelector(".clicado--sobremesa ion-icon"); 
    if (sobremesaSelecionado !== null) {
        iconeSelecionado.classList.remove("checkmark--sobremesa");
        sobremesaSelecionado.classList.remove("clicado--sobremesa");
    } 
    sobremesaClicado.classList.add("clicado--sobremesa");
    const iconeClicado = document.querySelector(".clicado--sobremesa ion-icon"); 
    iconeClicado.classList.add("checkmark--sobremesa");

    HabilitarConfirmacao ()
}

function HabilitarConfirmacao () {
    const prato = document.querySelector(".clicado--prato"); 
    const bebida = document.querySelector(".clicado--bebida"); 
    const sobremesa = document.querySelector(".clicado--sobremesa"); 
    const botao = document.querySelector(".barra-inferior button"); 

    if (prato !== null && bebida !== null && sobremesa !== null) {
        botao.classList.add("botao--ativo");
        botao.innerHTML = "Fechar pedido";
    } else {
        botao.classList.remove("botao--ativo");
    }
}

