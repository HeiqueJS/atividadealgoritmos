const leitor=require("readline-sync")

function main() {
    let menu = true
    while (menu) {
        let cor = leitor.question("Insira uma cor: ")
        switch (cor) {
            case `Verde`:
                console.log(`É minh cor preferida`);
                break;
            case `laranja`:
                console.log(`Uma bela fruta`);
                break;
            case `vermelho`:
                console.log(`Colorado?`);
                break;
            case `azul`:
                console.log(`Gremista?`);
                break;
            case `Branco`:
                console.log(`Uma ótima cor`);
                break;
            case `marron`:
                console.log(`Lembra terra`);
                break;
            case `rosa`:
                console.log(`Uma flor...`);
                break;
            case `Sair`:
                console.log(`Adeus!`);
                menu = false
                break;
            default:
                console.log(`Essa cor nao existe no nosso banco de cores`);
                break;
        }

    }
}
main()
