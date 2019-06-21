// Make an array of the names in h1s, and the ages in h2s

const readyToPutInTheDOM = [
    {
        name: "Angelina Jolie",
        age: 43
    },
    {
        name: "Eric Jones Jr",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 38
    },
    {
        name: "Kayne West",
        age: 41
    },
    {
        name: "Saint West",
        age: 3
    },
    {
        name: "Bob Ziroll",
        age: 33
    }
]; 
const DOMarr = readyToPutInTheDOM.map(item => item = '<h1>' +  item.name + '</h1>' + '<h2>' +  item.age + '</h2>')
console.log(DOMarr)

// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]


// Make an array of strings of the names saying whether or not they can go to The Matrix
const celebs = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]; 

const cNames = celebs.map(celeb => celeb.age > 18 ? celeb.name + ' can go to The Matrix' : celeb.name + ' is under age!')

console.log(cNames)


// Make an array of strings of the names
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

const celebs = [{
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]; 
// ES6:
const cNames = celebs.map(celeb => celeb.name)
console.log(cNames)
// ES5:
// const cNames = celebs.map(function(celeb){
//     return celeb.name;
// })
// console.log(cNames)


//   function doubleNumbers(arr){
//     return arr.map(item => item * 2)}
//   console.log(doubleNumbers([2, 5, 100]));

//   function doubleNumbers(arr){
//     return arr.map(function(item){
//         return item * 2;
//     })
//   }
//   console.log(doubleNumbers([2, 5, 100]));
   
//    let arr = [2, 5, 100];
//     let doubleNumbers = arr.map(function(item) {
//         return item * 2;
//     })
//   console.log(doubleNumbers); // [4, 10, 200]
  

//   function stringItUp(arr){
//     return arr.map(e => e.toString())}
//   console.log(stringItUp([2, 5, 100]));
  
//   var arr = [1,2,3,4,5];
//   var strArr = arr.map(function(e){
//     return e.toString()
//   });
//   console.log(strArr); //["1", "2", "3", "4", "5"] 


// let dwarves = ['Bifur', 'Bombur', 'Dwalin', 'Nori'];
// let nameLengths = dwarves.map(function(item, index, array){
//    return item.length;
// });
//    console.log(nameLengths);

// This does the same thing:

//    function nameLengths(dwarves){
//     return dwarves.map(item => item.length)}
//   console.log(nameLengths(['Bifur', 'Bombur', 'Dwalin', 'Nori']));

