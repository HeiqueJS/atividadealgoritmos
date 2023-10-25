const leitor=require("readline-sync")

let a= leitor.questionInt("Insira um número: ")
let b=leitor.questionInt("Insira outro número: ")

if ( a >= 0 && b >= 0 ){
    console.log( a + b );
}else{
    console.log("Seus dois números teram que ser positivos.");
}


