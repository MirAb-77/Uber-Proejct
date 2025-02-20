const axios = require('axios');
const captainModel = require('../models/captain.model');

const mapService = {
    getAddressCoordinate: async (address) => {
        const apiKey = process.env.GOOGLE_MAPS_API;
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

        try {
            const response = await axios.get(url);
            if (response.data.status === 'OK') {
                const location = response.data.results[0].geometry.location;
                return {
                    ltd: location.lat,
                    lng: location.lng
                };
            } else {
                throw new Error('Unable to fetch coordinates');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    getDistanceTime: async (origin, destination) => {
        if (!origin || !destination) {
            throw new Error('Origin and destination are required');
        }

        const apiKey = process.env.GOOGLE_MAPS_API;
        const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

        try {
            const response = await axios.get(url);
            if (response.data.status === 'OK') {
                if (response.data.rows[0].elements[0].status === 'ZERO_RESULTS') {
                    throw new Error('No routes found');
                }
                return response.data.rows[0].elements[0];
            } else {
                throw new Error('Unable to fetch distance and time');
            }
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    getAutoCompleteSuggestions: async (input) => {
        if (!input) {
            throw new Error('Input is required');
        }

        const apiKey = process.env.GOOGLE_MAPS_API;
        const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

        try {
            const response = await axios.get(url);
            if (response.data.status === 'OK') {
                return response.data.predictions;
            } else {
                throw new Error('Unable to fetch suggestions');
            }
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    getCaptainsInTheRadius: async (lat, lng, radius) => {  // Rename ltd to lat for clarity
        const captains = await captainModel.find({
            location: {
                $geoWithin: {
                    $centerSphere: [[lng, lat], radius / 6371]  // Correct order: [longitude, latitude]
                }
            }
        });
    
        if (!captains.length) {
            console.warn(`⚠️ No captains found within ${radius} km of (${lat}, ${lng})`);
            return []; // Return empty array instead of null
        }
    
        console.log(`✅ Found ${captains.length} captains within ${radius} km.`);
        return captains;
    }
    
    
    
};

module.exports = mapService;
