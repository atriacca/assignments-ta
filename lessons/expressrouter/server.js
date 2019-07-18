const express = require('express')
const app = express()

// Middleware
app.use(express.json())

// Routes
// param1: Mount path (when to fire this middleware)
// param2: What file to use when the request hits this endpoint
app.use("/movies", require('./routes/movieRouter.js'))

// Examples of if our Database had multiple collections we needed routes for
// app.use("/users", require('./routes/userRouter.js'))
// app.use("/tv", require('./routes/tvRouter.js'))

app.listen(7000, () => {
    console.log(`Server is running on Port 7000`)
})
