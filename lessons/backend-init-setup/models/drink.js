const mongoose = require('mongoose')
const Schema = mongoose.Schema

const drinkSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    ingredients: {
        type: [String],
        default: []
    },
    hasAlcohol: {
        type: Boolean,
        default: true
    },
    description: {
        type: String,
        default: ""
    },
    imgUrl: {
        type: String,
        default: ""
    }
})
                            // Model Name    // Model Blueprint
module.exports = mongoose.model("Drink", drinkSchema)
