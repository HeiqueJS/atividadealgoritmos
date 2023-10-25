const leitor=require("readline-sync")

let a =leitor.questionInt("Insira um número: ")
let b =leitor.questionInt("Insira um número: ")

function div(a, b){
    return a / b
}

console.log(div(a, b))
