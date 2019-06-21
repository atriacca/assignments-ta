
// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
    return arr.map(function(item){
        return item * 2;
    })
}
console.log(doubleNumbers([2, 5, 100]));

function doubleNumbers(arr){
    return arr.map(item => item * 2)}
console.log(doubleNumbers([2, 5, 100]));

let nums = [2, 5, 100];
let doubleNumbersE = nums.map(function(arr) {
    return arr * 2;
})
console.log(doubleNumbersE); // [4, 10, 200]

// 2) Take an array of numbers and make them strings
function stringItUp(arr){
    return arr.toString()
}
console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
/*
3) Capitalize each of an array of names
function capitalizeNames(arr){
  // your code here
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
var arr = [1,2,3,4];

arr.map(function(item){
    return item + 1;
})

var arr = [1,2,3,4];

for ( var i = 0; i < arr.length; i++){
   arr[i] += 1;
}
*/
function fizzBuzz(){
    const numArr1 = []
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            numArr1.push("fizzbuzz")
        } else if (i % 5 === 0) {
            numArr1.push("buzz")
        } else if (i % 3 === 0) {
            numArr1.push("fizz")
        } else {
            numArr1.push(i)
        }
    }
    return numArr1
}
console.log(fizzBuzz())

// function fizzBuzz(){
//     const numArr = []
//     for (let i = 1; i <= 100; i++) {
//     numArr.push(i)
//     if (i % 15 === 0) {
//         return numArr.splice(numArr[i], 1, "fizzbuzz")
//     } else if (i % 5 === 0) {
//         return numArr.splice(numArr[i], 1, "buzz")
//     } else if (i % 3 === 0) {
//         return numArr.splice(numArr[i], 1, "fizz")
//     }
// }
// console.log(numArr)
// }
// console.log(fizzBuzz())
