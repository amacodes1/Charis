const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 4,
    },
    desc: {
        type: String,
        required: true,
        min: 6
    },
    price: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    categories: {
        type: Array,
        required: false,
    },
},
 {timestamps: true}
);

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product;