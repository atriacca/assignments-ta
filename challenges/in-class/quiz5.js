import React from "react";
import Movie from "./Movie";
const App = ( ) => {

    const movies = [
        { title: "Black Panther", stars: 5 },
        { title: "Mission Impossible", stars: 4 },
        { title: "Gremlins", stars: 0.1 },
        { title: "Sleepless in Seattle", stars: 4 }
    ]

    const mappedMovies = movies.map(movie => {
        return (
            <Movie title={ movie.title } stars={ movie.stars } />
        )
    })
    
    return (
        <div>
            { mappedMovies }
        </div>
    )
}

export default App;

/*
1: How many <Movie /> components will be mapped out into { mappedMovies } ?

my answer: 4

2: Imagine you are now working inside of the <Movie /> component. What would you type inside of an <h1> tag to make the movie title appear on the DOM? ex: <h1> // your code </h1> *

my answer: <h1>props.title</h1>

3: Which of the following is a correct explanation of the rest (...) and the spread (...) operators. (Check all that apply) *

a. The Rest operator turns objects into arrays, and the Spread operator turns arrays into objects.
b. The Spread operator is used as a function parameter so you can pass in any amount of arguments.
c. The Rest operator is used as a function parameter so you can pass in any amount of arguments.
d. The Rest operator is for gathering contents into an array.

my answer: b

Consider the following Object:
const person = {
       name: "Mr. Meeseeks",
       age: "Unknown",
       galaxy: 38022,
       tvShow: "Rick and Morty"
}
4: Given the object above, how would you use ES6 object destructuring to get access to just the name and age information? 

my answer: const { name, age } = person

Here is a reduce function pre-ES6:
var sum = arr.reduce(function(final, num){
    return final += num
}, 0)
5: Rewrite this same reduce using ES6 syntax. (Hint: it should only take up one line).

my answer: see twosum.js

Here is a map( ) in ES6 that is supposed to check the numbers in the array and add 10 to it if it's less than or equal to 10, or subtract 10 if it's greater than 10:
const arr = [ 2, 5, 3, 3, 35, 38 ];
const addSub10 = arr.map( num => {
    if(num <= 10){
         num += 10
     } else {
         num -= 10
     }

})

console.log( addSub10 )

6: What is missing in the map function above? 

my answer: defining num

7: What is the npm command to install and save the prop types module so that it shows up in your dependencies in the package.json file? 

my answer: npm i proptypes

Consider the following function:
function myFunc(...items){
      let myArr = items;
      return myArr;
}
console.log(myFunc(1, 2, 3, 4, 5))

8: What will this function return? 
a. "1" "2" "3" "4" "5"
b. [ 1, 2, 3, 4, 5 ]
c. [ 12345 ]
d. [ "12345"]

my answer: b

Use the following component for the next 2 questions:
import React from 'react';
const App = ( ) => {
    return (
            <h1>Name: { props.name } </h1>
            <p>Age: { props.age } </p>
    )
}

9: What is missing from this <App /> component? ( Select all that apply ); 

a. import ReactDOM from "react-dom"
b. export default App;
c. the props parameter
d. import App from "./App";
e. multiple JSX elements being returned without a wrapper.

my answer: b, c and e

10: Rewrite the <App /> component above adding in all the missing pieces. ( Feel free to open a code editor to write this, and then copy your answer below ).

my answer: see App.js

*/


https://randomuser.me/api/?results=25&page=${num}&seed=practiceseed&inc=name,location,email,id,picture

https://randomuser.me/api/?results=25&page=1&seed=practiceseed&inc=name,location,email,id,picture