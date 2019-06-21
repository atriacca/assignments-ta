/*
I did it this way, converting to array
var str = "Hello";
var myArray = str.split("");
myNewArray = []

*/
for (i = 0; i < myArray.length; i++)
    if (myArray[i] === myArray[i].toUpperCase()) {
        myNewArray[i] = myArray[i].toLowerCase()
    } else {
        myNewArray[i] = myArray[i].toUpperCase()
    }
console.log(myNewArray)

// This is how Eric did it w/o converting to array 
function antiCaps(str){
    let finalString = "h"
    // enter a "for loop" over string
        if(str[i] === str[i].toUpperCase()){
            finalString += str[i].toLowerCase()
        }
        return finalString;
}
console.log(antiCaps('Hello'))
console.log(antiCaps('racEcar'))
console.log(antiCaps('bAnAnA'))

/*
Write a function called antiCaps, which accepts a string and manipulates it as follows.

Uppercase characters will become lowercase.
Lowercase characters will become uppercase.
antiCaps('Hello')  // hELLO
antiCaps('racEcar')  // RACeCAR
antiCaps('bAnAnA')  // BaNaNa
Hint
Here is a helper function that will return true if the letter is uppercase, and false if the letter is lowercase:

function isCaps(letter) {
  return letter === letter.toUpperCase();
}
Extra credit
Have the function return double letters if originally uppercase
Have the function return the letter and a symbol if originally lowercase.
*/