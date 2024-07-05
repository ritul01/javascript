// if

// const isLoggedIn=true
// const temp=28
// if(temp===40){
//     console.log("Normal");
// }else{
//     console.log("Hot");
// }
// console.log("executed");
// <,>,=,<=,>=,==,!=,===,!==

// const score=200
// if(score>100){
//     let power="fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

const bal=1000
// if(bal>500) console.log("test"),console.log("tet2");;
if(bal<500){
    console.log("less than 500");
}else if(bal<750){
    console.log("less than 750");
}else if(bal<900){
    console.log("less than 900");
}else{
    console.log("more than 1200");
}

const loggedIn=true
const debitcard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(loggedIn && debitcard){
    console.log("allow to buy drink");
}
if(loggedIn || loggedInFromGoogle || loggedInFromEmail){
    console.log("allow to take drink");
}


// -----------Switch---------------------------------------------

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=6;
switch(month){
    case 1:                   // case can be string also
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Invalid month");
        break
}