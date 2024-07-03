const time=new Date()
// console.log(time.toString())
// console.log(time.toDateString())
// console.log(time.toLocaleString())
// console.log(typeof time)

// let myDate=new Date(2023,0,7)
let myDate=new Date("01-14-2023")
console.log(myDate.toString())

let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let date2=new Date()
console.log(date2.getMonth()+1)
// console.log(date2.getDay())
// console.log(date2.getHours())

date2.toLocaleString('default',{
    weekday:"long",
    day:"2-digit"
})
console.log(date2)