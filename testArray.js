// const arr=[];
// %DebugPrint(arr)
// this will run on d8 environment


// Continuous, Holey

// SMI (small Integer)
// Packed Element
// Double (float,string,function)

const arr2=[1,2,3,4,5]
// PACKED_SMI_ELEMENTS

arr2.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arr2.push('7')
// PACKED_ELEMENTS

arr2[10]=11
// HOLEY ELEMENTS

console.log(arr2);
console.log(arr2.length);
console.log(arr2[9]);

// bound check
// hasOwnProperty(arr2,9)
// hasOwnProperty(arr2.prptotype,1)
// hasOwnProperty(Object.prptotype,1)

// holes are very expensive in js

const arr3=[1,2,3,4,5]
console.log(arr3[2]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arr4=new Array(3)
// just 3 holes          HOLEY_SMI_ELEMENTS
arr4[0]='1'   // HOLEY_ELEMENTS
arr4[1]='2'   // HOLEY_ELEMENTS
arr4[2]='3'   // HOLEY_ELEMENTS

const arr5=[]
arr5.push('1')   // PACKED_ELEMENTS
arr5.push('2')   // PACKED_ELEMENTS
arr5.push('3')   // PACKED_ELEMENTS

const arr6=[1,2,3,4,5]
arr6.push(Infinity)