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
// const enemy = {
//     type: "",
//     health: 100,
//     weapon: weapon
// }
function Enemy(type, health, power, weapon){
    this.type = type,
    this.health = health,
    this.power = power,
    this.weapon = weapon
}
function createEnemy(){
    const randomNum = Math.floor(Math.random() * 3)
    if(randomNum === 0){
        return new Enemy("ogre", 50, 50, "hammer")
    } else if(randomNum === 0){
        return new Enemy("troll", 70, 30, "knife")
    } else if(randomNum === 0){
        return new Enemy("beast", 30, 70, "axe")
    }
}

let gameOver = false
choices = ["Walk", "Run", "Fight", "View your stats"]


/////////////////
// Game functions 
function walk() {
    const randomNum = Math.floor(Math.random() * 3)
        if (randomNum === 0) {
            console.log(`You've chosen to walk, but an enemy spotted you and is attacking!`)
            // code for when enemy attacks...
            // random choice one of 3 enemies
            const currentEnemy = createEnemy()
            battleLoop(enemy)
    }
}

// function run(){
// }

// function fight(){
// }

// function playerAttack(){
// }

// function enemyAttack(){
// }

// function playerDies(){
// }

// function enemyDies(){
// }

function attack(enemy){
    while(player.health > 0 && enemy.health > 0) {
        const playerChoice = ask.keyInSelect(["fight", "run", "walk", `What would you like to do? `])
    }
}
function battleLoop(enemy){
    console.log("You've chosen to fight! It's time to bring all you've got!!")
    while(player.health > 0 && enemy.health > 0){
        const playerChoice = ask.keyInSelect(["fight", "run"], `What would you like to do?: `)
        if(playerChoice === 0){
            const enemyAttackPower = player.attack()
            enemy.health -= enemyAttackPower
            const playerAttackPower = enemy.attack()
            player.health -= playerAttackPower
            console.log(`You fought ${enemy.type} and you inflicted ${enemyAttackPower} units of damage!!! However, ${enemy.type} depleted your health by ${enemyAttackPower} units.`)
        }
    }
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

}


// if separate files: module.exports...