const leitor=require('readline-sync')({

    input: process.stdin,
    ouput: process.stdout
    
    })
    
    
   let a= leitor.question("Insira um valor: " )
   let b=leitor.question("Insira o segundo valor: ")
    
    console.log(a+b)