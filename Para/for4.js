const leitor=require("readline-sync")

let num = leitor.questionInt("insira um numero para descobrir seu fatorial: ")
let fator = 1;

for(let i = num; i >= 1; i--){
    fator *= i;
}

console.log('O fatorial de '+num +" é " +(fator))
