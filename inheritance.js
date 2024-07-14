class user{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`Course added by ${this.username}`);
    }
}
const teacher1 = new teacher('Singh','Singh@gmail.com','1234');
teacher1.addCourse()
teacher1.logMe()
const teacher2=new user("Teacher 2")
teacher2.logMe()

console.log(teacher1 instanceof user);