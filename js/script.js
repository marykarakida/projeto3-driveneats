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

function confirmarPedido () {
    const nomePrato = document.querySelector(".clicado--prato h3").innerHTML; 
    const nomeBebida = document.querySelector(".clicado--bebida h3").innerHTML; 
    const nomeSobremesa = document.querySelector(".clicado--sobremesa h3").innerHTML; 

    const precoPrato = document.querySelector(".clicado--prato .categoria__preco").innerHTML;
    const precoBebida = document.querySelector(".clicado--bebida .categoria__preco").innerHTML;
    const precoSobremesa = document.querySelector(".clicado--sobremesa .categoria__preco").innerHTML;
    const precoTotal = calcularTotal(precoPrato,precoBebida,precoSobremesa);

    let URI = `Olá, gostaria de fazer o pedido:\r\n- Prato: ${nomePrato}\r\n- Bebida: ${nomeBebida}\r\n- Sobremesa: ${nomeSobremesa}\r\nTotal: R$${precoTotal}`;
    URI = encodeURIComponent(URI);

    window.open(`https://wa.me/?text=${URI}`);
}

function calcularTotal(preco1,preco2,preco3) {
    preco1 = Number(preco1.replace(/[^0-9.-]+/g,""));
    preco2 = Number(preco2.replace(/[^0-9.-]+/g,""));
    preco3 = Number(preco3.replace(/[^0-9.-]+/g,""));

    return (preco1 + preco2 + preco3).toFixed(2);
}
