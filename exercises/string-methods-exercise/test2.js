// function returnFirstHalf(str) {
//     var newStr = str.slice(0, (str.length / 2))
//     console.log (newStr)
//     caps =  newStr.toUpperCase
//     console.log (caps)
// }
// or just: console.log (str.slice(0, (str.length / 2)))
// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"

// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
function half() {
    var halfMe = "Hello class"
    var halfIs = Math.floor(halfMe.length / 2)
    console.log(halfIs)
    return halfIs
    }
half()

function halfString() {
    var halfMe = "Hello class"
    var halfIs = Math.floor(halfMe.length / 2)
    return halfIs
}
console.log(halfString())