const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = process.env.PORT || 7000

app.use(express.JSON())
app.use(morgan('dev'))

app.listen(PORT, () => {
    console.log(`[+] Server is running on port ${PORT}`)
})