
const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');
const mapService = require('../services/map.service');
const rideModel = require('../models/ride.model');
const { sendMessageToSocketId } = require('../socket');


module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, pickup, destination, vehicleType } = req.body;

    try {
        const ride = await rideService.createRide({ user: req.user._id, pickup, destination, vehicleType });
        res.status(201).json(ride);

        const pickupCoordinates = await mapService.getAddressCoordinate(pickup);
        if (!pickupCoordinates || !pickupCoordinates.lat || !pickupCoordinates.lng) {
            console.log("❌ Unable to retrieve coordinates for the pickup location.");
            return;
        }

        console.log("📍 Pickup Coordinates:", pickupCoordinates);

        const captainsInRadius = await mapService.getCaptainsInTheRadius(pickupCoordinates.lat, pickupCoordinates.lng, 5);
        if (!captainsInRadius || captainsInRadius.length === 0) {
            console.log("🚨 No captains found nearby.");
            return;
        }

        console.log(`🚖 Found ${captainsInRadius.length} captains nearby.`);

        const rideWithUser = await rideModel.findOne({ _id: ride._id }).populate('user');

        captainsInRadius.forEach(captain => {
            if (!captain.socketId) {
                console.log(`⚠️ Captain [${captain._id}] has no socketId, skipping.`);
                return;
            }

            console.log(`📩 Sending ride request to Captain [${captain._id}] at socket ID: ${captain.socketId}`);
            sendMessageToSocketId(captain.socketId, {
                event: 'new-ride',
                data: rideWithUser
            });
        });

    } catch (err) {
        console.error("🔥 Error in createRide:", err);
        return res.status(500).json({ message: "An unexpected error occurred while creating the ride." });
    }
};


module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;

    try {
        const fare = await rideService.getFare(pickup, destination);
        return res.status(200).json(fare);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}



module.exports.confirmRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId } = req.body;

    try {
        const ride = await rideService.confirmRide({ rideId, captain: req.captain });

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-confirmed',
            data: ride
        })

        return res.status(200).json(ride);
    } catch (err) {

        console.log(err);
        return res.status(500).json({ message: err.message });
    }
}
