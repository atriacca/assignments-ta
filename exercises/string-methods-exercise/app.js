function capilizeAndLowercase(str) {
    var up = str.toUpperCase()
        low = str.toLowerCase()
    console.log(up + low)
}
capilizeAndLowercase("HeLlO") // => "HELLOhello"

function halfLength(str) {
    var x = (str.length / 2)
    console.log (Math.floor(x))
}
halfLength('Hello World')

function returnFirstHalf(str) {
    var newStr = str.slice(0, (str.length / 2))
    console.log (newStr)
// or just: console.log (str.slice(0, (str.length / 2)))
}
returnFirstHalf("Hello") // => "He"
returnFirstHalf("Hello World") // => "Hello"

function capHalfAndLowerRest() {

}
capHalfAndLowerRest("Hello") // => "HEllo"
capHalfAndLowerRest("Hello World") // => "HELLO world"
/*

Make a function that takes a string and returns that string where the first half is capitalized, and the second half is 
lower cased. (If the string length is odd, capitalize the shorter of the first half.)

capilizeAndLowercase("Hello") // => "HEllo"
capilizeAndLowercase("Hello World") // => "HELLO world"
*/