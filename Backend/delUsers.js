const mongoose = require('mongoose');
const userModel = require('./models/user.model'); // Adjust path if needed

const deleteUsers = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const result = await userModel.deleteMany({});
        console.log(`✅ Deleted ${result.deletedCount} users from the database`);

        mongoose.connection.close();
    } catch (error) {
        console.error("❌ Error deleting users:", error);
    }
};

deleteUsers();
// Run this file to delete all users from the database.