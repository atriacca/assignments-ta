// // Given an array of strings, find the 3 adjacent elements with 
// // the longest combined length. Return them in the form of an array.

// function combined(arr){
//     let largest = 0
//     let result = []
//     for (let i = 0; i < arr.length - 2; i++){
//         let currentSize = arr[i].length + arr[i + 1].length + arr[i + 2].length
//         if(currentSize > largest){
//             largest = currentSize
//             result =  [arr[i], arr[i + 1], arr[i + 2]]
//         }
//     }
//     // return largest
// }
// console.log(combined(["this", "is", "an", "array"])) // ["is", "an", "array"]
// console.log(combined(["what", "is", "the", "longest", "combined"])) // ["the", "longest", "combined"]
// console.log(combined(["something", "is", "not", "right"])) // ["something", "is", "not"] 



const arr = ["1","2","3"]
if (typeof arr[0] !== Number) {
    
    arr[0] = Number(arr[0])
}

console.log(arr)
