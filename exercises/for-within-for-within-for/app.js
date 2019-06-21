// Write a function that takes an array and a string as parameters. The first array will be an array of people's names, and the second array will be the alphabet. Using a for loop within a for loop, create and return array that looks like this:

function forception(){
    var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var caps = alphabet.toUpperCase()
    var capArray = []
    capArray = caps.split("")
    var newArray = []
        for (i = 0; i = capArray.length; i++) {
            people.splice(1, 0, capArray[i])
            for (j = 0; j = people.length; j++) {
                
            }
        }
    return people 
    console.log(forception())
}

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var newF = ["Lemon", "Kiwi"]
// function myFunction() {
//   fruits.splice(2, 0, newF);
//   return fruits
// }
// console.log(myFunction())

// }
/* 
array.splice(index, howmany, item1, ....., itemX)

Output: 
["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
Here's the array of names and the alphabet to get you started:

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
*/