const leitor=require("readline-sync")
 
  function main(){
    
let valor=leitor.questionInt("Insira o número que deseja fatorar: ")
let resultado=fatorial(valor)
function fatorial(valor) {
    for ( let i=1; i <= valor; i++) {
        resultado *= i;
      }
      return resultado;
  }
 }

 console.log("O número incerido "+ valor +", fatorado tem o valor de "+resultado+".");
main()

function fatorial(valor) {
    for ( let i=1; i <= valor; i++) {
        resultado *= i;
      }
      return resultado;
  }
