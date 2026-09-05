const textoDisplay = document.getElementById('quemSou-JS')
const sufixo = ["envolvedor", "igner"]
const prefixo = ["Des"]
let fraseEntrada = 0
let letraEntrada = 3
let estaApagando = false

function loop() {
    const fraseAtual = sufixo[fraseEntrada]

    if(estaApagando) {
        letraEntrada--
    } else {
        letraEntrada++
    }

    textoDisplay.textContent = prefixo + fraseAtual.slice(0, letraEntrada)

    let velocidade = estaApagando ? 60 : 250

    if(!estaApagando && letraEntrada === fraseAtual.length) {
        velocidade = 2000
        estaApagando = true
    } else if(estaApagando && letraEntrada === 0) {
        estaApagando = false
        fraseEntrada = (fraseEntrada + 1) % sufixo.length
    }

    setTimeout(loop, velocidade)

    console.log(estaApagando, letraEntrada)
}

loop()