var add = document.add
var subtract = document.subtract
var multiply = document.multiply

document.addEventListener("submit", function(event){
    event.preventDefault()
    var addNum1 = Number (add.input1.value)
    var addNum2 = Number (add.input2.value)
    add.input1.value = ""
    add.input2.value = ""

    function adding(num1, num2) {
        return num1 + num2
    }

    var pTag = document.createElement("p")
    pTag.textContent = addNum1 + " plus " + addNum2 + " equals " + adding(addNum1, addNum2)

    var list = document.getElementById("list")
    list.appendChild(pTag)
    // list.innerHTML = ""
})
document.addEventListener("submit", function(event){
    event.preventDefault()
    var subtractNum1 = Number (subtract.input1.value)
    var subtractNum2 = Number (subtract.input2.value)
    subtract.input1.value = ""
    subtract.input2.value = ""

    function subtracting(num1, num2) {
        return num1 - num2
    }

    var pTag = document.createElement("p")
    pTag.textContent = subtractNum1 + " minus " + subtractNum2 + " equals " + subtracting(subtractNum1, subtractNum2)

    var list = document.getElementById("list")
    list.appendChild(pTag)
    // list.innerHTML = ""
})
document.addEventListener("submit", function(event){
    event.preventDefault()
    var multiplyNum1 = Number (multiply.input1.value)
    var multiplyNum2 = Number (multiply.input2.value)
    multiply.input1.value = ""
    multiply.input2.value = ""

    function multiplying(num1, num2) {
        return num1 * num2
    }

    var pTag = document.createElement("p")
    pTag.textContent = multiplyNum1 + " multiplied by " + multiplyNum2 + " equals " + multiplying(multiplyNum1, multiplyNum2)

    var list = document.getElementById("list")
    list.appendChild(pTag)
    // list.innerHTML = ""
})
/*var subtractNum1 = document.subtract.input1.value
var subtractNum2 = document.subtract.input2.value
var multiplyNum1 = document.multiply.input1.value
var multiplyNum2 = document.multiply.input2.value

add
var subtracting = function(num1, num2) {
    return num1 - num2
}
var multiplying = function(num1, num2) {
    return num1 * num2
}

var num1 = document.input1.value
var num2 = document.input2.value

result = num1 + num2

You are going to create a simple calculator that can Add, Subtract, and Multiply.

Requirements:

You will have one section (<div>) for each math operation (so 3 sections) total
Each section has two inputs to take the first and second numbers
Each section will have a button to perform the operation
You will inject the result into the HTML (not an alert)
Your website will have 3 colors
Your website will have proper padding/spacing to lay things out nicely

    console.log(e.target.value)

*/