/*const leitor = require("readline-sync")
 
let  a = leitor.question("Insira seu nome: ")
let b = leitor.questionInt("Insira sua idade: ")
let c = leitor.question("Insira o sua localidade: ")
let d = leitor.question("O que você pratica?" )*/

const leitor = require("readline-sync")
 
let  a = leitor.question("Insira seu nome: ")
let b = leitor.questionInt("Insira sua idade: ")
let c = leitor.question("Insira o sua localidade: ")
let d = leitor.question("O que você pratica?" )

function frase(a, b, c, d){
    return ` Eu sou ${a}, tenho ${b} anos, moro em ${c} e pratico ${d}.`
}

console.log(frase(a, b, c, d));
