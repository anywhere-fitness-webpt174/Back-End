const jwt = require('jsonwebtoken');
const secret = require('../secrets/index');

module.exports = (req, res, next) => {
    try {
        const token = req.header.authorization?.split(' ')[1];

        if(token) {
            jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
                if(err) {
                    console.error(err);
                    res.status(401).json({message: "invalid or missing credentials"});
                } else {
                    req.decodedToken = decodedToken;
                    next();
                };
            })
        } else {
            console.log(token);
            res.status(401).json({message: "invalid or missing credentials"});
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Error validating credentials"});
    };
};