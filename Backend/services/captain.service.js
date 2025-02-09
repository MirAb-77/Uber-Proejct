const bcrypt = require('bcrypt');
const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstname, lastname, email, password, color, plate, capacity, vehicleType
}) => {
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }

    // ✅ Hash password inside service
    const hashedPassword = await bcrypt.hash(password, 10);

    const captain = await captainModel.create({
        fullname: { firstname, lastname },
        email,
        password: hashedPassword,  // ✅ Store hashed password
        vehicle: { color, plate, capacity, vehicleType }
    });

    return captain;
};
