const leitor=require("readline-sync")
let a= leitor.question("Qual a sua idade em anos?")

console.log("Qual a sua idade em meses?", a*12)
console.log("Qual a sua idade em dias?", a*12*30)
console.log("Qual a sua idade em horas?", a*12*30*60)
