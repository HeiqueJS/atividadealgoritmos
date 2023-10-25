/*b) Faça uma função que recebe 2 números e retorne um booleano que informa
se o primeiro número é maior ou igual ao segundo.*/


const leitor=require("readline-sync")

let a =leitor.questionInt("Insira um número: ")
let b =leitor.questionInt("Insira um número: ")

function maior (a, b){
    return a >= b
} 
console.log(maior(a, b));
