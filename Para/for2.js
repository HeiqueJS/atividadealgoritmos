const leitor=require("readline-sync")

let numero=leitor.questionInt("Insira um numero que queria cria uma tabuada ate 10: ")

for (let i = 1; i < 11; i++){
	
	console.log((i)+`${i} veses ${numero} resulta em ${i*numero} `);
}
