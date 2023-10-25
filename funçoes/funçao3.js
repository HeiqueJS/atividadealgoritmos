/*a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.*/

const leitor=require("readline-sync")

let a =leitor.questionInt("Insira um número: ")
let b =leitor.questionInt("Insira um número: ")

function soma(a, b){
    return a + b
} 
console.log(soma(a, b));
