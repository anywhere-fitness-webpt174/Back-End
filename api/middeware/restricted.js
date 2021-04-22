const secret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');

const restricted = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if(token) {
            jwt.verify(token, secret, (err, decodedToken) => {
                if(err) {
                    res.status(401).json({message: "Token Required"});
                } else {
                    req.decodedToken = decodedToken;
                    next();
                };
            });
        } else {
            res.status(401).json({message: "Token Required"});
        };
    } catch (error) {
        res.status(500).json({message: "Invalid Token", ...error});
    };
};