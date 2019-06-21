// Given an array of all your wishlist items, figure out how much it would cost to just buy 
// everything at once

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
// const cost = wishlist.reduce(function(sum, x){
//   return sum + x.price;
// }, 0)
// console.log(cost); // 227005

const cost = wishlist.reduce((sum, x) => sum + x.price, 0);
console.log(cost); // 227005



// Turn an array of voter objects into a count of how many people voted
// var voters = [
//   {name: 'Bob' , age: 30, voted: true},
//   {name: 'Jake' , age: 32, voted: true},
//   {name: 'Kate' , age: 25, voted: false},
//   {name: 'Sam' , age: 20, voted: false},
//   {name: 'Phil' , age: 21, voted: true},
//   {name: 'Ed' , age:55, voted: true},
//   {name: 'Tami' , age: 54, voted: true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];
// const totalVotes = voters.reduce(function(sum, x){
//   if(x.voted === true){
//     return sum + 1;
//   }
//   return sum
// }, 0)
// console.log(totalVotes)

// function totalVotes(arr)
// Turn an array of numbers into a total of all the numbers
// function total(arr) {
//   return arr.reduce((sum, x) => sum + x)
// }
// console.log(total([1,2,3])); // 6


// function total(arr) {
   
// }
// console.log(total([1,2,3])); // 6

// const numbers = [1,2,3]
// const total = numbers.reduce(function(sum, x){
//   return sum + x;
// }, 0)

// const numbers = [1,2,3]
// const total = numbers.reduce((sum, x) => sum + x)




// function stringItUp(arr){
//   return arr.map(e => e.toString())}
// console.log(stringItUp([2, 5, 100]));

// // Turn an array of numbers into a long string of all those numbers.
// function stringConcat(arr) {
//   let str = arr.map(e => e.toString())
//   let joined = arr.reduce(str)
//   return joined.join("")
// }
// console.log(stringConcat([1,2,3])); // "123"

// const numbers = [1,2,3] 
// const str = numbers.reduce(function(sum, x){
//   return sum + x
// }, "")
// console.log(str)

// const numbers = [1,2,3] 
// const str = numbers.reduce((sum, x) => sum + x, "")
// console.log(str)