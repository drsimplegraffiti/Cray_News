const jwt = require('jsonwebtoken');
require('dotenv').config();
const { SECRET } = process.env;


exports.authenticateUser = (req, res, next) => {
    // Check if there is an authorization token
    if (!req.headers.authorization) {
        return res.status(401).json({ message: "authorization header required" })
    }
    let splittedHeader = req.headers.authorization.split(' ');
    if (splittedHeader[0] !== "Bearer") {
        return res.status(401).json({ message: "Authorization format is Bearer <token>" })
    }
    let token = splittedHeader[1];
    jwt.verify(token, SECRET, (err, decodedToken) => {
        if (err) return res.status(500).json({ err });
        if (!decodedToken) {
            return res.status(401).json({ message: "invalid authorization token, please login" })
        }
        console.log(decodedToken);
        req.user = decodedToken;
    })
    next();
}

exports.checkIfAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(401).json({ message: "this route is restricted to admin users only" })
    }
    return next()
}