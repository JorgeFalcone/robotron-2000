const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const estatistica = document.querySelectorAll("[data-estatistica]")

const controle = document.querySelectorAll("[data-controlador]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controle.forEach( (elemento) =>{ 
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controlador, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca, evento.target.dataset.controlador)
    })
})

function manipulaDados(operacao, controle){

    const contador = controle.querySelector("[data-contador]")

    if(operacao === "-"){
        contador.value = parseInt(contador.value) - 1
    }
    else{
        contador.value = parseInt(contador.value) + 1
    }

}

function atualizaEstatistica(peca, operacao) {

    if(operacao === "+"){
        estatistica.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        })
    }
    else{
        estatistica.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        })
    }

}

