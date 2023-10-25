const leitor=require("readline-sync")

function main() {
    let menu = true
    while (menu) {
        let mes = leitor.questionInt("Insira um número que seja referente ao seu mês: ")
        switch (mes) {
            case 1:
                console.log(`Janeiro`);
                break;
            case 1:
                console.log(`Janeiro`);
                break;
            case 2:
                console.log(`Fevereiro`);
                break;
            case 3:
                console.log(`Março`);
                break;
            case 4:
                console.log(`Abril`);
                break;
            case 5:
                console.log(`Maio`);
                break;
            case 6:
                console.log(`Junho`);
                break;
            case 7:
                console.log(`Julho`);
                break;
            case 8:

                console.log(`Agosto`);
                break;
            case 9:

                console.log(`Setembro`);
                break;
            case 10:

                console.log(`Outubro`);
                break;
            case 11:
                console.log(`Novembro`);
                break;

            case 12:
                console.log(`Dezembro`);
                break;
                menu = false
                break;
            default:
                console.log(`Esse mês não existe.`);
                break;
        }

    }
}
main()
