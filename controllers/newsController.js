const News = require('../models/News');


exports.createNewNews = (req, res) => {
    News.create({
        // title: req.body.title,
        // snippet: req.body.snippet,
        // body: req.body.body
        ...req.body
    }, (err, theNewNews) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else {
            return res.status(200).json({ message: "new News created", theNewNews })
        }
    })
}


exports.fetchNews = (req, res) => {
    console.log({ user: req.user })
    let conditions = {};
    if (req.query.title) {
        conditions.title = req.query.title
    }
    //check req.query for filter
    News.find(conditions, (err, allNews) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else {
            return res.status(200).json({ allNews })
        }
    })
}

exports.fetchSingleNews = (req, res) => {

    News.findById(req.params.id, (err, newNews) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else if (!newNews) {
            return res.status(404).json({ message: "News not found!" })
        } else {
            return res.status(200).json({ newNews })
        }
    })
}

exports.updateSingleNews = (req, res) => {
    News.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        snippet: req.body.snippet,
        body: req.body.body
    }, (err, newNews) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else if (!newNews) {
            return res.status(404).json({ message: "News not found" })
        } else {
            newNews.save((err, savedBok) => {
                if (err) {
                    return res.status(400).json({ message: err })
                } else {
                    return res.status(200).json({ message: "News updated successfully", data: savedBok })
                }
            })
        }
    })
}

exports.deleteSingleBook = (req, res) => {
    News.findByIdAndDelete(req.params.id, (err, newNews) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else if (!newNews) {
            return res.status(404).json({ message: "News not found " })
        } else {
            return res.status(200).json({ message: "News deleted successfully" })
        }
    })
}