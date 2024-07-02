const name="singh"
const repoCnt=10

// console.log(name+repoCnt+" value")    
// old methods

console.log(`hello my name is ${name} and my repo count is ${repoCnt}`)

const gameName=new String("singh")

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
console.log(gameName.indexOf('n'))

const newString=gameName.substring(0,3)
const anotherString=gameName.slice(-6,3)
console.log(newString)
console.log(anotherString)

const str1="        singh  "
console.log(str1)
console.log(str1.trim())

const url="http://singh.com/singh%20singh"
console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))