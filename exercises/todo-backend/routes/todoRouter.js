const express = require('express')
const todoRouter = express.Router()
const uuid = require("uuid/v4")

const todos = [
    {
        "name": "Clean deck",
        "description": "Vacuum and wipe down deck",
        "completed": false,
        "_id": uuid()
    },{
        "name": "Work on generator",
        "description": "Blow out dust, change oil, etc",
        "completed": false,
        "_id": uuid()
    },{
        "name": "Car",
        "description": "Clean interior of car",
        "completed": false,
        "_id": uuid()
    }
]

todoRouter.get("/search", (req, res) => {
    const { name, completed, _id } = req.query

    if(name && completed){

        const foundTodos = todos.filter(todo => {
        if(todo.completed === completed && todo.name === name){

                return todo
            }
        })
        console.log(foundTodos)

            res.send(foundTodos)

        } else if(req.query.completed){
            const foundTodos = todos.filter(todo => todo.completed === completed)
            // console.log(foundTodos)
            // console.log(todos)
            res.send(foundTodos)

        } else if(req.query.name){
            const foundTodos = todos.filter(todo => todo.name === name)
            res.send(foundTodos)
        }
})

todoRouter.route("/")
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuid()
        todos.push(newTodo)
        res.send(newTodo)
    })

todoRouter.route("/:_id")
    .get((req, res) => {
        const foundTodo = todos.find(todo => todo._id === req.params._id)
        console.log(foundTodo)
    })
    // .put()
    .delete((req, res) => {
        const foundTodo = todos.find(todo => todo._id === req.params._id)
        const updatedDB = todos.find(todo => todo._id !== req.params._id)
        todos = updatedDB
        res.send(`Successfully deleted ${foundTodo.name}.`)
    })

// SAME THING EXCEPT NOT COMBINING ENDPOINTS
// todoRouter.get("/", (req, res) => {
//     res.send(todos)
// })

// todoRouter.get("/:_id", (req, res) => {
//     const foundTodo = todos.find(todo => todo._id === req.params._id)
//     console.log(foundTodo)
// })

// todoRouter.post("/", (req, res) => {
//     const newTodo = req.body
//     newTodo._id = Math.random().toString()
//     todos.push(newTodo)
//     res.send(newTodo)
// })

// todoRouter.delete("/todos/:_id", (req, res) => {
//     const foundTodo = todos.find(todo => todo._id === req.params._id)
//     const updatedDB = todos.find(todo => todo._id !== req.params._id)
//     todos = updatedDB
//     res.send(`Successfully deleted ${foundTodo.name}.`)
// })

module.exports = todoRouter 