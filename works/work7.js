const leitor=require("readline-sync")

let nums = [ 1, 2, 3, 4, 5, 6 ]

console.log ( nums.length )

if ( nums.length > 2){
    console.log( nums[nums.length -1] );
}else{
    console.log(" Seu array tem menos de 2 elementos ");
}