function checkRole(desiredRole) {
    return function(req, res, next) {
        const realRole = req.decodedToken?.role;
        if(realRole === desiredRole) {
            next();
        } else {
            res.status(403).json({message: "Not authorized"});
        };
    };
};

module.exports = checkRole