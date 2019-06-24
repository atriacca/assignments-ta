var numGoombas = document.marioForm.numGoombas
var numBobOmbs = document.marioForm.numBobOmbs
var numCheepCheeps = document.marioForm.numCheepCheeps

document.addEventListener("submit", function(event){
    event.preventDefault()
// alert(`You've entered ${numGoombas.value} Goombas, ${numBobOmbs.value} Bob-ombs and ${numCheepCheeps.value} Cheep-cheeps.`)
alert(`
Qty of Goombas: ${numGoombas.value}
Qty of Bob-ombs: ${numBobOmbs.value}
Qty of Cheep-Cheeps: ${numCheepCheeps.value}
`)
// Syntax to round value to integer = parseInt(goombas.value) * 5

var costGoombas = numGoombas.value * 5
var costBobOmbs = numBobOmbs.value * 7
var costCheepCheeps = numCheepCheeps.value * 11
var costTotal = costGoombas + costBobOmbs + costCheepCheeps

// if (costTotal){
//     console.log("yes")
//     costTotal.value = ""
// } else {
//     console.log("no")
//     costTotal 
// }

// numGoombas.value = ""
// numBobOmbs.value = ""
// numCheepCheeps.value = ""

var h2Tag = document.createElement("h2")
h2Tag.textContent = `
The total cost to obliterate all varmits as entered is ${costTotal} coins
(${numGoombas.value} Goombas, 
${numBobOmbs.value} Bob-ombs and 
${numCheepCheeps.value} Cheep-cheeps)`
// console.log(document)
output.appendChild(h2Tag)
})
function refresh(){
    location.reload()
}
/*

*/