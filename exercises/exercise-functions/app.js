// Write a function that accepts two numbers as parameters, and returns the sum.
function sum(num1, num2){
    return (num1 + num2)
}
console.log(sum(2, 3))

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function sum(num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
        return (num1 + " is the largest number.")
    } else if (num1 > num2 && num1 < num3) {
        return (num3 + " is the largest number.")
    } else if (num2 > num3) {
        return (num2 + " is the largest number.")
    } else {
        return (num3 + " is the largest number.")
    }
}
console.log(sum(33, 14, 79))
// another way...
function sum(num1, num2, num3){
    if (num1 > num2) {
        if (num1 > num3) {
            return (num1 + " is the largest number.")
        } else {
            return (num3 + " is the largest number.")
        }
    } else if (num2 > num3) {
        return (num2 + " is the largest number.")
    }
}
console.log(sum(72, 55, 32))

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd")
function oddEven(num) {
    if (num % 2 === 0) {
        return (num + " is an even number.")
    } else {
        return (num + " is an odd number.")
    }
}
console.log(oddEven(48))

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
var newString = ""
function str(string) {
    if (string.length <= 20) {
        return (string + string)
    } else {
        halfLength = (string.length / 2)
        newString = string.slice(0, halfLength)
        return (newString)
    }
}
console.log(str("Is this line more than 20 characters?"))

/* Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
The first numbers are:

1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

So if n were 6, the sum of 1+1+2+3+5+8 would be 20 */


// Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string. ( White spaces count as a letter )