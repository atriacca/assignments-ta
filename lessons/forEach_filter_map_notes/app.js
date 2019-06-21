// Higher order function
    // 1. Take a function as a parameter
    // 2. Return a new function

// Higher Order Array Methods
    // All of these methods automatically do a Loop over your array for you and give you access
    // to each item in the array, one at a time.

// .forEach()      =>     ALWAYS RETURN UNDEFINED
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var newArr = []

// for(let i = 0; i < arr.length; i++){
//     newArr.push(arr[i] * 10) 
// }

numbers.forEach((num) => {
    newArr.push(num * 10)
})
// console.log(newArr)


// .filter()  =>   Returns a New Array
const allNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = allNumbers.filter(function(num){
    if(num === 5){
        return num
    }
})

// ES6 Syntax
// const result = allNumbers.filter(num => {
//     if(num === 5){
//         return num
//     }
// })

// console.log(result)

// .map()  => Always returns a new Arr
                // The new array will always be the same size as the beginning array
const names = ["john", "joe", "sarah"]
const newNames = names.map(function(name){
    return name + "s"
})

// Same function in ES6 syntax
// const newNames = names.map(name => name + "s")


console.log(names)
console.log(newNames)