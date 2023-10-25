const leitor=require("readline-sync")

let a =leitor.questionInt("Insira um número: ")
let b =leitor.questionInt("Insira um número: ")

function mult(a, b){
    return a * b
}

console.log(mult(a, b))
