function myFum(){
    console.log("S")
    console.log("I")
    console.log("N")
    console.log("G")
    console.log("H")
}
// myFum()

// function add(num1,num2){
//     console.log(num1+num2);
// }

function add(num1,num2){
    // let res=num1+num2
    return num1+num2
}
const res=add(3,5)
// console.log(res);

function msg(username="sam"){
    if(!username){
        console.log("Please enter your name");
        return
    }
    return `${username} just logged in`
}
// console.log(msg("singh"));

function cardPrice(val1,val2,...num1){
    return num1
}

console.log(cardPrice(100,200,300,2000));

const user={
    username:"Singh",
    price:299
}
function handleObj(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObj(user)

handleObj({
    username:"ritul",
    price:599
})

const newarr=[100,200,300,400]
function secVal(getArray){
    return getArray[1]
}
console.log(secVal(newarr));