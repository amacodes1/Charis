const express = require("express");
const router = express.Router();
const Category = require("../models/categoryModel");

// CREATE CATEGORIES
const createCategories = async (req, res) => {
    const newCategory = new Category(req.body);
    try {
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    } catch (err) {
        res.status(500).json(err);
    }
};

// GET ALL CATEGORIES
const getAllCategories = async (req, res) => {
    try {
        const allCategories = await Category.find();
        res.status(200).json(allCategories);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { createCategories, getAllCategories};