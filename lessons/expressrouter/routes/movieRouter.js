const express = require('express')
const movieRouter = express.Router()
const uuid = require('uuid/v4')


// Movies collection - Fake Database
let movies = [
    { title: "Star wars, a new hope",      genre: "sci-fi/fantasy", _id: uuid() },
    { title: "Lord of the rings",          genre: "fantasy",        _id: uuid() },
    { title: "Bambi",                      genre: "fantasy",        _id: uuid() },
    { title: "Bambi II - bambi's revenge", genre: "fantasy/horror", _id: uuid() }
]


movieRouter.route("/")
    .get((req, res) => {
        res.send(movies)
    })
    .post((req, res) => {
        const newMovie = req.body
        newMovie._id = uuid()
        movies.push(newMovie)
        res.send(newMovie)
    })

movieRouter.route("/:_id")
    .get((req, res) => { 
        const foundMovie = movies.find(movie => movie._id === req.params._id)
        res.send(foundMovie)
    })
    .delete( (req, res) => {
        const foundMovie = movies.find(movie => movie._id === req.params._id)
        const updatedDB = movies.filter(movie => movie._id !== req.params._id)
        movies = updatedDB
        res.send(`Successfully deleted ${foundMovie.title}!`)
    })
    .put((req, res) => {
        const foundMovie = movies.find(movie => movie._id === req.params._id)
        const updateObj = req.body
        const updatedMovie = Object.assign(foundMovie, updateObj)
        const updatedDB = movies.map(movie => movie._id === req.params._id ? updatedMovie : movie)
        movies = updatedDB
        res.send(updatedMovie)
    })


// GET ALL REQUEST
// movieRouter.get("/", (req, res) => {
//     res.send(movies)
// })

// GET ONE REQUEST - with request parameters (req.params)
// movieRouter.get('/:_id', (req, res) => { 
//     const foundMovie = movies.find(movie => movie._id === req.params._id)
//     res.send(foundMovie)
// })  

// POST REQUEST - ADD ONE - INSERT ONE
// movieRouter.post("/", (req, res) => {
//     const newMovie = req.body
//     newMovie._id = uuid()
//     movies.push(newMovie)
//     res.send(newMovie)
// })

// DELETE REQUEST - DESTROY ONE
// movieRouter.delete("/:_id", (req, res) => {
//     const foundMovie = movies.find(movie => movie._id === req.params._id)
//     const updatedDB = movies.filter(movie => movie._id !== req.params._id)
//     movies = updatedDB
//     res.send(`Successfully deleted ${foundMovie.title}!`)
// })

// PUT REQUEST - UPDATE ONE
// movieRouter.put("/:_id", (req, res) => {
//     const foundMovie = movies.find(movie => movie._id === req.params._id)
//     const updateObj = req.body
//     const updatedMovie = Object.assign(foundMovie, updateObj)
//     const updatedDB = movies.map(movie => movie._id === req.params._id ? updatedMovie : movie)
//     movies = updatedDB
//     res.send(updatedMovie)
// })


module.exports = movieRouter