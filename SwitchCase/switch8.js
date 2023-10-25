const leitor=require("readline-sync")


let menu = true
    while (menu) {
        let n1 = leitor.questionInt('Se deseja sair digite 0 \n.Ensira um numero de 1 a 5: ')
            function main(){
                switch (n1) {
            case 1:
                console.log('acertou!');
                break;
            case 2:
                console.log('quase!');
                break;
            case 3:
                console.log('foi por pouco');
                break;
            case 4:
                console.log('nao foi dessa vez');
                break;
            case 5:
                console.log('tente de novo');
                break;
            case 0:
                console.log('Adeus!');
               
                break;
            default:
                console.log('Numero invalido, ensire um numero de 1 a 5');
                break;
        }
    }
    }
main()