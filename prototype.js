// let myname="Singh"
// let name="SSSSSSS"
// console.log(myname.trim().length);

let heros=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sting",
    getSpidyPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.singh=function(){
    console.log(`Singh is present`);
}
Array.prototype.sss=function(){
    console.log(`Singh here`);
}
// heroPower.singh()
// heros.singh()
// heros.sss()
// heroPower.sss()


//  Inheritance

const user={
    name:"singh",
    email:"singh@gmail.com"
}

const teacher={
    makevdo:true
}
const teach={
    isAvail:false
}
const TAassist={
    makeAssignment:"JS Assignment",
    fullTime:true,
    __proto__:teach
}
teacher.__proto__=user

// modern syntax
Object.setPrototypeOf(teach,teacher)

let user2="SS with Singh"
String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
user2.trueLength()
"Singh".trueLength()
"coldCoffee".trueLength()