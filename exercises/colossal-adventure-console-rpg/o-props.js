//const rs = const rs: typeof import('/users/vschool/Library/Caches/????')
//player = {3.3/node_modules/@types/readline-sync/index}
//rs:question('What is your name?'),
player = {
    name: '',
    health: 100
}
characters = [
    {
        name: 'Banshee',
        health: 100,
        attack: 10
    },    
    {
        name: 'Cyclops',
        health: 80,
        attack: 15
    },    
    {
        name: 'Nudzig',
        health: 90,
        attack: 30
    },
]
// MISSING LINE something like: function Character(name, health, attack, reward) {
constructor(props) {
    this.name = props.name
    this.health = props.health + Math.floor(Math.random() * 6)
    this.attack = props.attack + Math.floor(Math.random() * 3)
    this.reward = rewards[Math.floor(Math.random() * rewards.length + 1)]
}

const fight = (player, enemy) => {
    console.log(`You have encountered a ${enemy.name}, Health: ${enemy.health}, Attack: ${enemy.attack}`)
    while (player.health > 0 && enemy.health > 0)
    console.log(`Player's health: ${player.health}`)
    console.log(`Enemy's health: ${enemy.health}`)
    enemy.health = enemy.health - player.attack
    player.health = player.health - player.attack
}
console.log(player.health > 0 ? 'Congratulations, you won!' : 'Game Over. You lost!')
player.inventory = [...player.inventory, enemy.reward]


fight(player, new Enemy(characters[Math.floor(Math.random() * characters.length + 1)]))