const myObj={
    js:'Javascript',
    cpp:'C++',
    py:'Python',
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const program=["js","cpp","py","jaba"]
for (const key in program) {
    console.log(program[key]);
}

// const map=new Map()
// map.set('IN',"India")
// map.set('Fr',"France")
// map.set('USA',"United state of America")
// map.set('IN',"India")
// for (const key in map) {
//     console.log(key);
// }