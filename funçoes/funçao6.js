/*d) Faça uma função que recebe uma mensagem ( string ) como parâmetro e
imprima o tamanho dessa mensagem, juntamente com uma versão dela em
letras maiúsculas.*/

const leitor=require("readline-sync")

let a =leitor.question("Escreva uma frase: ")

function string(a){
    return (a.length)
}

console.log(string(a));
