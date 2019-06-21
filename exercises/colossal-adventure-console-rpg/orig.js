var ask = require('readline-sync');
// function Character (type, name, lifePower, inventory, attackPower) {
//     // use the "this" keyword to reference each object 
//     // that is created from this constructor
//     this.type = type;
//     this.name = name;
//     this.lifePower = lifePower;
//     this.inventory = inventory;
//     this.attackPower = attackPower;
// }
let player = {
//
    name: ask.question(`What is your name?`),
    lifePower: 100,
    inventory: []
}
let enemies = [
    {
    name: 'Banshee',
    lifePower: 100,
    attackPower: 10
},{
    name: 'Cyclops',
    lifePower: 80,
    attackPower: 15
},{
    name: 'Nudzig',
    lifePower: 90,
    attackPower: 30
}]
choices = ["Walk", "Run", "Fight", "print stats"]
console.log('Welcome to the Your Worst Nightmare video game!!');
console.log(`Hello ${player.name}! In this game your character will be prompted for what to do next. Your character will encounter monsters who will try to kill you if you don't kill them first. Most prompts will have you choose to walk, run or fight. You may also select print to see your vital statistics.`)
nextMove()
//`A monster, ${enemies.name}, has spotted you. 
function nextMove() {
    index = ask.keyInSelect(choices, 'What would you like to do now?');
    if (index === 0) 
        choseWalk();
    else if (index === 1) 
        choseRun();
    else if (index === 2) 
        choseFight();
    else if (index === 3) 
        printStats();
}

function choseWalk() {
    let escape = Math.floor(Math.random() * 4);
    if (escape < 3) {
        console.log(`You're now further into the forest.`)
        nextMove()
       // console.log(`However, ${enemies.name} wanted a second chance and returned to inflict some damage. Your Life Power is now ${player.lifePower}`)
    } else {
        let enemy = whichEnemy()
        let fightOrRun = ask.question(`Would you like to fight ${enemies.name} or run? Please enter "f" to fight or any other key to run. `);
        if (fightOrRun === 'f') {
            choseFight()
        } else {
            choseRun()
        }
    }
}
function choseRun() {
    let escape = Math.floor(Math.random() * 2);
    if (escape < 1) {
        console.log(`You've escaped without incurring any harm.`)
        attackBack()
        console.log(`Unfortunately, ${enemies.name} followed you and was able to inflict some minor damage before you got away. Your Life Power is now ${player.lifePower}.`)
    } else {
        console.log(`You escaped but you've absorbed some damage.`)
        player.lifePower = player.lifePower - enemies.attackPower
        console.log(`Your Life Power is now ${player.lifePower}.`)
        attackBack()
        console.log(`Unfortunately, ${enemies.name} came back for seconds and inflicted additional damage. Your Life Power is now ${player.lifePower}.`)
    } 
    nextMove()
}
function choseFight(enemy) {
    let playerFightDamage = Math.floor(Math.random() * 20); // enemies.attackPower
    let enemyFightDamage = Math.floor(Math.random() * 20);

    while (player.lifePower > 0 && enemies.lifePower > 0) {
        player.lifePower = player.lifePower - playerFightDamage
        enemies.lifePower = enemies.lifePower - enemyFightDamage
        if (player.lifePower < 0) {
            playerDied()
        } else {
            enemyDied()
        }
    }
    console.log(`You fought gallantly, but sustained some damage. Your Life Power is now ${player.lifePower}.`)
    attackBack()
    console.log(`Apparently ${enemies.name} wasn't done with you and came back to inflict more damage. Your Life Power is now ${player.lifePower}.`)
        if (enemies.lifePower < 0) {
        enemyDied()
        } else {
        console.log(`You've inflicted damage on ${enemies.name}. Its Life Power is now ${enemies.lifePower}.`)
        }
    nextMove()
}
function attackBack() {
    let playerDamage = Math.floor(Math.random() * 10);
    player.lifePower = player.lifePower - playerDamage
    if (player.lifePower < 0) {
        playerDied()
    }
    let enemyDamage = Math.floor(Math.random() * 10);
    enemies.lifePower = enemies.lifePower - enemyDamage
    if (enemies.lifePower < 0) {
        enemyDied(enemy)
    }
}
// function willEnemyAttack () {
//     let attack = (Math.random() * 3);
//     if (attack < 1) {
//         whichEnemy()
//     } else {
//         nextMove()
//     }
// }
function whichEnemy () {
    let enemyPicked = Math.floor(Math.random() * enemies.length);
    console.log(`You've been attacked by ${enemies[enemyPicked].name}.`)
    return enemies[enemyPicked]
}
function printStats() {
    console.log(`Your Life Power is currently ${player.lifePower} and your inventory includes ${player.inventory}.`)
    nextMove()
}
function playerDied() {
    console.log(`Sorry, ${player.name}, but you've sus3tained too much damage and DIED! Please play again.`)
}
function enemyDied(enemy) {
    player.lifePower = player.lifePower + 20;
    player.inventory = [...player.inventory, 'Magic Key'];
    
    console.log(`What a great warrior you are! You've killed ${enemies.name}! This means your Life Power has been increased by 20 points and a Magic Key has been added to your inventory. Your Life Power is now ${player.lifePower}.`);

    enemies = enemies.filter((item, index) => {
        if (item.name !== enemy.name) {
            return true
        } else {
            return false
        }
    })
}
// this does the same:
// enemies = enemies.filter((item, index) => {
//         return item.name !== enemy.name



// function attackPower() {
//     let power = Math.floor(Math.random() * 5);
//     if (power < 1) {

//     } else if (power < 2) {

//     } else if (power < 3) {

//     } else if (power < 4) {

//     } else {

//     }
// }
// console.log(`Great job, ${player.name}, you've killed ${enemy.name} and have won the game! How does it feel to have conquered Your Worst Nightmare? Please play again.`)
// function runOrFight() {
//     runOrFight = [run, fight