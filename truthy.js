const useremail=""

if(useremail){
    console.log("got the user email");
}else{
    console.log("no user email");
}

/*
--falsy values-----
false,0,-0,Bigint 0n,null,undefined,NaN,""

----truthy vlaues------
"0","false","",[],{},function(){}

*/

if(useremail.length===0){
    console.log("Array is empty");
}

// const emptyObj={}
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is Empty");
// }

// Nullish coalescing operator (??): null,undefined

let val;
// val=5??10;
// val=null??10
// val=undefined??15
val=null??10??15

console.log(val);

// Terniary Operator   condition?True:false

const price=100
price>=80?console.log("price is good"):console.log("price is not good")