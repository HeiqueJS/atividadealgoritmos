
const leitor=require("readline-sync")

let n =leitor.questionInt("Insira um número: ")
let m =leitor.questionInt("Insira um número: ")

const num =(a)=> console.log(a)

num(n)

const soma =(a, b)=> num(a+b)

soma(n, m)