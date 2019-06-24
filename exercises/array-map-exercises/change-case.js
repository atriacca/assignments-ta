function antiCaps(str){
    let result = ""

    for(let i = 0; i < str.length; i++){
        // check each characters to see if it is uppercase or lowercase
        if(str[i] === str[i].toUpperCase()){
            result += str[i].toLowerCase()
        } else {
            result += str[i].toUpperCase()
        }
    }
    return result
}


console.log(antiCaps("Hello"))    // => hELLO
console.log(antiCaps('racEcar'))  // => RACeCAR
console.log(antiCaps('bAnAnA'))   // => BaNaNa