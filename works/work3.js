const leitor=require("readline-sync")

let a= leitor.questionInt("Insira um número para ser dividido: ")
let b=leitor.questionInt("Insira um número para ser seu divisor: ")

if ( b !== 0) {
    console.log( a / b );
}else{
    console.log("Seu número terá que ser diferente de zero")
}