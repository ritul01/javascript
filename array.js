const a=[0,1,2,3,4,5]
// const heros=["batman","ironman"]

// const a2=new Array(1,2,3,4)
// console.log(a[1])

//-----------methods----

a.push(6)
a.pop()

a.unshift(9)
a.shift()
console.log(a)
// console.log(a.includes(9))
// console.log(a.indexOf(3))

// const a3=a.join()
// console.log(a3)

// console.log("A",a)
// const myn=a.slice(1,3)

// console.log(myn)
// console.log("B",a)

// const myn2=a.splice(1,3)
// console.log("C",a)
// console.log(myn2)

// -------------------------------------------------------

const heros=["spiderman","thor","ironman"]
const hero2=["superman","batman","flash"]

// heros.push(hero2)
// console.log(heros)

// const all=heros.concat(hero2)
// console.log(all)

// const all=[...heros,...hero2]
// console.log(all)

const arr=[1,2,3,[4,5,6],7,[4,6,[3,4,5]]]
const realArr=arr.flat(Infinity)
// console.log(realArr)

console.log(Array.isArray("singh"))
console.log(Array.from({name:"singh"}))

let s1=12
let s2=14
let s3=15

console.log(Array.of(s1,s2,s3))