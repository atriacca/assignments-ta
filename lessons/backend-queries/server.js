const express = require('express')
const app = express()
const uuid = require("uuid/v4")
const PORT = process.env.PORT || 7000

const powerRangers = [{
    weapon: "sword",
    color: "pink",
    animalForm: "T-Rex",
    _id: uuid()
},{
    weapon: "nun-chucks",
    color: "beige",
    animalForm: "hamster",
    _id: uuid()
},{
    weapon: "curling iron",
    color: "red",
    animalForm: "sloth",
    _id: uuid()
}]

app.use(express.json()) //req.body

app.get("/rangers", (req, res) => {
    res.send(rangers)
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})