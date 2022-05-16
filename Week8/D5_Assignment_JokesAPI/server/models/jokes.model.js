// ------------------------------------------------Declarations
const mongoose = require('mongoose');
const JokeSchema = new mongoose.Schema({
    // _id: Number,
    setup: {
        type: String,
        required: [true, "Setup is required!"],
        minlength: [10, "Setup must be at least 10 characters long!"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required!"],
        minlength: [3, "Punchline must be at least 3 characters long!"]
    }
}, {timestamps: true})
const Joke = mongoose.model('joke', JokeSchema);

// ------------------------------------------------Export
module.exports = Joke;