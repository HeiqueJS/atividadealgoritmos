/*c) Escreva uma função que receba um número e devolva um booleano
indicando se ele é par ou não*/

const leitor=require("readline-sync")

let a =leitor.questionInt("Insira um número: ")

function par(a){
    return (a%2)===0
}

console.log(par(a));
