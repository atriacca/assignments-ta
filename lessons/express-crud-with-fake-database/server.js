const express = require('express')
const app = express()



// Middleware that fires on every request
// It looks for a request object (POST, PUT), and turns
// it into 'req.body'
app.use(express.json())


// Routes
app.use("/movies", require('./routes/movieRouter.js'))

app.listen(7000, () => {
    console.log(`Server is running on Port 7000`)
})



// REST
    // REpresentational State Transfer
    // Endpoints should reprensent the state you are requesting

// RESTful endpoints
// base url:  www.campingisgood.com
// tents, gear (food, backpack, flashlight), clothing, sleeping bags, repellent\

// www.campingisgood.com/tents    // collection
// www.campingisgood.com/tents/1  // resource

// www.campingisgood.com/gear/backpacks/56
// www.campingisgood.com/gear/clothing/shoes
