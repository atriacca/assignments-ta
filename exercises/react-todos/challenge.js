// Write a function that takes in an array of numbers and finds the greatest of two adjacent numbers when multiplied together

function mult(arr) {
    let largest = 0
    for (let i = 0; i < arr.length - 1; i++){
        let currentSize = arr[i] * arr[i + 1]
        if(currentSize > largest){
            largest = currentSize
        }
    }
    return largest
}

console.log(mult([3, -6, 2, 1, 7, 3]))