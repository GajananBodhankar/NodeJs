console.log(10);
setTimeout(()=>{
    console.log(20)
},0)

new Promise((res,rej)=>{
    console.log(30)
    res()
})
console.log(40)


// let obj = {
//     age: 20
// }

// Object.defineProperty(obj, "age", {
//     enumerable: false,
//     configurable: false,
//     writable: false
// })
// obj.age = 33;

// console.log(obj.age)