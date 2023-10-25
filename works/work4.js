const leitor=require("readline-sync")

let nums = [ 1, 2, 3, 4, 5, 6 ]

console.log(nums.length)

nums.splice( 0,1 )
nums.pop()
console.log( nums )