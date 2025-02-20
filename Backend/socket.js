const socketIo = require('socket.io');
const userModel = require('./models/user.model');
const captainModel = require('./models/captain.model');

let io;

function initializeSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);

        socket.on('join', async (data) => {
            const { userId, userType } = data;
            console.log(`User ${userId} joined as ${userType} with socket ID: ${socket.id}`);
        
            try {
                if (userType === 'user') {
                    await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
                } else if (userType === 'captain') {
                    await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
                }
                console.log(`Socket ID updated successfully for ${userType}: ${userId}`);
            } catch (error) {
                console.error(`Error updating socket ID for ${userType}:`, error);
            }
        });
        

        // Update captain's live location
        socket.on('update-location-captain', async (data) => {
            const { userId, location } = data;

            if (!location || !location.ltd || !location.lng) {
                return socket.emit('error', { message: 'Invalid location data' });
            }

            await captainModel.findByIdAndUpdate(userId, {
                location: {
                    ltd: location.ltd,
                    lng: location.lng
                }
            });
        });

        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    });
}

// Function to send ride request to nearby captains
const sendRideRequestToCaptains = async (rideDetails) => {
    try {
        if (!io) {
            console.log('Socket.io not initialized.');
            return;
        }

        // Find nearby available captains
        const captains = await captainModel.find({ status: 'active' });

        if (captains.length === 0) {
            console.log('No captains found nearby.');
            return;
        }

        // Send ride request to all captains
        captains.forEach((captain) => {
            if (captain.socketId) {
                io.to(captain.socketId).emit('newRideRequest', {
                    rideId: rideDetails._id,
                    pickup: rideDetails.pickup,
                    destination: rideDetails.destination,
                    fare: rideDetails.fare,
                    userId: rideDetails.user,
                });
            }
        });

        console.log(`Ride request sent to ${captains.length} captains.`);
    } catch (error) {
        console.error('Error sending ride request:', error);
    }
};

const sendMessageToSocketId = (socketId, messageObject) => {
    console.log(`Sending message to ${socketId}:`, messageObject);

    if (io) {
        io.to(socketId).emit(messageObject.event, messageObject.data);
        console.log(`Message sent successfully to ${socketId}`);
    } else {
        console.log('Socket.io not initialized.');
    }
};

    

module.exports = { initializeSocket, sendRideRequestToCaptains, sendMessageToSocketId};
