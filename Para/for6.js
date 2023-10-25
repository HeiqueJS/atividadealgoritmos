const leitor=require("readline-sync")

function main(){
let num=leitor.questionInt("Insira o número que deseje criar uma tabuada: ")

for (let n= 1; n > 11; n++)
for (let i = 1; i < 11; i++){
	
	console.log ((i)(i*num));
}

}
main()