const leitor=require("readline-sync")

let a =leitor.questionInt("Insira um número: ")
let b =leitor.questionInt("Insira um número: ")

function soma(a, b){
    return a + b
}

console.log(soma(a, b))
