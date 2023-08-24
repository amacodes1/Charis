const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");


// CREATE NEW PRODUCT
const createNewProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product.email === req.body.email) {
            try {
                const updateProduct = await Product.findByIdAndUpdate(
                    req.params.id,
                    {$set: req.body},
                    {new: true}
                );
                res.status(200).json(updateProduct);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can update only your products!")
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

// DELETE PRODUCTS
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product.email === req.body.email) {
            try {
                const deleteProduct = await Product.findByIdAndDelete(post.id);
                res.status(200).json(deleteProduct);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can delete only your products!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

// GET PRODUCT
const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
};

// GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
    const email = req.query.user;
    const categoryName = req.query.category;
    try {
        let products;
        if (email) {
            products = await Product.find({ email: email });
        } else if (categoryName) {
            products = await Product.find({categories: {
                $in: [categoryName]
            }})
        } else {
            products = await Product.find();
        }
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { createNewProduct, updateProduct, deleteProduct, getProduct, getAllProducts };