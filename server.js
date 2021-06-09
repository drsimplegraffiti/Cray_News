/* 
 * 1. Creating express server
 * 2. Connect to mongodb database
 * 3. Initialize express app
 * 4. Initialize express middleware
 * 5. Create a simple get request route (optional)
 * 6. Inject our routes
 * 7. Listen to our app connection
 */

//Require express
const express = require('express');

//ConnectDb function
const connectDB = require('./db');

//Require dotenv package that allows us use the environmental variables in .env
require('dotenv').config();
//Deconstruct and bring our PORT from the dotenv file
const { PORT } = process.env;

//Connect to db
connectDB();

//Initialize express app
const app = express();

//initialize Express middleware
app.use(express.json({ extended: false }));

//Create a basic express route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to CNN" });
});

//PORT
const port = process.env.PORT || PORT;


// listen to server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})