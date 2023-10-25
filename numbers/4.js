const leitor= require("readline-sync")

let dogs =["Pug","Shi Tzu","Buldogue","Poodle","Rottweiler"]

let num =leitor.questionInt("Insira um numero de 0 a 4,para ver qual a raça de animal você escolheu: ")

console.log("Sua raça for :",dogs[num])