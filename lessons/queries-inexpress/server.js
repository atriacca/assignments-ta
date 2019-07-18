const express = require('express')
const app = express()
const uuid = require("uuid/v4")
const PORT = process.env.PORT || 7000


const rangers = [
    { weapon: "sword",        costumeColor: "pink",      animalForm: "T-rex",   _id: uuid()  },
    { weapon: "nun-chucks",   costumeColor: "beige",     animalForm: "hamster", _id: uuid()  },
    { weapon: "curling iron", costumeColor: "firebrick", animalForm: "sloth",   _id: uuid()  },
    { weapon: "words",        costumeColor: "pink",      animalForm: "T-rex",   _id: uuid()  }
]


app.use(express.json())  // req.body



app.get("/rangers", (req, res) => {
    res.send(rangers)
})

app.get("/rangers/search", (req, res) => {
    const { weapon, color } = req.query

    if(color && weapon){
        const foundRangers = rangers.filter(ranger => {
            if(ranger.costumeColor === color && ranger.weapon === weapon){
                return ranger
            }
        })
        res.send(foundRangers)
    } else if(req.query.color){
        const foundRangers = rangers.filter(ranger => ranger.costumeColor === color)
        res.send(foundRangers)

    } else if(req.query.weapon){
        const foundRangers = rangers.filter(ranger => ranger.weapon === weapon)
        res.send(foundRangers)
    }

})



app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`)
})



// Request Parameters ( req.params )
    // Fetching a singular resource from a database by its _id.
    // Syntax:  www.campingisgood.com/gear/tents/:_id

// Request Queries    ( req.query )
    // Giving the backend filtering criteria
    // Syntax: www.campingisgood.com/gear/tents?size=4&waterproof=true
    // req.query  
    // const queryObj = {
    //     size: 4,
    //     waterproof: true
    // }

 