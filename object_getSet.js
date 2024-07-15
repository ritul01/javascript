const user={
    _email:"singh@gmail.com",
    _password:"abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(val){
        this._email=val
    }
}

const p1=Object.create(user)
console.log(p1.email);