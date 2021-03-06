// Given an array of integers and a target integer, return the indices of 
// the FIRST two numbers which add up to the target.

// Assume the same element may not be used twice.

function twoSum(arr, target){
    newArr = []
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i+ 1 ; j < arr.length - 1; j++){
            if (arr[i] + arr[i + 1] === target) {
                newArr.push ([i], [i + 1])
            } else if (arr[i] + arr[i + 2] === target){
                newArr.push ([i], [i + 2])
            } else if (arr[i] + arr[i + 2] === target){
                newArr.push ([i], [i + 2])
            } else if (arr[i] + arr[i + 2] === target){
                newArr.push ([i], [i + 2])
            } else if (arr[i] + arr[i + 2] === target){
                newArr.push ([i], [i + 2])
            } else 
    }
}

console.log(twoSum([1, 2, 3], 4)) // [0, 2]   because 1 + 3 = 4
console.log(twoSum([5, 2, 8, 40, 5, 12, 6], 20)) // [2, 5]   because 8 + 12 = 20 

// Given an array of integers and a target integer, return the indices of 
// the FIRST two numbers which add up to the target.  The indices should
// be returned in the form of an array.

// Assume the same element may not be used twice.

function twoSum(arr, target){
    for(let i = 0; i < arr.length; i++){
        let leftOver = target - arr[i]
        const leftOverIndex = arr.indexOf(leftOver, i + 1)
        if(leftOverIndex !== -1){
            return [i, leftOverIndex]
        }
    }
    return false
}

function twoSum(arr, target){
    // compare all numbers to single number in arr
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [i, j]
            }
        }
    }
    return false
}


// console.log(twoSum([1, 2, 3], 4))                // [0, 2]   because 1 + 3 = 4
console.time()
console.log(twoSum([5, 2, 8, 40, 5, 12, 6], 20)) // [2, 5]   because 8 + 12 = 20 
console.timeEnd()
// console.log(twoSum([4, 6, 2, 4], 20))            //  false
// console.log(twoSum([10, 10, 5], 20))             //  [0, 0]

 
// Rewrite this same reduce using ES6 syntax. 
// (Hint: it should only take up one line)
var sum = arr.reduce(function(final, num){
    return final += num
}, 0)

const sum = arr.reduce(final, num) => final += num

const sum = (arr) => arr.reduce((final, num) => final += num, 0)


