const leitor=require("readline-sync")

let a= leitor.question("Insira um número. ")
let b= leitor.question("Insira outro número.")

console.log("O primeiro numero é maior que segundo?", a>b)
console.log("O primeiro numero é igual ao segundo?", a==b)
console.log("O primeiro numero é divisível pelo segundo?", (a%b)===0)
console.log("O segundo numero é divisível pelo primeiro?", (b%a)===0)

