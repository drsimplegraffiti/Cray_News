const express = require('express');
const connectDB = require('./db');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const { PORT } = process.env;
const newsRoutes = require('./routes/newsRoutes');
const authRoutes = require('./routes/authRoutes');

//Connect to db
connectDB();
const app = express();
app.use(express.json({ extended: false }));

const port = process.env.PORT || PORT;
const News = require('./models/News');
app.get('/', (req, res) => {
    res.json({ message: "Welcome to CNN" });
});

// News Routes
app.use('/auth', authRoutes);
app.use(newsRoutes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})