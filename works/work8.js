const leitor=require("readline-sync")

let nums = [ 1, 2, 3, 4, 5, 6]


if (nums.length >= 1 && nums[0] > 0 ){
    console.log( nums[0] );
}else{
    console.log("Seu array tem menos de um elemento");
}