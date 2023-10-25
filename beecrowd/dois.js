const leitor=require('readline')({

input: process.stdin,
ouput: process.stdout

})

let a; 
let b;
let X;

leitor.question("" , a => {
    leitor.question("" , b => {
X = a+b;
console.log('X= $(c)');
    })
})