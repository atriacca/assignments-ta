// Preliminaries

// 1. Write a for loop that prints to the console the numbers 0 through 9.
for (var i = 0; i <= 9; i++) {
    // console.log(i)
}

// 2. Write a for loop that prints to the console 9 through 0.
for (var i = 9; i >= 0; i--) {
    // console.log(i)
}

// 3. Write a for loop that prints these fruits to the console.
// var fruit = ["banana", "orange", "apple", "kiwi"]
var fruit = ["banana", "orange", "apple", "kiwi"]
for (var i = 0; i < fruit.length; i++) {
    // console.log(fruit[i])
}

// Bronze Medal
// 1. Write a for loop that will push the numbers 0 through 9 to an array.

var myArray = [];
for (var i = 0; i < 10; i++) {
    myArray.push(i);
}
// console.log(myArray)

// 2. Write a for loop that prints to the console only even numbers 0 through 100.
for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        // console.log(i + ' is even')
    // } else {
    //     console.log(i + ' is odd')
    }
}

// 3. Write a for loop that will push every other fruit to an array.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
someFruit = []
for (var i = 0; i < fruit.length; i += 2) {
    someFruit.push(fruit[i])
}
console.log(someFruit)

// Silver Medal

// 1. Write a loop that will print out all the names of the people of the people array
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
]
for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name)
}

// 2. Write a loop that pushes the names into a names array, and the occupations into an occupations array.
var names = []
occupations = []
for (var i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name)
    occupations.push(peopleArray[i].occupation)
}
console.log("Contents of the names array: " + names)
console.log("Contents of the occupations array: " + occupations)
console.log(names)
console.log(occupations)

// 3. Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".
var someNames = []
someOccupations = []
for (var i = 0; i < peopleArray.length; i++) {
    if (i % 2 === 0) {
        someNames.push(peopleArray[i].name)
    } else {
        someOccupations.push(peopleArray[i].occupation)
    }
}
console.log(someNames)
console.log(someOccupations)
// Done another way...
var someNames2 = []
someOccupations2 = []
for (var i = 0; i < peopleArray.length; i+=2) {
    someNames2.push(peopleArray[i].name)
    someOccupations2.push(peopleArray[i+1].occupation)
}
console.log(someNames2)
console.log(someOccupations2)

// Gold Medal - Nesting
/*
var numberGrid = [
    [0, 1, 2]
    ['x', 'y', 'x']
    [1, 2, 3]
]
for (var i = 0; i < 3; i++) {
    for (var e = 0; e < 3; e++) {
        numberGrid[i][e] = "x"
}
console.log(numberGrid)
*/
// 1. Create an array that mimics a grid like the following using nested for loops: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
var numberGrid = []
for (var i = 0; i < 3; i++) {
    numberGrid.push([])
    for (var j = 0; j < 3; j++) {
        numberGrid[i].push(0)
    }
}
console.log(numberGrid)
// This uses two for loops, but not nested...
// var array = []
// arrayOfArrays = []
// for (var i = 0; i < 3; i++) {
//     array.push(0)
// }
// for (var j = 0; j < 3; j++) {
//     arrayOfArrays.push(array)
// }
// console.log(array)
// console.log(arrayOfArrays)

// 2. Create an array that mimics a grid like the following using nested for loops: [[0, 0, 0], [1, 1, 1], [2, 2, 2]]
var numberGrid1 = []
for (var i = 0; i < 3; i++) {
    numberGrid1.push([])
    for (var j = 0; j < 3; j++) {
        numberGrid1[i].push(i)
    }
}
console.log(numberGrid1)

// 3. Create an array that mimics a grid like the following using nested for loops: [[0, 1, 2], [0, 1, 2], [0, 1, 2]]
var numberGrid2 = []
for (var i = 0; i < 3; i++) {
    numberGrid2.push([])
    for (var j = 0; j < 3; j++) {
        numberGrid2[i].push(j)
    }
}
console.log(numberGrid2)

// 4. Given a grid like the previous ones, write a nested for loop that would change every number to an x.
// var grid = [["x", ...], 
//             ["x", ...], 
//             ["x",...], ...] 
var grid = [[0, 1, 2], [0, 1, 2], [0, 1, 2]]
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        grid[i][j] = "x"
    }
}
console.log(grid)