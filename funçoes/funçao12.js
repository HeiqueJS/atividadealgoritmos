
const leitor=require("readline-sync")

let a =leitor.questionInt("Insira um número: ")
let b=leitor.questionInt("Insira um número: ")

function teorema(a, b){
    let hip = a*a + b*b 
    return hip
}

console.log(teorema(a, b));