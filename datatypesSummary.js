// Premitive -- 7types
// string,Number,Boolean,null,undefined,symbol,Bigint

const score=100
const scoreVal=100.5
const isLoggedIn=false
const outTemp=null
let userEmail;

const id=Symbol("123")
const anotherId=Symbol("123")

// console.log(id)
// console.log(anotherId)
// console.log(id===anotherId)
// const bigNum=516463459876893n

// Refrence(non premitive)
// Array, object,function

const heros=["shaktiman","naagraj","doga"];
let obj={
    name:"singh",
    age:22,
}

const fun=function(){
    console.log("hello world")
}
// console.log(typeof heros)

//------------------------------------------------------------

//  Stack (Premitive),Heap (Non-Premitive)

let myname="surya Singh"
let anotherName="myname"

console.log(myname)
console.log(anotherName)

let user1={
    email:"singh@gmail.com",
    upi:"user@ybl",
}
let user2=user1
user2.email="surya@gmail.com"

console.log(user1.email)
console.log(user2.email)