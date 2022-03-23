/* console.log("bármi"); */

let arr = ["apple", 0, "0", null, NaN, undefined, false, true, {}]

let result = arr.filter(item => item) //filter the thruthy values, can be good for data cleaning. param the current item, will put in a new array the truthy items

console.log(result);