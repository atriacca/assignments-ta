const express = require('express')
const app = express()

const todos = [
    {
        "name": "Clean deck",
        "description": "Vacuum and wipe down deck",
        "completed": false,
        "_id": "16"
    },{
        "name": "Work on generator",
        "description": "Blow out dust, change oil, etc",
        "completed": false,
        "_id": "17"
    }
]
/*
{
    "name": "The todo name",
    "description": "The description of the todo",
    "imageUrl": "http://www.myimage....",
    "completed": false,
    "_id": "23k4lh23h2"
}
{
    "name": "Clean deck",
    "description": "Vacuum and wipe down eckd"
    "completed": false
}
*/

app.get("/todos", (res, req) => {
    res.send(todos)
})

app.get("/todos/:_id", (res, req) => {
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    console.log(foundTodo)
})

app.post("/todos", (res, req) => {
    const newTodo = req.body
    newTodo._id = Math.random().toString()
    todos.push(newTodo)
    res.send(newTodo)
})

app.delete("/todos/:_id", (res, req) => {
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    const updatedDB = todos.find(todo => todo._id !== req.params._id)
    todos = updatedDB
    res.send(`Successfully deleted ${foundTodo.name}.`)
})

app.listen(7000, () => {
    console.log(`Server is running on port 7000`)
})