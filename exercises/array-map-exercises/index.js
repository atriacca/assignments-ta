const petNames = peopleAndPets.map(item => item.pets.name)
console.log (petNames)

const petNames = peopleAndPets.map(item => item.pets[0].name)

const petNames = peopleAndPets.map(item => item.pets[0].name + "', '" + item.pets[1].name)

const petNames = peopleAndPets.map(item => item.pets[0].name)

const petNames = peopleAndPets.map(item => 
    for (i = 0; i = item.pets.length; i++) {
        return item.pets[i].name})
    

// Make an array of strings of the names saying whether or not they can go to The Matrix
// const cNames = celebs.map(celeb => celeb.age > 18 ? celeb.name + ' can go to The Matrix' : celeb.name + ' is under age!')
// console.log(cNames)

//   function doubleNumbers(arr){
//     return arr.map(item => item * 2)}
//   console.log(doubleNumbers([2, 5, 100]));

//   function doubleNumbers(arr){
//     return arr.map(function(item){
//         return item * 2;
//     })
//   }