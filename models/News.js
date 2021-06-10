//Require mongoose
const mongoose = require('mongoose');


// News schema
const NewsSchema = mongoose.Schema({
    // Define the properties of news
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

// Exports schemas
const News = mongoose.model("News", NewsSchema);
module.exports = News;