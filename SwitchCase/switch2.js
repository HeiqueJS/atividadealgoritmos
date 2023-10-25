const leitor = require('readline-sync')


function main() {

    let menu = true
    while (menu) {
    let n = leitor.questionInt('Insira um numero de 1 a 3, caso queira sair use 4: \n')
        switch (num) {
            case 1:
console.log('Correto');
                break;
case 2:
console.log('Errado');
                break;
case 3:
console.log('É mais ou menos');
                break;
            case 4:
console.log('n4');
                menu = false
                break;
            default:
console.log('Numero invalido');
                break;
        }
      }
    }
main()