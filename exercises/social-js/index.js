var skier = {
    name: "Ed",
    age: 44,
    favoriteResorts: [],
    skierFriends: [
        {
            name: "Joe",
            age: 39,
            favoriteResorts: [
                {
                    resortName: "Snowbird",
                    difficulty: "advanced"
                },
            ],
            skierFriends: [
                {
                name: "Anna",
                age: 34,
                favoriteResorts: [
                    {
                        resortName: "Solitude",
                        difficulty: "intermediate"
                    },
                ],
                skierFriends: []
                }
            ]
        }
    ],
    name: "Bill",
    age: 47,
    favoriteResorts: [],
    skierFriends: [
        {
            name: "Jim",
            age: 42,
            favoriteResorts: [],
            skierFriends: []
        }
    ],
    name: "Joan",
    age: 33,
    favoriteResorts: [
        {
            resortName: "Alta",
            difficulty: "expert"
        },
    ],
    skierFriends: [
        {
            name: "Alex",
            age: 50,
            favoriteResorts: []
        }
    ],
    name: "Brian",
    age: 52,
    favoriteResorts: [],
    skierFriends: [
        {
            name: "Tyler",
            age: 29,
            favoriteResorts: [],
            skierFriends: [
                {
                    name: "Eve",
                    age: 25,
                    favoriteResorts: [],
                    skierFriends: []
                }
            ]
        }
    ]
}
// skier.gender;
// skier.favoriteResorts.timesSkied;

skier.name.push("Tim"); 
// skier.skierFriends.push(["Paul", "Laura", "Mike"]);
console.log(skier.skierFriends);
//console.log(skier.name + ' is ' + skier.age + ' years old.')


/*
console.log(this.name + ' is' + this.age + ' years old.')
skier.favoriteResorts.timesSkied;

var mountainClimber = {
    name: "Bob",
    age: 31,
    favoriteClimbs: [],
    mountainClimbingFriends: [
        {
            name: "Sarah",
            age: 31,
            favoriteClimbs: [
                {
                    climbName: "Mount Everest",
                    difficulty: 10
                },
//                ... etc ...
            ]
        },
        {
            
        }
    ]
}
*/