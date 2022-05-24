// ----------------------------------------------------------------Declarations
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name is required!"],
        minlength: [3, "User name must be at least 3 characters long!"]
    }
}, {timestamps: true})
const User = mongoose.model('User', UserSchema);


// ----------------------------------------------------------------Export
module.exports = User;