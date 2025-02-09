const bcrypt = require('bcrypt');
const userModel = require('../models/user.model');

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
    if (!firstname || !email || !password) {
        throw new Error('All fields are required');
    }

    // ✅ Hash password here (Ensures single hashing)
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        fullname: { firstname, lastname },
        email,
        password: hashedPassword,  // ✅ Now, only one-time hashing
    });

    return user;
};
