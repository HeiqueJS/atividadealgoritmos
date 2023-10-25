const leitor=require("readline-sync")

let a= leitor.question("Qual a sua idade?")
let b= leitor.question("Qual a idade de seu melhor amigo?")

console.log("Sua idade é maior do que a do seu amigo?",a>b)
console.log("Qual a diferença de idade?", a-b)
