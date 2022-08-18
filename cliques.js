const msgCliques = document.querySelector('#msgCliques')

let contador = 0 

function contarCliques() {
    contador++
    msgCliques.innerHTML = `Você clicou ${contador} vezes`
}

function zerarCliques() {
    msgCliques.innerHTML = ''
}

