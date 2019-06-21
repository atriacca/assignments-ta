// const arr = [3, 5, 2, 8, 1]
// findLargest = []
// const largest = function() {
//     for (let i = 0; i < 5; i++) {
//         if (arr[i] > findLargest) {
//             findLargest = arr[i]
//         }
//     } 
//     console.log(findLargest)
// }

// largest() // => 8

const findLargest = []
function largest() {
    for (i = 0; i < 5; i++) {
        if (largest[i] > findLargest) {
            findLargest = largest[i]
        }
    } 
    console.log(findLargest)
}

largest([3, 5, 2, 8, 1]) // => 8