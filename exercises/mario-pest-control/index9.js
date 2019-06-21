var numGoombas = document.marioForm.numGoombas.value
var numBobOmbs = document.marioForm.numBobOmbs.value
var numCheepCheeps = document.marioForm.numCheepCheeps.value

// =parseInt(goombas.value) * 5

// form.submit.addEventListener("submit", function(e){
document.addEventListener("submit", function(event){
    event.preventDefault()

var costGoombas = numGoombas * 5
var costBobOmbs = numBobOmbs * 7
var costCheepCheeps = numCheepCheeps * 11
var costTotal = costGoombas + costBobOmbs + costCheepCheeps

console.log(numGoombas)

var h2Tag = document.createElement("h2")
h2Tag.textContent = `The total cost of removing all varmits is ${costTotal} coins`
list.appendChild(h2Tag)
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