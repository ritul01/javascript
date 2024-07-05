const user={
    username:"singh",
    price:99,
    msg:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.msg()
// user.username="sam"
// user.msg()

// console.log(this);

// function don(){
//     let username="singh"
//     console.log(this.username);
// }
// don()

// const don=function(){
//     let username="singh"
//     console.log(this.username);
// }
// don()

const don=()=>{
    let username="singh"
    console.log(this);
}
// don()

// const addition=(num1,num2)=>{
//     return num1+num2
// }

// const addition=(num1,num2)=>(num1+num2)
const addition=(num1,num2)=>({username:"singh"})
console.log(addition(2,3));

// const myarr=[2,1,4,43]
// myarr.forEach(()=>{})

//-   Imediately Invoked function Expression (IIFE)

(function don(){
    // named iife
    console.log("Connected");
})();

((name)=>{
    // unnames iife
    console.log(`Connected DB ${name}`);
})("singh")