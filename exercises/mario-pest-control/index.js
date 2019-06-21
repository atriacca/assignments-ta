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

var h2Tag = document.createElement("h2")
h2Tag.textContent = `The total cost to remove all varmits as entered is ${costTotal} coins`
output.appendChild(h2Tag)
})

/*
(y.value + y.value + z.value)
        <output name="total" for="x.value" + "y.value" + "z.value"></output>total      coins

id="goombas
id="bobombscd
id="cheeps

var form = document.pestControl;

form.submit.addEventListener("click", function(e){
    e.preventDefault()

var costGoombas = numGoombas * 5;
var costBobOmbs = numBobOmbs * 7;
var costCheepCheeps = numCheepCheeps * 11;
var costTotal = costGoombas + costBobOmbs + costCheepCheeps;


//var costGoombas = form.numGoombas.value * 5;
//var costBobOmbs = form.numBobOmbs.value * 7;
//var costCheepCheeps = form.numCheepCheeps.value * 11;
//var costTotal = costGoombas + costBobOmbs + costCheepCheeps;

//console.log(costTotal);

alert(`
Qty of Goombas: ${form.numGoombas.value}
Qty of Bob-ombs: ${form.numBobOmbs.value}
Qty of Cheep-Cheeps: ${form.numCheepCheeps.value}
`)
*/