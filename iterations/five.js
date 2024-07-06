const lang=["js","python","cpp","java","ruby"]

// lang.forEach(function(item){
//     console.log(item);
// })

// lang.forEach((item)=>{
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}
// lang.forEach(printMe)

lang.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const myLang=[
    {
        langName:"Javascript",
        lanfFilename:"js"
    },
    {
        langName:"Python",
        lanfFilename:"py"
    },
    {
        langName:"Java",
        lanfFilename:"java"
    },
    {
        langName:"C++",
        lanfFilename:"cpp"
    },
]

myLang.forEach((item)=>{
    console.log(item.langName);
})