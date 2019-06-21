// function Character (type, name, lifePower, inventory, attackPower) {
//     // use the "this" keyword to reference each object 
//     // that is created from this constructor
//     this.type = type;
//     this.name = name;
//     this.lifePower = lifePower;
//     this.inventory = inventory;
//     this.attackPower = attackPower;
// }
const player = {
    // name: 'default',
    lifePower: 100,
    inventory: []
}
enemy = [{
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
const ask = require('readline-sync');
console.log('Welcome to the Your Worst Nightmare video game!!');
const name = ask.question(`What is your name?`);
//player.name.push(name);
console.log(`Hello ${player.name}! In this game your character will be prompted for what to do next. Your character will encounter monsters who will try to kill you.`)

const firstMove = ask.question('Please enter a "w" to walk and start the game.');
if (firstMove == 'w') {
    willEnemyAttack()
    const runOrFight = ask.question(`A monster, ${enemy.name}, has spotted you. Would you like to Fight or Run? Please enter "f" to fight or "r" to run.`);
    if (runOrFight == f) {
        choseFight()
    } else if (runOrFight == r) {
        choseRun()
    } else {
        printStats()
    }
} else if (firstMove == 'Print' || 'print') {
    printStats()
} else {
    console.log('An unexpected response was entered.');
}
nextMove()
function nextMove() {
    const doNext = ask.question('What do you want to do now?. You may enter "w" to walk, "r" to run or "print" to see your vital statistics.');
    if (doNext == 'w') {
        choseWalk()
//    } else if (doNext == 'f') {
//        choseFight()
    } else if (doNext == 'r') {
        choseRun()
    } else {
        printStats()
    }
    nextMove()
}

function choseWalk() {
    let escape = Math.reduce(Math.random() * 4);
    if (escape < 3) {
        console.log(`You've escaped without incurring any harm.`)
        attackBack()
//        player.lifePower = player.lifePower - randomDamage
        console.log(`However, ${enemy.name} wanted a second chance and returned to inflict some damage. Your Life Power is now ${player.lifePower}`)
    } else {
        console.log(`You've died - COOL DEATH MSG`)
    }
    nextMove()
}
function choseRun() {
    let escape = Math.reduce(Math.random() * 2);
    if (escape < 1) {
        console.log(`You've escaped without incurring any harm.`)
        attackBack()
        player.lifePower = player.lifePower - randomDamage
        console.log(`Unfortunately, ${enemy.name} followed you and was able to inflict some minor damage before you got away. Your Life Power is now ${player.lifePower}`)
    } else {
        console.log(`You escaped but you've absorbed some damage.`)
        player.lifePower = player.lifePower - enemy.attackPower
        console.log(`Your Life Power is now ${player.lifePower}`)
        attackBack()
        player.lifePower = player.lifePower - randomDamage
        console.log(`Unfortunately, ${enemy.name} came back for seconds and inflicted additional damage. Your Life Power is now ${player.lifePower}`)
    } 
    nextMove()
}
function choseFight() {
    let playerFightDamage = Math.reduce(Math.random() * enemy.attackPower);
    let enemyFightDamage = Math.reduce(Math.random() * 20);
        player.lifePower = player.lifePower - playerFightDamage
        enemy.lifePower = enemy.lifePower - enemyFightDamage
        console.log(`You fought gallantly, but sustained some damage. Your Life Power is now ${player.lifePower}`)
        attackBack()
        console.log(`Apparently ${enemy.name} wasn't done with you and came back to inflict more damage. Your Life Power is now ${player.lifePower}`)
            if (enemy.lifePower < 0) {
                player.lifePower = player.lifePower + 20
                player.inventory.push('Magic Key')
                console.log(`What a great warrior you are! You've killed ${enemy.name}! This means your Life Power has been increased by 50 points and a Magic Key has been added to your inventory. Your Life Power is now ${player.lifePower}`)
            } else {
            console.log(`You've inflicted damage on ${enemy.name}. Its Life Power is now ${enemy.lifePower}`)
            }
        nextMove()
        }
function attackBack() {
    let randomDamage = Math.reduce(Math.random() * 10);
}
function willEnemyAttack () {
    let attack = Math.reduce(Math.random() * 3);}
    if (attack < 1) {
        whoAttacks()
    } else {
        nextMove()
    }
function whoAttacks () {
    let whichEnemy = Math.reduce(Math.random() * 3);
    if (whichEnemy < 1) {
        console.log(`You've been attacked by ${enemy.name[0]}`)
    } else if (whichEnemy < 2) {
        console.log(`You've been attacked by ${enemy.name[1]}`)
    } else {
        console.log(`You've been attacked by ${enemy.name[2]}`)
    }
    choseFight()
}
function printStats() {
    console.log(`Your Life Power is currently ${player.lifePower} and your inventory includes ${player.inventory}`)
}

// function attackPower() {
//     let power = Math.reduce(Math.random() * 5);
//     if (power < 1) {

//     } else if (power < 2) {

//     } else if (power < 3) {

//     } else if (power < 4) {

//     } else {

//     }
// }

// function runOrFight() {
//     runOrFight = [run, fight]
// }