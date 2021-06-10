const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { SECRET } = process.env;
const expiry = 360000;


exports.registerNewUser = async(req, res) => {
    const {
        firstName,
        lastName,
        username,
        email,
        password
    } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({
                message: "User already exist, please signIn.",
            });
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const user = new User({
            firstName,
            lastName,
            username,
            email,
            password: hashPassword
        });

        const createdUser = await user.save();
        const token = await jwt.sign({ id: createdUser._id }, SECRET, {
            expiresIn: "2h",
        });
        return res.status(201).json({
            status: "success",
            data: {
                message: "User successfully created",
                token,
                userId: createdUser._id,
            },
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: error,
            data: {
                message: "Server Error",
            },
        });
    }
}