// const total = 0
// while(true){
//     total++
//     console.log(total)
// }
//Write a function using the .splice() and .split() methods to remove the name Albert from the following string and replace it with your own. Feel free to use other methods as well.
// const str = "Hello my name is Albert"
// const newStr = ""
// const arr = []
// const name = 'Albert'
// arr = str.split(name)
// arr.splice(1, 0, "Alan")
// console.log(arr)
// newStr = arr.toString()
// console.log(newStr)

// const newArr = []
// newName = ""
// newName = newStr.splice(0, 2, ",")
// console.log(newName)

const str = "Hello my name is Albert"
const x = ""
const arr = []
function newName(str) {
    const arr = str.split(" ")
    arr.splice(4, 0, "Alan")
    // console.log(x)
    return arr.join(" ")
}
newName()