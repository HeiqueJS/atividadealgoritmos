const leitor=require("readline-sync")

let frase=leitor.question("Escreva uma frase: ")
let novafrase=frase.reaplace("o","i")
let frasetamanho=(frase.length)
let frasetoupper=(frase.toUpperCase("Neymar","Messi"))

console.log(frase + novafrase + frase + frasetamanho + frasetoupper)