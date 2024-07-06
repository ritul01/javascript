// for of
const a=[1,2,3,4,5]
const greetings="hello singh"
for (const it of greetings) {
    // console.log(it);
}

// map

const map=new Map()
map.set('IN',"India")
map.set('Fr',"France")
map.set('USA',"United state of America")
map.set('IN',"India")

// console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myObj={
    game1:'NFS',
    game2:'GTA',
}
// for (const [key,value] of myObj) {
//     console.log(key,':-',value);
// }