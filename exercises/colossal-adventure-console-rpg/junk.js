// Write a function that takes a string, and returns a string with all duplicate letters removed:
newStr = ""
function removeDuplicates(str){
    for (i = 0; i < str.length; i++) {
        newStr = str.match()
        for (j = 0; j < str.length; j++) {
            if (str[i] !== str[j]){
                newStr = str.push(str[i]) 
            }
        }
}

console.log(removeDuplicates("bookkeeper larry")) //"bokepr lay"
