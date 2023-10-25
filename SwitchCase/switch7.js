const leitor = require('readline-sync')

function main() {
        let veiculo = leitor.question("Escolha o veículo de sua preferência,na nossa loja: ")
        let b= true
        let Bicicleta="bicicleta"
        let Caminhão="caminhão"
        let Carro="carro"
        let Moto="moto"
        while(b)
        switch (veiculo) {
            case Bicicleta:
                console.log('A velocidade de nossa bicicleta é de 50km/h.');
                break;
            case Carro:
                console.log('O valor de nosso carro é de 200km/h.');
                break;
            case Moto:
                console.log('O valor de nossa moto é de 160km/h.');
                break;
            case Caminhão:
                console.log('O valor de nosso caminhão é de 140km/h.');
                break;
            default:
                
                break;
        }
    }
    main()