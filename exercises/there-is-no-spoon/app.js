var grill = {
    color: "black",
    location: "deck",
    size: "small",
    isGas: true,
    write: function() {
        console.log("There is a " + this.color + " grill that costs $" + this.price)
    }
}
var chair = {
    color: "green",
    location: "deck",
    hasCushions: true,
    legs: 4,
    write: function() {
        console.log("There is a " + this.color + " chair in the .")
    }
}
var table = {
    color: "white",
    location: "deck",
    material: "plastic",
    legs: 3,
    write: function() {
        console.log("There is a " + this.color + " table that costs $" + this.price)
    }
}
var plant = {
    color: "green",
    location: "deck",
    hasBlossoms: false,
    write: function() {
        console.log("There is a " + this.color + " plant.")
    }
}
var sofa = {
    color: "brown",
    location: "living room",
    material: "fabric",
    write: function() {
        console.log("There is a " + this.color + " plant.")
    }
}
var toolbox = {
    color: "red",
    contents: ["hammer", "wrench", "pliers", "screwdriver", "knife"],
    location: "den",
    write: function() {
        console.log("There is a " + this.color + " plant.")
    }
}
var drawer = {
    color: "white",
    contents: [ 
        {
        name: "pen",
        color: "blue",
        price: "$1.00"
        },{
        name: "pencil", 
        color: "black",
        },{
        name: "scissors", 
        color: "orange",
        },{
        name: "tape", 
        color: "clear",
        },
    ],
    location: "kitchen",
    write: function() {
        console.log("There is a " + this.color + " plant.")
    }
},
var phone = {
    manufacturer: "Apple",
    carrier: "Verizon",
    color: "silver",
    operatingSystem: "iOS",
    apps: [
        {
        name: "email", 
        creator: "Yahoo",
        size: "20 GB"
        },{
        name: "weather", 
        creator: "Weather.com",
        size: "5 GB"
        },{
        name: "maps", 
        creator: "Google",
        size: "10 GB"
        },{
        name: "messages",
        size: "10 GB"
        }
    ]
}
