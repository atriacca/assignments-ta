////////////////////
// Global variables
const ask = require('readline-sync');

const options = ["flee", "walk", "fight"]
let gameOver = false

////////////////////
// Game functions 
function flee(){
    console.log(`Scaredy cat! You look for the fastest way to escape!`)
    let fleeChance = Math.floor(Math.random() * 3)
    if (fleeChance === 0){
        console.log(`Ha! You failed to escape! Back to combat for you, chicken!`)
        fight()
    } else {
        console.log(`You got away from the enemy!`)
        walk()
    }
}
function walk() {
    console.log(`You've chosen walk`)
}
function fight() {
    console.log(`You've chosen fight`)
}

////////////////////
// GAME
console.log('Hello! My name is Hal. We are going to test calling functions! ');
while (!gameOver){
    const answer = ask.keyInSelect(options, "What would you like to do? ")
    if (answer === 0) {
        console.log(`You've chosen option 1, flee`)
        flee()
    } else if (answer === 1){
        console.log(`You've chosen option 2, walk`)
        walk()
    } else if (answer === 2){
        console.log(`You've chosen option 3, fight`)
        fight()
    } else {
        console.log(`You've chosen option 0, CANCEL. Game over!`)
        gameOver = true
    }
}