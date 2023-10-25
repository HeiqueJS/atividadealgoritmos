const leitor=require("readline-sync")

let a= leitor.questionInt("Insira um número: ")
let b=leitor.questionInt("Insira outro número: ")

if ( (a%2)===0 || (b%2)===0 ){
    console.log( a / b );
}else{
    console.log("Um de seus números terão que ser par");
}
