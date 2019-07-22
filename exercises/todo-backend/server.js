const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000

// Middleware
app.use(express.json()) //req.body
// app.use(morgan('dev'))

mongoose.connect("mongodb://localhost:27017/todosdb",
    {
        useNewUrlParser: true,
        useFindAndModified: false,
        useCreateIndex: true
    })
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log(err))

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