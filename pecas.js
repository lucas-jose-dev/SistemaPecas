// Váriaveis, são um espaço na memória para guarda algum valor 
let pesoPeca = 50

if(pesoPeca > 100) {
    console.log("Peso maior que 100g, logo, podemos cadastar")
} else {
    console.log("Peso insuficiente, não é possivel cadastrar")
}

let numeroPecas = 10

if(numeroPecas < 10) {
    console.log("Ainda há espaço na caixa, podemos cadastrar a peça")
} else {
    console.log("Não há espaço disponível na caixa")
}

let nomePeca = 'di'

console.log("O comprimento do nome da peça é:",nomePeca.length )

if(nomePeca.length < 3) {
    console.log("Nome da peça muito curto, não é possivel cadastrar")
}else {
    console.log("Nome de peça adequado, podemos cadastrar")
}