/* data: 20/01/2023 */

// declarando constantes
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const cores = document.querySelectorAll("[data-cor]");
const robo = document.querySelector(".robo");

cores.forEach( (elemento) => {
    elemento.addEventListener("click", () => { alteraCor(elemento.dataset.cor) })
})

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

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, elemento.parentNode);
        atualizaEstatisticas(evento.target.dataset.pecas);
    });
});

/* função manipulaDados */
function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-") {
     peca.value = parseInt(peca.value) - 1 ;
    } else {
     peca.value = parseInt(peca.value) + 1 ;
    }
}
/* função para atualizar as estatisticas */
function atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        console.log(pecas[peca]);
        console.log(elemento.dataset.estatistica.textContent)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    });
}

/* função para alterar a cor do robô */
function alteraCor(cor) {
    robo.src = ("img/" + cor + ".png");
    console.log(robo.src);
}