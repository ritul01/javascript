// ES6

// class user{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptedPass(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const p1=new user("Singh","singh@gmail.com","123")
// console.log(p1.encryptedPass());
// console.log(p1.changeUsername());

// If class is not avail then...........

function user(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}
user.prototype.encryptPass=function(){
    return `${this.password}abc`
}
user.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}
const p2=new user("Singh","singh@gmail.com","123")
console.log(p2.encryptPass());
console.log(p2.changeUsername());