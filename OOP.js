const user={
    username:"Singh",
    loginCnt:5,
    signedIn:true,
    getUserDetail:function(){
        // console.log("Got User Detail From Database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetail());
// console.log(this);

function user2(username,loginCnt,isLoggedIn){
    this.username=username
    this.loginCnt=loginCnt
    this.isLoggedIn=isLoggedIn
    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const user0=new user2("Singh",4,true)
const user1=new user2("Javascript",10,false)
console.log(user0.constructor);
console.log(user1);