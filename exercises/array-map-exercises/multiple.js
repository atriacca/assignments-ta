// Warm up
// Create an array of pets' names.
// Display the pets' names in <li>s.
// Only display names of pets if their owners are older than 20.
// Only display pets who have nicknames.
// Create an array of everyone that has at least one dog and sort them by age.
// Extra Credit:
// Give Everyone's first pet a method that returns a <li> for each of the owner's pets.
// Give Everyone's first pet a method that calls the next person's first pet.
const peopleAndPets = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: [
            {
                name: "Alfred",
                type: "dog",
                nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
            },
            {
                name: "Charles",
                type: "cat",
                nickNames: ["Charley"]
            },
            {
                name: "Bark Obama",
                type: "dog",
                nickNames: ["Barack", "Mr. President"]
            },
            {
                name: "Christopher George Latore Wallace",
                type: "dog",
                nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
            }

        ]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: [
            {
                name: "Howard",
                type: "dog",
                nickNames: []
            },
            {
                name: "Bear",
                type: "dog",
                nickNames: []
            }
        ]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: [
            {
                name: "Bird Person",
                type: "bird",
                nickNames: ["Phoenixperson"]
            },
            {
                name: "Krombopulos Michael",
                type: "Gromflomite",
                nickNames: ["Assassin man"]
            },
            {
                name: "Squanchy",
                type: "Cat-person",
                nickNames: ["Squanch", "Smarf", "Thunder Cat"]
            }

        ]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 23,
        pets: [
            {
                name: "Morty Jr.",
                type: "Gazorpazorp",
                nickNames: ["Gwendolyn Jr."]
            },
            {
                name: "Snuffels",
                type: "dog",
                nickNames: ["Snowball"]
            }

        ]
    }
];
var i;
const petNames = peopleAndPets.map(item => 
    for (i = 0; i = item.pets.length; i++) {
    //  item.pets[i].name
    })
        
        console.log (petNames)


/*
peopleAndPets
Warm up: 
Create an array of pets' names.
Display the pets' names in <li>s.
Only display names of pets if their owners are older than 20.
Only display pets who have nicknames.
Create an array of everyone that has at least one dog and sort them by age.
Extra Credit:
Give Everyone's first pet a method that returns a <li> for each of the owner's pets.
Give Everyone's first pet a method that calls the next person's first pet.


const petNames = peopleAndPets.map(item => item.pets.name)
console.log (petNames)

const petNames = peopleAndPets.map(item => item.pets[0].name)
console.log (petNames)

const petNames = peopleAndPets.map(item => item.pets[0].name + "', '" + item.pets[1].name)
console.log (petNames)

const petNames = peopleAndPets.map(item => item.pets[0].name)
console.log (petNames)

const petNames = peopleAndPets.map(item => 
    for (i = 0; i = item.pets.length; i++) {
        return item.pets[i].name})
    
console.log (petNames)
*/