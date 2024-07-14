function setUsername(username){
    this.username=username
}
function createUser(username,email,password){
    setUsername.call(this,username)
    console.log("called");
    this.email=email,
    this.password=password
}
const p1=new createUser("Singh","singh@gmail.com","245")
console.log(p1);