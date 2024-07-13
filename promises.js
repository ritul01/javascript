const promise1=new Promise(function(resolve,reject){
    // do an async task
    setTimeout(function(){
        console.log('Async Task Completed');
        resolve()
    },1000)
})
promise1.then(function(){
    console.log('Promise Task Consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task 2 Completed');
        resolve()
    },1000)
}).then(function(){
    console.log('Promise Task 2 resolved');
})

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Singh",email:"singh@gmail.com"})
    },1000)
})
promise3.then(function(user){
    console.log(user);
})

const promise4=new Promise(function(resolve,reject){
    setTimeout(function() {
        let error=true
        if(!error){
            resolve({username:"Singh",password:"12342"})
        }else{
            reject("Error Occured")
        }
    }, 1000);
})
promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log("Error Occured!!!!!!!!");
}).finally(()=>{
    console.log('The Promise is Either resolved or rejected');
})

const promise5=new Promise(function(resolve,reject){
    setTimeout(function() {
        let error=true
        if(!error){
            resolve({username:"Javascript",password:"12342"})
        }else{
            reject("Error: JS went Wrong")
        }
    }, 1000);
})
async function consumeP5(){
    try{
        const response=await promise5
        console.log(response);
    } catch(error){
        console.log(error);
    }
}
consumeP5()

// async function getAllUser(){
//     try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data=await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E: ",error);
//     }
// }
// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})