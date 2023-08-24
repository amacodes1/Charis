const express = require("express");
const router = express.Router();
const User = require ("../models/userModel");
const bcrypt = require("bcrypt");


// REGISTER
const registerControl = async (req, res) => {
    const {firstName, lastName, email, password} = req.body;

    try {
        // Check password length
        if (password.length < 5) {
            return res.status(400).json({
                success: false,
                msg: "sorry! Password cannot be less than 5 characters"
            });
        }

        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Find if User already exists
        const findUser = await User.findOne({email: email});
        if (findUser) {
            return res.status(400).json({
                success: false,
                msg: "User already exists"
            })
        }

        // Create new User
        const newUser = await User.create({ firstName, lastName, email, password: hashPassword });
        if (newUser) {
            return res.status(200).json({
                success: true,
                msg: "User created successfully",
            });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};


// LOGIN
const loginControl = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find if the user exists
        const findUser = await User.findOne({ email: email});
        if (!findUser) {
            return res.status(400).json({
                success: false,
                msg: "User not found",
            });
        }

        // Compare Password
        const validPassword = await bcrypt.compare(password, findUser.password);
        if (!validPassword) {
            return res.status(400).json({
                success: false,
                msg: "Password is incorrect",
            });
        }
        if (findUser && validPassword) {
            res.json({
                email: User?.email,
                firstName: User?.firstName,
                lastName: User?.lastName,
                token: generateToken(User?._id)
            });
        }

        res.status(200).json({
            success: true,
            msg: "Login successful"
        })

    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { registerControl, loginControl };