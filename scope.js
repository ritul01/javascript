if(true){
    let a=10
    const b=20
    // var c=40
    // console.log("inner:",a);
}
let a=300

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="singh"

    function two(){
        const website="singh.com"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username="singh"
    if(username=="singh"){
        const web="youtube"
        // console.log(username+web);
    }
    // console.log(web);
}
// console.log(username);

//------------------------------------------------------------------

console.log(add1(3))
function add1(val){
    return val+1
}

// console.log(add2(3))
const add2=function(val){
    return val+2
}