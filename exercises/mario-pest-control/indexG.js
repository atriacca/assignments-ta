var numGoombas = document.marioForm.numGoombas
var numBobOmbs = document.marioForm.numBobOmbs
var numCheepCheeps = document.marioForm.numCheepCheeps

// =parseInt(goombas.value) * 5

// form.submit.addEventListener("submit", function(e){
document.addEventListener("submit", function(event){
    event.preventDefault()

var costGoombas = numGoombas.value * 5
var costBobOmbs = numBobOmbs.value * 7
var costCheepCheeps = numCheepCheeps.value * 11
var costTotal = costGoombas + costBobOmbs + costCheepCheeps

var pTag = document.createElement("p")
pTag.textContent = `The total cost of removing all varmits is ${costTotal} coins`
output.appendChild(pTag)
})