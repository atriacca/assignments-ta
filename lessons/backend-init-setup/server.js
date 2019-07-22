const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000

// Middleware
app.use(express.json()) //req.body
app.use(morgan('dev')) 

// DB connections
mongoose.connect("mongodb://localhost:27017/drinks",
    {
        useNewUrlParser: true,
        useFindAndModified: false,
        useCreateIndex: true
    })
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log(err))

app.use("/drinks", require('./routes/drinkRouter.js'))

// Global error handler
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})