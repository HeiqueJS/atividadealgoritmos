const leitor = require("readline-sync");

function main() {
  let nome = leitor.question("Insira o nome do item a ser comprado: ");
  let item = leitor.questionInt("Insira o valor do item: ");
  let valorX = leitor.questionInt("Insira a porcentagem de desconto: ");
  let desconto = (item *(( 100 - valorX ) /100))
  console.log(
    `O item é: ${nome}, o valor bruto: ${item} e o valor final com desconto: ${desconto}`
  );
}

main();
