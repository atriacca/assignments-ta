isPalindrome("Star Rats!");  // true
isPalindrome("palindrome");  // false
isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");  // true

function isPalindrome(str){
    const noSpaces = str.replace(/ /g, "").toLowerCase()
    const backwards = noSpaces.split("").reverse().join("")
    if(noSpaces === backwards){
        return true
    } else {
        return false
    }
    // return noSpaces === backwards
}

function isPalindrome2(str){
    const noSpaces = str.replace(/ /g, "").toLowerCase()
    const backwards = noSpaces.split("").reverse().join("")
    return noSpaces === backwards

    // return str.replace(/ /g, "").toLowerCase() === str.replace(/ /g, "").toLowerCase().split("").reverse().join("")
}