const express = require('express')
const app = express()
const PORT = process.env.PORT || 7000
// const morgan from 'morgan'

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

// Middleware
app.use(express.json()) //req.body
// app.use(morgan('dev'))

// Routes
// param1: Mount path (when to fire this middleware)
// param2: What file to use when the request hits this endpoint
app.use("/todos", require('./routes/todoRouter.js'))

// Examples of if our Database had multiple collections we needed routes for
// app.use("/users", require('./routes/userRouter.js'))
// app.use("/tv", require('./routes/tvRouter.js'))

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})