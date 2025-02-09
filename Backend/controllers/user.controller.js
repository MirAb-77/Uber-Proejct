const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../models/blacklisttoken.model');


module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    const isUserAlready = await userModel.findOne({ email });
    if (isUserAlready) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // 🔹 Move hashing logic inside `userService.createUser`
    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password,  // Pass plain text password (user.service will hash it)
    });

    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
};


module.exports.loginUser = async (req, res, next) => {
    try {
        console.log("🔹 Login Attempt:", req.body);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("❌ Validation Errors:", errors.array());
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        const user = await userModel.findOne({ email }).select('+password');

        if (!user) {
            console.log(`❌ Login Failed: No user found with email ${email}`);
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        console.log(`🔍 User Found: ${email}`);
        console.log(`🔑 Stored Hashed Password: ${user.password}`);

        const isMatch = await user.comparePassword(password);
        console.log(`🔄 Password Match: ${isMatch ? "✅ Success" : "❌ Failed"}`);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = user.generateAuthToken();
        res.cookie('token', token);

        console.log(`✅ Login Successful: ${email}`);

        res.status(200).json({ token, user });

    } catch (error) {
        console.error("🚨 Login Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};


module.exports.getUserProfile = async (req, res, next) => {

    res.status(200).json(req.user);

}


module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];

    await blackListTokenModel.create({ token });

    res.status(200).json({ message: 'Logged out' });

}