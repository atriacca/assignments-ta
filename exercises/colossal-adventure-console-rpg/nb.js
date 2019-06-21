const ask = require('readline-sync')
// if separate files: const { walk } = require('gameFunctions.js')
/////////////////
// Global variables
const player = {
    name: "",
    health: 100,
    inventory: inventory,
    attack: function(){
        return Math.floor(Math.random() * 25)
}
}
// const enemy = {
//     type: "",
//     health: 100,
//     weapon: weapon

// }
// function Enemy(type, health, power, weapon){
//     this.type = type,
//     this.health = health,
//     this.power = power,
//     this.weapon = weapon
// }
// function createEnemy(){
//     const randomNum = Math.floor(Math.random() * 3)
//     if(randomNum === 0){
//         return new Enemy("ogre", 50, 50, "hammer")
//     } else if(randomNum === 0){
//         return new Enemy("troll", 70, 30, "knife")
//     } else if(randomNum === 0){
//         return new Enemy("beast", 30, 70, "axe")
//     }
// }

let gameOver = false;
// choices = ["Walk", "Run", "Fight", "print stats"]

function combat(enemy){
    console.log(`${enemy.name}; health: ${enemy.health} --- ${player.name}; health: ${player.health}`)
    while(escaped=false){
        const combatOption = readline.keyInSelect(["Fight", "RUN"], "What would you like to do?")
        if(combatOption ===0){
            if(player.toHit() > 5){
                console.log (`You successfully attack ${enemy.name}`)
                const attackPower = player.attackPower()
                enemy.health -= attackPower
                console.log(`You deal ${attackPower} damage to ${enemy.name}`)
            } else {
                console.log(`Your attack misses ${enemy.name}.`)
            }
        } else if (combatOption ===1){
            flee()
        }
        if (enemy.health <= 0) {
            enemyDies ()
        }
        if (player.health <= 0) {
            playerDies ()
        }
    }
 }
 
 function flee(){
    console.log(`You look for the fastest way to escape!`)
    let fleeChance = Math.floor(Math.random() * 2)
    if (fleeChance === 0){
        console.log(`You failed to escape!`)
    } else {console.log('You run away from the enemy!')
    escaped = true
    }
 }
/////////////////
// Game functions 
function walk() {
            console.log(`You've chosen to walk, but an enemy spotted you and is attacking!`)
}

/////////////////
// Game
while(!gameOver) {
    console.log('Welcome to the Your Worst Nightmare video game!!');
    player.name = ask.question(`May I get you name please?`)
    console.log(`Hello ${player.name}! In this game your character will be prompted for what to do next. Your character will encounter monsters who will try to kill you if you don't kill them first. Most prompts will have you choose to walk, run or fight. You may also select print to see your vital statistics.`)
    let fightOrRun = ask.question(`Would you like to fight or run? Please enter "f" to fight or any other key to run. `);
    const doNext = ask.question('What do you want to do now?. You may enter "w" to walk, "r" to run or "print" to see your vital statistics.');
    // nextMove()
    const userAnswer1 = ask.keyInSelect(options, "What would you like to do? ")


    function flee(){
        console.log(`You look for the fastest way to escape!`)
        let fleeChance = Math.floor(Math.random() * 3)
        if (fleeChance === 0){
            console.log(`You failed to escape!`)
            backToCombat()
        } else {
            console.log('You run away from the enemy!')
            walk()
        }
    }
}


// if separate files: module.exports...

function flee(){
    console.log(`You look for the fastest way to escape!`)
    let fleeChance = Math.floor(Math.random() * 3)
    if (fleeChance === 0){
        console.log(`You failed to escape!`)
        backToCombat()
    } else {
        console.log('You run away from the enemy!')
        walk()
    }
}
/*
function combat(enemy){
   console.log(`${enemy.name}; health: ${enemy.health} --- ${player.name}; health: ${player.health}`)
   while(escaped=true || (enemy.health > 0 && player.health > 0)){

       const combatOption = readline.keyInSelect(["Fight", "RUN"], "What would you like to do?")
       if(combatOption ===0){
           if(player.toHit() > 5){
               console.log (`You successfully attack ${enemy.name}`)
               const attackPower = player.attackPower()
               enemy.health -= attackPower
               console.log(`You deal ${attackPower} damage to ${enemy.name}`)
           } else console.log(`Your attack misses ${enemy.name}.`)
       }if (combatOption ===1){
           flee()
       }
   }
}

function flee(){
   console.log(`You look for the fastest way to escape!`)
   let fleeChance = Math.floor(Math.random() * 2)
   if (fleeChance === 0){
       console.log(`You failed to escape!`)
   } else {console.log('You run away from the enemy!')
   escaped = true
   }
}
*/