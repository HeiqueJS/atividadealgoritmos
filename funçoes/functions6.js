const leitor = require("readline-sync")


function main(){

let a =  leitor.questionFloat("Insira um número: ")
let b =  leitor.questionFloat("Insira um segundo número: ")
let c =  leitor.questionFloat("Insira um terceiro número: ")

const mais = (a,c) => a+c
const menos = (a,b) => a-b
const div= (c,b) => c/b
const mult = (c,a) => c*a

console.log(mais(a,c));
console.log(menos(a,b));
console.log(div(c,b));
console.log(mult(c,a));
}

main()