class user {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}singh`
    }

    set password(value){
        this._password = value
    }
}

const p1 = new user("singh@gmail.com", "abc")
console.log(p1.password);