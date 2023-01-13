//Escopo Global
let cor = "azul"; //Escopo global
cor = "vermelho"
// console.log(cor)
cor="verde"
//console.log(cor)

let aluno = "Mariana"
//console.log(aluno)
aluno="Gabriela"
//console.log(aluno)
aluno="Rodrigo"
//console.log(aluno)


const nascimento = 1998
console.log(nascimento)

//nascimento= 1999
//console.log(nascimento) //TypeError: Assignment to constant variable


//Função (bloco) - Escopo local

function animais(){
    var animal = "Elefante"
    //animal="girafa"    // animal is not define, porque estou tentando reaproveitar a variável dentro do mesmo escopo(função)

    // console.log(animal)
}
animais();


animal="girafa"    //Estou atualizando o meu valor fora da função
console.log(animal)


//Numeral

//let n1 = 3
//let n2 = 5
//let total = n1 + n2
//let total = n1 - n2
//let total = n1 / n2
//let total = n1 * n2

let n1 = '3' //Está entendendo como string / texto
let n2 = "5" //Está entendendo como string / texto
let total = n1 + n2 // Está concatenando(juntando) os dados

console.log(total)