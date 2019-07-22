const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Todo = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: true
    },
    imgUrl: {
        type: String,
        required: false // false is the default if not specified
    },
    price: Number,
    neededTools: {
        type: [String],
        default: []
    }
})
                            // Model Name    // Model Blueprint
module.exports = mongoose.model("Todo", Todo)