// let response=require('./index1')

// console.log("Sum is ",response.add(10,20))
// console.log("product is ", response.prod(10,20))

let { add, prod } = require("./index1");

console.log("Sum is ", add(10, 20));
console.log("product is ", prod(10, 20));
