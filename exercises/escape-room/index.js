// w/o keyInSelect
var ask = require('readline-sync');
const gameOver = false

while (!gameOver){
    console.log('Hello! My name is Hal. We are going to play Escape Room! ');
    var name = ask.question(`What is your name? `);
    console.log(`Hello ${name}! In this game your character is locked in a room. In order to escape the room, your character needs to find a key in the room and then open the door. There's also a hole in the wall in the room. The game is over and your character will die if you put his or her hand in the hole before you open the door. You will also lose if you enter an unexpected value. You win if your character opens the door!`)
    console.log(`Your options are: 1. Put hand in hole, 2. Find the key, or 3. Open the door. You can't open the door unless you find the key first. Again, your character dies if you put your character's hand in the hole. Please enter a 1, 2 or 3.`)
    var do1 = ask.question('What would you like to do? Enter "1" to put your hand in hole, "2" to find the key, or "3" to open the door. You will also lose if you enter an unexpected value. Please enter a 1, 2 or 3.');
    if (do1 === 1) {
        console.log(`Hey, ${name}! You put your hand in the hole so your character just died! GAME OVER! You lose!`)
        let gameOver = true
        break
    } else if (do1 === 2) {
        console.log(`Nice job, ${name}, your character just found the key!`)
        var do2 = ask.question('What would you like to do next? Enter "1" to put your hand in hole, "2" to find the key, or "3" to try opening the door. You will also lose if you enter an unexpected value. Please enter a 1, 2 or 3.');
        if (do2 === 1) {
            console.log(`Hey, ${name}! Your character just died because you put your hand in the hole! GAME OVER! You lose!`)
            let gameOver = true
            break
        } else if (do2 === 2) {
            // console.log(`Hmmmm... Sorry, ${name}, but you selected to find the key that you've already found. Please try again and be sure.`)
            console.log(`Nice, ${name}! You've found the key.`)
            var do3 = ask.question('Now that you have the key. What would you like to do next? Enter "1" to put your hand in hole, "2" to find the key, or "3" to try opening the door. You will also lose if you enter an unexpected value. Please enter a 1, 2 or 3.');
            if (do3 === 1) {
                console.log(`Hey, ${name}! You put your hand in the hole so your character just died! GAME OVER! You lose!`)
                let gameOver = true
                break
            } else if (do3 === 2) {
                console.log(`Hey, ${name}! You selected "find the key" but you had already found it so your character died! GAME OVER! You lose!`)
                let gameOver = true
                break
            } else if (do3 === 3) {
                console.log(`Great work, ${name}! You selected "open the door" and since you had already found the key you WIN!!! Game over!`)
                let gameOver = true
                break
            } else {
                console.log(`Sorry, ${name}! You selected an unexpected option, which broke the game and killed your character died! GAME OVER! You lose!`)
                let gameOver = true
                break
            }
        } else if (do2 === 3) {
            console.log(`Yay! You win, ${name}! Your character just opened the locked door with the key. Please see Nate for your prize!`)
        } else {
            console.log(`Sorry, ${name}! You selected an unexpected option, which broke the game and killed your character died! GAME OVER! You lose!`)
            let gameOver = true
            break
        }
    } else if (do1 === 3) {
        console.log(`Sorry, ${name}, your character just tried to open the locked door without the key. Please try again!`)
    } else {
        console.log(`Sorry, ${name}! You selected an unexpected option, which broke the game and killed your character died! GAME OVER! You lose!`)
            let gameOver = true
            break
    }
}
/*
        console.log(`Yay! You win, ${name}! Your character just opened the locked door with the key. Please see Eric for your prize!`)
        } else if (do2 === 2) {
            console.log(`Hmmmm... Sorry, ${name}, but you selected to find the key that you've already found, which is unexpected so the game is over. You lose. You may play again if you wish.`)
        } else {
            console.log(`Sorry, ${name}! Your character just died! GAME OVER! You lose!`)
        }
} else if (do1 === 3) {
    console.log(`Sorry, ${name}, your character just tried to open the locked door without the key. Please try again!`)
} else {
    console.log(`Hey ${name}! Your character just died! GAME OVER! You lose!`)
}
*/