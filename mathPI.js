const descripter=Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(descripter);

// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

const user={
    name:"Singh",
    age:23,
    isAvail:true,

    teaseUser:function(){
        console.log("Fat Gya!!!!!");
    }
}
console.log(Object.getOwnPropertyDescriptor(user,'name'));

Object.defineProperty(user,'name',{
    // writable:false,
    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(user,'name'));

for(let [key,val] of Object.entries(user)){
    if(typeof val!='function'){
        console.log(`${key} : ${val}`);
    }
}