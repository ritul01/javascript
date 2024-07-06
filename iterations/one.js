// for
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==5){
        // console.log("5 best number");
    }
    // console.log(element);
}

for(let i=1;i<=10;i++){
    // console.log(`Outer loop vlaue: ${i}`);
    for(let j=1;j<=10;j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i+"*"+j+"="+i*j);
    }
}

let myarr=["spiderman","Ironman","superman"]
console.log(myarr.length);
for(let i=0;i<myarr.length;i++){
    const ele=myarr[i]
    console.log(ele);
}

// break and continue

for(let i=1;i<=20;i++){
    if(i==5){
        console.log("5 detected");
        break
    }
    console.log(`value of i is ${i}`);
}
for(let i=1;i<=20;i++){
    if(i==5){
        console.log("5 detected");
        continue
    }
    console.log(`value of i is ${i}`);
}