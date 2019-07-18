const express = require('express')
const movieRouter = express.Router()
const uuid = require("uuid/v4")

// Movies collection - Fake Database
let movies = [{ 
    title: "Star wars, a new hope",      
    genre: "sci-fi/fantasy", 
    _id: uuid() 
},{ 
    title: "Lord of the rings",          
    genre: "fantasy",        
    _id: uuid() 
},{ 
    title: "Bambi",                      
    genre: "fantasy",        
    _id: uuid() 
},{ 
    title: "Bambi II - bambi's revenge", 
    genre: "fantasy/horror", 
    _id: uuid() 
}]

// GET ALL REQUEST
movieRouter.get("/", (req, res) => {
    // Send the whole collection
    res.send(movies)
})

// GET ONE REQUEST - with request parameters (req.params)
movieRouter.get('/:_id', (req, res) => {
    // Find the movie by the _id sent by the user in req.params._id  
    const foundMovie = movies.find(movie => movie._id === req.params._id)
    // Send back the movie Object (Don't use filter, that would send an array)
    res.send(foundMovie)
})  

// POST REQUEST - ADD ONE - INSERT ONE
movieRouter.post("/", (req, res) => {
    // Grab the user's POST object (req.body)
    const newMovie = req.body
    // Add an _id to the object (just like MONGODB will)
    newMovie._id = Math.random().toString()
    // Add the new movie to the collection of movies 
    movies.push(newMovie)
    // Send back movie once it's been added to the DB
    res.send(newMovie)
})

// DELETE REQUEST - DESTROY ONE
movieRouter.delete("/:_id", (req, res) => {
    // Find the movie to delete so we can use its title in the send message
    const foundMovie = movies.find(movie => movie._id === req.params._id)
    // Filter over the DB and remove the movie with the _id === req.params._id
    const updatedDB = movies.filter(movie => movie._id !== req.params._id)
    // Update the DB (since this is a fake db)
    movies = updatedDB
    // Send back a response of some sort
    res.send(`Successfully deleted ${foundMovie.title}!`)
})

// PUT REQUEST - UPDATE ONE
movieRouter.put("/:_id", (req, res) => {
    // First, find the object to update
    const foundMovie = movies.find(movie => movie._id === req.params._id)
    // Save the update object from the user in a variable
    const updateObj = req.body
    // Update the object using Object.assign()
    const updatedMovie = Object.assign(foundMovie, updateObj)
    // Loop through DB and replace the outdated movie with the updated movie
    const updatedDB = movies.map(movie => movie._id === req.params._id ? updatedMovie : movie)
    // Overwrite DB (because we're using a fake db)
    movies =  updatedDB
    // Send back updated movie object to client
    res.send(updatedMovie)
})


module.exports = movieRouter