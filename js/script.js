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
    const telaPedido = document.querySelector(".fundo-branco"); 
    telaPedido.classList.remove("pedido-final"); 

    document.querySelector("h3.primeiro").innerHTML = document.querySelector(".clicado--prato h3").innerHTML; 
    document.querySelector("h3.segundo").innerHTML = document.querySelector(".clicado--bebida h3").innerHTML; 
    document.querySelector("h3.terceiro").innerHTML = document.querySelector(".clicado--sobremesa h3").innerHTML; 

    document.querySelector("p.primeiro").innerHTML = document.querySelector(".clicado--prato .categoria__preco").innerHTML;
    document.querySelector("p.segundo").innerHTML = document.querySelector(".clicado--bebida .categoria__preco").innerHTML;
    document.querySelector("p.terceiro").innerHTML = document.querySelector(".clicado--sobremesa .categoria__preco").innerHTML;

    const precoTotal = calcularTotal();
    document.querySelector("p.total").innerHTML = `R$ ${precoTotal}`; 
}

function calcularTotal() {
    let precoPrato = document.querySelector(".clicado--prato .categoria__preco").innerHTML;
    let precoBebida = document.querySelector(".clicado--bebida .categoria__preco").innerHTML;
    let precoSobremesa = document.querySelector(".clicado--sobremesa .categoria__preco").innerHTML;
    precoPrato = Number(precoPrato.replace("R","").replace("$","").replace(",","."));
    precoBebida = Number(precoBebida.replace("R","").replace("$","").replace(",","."));
    precoSobremesa = Number(precoSobremesa.replace("R","").replace("$","").replace(",","."));

    return (precoPrato + precoBebida + precoSobremesa).toFixed(2);
}

function confirmarPedidoAgain () {
    const nomePrato = document.querySelector("h3.primeiro").innerHTML; 
    const nomeBebida = document.querySelector("h3.segundo").innerHTML; 
    const nomeSobremesa = document.querySelector("h3.terceiro").innerHTML; 
    const precoTotal = document.querySelector("p.total").innerHTML;

    const nome = prompt("Qual é o seu nome?");
    const endereco = prompt("Qual é o seu endereço?");

    if (nome == null || nome == "" || endereco == null || endereco == "") {
        alert("Pelo menos uma das perguntas não foi respondida. Por favor, clique novamente no botão para confirmar o pedido e responda as perguntas para prosseguir.")
    } else {
        let URI = `Olá, gostaria de fazer o pedido:\r\n- Prato: ${nomePrato}\r\n- Bebida: ${nomeBebida}\r\n- Sobremesa: ${nomeSobremesa}\r\nTotal: R$${precoTotal}\r\n\r\nNome: ${nome}\r\nEndereço: ${endereco}`;
        URI = encodeURIComponent(URI);
        window.open(`https://wa.me/5511939053423?text=${URI}`);
    }
}

function cancelarPedido () {
    const telaPedido = document.querySelector(".fundo-branco"); 
    telaPedido.classList.add("pedido-final"); 
}