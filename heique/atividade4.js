const leitor=require("readline-sync")

let a= leitor.question("Insira True ou False: ")
let b= leitor.question("Insira True ou False: ")
let c= leitor.question("Insira True ou False: ")


console.log(!a||b);
console.log(!b||c);
console.log(!a||c);
console.log(!a||b||c);