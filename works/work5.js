const leitor =require("readline-sync")

let a=leitor.question("Escreva uma frase: ")

console.log (a.match(/[aeiou]/g) )