// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(arr) {
    return arr.filter(item => item > 5)
  }
  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
  
  var numbers = [12,4,56,27];
  numbers.filter(function(number){
      return number >= 25;
  })
  // => [56, 27]
  
  // Given an array of numbers, return a new array that only includes the even numbers.
  function evensOnly(arr) {
      return arr.filter(item => item % 2 == 0)
    }
    // test
    console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
  
  // Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
  function fiveCharactersOrFewerOnly(arr) {
      return arr.filter(item => item.length <= 5)
    }
    console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
  
  // Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
  function peopleWhoBelongToTheIlluminati(arr){
      return arr.filter(e => e.member === true)
    }
    // test
    console.log(peopleWhoBelongToTheIlluminati([
        {
            name: "Angelina Jolie",
            member: true
        },
        {
            name: "Eric Jones",
            member: false
        },
        {
            name: "Paris Hilton",
            member: true
        },
        {
            name: "Kayne West",
            member: false
        },
        {
            name: "Bob Ziroll",
            member: true
        }
    ]));
    
    
    