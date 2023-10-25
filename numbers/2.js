const leitor=require("readline-sync")

let a= leitor.question("Insira seu nome: ");
let b= leitor.question("Insira sua idade:");
let c= leitor.question("Insira sua cor favorita")

console.log ( "Meu nome é " + a +",tenho" + b + "anos e minha cor favorita é " + c + "." )
