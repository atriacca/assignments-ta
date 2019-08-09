// function checkPalindrome(inputString) {
//     console.log(inputString === inputString.split().reverse().join())
// }

function checkPalindrome(inputString) {
    const arr = inputString = inputString.split("")
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[arr.length - (i + 1)]){
            console.log(false)
            return false
        }
    }
    console.log(true)
    return true
}

// 6 - 1 + 1 = 6
// 6 - (1 + 1) = 4

// with a for loop
// without

checkPalindrome("aabbaa") // => true
checkPalindrome("abac") // => false
checkPalindrome("a") // => true
checkPalindrome("az") // => false
checkPalindrome("racecar") // => true
checkPalindrome("hannah") // => true