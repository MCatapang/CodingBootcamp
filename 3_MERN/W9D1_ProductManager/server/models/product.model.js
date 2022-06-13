// ------------------------------------------------Declarations
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product title is required!"]
    },
    price: {
        type: Number,
        required: [true, "Price is required!"],
        min: [1, "Product price must be at least be $1"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"]
    }
}, {timestamps: true})
const Product = mongoose.model('Product', ProductSchema);

// ------------------------------------------------Export
module.exports = Product;