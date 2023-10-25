const leitor = require("readline-sync");

function main() {
  let salario = leitor.questionInt("Insira o seu salário: ");
  console.log("Este é seu salário ", salario);
  console.log("O seu salário com o desconto do INSS:", desconto1(salario));
  console.log("O se salário com o desconto do INSS e IRRF:", desconto2(desInss));
}


function desconto1(salario) {
  if (salario > 1300) {
    return a(salario, valorX);
  } else {
    return salario;
  }
}

function desconto2(deInss) {
    if (deInss> 1904) {
  return b(deInss,valorX);
  }else{
  return a(salario, valorX);
  }
  }  
  
  
  main()
  
const a = (salario, valorX) => salario * ((100 - valorX) / 100);
const b = (desInss,valorX) => deInss * ((100 - valorX) / 100)
let valorX = 7.5
let desInss = a (salario, valorX)