function reverseStr() {
    let input = "Hello World"
    let newString = ""
    for(i = input.length - 1; i >= 0; i--) {
        newString = newString.concat(input[i])
    }
    console.log(newString)
}
reverseStr()

// return input[i]
// if (input[i] === 0) break {
 // console.log(reverseStr())
 /*
 Make a function that takes a string and returns that string reversed.
Example

Input: "Hello World"
Output: "dlroW olleH"

let reverseStr = function(str) {
`
}
*/