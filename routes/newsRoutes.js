// Require express
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const News = require('../models/News');
const newsCtrl = require('../controllers/newsController');

//POST request to /api/news to create a new news
router.post('/api/news', newsCtrl.createNewNews)

// GET request to get all news
router.get('/api/news', newsCtrl.fetchNews)

//GET single new by ID
router.get('/api/news/:id', newsCtrl.fetchSingleNews)

//PUT request to update a single book
router.put('/api/news/:id', newsCtrl.updateSingleNews)

// DELETE request to /api/nes:id to delete
router.delete('/api/news/:id', newsCtrl.deleteSingleBook)

module.exports = router;