/* 
 * 1. Create a connection function for mongodb
 * 2. Start a local mongodb server connection
 */

// Require mongoose
const mongoose = require('mongoose');
//Require dotenv file
require('dotenv').config();
const { MONGO_URI } = process.env;

// Create the connection function using promises

// const connectDB = () => {
//     mongoose.connect(MONGO_URI, {
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false
//         })
//         .then(() => {
//             console.log('MongoDB connected...');

//             //seed data here
//         })
//         .catch((err) => {
//             console.error(err.message);

//             // Exit with failure
//             process.exit(1);

//         })
// }

// Async mongoose connection using async await
const connectDB = async() => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("MongoDB connected...");

        // Seed Data
    } catch (error) {
        console.error(err.message);

        // Exit with failure
        process.exit(1);

    }
}

module.exports = connectDB;