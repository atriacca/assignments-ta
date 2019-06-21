const readline = require("readline-sync")

// const answer = readline.question("What is your favorite color? \n")
// console.log("Your favorite color is " + answer)


// Ask the user for 2 numbers
    // return the sum of those 2 numbers to the user
        // const num1 = readline.question("Enter your first number: ")
        // const num2 = readline.question("Enter your second number: ")
        // console.log("The sum of " + num1 + " and " + num2 + " is " + (Number(num1) + Number(num2)))
        // console.log(`The sum of ${num1} and ${num2} is ${Number(num1) + Number(num2)}`)


    // Ask the user whether they would like to add, subtract, divide, or multiply
    // ask the user for 2 numbers

    const operation = readline.question("Would you like to 'add', 'subtract', 'multiply', or 'divide'?: ")
    const num1 = readline.question("Enter your first number: ")
    const num2 = readline.question("Enter your second number: ")

    if(operation === "add"){
        console.log(`The sum of your two numbers is: ${ add(num1, num2) }`)
    } else if(operation === "subtract"){

    } else if(operation === "multiply"){

    }


    function add(num1, num2){
        return Number(num1) + Number(num2)
    }