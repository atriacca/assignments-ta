// 1. Write an if statement that prints 'is greater than' if 5 is greater than 3

// if (5 > 3) {
//     console.log ('is greater than')
// }

// var num1 = 5
// var num2 = 3
// if (num1 > num2) {
//     console.log (num1 + ' is greater than ' + num2)
// }


// 2. Write an if statement that prints 'is the length' if the length of 'cat' is 3

var word = 'cat'
if (word.length === 3) {
    console.log(word + `'s length is 3.`)
}

// 3. Write an if/else statement that checks if 'cat' is equal to 'dog' and prints, 'not the same' when they are not equal.

var pet1 = 'cat'
var pet2 = 'dog'
if (pet1 !== pet2) {
    console.log(pet1 + ' is not equal to ' + pet2)
}

// Bronze Medal
// 1. Using the below object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.

var person = {
  name: 'Bobby',
  age: 12
}
if (person.age >= 18) {
    console.log(person.name + ' is allowed to go to the movie.')
} else {
    console.log(person.name + ' is not allowed to go to the movie.')
}

// 2. Using that same object, only allow them into the movie if their name starts with 'B'
if (person.name.charAt(0) === 'B') {
    console.log(person.name + ' is allowed to go to the movie.')
} else {
    console.log(person.name + ' is not allowed to go to the movie.')
}

// 3. Using that same object, only allow them into the movie if their name starts with 'B' and they are older than 18.

if (person.age >= 18 && person.name.charAt(0) === 'B') {
    console.log(person.name + ' is allowed to go to the movie.')
} else {
    console.log(person.name + ' is not allowed to go to the movie.')
}

// Silver Medal

// 1. Write an if/else if/else statement that prints 'strict' if 1 strictly equals '1', prints 'loose' or 'abstract' if 1 equals '1' without type checking, and prints 'not equal at all' if it doesn't print the other stuff.
var item1 = 1
item2 = '1'
if (item1 === item2) {
    console.log('strict')
} else if (item1 == item2) {
    console.log('abstract')
} else {
    console.log('not equal at all')
}

// 2. Write an if statement that prints 'yes' if 1 is less than or equal to 2 AND (&&) 2 is equal to 4
if (1 <= 2 && 2 === 4) {
    console.log('yes')
}

// Gold Medal

// Gold may take some googling!

// 1. Write an if statement that checks to see if 'dog' is a string
var item = 'dog'
if (item === String(item)) {
    console.log(item + ' is a string - using String in if statement.')
}
if (item === item.toString()) {
    console.log(item + ' is a string - using toString in if statement.')
}
console.log(item + ' is a ' + typeof 'dog' + ' - using typeof.')
// 2. Write an if statement that checks to see if 'true' is a boolean
var booleanCheck = true
if (booleanCheck === Boolean(booleanCheck)) {
    console.log(booleanCheck + ' is a boolean.')
}

// 3. Write an if statement that checks to see if a variable has been defined or not
var variableName
if (variableName !== undefined) {
    console.log(variableName + ' is defined')
} else {
    console.log(variableName + ' is undefined')
}

// 4. Write an if statement asking if 's' greater than 12?
var comparison1 = 's'
comparison2 = 12
if (comparison1 > comparison2) {
    console.log(comparison1 + ' is greater than ' + comparison2)
} else {
    console.log(comparison1 + ' is not greater than ' + comparison2)
}
// 4a. My own extra credit...
if (comparison1 < comparison2) {
    console.log(comparison1 + ' is less than ' + comparison2)
} else {
    console.log(comparison1 + ' is not less than ' + comparison2)
}
if (comparison1 == comparison2) {
    console.log(comparison1 + ' is equal to ' + comparison2)
} else {
    console.log(comparison1 + ' is not equal to ' + comparison2)
}

// 5. Try it with a few more letters and a few numbers.
var comparison3 = 'a'
comparison4 = 1
if (comparison3 > comparison4) {
    console.log(comparison3 + ' is greater than ' + comparison4)
} else {
    console.log(comparison3 + ' is not greater than ' + comparison4)
}

// 6. Write a ternary statement that console.logs whether a number is odd or even. For example:

var myNum = 10;
oddOrEven = (myNum % 2) ? 'odd' : 'even'
console.log(myNum + " is an " + oddOrEven + " number.")

// (It should continue to work correctly even if myNum changes to a different number).

