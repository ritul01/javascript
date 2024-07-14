class user{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
    static createID(){
        return `123`
    }
}
const p1=new user("Singh")
// p1.logMe()
// console.log(p1.createID())

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const p2=new teacher("iPhone","iphone@gmail.com")
console.log(p2.createID());