const leitor = require("readline-sync")

function main(){
    let a = leitor.questionInt("Insira o valor de A: ")
    let b = leitor.questionInt("Insira o valor de B: ")

    let opcoes = leitor.questionInt("Selecione a operação desejada: \n1 - Soma \n2 - Subtracao \n3 - Multiplicacao \n4 - Divisao \n:")

    switch(opcoes){
        case 1:
            soma(a, b);
            break;
        case 2:
            subtracao(a, b);
            break;
        case 3:
            multiplicacao(a, b);
            break;
        case 4:
            divisao(a, b)
            break;
            default:
                console.log("Opção indisponível, tente novamente.");
                break;
    }
}
main()


function soma(a, b)             { console.log(a + b); }
function subtracao(a, b)        { console.log(a - b); }
function multiplicacao(a, b)    { console.log(a * b); }
function divisao(a, b)          { console.log(a / b); }
