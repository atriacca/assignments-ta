// Make a function that will return any given string into all caps followed by the same string all lowercase.

// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

function capilizeAndLowercase(str) {
    var up = str.toUpperCase()
        low = str.toLowerCase()
    // console.log(up + low)
}
capilizeAndLowercase("HeLlO") // => "HELLOhello"

function findMiddleIndex(str) {
    var x = (str.length / 2)
    // console.log (Math.floor(x))
}
findMiddleIndex("Hello") // => 2
findMiddleIndex("Hello World") // => 5

// Make a function that uses slice() and the other functions you've written to return the first half of the string
function returnFirstHalf(str) {
    var newStr = str.slice(0, (str.length / 2))
    // console.log (newStr)
// or just: console.log (str.slice(0, (str.length / 2)))
}
returnFirstHalf("Hello") // => "He"
returnFirstHalf("Hello World") // => "Hello"

// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)

function capHalfAndLowerRest(str) {
    var newStr1 = str.slice(0, (str.length / 2))
    var newStrUpper = newStr1.toUpperCase() 
    var newStr2 = str.slice((str.length / 2), (str.length))
    var newStrLower = newStr2.toLowerCase() 
    var newStrFull = newStrUpper.concat(newStrLower)
    // console.log (newStrFull)
}
capHalfAndLowerRest("Hello") // => "HEllo"
capHalfAndLowerRest("Hello World") // => "HELLO world"
function capHalfAndLowerRest1(str) {
    var newStr1 = str.slice(0, (str.length / 2))
    var newStr2 = str.slice((str.length / 2), (str.length))
    // console.log (newStr1.toUpperCase().concat(newStr2.toLowerCase()))
}
capHalfAndLowerRest1("Hello") // => "HEllo"
capHalfAndLowerRest1("Hello World") // => "HELLO world"
function capHalfAndLowerRest2(str) {
    var newStrUpper = str.slice(0, (str.length / 2)).toUpperCase();var newStrLower = str.slice((str.length / 2), (str.length)).toLowerCase() 
    var newStrFull = newStrUpper.concat(newStrLower)
    // console.log (newStrFull)
}
capHalfAndLowerRest2("Hello") // => "HEllo"
capHalfAndLowerRest2("Hello World") // => "HELLO world"

// Optional Code Challenge (This one is a step up in difficulty):
// Make a function that takes any string and capitalizes any character that follows a space.
function capitalize(str) {
    var words = str.split(' ')
    for(var i = 0 ; i < words.length ; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1)
    }
    var newStr = words.join(" ")
    console.log(newStr)
}
capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"