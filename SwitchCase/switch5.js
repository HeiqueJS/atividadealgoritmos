const leitor = require('readline-sync')

function main() {
        let nota = leitor.questionInt("Insira sua nota, sendo igual ou menor que 100: ")
        let conceito
        if (nota <= 100 || nota > 80) { conceito = `A` }
        if (nota <= 80 && nota > 60) { conceito = `B` }
        if (nota <= 60 && nota > 40) { conceito = `C` }
        if (nota < 40) { conceito = `F` }
        switch (conceito) {
            case `A`:
                console.log('A');
                break;
            case `B`:
                console.log('B');
                break;
            case `C`:
                console.log('C');
                break;
            case `F`:
                console.log('F');
                break;
            default:
                break;
        }
    }

main()
