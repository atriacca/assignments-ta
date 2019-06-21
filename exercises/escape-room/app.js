// with keyInSelect
const ask = require('readline-sync');

const options = ["Put hand in hole", "Find the key", "Open the door"]
const gameOver = false

console.log('Hello! My name is Hal. We are going to play Escape Room! ');
const name = ask.question(`What is your name? `);
console.log(`Hello ${name}! In this game your character is locked in a room. In order to escape the room, your character needs to find a key in the room then open the door. There's also a hole in the wall in the room. The game is over and your character will die if you put his or her hand in the hole before you open the door. You will also lose if you enter an unexpected value. You win if your character opens the door!`)
while (!gameOver){
    const userAnswer1 = ask.keyInSelect(options, "What would you like to do? ")

    if (userAnswer1 == 0) {
        console.log(`Hey, ${name}! You chose to put your hand in the hole so your character just died! GAME OVER! You lose!`)
        const gameOver = true
        break
    } else if (userAnswer1 == 1) {
        console.log(`Nice job, ${name}, your character just found the key!`)
        const userAnswer2 = ask.keyInSelect(options, "What would you like to do now? ")
        if (userAnswer2 === 0) {
            console.log(`Hey, ${name}! You chose to put your hand in the hole so your character just died! GAME OVER! You lose!`)
            const gameOver = true
            break
        } else if (userAnswer2 === 1) {
            console.log(`Hmmmm... Sorry, ${name}, but you chose to find a key that you've already found. That isn't allowed so this game is over. Please play again.`)
            const gameOver = true
            break
        } else if (userAnswer2 === 2) {
            console.log(`Yay! You win, ${name}! Your character just opened the locked door with the key. Please see Nate for your prize!`)
            const gameOver = true
            break
        } else {
            console.log(`Hmmmm... Sorry, ${name}, but you submitted an unexpected entry. Please play again and be sure to only enter a 1, 2 or 3 next time!`)
            const gameOver = true
            break
        }
    } else if (userAnswer1 === 2) {
        console.log(`Sorry, ${name}, your character just tried to open the locked door without the key which ended this game. Please play again!`)
        const gameOver = true
        break
    } else {
        console.log(`Sorry, ${name}, but you've selected CANCEL which ended this game. Please play again.`)
        const gameOver = true
        break
    }
}