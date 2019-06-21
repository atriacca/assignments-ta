// Make a function that takes any string and capitalizes any character that follows a space.

var capThis = "hey friends! practice practice practice!"
function capitalize(stringo) {
    var splitString = stringo.split(" ")
    for (i = 0; i < splitString.length; i++) {
        console.log(splitString[i].splice(0, 1, (splitString[i][0].toUpperCase())))
    }
}
console.log(capitalize(capThis))