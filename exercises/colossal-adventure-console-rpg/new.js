////////////////////
// Global variables
const ask = require('readline-sync');

const options = ["Walk", "Flee", "Fight", "See your vital stats"]
let enemy = []
let gameOver = false

const player = {
    name: "",
    health: 120,
    inventory: [],
    attack: function(){
        return Math.floor(Math.random() * 25)
    }
}
// const enemy = [{
//     type: "Ogre",
//     health: 55,
//     power: 20,
//     weapon: ["hammer"]
// },{
//     type: "Troll",
//     health: 60,
//     power: 15,
//     weapon: ["knife"]
// },{
//     type: "Beast",
//     health: 50,
//     power: 25,
//     weapon: ["axe"]
// }]
function Enemy(type, health, power, weapon){
    this.type = type,
    this.health = health,
    this.power = power,
    this.weapon = weapon
}
function createEnemy(){
    enemy.push(new Enemy("ogre", 55, 20, "hammer"))
    enemy.push(new Enemy("troll", 60, 15, "knife"))
    enemy.push(new Enemy("beast", 50, 25, "axe"))
}

// function createEnemy(enemy){
//     const randomNum = Math.floor(Math.random() * 3)
//     if(randomNum === 0){
//         return new Enemy("ogre", 55, 20, "hammer")
//     } else if(randomNum === 0){
//         return new Enemy("troll", 60, 15, "knife")
//     } else if(randomNum === 0){
//         return new Enemy("beast", 50, 25, "axe")
//     }
// }

////////////////////
// Game functions 
function flee(){
    console.log(`\nScaredy cat! \n\nYou look for the fastest way to escape!\n`)
    let fleeChance = Math.floor(Math.random() * 3)
    if (fleeChance === 0){
        console.log(`\nHa! You failed to escape! \n\nBack to combat for you, chicken!\n`)
        fight()
    } else {
        console.log(`\nYou got away from the enemy!\n`)
        walk()
    }
}
function walk() {
    console.log(`\nYou've chosen to walk.\n`)
    const randomNum = Math.floor(Math.random() * 3)
        if (randomNum === 0) {
            console.log(`\nYikes! \n\nA monster has spotted you and is attacking!\n`)
            fight()
    }
}
function fight(whichEnemy) {
    whichEnemy = Math.floor(Math.random() * 3)
    console.log(`\nYou're fighting the ${enemy[whichEnemy].type}.\n`)
    const playerDamage = Math.floor(Math.random() * enemy[whichEnemy].power)
    const enemyDamage = Math.floor(Math.random() * 20)
    player.health = player.health - playerDamage
    enemy[whichEnemy].health = enemy[whichEnemy].health - enemyDamage
    if (enemy[whichEnemy].health <= 0){
        enemyDies(whichEnemy)
    }
    if (player.health <= 0){
        playerDies()
    }
    console.log(`\nYour health is now at ${player.health} and the ${enemy[whichEnemy].type}'s health is now at ${enemy[whichEnemy].health}\n`)
}
function playerDies(){
    console.log(`\nYour character has sustained too much damage and died! \n\nGAME OVER! You lose! Try again if you dare!\n`)
    gameOver = true
}
function enemyDies(whichEnemy){
    player.inventory.push(enemy[whichEnemy].weapon)
    console.log(`\nYou inflicted so much damage on the ${enemy[whichEnemy].type} and you've killed it. \n\nTherefore, you claim its weapon, the ${enemy[whichEnemy].weapon}!\n`)
    console.log(`\nYou also WIN the game! \n\nYour character's health was ${player.health} units after the last battle and your final inventory contained one ${player.inventory}. \n\nGame over. \n\nPlease play again!\n`)
    gameOver = true
}
function vitals() {
    if (player.inventory.length < 1) {
        console.log(`\nYou've chosen to view your vital statistics.\n`)
        console.log(`\nYour health is currently at ${player.health} and your inventory of items is empty.\n`)
    } else {
        console.log(`\nYou've chosen to view your vital statistics. \n\nYour health is currently at ${player.health} and your inventory of items contains one ${player.inventory}.\n`)
    }
    for (i = 0; i < 3; i++){
        console.log(`\nThe ${enemy[i].type}'s health is now at ${enemy[i].health}.\n`)
    }
}

////////////////////
// GAME
console.log(`\nWelcome to the Your Worst Nightmare video game!!\n`);
player.name = ask.question(`\nWhat is your name?\n`)
console.log(`\nHello ${player.name}! \n\nIn this game your character will be prompted for what to do next. \n\nYour character will encounter monsters who will try to kill you if you don't kill them first. \n\nMost prompts will have you choose to walk, run or fight. \n\nYou may also select to view your vital statistics.\n`)
const answer = ask.keyInSelect(options, `What is your first move, ${player.name}? \n`)
if (answer === 0) {
    walk()
} else if (answer === 1){
    flee()
} else if (answer === 2){
    console.log(`\nYou've chosen to fight.\n`)
    fight()
} else if (answer === 3){
    vitals()
} else {
    console.log(`\nYou've chosen option 0, which is CANCEL. \n\nGame over!\n`)
    gameOver = true
}
createEnemy()
while (!gameOver){
    const answer = ask.keyInSelect(options, `What would you like to do now? \n`)
    if (answer === 0) {
        walk()
    } else if (answer === 1){
        flee()
    } else if (answer === 2){
        console.log(`\nYou've chosen to fight.\n`)
        fight()
    } else if (answer === 3){
        vitals()
    } else {
        console.log(`\nYou've chosen option 0, which is CANCEL. \n\nGame over!\n`)
        gameOver = true
    }
}