/* Implement all of the listed String Methods below using at least 3 unique Functions.
.concat()
.indexOf()
.lastIndexOf()
.match()
.replace()
.slice()
.split()
.toLowerCase()
.toUpperCase()
.substr()
*/
var fName = "John"
var lName = "Doe"
var fullName = fName.concat(" " + lName)
console.log(fullName)

var fName = "John"
var greeting = "Hello"
var personalGreeting = greeting.concat(" " + fName)
console.log(personalGreeting)

var pets = ["cat", "dog", "bird"]
var pet = pets.indexOf("dog")
console.log(pet)

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var number = numbers.indexOf(4)
console.log(number)

