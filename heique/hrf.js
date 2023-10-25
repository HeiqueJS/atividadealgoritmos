const leitor = require("readline-sync")
 
let nome= leitor.questionFloat("Insira seu nome: ")
let idade = leitor.questionInt("Insira sua idade: ")
let localidade = leitor.questionFloat("Insira o sua localidade: ")
let simounao= leitor.questionFloat("Você é estudante?" )

if (simounao = "nao"){
console.log("Eu sou "+nome+", tenho "+idade+"anos, moro em "+localidade+" e estudo.")

}else console.log("Eu sou "+nome+", tenho "+idade+"anos, moro em "+localidade+" estudo.")