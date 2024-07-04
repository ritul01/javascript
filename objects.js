// singleton  obkect.create
// object literals

const mySym=Symbol("key1")

const user={
    name:"singh",
    "full name":"Ritul Singh",
    [mySym]:"mySym",
    age:22,
    location:"gkp",
    email:"singh@gmail.com",
    isLoggedIn:false,
    lastOnline:["yesterday","tommorow"]
}
// console.log(user.email)
// console.log(user["email"])
// console.log(user["full name"])
// console.log(user[mySym])

user.email="singh123@gmail.com"
// Object.freeze(user)
user.email="singh0000@gmail.com"
// console.log(user)

user.greeeting=function(){
    console.log(`hello ji`)
}
user.greeeting2=function(){
    console.log(`hello ji ${this.name}`)
}
// console.log(user.greeeting())
// console.log(user.greeeting2())


const user2=new Object()
user2.name="singh"
user2.id="123234"
user2.isLoggedIn=false

// console.log(user2)

const user3={
    email:"rss@gmail.com",
    fullname:{
        userFullname:{
            firstname:"Ritul",
            lastname:"singh"
        }
    }
}
// console.log(user3.fullname.userFullname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}

// console.log(obj3)

const user4=[
    {
        id:1,
        email:"rssss@gmail.com"
    },
    {
        id:1,
        email:"rssss@gmail.com"
    },
    {
        id:1,
        email:"rssss@gmail.com"
    },
]
user4[1].email

// console.log(Object.keys(user2))
// console.log(Object.values(user2))
// console.log(Object.entries(user2))

// console.log(user2.hasOwnProperty('isLogged'));


//-----------de-structured object---------------

const course={
    courseName:"Javascript",
    price:"5000",
    courseInstructor:"Singh"
}
// course.courseInstructor

const {courseInstructor:instructor}=course
// console.log(courseInstructor)
console.log(instructor)

// {
//     "name":"singh",
//     "coursename":"javascript",
//     "instrucotr":"singh"
// }

[
    {},
    {},
    {}
]