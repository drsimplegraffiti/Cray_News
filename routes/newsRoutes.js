// Require express
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const News = require('../models/News');
const newsCtrl = require('../controllers/newsController');
const { authenticateUser, checkIfAdmin } = require('../middlewares/authentication');

router.get('/', (req, res) => {
    res.json({ message: "Welcome to CRAY NEWS NETWORK" });
});

//POST request to /api/news to create a new news
router.post('/api/news', authenticateUser, checkIfAdmin, newsCtrl.createNewNews)

// GET request to get all news
router.get('/api/news', authenticateUser, newsCtrl.fetchNews)

//GET single new by ID
router.get('/api/news/:id', authenticateUser, newsCtrl.fetchSingleNews)

//PUT request to update a single book
router.put('/api/news/:id', authenticateUser, newsCtrl.updateSingleNews)

// DELETE request to /api/nes:id to delete
router.delete('/api/news/:id', authenticateUser, newsCtrl.deleteSingleBook)

module.exports = router;