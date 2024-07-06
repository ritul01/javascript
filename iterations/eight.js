const mynums=[1,2,3,4]

// const num=mynums.reduce(function(a,curr){
//     console.log(`acc: ${a} and current value: ${curr}`);
//     return a+curr
// },0)

const num=mynums.reduce((a,curr)=>a+curr,0)

console.log(num);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);